import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollReveal(options = {}) {
  const ref = useRef(null)
  const {
    y = 40,
    opacity = 0,
    duration = 0.8,
    stagger = 0.12,
    start = 'top 85%',
    childSelector = '.reveal-item',
  } = options

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const children = el.querySelectorAll(childSelector)
    const targets = children.length > 0 ? children : [el]

    gsap.set(targets, { y, opacity })

    const tween = gsap.to(targets, {
      y: 0,
      opacity: 1,
      duration,
      stagger: children.length > 0 ? stagger : 0,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: 'play none none none',
      },
    })

    return () => {
      tween.kill()
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === el) st.kill()
      })
    }
  }, [y, opacity, duration, stagger, start, childSelector])

  return ref
}
