import { motion } from 'framer-motion';
import FancyButton from './FancyButton';
import PrimaryButton from './PrimaryButton';
import appIcon from '../assets/rassid_app_icon.webp';
import cliffLeft from '../assets/cliff_left.webp';
import cliffRight from '../assets/cliff_right.webp';

import homeScreen from '../../assets/Mobile_home_mockup.webp';
import livraisonScreen from '../../assets/Mobile_livraison_mockup.webp';
import depensesScreen from '../../assets/Mobile_depenses_mockup.webp';

export default function Hero({ t }) {
  return (
    <section id="hero" className="relative w-full min-h-[920px] sm:min-h-[1040px] lg:min-h-[1100px] pt-24 sm:pt-28 lg:pt-32 overflow-hidden bg-paper flex flex-col justify-between">
      
      {/* Subtle clean ambient light glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.02)_0%,transparent_70%)] pointer-events-none" />

      {/* ============================================================= */}
      {/* 1. SYNEX CLIFF CUTOUT ASSETS (DESKTOP ONLY)                   */}
      {/* ============================================================= */}
      
      {/* Left Mossy Basalt Cliff Cutout */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="pointer-events-none absolute left-0 bottom-0 z-10 hidden sm:block w-[330px] md:w-[405px] lg:w-[475px] xl:w-[520px] max-w-[34vw] select-none filter drop-shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
      >
        <img 
          src={cliffLeft} 
          alt="Nordic mossy basalt cliff" 
          className="w-full h-auto object-contain object-bottom block"
        />
      </motion.div>

      {/* Right Cliff with Alpine Wildflowers Cutout */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="pointer-events-none absolute right-0 bottom-0 z-10 hidden sm:block w-[330px] md:w-[405px] lg:w-[475px] xl:w-[520px] max-w-[34vw] select-none filter drop-shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
      >
        <img 
          src={cliffRight} 
          alt="Nordic mossy cliff with alpine wildflowers" 
          className="w-full h-auto object-contain object-bottom block"
        />
      </motion.div>

      {/* ============================================================= */}
      {/* 2. EDITORIAL HEADER                                           */}
      {/* ============================================================= */}
      <div className="relative z-30 mx-auto max-w-5xl px-4 text-center flex flex-col items-center">
        
        {/* Prominent Native App Icon & Text Lockup */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4"
        >
          <img 
            src={appIcon} 
            alt="Rassid App Icon" 
            className="w-8 h-8 sm:w-9 sm:h-9 object-cover rounded-xl shadow-sm ring-1 ring-black/10" 
          />
          <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-zinc-600 font-mono">
            {t?.hero_badge || "Rassid app"}
          </span>
        </motion.div>

        {/* Master Headline (2 lines) */}
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-[clamp(2.1rem,5vw,4.2rem)] font-extrabold text-obsidian leading-[1.12] tracking-[-0.03em] max-w-4xl mx-auto"
        >
          <span>{t?.hero_synex_h1_light || "Vos tournées. Vos créances."}</span>
          {t?.hero_synex_h1_dark && (
            <>
              <br className="hidden sm:inline" />{' '}
              <span className="text-zinc-500 font-bold italic">
                {t.hero_synex_h1_dark}
              </span>
            </>
          )}
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-3.5 sm:mt-4 max-w-2xl text-[14px] sm:text-[17px] text-ink-2 font-medium leading-relaxed px-2 sm:px-0"
        >
          {t?.hero_synex_sub_short || t?.hero_synex_sub || "Enregistrez les livraisons, suivez les dettes et imprimez les bons — même sans internet."}
        </motion.p>

        {/* Action Button Pair */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4"
        >
          <PrimaryButton href="#pricing">
            {t?.hero_btn_trial || "Essai gratuit 1 mois"}
          </PrimaryButton>

          <FancyButton 
            href="#console-centrale"
            className="[--fancy-cutout:var(--color-paper)]"
          >
            {t?.hero_btn_explore || "Voir la console du patron ↓"}
          </FancyButton>
        </motion.div>

      </div>

      {/* ============================================================= */}
      {/* 3-PHONE CASCADE (CUT OFF AT THE BOTTOM)                       */}
      {/* ============================================================= */}
      <div className="relative z-20 w-full mt-8 sm:mt-10 lg:mt-12 overflow-hidden flex justify-center h-[370px] sm:h-[445px] md:h-[510px] lg:h-[560px]">
        
        {/* The 3 Overlapping Smartphones (Cut cleanly by the bottom edge) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          dir="ltr"
          className="relative flex items-start justify-center px-4 max-w-5xl mx-auto"
        >
          
          {/* LEFT PHONE: Livraison Screen */}
          <div className="relative w-[210px] sm:w-[270px] md:w-[310px] lg:w-[350px] -mr-16 sm:-mr-24 lg:-mr-32 z-10 select-none translate-y-6 sm:translate-y-8 lg:translate-y-10 shrink-0">
            <img 
              src={livraisonScreen} 
              alt="RASSID mobile livraison screen" 
              draggable={false}
              className="w-full h-auto block select-none"
            />
          </div>

          {/* CENTER PHONE: Main Home Dashboard Screen (Up a little, prominent hero) */}
          <div className="relative w-[210px] sm:w-[270px] md:w-[310px] lg:w-[350px] z-20 select-none shrink-0">
            <img 
              src={homeScreen} 
              alt="RASSID mobile home dashboard screen" 
              draggable={false}
              className="w-full h-auto block select-none drop-shadow-[0_12px_24px_rgba(0,0,0,0.16)]"
            />
          </div>

          {/* RIGHT PHONE: Dépenses Screen */}
          <div className="relative w-[210px] sm:w-[270px] md:w-[310px] lg:w-[350px] -ml-16 sm:-ml-24 lg:-ml-32 z-10 select-none translate-y-6 sm:translate-y-8 lg:translate-y-10 shrink-0">
            <img 
              src={depensesScreen} 
              alt="RASSID mobile depenses screen" 
              draggable={false}
              className="w-full h-auto block select-none"
            />
          </div>

        </motion.div>
      </div>

    </section>
  );
}
