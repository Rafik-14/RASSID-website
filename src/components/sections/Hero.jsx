import { motion, useReducedMotion } from 'framer-motion'
import { Truck, CreditCard, Store, Wallet, ShieldCheck, RefreshCcw } from 'lucide-react'
import Button from '../ui/Button'
import PhoneFrame from '../ui/PhoneFrame'
import { useLang } from '../../contexts/LanguageContext'
import homeScreen from '../../assets/Home_screen.webp'
import livraisonScreen from '../../assets/Livraison_operation_screen.webp'

export default function Hero() {
  const { t } = useLang()
  const reduce = useReducedMotion()

  const pills = [
    { icon: Truck, label: t('hero.pill.livraisons') },
    { icon: CreditCard, label: t('hero.pill.paiements') },
    { icon: Store, label: t('hero.pill.magasins') },
    { icon: Wallet, label: t('hero.pill.creances') },
  ]

  // Orchestrated, line-by-line entrance — not a uniform fade.
  const rise = (delay) =>
    reduce
      ? { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.3, delay: delay * 0.4 } }
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
        }

  return (
    <section
      id="accueil"
      className="grain relative overflow-hidden bg-paper pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24"
    >
      {/* faint blueprint grid + lime bloom anchored to the device */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.5]"
        style={{
          backgroundImage:
            'linear-gradient(to right, oklch(0.2 0.01 160 / 0.04) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.2 0.01 160 / 0.04) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(circle at 70% 40%, #000 0%, transparent 75%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute end-[-6%] top-[12%] z-0 h-[42rem] w-[42rem] rounded-full opacity-60 blur-[120px]"
        style={{ background: 'radial-gradient(circle, oklch(0.86 0.23 132 / 0.22), transparent 60%)' }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:gap-8 lg:px-8">
        {/* ── Copy ─────────────────────────────────────────────────────── */}
        <div className="max-w-xl">
          <motion.div {...rise(0)} className="mb-6 inline-flex items-center gap-2.5 rounded-pill border border-line bg-paper-2/60 py-1.5 ps-2 pe-3.5 text-sm font-semibold text-ink">
            <span className="inline-flex items-center gap-1.5 rounded-pill bg-obsidian px-2.5 py-1 text-xs font-bold text-lime">
              <ShieldCheck size={13} strokeWidth={2.5} />
              {t('hero.tag')}
            </span>
            <span className="text-ink-2">{t('hero.kicker')}</span>
          </motion.div>

          <h1 className="font-display text-[clamp(2.6rem,7vw,5rem)] font-extrabold leading-[0.98] tracking-[-0.03em] text-ink text-balance">
            <motion.span {...rise(0.08)} className="block">{t('hero.h1a')}</motion.span>
            <motion.span {...rise(0.16)} className="block">
              {t('hero.h1b')}{' '}
              <span className="mark" style={{ '--mark': reduce ? 1 : undefined }}>
                <span>{t('hero.h1c')}</span>
              </span>
            </motion.span>
          </h1>

          <motion.p {...rise(0.26)} className="mt-6 max-w-md text-lg leading-relaxed text-ink-2">
            {t('hero.body')}
          </motion.p>

          <motion.div {...rise(0.34)} className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="#essai" showArrow className="px-6 py-3.5 text-base">{t('hero.cta')}</Button>
            <Button href="#fonctionnalites" variant="outline" className="px-6 py-3.5 text-base">
              {t('hero.cta2')}
            </Button>
          </motion.div>

          <motion.ul {...rise(0.42)} className="mt-9 flex flex-wrap gap-x-5 gap-y-2.5">
            {pills.map(({ icon: Icon, label }) => (
              <li key={label} className="inline-flex items-center gap-2 text-sm font-medium text-ink-2">
                <Icon size={15} className="text-lime-deep" strokeWidth={2.25} />
                {label}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* ── Device ───────────────────────────────────────────────────── */}
        <div className="relative mx-auto w-full max-w-[30rem] lg:mx-0 lg:ms-auto">
          <div className="relative flex items-end justify-center" dir="ltr">
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, x: -24, rotate: -3, y: 30 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, x: 0, rotate: -7, y: 24 }}
              transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-0 start-[6%] z-0 hidden w-[58%] sm:block"
              style={{ transformOrigin: 'bottom center' }}
            >
              <PhoneFrame src={livraisonScreen} alt={t('hero.frame2Alt')} dim />
            </motion.div>

            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 40, scale: 0.96 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-[72%] sm:w-[66%]"
            >
              <PhoneFrame src={homeScreen} alt={t('hero.frame1Alt')} glow />
            </motion.div>
          </div>

          {/* floating proof chips — differentiators the screenshot doesn't headline */}
          <motion.div
            {...rise(0.7)}
            className="absolute -top-1 end-0 z-20 hidden items-center gap-2.5 rounded-xl border border-line bg-paper/90 px-3 py-2.5 shadow-lift backdrop-blur-sm sm:flex"
          >
            <span className="relative inline-flex h-8 w-8 items-center justify-center rounded-lg bg-lime/15 text-lime-deep">
              <RefreshCcw size={15} strokeWidth={2.25} />
              <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 animate-pulse-ring rounded-full bg-lime ring-2 ring-paper" />
            </span>
            <div className="pe-1">
              <p className="text-[0.8rem] font-bold leading-tight text-ink">{t('hero.chip.synced')}</p>
              <p className="text-[0.66rem] leading-tight text-ink-3">{t('hero.chip.syncedSub')}</p>
            </div>
          </motion.div>
          <motion.div
            {...rise(0.8)}
            className="absolute bottom-6 start-0 z-20 hidden items-center gap-2.5 rounded-xl border border-line bg-paper/90 px-3 py-2.5 shadow-lift backdrop-blur-sm sm:flex"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-lime/15 text-lime-deep">
              <ShieldCheck size={15} strokeWidth={2.25} />
            </span>
            <div className="pe-1">
              <p className="text-[0.8rem] font-bold leading-tight text-ink">{t('hero.chip.signed')}</p>
              <p className="text-[0.66rem] leading-tight text-ink-3">{t('hero.chip.signedSub')}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
