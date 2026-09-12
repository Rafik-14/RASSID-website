import { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Globe } from 'lucide-react';
import PrimaryButton from './PrimaryButton';
import appIcon from '../assets/rassid_app_icon.webp';

export default function Navbar({ lang, setLang }) {
  const isRtl = lang === 'ar';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#console-centrale', label: isRtl ? 'لوحة التحكم' : 'Grand Livre' },
    { href: '#pourquoi-rassid', label: isRtl ? 'لماذا رصيد' : 'Pourquoi RASSID' },
    { href: '#pricing', label: isRtl ? 'الأسعار' : 'Tarifs DZD' },
    { href: '#faq', label: isRtl ? 'الأسئلة الشائعة' : 'FAQ' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center pointer-events-none">
      
      {/* Dynamic Island / Notch Bar */}
      <div 
        className={`pointer-events-auto relative flex items-center justify-between gap-3 sm:gap-6 md:gap-8 bg-black text-white px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-b-[22px] sm:rounded-b-[26px] shadow-[0_4px_14px_rgba(0,0,0,0.12)] transition-all duration-300 w-[94%] sm:w-auto max-w-5xl ${
          scrolled ? 'shadow-[0_6px_20px_rgba(0,0,0,0.20)]' : ''
        }`}
      >
        
        {/* Left Concave Shoulder Ear (Smooth S-curve transition from ceiling) */}
        <div className="absolute top-0 -left-[23.5px] w-6 h-6 overflow-hidden pointer-events-none hidden sm:block">
          <svg 
            viewBox="0 0 24 24" 
            className="w-6 h-6 text-black fill-current block"
          >
            <path d="M0 0 C13.25 0 24 10.75 24 24 V0 H0 Z" />
          </svg>
        </div>

        {/* Right Concave Shoulder Ear (Smooth S-curve transition from ceiling) */}
        <div className="absolute top-0 -right-[23.5px] w-6 h-6 overflow-hidden pointer-events-none hidden sm:block">
          <svg 
            viewBox="0 0 24 24" 
            className="w-6 h-6 text-black fill-current block"
          >
            <path d="M24 0 C10.75 0 0 10.75 0 24 V0 H24 Z" />
          </svg>
        </div>

        {/* Brand Lockup: 3D Squircle App Icon + Wordmark */}
        <a 
          href="#hero" 
          className="flex items-center gap-2 sm:gap-2.5 transition-transform hover:opacity-95 shrink-0"
        >
          <img 
            src={appIcon} 
            alt="Rassid" 
            className="size-7 sm:size-8 rounded-[8px] sm:rounded-[9px] object-cover shadow-sm ring-1 ring-white/15" 
          />
          <span className="font-display text-sm sm:text-base font-bold tracking-tight text-white">
            {isRtl ? 'رصيد' : 'Rassid'}
          </span>
        </a>

        {/* Center Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-5 lg:gap-7 font-sans text-[13px] sm:text-[13.5px] font-medium text-zinc-300">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-white whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Controls: Language Switcher + High-Contrast White Pill CTA */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          
          {/* Language Switcher */}
          <button 
            onClick={() => setLang(lang === 'fr' ? 'ar' : 'fr')}
            className="inline-flex items-center gap-1 text-xs font-semibold text-zinc-400 hover:text-white transition-colors px-1.5 sm:px-2 py-1 rounded-md"
            title={lang === 'fr' ? 'Passer en Arabe' : 'Changer en Français'}
          >
            <Globe className="size-3 text-zinc-400" />
            <span className="font-mono text-[11px]">{lang === 'fr' ? 'العربية' : 'Français'}</span>
          </button>

          {/* Rassid Lime Neo-Brutalist Pill Button */}
          <PrimaryButton 
            href="#pricing" 
            size="sm" 
            dark
            icon={ArrowRight}
          >
            {isRtl ? 'تجربة مجانية' : "Démarrer l'essai"}
          </PrimaryButton>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1 text-zinc-400 hover:text-white focus:outline-none"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>

        </div>

      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto absolute top-14 inset-x-4 max-w-sm mx-auto rounded-2xl bg-black/95 backdrop-blur-xl border border-white/10 p-4 text-white shadow-2xl flex flex-col gap-2.5 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

    </header>
  );
}
