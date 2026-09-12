import { Mail } from 'lucide-react';

/**
 * Official Instagram vector glyph
 */
function InstagramIcon({ className = "size-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

/**
 * Official WhatsApp vector glyph
 */
function WhatsAppIcon({ className = "size-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.19 8.19 0 0 1-5.82 2.42c-1.46 0-2.89-.39-4.14-1.12l-.3-.18-3.08.81.82-3-.19-.31a8.21 8.21 0 0 1-1.27-4.44c0-4.54 3.7-8.24 8.24-8.24zm4.79 11.64c-.26-.13-1.55-.77-1.79-.86-.24-.09-.41-.13-.59.13-.17.26-.68.86-.83 1.03-.15.17-.31.2-.57.07-.26-.13-1.1-.41-2.1-1.3-.77-.69-1.29-1.54-1.44-1.8-.15-.26-.02-.4.11-.53.12-.11.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.07-.13-.59-1.42-.81-1.95-.21-.51-.43-.44-.59-.45h-.5c-.17 0-.45.06-.69.32-.24.26-.91.89-.91 2.17s.93 2.52 1.06 2.69c.13.17 1.83 2.8 4.44 3.93.62.27 1.11.43 1.49.55.63.2 1.2.17 1.65.1.5-.07 1.55-.63 1.77-1.24.22-.61.22-1.13.15-1.24-.06-.11-.23-.17-.49-.3z"/>
    </svg>
  );
}

/**
 * Official Facebook vector glyph
 */
function FacebookIcon({ className = "size-4" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

/**
 * Redesigned Minimal Footer:
 * - Gradient continuation from CTA section (seamless visual flow).
 * - Clean site navigation and legal links.
 * - Neo-brutalist social/contact buttons (Email, Instagram, WhatsApp, Facebook).
 * - Massive faded "RASSID" brand wordmark at the bottom.
 */
export default function Footer({ t }) {
  const currentYear = new Date().getFullYear();

  const siteLinks = [
    { label: t?.footer_nav_system || "Système", href: "#dashboard" },
    { label: t?.footer_nav_dual || "Double Flux", href: "#distribution-reimaginee" },
    { label: t?.footer_nav_why || "Pourquoi RASSID", href: "#pourquoi-rassid" },
    { label: t?.footer_nav_pricing || "Tarifs", href: "#pricing" },
    { label: t?.footer_nav_faq || "FAQ", href: "#faq" },
  ];

  const legalLinks = [
    { label: t?.footer_terms || "Conditions d'utilisation", href: "#terms" },
    { label: t?.footer_privacy || "Politique de confidentialité", href: "#privacy" },
  ];

  const socialLinks = [
    {
      name: "Email",
      href: "mailto:contact@rassid.dz",
      icon: Mail,
      isCustom: false,
    },
    {
      name: "Instagram",
      href: "https://instagram.com/rassid.app",
      icon: InstagramIcon,
      isCustom: true,
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/213550000000?text=Bonjour,%20je%20souhaite%20en%20savoir%20plus%20sur%20RASSID",
      icon: WhatsAppIcon,
      isCustom: true,
    },
    {
      name: "Facebook",
      href: "https://facebook.com/rassid.app",
      icon: FacebookIcon,
      isCustom: true,
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#FAF9F5] text-zinc-600">
      
      {/* Seamless gradient extension from CTA section */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-36 sm:h-48 bg-gradient-to-b from-[#7FE300]/22 via-[#7FE300]/06 to-transparent"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-4">
        
        {/* Row 1: Site Navigation & Legal Links */}
        <nav aria-label="Footer Navigation" className="flex flex-wrap items-center justify-center gap-x-7 sm:gap-x-10 gap-y-3.5 text-center">
          {siteLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm sm:text-base font-semibold text-zinc-800 hover:text-black transition-colors"
            >
              {link.label}
            </a>
          ))}

          {/* Subtle separator on wider screens */}
          <span className="hidden sm:inline-block text-zinc-300 select-none">|</span>

          {legalLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm sm:text-base font-medium text-zinc-600 hover:text-black transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Row 2: Social & Contact Icon Buttons */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center gap-4">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                target={item.href.startsWith('mailto:') ? undefined : "_blank"}
                rel={item.href.startsWith('mailto:') ? undefined : "noopener noreferrer"}
                aria-label={item.name}
                className="size-11 sm:size-12 rounded-full bg-white border border-black flex items-center justify-center text-zinc-900 shadow-[1px_2px_0_0_#000] hover:-translate-y-1 hover:shadow-[2px_4px_0_0_#000] active:translate-y-0.5 active:shadow-none transition-all duration-200"
              >
                <Icon className="size-4 sm:size-5 shrink-0" />
              </a>
            );
          })}
        </div>

        {/* Row 3: Minimal Copyright */}
        <div className="mt-7 sm:mt-8 text-center text-xs text-zinc-500 font-medium">
          <p>© {currentYear} RASSID · {t?.footer_rights || "Tous droits réservés."}</p>
        </div>

      </div>

      {/* Row 4: Massive Full-Width Edge-to-Edge Faded "RASSID" Wordmark */}
      <div className="w-full overflow-hidden select-none pointer-events-none -mt-4 sm:-mt-6 lg:-mt-8 flex justify-center">
        <svg
          viewBox="0 0 1440 310"
          className="w-full h-auto block select-none"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="rassidWordmarkFade" x1="0" y1="0" x2="0" y2="100%">
              <stop offset="0%" stopColor="#09090B" stopOpacity="0.09" />
              <stop offset="45%" stopColor="#09090B" stopOpacity="0.05" />
              <stop offset="90%" stopColor="#09090B" stopOpacity="0.00" />
            </linearGradient>
          </defs>
          <text
            x="50%"
            y="260"
            textAnchor="middle"
            fill="url(#rassidWordmarkFade)"
            className="font-display font-black"
            style={{ fontSize: '335px', letterSpacing: '0.03em', fontWeight: 900 }}
          >
            RASSID
          </text>
        </svg>
      </div>

    </footer>
  );
}
