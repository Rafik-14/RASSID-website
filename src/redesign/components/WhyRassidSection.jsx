import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import mountainLandscape from '../assets/synex_mountain_landscape.jpg';

export default function WhyRassidSection({ t }) {
  const comparisonRows = [
    {
      title: "Fonctionnement 100% Hors-ligne",
      desc: "Base SQLite chiffrée sur le téléphone, zéro blocage en zone blanche.",
      rassid: true,
      others: "Non (Bloqué sans réseau)"
    },
    {
      title: "Chaîne de Blocs SHA-256 scellée",
      desc: "Chaque bon est mathématiquement lié au précédent. Aucune rature possible.",
      rassid: true,
      others: "Non (Ratures et pages arrachées)"
    },
    {
      title: "Reçus & Bons Bluetooth Instantanés",
      desc: "Ticket physique remis au commerçant avec solde restant certifié.",
      rassid: true,
      others: "Non (Bons manuels lents & illisibles)"
    },
    {
      title: "Rapprochement et Clôture en 5 min",
      desc: "Synchronisation automatique dès reconnexion. Fini les 2h de saisie le soir.",
      rassid: true,
      others: "Non (2h de pointage manuel chaque soir)"
    },
    {
      title: "Plafond de Dette & Blocage Crédit",
      desc: "Impossible d'accorder un crédit imprévu sans validation du gérant.",
      rassid: true,
      others: "Non (Dépassements incontrôlés)"
    }
  ];

  return (
    <section id="pourquoi-rassid" className="relative overflow-hidden py-24 sm:py-32">
      
      {/* Background Mountain Landscape (Synex Inspired) */}
      <div className="absolute inset-0 z-0">
        <img 
          src={mountainLandscape} 
          alt="Mossy rolling hills and mist" 
          className="w-full h-full object-cover object-center filter saturate-[0.9] brightness-[0.45]"
        />
        {/* Gradients to blend smoothly into surrounding sections */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060709] via-black/40 to-[#08090B]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================= */}
        {/* SYNEX "WHY SYNEX" SECTION HEADER                              */}
        {/* ============================================================= */}
        <div className="mx-auto max-w-3xl text-center">
          
          {/* Pill Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-mono tracking-widest text-zinc-200 backdrop-blur-md shadow-lg uppercase"
          >
            <span className="size-1.5 rounded-full bg-[#7FE300] animate-pulse" />
            <span>{t.why_badge || "POURQUOI RASSID"}</span>
          </motion.div>

          {/* Master Title */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-[clamp(2.2rem,4.8vw,4rem)] font-extrabold leading-[1.08] tracking-tight text-white"
          >
            {t.why_title_1 || "Conçu pour la distribution moderne."}
            <br />
            <span className="text-zinc-300">
              {t.why_title_2 || "Pas pour les carnets d'hier."}
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-300"
          >
            {t.why_sub || "Connectez vos livreurs, vos stocks mobiles et votre comptabilité — tous synchronisés dans un grand livre infalsifiable pour une visibilité totale."}
          </motion.p>
        </div>

        {/* ============================================================= */}
        {/* FROSTED GLASS COMPARISON MATRIX (SYNEX STYLE)                 */}
        {/* ============================================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto mt-14 sm:mt-18 max-w-5xl overflow-hidden rounded-3xl border border-white/15 bg-black/50 p-6 sm:p-10 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.8)]"
        >
          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            
            {/* Column 1: Capabilities Description (5 cols) */}
            <div className="md:col-span-6 space-y-7">
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-400">
                {t.why_col_capabilities || "Capacités Fondamentales"}
              </p>

              <div className="space-y-6">
                {comparisonRows.map((row, idx) => (
                  <div key={idx} className="border-b border-white/10 pb-4">
                    <h3 className="font-display text-base sm:text-lg font-bold text-white">
                      {row.title}
                    </h3>
                    <p className="mt-1 text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {row.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Center Elevated RASSID Card (Synex Pale Card) (3 cols) */}
            <div className="md:col-span-3">
              <div className="rounded-3xl bg-[#E8F5D8] p-6 text-black shadow-[0_15px_50px_rgba(0,0,0,0.6)] ring-2 ring-white/60">
                {/* Synex-style Pill Header */}
                <div className="flex items-center justify-center gap-2 pb-6 border-b border-black/10">
                  <span className="grid size-6 place-items-center rounded-lg bg-black text-[#7FE300] font-black text-xs">
                    R
                  </span>
                  <span className="font-display text-lg font-extrabold tracking-tight">
                    {t.why_col_rassid || "RASSID"}
                  </span>
                </div>

                {/* Checkmarks on every row */}
                <div className="space-y-8 py-6 flex flex-col items-center justify-between">
                  {comparisonRows.map((_, idx) => (
                    <div key={idx} className="grid size-8 place-items-center rounded-full bg-black/10 text-black">
                      <Check className="size-5 stroke-[2.5]" />
                    </div>
                  ))}
                </div>

                {/* Bottom Cost / Value Metric */}
                <div className="pt-4 border-t border-black/10 text-center">
                  <p className="font-mono text-[10px] uppercase font-bold text-black/60">Garantie</p>
                  <p className="font-display text-sm font-bold text-black mt-0.5">
                    0 DZD perdu
                  </p>
                </div>
              </div>
            </div>

            {/* Column 3: Other Platforms / Paper (3 cols) */}
            <div className="md:col-span-3 text-center space-y-7">
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-zinc-400">
                {t.why_col_others || "Carnets papier & Excel"}
              </p>

              <div className="space-y-6">
                {comparisonRows.map((row, idx) => (
                  <div key={idx} className="border-b border-white/10 pb-4 h-[72px] flex items-center justify-center">
                    <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-medium text-zinc-400">
                      {row.others}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-center">
                <p className="font-mono text-[10px] uppercase font-bold text-rose-400">Pertes</p>
                <p className="font-display text-sm font-bold text-rose-300 mt-0.5">
                  -15% à -25% marge
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Summary Bar */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-zinc-300">
            <div>
              <span className="text-zinc-400">{t.why_cost_label || "Bénéfice opérationnel constaté :"}</span>{' '}
              <strong className="text-white">Basé sur 180+ tournées réelles en Algérie</strong>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-[#7FE300] font-bold">RASSID : Clôture en 5 min</span>
              <span>vs</span>
              <span className="text-zinc-400">Papier : 2h de litiges chaque soir</span>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
