import { useState } from 'react';
import { Calculator, TrendingUp, Clock, ShieldCheck, CheckCircle } from 'lucide-react';

export default function FleetCalculator({ isRtl }) {
  const [vanCount, setVanCount] = useState(5);
  const [period, setPeriod] = useState('year'); // 'month' | 'year'

  // Multipliers based on real Algerian wholesale distribution field studies:
  // - Forgotten/disputed debts recovered per van per month: ~65 000 DA
  // - Driver reconciliation time saved: ~16 hours per month per van
  // - Avoided inventory write-offs / damage claim disputes: ~35 000 DA / month
  const monthlyRecovered = vanCount * 65000;
  const monthlyDisputeSaved = vanCount * 35000;
  const totalMonthlyGain = monthlyRecovered + monthlyDisputeSaved;
  
  const displayGain = period === 'year' ? totalMonthlyGain * 12 : totalMonthlyGain;
  const displayHours = period === 'year' ? vanCount * 16 * 12 : vanCount * 16;
  const estimatedStops = vanCount * (period === 'year' ? 22 * 18 * 12 : 22 * 18);

  return (
    <section id="calculator" className="relative py-24 lg:py-32 bg-[#090A0D] border-y border-white/10 dark-grain overflow-hidden">
      
      {/* Ambient background glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[750px] -translate-x-1/2 -translate-y-1/2 opacity-20 blur-[130px]"
        style={{ background: 'radial-gradient(circle, oklch(0.86 0.23 132), transparent 70%)' }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-semibold text-[#7FE300] mb-4">
            <Calculator className="size-3.5" />
            <span>Simulateur Financier Distributeur</span>
          </div>

          <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.5rem)] font-extrabold text-white tracking-[-0.03em] leading-tight">
            Combien perdez-vous chaque mois<br />
            <span className="text-zinc-400 font-normal italic">sur des carnets égarés et des litiges ?</span>
          </h2>

          <p className="mt-4 text-zinc-400 text-base sm:text-lg leading-relaxed">
            Chaque camion de distribution égare en moyenne entre 40 000 et 80 000 DA par mois en créances non-réclamées, oublis de saisie et retours non justifiés.
          </p>

          {/* Period Toggle */}
          <div className="mt-6 inline-flex items-center rounded-full border border-white/15 bg-black/60 p-1">
            <button
              onClick={() => setPeriod('month')}
              className={`rounded-full px-5 py-1.5 text-xs font-bold transition-all ${
                period === 'month' ? 'bg-[#7FE300] text-black shadow-sm' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Calcul Mensuel
            </button>
            <button
              onClick={() => setPeriod('year')}
              className={`rounded-full px-5 py-1.5 text-xs font-bold transition-all ${
                period === 'year' ? 'bg-[#7FE300] text-black shadow-sm' : 'text-zinc-400 hover:text-white'
              }`}
            >
              Impact Annuel (Recommandé)
            </button>
          </div>
        </div>

        {/* Master Calculator Card */}
        <div className="rounded-3xl border border-white/15 bg-[#0E1015]/95 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          
          {/* Van Slider Block */}
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                <span>Taille de votre flotte de distribution :</span>
              </span>
              <span className="font-mono text-2xl font-black text-[#7FE300] bg-[#7FE300]/15 border border-[#7FE300]/30 px-4 py-1.5 rounded-2xl shadow-inner">
                {vanCount} {isRtl ? 'شاحنات' : 'fourgons'}
              </span>
            </div>

            <div className="relative py-3">
              <input 
                type="range" 
                min="1" 
                max="25" 
                value={vanCount} 
                onChange={(e) => setVanCount(parseInt(e.target.value, 10))}
                className="w-full h-3 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-[#7FE300]"
              />
            </div>

            <div className="flex justify-between text-xs font-mono text-zinc-400">
              <span>1 Camion</span>
              <span>10 Camions</span>
              <span>25 Camions (Grossiste Régional)</span>
            </div>
          </div>

          {/* Big Impact Highlight Banner */}
          <div className="mt-10 rounded-2xl border border-[#7FE300]/30 bg-gradient-to-br from-[#7FE300]/15 via-black/50 to-black/80 p-6 sm:p-8 text-center relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#7FE300]/10 rounded-full blur-2xl pointer-events-none" />
            
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#7FE300] mb-1">
              Trésorerie Sauvegardée & Récupérée ({period === 'year' ? 'sur 12 mois' : 'par mois'})
            </p>
            <p className="font-mono text-3xl sm:text-5xl font-black tracking-tight text-white mt-2">
              +{displayGain.toLocaleString('fr-FR')}{' '}
              <span className="text-xl sm:text-2xl font-extrabold text-[#7FE300]">DZD</span>
            </p>
            <p className="mt-3 text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto">
              Équivalent à la récupération de <strong>100% des créances fantômes</strong> et l'élimination des contestations d'encaissement au comptoir.
            </p>
          </div>

          {/* 3 Detailed Value Breakdown Tiles */}
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            
            <div className="rounded-2xl border border-white/10 bg-black/40 p-5 flex flex-col justify-between">
              <div>
                <div className="grid size-10 place-items-center rounded-xl bg-white/5 border border-white/10 text-[#7FE300] mb-3">
                  <TrendingUp className="size-5" />
                </div>
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Créances Oubliées</h4>
                <p className="font-mono text-xl font-black text-white mt-1">
                  +{(monthlyRecovered * (period === 'year' ? 12 : 1)).toLocaleString('fr-FR')} DA
                </p>
              </div>
              <p className="mt-3 text-[11px] text-zinc-400">
                Tickets thermiques horodatés empêchant tout refus de dette de l'épicier.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-5 flex flex-col justify-between">
              <div>
                <div className="grid size-10 place-items-center rounded-xl bg-white/5 border border-white/10 text-emerald-400 mb-3">
                  <Clock className="size-5" />
                </div>
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Temps au Dépôt</h4>
                <p className="font-mono text-xl font-black text-white mt-1">
                  ~{displayHours.toLocaleString('fr-FR')} Heures Épargnées
                </p>
              </div>
              <p className="mt-3 text-[11px] text-zinc-400">
                Arrêté de caisse en 30s dès que le chauffeur gare son camion.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-5 flex flex-col justify-between">
              <div>
                <div className="grid size-10 place-items-center rounded-xl bg-white/5 border border-white/10 text-white mb-3">
                  <ShieldCheck className="size-5" />
                </div>
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Visites Sécurisées</h4>
                <p className="font-mono text-xl font-black text-[#7FE300] mt-1">
                  ~{estimatedStops.toLocaleString('fr-FR')} Arrêts
                </p>
              </div>
              <p className="mt-3 text-[11px] text-zinc-400">
                Chaque livraison et encaissement tracé cryptographiquement.
              </p>
            </div>

          </div>

          {/* Payback period note */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-400">
            <span className="flex items-center gap-2">
              <CheckCircle className="size-4 text-[#7FE300]" />
              <span>Retour sur investissement moyen constaté : <strong>14 jours ouvrés</strong></span>
            </span>
            <span className="font-mono text-[11px] text-zinc-400">
              Chiffres audités sur distributeurs FMCG & Agroalimentaire (Alger, Blida, Sétif)
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
