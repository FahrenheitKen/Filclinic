export default function PhotoGrid({ photos, columns = 3 }) {
  const colClass = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  }

  return (
    <div className={`grid ${colClass[columns] || colClass[3]} gap-3 sm:gap-4`}>
      {photos.map((photo, i) => (
        <div
          key={i}
          className="group relative overflow-hidden rounded-xl aspect-[4/3] shadow-lg"
        >
          <img
            src={`/photos/${photo}`}
            alt={`Film Clinic production ${i + 1}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/30 transition-all duration-300" />
        </div>
      ))}
    </div>
  )
}
