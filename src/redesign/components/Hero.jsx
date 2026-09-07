import { Plus } from 'lucide-react';
import cliffLeft from '../assets/cliff_left.png';
import cliffRight from '../assets/cliff_right.png';

import homeScreen from '../../assets/Home_screen.webp';
import livraisonScreen from '../../assets/Livraison_operation_screen.webp';
import paiementScreen from '../../assets/Paiment_operation_screen2.webp';

export default function Hero({ t }) {
  return (
    <section id="hero" className="relative w-full overflow-hidden bg-white pt-10 sm:pt-16 lg:pt-20 select-none">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-[radial-gradient(ellipse_at_top,rgba(244,244,245,1)_0%,rgba(255,255,255,0)_70%)] pointer-events-none" />

      {/* ============================================================= */}
      {/* EDITORIAL HEADER LOCKUP                                       */}
      {/* ============================================================= */}
      <div className="relative z-20 mx-auto max-w-5xl px-4 text-center">
        
        {/* Category Pill */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-50 border border-zinc-200/80 shadow-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-[0.2em] text-zinc-500 uppercase">
              {t.hero_synex_kicker || "FINANCE & DISTRIBUTION"}
            </p>
          </div>
        </div>

        {/* Headline */}
        <h1 className="font-display text-[clamp(2.2rem,4.5vw,4.5rem)] font-extrabold leading-[1.05] tracking-[-0.03em] max-w-4xl mx-auto">
          <span className="block font-medium text-zinc-400">
            {t.hero_synex_h1_light || "Un Nouveau Standard"}
          </span>
          <span className="block font-extrabold text-zinc-950 mt-1 sm:mt-2">
            {t.hero_synex_h1_dark || "dans la Trésorerie."}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mt-6 sm:mt-8 max-w-2xl text-[14px] sm:text-[17px] text-zinc-500 font-medium leading-[1.6] tracking-[-0.01em]">
          {t.hero_synex_sub || "Prenez le contrôle total de vos créances, de votre flotte de fourgons et de vos encaissements avec une plateforme unifiée 100% opérationnelle hors-ligne sur le terrain."}
        </p>

      </div>

      {/* ============================================================= */}
      {/* FULL-WIDTH STAGE: TRANSPARENT CLIFFS + ELEVATED PHONES        */}
      {/* ============================================================= */}
      <div className="relative w-full mt-10 sm:mt-16 min-h-[480px] sm:min-h-[560px] lg:min-h-[640px] flex items-end justify-center overflow-hidden">
        
        {/* Left Transparent Basalt Cliff */}
        <div className="absolute left-0 bottom-0 z-10 pointer-events-none w-[220px] sm:w-[360px] md:w-[460px] lg:w-[540px] max-w-[38vw]">
          <img 
            src={cliffLeft} 
            alt="Left mossy basalt cliff" 
            className="w-full h-auto object-contain object-bottom filter drop-shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
          />
        </div>

        {/* Right Transparent Basalt Cliff */}
        <div className="absolute right-0 bottom-0 z-10 pointer-events-none w-[220px] sm:w-[360px] md:w-[460px] lg:w-[540px] max-w-[38vw]">
          <img 
            src={cliffRight} 
            alt="Right mossy cliff with wildflowers" 
            className="w-full h-auto object-contain object-bottom filter drop-shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
          />
        </div>

        {/* Centered Aave 3-Phone Cluster */}
        <div className="relative z-20 flex items-end justify-center px-4 mb-4 sm:mb-6">
          
          {/* LEFT PHONE: LIVRAISON SCREEN */}
          <div className="w-[160px] sm:w-[220px] md:w-[260px] lg:w-[290px] -mr-6 sm:-mr-10 md:-mr-12 z-10 select-none transition-transform duration-700 hover:-translate-y-2">
            <img 
              src={livraisonScreen} 
              alt="Livraison operation screen" 
              draggable={false}
              className="w-full h-auto block select-none"
              style={{
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.12)) drop-shadow(0 4px 10px rgba(0,0,0,0.04))'
              }}
            />
          </div>

          {/* CENTER PHONE: HOME SCREEN (ELEVATED UP IN FOREGROUND) */}
          <div className="w-[185px] sm:w-[250px] md:w-[290px] lg:w-[320px] -translate-y-6 sm:-translate-y-10 z-20 select-none transition-transform duration-700 hover:-translate-y-12">
            <img 
              src={homeScreen} 
              alt="RASSID driver home screen" 
              draggable={false}
              className="w-full h-auto block select-none"
              style={{
                filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.18)) drop-shadow(0 4px 16px rgba(0,0,0,0.06))'
              }}
            />
          </div>

          {/* RIGHT PHONE: PAIEMENT SCREEN */}
          <div className="w-[160px] sm:w-[220px] md:w-[260px] lg:w-[290px] -ml-6 sm:-ml-10 md:-ml-12 z-10 select-none transition-transform duration-700 hover:-translate-y-2">
            <img 
              src={paiementScreen} 
              alt="Paiement operation screen" 
              draggable={false}
              className="w-full h-auto block select-none"
              style={{
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.12)) drop-shadow(0 4px 10px rgba(0,0,0,0.04))'
              }}
            />
          </div>

        </div>

        {/* Bottom Indicator */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex justify-center items-center">
          <a 
            href="#console-centrale"
            className="inline-flex items-center gap-1.5 text-[11px] font-mono font-bold text-zinc-500 hover:text-zinc-900 transition-colors bg-white/90 hover:bg-white border border-zinc-200/80 backdrop-blur-md px-4 py-1.5 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
          >
            <Plus className="size-3 text-emerald-500" />
            <span>{t.hero_scroll_explore || "SCROLL TO EXPLORE"}</span>
          </a>
        </div>

      </div>

    </section>
  );
}

