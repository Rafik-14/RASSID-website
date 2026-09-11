import { Layers, ArrowRight, Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';
import rocksFooter from '../assets/synex_rocks_footer.jpg';

export default function Footer({ t }) {
  return (
    <footer className="relative overflow-hidden bg-[#060709] text-zinc-400 text-xs dark-grain">
      
      {/* ============================================================= */}
      {/* SYNEX 3-COLUMN CONTACT SECTION                                */}
      {/* ============================================================= */}
      <div className="relative z-10 border-t border-white/10 pt-20 pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Column 1: "We'd love to hear from you" (5 cols) */}
            <div className="md:col-span-5 space-y-4">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                {t?.footer_contact_title || "Échangeons sur votre distribution"}
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-md">
                {t?.footer_contact_sub || "Nous sommes toujours à l'écoute des distributeurs, grossistes et entreprises de logistique en Algérie."}
              </p>
            </div>

            {/* Column 2: "Mail us" (3-4 cols) */}
            <div className="md:col-span-3 space-y-3">
              <p className="font-display text-lg font-bold text-white">
                {t?.footer_mail_title || "Écrivez-nous"}
              </p>
              <p className="text-zinc-400 text-xs leading-relaxed">
                {t?.footer_mail_sub || "Pas fan des formulaires ? Écrivez-nous directement par e-mail :"}
              </p>
              <div className="pt-2">
                <a 
                  href="mailto:contact@rassid.dz"
                  className="group inline-flex items-center gap-2 font-mono text-sm font-semibold text-white hover:text-[#7FE300] transition-colors"
                >
                  <span>contact@rassid.dz</span>
                  <span className="grid size-6 place-items-center rounded bg-[#FF5252] text-white transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                    <ArrowRight className="size-3 rtl:rotate-180" />
                  </span>
                </a>
              </div>
            </div>

            {/* Column 3: "Book a call" (3-4 cols) */}
            <div className="md:col-span-4 space-y-3">
              <p className="font-display text-lg font-bold text-white">
                {t?.footer_call_title || "Prendre rendez-vous"}
              </p>
              <p className="text-zinc-400 text-xs leading-relaxed">
                {t?.footer_call_sub || "Discutons de vos besoins et de vos tournées en détail :"}
              </p>
              <div className="pt-2">
                <a 
                  href="https://wa.me/213550000000"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 font-mono text-sm font-semibold text-white hover:text-[#7FE300] transition-colors"
                >
                  <span>WhatsApp direct (+213)</span>
                  <span className="grid size-6 place-items-center rounded bg-[#FF5252] text-white transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                    <ArrowRight className="size-3 rtl:rotate-180" />
                  </span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ============================================================= */}
      {/* SYNEX PANORAMIC BASALT ROCKS IN WATER PANORAMA                */}
      {/* ============================================================= */}
      <div className="relative w-full h-[220px] sm:h-[320px] md:h-[400px] overflow-hidden">
        {/* Sky / Top gradient blend into the contact section */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#060709] via-[#060709]/40 to-transparent pointer-events-none" />
        
        <img 
          src={rocksFooter} 
          alt="Golden mossy basalt rocks in water" 
          className="w-full h-full object-cover object-bottom filter saturate-[0.9] brightness-[0.7]"
        />

        {/* Bottom edge shadow */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#060709] to-transparent pointer-events-none z-10" />
      </div>

      {/* ============================================================= */}
      {/* FINANCIAL AUDIT LEDGER STRIP & LINKS                          */}
      {/* ============================================================= */}
      <div className="relative z-20 border-t border-white/10 bg-[#060709] px-4 py-12">
        <div className="mx-auto max-w-7xl">
          

          {/* Nav & Platform Columns */}
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 pb-10 border-b border-white/5">
            <div>
              <div className="flex items-center gap-2 font-display text-lg font-bold text-white">
                <span className="grid size-7 place-items-center rounded-lg bg-[#7FE300] text-black">
                  <Layers className="size-4" />
                </span>
                <span>RASSID</span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-zinc-400">
                L'infrastructure financière de terrain et le grand livre certifié des distributeurs agroalimentaires et grossistes en Algérie.
              </p>
              <p className="mt-3 text-[11px] font-mono text-zinc-500">
                © 2026 RASSID Technologies. Tous droits réservés.
              </p>
            </div>

            <div>
              <p className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">Navigation Système</p>
              <ul className="space-y-2 text-zinc-400">
                <li><a href="#hero" className="hover:text-white transition-colors">Accueil & Vendeurs</a></li>
                <li><a href="#console-centrale" className="hover:text-white transition-colors">Console Centrale Pro</a></li>
                <li><a href="#pourquoi-rassid" className="hover:text-white transition-colors">Pourquoi RASSID (Matrice)</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Tarifs en Dinar Algérien</a></li>
              </ul>
            </div>

            <div>
              <p className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">Pôles de Distribution</p>
              <ul className="space-y-2 text-zinc-400">
                <li className="flex items-center gap-2"><MapPin className="size-3 text-[#7FE300]" /> Alger (Centre, Ouest, Est)</li>
                <li className="flex items-center gap-2"><MapPin className="size-3 text-[#7FE300]" /> Blida & Boufarik (Agroalimentaire)</li>
                <li className="flex items-center gap-2"><MapPin className="size-3 text-[#7FE300]" /> Sétif (Pôle Grossiste El Eulma)</li>
                <li className="flex items-center gap-2"><MapPin className="size-3 text-[#7FE300]" /> Oran, Tlemcen, Sidi Bel Abbès</li>
                <li className="text-[11px] text-zinc-500 pt-1">58 Wilayas couvertes sans restriction 4G.</li>
              </ul>
            </div>

            <div>
              <p className="font-bold text-white uppercase tracking-wider text-[11px] mb-3">Assistance & Déploiement</p>
              <ul className="space-y-2 text-zinc-400">
                <li>
                  <a href="mailto:contact@rassid.dz" className="text-[#7FE300] hover:underline flex items-center gap-2">
                    <Mail className="size-3.5" />
                    <span>contact@rassid.dz</span>
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="size-3.5 text-zinc-400" />
                  <span>Support WhatsApp : 7j/7</span>
                </li>
                <li className="pt-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#7FE300]/10 border border-[#7FE300]/25 px-3 py-1 text-[11px] font-mono font-bold text-[#7FE300]">
                    <ShieldCheck className="size-3 text-[#7FE300]" />
                    <span>Scellé Mathématiquement</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-between gap-4 text-zinc-400 text-[11px] font-mono">
            <span>RASSID v3.0 · Architecture Décentralisée Hors-Ligne</span>
            <span>Conçu à Alger pour les grossistes algériens</span>
          </div>

        </div>
      </div>

    </footer>
  );
}
