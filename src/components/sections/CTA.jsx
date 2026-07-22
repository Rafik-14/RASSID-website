import { Check } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import Button from '../ui/Button'
import PhoneFrame from '../ui/PhoneFrame'
import { useLang } from '../../contexts/LanguageContext'
import homeScreen from '../../assets/Home_screen.webp'

export default function CTA() {
  const { t } = useLang()
  const reduce = useReducedMotion()

  const points = [t('cta.p1'), t('cta.p2'), t('cta.p3')]

  return (
    <section id="essai" className="relative overflow-hidden bg-obsidian py-20 lg:py-28 scroll-mt-20">
      {/* lime bloom + blueprint grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            'linear-gradient(to right, oklch(1 0 0 / 0.04) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 0.04) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(circle at 30% 50%, #000, transparent 70%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute start-[-10%] top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full opacity-50 blur-[120px]"
        style={{ background: 'radial-gradient(circle, oklch(0.86 0.23 132 / 0.3), transparent 60%)' }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:px-8">
        <div className="max-w-xl">
          <h2 className="font-display text-[clamp(2.2rem,5.2vw,4rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-mist text-balance">
            {t('cta.heading')}
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-mist-2">{t('cta.body')}</p>

          <div className="mt-9">
            <Button href="#contact" showArrow className="px-7 py-4 text-base">{t('cta.button')}</Button>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {points.map((p) => (
              <li key={p} className="inline-flex items-center gap-2 text-sm font-medium text-mist-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-lime/20">
                  <Check size={12} strokeWidth={3} className="text-lime" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto w-full max-w-[18rem] lg:mx-0 lg:ms-auto"
          dir="ltr"
        >
          <PhoneFrame src={homeScreen} alt={t('hero.frame1Alt')} glow />
        </motion.div>
      </div>
    </section>
  )
}
