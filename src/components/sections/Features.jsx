import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Home, Truck, CreditCard, Undo2, BadgePercent, MousePointerClick } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import PhoneFrame from '../ui/PhoneFrame'
import { useLang } from '../../contexts/LanguageContext'
import homeScreen from '../../assets/Home_screen.webp'
import livraisonScreen from '../../assets/Livraison_operation_screen.webp'
import paiementScreen from '../../assets/Paiment_operation_screen2.webp'
import retourScreen from '../../assets/retour_operation_screen3.webp'
import avoirScreen from '../../assets/Avoir_operation_screen4.webp'

gsap.registerPlugin(ScrollTrigger)

const CARD_GAP = 20 // gap-5 = 1.25rem = 20px

const screens = [
  { src: homeScreen, icon: Home, key: 's0' },
  { src: livraisonScreen, icon: Truck, key: 's1' },
  { src: paiementScreen, icon: CreditCard, key: 's2' },
  { src: retourScreen, icon: Undo2, key: 's3' },
  { src: avoirScreen, icon: BadgePercent, key: 's4' },
]

const MobileFeatureCard = ({ item, index, t, isActive }) => {
  const Icon = item.icon
  return (
    <div
      className={`mobile-feature-card shrink-0 snap-center flex flex-col gap-6 pt-4 transition-all duration-500 ${
        isActive ? 'opacity-100 scale-100' : 'opacity-50 scale-[0.96]'
      }`}
      style={{ width: 'var(--card-width)' }}
    >
      <div className="w-full max-w-[17rem] mx-auto" dir="ltr">
        <PhoneFrame src={item.src} alt={t(`features.${item.key}.label`)} glow />
      </div>
      
      <div className="bg-paper border border-line rounded-3xl p-6 shadow-sm flex flex-col gap-4 relative overflow-hidden mt-2">
        <div className="absolute top-0 right-0 p-6 opacity-5 rtl:left-0 rtl:right-auto">
           <Icon size={80} />
        </div>
        <div className="flex items-center gap-3 relative z-10">
          <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-lime text-ink shadow-sm">
             <Icon size={22} strokeWidth={2.25} />
          </span>
          <div>
            <span className="text-[10px] font-bold text-lime-deep tracking-widest uppercase block mb-0.5">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="font-display text-xl font-bold text-ink">
              {t(`features.${item.key}.label`)}
            </h3>
          </div>
        </div>
        <p className="text-ink-2 text-[0.95rem] leading-relaxed relative z-10">
          {t(`features.${item.key}.desc`)}
        </p>
      </div>
    </div>
  )
}

export default function Features() {
  const { t } = useLang()
  const reduce = useReducedMotion()
  const [active, setActive] = useState(0)
  const [activeMobile, setActiveMobile] = useState(0)
  const current = screens[active]

  // Refs for each desktop feature row (for ScrollTrigger)
  const rowRefs = useRef([])
  const setRowRef = useCallback((el, i) => {
    rowRefs.current[i] = el
  }, [])

  // Ref for the mobile horizontal scroll container
  const scrollRef = useRef(null)

  // GSAP ScrollTrigger for desktop – works with Lenis
  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(min-width: 1024px)', () => {
      const triggers = rowRefs.current.map((el, i) => {
        if (!el) return null
        return ScrollTrigger.create({
          trigger: el,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => setActive(i),
          onEnterBack: () => setActive(i),
        })
      })
      return () => {
        triggers.forEach((st) => st?.kill())
      }
    })
    return () => mm.revert()
  }, [])

  // Scroll-based active card tracking for mobile carousel
  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const handleScroll = () => {
      const cards = container.querySelectorAll('.mobile-feature-card')
      if (!cards.length) return

      const containerRect = container.getBoundingClientRect()
      const containerCenter = containerRect.left + containerRect.width / 2

      let closestIndex = 0
      let closestDistance = Infinity

      cards.forEach((card, i) => {
        const cardRect = card.getBoundingClientRect()
        const cardCenter = cardRect.left + cardRect.width / 2
        const distance = Math.abs(cardCenter - containerCenter)
        if (distance < closestDistance) {
          closestDistance = distance
          closestIndex = i
        }
      })

      setActiveMobile(closestIndex)
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    // Run once on mount to set initial state
    handleScroll()

    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section id="fonctionnalites" className="relative bg-paper-2 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-wrap items-end justify-between gap-x-6 gap-y-4">
          <div>
            <h2 className="max-w-2xl font-display text-[clamp(2rem,4.4vw,3.4rem)] font-bold leading-[1.04] tracking-[-0.025em] text-ink text-balance">
              {t('features.heading')}
            </h2>
            <p className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-ink-3">
              <MousePointerClick size={15} className="text-lime-deep" strokeWidth={2.25} />
              {t('features.hint')}
            </p>
          </div>
          <p className="text-sm font-medium text-ink-2">{t('features.label')}</p>
        </div>

        {/* DESKTOP: Sticky Scroll Layout */}
        <div className="hidden lg:grid items-start lg:grid-cols-[1fr_1fr] lg:gap-20 relative">
          
          {/* Scrolling Text Column */}
          <div className="flex flex-col">
            {screens.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={item.key}
                  ref={(el) => setRowRef(el, index)}
                  className={`flex flex-col justify-center min-h-[70vh] py-10 transition-all duration-700 ${
                    active === index ? 'opacity-100 translate-x-0' : 'opacity-20 ltr:translate-x-4 rtl:translate-x-[-1rem]'
                  }`}
                >
                  <div className="flex items-center gap-5 mb-6">
                    <span
                      className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-all duration-500 shadow-sm ${
                        active === index ? 'bg-lime text-ink scale-110' : 'bg-paper border border-line text-ink-2'
                      }`}
                    >
                      <Icon size={26} strokeWidth={2.25} />
                    </span>
                    <div>
                      <span className="text-xs font-bold text-lime-deep tracking-widest uppercase block mb-1">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-display text-2xl lg:text-3xl font-bold text-ink">
                        {t(`features.${item.key}.label`)}
                      </h3>
                    </div>
                  </div>
                  <p className="text-lg lg:text-xl text-ink-2 leading-relaxed max-w-lg">
                    {t(`features.${item.key}.desc`)}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Sticky Phone – no overflow-hidden ancestor! */}
          <div className="sticky top-28 h-[calc(100vh-7rem)] flex items-center justify-center" dir="ltr">
            <div className="w-full max-w-[20rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.key}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <PhoneFrame src={current.src} alt={t(`features.${current.key}.label`)} glow />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE & TABLET: Horizontal Swipeable Carousel Layout */}
      <div className="lg:hidden w-full overflow-hidden mt-4" style={{ '--card-width': '80vw' }}>
        <div
          ref={scrollRef}
          className="flex w-full overflow-x-auto snap-x snap-mandatory pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          style={{ gap: `${CARD_GAP}px` }}
        >
          {/* Spacer so first card snaps to center */}
          <div className="shrink-0" style={{ width: 'calc((100vw - var(--card-width)) / 2)' }} aria-hidden="true" />
          
          {screens.map((item, index) => (
            <MobileFeatureCard
               key={item.key}
               item={item}
               index={index}
               t={t}
               isActive={index === activeMobile}
            />
          ))}
          
          {/* Spacer so last card snaps to center */}
          <div className="shrink-0" style={{ width: 'calc((100vw - var(--card-width)) / 2)' }} aria-hidden="true" />
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-2 pb-6">
          {screens.map((_, i) => (
             <div 
               key={i} 
               className={`h-1.5 rounded-full transition-all duration-300 ${i === activeMobile ? 'w-6 bg-lime' : 'w-1.5 bg-line'}`}
             />
          ))}
        </div>
      </div>
    </section>
  )
}
