import sharp from 'sharp'
import { readdir, readFile, writeFile, stat } from 'fs/promises'
import { join } from 'path'

const PHOTOS_DIR = join(import.meta.dirname, '..', 'public', 'photos')
const MAX_WIDTH = 1600
const JPEG_QUALITY = 80

async function optimizeImages() {
  const files = await readdir(PHOTOS_DIR)
  const imageFiles = files.filter(f => /\.(jpe?g|png)$/i.test(f))

  console.log(`Photos dir: ${PHOTOS_DIR}`)
  console.log(`Found ${imageFiles.length} images to optimize\n`)

  let totalBefore = 0
  let totalAfter = 0

  for (const file of imageFiles) {
    const filePath = join(PHOTOS_DIR, file)
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
        console.log(`${file}: ${fmt(before)} -> ${fmt(outputBuffer.length)} (${saved}% saved)`)
      } else {
        totalBefore += before
        totalAfter += before
        console.log(`${file}: ${fmt(before)} (already optimal, skipped)`)
      }
    } catch (err) {
      console.error(`ERROR ${file}: ${err.message}`)
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
