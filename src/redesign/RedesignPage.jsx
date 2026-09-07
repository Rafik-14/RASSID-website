import { useState, useEffect } from 'react';
import { triggerBurst } from './utils/confetti';
import { translations } from './utils/translations';
import { isAudioMuted, toggleAudioMute, playTactile } from './utils/audio';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WebDashboardSection from './components/WebDashboardSection';
import WhyRassidSection from './components/WhyRassidSection';
import FleetCalculator from './components/FleetCalculator';
import MobileOperationsShowcase from './components/MobileOperationsShowcase';
import SecuritySection from './components/SecuritySection';
import FieldProof from './components/FieldProof';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import ClosingCTA from './components/ClosingCTA';
import Footer from './components/Footer';

export default function RedesignPage() {
  const [lang, setLang] = useState('fr');
  const [isMuted, setIsMuted] = useState(isAudioMuted());

  const t = translations[lang] || translations.fr;
  const isRtl = lang === 'ar';

  useEffect(() => {
    document.documentElement.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
  }, [lang, isRtl]);

  const handleToggleMute = () => {
    const updated = toggleAudioMute();
    setIsMuted(updated);
    if (!updated) {
      playTactile('click');
    }
  };

  const triggerCelebration = () => {
    triggerBurst();
  };

  return (
    <div className={`min-h-screen bg-white text-zinc-950 selection:bg-[#7FE300]/30 selection:text-zinc-950 ${isRtl ? 'font-arabic' : 'font-sans'}`}>
      {/* Floating Navbar */}
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        isMuted={isMuted} 
        toggleMute={handleToggleMute}
        onTrialClick={triggerCelebration}
      />

      {/* Main Content Flow: Synex + Aave Integrated Architecture */}
      <main>
        {/* 1. Hero: Synex Pill Headings + Aave 3-Phone Cascade over Mossy Mountains */}
        <Hero t={t} onTrialClick={triggerCelebration} />

        {/* 2. Web Dashboard Section: Aave Pro "The Full Power of RASSID Pro" */}
        <WebDashboardSection t={t} />

        {/* 3. Why RASSID: Synex Comparison Matrix over Landscape */}
        <WhyRassidSection t={t} />

        {/* 4. Fleet ROI Calculator */}
        <FleetCalculator t={t} isRtl={isRtl} />

        {/* 5. Mobile Operations Detail Showcase */}
        <MobileOperationsShowcase isRtl={isRtl} />

        {/* 6. Cryptographic Security SHA-256 */}
        <SecuritySection t={t} />

        {/* 7. Field Proof Hardware & Logistics */}
        <FieldProof />

        {/* 8. Pricing in Algerian Dinar */}
        <Pricing t={t} onTrialClick={triggerCelebration} />

        {/* 9. Wholesale FAQ */}
        <FAQ isRtl={isRtl} />

        {/* 10. Direct Trial CTA */}
        <ClosingCTA t={t} onTrialClick={triggerCelebration} />
      </main>

      {/* 11. Synex Contact Cards + Basalt Water Panorama + Financial Ledger Footer */}
      <Footer t={t} />

    </div>
  );
}
