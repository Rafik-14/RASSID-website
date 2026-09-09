import { motion } from 'framer-motion';
import { Download, ChevronRight } from 'lucide-react';
import appIcon from '../assets/rassid_app_icon.webp';
import cliffLeft from '../assets/cliff_left.webp';
import cliffRight from '../assets/cliff_right.webp';

import homeScreen from '../../assets/Home_screen.webp';
import livraisonScreen from '../../assets/Livraison_operation_screen.webp';
import paiementScreen from '../../assets/Paiment_operation_screen2.webp';

export default function Hero({ t }) {
  return (
    <section id="hero" className="relative w-full min-h-[1000px] sm:min-h-[1060px] lg:min-h-[1100px] pt-16 sm:pt-20 lg:pt-24 overflow-hidden bg-paper flex flex-col justify-between">
      
      {/* Subtle clean ambient light glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.02)_0%,transparent_70%)] pointer-events-none" />

      {/* ============================================================= */}
      {/* 1. SYNEX CLIFF CUTOUT ASSETS (OPTION 3: SHARP, NON-STRETCHED) */}
      {/* ============================================================= */}
      
      {/* Left Mossy Basalt Cliff Cutout */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="pointer-events-none absolute left-0 bottom-0 z-10 w-[230px] sm:w-[330px] md:w-[405px] lg:w-[475px] xl:w-[520px] max-w-[34vw] select-none filter drop-shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
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
        className="pointer-events-none absolute right-0 bottom-0 z-10 w-[230px] sm:w-[330px] md:w-[405px] lg:w-[475px] xl:w-[520px] max-w-[34vw] select-none filter drop-shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
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
          className="inline-flex items-center gap-2.5 sm:gap-3 mb-4"
        >
          <img 
            src={appIcon} 
            alt="Rassid App Icon" 
            className="w-8 h-8 sm:w-9 sm:h-9 object-cover rounded-xl shadow-sm ring-1 ring-black/10" 
          />
          <span className="text-[16px] sm:text-[18px] font-semibold tracking-tight text-obsidian">
            Rassid App
          </span>
        </motion.div>

        {/* Master Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-[clamp(2.4rem,5.2vw,4.4rem)] font-extrabold text-obsidian leading-[1.08] tracking-[-0.03em] max-w-4xl mx-auto"
        >
          {t?.hero_synex_h1_light || "Finance Reimagined."}
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mx-auto mt-4 max-w-2xl text-[16px] sm:text-[18px] text-ink-2 font-medium leading-relaxed"
        >
          {t?.hero_synex_sub_short || t?.hero_synex_sub || "Toute la puissance de RASSID au creux de votre main. Prenez le contrôle total de vos tournées et encaissements, 100% hors-ligne sur le terrain."}
        </motion.p>

        {/* Action Button Pair */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-obsidian hover:bg-obsidian-2 text-paper font-semibold text-sm transition-all shadow-xl shadow-obsidian/15 hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download className="size-4 text-lime" />
            <span>{t?.hero_btn_trial || "Démarrer l'essai 7 jours gratuit"}</span>
          </a>

          <a 
            href="#console-centrale"
            className="inline-flex items-center justify-center gap-1.5 h-12 px-8 rounded-full bg-paper-2 hover:bg-paper text-ink font-semibold text-sm transition-all border border-line shadow-sm backdrop-blur-md hover:border-ink-3"
          >
            <span>{t?.hero_btn_explore || "Explorer la console web"}</span>
            <ChevronRight className="size-4 opacity-70 rtl:rotate-180" />
          </a>
        </motion.div>

      </div>

      {/* ============================================================= */}
      {/* 3. AAVE 3-PHONE CASCADE (CUT OFF AT THE BOTTOM)               */}
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
          <div className="relative w-[210px] sm:w-[270px] md:w-[310px] lg:w-[350px] -mr-16 sm:-mr-24 lg:-mr-32 z-10 select-none translate-y-6 sm:translate-y-8 lg:translate-y-10">
            <img 
              src={livraisonScreen} 
              alt="Livraison operation screen" 
              draggable={false}
              className="w-full h-auto block select-none rounded-t-[32px] sm:rounded-t-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.25)] ring-1 ring-black/10"
            />
          </div>

          {/* CENTER PHONE: Home Dashboard Screen (Up a little) */}
          <div className="relative w-[210px] sm:w-[270px] md:w-[310px] lg:w-[350px] z-20 select-none">
            <img 
              src={homeScreen} 
              alt="RASSID driver home dashboard" 
              draggable={false}
              className="w-full h-auto block select-none rounded-t-[32px] sm:rounded-t-[40px] shadow-[0_35px_80px_rgba(0,0,0,0.40)] ring-1 ring-black/10"
            />
          </div>

          {/* RIGHT PHONE: Paiement Screen */}
          <div className="relative w-[210px] sm:w-[270px] md:w-[310px] lg:w-[350px] -ml-16 sm:-ml-24 lg:-ml-32 z-10 select-none translate-y-6 sm:translate-y-8 lg:translate-y-10">
            <img 
              src={paiementScreen} 
              alt="Paiement operation screen" 
              draggable={false}
              className="w-full h-auto block select-none rounded-t-[32px] sm:rounded-t-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.25)] ring-1 ring-black/10"
            />
          </div>

        </motion.div>

      </div>

    </section>
  );
}
