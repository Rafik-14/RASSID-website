import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, HelpCircle, X, Download, FolderOpen, CheckCircle2 } from 'lucide-react';
import QRCodeCard from './QRCodeCard';
import PrimaryButton from './PrimaryButton';
import FancyButton from './FancyButton';
import { APK_DOWNLOAD_PATH } from '../utils/constants';

/**
 * Official WhatsApp Icon SVG (crisp vector)
 */
function WhatsAppIcon({ className = "size-6" }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      className={className} 
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.19 8.19 0 0 1-5.82 2.42c-1.46 0-2.89-.39-4.14-1.12l-.3-.18-3.08.81.82-3-.19-.31a8.21 8.21 0 0 1-1.27-4.44c0-4.54 3.7-8.24 8.24-8.24zm4.79 11.64c-.26-.13-1.55-.77-1.79-.86-.24-.09-.41-.13-.59.13-.17.26-.68.86-.83 1.03-.15.17-.31.2-.57.07-.26-.13-1.1-.41-2.1-1.3-.77-.69-1.29-1.54-1.44-1.8-.15-.26-.02-.4.11-.53.12-.11.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.07-.13-.59-1.42-.81-1.95-.21-.51-.43-.44-.59-.45h-.5c-.17 0-.45.06-.69.32-.24.26-.91.89-.91 2.17s.93 2.52 1.06 2.69c.13.17 1.83 2.8 4.44 3.93.62.27 1.11.43 1.49.55.63.2 1.2.17 1.65.1.5-.07 1.55-.63 1.77-1.24.22-.61.22-1.13.15-1.24-.06-.11-.23-.17-.49-.3z"/>
    </svg>
  );
}

/**
 * Official Android Robot Head Icon SVG (clean vector)
 */
function AndroidIcon({ className = "size-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4483.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 0 0-.1521-.5676.416.416 0 0 0-.5676.1521l-2.0223 3.503C15.5802 8.4116 13.8427 8.083 12 8.083c-1.8427 0-3.5802.3286-5.1368.8667L4.841 5.4467a.4161.4161 0 0 0-.5677-.1521.4157.4157 0 0 0-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396"/>
    </svg>
  );
}

/**
 * Big Geometric Capsule & Circle SVG Pattern
 */
function PillPatternBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
      <svg
        viewBox="0 0 1440 820"
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="pillGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FAF9F5" stopOpacity="0" />
            <stop offset="50%" stopColor="#7FE300" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#7FE300" stopOpacity="0.65" />
          </linearGradient>
        </defs>

        {/* Row 1 */}
        <g fill="rgba(127, 227, 0, 0.06)">
          <rect x="-100" y="-40" width="420" height="140" rx="70" />
          <circle cx="422" cy="30" r="70" />
          <rect x="524" y="-40" width="420" height="140" rx="70" />
          <circle cx="1046" cy="30" r="70" />
          <rect x="1148" y="-40" width="420" height="140" rx="70" />
          <circle cx="1670" cy="30" r="70" />
        </g>

        {/* Row 2 */}
        <g fill="rgba(127, 227, 0, 0.09)">
          <circle cx="110" cy="230" r="70" />
          <rect x="212" y="160" width="420" height="140" rx="70" />
          <circle cx="734" cy="230" r="70" />
          <rect x="836" y="160" width="420" height="140" rx="70" />
          <circle cx="1358" cy="230" r="70" />
          <rect x="1460" y="160" width="420" height="140" rx="70" />
        </g>

        {/* Row 3 */}
        <g fill="rgba(127, 227, 0, 0.13)">
          <rect x="-140" y="360" width="420" height="140" rx="70" />
          <circle cx="382" cy="430" r="70" />
          <rect x="484" y="360" width="420" height="140" rx="70" />
          <circle cx="1006" cy="430" r="70" />
          <rect x="1108" y="360" width="420" height="140" rx="70" />
          <circle cx="1630" cy="430" r="70" />
        </g>

        {/* Row 4 */}
        <g fill="rgba(127, 227, 0, 0.18)">
          <circle cx="90" cy="630" r="70" />
          <rect x="192" y="560" width="420" height="140" rx="70" />
          <circle cx="714" cy="630" r="70" />
          <rect x="816" y="560" width="420" height="140" rx="70" />
          <circle cx="1338" cy="630" r="70" />
          <rect x="1440" y="560" width="420" height="140" rx="70" />
        </g>

        {/* Row 5 */}
        <g fill="rgba(127, 227, 0, 0.24)">
          <rect x="-80" y="760" width="420" height="140" rx="70" />
          <circle cx="442" cy="830" r="70" />
          <rect x="544" y="760" width="420" height="140" rx="70" />
          <circle cx="1066" cy="830" r="70" />
          <rect x="1168" y="760" width="420" height="140" rx="70" />
        </g>
      </svg>

      <div 
        className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#7FE300]/22 via-[#7FE300]/06 to-transparent pointer-events-none"
      />
    </div>
  );
}

/**
 * 3-Step Installation Guide Modal
 * Solves the Android "Unknown Sources / File might be harmful" objection proactively.
 */
function InstallGuideModal({ isOpen, onClose, t, isRtl }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const steps = [
    {
      icon: Download,
      title: t?.guide_step1_title || "1. Téléchargez le fichier",
      desc: t?.guide_step1_desc || "Cliquez sur « Télécharger l'APK ». Si Google Chrome affiche une alerte, confirmez « Télécharger quand même » (l'application provient directement de nos serveurs sécurisés).",
    },
    {
      icon: FolderOpen,
      title: t?.guide_step2_title || "2. Ouvrez le fichier",
      desc: t?.guide_step2_desc || "Une fois le téléchargement terminé, cliquez sur la notification ou allez dans vos téléchargements pour ouvrir « rassid.apk ».",
    },
    {
      icon: CheckCircle2,
      title: t?.guide_step3_title || "3. Installez et lancez",
      desc: t?.guide_step3_desc || "Appuyez sur « Installer » (autorisez l'installation depuis cette source si Android vous le demande). Votre tournée est prête à démarrer !",
    },
  ];

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-labelledby="install-guide-title"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-lg rounded-3xl bg-white border-2 border-zinc-950 p-6 sm:p-8 shadow-[6px_8px_0_0_#18181b] text-zinc-950"
          dir={isRtl ? 'rtl' : 'ltr'}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 end-5 p-1.5 rounded-full text-zinc-500 hover:text-black hover:bg-zinc-100 transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            <X className="size-5" />
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="size-10 rounded-2xl bg-[#7FE300] border-2 border-zinc-950 flex items-center justify-center text-black shrink-0 shadow-[2px_2px_0_0_#18181b]">
              <AndroidIcon className="size-5" />
            </div>
            <div>
              <h3 id="install-guide-title" className="font-display text-xl sm:text-2xl font-black text-zinc-950 tracking-tight">
                {t?.guide_title || "Installation facile en 3 étapes"}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 font-medium">
                {isRtl ? "دليل سريع لتثبيت التطبيق على هواتف أندرويد" : "Guide rapide pour installer l'application sur Android"}
              </p>
            </div>
          </div>

          {/* Steps List */}
          <div className="space-y-4">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-zinc-50 border border-zinc-200">
                  <div className="size-9 rounded-xl bg-white border border-zinc-300 flex items-center justify-center shrink-0 text-zinc-900 mt-0.5 shadow-sm">
                    <Icon className="size-4 text-zinc-950" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-sm sm:text-base text-zinc-950">
                      {s.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-zinc-600 font-medium leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer Actions */}
          <div className="mt-6 flex flex-col-reverse sm:flex-row items-center justify-end gap-3 pt-4 border-t border-zinc-200">
            <FancyButton
              onClick={onClose}
              className="w-full sm:w-auto [--fancy-cutout:#ffffff]"
            >
              {t?.guide_close || "Compris, fermer"}
            </FancyButton>

            <PrimaryButton
              href={APK_DOWNLOAD_PATH}
              download="rassid.apk"
              onClick={onClose}
              className="w-full sm:w-auto"
            >
              <span className="inline-flex items-center gap-2">
                <Download className="size-4 stroke-[2.5]" />
                <span>{t?.cta_apk_btn || "Télécharger l'APK"}</span>
              </span>
            </PrimaryButton>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

/**
 * Closing CTA Section (Bigger, Bold Geometric Canvas)
 * - Light canvas: warm cream base (#FAF9F5) with large Rassid pastel lime pills/circles.
 * - Bold headline and 1-month free trial subtitle at the top center.
 * - Desktop: Scannable APK QR card (with direct download click) + Larger circular neo-brutalist WhatsApp button.
 * - Mobile: Direct APK Download button + Direct WhatsApp button side-by-side.
 * - Reassurance trust seal + 3-step installation guide popup.
 */
export default function ClosingCTA({ t, isRtl }) {
  const [showGuide, setShowGuide] = useState(false);

  const waUrl = isRtl
    ? "https://wa.me/213552028352?text=%D9%85%D8%B1%D8%AD%D8%A8%D8%A7%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A8%D8%AF%D8%A1%20%D8%A7%D9%84%D8%AA%D8%AC%D8%B1%D8%A8%D8%A9%20%D8%A7%D9%84%D9%85%D8%AC%D8%A7%D9%86%D9%8A%D8%A9%20%D9%84%D9%80%20%D8%B4%D9%87%D8%B1%20%D9%84%D8%AA%D8%B7%D8%A8%D9%8A%D9%82%20%D8%B1%D8%B5%D9%8A%D8%AF%20%D9%81%D9%8A%20%D9%85%D8%A4%D8%B3%D8%B3%D8%AA%D9%8A%20%D9%84%D9%84%D8%AA%D9%88%D8%B2%D9%8A%D8%B9"
    : "https://wa.me/213552028352?text=Bonjour,%20je%20souhaite%20lancer%20l'essai%20gratuit%20de%201%20mois%20de%20RASSID%20pour%20ma%20distribution";

  return (
    <section id="trial" className="relative py-28 sm:py-36 lg:py-44 bg-[#FAF9F5] border-t border-zinc-200/80 overflow-hidden">
      
      {/* Big Geometric Capsule / Pill Pattern Background */}
      <PillPatternBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Center: Big Bold Headline & Subtitle */}
        <div className="text-center flex flex-col items-center max-w-4xl mx-auto">
          
          {/* Pill Badge */}
          <div className="mb-5 sm:mb-7 inline-flex items-center justify-center">
            <span className="inline-flex items-center px-5 py-1.5 sm:px-6 sm:py-2 rounded-full border-2 border-black bg-white text-zinc-950 font-bold text-sm sm:text-base tracking-tight shadow-sm">
              {t?.cta_join_pill || "Installation Directe"}
            </span>
          </div>

          <h2 className="font-display text-[clamp(2.5rem,5.2vw,4.6rem)] font-bold text-zinc-950 tracking-[-0.04em] leading-[1.08] text-balance">
            {t?.cta_title || "1 mois gratuit. Sur vos vrais camions."}
          </h2>

          <p className="mt-5 sm:mt-6 text-lg sm:text-xl lg:text-2xl text-zinc-600 font-medium leading-relaxed max-w-2xl text-balance">
            {t?.cta_desc || "Sans carte bancaire. Sans engagement. Téléchargez l'application ou démarrez sur WhatsApp."}
          </p>

        </div>

        {/* Action Cluster in Center: Bigger QR Code + Bigger WhatsApp Icon Button */}
        <div className="mt-11 sm:mt-14 flex flex-col items-center justify-center">
          
          {/* Desktop View (md and above): Scannable APK QR Card + WhatsApp Icon Button */}
          <div className="hidden md:flex items-center justify-center gap-8 lg:gap-10">
            
            {/* 1. Scannable APK QR Code Card */}
            <QRCodeCard t={t} isRtl={isRtl} />

            {/* 2. Bigger WhatsApp Neo-Brutalist Icon Button */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contacter sur WhatsApp"
              className="group flex flex-col items-center gap-2.5 focus:outline-none"
            >
              <div className="size-20 sm:size-[88px] rounded-full bg-[#7FE300] border-2 border-black flex items-center justify-center text-black transition-all duration-300 group-hover:-translate-y-1.5 group-hover:-translate-x-0.5 group-hover:shadow-[4px_6px_0_0_#000] active:translate-y-0.5 active:translate-x-0.25 active:shadow-none shadow-[2px_3px_0_0_#000]">
                <WhatsAppIcon className="size-10 sm:size-11" />
              </div>
              <span className="text-sm sm:text-base font-bold text-zinc-900 group-hover:text-black transition-colors">
                {t?.cta_whatsapp || "WhatsApp"}
              </span>
            </a>

          </div>

          {/* Mobile View (below md): Direct APK Download Button + Direct WhatsApp Button */}
          <div className="flex md:hidden flex-row items-center justify-center gap-3.5 w-full max-w-sm mx-auto">
            
            {/* Direct APK Download Button */}
            <a
              href={APK_DOWNLOAD_PATH}
              download="rassid.apk"
              className="flex-1 inline-flex items-center justify-center gap-2 py-4 px-4 rounded-full bg-zinc-950 text-white font-bold text-sm border border-zinc-800 shadow-md active:scale-95 transition-transform"
            >
              <AndroidIcon className="size-4 shrink-0 text-[#7FE300]" />
              <span className="truncate">{t?.cta_apk_btn || "Télécharger l'APK"}</span>
            </a>

            {/* Direct WhatsApp Contact Button */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 py-4 px-4 rounded-full bg-[#7FE300] text-black font-bold text-sm border border-black shadow-[2px_4px_0_0_#000] active:translate-y-0.5 transition-all"
            >
              <WhatsAppIcon className="size-4 shrink-0" />
              <span className="truncate">{t?.cta_whatsapp || "WhatsApp"}</span>
            </a>

          </div>

          {/* Reassurance Trust Seal & Help Modal Trigger */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-zinc-600 font-medium">
            <div className="inline-flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-[#7FE300] shrink-0 fill-black" />
              <span>{t?.cta_trust_seal || "Application officielle signée · 100% hors-ligne · Zéro pub"}</span>
            </div>

            <button
              type="button"
              onClick={() => setShowGuide(true)}
              className="inline-flex items-center gap-1 text-zinc-800 hover:text-black underline underline-offset-4 font-semibold transition-colors cursor-pointer"
            >
              <HelpCircle className="size-3.5 text-zinc-500 shrink-0" />
              <span>{t?.cta_install_help || "Comment installer l'APK ?"}</span>
            </button>
          </div>

        </div>

      </div>

      {/* 3-Step Install Guide Modal */}
      <InstallGuideModal
        isOpen={showGuide}
        onClose={() => setShowGuide(false)}
        t={t}
        isRtl={isRtl}
      />

    </section>
  );
}
