import { useState } from 'react'
import { Plus } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '../../contexts/LanguageContext'

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-line">
      <h3>
        <button
          className="group flex w-full items-center justify-between gap-6 py-5 text-start"
          onClick={onToggle}
          aria-expanded={isOpen}
        >
          <span className="font-display text-lg font-semibold tracking-tight text-ink transition-colors group-hover:text-lime-deep">
            {item.q}
          </span>
          <span
            className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ease-out-expo ${
              isOpen
                ? 'rotate-45 border-transparent bg-lime text-ink'
                : 'border-line text-ink-2 group-hover:rotate-90 group-hover:border-lime/50 group-hover:text-ink'
            }`}
          >
            <Plus size={17} strokeWidth={2.5} />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-[60ch] pb-6 text-[0.97rem] leading-relaxed text-ink-2">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const { t } = useLang()

  const faqs = [0, 1, 2, 3, 4, 5].map((i) => ({ q: t(`faq.${i}.q`), a: t(`faq.${i}.a`) }))

  return (
    <section className="relative bg-paper py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-ink-2">
            <span className="h-1.5 w-1.5 rounded-full bg-lime" />
            {t('faq.label')}
          </p>
          <h2 className="font-display text-[clamp(2rem,4.4vw,3.3rem)] font-bold leading-[1.05] tracking-[-0.025em] text-ink text-balance">
            {t('faq.heading')}
          </h2>
        </div>

        <div className="border-t border-line">
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
