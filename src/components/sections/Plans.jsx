import { useState } from 'react'
import { Check, Sparkles } from 'lucide-react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import Button from '../ui/Button'
import { useLang } from '../../contexts/LanguageContext'

function getPlans(t) {
  return [
    {
      id: '1month',
      name: t('plans.1month.name'),
      price: t('plans.1month.price'),
      period: t('plans.1month.period'),
      badge: t('plans.1month.badge'),
      description: t('plans.1month.desc'),
      features: [1, 2, 3, 4, 5].map((n) => t(`plans.1month.f${n}`)),
      highlighted: true,
      cta: t('plans.1month.cta'),
      freeLabel: t('plans.1month.free'),
    },
    {
      id: '3months',
      name: t('plans.3months.name'),
      price: t('plans.3months.price'),
      period: t('plans.3months.period'),
      description: t('plans.3months.desc'),
      features: [1, 2, 3, 4, 5].map((n) => t(`plans.3months.f${n}`)),
      cta: t('plans.3months.cta'),
    },
    {
      id: '6months',
      name: t('plans.6months.name'),
      price: t('plans.6months.price'),
      period: t('plans.6months.period'),
      description: t('plans.6months.desc'),
      features: [1, 2, 3, 4, 5].map((n) => t(`plans.6months.f${n}`)),
      cta: t('plans.6months.cta'),
    },
  ]
}

function getAnnualPlan(t) {
  return {
    id: 'annual',
    name: t('plans.annual.name'),
    price: t('plans.annual.price'),
    oldPrice: t('plans.annual.oldPrice'),
    period: t('plans.annual.period'),
    badge: t('plans.annual.badge'),
    savings: t('plans.annual.savings'),
    description: t('plans.annual.desc'),
    features: [1, 2, 3, 4, 5].map((n) => t(`plans.annual.f${n}`)),
    cta: t('plans.annual.cta'),
    highlighted: true,
    wide: true,
  }
}

function PlanCard({ plan }) {
  const dark = plan.highlighted
  return (
    <div
      className={`relative flex h-full flex-col rounded-2xl p-7 ${
        dark
          ? 'bg-obsidian text-mist shadow-device ring-1 ring-lime/30'
          : 'border border-line bg-paper-2 text-ink shadow-lift'
      }`}
    >
      {plan.badge && (
        <div className="mb-5 inline-flex w-fit items-center gap-1.5 rounded-pill bg-lime px-3 py-1 text-xs font-bold text-ink">
          <Sparkles size={12} strokeWidth={2.5} />
          {plan.badge}
        </div>
      )}

      <h3 className={`font-display text-xl font-bold tracking-tight ${dark ? 'text-mist' : 'text-ink'}`}>
        {plan.name}
      </h3>

      <div className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-0">
        <span className={`tnum font-display text-3xl font-extrabold tracking-tight ${dark ? 'text-lime' : 'text-ink'}`}>
          {plan.price}
        </span>
        <span className={`text-sm font-medium ${dark ? 'text-mist-3' : 'text-ink-3'}`}>{plan.period}</span>
      </div>

      {plan.oldPrice && (
        <p className={`tnum mt-1 text-sm line-through ${dark ? 'text-mist-3' : 'text-ink-3'}`}>{plan.oldPrice}</p>
      )}
      {plan.savings && (
        <span className="mt-2 inline-flex w-fit rounded-pill bg-lime/15 px-3 py-1 text-xs font-semibold text-lime">
          {plan.savings}
        </span>
      )}
      {plan.freeLabel && (
        <span className="mt-2 inline-flex w-fit items-center gap-1.5 text-xs font-semibold text-lime">
          <span className="h-1.5 w-1.5 animate-pulse-ring rounded-full bg-lime" />
          {plan.freeLabel}
        </span>
      )}

      <p className={`mt-5 text-sm leading-relaxed ${dark ? 'text-mist-2' : 'text-ink-2'}`}>{plan.description}</p>

      <ul className="mt-6 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className={`flex items-start gap-2.5 text-sm ${dark ? 'text-mist-2' : 'text-ink-2'}`}>
            <span className={`mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${dark ? 'bg-lime/20' : 'bg-lime/15'}`}>
              <Check size={11} strokeWidth={3} className={dark ? 'text-lime' : 'text-lime-deep'} />
            </span>
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-7">
        <Button variant={dark ? 'primary' : 'outline'} showArrow={dark} className="w-full">
          {plan.cta}
        </Button>
      </div>
    </div>
  )
}

function BillingToggle({ billing, onChange, toggleShort, toggleAnnual, discountLabel }) {
  const isAnnual = billing === 'annual'
  return (
    <div className="mb-12 inline-flex items-center gap-1 rounded-pill border border-line bg-paper p-1">
      <button
        onClick={() => onChange('monthly')}
        className={`rounded-pill px-4 py-2 text-sm font-semibold transition-colors ${
          !isAnnual ? 'bg-ink text-paper' : 'text-ink-2 hover:text-ink'
        }`}
      >
        {toggleShort}
      </button>
      <button
        onClick={() => onChange('annual')}
        className={`inline-flex items-center gap-2 rounded-pill px-4 py-2 text-sm font-semibold transition-colors ${
          isAnnual ? 'bg-ink text-paper' : 'text-ink-2 hover:text-ink'
        }`}
      >
        {toggleAnnual}
        <span className={`rounded-pill px-2 py-0.5 text-xs ${isAnnual ? 'bg-lime text-ink' : 'bg-lime/15 text-lime-deep'}`}>
          {discountLabel}
        </span>
      </button>
    </div>
  )
}

export default function Plans() {
  const { t } = useLang()
  const reduce = useReducedMotion()
  const [billing, setBilling] = useState('monthly')

  const plans = getPlans(t)
  const annual = getAnnualPlan(t)
  const isAnnual = billing === 'annual'

  return (
    <section id="tarifs" className="relative bg-paper py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-display text-[clamp(2rem,4.6vw,3.6rem)] font-bold leading-[1.05] tracking-[-0.025em] text-ink text-balance">
            {t('plans.heading')}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-2">{t('plans.subtitle')}</p>
        </div>

        <div className="mt-12 flex justify-center">
          <BillingToggle
            billing={billing}
            onChange={setBilling}
            toggleShort={t('plans.toggle.short')}
            toggleAnnual={t('plans.toggle.annual')}
            discountLabel={t('plans.discount')}
          />
        </div>

        <AnimatePresence mode="wait">
          {isAnnual ? (
            <motion.div
              key="annual"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mx-auto max-w-xl"
            >
              <PlanCard plan={annual} />
            </motion.div>
          ) : (
            <motion.div
              key="monthly"
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-6 md:grid-cols-3"
            >
              {plans.map((plan) => (
                <div key={plan.id} className={plan.highlighted ? 'md:-mt-3 md:mb-3' : ''}>
                  <PlanCard plan={plan} />
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
