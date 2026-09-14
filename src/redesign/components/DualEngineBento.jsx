import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldAlert, 
  CheckCircle2, 
  WifiOff, 
  Database, 
  Printer, 
  Clock, 
  Check, 
  RefreshCw
} from 'lucide-react';

export default function DualEngineBento({ isRtl }) {
  // Card 1: Anti-Credit Invariant Simulator State
  const [debtAmount] = useState(45000);
  const [paymentInput, setPaymentInput] = useState(30000);
  const [validationResult, setValidationResult] = useState({
    status: 'valid', // 'valid' | 'blocked'
    message: isRtl ? '✓ الخلاص مقبول : الباقي على الزبون 15 000 دج' : '✓ Paiement accepté : Nouveau solde client 15 000 DA'
  });

  const testPayment = (amount) => {
    setPaymentInput(amount);
    if (amount > debtAmount) {
      setValidationResult({
        status: 'blocked',
        message: isRtl 
          ? `✗ المبلغ (${amount.toLocaleString('fr-FR')} دج) أكبر من الدين (${debtAmount.toLocaleString('fr-FR')} دج). التطبيق يمنع العملية.`
          : `✗ Montant supérieur à la dette (${amount.toLocaleString('fr-FR')} DA vs ${debtAmount.toLocaleString('fr-FR')} DA). Opération bloquée.`
      });
    } else {
      const newB = debtAmount - amount;
      setValidationResult({
        status: 'valid',
        message: isRtl 
          ? `✓ الخلاص مقبول : الباقي على الزبون = ${newB.toLocaleString('fr-FR')} دج.`
          : `✓ Paiement accepté : Nouveau solde dû = ${newB.toLocaleString('fr-FR')} DA.`
      });
    }
  };

  // Card 2: Offline Burst Simulator State
  const [offlineBurstCount, setOfflineBurstCount] = useState(0);
  const [isBursting, setIsBursting] = useState(false);

  const runOfflineBurst = () => {
    setIsBursting(true);
    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      setOfflineBurstCount(prev => prev + 1);
      if (count >= 5) {
        clearInterval(interval);
        setIsBursting(false);
      }
    }, 120);
  };

  return (
    <section id="bento" className="relative py-24 lg:py-32 bg-[#08090B] dark-grain overflow-hidden">
      
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute left-1/3 top-1/2 h-[500px] w-[800px] -translate-y-1/2 opacity-15 blur-[140px]"
        style={{ background: 'radial-gradient(circle, oklch(0.86 0.23 132 / 0.5), transparent 70%)' }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-[#7FE300] mb-4">
            <span className="size-1.5 rounded-full bg-[#7FE300] animate-pulse"></span>
            <span>{isRtl ? "مصمّم للميدان الجزائري" : "Construit pour le terrain algérien"}</span>
          </div>

          <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.8rem)] font-bold text-white tracking-[-0.03em] leading-[1.05]">
            {isRtl ? "مصمّم للطريق." : "Conçu pour la route."}<br />
            <span className="text-zinc-400 font-normal italic">
              {isRtl ? "ماشي للمكتب." : "Pas pour un bureau."}
            </span>
          </h2>

          <p className="mt-5 text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl">
            {isRtl 
              ? "بين انقطاع الشبكة، وحساب السيولة في الشاحنة، ومشاكل الكرّاسات... تحتاج أداة تصمد." 
              : "Entre les coupures de réseau, le cash au cul du camion et les disputes sur les carnets... il vous faut un outil qui tient le coup."
            }
          </p>
        </div>

        {/* 4 BESPOKE BENTO INTERACTIVE MODULES */}
        <div className="grid gap-6 md:grid-cols-12">
          
          {/* TILE 1: Aucun client ne paye plus que ce qu'il doit */}
          <div className="md:col-span-7 rounded-3xl border border-white/10 bg-[#0E1014] p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-white/20 transition-all">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-black border border-white/10 text-[#7FE300]">
                    <ShieldAlert className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">
                      {isRtl ? "حتى زبون ما يخلّص أكثر مما عليه" : "Aucun client ne paye plus que ce qu'il doit"}
                    </h3>
                    <p className="text-xs text-zinc-400">
                      {isRtl ? "حماية أوتوماتيكية مع كل خلاص" : "Protection automatique à chaque paiement"}
                    </p>
                  </div>
                </div>
                <span className="font-mono text-xs text-[#7FE300] bg-[#7FE300]/10 border border-[#7FE300]/30 px-2.5 py-1 rounded-full font-bold">
                  {isRtl ? "قاعدة رصيد" : "Règle RASSID"}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                {isRtl 
                  ? "إذا حانوت عليه 30 000 دج، السوّاق ما يقدرش يسجّل خلاص 45 000 دج. التطبيق يبلوكي ويحمي الكل." 
                  : "Si un magasin doit 30 000 DA, le chauffeur ne peut pas enregistrer un paiement de 45 000 DA. L'application bloque et protège tout le monde."
                }
              </p>

              {/* Interactive Debt Invariant Demo Box */}
              <div className="rounded-2xl border border-white/10 bg-black/50 p-4 sm:p-5">
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="text-zinc-400 font-mono">
                    {isRtl ? "الزبون : بقالة النور" : "CLIENT : Supérette El Nour"}
                  </span>
                  <span className="font-bold text-white font-mono bg-white/10 px-2 py-0.5 rounded">
                    {isRtl ? "الدين الحالي : 45 000 دج" : "Dette en cours : 45 000 DA"}
                  </span>
                </div>

                <div className="text-xs text-zinc-400 mb-2 font-medium">
                  {isRtl ? "جرّب تسجيل مبلغ خلاص :" : "Tester un enregistrement de règlement au comptoir :"}
                </div>

                <div className="grid grid-cols-3 gap-2 mb-4">
                  <button
                    onClick={() => testPayment(30000)}
                    className={`p-2.5 rounded-xl border text-xs font-mono font-bold transition-all ${
                      paymentInput === 30000 && validationResult.status === 'valid'
                        ? 'border-[#7FE300] bg-[#7FE300]/20 text-[#7FE300]'
                        : 'border-white/10 bg-white/5 text-zinc-300 hover:border-white/25'
                    }`}
                  >
                    30 000 {isRtl ? 'دج' : 'DA'}<br />
                    <span className="text-[10px] font-normal text-zinc-400 font-sans">
                      {isRtl ? "خلاص جزئي" : "Règlement partiel"}
                    </span>
                  </button>

                  <button
                    onClick={() => testPayment(45000)}
                    className={`p-2.5 rounded-xl border text-xs font-mono font-bold transition-all ${
                      paymentInput === 45000 && validationResult.status === 'valid'
                        ? 'border-[#7FE300] bg-[#7FE300]/20 text-[#7FE300]'
                        : 'border-white/10 bg-white/5 text-zinc-300 hover:border-white/25'
                    }`}
                  >
                    45 000 {isRtl ? 'دج' : 'DA'}<br />
                    <span className="text-[10px] font-normal text-zinc-400 font-sans">
                      {isRtl ? "تسوية كاملة" : "Solde exact"}
                    </span>
                  </button>

                  <button
                    onClick={() => testPayment(60000)}
                    className={`p-2.5 rounded-xl border text-xs font-mono font-bold transition-all ${
                      validationResult.status === 'blocked'
                        ? 'border-rose-500 bg-rose-500/20 text-rose-300'
                        : 'border-white/10 bg-white/5 text-rose-400 hover:border-rose-500/40'
                    }`}
                  >
                    60 000 {isRtl ? 'دج' : 'DA'}<br />
                    <span className="text-[10px] font-normal text-rose-400 font-sans">
                      {isRtl ? "مبلغ زائد" : "Dépassement test"}
                    </span>
                  </button>
                </div>

                {/* Validation Feedback Banner */}
                <div className={`p-3 rounded-xl border flex items-start gap-2.5 text-xs ${
                  validationResult.status === 'valid'
                    ? 'border-[#7FE300]/30 bg-[#7FE300]/10 text-zinc-200'
                    : 'border-rose-500/40 bg-rose-500/15 text-rose-200'
                }`}>
                  {validationResult.status === 'valid' ? (
                    <CheckCircle2 className="size-4 text-[#7FE300] shrink-0 mt-0.5" />
                  ) : (
                    <ShieldAlert className="size-4 text-rose-400 shrink-0 mt-0.5" />
                  )}
                  <p className="font-medium leading-tight">{validationResult.message}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400">
              <span>{isRtl ? "حماية شغالة على كل المعاملات" : "Protection active sur le terrain"}</span>
              <span className="text-[#7FE300] font-semibold">{isRtl ? "صفر أخطاء في الحساب" : "Zéro erreur de calcul"}</span>
            </div>
          </div>

          {/* TILE 2: Zéro besoin de réseau */}
          <div className="md:col-span-5 rounded-3xl border border-white/10 bg-[#0E1014] p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-[#7FE300]/30 transition-all">
            <div>
              <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-6">
                <span className="grid size-10 place-items-center rounded-xl bg-black border border-white/10 text-[#7FE300]">
                  <Database className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">
                    {isRtl ? "بلا إنترنت يخدم" : "Zéro besoin de réseau"}
                  </h3>
                  <p className="text-xs text-zinc-400">
                    {isRtl ? "سجّل، اطبع وخدم حتى في تحت الأرض" : "Enregistrez et travaillez même en sous-sol"}
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                {isRtl 
                  ? "كل المعلومات محفوظة في التيليفون. كي يرجع النت، كلشي يتزامن أوتوماتيك بلا ما تحس." 
                  : "Toutes vos données sont sauvegardées sur le téléphone. Dès que le réseau revient, tout se synchronise automatiquement."
                }
              </p>

              {/* Stress Test Burst Demo */}
              <div className="rounded-2xl border border-white/10 bg-black/50 p-4">
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="text-zinc-400 font-mono">
                    {isRtl ? "مبيعات مسجلة بلا إنترنت" : "VENTES LOCALES ENREGISTRÉES"}
                  </span>
                  <span className="font-mono font-bold text-[#7FE300] text-sm">
                    {offlineBurstCount} {isRtl ? "عملية" : "ventes"}
                  </span>
                </div>

                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden mb-4">
                  <motion.div 
                    className="bg-[#7FE300] h-full"
                    animate={{ width: `${Math.min(100, (offlineBurstCount % 25) * 4)}%` }}
                    transition={{ duration: 0.2 }}
                  />
                </div>

                <button
                  onClick={runOfflineBurst}
                  disabled={isBursting}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/10 hover:bg-[#7FE300] hover:text-black text-white font-mono text-xs font-bold transition-all active:scale-98 disabled:opacity-50 cursor-pointer"
                >
                  <RefreshCw className={`size-3.5 ${isBursting ? 'animate-spin' : ''}`} />
                  <span>
                    {isBursting 
                      ? (isRtl ? "جاري التسجيل..." : "Enregistrement...") 
                      : (isRtl ? "جرّب 5 بيعات بلا إنترنت" : "Simuler 5 ventes sans internet")
                    }
                  </span>
                </button>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400 font-mono">
              <span className="flex items-center gap-1.5">
                <WifiOff className="size-3 text-amber-400" />
                <span>{isRtl ? "بلا 4G / بلا ويفي" : "Sans 4G / Sans Wifi"}</span>
              </span>
              <span className="text-zinc-400">{isRtl ? "بياناتك محفوظة بأمان" : "Données sécurisées"}</span>
            </div>
          </div>

          {/* TILE 3: Imprimez un bon devant le client */}
          <div className="md:col-span-5 rounded-3xl border border-white/10 bg-[#0E1014] p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-white/20 transition-all">
            <div>
              <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-6">
                <span className="grid size-10 place-items-center rounded-xl bg-black border border-white/10 text-[#7FE300]">
                  <Printer className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">
                    {isRtl ? "اطبع وصل قدّام الزبون" : "Imprimez un bon devant le client"}
                  </h3>
                  <p className="text-xs text-zinc-400">
                    {isRtl ? "طابعة بلوتوث على الحزام، وصل نظيف في 3 ثواني" : "Imprimante Bluetooth de ceinture"}
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                {isRtl 
                  ? "يخدم مع طابعات Sunmi و Xprinter وأغلب الطابعات المتوفرة في السوق الجزائري. وصل نظيف وواضح للزبون في الحين." 
                  : "RASSID se connecte en Bluetooth aux imprimantes de ceinture (Sunmi, Xprinter, etc.) et sort un reçu propre en 3 secondes."
                }
              </p>

              {/* Hardware compatibility badges */}
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 rounded-xl border border-white/10 bg-black/40 text-xs">
                  <span className="font-medium text-white">Sunmi V2 / V2s / V3</span>
                  <span className="rounded bg-[#7FE300]/15 text-[#7FE300] font-mono text-[10px] px-2 py-0.5 font-bold">
                    {isRtl ? "متوافق 100%" : "Compatible"}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl border border-white/10 bg-black/40 text-xs">
                  <span className="font-medium text-white">Xprinter (Bluetooth)</span>
                  <span className="rounded bg-[#7FE300]/15 text-[#7FE300] font-mono text-[10px] px-2 py-0.5 font-bold">
                    {isRtl ? "متوافق 100%" : "Compatible"}
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl border border-white/10 bg-black/40 text-xs">
                  <span className="font-medium text-white">{isRtl ? "كل هواتف أندرويد" : "Tous smartphones Android"}</span>
                  <span className="rounded bg-[#7FE300]/15 text-[#7FE300] font-mono text-[10px] px-2 py-0.5 font-bold">
                    {isRtl ? "يعمل مباشرة" : "Universel"}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400">
              <span>{isRtl ? "بلا كربون بلا وسخ" : "Zéro papier carbone perdu"}</span>
              <span className="text-[#7FE300] font-semibold">{isRtl ? "وصل في 3 ثواني" : "Impression en 3 secondes"}</span>
            </div>
          </div>

          {/* TILE 4: Finissez la journée en 30 secondes */}
          <div className="md:col-span-7 rounded-3xl border border-white/10 bg-[#0E1014] p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-white/20 transition-all">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-black border border-white/10 text-[#7FE300]">
                    <Clock className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">
                      {isRtl ? "كمّل النهار في 30 ثانية" : "Finissez la journée en 30 secondes"}
                    </h3>
                    <p className="text-xs text-zinc-400">
                      {isRtl ? "بلا مشاكل. بلا ما تعاود تحسب." : "Plus de disputes. Plus de recomptage."}
                    </p>
                  </div>
                </div>
                <span className="font-mono text-xs text-white bg-white/10 px-2.5 py-1 rounded-full font-bold">
                  {isRtl ? "ربح 1 ساعة ونص كل مسا" : "Gain : 1h30 / jour"}
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {/* Old method */}
                <div className="rounded-2xl border border-rose-500/20 bg-rose-500/5 p-4">
                  <div className="flex items-center gap-2 text-rose-400 font-bold text-xs mb-2">
                    <span>{isRtl ? "قبل (بالورقة)" : "AVANT (MÉTHODE PAPIER)"}</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-zinc-400">
                    <li className="flex items-start gap-1.5">
                      <span className="text-rose-400 font-bold">✕</span>
                      <span>{isRtl ? "تعاود تحسب الأوراق باليد" : "Recompter les billets à la main"}</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-rose-400 font-bold">✕</span>
                      <span>{isRtl ? "تفتّش على الوصولات في الجيوب" : "Chercher les bons dans les poches"}</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-rose-400 font-bold">✕</span>
                      <span>{isRtl ? "خلافات يومية حول الحسابات والصندوق" : "Disputes quotidiennes sur la caisse"}</span>
                    </li>
                  </ul>
                </div>

                {/* RASSID method */}
                <div className="rounded-2xl border border-[#7FE300]/30 bg-[#7FE300]/10 p-4">
                  <div className="flex items-center gap-2 text-[#7FE300] font-bold text-xs mb-2">
                    <Check className="size-3.5" />
                    <span>{isRtl ? "مع رصيد" : "AVEC RASSID"}</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-zinc-200">
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#7FE300] font-bold">✓</span>
                      <span>{isRtl ? "التطبيق يحسب كلشي أوتوماتيك" : "L'application calcule tout automatiquement"}</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#7FE300] font-bold">✓</span>
                      <span>{isRtl ? "تحصيلات − مصاريف = كاش واضح" : "Encaissé − dépenses = cash à remettre"}</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#7FE300] font-bold">✓</span>
                      <span>{isRtl ? "30 ثانية، صفر مشاكل" : "30 secondes, zéro dispute"}</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* End of tour balance HUD */}
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
                <div>
                  <span className="text-zinc-400 text-[10px] uppercase">
                    {isRtl ? "الكاش المحصّل" : "Espèces Encaissées"}
                  </span>
                  <p className="text-base font-bold text-white mt-0.5">840 000 DZD</p>
                </div>
                <div>
                  <span className="text-zinc-400 text-[10px] uppercase">
                    {isRtl ? "الديون الجديدة" : "Créances du Jour"}
                  </span>
                  <p className="text-base font-bold text-[#7FE300] mt-0.5">645 000 DZD</p>
                </div>
                <div className="text-end">
                  <span className="text-zinc-400 text-[10px] uppercase">
                    {isRtl ? "حالة الصندوق" : "État de Caisse"}
                  </span>
                  <p className="text-base font-bold text-emerald-400 mt-0.5">
                    {isRtl ? "مضبوطة (0 دج فارق)" : "ÉQUILIBRÉE (0 DA)"}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400">
              <span>{isRtl ? "التحقق بنقرتين" : "Vérification en 2 clics"}</span>
              <span className="text-[#7FE300] font-semibold">{isRtl ? "راحة البال كل مسا" : "Tranquillité chaque soir"}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
