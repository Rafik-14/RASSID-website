import { ChevronRight } from 'lucide-react';
import synexLandscape from '../assets/synex_landscape.jpg';
import appIcon from '../assets/app-icon.png';

import homeScreen from '../../assets/Home_screen.webp';
import livraisonScreen from '../../assets/Livraison_operation_screen.webp';
import paiementScreen from '../../assets/Paiment_operation_screen2.webp';

export default function Hero({ t }) {
  return (
    <section id="hero" className="relative w-full bg-white pt-16 sm:pt-24 lg:pt-32 select-none overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(244,244,245,1)_0%,rgba(255,255,255,0)_70%)] pointer-events-none" />

      {/* ============================================================= */}
      {/* EDITORIAL HEADER LOCKUP (MINIMAL AAVE STYLE)                  */}
      {/* ============================================================= */}
      <div className="relative z-20 mx-auto max-w-5xl px-4 text-center flex flex-col items-center">
        
        {/* Minimal Icon + Text (Exact Aave style, NO background) */}
        <div className="flex justify-center mb-5">
          <div className="inline-flex items-center gap-2">
            <img src={appIcon} alt="Rassid App Icon" className="w-5 h-5 object-contain" />
            <span className="text-[14px] font-bold tracking-wide text-zinc-500">
              Rassid App
            </span>
          </div>
        </div>

        {/* Headline - Extremely minimal, single line */}
        <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-zinc-900 leading-[1.1] tracking-[-0.02em] max-w-4xl mx-auto">
          {t.hero_h1_minimal || "L'Application de Distribution."}
        </h1>

        {/* Subtitle - Short and minimal */}
        <p className="mx-auto mt-4 max-w-xl text-[16px] sm:text-[18px] text-zinc-500 font-medium leading-[1.6]">
          {t.hero_sub_minimal || "Gérez vos opérations terrain en temps réel avec une plateforme 100% hors-ligne."}
        </p>

        {/* Action Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#download"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white font-medium text-[15px] transition-colors shadow-lg shadow-zinc-900/20"
          >
            {t.hero_download_btn || "Commencer"}
          </a>
          <a 
            href="#console-centrale"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-transparent hover:bg-zinc-50 text-zinc-600 font-medium text-[15px] transition-colors"
          >
            {t.hero_learn_more_btn || "En savoir plus"}
            <ChevronRight className="ml-1 size-4 opacity-70" />
          </a>
        </div>

      </div>

      {/* ============================================================= */}
      {/* FULL-WIDTH STAGE: SYNEX LANDSCAPE + ELEVATED PHONES           */}
      {/* ============================================================= */}
      <div className="relative w-full mt-16 sm:mt-24 min-h-[450px] sm:min-h-[550px] lg:min-h-[650px] flex items-end justify-center">
        
        {/* Full-width Synex Landscape Background */}
        <div className="absolute left-0 bottom-0 z-10 w-full pointer-events-none">
          <img 
            src={synexLandscape} 
            alt="Beautiful mountain landscape" 
            className="w-full h-auto object-cover object-bottom mix-blend-multiply opacity-90"
            style={{ maxHeight: '100%', minHeight: '400px' }}
          />
        </div>

        {/* Centered Aave 3-Phone Cluster */}
        <div className="relative z-20 flex items-end justify-center px-4">
          
          {/* LEFT PHONE */}
          <div className="w-[160px] sm:w-[220px] md:w-[260px] lg:w-[300px] -mr-8 sm:-mr-12 md:-mr-16 z-10 select-none transition-transform duration-700 hover:-translate-y-4">
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

          {/* CENTER PHONE */}
          <div className="w-[185px] sm:w-[250px] md:w-[290px] lg:w-[330px] -translate-y-8 sm:-translate-y-12 z-20 select-none transition-transform duration-700 hover:-translate-y-16">
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

          {/* RIGHT PHONE */}
          <div className="w-[160px] sm:w-[220px] md:w-[260px] lg:w-[300px] -ml-8 sm:-ml-12 md:-ml-16 z-10 select-none transition-transform duration-700 hover:-translate-y-4">
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

      </div>

    </section>
  );
}
