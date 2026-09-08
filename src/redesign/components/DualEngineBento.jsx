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

export default function DualEngineBento() {
  // Card 1: Anti-Credit Invariant Simulator State
  const [debtAmount] = useState(45000);
  const [paymentInput, setPaymentInput] = useState(30000);
  const [validationResult, setValidationResult] = useState({
    status: 'valid', // 'valid' | 'blocked'
    message: 'Opération autorisée : Nouveau solde client 15 000 DA'
  });

  const testPayment = (amount) => {
    setPaymentInput(amount);
    if (amount > debtAmount) {
      setValidationResult({
        status: 'blocked',
        message: `OPÉRATION BLOQUÉE : L'encaissement (${amount.toLocaleString('fr-FR')} DA) excède la dette client (${debtAmount.toLocaleString('fr-FR')} DA). Un magasin ne peut jamais être créditeur d'un chauffeur.`
      });
    } else {
      const newB = debtAmount - amount;
      setValidationResult({
        status: 'valid',
        message: `AUTORISÉ : Nouveau solde dû par le client = ${newB.toLocaleString('fr-FR')} DA. Aucune dérive de trésorerie.`
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
            <span>Architecture Métier · Spécifique à la Distribution Algérienne</span>
          </div>

          <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.8rem)] font-extrabold text-white tracking-[-0.03em] leading-[1.05]">
            Construit pour la réalité brute du comptoir.<br />
            <span className="text-zinc-400 font-normal italic">Pas pour un bureau aseptisé.</span>
          </h2>

          <p className="mt-5 text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl">
            Entre les zones blanches de montagne, les règlements en espèces au cul du camion et les litiges sur les carnets de crédit, les logiciels classiques échouent. RASSID applique des garde-fous stricts.
          </p>
        </div>

        {/* ============================================================= */}
        {/* 4 BESPOKE BENTO INTERACTIVE MODULES                           */}
        {/* ============================================================= */}
        <div className="grid gap-6 md:grid-cols-12">
          
          {/* ----------------------------------------------------------- */}
          {/* TILE 1 (Span 7): LE VERROU ANTI-CRÉANCE (Zero Negative Debt) */}
          {/* ----------------------------------------------------------- */}
          <div className="md:col-span-7 rounded-3xl border border-white/10 bg-[#0E1014] p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-white/20 transition-all">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-black border border-white/10 text-[#7FE300]">
                    <ShieldAlert className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">
                      Verrou Financier : Solde Négatif Strictement Interdit
                    </h3>
                    <p className="text-xs text-zinc-400">Règle comptable inviolable au comptoir</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-[#7FE300] bg-[#7FE300]/10 border border-[#7FE300]/30 px-2.5 py-1 rounded-full font-bold">
                  Invariant RASSID
                </span>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                Un problème fréquent chez les grossistes : un chauffeur enregistre un encaissement supérieur à la dette pour masquer un trou, ou fait un faux retour qui rend le magasin créditeur. Sur RASSID, le moteur rejette instantanément toute tentative.
              </p>

              {/* Interactive Debt Invariant Demo Box */}
              <div className="rounded-2xl border border-white/10 bg-black/50 p-4 sm:p-5">
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="text-zinc-400 font-mono">CLIENT : Supérette El Nour (Bab Ezzouar)</span>
                  <span className="font-bold text-white font-mono bg-white/10 px-2 py-0.5 rounded">
                    Dette en cours : 45 000 DA
                  </span>
                </div>

                <div className="text-xs text-zinc-400 mb-2 font-medium">
                  Tester un enregistrement de règlement au comptoir :
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
                    30 000 DA<br />
                    <span className="text-[10px] font-normal text-zinc-400 font-sans">Règlement partiel</span>
                  </button>

                  <button
                    onClick={() => testPayment(45000)}
                    className={`p-2.5 rounded-xl border text-xs font-mono font-bold transition-all ${
                      paymentInput === 45000 && validationResult.status === 'valid'
                        ? 'border-[#7FE300] bg-[#7FE300]/20 text-[#7FE300]'
                        : 'border-white/10 bg-white/5 text-zinc-300 hover:border-white/25'
                    }`}
                  >
                    45 000 DA<br />
                    <span className="text-[10px] font-normal text-zinc-400 font-sans">Solde exact</span>
                  </button>

                  <button
                    onClick={() => testPayment(60000)}
                    className={`p-2.5 rounded-xl border text-xs font-mono font-bold transition-all ${
                      validationResult.status === 'blocked'
                        ? 'border-rose-500 bg-rose-500/20 text-rose-300'
                        : 'border-white/10 bg-white/5 text-rose-400 hover:border-rose-500/40'
                    }`}
                  >
                    60 000 DA<br />
                    <span className="text-[10px] font-normal text-rose-400 font-sans">Dépassement test</span>
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
              <span>Sécurité active sur les 58 wilayas</span>
              <span className="text-[#7FE300] font-semibold">Impossibilité mathématique d'anomalie</span>
            </div>
          </div>

          {/* ----------------------------------------------------------- */}
          {/* TILE 2 (Span 5): MODE HORS-LIGNE LOCAL (op-sqlite)          */}
          {/* ----------------------------------------------------------- */}
          <div className="md:col-span-5 rounded-3xl border border-white/10 bg-[#0E1014] p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-[#7FE300]/30 transition-all">
            <div>
              <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-6">
                <span className="grid size-10 place-items-center rounded-xl bg-black border border-white/10 text-[#7FE300]">
                  <Database className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">Moteur Local op-sqlite</h3>
                  <p className="text-xs text-zinc-400">Zéro dépendance au réseau mobile</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                Les applications web traditionnelles tournent en boucle dès qu'un camion passe sous un tunnel ou dans un village reculé. RASSID exécute ses requêtes directement sur le processeur du téléphone en <strong>1.8 milliseconde</strong>.
              </p>

              {/* Stress Test Burst Demo */}
              <div className="rounded-2xl border border-white/10 bg-black/50 p-4">
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="text-zinc-400 font-mono">ÉCRITURES LOCALES EXÉCUTÉES</span>
                  <span className="font-mono font-bold text-[#7FE300] text-sm">
                    {offlineBurstCount} transactions
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
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/10 hover:bg-[#7FE300] hover:text-black text-white font-mono text-xs font-bold transition-all active:scale-98 disabled:opacity-50"
                >
                  <RefreshCw className={`size-3.5 ${isBursting ? 'animate-spin' : ''}`} />
                  <span>{isBursting ? 'Écriture en cours...' : 'Simuler 5 Ventes Hors-Ligne (1.8ms)'}</span>
                </button>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400 font-mono">
              <span className="flex items-center gap-1.5">
                <WifiOff className="size-3 text-amber-400" />
                <span>Sans 4G / Sans Wifi</span>
              </span>
              <span className="text-zinc-400">Chiffrement SQLCipher</span>
            </div>
          </div>

          {/* ----------------------------------------------------------- */}
          {/* TILE 3 (Span 5): IMPRIMANTES BLUETOOTH ESC/POS 58 & 80mm    */}
          {/* ----------------------------------------------------------- */}
          <div className="md:col-span-5 rounded-3xl border border-white/10 bg-[#0E1014] p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-white/20 transition-all">
            <div>
              <div className="flex items-center gap-3 border-b border-white/10 pb-4 mb-6">
                <span className="grid size-10 place-items-center rounded-xl bg-black border border-white/10 text-[#7FE300]">
                  <Printer className="size-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-white">Reçus Thermiques ESC/POS</h3>
                  <p className="text-xs text-zinc-400">Imprimantes portables ceinture & terminaux</p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                En Algérie, l'épicier fait confiance au papier. RASSID se connecte en Bluetooth à toutes les imprimantes du marché (Sunmi, Xprinter, MPT-II) et émet un ticket officiel bilingue (français/arabe) avec code-barres et signature d'audit.
              </p>

              {/* Hardware compatibility badges */}
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 rounded-xl border border-white/10 bg-black/40 text-xs">
                  <span className="font-medium text-white">Sunmi V2 / V2s / V3 Mix</span>
                  <span className="rounded bg-[#7FE300]/15 text-[#7FE300] font-mono text-[10px] px-2 py-0.5 font-bold">
                    Testé & Certifié
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl border border-white/10 bg-black/40 text-xs">
                  <span className="font-medium text-white">Xprinter XP-P300 (Bluetooth)</span>
                  <span className="rounded bg-[#7FE300]/15 text-[#7FE300] font-mono text-[10px] px-2 py-0.5 font-bold">
                    Testé & Certifié
                  </span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl border border-white/10 bg-black/40 text-xs">
                  <span className="font-medium text-white">Tous Smartphones Android 9 à 15</span>
                  <span className="rounded bg-[#7FE300]/15 text-[#7FE300] font-mono text-[10px] px-2 py-0.5 font-bold">
                    Universel
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400">
              <span>Zéro papier carbone perdu</span>
              <span className="text-[#7FE300] font-semibold">Impression en 2 secondes</span>
            </div>
          </div>

          {/* ----------------------------------------------------------- */}
          {/* TILE 4 (Span 7): ARRÊTÉ DE TOURNÉE DU SOIR EN 30 SECONDES   */}
          {/* ----------------------------------------------------------- */}
          <div className="md:col-span-7 rounded-3xl border border-white/10 bg-[#0E1014] p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:border-white/20 transition-all">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-black border border-white/10 text-[#7FE300]">
                    <Clock className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-white">
                      Arrêté de Caisse du Soir en 30 Secondes
                    </h3>
                    <p className="text-xs text-zinc-400">Fini les heures de recomptage au dépôt</p>
                  </div>
                </div>
                <span className="font-mono text-xs text-white bg-white/10 px-2.5 py-1 rounded-full font-bold">
                  Gain : 1h30 / jour
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {/* Old method */}
                <div className="rounded-2xl border border-rose-500/20 bg-rose-500/5 p-4">
                  <div className="flex items-center gap-2 text-rose-400 font-bold text-xs mb-2">
                    <span>MÉTHODE PAPIER CLASSIQUE</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-zinc-400">
                    <li className="flex items-start gap-1.5">
                      <span className="text-rose-400 font-bold">✕</span>
                      <span>Factures froissées, illisibles ou perdues</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-rose-400 font-bold">✕</span>
                      <span>Écarts de caisse inexpliqués de 15 000 DA</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-rose-400 font-bold">✕</span>
                      <span>Disputes quotidiennes avec les livreurs</span>
                    </li>
                  </ul>
                </div>

                {/* RASSID method */}
                <div className="rounded-2xl border border-[#7FE300]/30 bg-[#7FE300]/10 p-4">
                  <div className="flex items-center gap-2 text-[#7FE300] font-bold text-xs mb-2">
                    <Check className="size-3.5" />
                    <span>AVEC RASSID V2.4</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-zinc-200">
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#7FE300] font-bold">✓</span>
                      <span>Stock sorti vs stock vendu vérifié au centime</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#7FE300] font-bold">✓</span>
                      <span>Total espèces à verser calculé instantanément</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-[#7FE300] font-bold">✓</span>
                      <span>Écart de caisse final : <strong>0 DA garanti</strong></span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* End of tour balance HUD */}
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
                <div>
                  <span className="text-zinc-400 text-[10px] uppercase">Versements Espèces à Recevoir</span>
                  <p className="text-base font-bold text-white mt-0.5">840 000 DZD</p>
                </div>
                <div>
                  <span className="text-zinc-400 text-[10px] uppercase">Créances Nouvelles Actées</span>
                  <p className="text-base font-bold text-[#7FE300] mt-0.5">645 000 DZD</p>
                </div>
                <div className="text-end">
                  <span className="text-zinc-400 text-[10px] uppercase">Statut Réconciliation</span>
                  <p className="text-base font-bold text-emerald-400 mt-0.5">ÉQUILIBRÉ (0 DA)</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-zinc-400">
              <span>Clôture journalière validée en un clic</span>
              <span className="text-[#7FE300] font-semibold">Trésorerie verrouillée chaque soir</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
