import { useState } from 'react';
import { Check, CheckCircle2, ArrowRight } from 'lucide-react';
import PrimaryButton from './PrimaryButton';

export default function Pricing({ t, isRtl }) {
  const [cycle, setCycle] = useState('6m'); // '6m' | '1y'

  const soloWaUrl = isRtl
    ? "https://wa.me/213550000000?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%AA%D8%AC%D8%B1%D8%A8%D8%A9%20%D8%A8%D8%A7%D9%82%D8%A9%20%D8%B3%D9%88%D9%84%D9%88%20(SOLO)%20%D9%84%D8%B4%D8%A7%D8%AD%D9%86%D8%AA%D9%8A"
    : "https://wa.me/213550000000?text=Bonjour,%20je%20souhaite%20démarrer%20l'essai%20gratuit%20du%20plan%20SOLO%20pour%20mon%20fourgon";

  const orgWaUrl = isRtl
    ? "https://wa.me/213550000000?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%B7%D9%84%D8%A8%20%D8%B3%D8%B9%D8%B1%20%D9%84%D8%A8%D8%A7%D9%82%D8%A9%20%D8%A7%D9%84%D9%85%D8%A4%D8%B3%D8%B3%D8%A9%20%D9%88%D8%A7%D9%84%D8%A3%D8%B3%D8%B7%D9%88%D9%84%20(ORGANISATION)"
    : "https://wa.me/213550000000?text=Bonjour,%20je%20souhaite%20obtenir%20un%20devis%20pour%20le%20plan%20ORGANISATION%20(flotte%20avec%20console%20web)";

  const soloFeatures = isRtl ? [
    "تطبيق أندرويد يعمل 100% بدون إنترنت (SQLite)",
    "سجل حسابات مشفر وموثق رياضياً SHA-256",
    "فواتير ومتابعة ديون المحلات في جولتك",
    "تطبيق صارم لقاعدة عدم نزول الرصيد تحت الصفر",
    "طباعة وصولات حرارية فورية بلوتوث 58/80 ملم",
    "مزامنة سحابية تلقائية فور توفر الشبكة",
    "ترخيص فردي لسائق مستقل واحد (بدون لوحة تحكم)"
  ] : [
    "Application Android 100% hors-ligne autonome (SQLite)",
    "Grand livre scellé cryptographiquement SHA-256",
    "Fiches magasins et suivi strict des créances de tournée",
    "Blocage strict des anomalies (règle anti-crédit inviolable)",
    "Impression reçus thermiques Bluetooth 58 mm et 80 mm",
    "Sauvegarde cloud automatique dès reconnexion",
    "Licence individuelle chauffeur (sans console web centrale)"
  ];

  const orgFeaturesCol1 = isRtl ? [
    "كل ما هو مشمول في باقة سولو",
    "لوحة تحكم إدارية سحابية للمدير والمحاسب",
    "سائقوك ينضمون مجاناً برمز دعوة (0 دج عليهم)",
    "مراقبة لحظية لحركة الأموال والديون",
    "مطابقة الصندوق وإغلاق الحساب اليومي في 5 دقائق"
  ] : [
    "Toutes les fonctionnalités de l'application Solo",
    "Console web centrale pour le gérant et la comptabilité",
    "Chauffeurs invités gratuitement (0 DZD à leur charge)",
    "Suivi des tournées, encaissements et soldes en direct",
    "Réconciliation de caisse & audit journalier express"
  ];

  const orgFeaturesCol2 = isRtl ? [
    "إدارة المخزون وتوزيع السلع بين المستودع والشاحنات",
    "صلاحيات متعددة (مدير، محاسب، سائق موزع)",
    "تصدير فوري إلى Excel (.xlsx) و CSV للمحاسب",
    "تهيئة مخصصة وتدريب ميداني لفريقك",
    "دعم فني متميز ومباشر مع المؤسس 7 أيام/7"
  ] : [
    "Gestion multi-dépôts et transferts de stocks camions",
    "Rôles & permissions (Directeur, Comptable, Chauffeurs)",
    "Exports comptables Excel (.xlsx) & CSV en un clic",
    "Déploiement sur mesure & formation de votre équipe",
    "Support prioritaire VIP 7j/7 direct avec le fondateur"
  ];

  return (
    <section id="pricing" className="relative py-24 sm:py-32 lg:py-36 bg-white text-zinc-950 border-t border-zinc-100 overflow-hidden">
      


      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          
          {/* Badge Pill */}
          <div className="mb-4 inline-flex items-center justify-center">
            <span className="inline-flex items-center px-4 py-1 rounded-full border border-zinc-900/10 bg-zinc-100 text-zinc-900 font-mono text-xs font-bold tracking-wider uppercase">
              {t?.pricing_badge || "TARIFS & FORMULES"}
            </span>
          </div>

          <h2 className="font-display text-[clamp(2.3rem,4.8vw,3.8rem)] font-extrabold text-zinc-950 tracking-tight leading-[1.12] text-balance">
            {t?.pricing_title || "Des formules taillées pour votre réalité terrain."}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-zinc-600 font-medium leading-relaxed max-w-2xl text-balance">
            {t?.pricing_sub || "Que vous soyez chauffeur indépendant ou patron d'une flotte avec dépôt, chaque dinar est tracé sans mauvaise surprise."}
          </p>

          {/* Neo-brutalist Billing Cycle Switcher (Inspired by Uiverse Andrew Demchenko) */}
          <div className="mt-9 inline-flex items-center p-1 rounded-full border-2 border-zinc-950 bg-white shadow-[3px_3px_0_0_#18181b]">
            <button
              type="button"
              onClick={() => setCycle('6m')}
              className={`relative px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                cycle === '6m'
                  ? 'bg-[#7FE300] text-zinc-950 shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              {t?.pricing_toggle_6m || "6 Mois"}
            </button>

            <button
              type="button"
              onClick={() => setCycle('1y')}
              className={`relative px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
                cycle === '1y'
                  ? 'bg-[#7FE300] text-zinc-950 shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              <span>{t?.pricing_toggle_1y || "1 An"}</span>
              <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold tracking-tight ${
                cycle === '1y' ? 'bg-zinc-950 text-[#7FE300]' : 'bg-[#7FE300]/30 text-zinc-950'
              }`}>
                {t?.pricing_toggle_save || "2 mois offerts"}
              </span>
            </button>
          </div>

        </div>

        {/* Pricing Cards Grid (Solo: 5 cols, Org: 7 cols) */}
        <div className="mt-14 lg:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-8 items-stretch">
          
          {/* ============================================================= */}
          {/* 1. LEFT CARD: SOLO (RASSID LIME BACKGROUND)                  */}
          {/* ============================================================= */}
          <div className="lg:col-span-5 rounded-[32px] sm:rounded-[36px] bg-[#7FE300] text-zinc-950 p-8 sm:p-10 flex flex-col justify-between border-2 border-zinc-950 shadow-[6px_6px_0_0_#18181b] transition-all duration-300 hover:shadow-[8px_8px_0_0_#18181b]">
            <div>
              
              {/* Badge */}
              <div className="inline-flex">
                <span className="px-3.5 py-1 rounded-full border border-zinc-950/25 bg-black/10 text-zinc-950 text-[11px] font-bold uppercase tracking-wider">
                  {t?.pricing_solo_badge || "INDÉPENDANT"}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-5 font-display text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight">
                {t?.pricing_solo_title || "Solo"}
              </h3>

              {/* Subtitle */}
              <p className="mt-2.5 text-xs sm:text-sm text-zinc-950/85 font-medium leading-relaxed">
                {t?.pricing_solo_desc || "L'application mobile complète pour un chauffeur autonome qui gère sa propre tournée."}
              </p>

              {/* Features List (Single Column with clean checkmarks) */}
              <ul className="mt-8 space-y-3.5 text-xs sm:text-sm text-zinc-950 font-semibold">
                {soloFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="size-4 shrink-0 text-zinc-950 mt-0.5" strokeWidth={2.8} />
                    <span className="leading-snug">{feat}</span>
                  </li>
                ))}
              </ul>

            </div>

            {/* Bottom Section */}
            <div className="mt-10 pt-6 border-t border-zinc-950/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              
              {/* Price */}
              <div>
                <div className="flex items-baseline gap-1.5">
                  <span className="font-display text-3xl sm:text-4xl font-black text-zinc-950 tracking-tight">
                    {cycle === '6m' 
                      ? (t?.pricing_solo_price_6m || "24 000 DA")
                      : (t?.pricing_solo_price_1y || "39 000 DA")
                    }
                  </span>
                  <span className="text-xs sm:text-sm text-zinc-900/80 font-bold">
                    {cycle === '6m'
                      ? (t?.pricing_solo_period_6m || "/ 6 mois")
                      : (t?.pricing_solo_period_1y || "/ an")
                    }
                  </span>
                </div>
                <p className="text-[11px] text-zinc-800 mt-0.5 font-semibold">
                  {isRtl ? "سعر اشتراك محدد مسبقاً" : "Tarif fixe tout compris"}
                </p>
              </div>

              {/* CTA Button (Site's Secondary Outline Button) */}
              <PrimaryButton
                variant="outline"
                href={soloWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                icon={ArrowRight}
                className="shrink-0"
              >
                {t?.pricing_solo_btn || "Démarrer l'essai 7j"}
              </PrimaryButton>

            </div>

          </div>

          {/* ============================================================= */}
          {/* 2. RIGHT CARD: ORGANISATION (DEEP MATTE OBSIDIAN CARD)        */}
          {/* ============================================================= */}
          <div className="lg:col-span-7 rounded-[32px] sm:rounded-[36px] bg-[#0A0B0E] text-white p-8 sm:p-10 flex flex-col justify-between border-2 border-zinc-800 shadow-2xl relative transition-all duration-300 hover:border-zinc-700">
            
            {/* Subtle glow inside card */}
            <div 
              aria-hidden="true" 
              className="pointer-events-none absolute -bottom-16 -right-16 w-80 h-80 bg-[#7FE300]/[0.06] rounded-full blur-[100px]" 
            />

            <div>
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2">
                <span className="px-3.5 py-1 rounded-full border border-white/20 bg-white/5 text-white text-[11px] font-bold uppercase tracking-wider">
                  {t?.pricing_org_badge || "RECOMMANDÉ · FLOTTES & DÉPÔTS"}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-5 font-display text-3xl sm:text-4xl font-black text-white tracking-tight">
                {t?.pricing_org_title || "Organisation"}
              </h3>

              {/* Subtitle */}
              <p className="mt-2.5 text-xs sm:text-sm text-zinc-300 font-medium leading-relaxed max-w-2xl">
                {t?.pricing_org_desc || "Abonnement global entreprise : le gérant souscrit le forfait, et invite toute son équipe de chauffeurs sans aucun frais pour eux."}
              </p>

              {/* Free Drivers Highlight Banner */}
              <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#7FE300]/15 border border-[#7FE300]/40 text-[#7FE300] text-xs font-bold">
                <CheckCircle2 className="size-3.5 shrink-0 text-[#7FE300]" />
                <span>
                  {isRtl 
                    ? "سائقوك ينضمون مجاناً إلى المؤسسة بدون أي دفع من طرفهم"
                    : "Vos chauffeurs ne paient rien · Inclus dans l'abonnement entreprise"
                  }
                </span>
              </div>

              {/* Features List (TWO COLUMNS as in reference screenshot) */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 text-xs sm:text-sm text-zinc-200 font-medium">
                
                {/* Column 1 */}
                <div className="space-y-3.5">
                  {orgFeaturesCol1.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="size-4 shrink-0 text-white mt-0.5 fill-white/10" strokeWidth={2.2} />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Column 2 */}
                <div className="space-y-3.5">
                  {orgFeaturesCol2.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="size-4 shrink-0 text-white mt-0.5 fill-white/10" strokeWidth={2.2} />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>

            {/* Bottom Section */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              
              {/* Price / Custom Quote indicator */}
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight">
                    {t?.pricing_org_price || "Sur Devis"}
                  </span>
                  <span className="text-xs sm:text-sm text-zinc-400 font-bold">
                    {t?.pricing_org_period || "/ selon flotte"}
                  </span>
                </div>
                <p className="text-[11px] text-[#7FE300] mt-0.5 font-bold flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-[#7FE300] inline-block animate-pulse" />
                  <span>{t?.pricing_org_badge_custom || "Tarif personnalisé après échange"}</span>
                </p>
              </div>

              {/* CTA Button (Site's PrimaryButton in Vibrant Rassid Lime) */}
              <PrimaryButton
                href={orgWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                dark
                icon={ArrowRight}
                className="shrink-0"
              >
                {t?.pricing_org_btn || "Demander un devis"}
              </PrimaryButton>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
