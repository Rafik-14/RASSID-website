import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import pillBranch from '../assets/synex_pill_branch.jpg';
import pillFlowers from '../assets/synex_pill_flowers.jpg';

export default function DistributionReimagined({ t, isRtl }) {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-32 select-none border-b border-zinc-100">
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Eyebrow Label (Synex Style) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1 text-xs font-mono tracking-widest text-zinc-500 uppercase"
        >
          <Sparkles className="size-3 text-[#7FE300]" />
          <span>{t?.hero_synex_kicker || "DISTRIBUTION RÉINVENTÉE"}</span>
        </motion.div>

        {/* Master Editorial Typography with Inline Nature Imagery Pills */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-[clamp(2.2rem,5.5vw,4.8rem)] font-bold text-zinc-900 leading-[1.25] tracking-[-0.025em]"
        >
          <span className="text-zinc-400 font-normal">
            {t?.hero_synex_line1_prefix || "Prenez le contrôle"}
          </span>{' '}
          <span className="inline-flex align-middle mx-1.5 sm:mx-2.5 h-10 w-24 sm:h-14 sm:w-36 overflow-hidden rounded-full border border-black/10 shadow-md ring-2 ring-white transition-transform duration-500 hover:scale-105">
            <img 
              src={pillBranch} 
              alt="Mousse verte et nature" 
              className="w-full h-full object-cover object-center"
            />
          </span>{' '}
          <span>
            {t?.hero_synex_line1_suffix || "de votre capital."}
          </span>
          <br className="hidden sm:inline" />
          <span>
            {t?.hero_synex_line2_prefix || "Distribuez à un niveau"}
          </span>{' '}
          <span className="text-zinc-950 font-extrabold">
            {t?.hero_synex_line2_suffix || "supérieur."}
          </span>{' '}
          <span className="inline-flex align-middle mx-1.5 sm:mx-2.5 h-10 w-24 sm:h-14 sm:w-36 overflow-hidden rounded-full border border-black/10 shadow-md ring-2 ring-white transition-transform duration-500 hover:scale-105">
            <img 
              src={pillFlowers} 
              alt="Fleurs sauvages et roche" 
              className="w-full h-full object-cover object-center"
            />
          </span>
        </motion.h2>

        {/* Subtitle / Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mx-auto mt-8 max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-600 font-medium"
        >
          {t?.hero_synex_sub || "RASSID rassemble vos opérations terrain, le suivi des créances et le pilotage des tournées en un système unique — vous garantissant clarté, rapidité et contrôle total à chaque étape de votre distribution."}
        </motion.p>

        {/* Action Button Pair (Synex Style) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#pricing"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-zinc-300 bg-white hover:bg-zinc-50 text-zinc-900 font-semibold text-sm transition-all shadow-sm hover:border-zinc-400"
          >
            {isRtl ? "طلب وصول تجريبي" : "Demander l'accès"}
          </a>

          <a
            href="#console-centrale"
            className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-full bg-black hover:bg-zinc-800 text-white font-semibold text-sm transition-all shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>{isRtl ? "استكشاف المنصة" : "Lancer l'application"}</span>
            <span className="grid size-5 place-items-center rounded-full bg-zinc-800 text-[#7FE300]">
              <ArrowRight className="size-3 rtl:rotate-180" />
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
