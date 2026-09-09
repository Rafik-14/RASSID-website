import { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';

export default function Pricing({ t }) {
  const [billingCycle, setBillingCycle] = useState('quarterly');

  return (
    <section id="pricing" className="relative py-20 lg:py-28 bg-white border-t border-zinc-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#5EA800] mb-3">
            <span>Investissement Transparent</span>
          </p>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold text-zinc-950 tracking-tight">
            {t.pricing_title}
          </h2>
          <p className="mt-3 text-zinc-600 text-sm sm:text-base">
            {t.pricing_sub}
          </p>

          {/* Billing Switcher */}
          <div className="mt-8 inline-flex items-center rounded-full border border-zinc-200 bg-zinc-100 p-1.5 text-xs font-semibold">
            <button
              onClick={() => setBillingCycle('quarterly')}
              className={`rounded-full px-4 py-2 transition-all ${
                billingCycle === 'quarterly'
                  ? 'bg-white text-zinc-950 font-bold shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              {t.pricing_toggle_quarterly}
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`rounded-full px-4 py-2 transition-all flex items-center gap-1.5 ${
                billingCycle === 'annual'
                  ? 'bg-[#7FE300] text-zinc-950 font-bold shadow-sm'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              <Sparkles className="size-3" />
              <span>{t.pricing_toggle_annual}</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        {billingCycle === 'quarterly' ? (
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            
            {/* 1 Mois */}
            <div className="rounded-3xl border border-zinc-200 bg-white p-7 flex flex-col justify-between shadow-sm hover:border-zinc-300 hover:shadow-md transition-all">
              <div>
                <span className="rounded-full bg-zinc-100 border border-zinc-200 px-3 py-1 text-xs font-bold text-zinc-700">
                  1 Mois (Mensuel)
                </span>
                <div className="mt-4">
                  <span className="font-display text-4xl font-extrabold text-zinc-950 tnum">4 900 DA</span>
                  <span className="text-xs text-zinc-500"> / mois</span>
                </div>
                <p className="mt-3 text-xs text-zinc-600 leading-relaxed">
                  Idéal pour tester RASSID sur une première tournée sans engagement long.
                </p>

                <ul className="mt-6 space-y-2.5 text-xs text-zinc-700">
                  <li className="flex items-center gap-2"><Check className="size-3.5 text-[#5EA800]" /> 1 fourgon + 1 accès Web</li>
                  <li className="flex items-center gap-2"><Check className="size-3.5 text-[#5EA800]" /> Mode 100% hors-ligne illimité</li>
                  <li className="flex items-center gap-2"><Check className="size-3.5 text-[#5EA800]" /> Impression reçus Bluetooth</li>
                  <li className="flex items-center gap-2"><Check className="size-3.5 text-[#5EA800]" /> Support technique direct</li>
                </ul>
              </div>

              <a
                href="#contact"
                className="mt-8 block w-full rounded-full border border-zinc-900 bg-white py-3 text-center font-display text-xs font-bold text-zinc-900 transition-all hover:bg-zinc-900 hover:text-white"
              >
                Tester 7 Jours Gratuits
              </a>
            </div>

            {/* 3 Mois (Featured) */}
            <div className="rounded-3xl border-2 border-zinc-950 bg-gradient-to-b from-zinc-50/80 to-white p-7 flex flex-col justify-between relative shadow-[0_12px_36px_rgba(0,0,0,0.06)]">
              <div className="absolute -top-3 start-8 rounded-full bg-zinc-950 px-3 py-0.5 text-[10px] font-extrabold text-white uppercase tracking-wider">
                Le Plus Populaire · Économisez 800 DA
              </div>
              <div>
                <span className="rounded-full bg-[#7FE300]/20 border border-[#7FE300]/50 px-3 py-1 text-xs font-bold text-zinc-950">
                  3 Mois (Trimestre)
                </span>
                <div className="mt-4">
                  <span className="font-display text-4xl font-extrabold text-zinc-950 tnum">13 900 DA</span>
                  <span className="text-xs text-zinc-500"> / 3 mois</span>
                </div>
                <p className="mt-3 text-xs text-zinc-600 leading-relaxed">
                  Calibré pour structurer vos tournées sur un trimestre d'activité complet.
                </p>

                <ul className="mt-6 space-y-2.5 text-xs text-zinc-800">
                  <li className="flex items-center gap-2"><Check className="size-3.5 text-[#5EA800]" /> Tout de la formule 1 mois</li>
                  <li className="flex items-center gap-2"><Check className="size-3.5 text-[#5EA800]" /> Alertes créances avancées (&gt;21 jours)</li>
                  <li className="flex items-center gap-2"><Check className="size-3.5 text-[#5EA800]" /> Export Excel / CSV pour comptable</li>
                  <li className="flex items-center gap-2"><Check className="size-3.5 text-[#5EA800]" /> Assistance prioritaire 7j/7</li>
                </ul>
              </div>

              <a
                href="#contact"
                className="mt-8 block w-full rounded-full bg-zinc-950 py-3 text-center font-display text-xs font-bold text-white transition-all hover:bg-zinc-800 active:scale-95 shadow-md"
              >
                Choisir la Formule 3 Mois
              </a>
            </div>

            {/* 6 Mois */}
            <div className="rounded-3xl border border-zinc-200 bg-white p-7 flex flex-col justify-between shadow-sm hover:border-zinc-300 hover:shadow-md transition-all">
              <div>
                <span className="rounded-full bg-zinc-100 border border-zinc-200 px-3 py-1 text-xs font-bold text-zinc-700">
                  6 Mois (Semestre)
                </span>
                <div className="mt-4">
                  <span className="font-display text-4xl font-extrabold text-zinc-950 tnum">26 900 DA</span>
                  <span className="text-xs text-zinc-500"> / 6 mois</span>
                </div>
                <p className="mt-3 text-xs text-zinc-600 leading-relaxed">
                  Économisez 2 500 DA avec un semestre complet de sérénité sur vos comptes.
                </p>

                <ul className="mt-6 space-y-2.5 text-xs text-zinc-700">
                  <li className="flex items-center gap-2"><Check className="size-3.5 text-[#5EA800]" /> Tout de la formule 3 mois</li>
                  <li className="flex items-center gap-2"><Check className="size-3.5 text-[#5EA800]" /> Formation personnalisée des chauffeurs</li>
                  <li className="flex items-center gap-2"><Check className="size-3.5 text-[#5EA800]" /> Rapports d'audit mensuels</li>
                  <li className="flex items-center gap-2"><Check className="size-3.5 text-[#5EA800]" /> Ligne VIP dédiée</li>
                </ul>
              </div>

              <a
                href="#contact"
                className="mt-8 block w-full rounded-full border border-zinc-900 bg-white py-3 text-center font-display text-xs font-bold text-zinc-900 transition-all hover:bg-zinc-900 hover:text-white"
              >
                Choisir la Formule 6 Mois
              </a>
            </div>

          </div>
        ) : (
          /* Annual View (VIP) */
          <div className="mt-14 mx-auto max-w-3xl rounded-3xl border-2 border-zinc-950 bg-gradient-to-b from-zinc-50/80 to-white p-8 sm:p-12 shadow-[0_16px_40px_rgba(0,0,0,0.06)] relative">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="rounded-full bg-[#7FE300] px-3 py-1 text-xs font-bold text-zinc-950 uppercase tracking-wider">
                  Meilleure Offre Partenaire
                </span>
                <div className="mt-3">
                  <span className="font-display text-5xl font-black text-zinc-950 tnum">39 900 DA</span>
                  <span className="text-sm text-zinc-500"> / an</span>
                  <span className="ms-3 text-sm text-zinc-400 line-through tnum">58 800 DA</span>
                </div>
              </div>
              <span className="rounded-2xl bg-[#7FE300]/15 border border-[#7FE300]/40 px-4 py-2 font-mono text-sm font-bold text-zinc-950">
                Économisez 18 900 DA
              </span>
            </div>

            <p className="mt-4 text-sm text-zinc-600 leading-relaxed">
              La solution totale pour votre flotte. Déploiement sans limite, formation complète de vos chauffeurs sur place ou à distance, et suivi permanent de votre encaissement.
            </p>

            <div className="my-6 h-px bg-zinc-200"></div>

            <div className="grid gap-3 sm:grid-cols-2 text-xs text-zinc-700">
              <div className="flex items-center gap-2"><Check className="size-4 text-[#5EA800]" /> Flotte de fourgons illimitée</div>
              <div className="flex items-center gap-2"><Check className="size-4 text-[#5EA800]" /> Formation de toute votre équipe</div>
              <div className="flex items-center gap-2"><Check className="size-4 text-[#5EA800]" /> Sauvegardes cloud quotidiennes</div>
              <div className="flex items-center gap-2"><Check className="size-4 text-[#5EA800]" /> Ligne directe fondateur 24h/24</div>
            </div>

            <a
              href="#contact"
              className="mt-8 block w-full rounded-full bg-zinc-950 py-4 text-center font-display text-sm font-bold text-white shadow-lg hover:bg-zinc-800 active:scale-95 transition-all"
            >
              Sélectionner la Formule Annuelle
            </a>
          </div>
        )}

      </div>
    </section>
  );
}
