import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { translations } from '../redesign/utils/translations';
import Navbar from '../redesign/components/Navbar';
import Footer from '../redesign/components/Footer';

const STORAGE_KEY = 'rassid-lang';

function getInitialLang() {
  if (typeof window === 'undefined') return 'fr';
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === 'ar' || saved === 'fr' ? saved : 'fr';
  } catch {
    return 'fr';
  }
}

export default function LegalPageLayout({ children, titleFr, titleAr }) {
  const [lang, setLang] = useState(getInitialLang);

  const t = translations[lang] || translations.fr;
  const isRtl = lang === 'ar';

  useEffect(() => {
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // storage unavailable
    }
    window.scrollTo(0, 0);
  }, [lang, isRtl]);

  return (
    <div className={`min-h-screen bg-white text-zinc-950 selection:bg-[#7FE300]/30 selection:text-zinc-950 ${isRtl ? 'font-arabic' : 'font-sans'}`}>
      <Navbar lang={lang} setLang={setLang} t={t} />

      <main className="pt-24 sm:pt-28 pb-16 sm:pb-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <nav className="mb-8 text-sm text-zinc-400 font-medium">
            <Link to="/" className="hover:text-zinc-800 transition-colors">
              {isRtl ? 'الرئيسية' : 'Accueil'}
            </Link>
            <span className="mx-2">›</span>
            <span className="text-zinc-600">{isRtl ? titleAr : titleFr}</span>
          </nav>

          {/* Page Title */}
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 mb-3">
            {isRtl ? titleAr : titleFr}
          </h1>

          {/* Last updated */}
          <p className="text-sm text-zinc-400 mb-10 pb-8 border-b border-zinc-100">
            {isRtl ? 'آخر تحديث: سبتمبر 2026' : 'Dernière mise à jour : septembre 2026'}
          </p>

          {/* Legal Content */}
          <div className="legal-prose">
            {typeof children === 'function' ? children({ lang, isRtl, t }) : children}
          </div>

        </div>
      </main>

      <Footer t={t} isRtl={isRtl} />
    </div>
  );
}
