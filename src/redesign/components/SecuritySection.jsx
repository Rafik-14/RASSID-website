import { useState } from 'react';
import { Lock, ShieldAlert, ShieldCheck, RefreshCw, AlertTriangle, Key, FileCode } from 'lucide-react';

export default function SecuritySection() {
  const [isTampered, setIsTampered] = useState(false);

  const toggleTamper = () => {
    setIsTampered(!isTampered);
  };

  return (
    <section id="security" className="relative py-24 lg:py-32 bg-[#08090C] border-y border-white/10 dark-grain overflow-hidden">
      
      {/* Dynamic ambient halo */}
      <div 
        aria-hidden="true"
        className={`pointer-events-none absolute left-1/2 top-1/2 h-[550px] w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-20 blur-[150px] transition-colors duration-700 ${
          isTampered ? 'bg-rose-600' : 'bg-[#7FE300]'
        }`}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-semibold text-[#7FE300] mb-4">
            <Lock className="size-3.5" />
            <span>Grand Livre Cryptographique Inviolable</span>
          </div>

          <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.6rem)] font-extrabold text-white tracking-[-0.03em] leading-tight">
            Chaque transaction scellée au SHA-256.<br />
            <span className="text-zinc-400 font-normal italic">Aucune suppression, aucun trucage possible.</span>
          </h2>

          <p className="mt-4 text-zinc-400 text-base sm:text-lg leading-relaxed">
            Dans un carnet papier, on arrache une page. Dans un fichier Excel, on modifie une cellule. Dans RASSID, chaque vente est mathématiquement chaînée à la précédente.
          </p>
          
          {/* Interactive Tamper Simulator Trigger */}
          <div className="mt-8">
            <button
              onClick={toggleTamper}
              className={`inline-flex items-center gap-2.5 rounded-full px-6 py-3 text-xs sm:text-sm font-bold transition-all shadow-xl active:scale-95 ${
                isTampered 
                  ? 'bg-rose-500 text-white shadow-rose-500/40 ring-2 ring-rose-400 animate-pulse' 
                  : 'bg-white/10 border border-white/20 text-zinc-200 hover:border-[#7FE300]/50 hover:bg-white/15'
              }`}
            >
              {isTampered ? (
                <>
                  <RefreshCw className="size-4 animate-spin" />
                  <span>Rétablir l'Intégrité du Grand Livre</span>
                </>
              ) : (
                <>
                  <AlertTriangle className="size-4 text-amber-400" />
                  <span>Simuler une tentative de falsification de dette</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Chain Diagram Container */}
        <div className={`mt-14 rounded-3xl border p-6 sm:p-10 transition-colors duration-500 backdrop-blur-xl ${
          isTampered 
            ? 'border-rose-500/50 bg-rose-950/20 shadow-[0_0_50px_rgba(244,63,94,0.15)]' 
            : 'border-white/15 bg-[#0E1015]/90 shadow-2xl'
        }`}>
          
          {/* Status Header */}
          <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs">
            <div className="flex items-center gap-2 font-mono text-zinc-400">
              <Key className="size-3.5 text-[#7FE300]" />
              <span>REGISTRE SHA-256 · HASH CHAIN INVARIANTE</span>
            </div>

            <span className={`font-mono font-bold inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs border ${
              isTampered 
                ? 'text-rose-400 bg-rose-500/15 border-rose-500/30' 
                : 'text-[#7FE300] bg-[#7FE300]/10 border-[#7FE300]/30'
            }`}>
              {isTampered ? <ShieldAlert className="size-4" /> : <ShieldCheck className="size-4" />}
              {isTampered ? 'ANOMALIE DÉTECTÉE : REGISTRE REJETÉ' : 'CONFORMITÉ AUDIT : 100% INVIOLABLE'}
            </span>
          </div>

          {/* Connected Blocks Stream */}
          <div className="mt-8 grid gap-4 md:grid-cols-3 relative">
            
            {/* Block 1 */}
            <div className="rounded-2xl border border-white/10 bg-black/40 p-5 font-mono text-xs text-zinc-300">
              <div className="flex justify-between text-[10px] text-zinc-400 pb-2 border-b border-white/5">
                <span>BLOC #1041</span>
                <span className="text-[#7FE300]">10:14:02 UTC</span>
              </div>
              <p className="mt-3 font-sans font-bold text-white text-sm">Livraison · Supérette Nour</p>
              <p className="font-sans text-xs text-zinc-400 mt-0.5">Montant certifié : +125 000 DA</p>
              
              <div className="mt-4 rounded-xl bg-black/70 p-3 text-[10px] text-zinc-400 space-y-1 border border-white/5">
                <p><span className="text-zinc-500">PARENT:</span> GENESIS_BLOC_00</p>
                <p className="text-[#7FE300] truncate"><span className="text-zinc-500">HASH:</span> 7a9f4b...c38e</p>
              </div>
            </div>

            {/* Block 2 (The Tampered Node) */}
            <div className={`rounded-2xl border p-5 font-mono text-xs transition-all duration-300 ${
              isTampered 
                ? 'border-rose-500 bg-rose-900/30 text-rose-200 ring-2 ring-rose-500/40 shadow-xl' 
                : 'border-[#7FE300]/40 bg-black/40 text-zinc-300 ring-1 ring-[#7FE300]/20'
            }`}>
              <div className="flex justify-between text-[10px] pb-2 border-b border-white/5">
                <span>BLOC #1042</span>
                <span className={isTampered ? 'text-rose-400 font-bold' : 'text-[#7FE300]'}>
                  {isTampered ? 'SIGNATURE INVALIDE' : '11:45:18 UTC'}
                </span>
              </div>
              <p className="mt-3 font-sans font-bold text-white text-sm">Paiement · Épicerie Bilal</p>
              <p className={`font-sans text-xs mt-0.5 font-bold ${isTampered ? 'text-rose-400' : 'text-[#7FE300]'}`}>
                {isTampered ? 'TENTATIVE MODIF : -10 000 DA (Falsifié)' : 'Montant certifié : -80 000 DA'}
              </p>
              
              <div className={`mt-4 rounded-xl p-3 text-[10px] space-y-1 border ${
                isTampered ? 'bg-black/90 border-rose-500/40' : 'bg-black/70 border-white/5 text-zinc-400'
              }`}>
                <p><span className="text-zinc-500">PARENT:</span> 7a9f4b...c38e</p>
                <p className={`truncate font-bold ${isTampered ? 'text-rose-400' : 'text-[#7FE300]'}`}>
                  <span className="text-zinc-500">HASH:</span> {isTampered ? 'ERR_CHECKSUM_MISMATCH' : 'e82b1c...4490'}
                </p>
              </div>
            </div>

            {/* Block 3 */}
            <div className={`rounded-2xl border p-5 font-mono text-xs transition-all ${
              isTampered ? 'border-rose-500/30 bg-black/30 opacity-60' : 'border-white/10 bg-black/40 text-zinc-300'
            }`}>
              <div className="flex justify-between text-[10px] text-zinc-400 pb-2 border-b border-white/5">
                <span>BLOC #1043</span>
                <span className={isTampered ? 'text-rose-400' : 'text-[#7FE300]'}>
                  {isTampered ? 'CHAÎNE INTERROMPUE' : '12:02:44 UTC'}
                </span>
              </div>
              <p className="mt-3 font-sans font-bold text-white text-sm">Retour Avarie · Baraka</p>
              <p className="font-sans text-xs text-zinc-400 mt-0.5">Montant certifié : -14 500 DA</p>
              
              <div className="mt-4 rounded-xl bg-black/70 p-3 text-[10px] text-zinc-400 space-y-1 border border-white/5">
                <p><span className="text-zinc-500">PARENT:</span> {isTampered ? 'LIEN ROMPU' : 'e82b1c...4490'}</p>
                <p className="truncate"><span className="text-zinc-500">HASH:</span> 33ff09...d112</p>
              </div>
            </div>

          </div>

          {/* Cryptographic Formula Breakdown */}
          <div className="mt-8 rounded-2xl border border-white/10 bg-black/50 p-4 sm:p-5 text-xs font-mono">
            <div className="flex items-center gap-2 text-zinc-400 mb-2">
              <FileCode className="size-4 text-[#7FE300]" />
              <span className="font-bold text-white">Formule du Sceau Cryptographique RASSID :</span>
            </div>
            <div className="rounded-xl bg-zinc-950 p-3 text-zinc-300 overflow-x-auto border border-white/5">
              <code>SHA256( txId | storeId | txType | amount | createdAt | parentHash )</code>
            </div>
            <p className="mt-3 text-[11px] text-zinc-400 font-sans leading-relaxed">
              Toute modification a posteriori d'un montant, d'un client ou d'une date modifie irrémédiablement le condensat SHA-256. Le serveur PostgreSQL et l'audit de tournée rejettent l'anomalie en 0 seconde.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
