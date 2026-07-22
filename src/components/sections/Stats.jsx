import { useScrollReveal } from '../../animations/useScrollReveal'
import { useLang } from '../../contexts/LanguageContext'

// Split each value into magnitude + unit so the unit can carry the lime accent.
function splitValue(v) {
  const m = v.match(/^([\d.,/]+)(.*)$/)
  if (!m) return { num: v, unit: '' }
  return { num: m[1], unit: m[2] }
}

export default function Stats() {
  const ref = useScrollReveal({ childSelector: '.stat-item', stagger: 0.1 })
  const { t } = useLang()

  const stats = [0, 1, 2, 3].map((i) => ({
    ...splitValue(t(`stats.${i}.value`)),
    label: t(`stats.${i}.label`),
  }))

  return (
    <section className="relative -mb-px bg-obsidian pt-20 lg:pt-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <p className="mb-10 font-display text-sm font-semibold text-mist-2">
          <span className="text-lime">—</span> {t('stats.title')}
        </p>
        <div ref={ref} className="grid grid-cols-2 gap-y-10 lg:grid-cols-4 lg:gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`stat-item lg:px-8 ${i !== 0 ? 'lg:border-s lg:border-hairline' : ''} ${
                i === 0 ? 'lg:ps-0' : ''
              }`}
            >
              <p className="tnum font-display text-[clamp(2.8rem,6vw,4.5rem)] font-extrabold leading-none tracking-[-0.03em] text-mist">
                {stat.num}
                <span className="text-lime">{stat.unit}</span>
              </p>
              <p className="mt-3 max-w-[14ch] text-sm leading-snug text-mist-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
