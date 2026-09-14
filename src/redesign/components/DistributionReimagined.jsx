import { motion } from 'framer-motion';
import FancyButton from './FancyButton';
import PrimaryButton from './PrimaryButton';
import pillBranch from '../assets/synex_pill_branch.jpg';
import pillFlowers from '../assets/synex_pill_flowers.jpg';

export default function DistributionReimagined({ t, isRtl }) {
  return (
    <section id="distribution-reimaginee" className="relative overflow-hidden bg-white py-20 sm:py-28 border-b border-zinc-100">
      <span id="double-flux" className="absolute -top-20 pointer-events-none" aria-hidden="true" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Eyebrow Label */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-5 text-xs sm:text-sm font-mono tracking-[0.2em] text-zinc-500 uppercase font-medium"
        >
          {t?.hero_synex_kicker || "RASSID"}
        </motion.p>

        {/* Master Editorial Typography with Inline Nature Imagery Pills (2 Lines) */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-[clamp(2.15rem,4.5vw,3.95rem)] font-semibold text-zinc-900 leading-[1.2] tracking-[-0.03em] mx-auto max-w-7xl"
        >
          <span className="block sm:whitespace-nowrap">
            <span className="text-zinc-400 font-normal">
              {t?.hero_synex_line1_prefix || "Gérez vos tournées"}
            </span>{' '}
            <span className="inline-flex align-middle mx-1 sm:mx-2 lg:mx-2.5 h-7 w-18 sm:h-9 sm:w-24 md:h-11 md:w-28 lg:h-12 lg:w-32 overflow-hidden rounded-full border border-black/10 shadow-sm ring-2 ring-white transition-transform duration-500 hover:scale-105">
              <img 
                src={pillBranch} 
                alt="Mousse verte et nature" 
                className="w-full h-full object-cover object-center"
              />
            </span>{' '}
            <span>
              {t?.hero_synex_line1_suffix || "en toute tranquillité."}
            </span>
          </span>

          <span className="block mt-1 sm:mt-2.5 sm:whitespace-nowrap">
            <span>
              {t?.hero_synex_line2_prefix || "Livrez, encaissez,"}
            </span>{' '}
            <span className="text-zinc-950 font-bold">
              {t?.hero_synex_line2_suffix || "dormez tranquille."}
            </span>{' '}
            <span className="inline-flex align-middle mx-1 sm:mx-2 lg:mx-2.5 h-7 w-18 sm:h-9 sm:w-24 md:h-11 md:w-28 lg:h-12 lg:w-32 overflow-hidden rounded-full border border-black/10 shadow-sm ring-2 ring-white transition-transform duration-500 hover:scale-105">
              <img 
                src={pillFlowers} 
                alt="Fleurs sauvages et roche" 
                className="w-full h-full object-cover object-center"
              />
            </span>
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
          {t?.hero_synex_sub || "RASSID rassemble vos livraisons, vos dettes clients et votre stock camion dans une seule application. Vous savez exactement où en est votre argent à chaque instant."}
        </motion.p>

        {/* Action Button Pair (Synex Style) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <FancyButton href="#pricing">
            {isRtl ? "جرّب على شاحناتك" : "Essayer sur vos camions"}
          </FancyButton>

          <PrimaryButton href="#console-centrale">
            {isRtl ? "شوف المميزات" : "Voir les fonctionnalités"}
          </PrimaryButton>
        </motion.div>

      </div>
    </section>
  );
}
