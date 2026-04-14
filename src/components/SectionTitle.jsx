export default function SectionTitle({ subtitle, title, description, light = false }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12 px-2">
      {subtitle && (
        <span className={`text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] ${light ? 'text-gold-light' : 'text-gold'}`}>
          {subtitle}
        </span>
      )}
      <h2 className={`font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-3 md:mb-4 ${light ? 'text-white' : 'text-navy'}`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base sm:text-lg leading-relaxed ${light ? 'text-gray-300' : 'text-gray-600'}`}>
          {description}
        </p>
      )}
    </div>
  )
}
