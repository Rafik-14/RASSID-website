import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import mountainLandscape from '../assets/synex_mountain_landscape.jpg';
import rassidIcon from '../assets/rassid-icon.svg';

export default function WhyRassidSection({ t, isRtl }) {
  const rows = [
    {
      title: isRtl ? "تسجيل المبيعات والتسليم الميداني" : "Enregistrement des ventes & livraisons",
      othersCheck: true
    },
    {
      title: isRtl ? "عمل 100% بدون إنترنت (قاعدة SQLite محلية)" : "Mode 100% hors-ligne autonome (SQLite)",
      othersCheck: false
    },
    {
      title: isRtl ? "سجل مالي مشفر وموثق رياضياً SHA-256" : "Grand livre scellé SHA-256 infalsifiable",
      othersCheck: false
    },
    {
      title: isRtl ? "متابعة ديون المحلات والتنبيه التلقائي للمتأخرات" : "Fiches épiceries & alertes impayés",
      othersCheck: true
    },
    {
      title: isRtl ? "مطابقة الصندوق وإغلاق اليومية في 5 دقائق" : "Clôture de caisse & réconciliation en 5 min",
      othersCheck: false
    },
    {
      title: isRtl ? "مراقبة مخزون الشاحنة ومنع التلاعب بالأعطال" : "Garde de stock fourgon & validation des avaries",
      othersCheck: false
    }
  ];

  return (
    <section id="pourquoi-rassid" className="relative overflow-hidden py-24 sm:py-32 bg-[#07080A]">
      
      {/* Background Mountain Landscape (Dark, Moody & Atmospheric) */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img 
          src={mountainLandscape} 
          alt="Mossy rolling hills in darkness" 
          className="w-full h-full object-cover object-center filter saturate-[1.05] brightness-[0.48] contrast-[1.12]"
        />
        {/* Deep dark gradient overlay that preserves organic hill texture behind the matrix */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#07080A] via-black/25 to-[#07080A]" />
        
        {/* Smooth bottom blend into next white section */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/20 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================= */}
        {/* SYNEX SECTION HEADER                                          */}
        {/* ============================================================= */}
        <div className="mx-auto max-w-3xl text-center">
          
          {/* Eyebrow Pill */}
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-[11px] font-mono tracking-widest text-white/90 backdrop-blur-md shadow-sm uppercase"
          >
            <span>{t.why_badge || "POURQUOI RASSID"}</span>
          </motion.div>

          {/* Master Title (Compact 2 lines max) */}
          <motion.h2 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-[clamp(2.1rem,4.2vw,3.4rem)] font-bold leading-[1.12] tracking-tight text-white drop-shadow-sm max-w-3xl mx-auto"
          >
            {t.why_title_1 || "Conçu pour le terrain."}
            <br className="hidden sm:inline" />{" "}
            <span className="text-white/85">
              {t.why_title_2 || "Pas pour les carnets d'hier."}
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-zinc-300 font-medium"
          >
            {t.why_sub || "Connectez vos livreurs, vos stocks mobiles et votre comptabilité — tous synchronisés dans un grand livre infalsifiable pour une visibilité totale."}
          </motion.p>
        </div>

        {/* ============================================================= */}
        {/* COMPARISON MATRIX (LARGER, ACCURATELY ALIGNED, SYNEX PALE PILL) */}
        {/* ============================================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto max-w-5xl mt-14 sm:mt-20"
        >
          {/* Column Headers directly above the table */}
          <div className="grid grid-cols-[1fr_105px_105px] sm:grid-cols-[1fr_175px_175px] md:grid-cols-[1fr_210px_210px] items-center h-14 sm:h-[76px] mb-2 px-3 sm:px-8">
            <div className="pe-2">
              <span className="text-xs sm:text-sm font-medium tracking-wide text-white/70">
                {t.why_col_capabilities || "Capacités fondamentales"}
              </span>
            </div>
            
            {/* Middle empty space: Elevated Rassid card header protrudes into here */}
            <div />

            {/* Right Column Header: moved a little to the right */}
            <div className="text-center flex items-center justify-center translate-x-3 sm:translate-x-6 rtl:-translate-x-3 rtl:sm:-translate-x-6">
              <span className="text-xs sm:text-sm font-medium tracking-wide text-white/70 whitespace-nowrap">
                {t.why_col_others || "Carnets & Excel"}
              </span>
            </div>
          </div>

          {/* Frosted Glass Comparison Matrix Container */}
          <div className="relative">
            
            {/* Multi-layered Frosted Glass Backdrop Panel */}
            <div className="absolute inset-0 rounded-[28px] sm:rounded-[34px] border border-white/[0.18] bg-gradient-to-b from-white/[0.14] via-white/[0.06] to-white/[0.02] backdrop-blur-2xl backdrop-saturate-[180%] shadow-[0_30px_90px_rgba(0,0,0,0.65),inset_0_1px_1px_rgba(255,255,255,0.40),inset_0_-1px_1px_rgba(0,0,0,0.30)] overflow-hidden pointer-events-none">
              {/* Specular hairline on top border */}
              <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent" />
              
              {/* Radial ambient sheen from top */}
              <div className="absolute -inset-x-20 top-0 h-40 bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none" />
            </div>

            {/* Content Grid (Sits on top so floating card can protrude) */}
            <div className="relative z-10 grid grid-cols-[1fr_105px_105px] sm:grid-cols-[1fr_175px_175px] md:grid-cols-[1fr_210px_210px]">
              
              {/* Column 1: Core capabilities list */}
              <div className="flex flex-col divide-y divide-white/[0.08] ps-4 sm:ps-8 pe-3 sm:pe-6">
                {rows.map((row, idx) => (
                  <div key={idx} className="h-14 sm:h-[72px] flex items-center">
                    <span className="text-xs sm:text-base font-medium text-white/95 leading-tight">
                      {row.title}
                    </span>
                  </div>
                ))}
              </div>

              {/* Column 2: Elevated RASSID Card (Larger, Floating Pastel Pill) */}
              <div className="relative">
                <div className="absolute inset-x-1 sm:inset-x-2 -top-14 sm:-top-[76px] bottom-0 rounded-[22px] sm:rounded-[28px] bg-[#E9EAC8] text-black border border-black/[0.08] shadow-[0_24px_55px_rgba(0,0,0,0.48),0_4px_12px_rgba(0,0,0,0.20)] flex flex-col justify-between z-20 overflow-hidden">
                  
                  {/* Card Brand Header */}
                  <div className="h-14 sm:h-[76px] flex items-center justify-center gap-2 border-b border-black/[0.08] px-2">
                    <img 
                      src={rassidIcon} 
                      alt="RASSID" 
                      className="h-4 sm:h-5 w-auto object-contain shrink-0" 
                    />
                    <span className="font-display text-xs sm:text-base font-black tracking-tight text-black">
                      {t.why_col_rassid || "rassid"}
                    </span>
                  </div>

                  {/* 5 Row Checkmarks */}
                  <div className="flex-1 flex flex-col divide-y divide-black/[0.06]">
                    {rows.map((_, idx) => (
                      <div key={idx} className="h-14 sm:h-[72px] flex items-center justify-center">
                        <Check className="size-4 sm:size-5.5 stroke-[2.5] text-black" />
                      </div>
                    ))}
                  </div>

                </div>
              </div>

              {/* Column 3: Other platform / Carnets */}
              <div className="flex flex-col divide-y divide-white/[0.08] translate-x-3 sm:translate-x-6 rtl:-translate-x-3 rtl:sm:-translate-x-6">
                {rows.map((row, idx) => (
                  <div key={idx} className="h-14 sm:h-[72px] flex items-center justify-center text-center">
                    {row.othersCheck ? (
                      <Check className="size-4 sm:size-5.5 stroke-[2] text-white/90" />
                    ) : (
                      <span className="text-[11px] sm:text-sm font-normal text-white/45">
                        {isRtl ? "غير متوفر" : "Absent"}
                      </span>
                    )}
                  </div>
                ))}
              </div>

            </div>

          </div>

        </motion.div>

        {/* Financial Impact Comparison Callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 sm:mt-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-start"
        >
          <div>
            <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider block">
              {t.why_cost_label || "Bénéfice opérationnel direct constaté :"}
            </span>
            <p className="text-xs sm:text-sm text-zinc-300 mt-0.5">
              {t.why_cost_sub || "Constaté sur plus de 180 tournées de distribution réelles en Algérie."}
            </p>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 shrink-0">
            <div className="px-3.5 py-1.5 rounded-xl bg-[#7FE300]/15 border border-[#7FE300]/40 text-[#7FE300] text-xs sm:text-sm font-black font-mono">
              RASSID : {t.why_cost_rassid || "0 DA de perte"}
            </div>
            <div className="px-3.5 py-1.5 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs sm:text-sm font-bold font-mono">
              Carnets : {t.why_cost_others || "-15% à -25%"}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
