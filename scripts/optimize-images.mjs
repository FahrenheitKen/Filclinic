import sharp from 'sharp'
import { readdir, readFile, writeFile, stat } from 'fs/promises'
import { join } from 'path'

const PHOTOS_DIR = join(import.meta.dirname, '..', 'public', 'photos')
const MAX_WIDTH = 1600
const JPEG_QUALITY = 80

async function collectImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  let images = []
  for (const entry of entries) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      images = images.concat(await collectImages(fullPath))
    } else if (/\.(jpe?g|png)$/i.test(entry.name)) {
      images.push(fullPath)
    }
  }
  return images
}

async function optimizeImages() {
  const imagePaths = await collectImages(PHOTOS_DIR)

  console.log(`Photos dir: ${PHOTOS_DIR}`)
  console.log(`Found ${imagePaths.length} images to optimize\n`)

  let totalBefore = 0
  let totalAfter = 0

  for (const filePath of imagePaths) {
    const label = filePath.replace(PHOTOS_DIR + '\\', '').replace(PHOTOS_DIR + '/', '')
    const inputBuffer = await readFile(filePath)
    const before = inputBuffer.length

    try {
      const metadata = await sharp(inputBuffer).metadata()

      let pipeline = sharp(inputBuffer).rotate()

      if (metadata.width > MAX_WIDTH) {
        pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true })
      }

      const outputBuffer = await pipeline
        .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
        .toBuffer()

      if (outputBuffer.length < before) {
        await writeFile(filePath, outputBuffer)
        totalBefore += before
        totalAfter += outputBuffer.length
        const saved = ((1 - outputBuffer.length / before) * 100).toFixed(1)
        console.log(`${label}: ${fmt(before)} -> ${fmt(outputBuffer.length)} (${saved}% saved)`)
      } else {
        totalBefore += before
        totalAfter += before
        console.log(`${label}: ${fmt(before)} (already optimal, skipped)`)
      }
    } catch (err) {
      console.error(`ERROR ${label}: ${err.message}`)
    }
  }

  console.log(`\n--- SUMMARY ---`)
  console.log(`Total before: ${fmt(totalBefore)}`)
  console.log(`Total after:  ${fmt(totalAfter)}`)
  console.log(`Saved:        ${fmt(totalBefore - totalAfter)} (${((1 - totalAfter / totalBefore) * 100).toFixed(1)}%)`)
}

function fmt(bytes) {
  if (bytes < 1024) return bytes + ' B'
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB'
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB'
}

optimizeImages()
