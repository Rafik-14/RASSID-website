import { MessageCircle, Phone, Truck, Check } from 'lucide-react';

export default function ClosingCTA({ t }) {
  return (
    <section id="trial" className="relative py-24 lg:py-32 bg-white border-t border-zinc-200/80 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[850px] -translate-x-1/2 -translate-y-1/2 opacity-20 blur-[140px]"
        style={{ background: 'radial-gradient(circle, #7FE300, transparent 70%)' }}
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
        
        {/* Flagship CTA Container Card (Light Mode) */}
        <div className="rounded-[2.5rem] border border-zinc-200/90 bg-gradient-to-b from-zinc-50 via-white to-zinc-50/70 p-8 sm:p-16 text-center shadow-[0_24px_60px_rgba(0,0,0,0.06)] relative overflow-hidden ring-1 ring-black/[0.04]">
          
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#7FE300]/15 rounded-full blur-3xl pointer-events-none" />

          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-1.5 text-xs font-semibold text-zinc-800 mb-6 shadow-sm">
            <Truck className="size-3.5 text-[#5EA800]" />
            <span>Déploiement Pilote Sans Risque</span>
          </div>

          {/* Big Headline */}
          <h2 className="font-display text-[clamp(2.4rem,5.5vw,4.2rem)] font-extrabold text-zinc-950 tracking-[-0.035em] leading-[1.05] text-balance max-w-3xl mx-auto">
            Sécurisez votre trésorerie<br />
            <span className="text-zinc-500 font-normal italic">dès la prochaine tournée.</span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg text-zinc-600 leading-relaxed">
            7 jours d'essai complet sur vos camions réels. Configuration sur mesure de vos articles, de vos prix de gros et appairage de vos imprimantes Bluetooth avec notre équipe.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/213550000000?text=Bonjour,%20je%20souhaite%20lancer%20l'essai%20gratuit%207%20jours%20de%20RASSID%20pour%20ma%20distribution"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#7FE300] px-9 py-4 font-display text-sm sm:text-base font-bold text-zinc-950 shadow-[0_10px_30px_rgba(127,227,0,0.35)] transition-all hover:scale-105 active:scale-95 hover:brightness-105"
            >
              <MessageCircle className="size-5" />
              <span>{t.cta_whatsapp}</span>
            </a>

            <a
              href="tel:+213550000000"
              className="inline-flex items-center gap-2.5 rounded-full border border-zinc-300 bg-white px-8 py-4 text-sm sm:text-base font-semibold text-zinc-900 shadow-sm transition-all hover:border-zinc-400 hover:bg-zinc-50"
            >
              <Phone className="size-4 text-zinc-700" />
              <span>{t.cta_call}</span>
            </a>
          </div>

          {/* Hardware & Guarantee Strip */}
          <div className="mt-14 border-t border-zinc-200 pt-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">
              Compatible avec votre parc existant · Aucun achat matériel obligatoire
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-zinc-700 font-medium">
              <span className="flex items-center gap-1.5"><Check className="size-3.5 text-[#5EA800]" /> Imprimantes Bluetooth 58mm & 80mm</span>
              <span>•</span>
              <span className="flex items-center gap-1.5"><Check className="size-3.5 text-[#5EA800]" /> Terminaux Sunmi, Xprinter & Netum</span>
              <span>•</span>
              <span className="flex items-center gap-1.5"><Check className="size-3.5 text-[#5EA800]" /> Smartphones Android 9.0 à 15.0</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
