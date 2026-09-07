import { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';
import { playTactile } from '../utils/audio';

export default function Pricing({ t, onTrialClick }) {
  const [billingCycle, setBillingCycle] = useState('quarterly');

  return (
    <section id="pricing" className="relative py-20 lg:py-28 bg-[#090A0B]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#7FE300] mb-3">
            <span>Investissement Transparent</span>
          </p>
          <h2 className="font-display text-[clamp(2.2rem,5vw,3.6rem)] font-extrabold text-white tracking-tight">
            {t.pricing_title}
          </h2>
          <p className="mt-3 text-zinc-400 text-sm sm:text-base">
            {t.pricing_sub}
          </p>

          {/* Billing Switcher */}
          <div className="mt-8 inline-flex items-center rounded-full border border-white/10 bg-[#14171C] p-1.5 text-xs font-semibold">
            <button
              onClick={() => {
                playTactile('click');
                setBillingCycle('quarterly');
              }}
              className={`rounded-full px-4 py-2 transition-all ${
                billingCycle === 'quarterly'
                  ? 'bg-white text-black font-bold shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {t.pricing_toggle_quarterly}
            </button>
            <button
              onClick={() => {
                playTactile('click');
                setBillingCycle('annual');
              }}
              className={`rounded-full px-4 py-2 transition-all flex items-center gap-1.5 ${
                billingCycle === 'annual'
                  ? 'bg-[#7FE300] text-black font-bold shadow-md'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <span>{t.pricing_toggle_annual}</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        {billingCycle === 'quarterly' ? (
          <div className="mt-14 grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            
            {/* 1 Mois */}
            <div className="rounded-3xl border border-white/10 bg-[#121418] p-7 flex flex-col justify-between transition-all hover:border-white/25">
              <div>
                <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-bold text-zinc-300">
                  1 Mois
                </span>
                <div className="mt-4">
                  <span className="font-display text-4xl font-extrabold text-white tnum">4 900 DA</span>
                  <span className="text-xs text-zinc-400"> / mois</span>
                </div>
                <p className="mt-3 text-xs text-zinc-400">
                  Idéal pour tester sur une première tournée sans engagement de durée.
                </p>

                <ul className="mt-6 space-y-2.5 text-xs text-zinc-300">
                  <li className="flex items-center gap-2"><Check className="size-3.5 text-[#7FE300]" /> Application Mobile illimitée</li>
                  <li className="flex items-center gap-2"><Check className="size-3.5 text-[#7FE300]" /> Console Web de direction</li>
                  <li className="flex items-center gap-2"><Check className="size-3.5 text-[#7FE300]" /> Reçus thermiques Bluetooth</li>
                  <li className="flex items-center gap-2"><Check className="size-3.5 text-[#7FE300]" /> Support par téléphone & WhatsApp</li>
                </ul>
              </div>

              <button
                onClick={() => {
                  playTactile('success');
                  onTrialClick();
                }}
                className="mt-8 block w-full rounded-full border border-white/20 bg-white/5 py-3 text-center font-display text-xs font-bold text-white transition-all hover:bg-white hover:text-black"
              >
                Tester 7 Jours Gratuits
              </button>
            </div>

            {/* 3 Mois (Featured) */}
            <div className="rounded-3xl border-2 border-[#7FE300] bg-[#141820] p-7 flex flex-col justify-between relative shadow-[0_0_30px_rgba(127,227,0,0.15)]">
              <div className="absolute -top-3 start-8 rounded-full bg-[#7FE300] px-3 py-0.5 text-[10px] font-extrabold text-black uppercase tracking-wider">
                Le Plus Populaire · Économisez 800 DA
              </div>
              <div>
                <span className="rounded-full bg-[#7FE300]/20 border border-[#7FE300]/40 px-3 py-1 text-xs font-bold text-[#7FE300]">
                  3 Mois (Trimestre)
                </span>
                <div className="mt-4">
                  <span className="font-display text-4xl font-extrabold text-white tnum">13 900 DA</span>
                  <span className="text-xs text-zinc-400"> / 3 mois</span>
                </div>
                <p className="mt-3 text-xs text-zinc-400">
                  Calibré pour structurer vos tournées sur un trimestre d'activité complet.
                </p>

                <ul className="mt-6 space-y-2.5 text-xs text-zinc-300">
                  <li className="flex items-center gap-2"><Check className="size-3.5 text-[#7FE300]" /> Tout de la formule 1 mois</li>
                  <li className="flex items-center gap-2"><Check className="size-3.5 text-[#7FE300]" /> Alertes créances avancées (&gt;21 jours)</li>
                  <li className="flex items-center gap-2"><Check className="size-3.5 text-[#7FE300]" /> Export Excel / CSV pour comptable</li>
                  <li className="flex items-center gap-2"><Check className="size-3.5 text-[#7FE300]" /> Assistance prioritaire 7j/7</li>
                </ul>
              </div>

              <button
                onClick={() => {
                  playTactile('success');
                  onTrialClick();
                }}
                className="mt-8 block w-full rounded-full bg-[#7FE300] py-3 text-center font-display text-xs font-bold text-black transition-all hover:brightness-105 active:scale-95 shadow-md"
              >
                Choisir la Formule 3 Mois
              </button>
            </div>

            {/* 6 Mois */}
            <div className="rounded-3xl border border-white/10 bg-[#121418] p-7 flex flex-col justify-between transition-all hover:border-white/25">
              <div>
                <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-bold text-zinc-300">
                  6 Mois (Semestre)
                </span>
                <div className="mt-4">
                  <span className="font-display text-4xl font-extrabold text-white tnum">26 900 DA</span>
                  <span className="text-xs text-zinc-400"> / 6 mois</span>
                </div>
                <p className="mt-3 text-xs text-zinc-400">
                  Économisez 2 500 DA avec un semestre complet de sérénité sur vos comptes.
                </p>

                <ul className="mt-6 space-y-2.5 text-xs text-zinc-300">
                  <li className="flex items-center gap-2"><Check className="size-3.5 text-[#7FE300]" /> Tout de la formule 3 mois</li>
                  <li className="flex items-center gap-2"><Check className="size-3.5 text-[#7FE300]" /> Formation personnalisée des chauffeurs</li>
                  <li className="flex items-center gap-2"><Check className="size-3.5 text-[#7FE300]" /> Rapports d'audit mensuels</li>
                  <li className="flex items-center gap-2"><Check className="size-3.5 text-[#7FE300]" /> Ligne VIP dédiée</li>
                </ul>
              </div>

              <button
                onClick={() => {
                  playTactile('success');
                  onTrialClick();
                }}
                className="mt-8 block w-full rounded-full border border-white/20 bg-white/5 py-3 text-center font-display text-xs font-bold text-white transition-all hover:bg-white hover:text-black"
              >
                Choisir la Formule 6 Mois
              </button>
            </div>

          </div>
        ) : (
          /* Formule Annuelle Star Card */
          <div className="mt-14 max-w-2xl mx-auto rounded-3xl border-2 border-[#7FE300] bg-[#12161E] p-8 sm:p-10 shadow-[0_0_50px_rgba(127,227,0,0.2)] relative">
            <div className="absolute -top-3.5 start-8 rounded-full bg-[#7FE300] px-4 py-1 text-xs font-extrabold text-black uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="size-3.5" />
              <span>★ Offre Intégrale · 2 Mois Offerts</span>
            </div>

            <div className="flex flex-wrap items-baseline justify-between gap-3 mt-2">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#7FE300]">Abonnement Entreprise Annuel</span>
                <div className="mt-3">
                  <span className="font-display text-5xl font-extrabold text-white tnum">39 900 DA</span>
                  <span className="text-xs text-zinc-400"> / an</span>
                  <span className="ms-3 text-sm text-zinc-500 line-through tnum">58 800 DA</span>
                </div>
              </div>
              <span className="rounded-full bg-[#7FE300]/20 border border-[#7FE300]/40 px-3.5 py-1 text-xs font-bold text-[#7FE300]">
                Économisez 18 900 DA
              </span>
            </div>

            <p className="mt-4 text-sm text-zinc-300 leading-relaxed">
              La solution totale pour votre flotte. Déploiement sans limite, formation complète de vos chauffeurs sur place ou à distance, et suivi permanent de votre encaissement.
            </p>

            <div className="my-6 h-px bg-white/10"></div>

            <div className="grid gap-3 sm:grid-cols-2 text-xs text-zinc-300">
              <div className="flex items-center gap-2"><Check className="size-4 text-[#7FE300]" /> Flotte de fourgons illimitée</div>
              <div className="flex items-center gap-2"><Check className="size-4 text-[#7FE300]" /> Formation de toute votre équipe</div>
              <div className="flex items-center gap-2"><Check className="size-4 text-[#7FE300]" /> Sauvegardes cloud quotidiennes</div>
              <div className="flex items-center gap-2"><Check className="size-4 text-[#7FE300]" /> Ligne directe fondateur 24h/24</div>
            </div>

            <button
              onClick={() => {
                playTactile('success');
                onTrialClick();
              }}
              className="mt-8 block w-full rounded-full bg-[#7FE300] py-4 text-center font-display text-sm font-bold text-black shadow-lg hover:brightness-105 active:scale-95 transition-all"
            >
              Sélectionner la Formule Annuelle
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
