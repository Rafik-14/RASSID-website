import { motion } from 'framer-motion';
import { Lock, ArrowUpRight } from 'lucide-react';
import appIcon from '../assets/rassid_app_icon.webp';
import dashboardConsole from '../assets/dashboard_console.webp';

export default function WebDashboardSection({ t }) {
  return (
    <section id="console-centrale" className="relative overflow-hidden bg-[#07080A] py-20 sm:py-28 lg:py-32 border-t border-white/[0.06]">
      
      {/* ============================================================= */}
      {/* 1. AMBIENT BACKGROUND GRADIENTS (AAVE STYLE WITH RASSID GREEN) */}
      {/* ============================================================= */}
      
      {/* Ambient soft glow: bottom-left */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -left-32 sm:-left-20 bottom-0 h-[500px] w-[500px] rounded-full bg-[#7FE300]/[0.08] blur-[140px]" 
      />

      {/* Ambient soft glow: bottom-right */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -right-32 sm:-right-20 bottom-10 h-[500px] w-[500px] rounded-full bg-[#7FE300]/[0.07] blur-[140px]" 
      />

      {/* Soft floor glow beneath the browser console */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 bottom-0 h-[380px] w-[850px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_bottom,rgba(127,227,0,0.12)_0%,transparent_75%)] blur-[90px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================= */}
        {/* 2. SECTION HEADER (AAVE EDITORIAL LOCKUP)                     */}
        {/* ============================================================= */}
        <div className="mx-auto max-w-4xl text-center flex flex-col items-center">
          
          {/* Logo + "RASSID web console" prominent mark (No Pill) */}
          <motion.div 
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-5"
          >
            <img 
              src={appIcon} 
              alt="RASSID Logo" 
              className="w-8 h-8 sm:w-9 sm:h-9 object-cover rounded-xl shadow-lg ring-1 ring-white/15" 
            />
            <span className="text-[17px] sm:text-[19px] font-bold tracking-tight text-white">
              RASSID web console
            </span>
          </motion.div>

          {/* Headline with Aave-inspired gradient color effect */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-[clamp(2.2rem,5vw,4.2rem)] font-bold leading-[1.08] tracking-[-0.03em] text-white"
          >
            <span>{t?.dashboard_section_title_prefix || "Toute la"}</span>{" "}
            <span className="bg-gradient-to-r from-[#D6FFA3] via-[#7FE300] to-[#38E09D] bg-clip-text text-transparent">
              {t?.dashboard_section_title_gradient || "Puissance Centrale"}
            </span>{" "}
            <span>{t?.dashboard_section_title_suffix || "du Grand Livre"}</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-[16px] sm:text-[18px] leading-relaxed text-zinc-400 font-medium"
          >
            {t?.dashboard_section_sub || "Supervisez votre flotte de fourgons, auditez chaque centime encaissé et clôturez vos journées en 5 minutes chrono."}
          </motion.p>

          {/* Action Buttons (Aave White Pill + Muted Pill) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <a 
              href="https://app.rassid.dz"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-semibold text-sm text-black shadow-xl transition-all hover:bg-zinc-100 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{t?.dashboard_section_btn_console || "Ouvrir la Console"}</span>
              <ArrowUpRight className="size-4" />
            </a>
            <a 
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-8 py-3.5 text-sm font-semibold text-zinc-200 backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/[0.08]"
            >
              <span>{t?.dashboard_section_btn_demo || "Découvrir les fonctionnalités"}</span>
            </a>
          </motion.div>

        </div>

        {/* ============================================================= */}
        {/* 3. HIGH-QUALITY BROWSER FRAME MOCKUP (REAL RETINA SCREENSHOT) */}
        {/* ============================================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.25 }}
          className="relative mx-auto mt-12 sm:mt-16 max-w-6xl overflow-hidden rounded-2xl sm:rounded-3xl border border-white/[0.12] bg-[#0C0D11] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.95),0_0_60px_-15px_rgba(127,227,0,0.12)] ring-1 ring-white/10 [mask-image:linear-gradient(to_bottom,black_72%,black_90%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_72%,black_90%,transparent_100%)]"
        >
          {/* macOS Window Titlebar */}
          <div className="flex items-center justify-between border-b border-white/[0.08] bg-[#111318] px-4 py-3 sm:py-3.5 select-none">
            
            {/* Traffic Light Dots */}
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-[#FF5F56] border border-black/30 shadow-sm" />
              <span className="size-3 rounded-full bg-[#FFBD2E] border border-black/30 shadow-sm" />
              <span className="size-3 rounded-full bg-[#27C93F] border border-black/30 shadow-sm" />
            </div>

            {/* Centered URL Bar */}
            <div className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-black/50 px-4 sm:px-6 py-1 font-mono text-xs text-zinc-400 shadow-inner">
              <Lock className="size-3 text-[#7FE300]" />
              <span className="text-zinc-300 font-medium">app.rassid.dz</span>
              <span className="hidden sm:inline text-zinc-600">/overview</span>
            </div>

            {/* Live Status Indicator */}
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-0.5 font-mono text-[10px] text-zinc-400">
                <span className="size-1.5 rounded-full bg-[#7FE300] animate-pulse" />
                <span className="hidden sm:inline font-semibold text-zinc-300">LIVE SYNC</span>
              </span>
            </div>

          </div>

          {/* Authentic High-Resolution Dashboard Screenshot */}
          <div className="relative w-full bg-[#08090B] overflow-hidden">
            <img 
              src={dashboardConsole} 
              alt="Console Web Centrale RASSID - Aperçu en direct" 
              className="w-full h-auto block select-none"
              loading="lazy"
            />
            {/* Subtle bottom shadow overlay to ease the edge */}
            <div 
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-20 sm:h-32 bg-gradient-to-t from-[#07080A]/70 via-[#07080A]/20 to-transparent" 
            />
          </div>

        </motion.div>

      </div>
    </section>
  );
}
