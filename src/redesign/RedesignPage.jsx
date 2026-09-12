import { useState, useEffect } from 'react';
import { translations } from './utils/translations';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WebDashboardSection from './components/WebDashboardSection';
import WhyRassidSection from './components/WhyRassidSection';
import DistributionReimagined from './components/DistributionReimagined';
import FieldProof from './components/FieldProof';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import ClosingCTA from './components/ClosingCTA';
import Footer from './components/Footer';

export default function RedesignPage() {
  const [lang, setLang] = useState('fr');

  const t = translations[lang] || translations.fr;
  const isRtl = lang === 'ar';

  useEffect(() => {
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
  }, [lang, isRtl]);

  return (
    <div className={`min-h-screen bg-white text-zinc-950 selection:bg-[#7FE300]/30 selection:text-zinc-950 ${isRtl ? 'font-arabic' : 'font-sans'}`}>
      {/* Floating Navbar */}
      <Navbar 
        lang={lang} 
        setLang={setLang} 
      />

      {/* Main Content Flow: Synex + Aave Integrated Architecture */}
      <main>
        {/* 1. Hero: Synex Pill Headings + Aave 3-Phone Cascade over Mossy Mountains */}
        <Hero t={t} />

        {/* 2. Web Dashboard Section: Aave Pro "The Full Power of RASSID Pro" */}
        <WebDashboardSection t={t} />

        {/* 3. Why RASSID: Synex Comparison Matrix over Landscape */}
        <WhyRassidSection t={t} isRtl={isRtl} />

        {/* 4. Distribution Reimagined: Synex Editorial Headline with Inline Pills */}
        <DistributionReimagined t={t} isRtl={isRtl} />

        {/* 5. Customer Field Testimonial */}
        <FieldProof isRtl={isRtl} />

        {/* 9. Pricing in Algerian Dinar */}
        <Pricing t={t} />

        {/* 10. Wholesale FAQ */}
        <FAQ isRtl={isRtl} />

        {/* 11. Direct Trial CTA */}
        <ClosingCTA t={t} isRtl={isRtl} />
      </main>

      {/* 12. Minimalist Footer with Gradient Continuation and Faded Wordmark */}
      <Footer t={t} isRtl={isRtl} />

    </div>
  );
}
