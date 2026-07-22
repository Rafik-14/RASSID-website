import { useScrollReveal } from '../../animations/useScrollReveal'
import { useLang } from '../../contexts/LanguageContext'

export default function Testimonial() {
  const ref = useScrollReveal({ childSelector: '.reveal-item', stagger: 0.12 })
  const { t } = useLang()

  // The locale already wraps the quote in « » — strip them so the typography owns the marks.
  const quote = t('testimonial.quote').replace(/^«\s*/, '').replace(/\s*»$/, '')

  return (
    <section className="relative bg-paper-2 py-20 lg:py-28">
      <div ref={ref} className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        <p className="reveal-item mb-6 inline-flex items-center gap-2 text-sm font-semibold text-lime-deep">
          <span className="h-1.5 w-1.5 rounded-full bg-lime" />
          {t('testimonial.kicker')}
        </p>
        <span
          aria-hidden
          className="reveal-item block font-display text-7xl font-extrabold leading-none text-lime-deep"
        >
          “
        </span>
        <blockquote className="reveal-item -mt-6 font-display text-[clamp(1.6rem,3.6vw,2.9rem)] font-semibold leading-[1.18] tracking-[-0.02em] text-ink text-balance">
          {quote}
        </blockquote>
        <figcaption className="reveal-item mt-8 flex items-center gap-3">
          <span className="h-px w-10 bg-ink/30" />
          <span className="text-sm font-semibold text-ink-2">
            {t('testimonial.author').replace(/^—\s*/, '')}
          </span>
        </figcaption>
      </div>
    </section>
  )
}
