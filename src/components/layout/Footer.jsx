import { Globe, Mail, MessageCircle, Send } from 'lucide-react'
import Logo from '../ui/Logo'
import Button from '../ui/Button'
import { useLang } from '../../contexts/LanguageContext'

const socials = [
  { icon: Globe, href: '#', label: 'Web' },
  { icon: Send, href: '#', label: 'Telegram' },
  { icon: MessageCircle, href: '#', label: 'WhatsApp' },
  { icon: Mail, href: '#', label: 'Email' },
]

export default function Footer() {
  const { t } = useLang()

  const companyLinks = [
    { label: t('footer.about'), href: '#apropos' },
    { label: t('footer.fonctionnalites'), href: '#fonctionnalites' },
    { label: t('footer.contact'), href: '#contact' },
  ]
  const legalLinks = [
    { label: t('footer.confidentialite'), href: '#' },
    { label: t('footer.conditions'), href: '#' },
    { label: t('footer.mentions'), href: '#' },
  ]

  return (
    <footer id="contact" className="relative border-t border-hairline bg-obsidian">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* top: brand + closing nudge */}
        <div className="flex flex-col gap-10 border-b border-hairline pb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-sm">
            <Logo className="h-10 w-10" showWordmark tone="light" />
            <p className="mt-5 text-sm leading-relaxed text-mist-2">{t('footer.description')}</p>
          </div>
          <Button href="#essai" showArrow className="px-6 py-3">{t('nav.commencer')}</Button>
        </div>

        {/* link columns */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <p className="font-display text-2xl font-bold tracking-tight text-mist">
              {t('footer.entreprise')} <span className="text-lime">/</span> RASSID
            </p>
          </div>
          <nav aria-label={t('footer.entreprise')}>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-mist-3">{t('footer.entreprise')}</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-mist-2 underline-offset-4 decoration-lime/60 transition-colors hover:text-mist hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label={t('footer.legal')}>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-mist-3">{t('footer.legal')}</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-mist-2 underline-offset-4 decoration-lime/60 transition-colors hover:text-mist hover:underline">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* baseline */}
        <div className="flex flex-col items-center justify-between gap-5 border-t border-hairline pt-8 sm:flex-row">
          <p className="tnum text-xs text-mist-3">
            © {new Date().getFullYear()} RASSID. {t('footer.copyright')}
          </p>
          <div className="flex gap-2.5">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-hairline text-mist-2 transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:scale-110 hover:border-lime/50 hover:text-lime"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
