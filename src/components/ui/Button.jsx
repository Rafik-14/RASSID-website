import { ArrowRight } from 'lucide-react'
import { useLang } from '../../contexts/LanguageContext'

const variants = {
  // lime fill + ink text — the primary action, reads on light and dark
  primary:
    'bg-lime text-ink shadow-lift hover:brightness-105 hover:shadow-[0_14px_30px_-8px_oklch(0.86_0.23_132/0.55)]',
  // solid dark CTA for use on light sections
  dark: 'bg-obsidian text-mist hover:bg-obsidian-2 hover:shadow-lift',
  // quiet outline on light sections
  outline: 'bg-transparent text-ink border border-ink/15 hover:border-ink/45 hover:bg-ink/[0.04]',
  // outline on dark sections
  outlineLight: 'bg-transparent text-mist border border-mist/25 hover:border-mist/55 hover:bg-mist/[0.08]',
}

export default function Button({
  children,
  variant = 'primary',
  showArrow = false,
  href,
  className = '',
  ...props
}) {
  const { lang } = useLang()
  // Arrow points the way reading flows.
  const Arrow = (
    <ArrowRight
      size={17}
      strokeWidth={2.5}
      className={`transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5 ${
        lang === 'ar' ? 'rotate-180 group-hover:-translate-x-0.5' : ''
      }`}
    />
  )

  const cls = `group inline-flex items-center justify-center gap-2 rounded-pill px-6 py-3 text-[0.95rem] font-semibold tracking-tight transition-all duration-300 ease-out-expo will-change-transform hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-paper ${variants[variant]} ${className}`

  // Render as a real anchor when given an href (smooth-scroll placeholders
  // today; swap for a signup / store / WhatsApp URL later).
  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {children}
        {showArrow && Arrow}
      </a>
    )
  }

  return (
    <button className={cls} {...props}>
      {children}
      {showArrow && Arrow}
    </button>
  )
}
