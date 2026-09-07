import { useState, useEffect } from 'react'
import { Menu, X, Languages } from 'lucide-react'
import Button from '../ui/Button'
import Logo from '../ui/Logo'
import { useLang } from '../../contexts/LanguageContext'

const navKeys = ['accueil', 'fonctionnalites', 'plateforme', 'apropos', 'contact']

export default function Navbar() {
  const { t, lang, toggleLang } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile sheet is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-out-expo ${
        scrolled || open
          ? 'border-b border-line bg-paper/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-6 lg:px-8">
        <a href="#accueil" className="transition-opacity hover:opacity-70" aria-label="RASSID">
          <Logo className="h-8 w-8" showWordmark tone="ink" />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navKeys.map((key) => (
            <li key={key}>
              <a
                href={`#${key}`}
                className="relative px-3.5 py-2 text-sm font-medium text-ink-2 transition-colors hover:text-ink after:absolute after:inset-x-3.5 after:bottom-1 after:h-0.5 after:origin-center after:scale-x-0 after:rounded-full after:bg-lime after:transition-transform after:duration-300 after:ease-out-expo hover:after:scale-x-100"
              >
                {t(`nav.${key}`)}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2.5 md:flex">
          <button
            onClick={toggleLang}
            className="lang-attract inline-flex items-center gap-1.5 rounded-pill border border-line px-3 py-2 text-xs font-semibold text-ink-2 transition-colors hover:border-lime/60 hover:text-ink"
            aria-label={lang === 'fr' ? 'التحويل إلى العربية' : 'Switch to French'}
          >
            <Languages size={14} />
            {lang === 'fr' ? 'عربي' : 'FR'}
          </button>
          <Button href="#essai" showArrow className="px-5 py-2.5 text-sm">{t('nav.commencer')}</Button>
        </div>

        <button
          className="-mr-1 inline-flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile sheet */}
      <div
        className={`overflow-hidden border-t border-line bg-paper/95 backdrop-blur-xl transition-[max-height,opacity] duration-[400ms] ease-out-expo md:hidden ${
          open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col px-5 py-3">
          {navKeys.map((key) => (
            <li key={key}>
              <a
                href={`#${key}`}
                className="flex items-center justify-between border-b border-line/70 py-4 text-[1.05rem] font-medium text-ink"
                onClick={() => setOpen(false)}
              >
                {t(`nav.${key}`)}
                <span aria-hidden className="text-ink-3">↗</span>
              </a>
            </li>
          ))}
          <li className="flex items-center gap-3 pt-5">
            <button
              onClick={toggleLang}
              className="lang-attract inline-flex items-center gap-1.5 rounded-pill border border-line px-4 py-3 text-sm font-semibold text-ink-2"
            >
              <Languages size={15} />
              {lang === 'fr' ? 'عربي' : 'FR'}
            </button>
            <Button href="#essai" showArrow className="flex-1 py-3" onClick={() => setOpen(false)}>
              {t('nav.commencer')}
            </Button>
          </li>
        </ul>
      </div>
    </header>
  )
}
