import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  ShieldCheck, 
  Layers, 
  Truck, 
  Store, 
  FileText, 
  CheckCircle2, 
  Lock, 
  TrendingUp,
  ArrowUpRight
} from 'lucide-react';

export default function WebDashboardSection({ t }) {
  const [selectedWilaya, setSelectedWilaya] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const storesData = [
    {
      id: 1,
      name: "Supérette El Baraka",
      wilaya: "Alger (Bab Ezzouar)",
      driver: "Amine K. (Van 03)",
      balance: "485 000 DZD",
      lastOp: "Paiement 120 000 DZD",
      time: "14:28:05",
      hash: "7a9f...c38e",
      status: "Scellé SHA-256",
      statusColor: "text-[#7FE300] bg-[#7FE300]/10 border-[#7FE300]/25"
    },
    {
      id: 2,
      name: "Grossiste Boumerdès Centre",
      wilaya: "Boumerdès",
      driver: "Karim M. (Van 01)",
      balance: "2 140 000 DZD",
      lastOp: "Livraison 350 000 DZD",
      time: "14:15:20",
      hash: "4b2c...88d1",
      status: "Scellé SHA-256",
      statusColor: "text-[#7FE300] bg-[#7FE300]/10 border-[#7FE300]/25"
    },
    {
      id: 3,
      name: "Alimentation Générale Atlas",
      wilaya: "Blida (Boufarik)",
      driver: "Sofiane T. (Van 02)",
      balance: "340 000 DZD",
      lastOp: "Paiement 80 000 DZD",
      time: "13:50:11",
      hash: "9e11...32f4",
      status: "Scellé SHA-256",
      statusColor: "text-[#7FE300] bg-[#7FE300]/10 border-[#7FE300]/25"
    },
    {
      id: 4,
      name: "Épicerie Sidi Yahia",
      wilaya: "Alger (Hydra)",
      driver: "Yacine B. (Van 04)",
      balance: "850 000 DZD",
      lastOp: "Livraison 125 000 DZD",
      time: "13:22:45",
      hash: "1d88...60ca",
      status: "Scellé SHA-256",
      statusColor: "text-[#7FE300] bg-[#7FE300]/10 border-[#7FE300]/25"
    },
    {
      id: 5,
      name: "Supermarché El Bahia",
      wilaya: "Oran (Es Senia)",
      driver: "Mourad S. (Van 05)",
      balance: "1 720 000 DZD",
      lastOp: "Paiement 450 000 DZD",
      time: "12:40:18",
      hash: "6f55...aa19",
      status: "Scellé SHA-256",
      statusColor: "text-[#7FE300] bg-[#7FE300]/10 border-[#7FE300]/25"
    }
  ];

  return (
    <section id="console-centrale" className="relative overflow-hidden bg-[#060709] py-24 sm:py-32 select-none border-t border-white/5">
      
      {/* Background Ambient Spotlight (Aave Pro inspired) */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute left-1/2 top-1/4 h-[550px] w-[1000px] -translate-x-1/2 -translate-y-1/2 opacity-20 blur-[140px]"
        style={{
          background: 'radial-gradient(ellipse 65% 50% at 50% 50%, #7FE300, transparent 70%)'
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ============================================================= */}
        {/* SECTION HEADER LOCKUP ("The Full Power of DeFi" -> RASSID)    */}
        {/* ============================================================= */}
        <div className="mx-auto max-w-3xl text-center">
          
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs font-mono text-zinc-300 backdrop-blur-xl shadow-lg"
          >
            <span className="grid size-4 place-items-center rounded-full bg-[#7FE300]/20 text-[#7FE300]">
              <Layers className="size-2.5" />
            </span>
            <span className="font-semibold tracking-wide">
              {t.dashboard_section_badge || "RASSID Pro Web Console"}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-[clamp(2.2rem,5vw,4.2rem)] font-extrabold leading-[1.08] tracking-tight text-white"
          >
            {t.dashboard_section_title_prefix || "Toute la Puissance"}{' '}
            <span className="bg-gradient-to-r from-[#7FE300] via-[#abff47] to-emerald-400 bg-clip-text text-transparent">
              {t.dashboard_section_title_gradient || "du Grand Livre Central"}
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-zinc-400"
          >
            {t.dashboard_section_sub || "Supervisez votre flotte de fourgons, auditez chaque centime encaissé et clôturez vos journées en 5 minutes chrono."}
          </motion.p>

          {/* CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <a 
              href="https://app.rassid.dz"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-display text-sm font-bold text-black shadow-lg transition-all hover:bg-[#7FE300] hover:scale-105 active:scale-95"
            >
              <span>{t.dashboard_section_btn_console || "Ouvrir la Console"}</span>
              <ArrowUpRight className="size-4" />
            </a>
            <a 
              href="#pricing"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-zinc-300 backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/[0.08]"
            >
              <span>{t.dashboard_section_btn_demo || "Découvrir les fonctionnalités"}</span>
            </a>
          </motion.div>
        </div>

        {/* ============================================================= */}
        {/* MACOS FLOATING BROWSER FRAME (Centralized Web Console)        */}
        {/* ============================================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto mt-14 sm:mt-18 max-w-6xl overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0A0B0E] shadow-[0_30px_100px_rgba(0,0,0,0.9)] ring-1 ring-white/10"
        >
          {/* macOS Window Titlebar */}
          <div className="flex items-center justify-between border-b border-white/10 bg-[#101217] px-4 py-3">
            {/* Traffic Light Dots */}
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-[#FF5F56] border border-black/20" />
              <span className="size-3 rounded-full bg-[#FFBD2E] border border-black/20" />
              <span className="size-3 rounded-full bg-[#27C93F] border border-black/20" />
            </div>

            {/* URL / Location Bar */}
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/60 px-4 py-1 font-mono text-xs text-zinc-400">
              <Lock className="size-3 text-[#7FE300]" />
              <span className="text-zinc-200">app.rassid.dz</span>
              <span className="text-zinc-500">/grand-livre-central</span>
            </div>

            {/* Action pill */}
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
              <span className="hidden sm:inline-flex items-center gap-1.5 text-zinc-400">
                <span className="size-1.5 rounded-full bg-[#7FE300] animate-pulse" />
                <span>SYNC LIVE</span>
              </span>
            </div>
          </div>

          {/* Console Body: 2-Column (Sidebar + Main Content) */}
          <div className="flex min-h-[580px] divide-x divide-white/5">
            
            {/* Left Console Sidebar */}
            <div className="hidden md:flex w-60 flex-col justify-between bg-[#0C0E12] p-4 font-mono text-xs">
              <div className="space-y-6">
                {/* Brand Logo in Console */}
                <div className="flex items-center gap-2 px-2 pt-1">
                  <span className="grid size-6 place-items-center rounded-lg bg-[#7FE300] text-black font-extrabold text-xs">
                    R
                  </span>
                  <span className="font-display font-bold text-white tracking-wide">RASSID</span>
                  <span className="rounded bg-white/10 px-1.5 py-0.5 text-[9px] font-bold text-[#7FE300]">
                    PRO
                  </span>
                </div>

                {/* Nav Links */}
                <div className="space-y-1">
                  <p className="px-2 pb-1 text-[10px] font-bold uppercase tracking-wider text-zinc-500">
                    Grand Livre
                  </p>
                  <button className="flex w-full items-center justify-between rounded-xl bg-[#7FE300]/15 px-3 py-2 text-left font-semibold text-[#7FE300] border border-[#7FE300]/30">
                    <span className="flex items-center gap-2.5">
                      <Layers className="size-3.5" />
                      <span>Tableau de bord</span>
                    </span>
                    <span className="size-1.5 rounded-full bg-[#7FE300]" />
                  </button>
                  <button className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-zinc-400 hover:bg-white/5 hover:text-white transition-colors">
                    <span className="flex items-center gap-2.5">
                      <Truck className="size-3.5" />
                      <span>Flotte & Vans</span>
                    </span>
                    <span className="rounded-full bg-white/10 px-1.5 py-0.2 text-[10px] text-zinc-300">14</span>
                  </button>
                  <button className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-zinc-400 hover:bg-white/5 hover:text-white transition-colors">
                    <span className="flex items-center gap-2.5">
                      <Store className="size-3.5" />
                      <span>Magasins & Soldes</span>
                    </span>
                    <span className="rounded-full bg-white/10 px-1.5 py-0.2 text-[10px] text-zinc-300">184</span>
                  </button>
                  <button className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-zinc-400 hover:bg-white/5 hover:text-white transition-colors">
                    <span className="flex items-center gap-2.5">
                      <ShieldCheck className="size-3.5" />
                      <span>Audit Cryptographique</span>
                    </span>
                  </button>
                  <button className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-zinc-400 hover:bg-white/5 hover:text-white transition-colors">
                    <span className="flex items-center gap-2.5">
                      <FileText className="size-3.5" />
                      <span>Clôtures Journalières</span>
                    </span>
                  </button>
                </div>
              </div>

              {/* Sidebar Footer System State */}
              <div className="rounded-xl border border-white/5 bg-black/40 p-3 text-[11px]">
                <div className="flex items-center justify-between text-zinc-400 mb-1">
                  <span>Moteur Sync</span>
                  <span className="text-[#7FE300] font-bold">ACTIF</span>
                </div>
                <div className="text-[10px] text-zinc-500">
                  Postgres RPC · 0 conflit
                </div>
              </div>
            </div>

            {/* Main Console Dashboard Content */}
            <div className="flex-1 bg-[#090A0D] p-5 sm:p-7">
              
              {/* Top Controls: Search Bar & Filters */}
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-5">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-3.5 text-zinc-500" />
                    <input 
                      type="text" 
                      placeholder="Rechercher magasin, van, wilaya..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-48 sm:w-64 rounded-xl border border-white/10 bg-black/50 py-2 pl-9 pr-3 text-xs text-white placeholder-zinc-500 focus:border-[#7FE300] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setSelectedWilaya('all')}
                    className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                      selectedWilaya === 'all' 
                        ? 'bg-[#7FE300] text-black font-bold' 
                        : 'border border-white/10 bg-white/5 text-zinc-400 hover:text-white'
                    }`}
                  >
                    Toutes Wilayas
                  </button>
                  <button 
                    onClick={() => setSelectedWilaya('alger')}
                    className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                      selectedWilaya === 'alger' 
                        ? 'bg-[#7FE300] text-black font-bold' 
                        : 'border border-white/10 bg-white/5 text-zinc-400 hover:text-white'
                    }`}
                  >
                    Alger (16)
                  </button>
                  <button 
                    onClick={() => setSelectedWilaya('blida')}
                    className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                      selectedWilaya === 'blida' 
                        ? 'bg-[#7FE300] text-black font-bold' 
                        : 'border border-white/10 bg-white/5 text-zinc-400 hover:text-white'
                    }`}
                  >
                    Blida (09)
                  </button>
                </div>
              </div>

              {/* KPI Strip */}
              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                <div className="rounded-xl border border-white/5 bg-[#0F1116] p-3.5">
                  <p className="text-[11px] text-zinc-400 font-mono">Trésorerie Encaissée</p>
                  <p className="mt-1 font-display text-lg font-bold text-white tracking-tight">
                    18 450 000 <span className="text-xs font-mono text-[#7FE300]">DZD</span>
                  </p>
                  <p className="mt-1 flex items-center gap-1 text-[10px] text-[#7FE300]">
                    <TrendingUp className="size-3" /> +14.2% vs hier
                  </p>
                </div>

                <div className="rounded-xl border border-white/5 bg-[#0F1116] p-3.5">
                  <p className="text-[11px] text-zinc-400 font-mono">Créances en Cours</p>
                  <p className="mt-1 font-display text-lg font-bold text-white tracking-tight">
                    42 800 000 <span className="text-xs font-mono text-zinc-400">DZD</span>
                  </p>
                  <p className="mt-1 text-[10px] text-zinc-400 font-mono">
                    184 magasins actifs
                  </p>
                </div>

                <div className="rounded-xl border border-white/5 bg-[#0F1116] p-3.5">
                  <p className="text-[11px] text-zinc-400 font-mono">Fourgons en Route</p>
                  <p className="mt-1 font-display text-lg font-bold text-white tracking-tight">
                    14 <span className="text-xs font-mono text-[#7FE300]">/ 14 Actifs</span>
                  </p>
                  <p className="mt-1 text-[10px] text-zinc-400 font-mono">
                    100% connectés
                  </p>
                </div>

                <div className="rounded-xl border border-white/5 bg-[#0F1116] p-3.5">
                  <p className="text-[11px] text-zinc-400 font-mono">Rapprochement Soir</p>
                  <p className="mt-1 font-display text-lg font-bold text-[#7FE300] tracking-tight">
                    100.0% <span className="text-xs font-mono text-white">Scellé</span>
                  </p>
                  <p className="mt-1 text-[10px] text-[#7FE300] font-mono">
                    Zéro écart de caisse
                  </p>
                </div>
              </div>

              {/* Wholesale Store Debt & Ledger Table */}
              <div className="mt-5 overflow-hidden rounded-xl border border-white/5 bg-black/40">
                <div className="overflow-x-auto">
                  <table className="w-full text-left font-mono text-xs text-zinc-300">
                    <thead className="border-b border-white/5 bg-[#0E1014] text-[11px] uppercase tracking-wider text-zinc-500">
                      <tr>
                        <th className="px-4 py-3">Magasin & Secteur</th>
                        <th className="px-4 py-3">Fourgon & Vendeur</th>
                        <th className="px-4 py-3">Solde Créance DZD</th>
                        <th className="px-4 py-3">Dernière Opération</th>
                        <th className="px-4 py-3">Preuve Hash</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {storesData.map((store) => (
                        <tr key={store.id} className="hover:bg-white/[0.02] transition-colors">
                          <td className="px-4 py-3 font-semibold text-white">
                            <div>{store.name}</div>
                            <div className="text-[10px] text-zinc-500 font-normal">{store.wilaya}</div>
                          </td>
                          <td className="px-4 py-3 text-zinc-400">
                            {store.driver}
                          </td>
                          <td className="px-4 py-3 font-bold text-white">
                            {store.balance}
                          </td>
                          <td className="px-4 py-3">
                            <div className="text-zinc-200">{store.lastOp}</div>
                            <div className="text-[10px] text-zinc-500">{store.time}</div>
                          </td>
                          <td className="px-4 py-3">
                            <span className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 text-[10px] font-bold ${store.statusColor}`}>
                              <CheckCircle2 className="size-2.5" />
                              <span>{store.status}</span>
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}
