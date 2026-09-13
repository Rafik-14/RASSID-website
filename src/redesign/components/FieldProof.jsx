import { CheckCircle2, Quote, Truck, ShieldCheck, Clock } from 'lucide-react';

export default function FieldProof({ t, isRtl }) {
  const quote = isRtl
    ? "ما بقاش مشكل الدفاتر الضائعة ولا الحسابات التقريبية على أوراق مقطعة. رصيد عطانا وضوح كامل على واش تسال كل بقالة، وسائقينا ما بقاوش يضيعوا ساعتين كل عشية يعاودوا يحسبوا الدراهم والوصولات. كل تاجر عندو وصل مطبوع بالرصيد القديم والرصيد الجديد : نزاعات الكريدي اختفت تماماً."
    : "Plus de carnets perdus, plus de calculs approximatifs sur des bouts de papier sales. RASSID nous donne une clarté totale sur ce que chaque épicerie nous doit, et mes livreurs ne passent plus deux heures à recompter des liasses de billets le soir. Chaque commerçant a son ticket imprimé avec son ancien solde et son nouveau solde : les contestations de crédit ont tout simplement disparu.";

  return (
    <section id="temoignage" className="relative py-20 sm:py-28 lg:py-32 bg-white overflow-hidden">
      
      {/* Background subtle radial ambient glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-80 bg-[#7FE300]/[0.03] rounded-full blur-3xl" 
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Modern Split Showcase Container */}
        <div className="relative rounded-[32px] sm:rounded-[40px] bg-[#FBFBFA] border border-zinc-200/90 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.05),0_1px_3px_rgba(0,0,0,0.02)] overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            
            {/* ========================================================= */}
            {/* 1. CREDENTIALS & OPERATIONAL DISPATCH (4 COLS)            */}
            {/* ========================================================= */}
            <div className={`lg:col-span-4 bg-[#0A0B0E] text-white p-7 sm:p-9 lg:p-10 flex flex-col justify-between relative overflow-hidden border-b lg:border-b-0 border-zinc-800 ${
              isRtl ? 'lg:border-l lg:border-r-0' : 'lg:border-r'
            }`}>
              
              {/* Subtle ambient green glow in dark panel */}
              <div 
                aria-hidden="true" 
                className={`pointer-events-none absolute -bottom-20 w-60 h-60 bg-[#7FE300]/15 rounded-full blur-3xl ${
                  isRtl ? '-right-20' : '-left-20'
                }`} 
              />

              <div className="relative z-10">
                {/* Status Pill */}
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white text-[11px] font-bold uppercase ${
                  isRtl ? 'font-sans' : 'font-mono tracking-wider'
                }`}>
                  <span className="size-1.5 rounded-full bg-[#7FE300] inline-block animate-pulse" />
                  <span>{t?.field_proof_badge || (isRtl ? "شهادة ميدانية حية" : "Retour Terrain")}</span>
                </div>

                {/* Company & Role */}
                <div className="mt-6">
                  <div className={`text-xs font-bold text-[#7FE300] uppercase ${
                    isRtl ? 'font-sans' : 'font-mono tracking-wider'
                  }`}>
                    {isRtl ? "مؤسسة توزيع معتمدة" : "Entreprise cliente"}
                  </div>
                  <h4 className="mt-1 text-xl sm:text-2xl font-black font-display text-white tracking-tight">
                    {t?.field_proof_author_company || (isRtl ? "تاجر جملة وموزّع مواد غذائية" : "Grossiste Agroalimentaire")}
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-zinc-400 font-medium">
                    {t?.field_proof_author_location || (isRtl ? "البليدة · الجزائر · بومرداس" : "Blida · Alger · Boumerdès")}
                  </p>
                </div>

                {/* Key Operational Badges */}
                <div className="mt-8 space-y-3.5 text-xs font-semibold">
                  <div className="flex items-center gap-2.5 text-zinc-300">
                    <Truck className="size-4 text-[#7FE300] shrink-0" />
                    <span>{t?.field_proof_author_fleet || (isRtl ? "أسطول نشط من 12 شاحنة" : "12 camions en tournée active")}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-zinc-300">
                    <Clock className="size-4 text-[#7FE300] shrink-0" />
                    <span>{isRtl ? "إغلاق الصندوق في 5 دقائق" : "Clôture de caisse en 5 min"}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-zinc-300">
                    <ShieldCheck className="size-4 text-[#7FE300] shrink-0" />
                    <span>{isRtl ? "سجل مشفر 100% بدون إنترنت" : "100% hors-ligne & scellé SHA-256"}</span>
                  </div>
                </div>
              </div>

              {/* Author Attribution at bottom of left panel */}
              <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex items-center gap-3">
                <div className="size-10 rounded-xl bg-white/10 text-[#7FE300] font-mono font-black text-xs flex items-center justify-center border border-white/15 shrink-0">
                  DZ
                </div>
                <div>
                  <div className="text-sm font-bold text-white leading-snug">
                    {t?.field_proof_author_role || (isRtl ? "الإدارة العامة" : "Direction Générale")}
                  </div>
                  <div className="text-[11px] text-zinc-400 font-medium">
                    {isRtl ? "مستخدم لنظام رصيد" : "En production sur le terrain"}
                  </div>
                </div>
              </div>

            </div>

            {/* ========================================================= */}
            {/* 2. THE MASTER PULL QUOTE (8 COLS)                         */}
            {/* ========================================================= */}
            <div className="lg:col-span-8 p-8 sm:p-12 lg:p-14 flex flex-col justify-between bg-[#FBFBFA]">
              
              <div>
                {/* Top Quote Icon */}
                <div className="inline-flex items-center justify-center size-12 rounded-2xl bg-[#7FE300]/20 text-zinc-950 border border-[#7FE300]/40 mb-6 sm:mb-8">
                  <Quote className={`size-6 text-zinc-950 fill-[#7FE300] ${isRtl ? 'scale-x-[-1]' : ''}`} />
                </div>

                {/* The Big Quote */}
                <blockquote className="font-display text-[clamp(1.4rem,2.5vw,2.15rem)] font-semibold text-zinc-950 leading-[1.4] tracking-[-0.015em] text-balance">
                  « {quote} »
                </blockquote>
              </div>

              {/* Bottom Verification Ribbon */}
              <div className="mt-8 sm:mt-10 pt-6 border-t border-zinc-200/80 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="inline-flex items-center gap-2 text-zinc-600 font-medium">
                  <CheckCircle2 className="size-4 text-[#3f7c00]" />
                  <span>{isRtl ? "عمليات بيع وتحصيل حقيقية مسجلة في الميدان" : "Données d'exploitation et tournées réelles constatées"}</span>
                </div>
                
                <span className="font-mono text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                  RASSID PRO v3.0
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
