import { Quote, MapPin, CheckCircle2 } from 'lucide-react';

export default function FieldProof() {
  return (
    <section className="relative py-20 lg:py-28 bg-[#090A0B]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Metric Cards Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          
          <div className="rounded-3xl border border-white/10 bg-[#121418] p-6 text-center transition-all hover:border-[#7FE300]/30">
            <p className="font-display text-4xl sm:text-5xl font-extrabold text-white tnum">3+ Ans</p>
            <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#7FE300]">Sur le terrain algérien</p>
            <p className="mt-2 text-xs text-zinc-400">Éprouvé et perfectionné auprès de distributeurs à Blida et Alger.</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#121418] p-6 text-center transition-all hover:border-[#7FE300]/30">
            <p className="font-display text-4xl sm:text-5xl font-extrabold text-white tnum">100%</p>
            <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#7FE300]">Hors-ligne autonome</p>
            <p className="mt-2 text-xs text-zinc-400">Aucun blocage ni ralentissement en sous-sol ou zone blanche.</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#121418] p-6 text-center transition-all hover:border-[#7FE300]/30">
            <p className="font-display text-4xl sm:text-5xl font-extrabold text-[#7FE300] tnum">0 DA</p>
            <p className="mt-2 text-xs font-bold uppercase tracking-wider text-white">Écart ou perte toléré</p>
            <p className="mt-2 text-xs text-zinc-400">Chaque dinar encaissé est justifié par un reçu signé et scellé.</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#121418] p-6 text-center transition-all hover:border-[#7FE300]/30">
            <p className="font-display text-4xl sm:text-5xl font-extrabold text-white tnum">98%</p>
            <p className="mt-2 text-xs font-bold uppercase tracking-wider text-[#7FE300]">Gain de temps le soir</p>
            <p className="mt-2 text-xs text-zinc-400">Réconciliation instantanée au dépôt en fin de tournée.</p>
          </div>

        </div>

        {/* Customer Testimonial Card */}
        <div className="mt-12 max-w-3xl mx-auto rounded-3xl border border-white/15 bg-[#121418] p-8 sm:p-10 text-center shadow-xl relative overflow-hidden">
          <Quote className="size-10 mx-auto text-[#7FE300] opacity-40 mb-4" />
          <p className="font-display text-lg sm:text-xl font-medium text-white italic leading-relaxed">
            « Plus de carnets perdus, plus de calculs approximatifs sur des bouts de papier sales. RASSID nous donne une clarté totale sur ce que chaque épicerie nous doit, et mes livreurs ne passent plus deux heures à recompter des billets le soir. »
          </p>
          
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="size-10 rounded-full bg-[#7FE300]/20 border border-[#7FE300]/40 grid place-items-center font-bold text-[#7FE300] text-sm">
              DZ
            </div>
            <div className="text-left rtl:text-right">
              <p className="text-sm font-bold text-white flex items-center gap-1.5">
                <span>Direction Générale</span>
                <CheckCircle2 className="size-3.5 text-[#7FE300]" />
              </p>
              <p className="text-xs text-zinc-400 flex items-center gap-1">
                <MapPin className="size-3 text-zinc-500" />
                <span>Grossiste & Distributeur Agroalimentaire (Blida / Alger)</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
