import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function FAQ({ t, isRtl }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(1200);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  const faqs = useMemo(() => [
    {
      id: "01",
      q: isRtl 
        ? "هل يلزم وجود اتصال بالإنترنت للعمل في الميدان؟" 
        : "Faut-il obligatoirement une connexion Internet pour travailler sur le terrain ?",
      a: isRtl 
        ? "لا، إطلاقاً. تطبيق رصيد يعمل 100% بدون إنترنت. كل العمليات (تسليم، تحصيل، إرجاع) تسجل في قاعدة بيانات SQLite محلية مشفرة على هاتف السائق. وعند توفر أول شبكة إنترنت (3G/4G أو واي فاي في المستودع) تتم المزامنة تلقائياً في الخلفية."
        : "Non, absolument pas. L'application mobile RASSID est conçue en offline-first absolu. Vos livreurs peuvent descendre dans les sous-sols les plus isolés et enregistrer des ventes à toute vitesse. Les données sont sauvegardées dans une base SQLite chiffrée sur le téléphone et se synchronisent avec la base centrale dès qu'une connexion (3G/4G ou Wi-Fi du dépôt) est rétablie."
    },
    {
      id: "02",
      q: isRtl 
        ? "هل لوحة تحكم الإدارة مشمولة في سعر الاشتراك؟" 
        : "Le tableau de bord web de direction est-il inclus dans l'abonnement ?",
      a: isRtl 
        ? "نعم، بالتأكيد. كل اشتراك يمنحك حق الوصول إلى تطبيق الهاتف لسائقي التوزيع، ولوحة التحكم السحابية المخصصة للمدير، المحاسب ومسؤولي المبيعات لمراقبة الديون والمخزون وحركة الأموال بدون أي مصاريف خفية."
        : "Oui, sans aucun supplément. Chaque forfait donne accès à l'application mobile de tournée pour vos chauffeurs ainsi qu'à la console web de supervision pour le directeur, le chef des ventes et la comptabilité, sans surcoût caché."
    },
    {
      id: "03",
      q: isRtl 
        ? "ما هي الطابعات الحرارية المتوافقة مع التطبيق في الجزائر؟" 
        : "Quelles imprimantes thermiques sont compatibles en Algérie ?",
      a: isRtl 
        ? "رصيد متوافق مع كافة طابعات البلوتوث الحرارية المحمولة قياس 58 ملم و 80 ملم المتداولة في السوق الجزائري مثل Xprinter و Netum و Epson. الاقتران يتم في ثوانٍ معدودة مباشرة من داخل التطبيق لطباعة وصولات فورية للزبائن."
        : "RASSID supporte toutes les imprimantes thermiques Bluetooth portables 58mm et 80mm courantes en Algérie (Xprinter, Netum, Epson, etc.). L'association Bluetooth se fait en 3 clics directement depuis l'application pour délivrer des bons clairs et infalsifiables."
    },
    {
      id: "04",
      q: isRtl 
        ? "كيف تبدأ التجربة المجانية لمدة 7 أيام في الميدان؟" 
        : "Comment se passe l'essai gratuit de 7 jours sur vos camions ?",
      a: isRtl 
        ? "تتواصل معنا مباشرة عبر واتساب أو الاتصال الهاتفي. نقوم بتهيئة فضاء شركتك وإدخال قائمة السلع والمحلات التجريبية خلال 24 ساعة، وتثبت التطبيق على هاتف سائقك لتجربته في جولة حقيقية دون دفع أي دينار أو إدخال بطاقة بنكية."
        : "Contactez-nous directement par WhatsApp ou téléphone. Nous configurons votre espace en 24h avec vos articles et vos premiers magasins clients. Vous installez l'application sur le téléphone d'un chauffeur et testez sur une vraie tournée sans sortir votre carte bancaire."
    },
    {
      id: "05",
      q: isRtl 
        ? "كيف يمنع رصيد التلاعب وفروقات الصندوق والنزاعات؟" 
        : "Comment RASSID empêche-t-il les fraudes et les litiges de caisse ?",
      a: isRtl 
        ? "كل عملية (بيع، تحصيل، إرجاع) تُقفل بتوقيع رياضي مشفر SHA-256 يستحيل تزويره. لا يمكن حذف أي عملية في الخفاء: أي تصحيح يُسجل كإلغاء رسمي موثق ومطابق يُشعر الإدارة فوراً."
        : "Chaque opération (livraison, encaissement, retour) est scellée par une signature cryptographique SHA-256 infalsifiable. Une opération ne peut jamais être effacée ou modifiée en douce : toute correction génère une contre-passation d'annulation officielle et notifiée à la direction."
    },
    {
      id: "06",
      q: isRtl 
        ? "هل يمكنني تصدير البيانات إلى برنامج المحاسبة أو ملفات إكسل؟" 
        : "Puis-je exporter mes données vers Excel ou mon logiciel comptable ?",
      a: isRtl 
        ? "نعم، بنقرة واحدة من لوحة التحكم، يمكنك تصدير سجلات المبيعات، المقبوضات، كشوف حسابات الزبائن وجرد المخزون بصيغة Excel أو CSV المتوافقة مباشرة مع برامج المحاسبة الجزائرية."
        : "Oui. En un clic depuis la console web, vous exportez l'ensemble de vos journaux de ventes, encaissements, soldes clients et stocks au format Excel (.xlsx) ou CSV, directement exploitables par votre comptable."
    }
  ], [isRtl]);

  // Keep track of container viewport width
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Card geometry based on container width
  const cardMetrics = useMemo(() => {
    if (containerWidth >= 1024) {
      return { activeW: 490, inactiveW: 310, gap: 24 };
    }
    if (containerWidth >= 640) {
      return { activeW: 440, inactiveW: 280, gap: 20 };
    }
    // Mobile: active card takes comfortable width, peek next card
    const activeW = Math.max(280, Math.min(containerWidth - 24, 350));
    return { activeW, inactiveW: 260, gap: 16 };
  }, [containerWidth]);

  // Exact step distance: inactive card width + gap
  const step = useMemo(() => cardMetrics.inactiveW + cardMetrics.gap, [cardMetrics]);

  // Target translation offset: active card is pinned to the start (x = 0)
  const currentOffset = useMemo(() => {
    return activeIndex * step;
  }, [activeIndex, step]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => Math.min(prev + 1, faqs.length - 1));
  }, [faqs.length]);

  const handleSelectCard = (index) => {
    setActiveIndex(index);
  };

  // Keyboard navigation listener (Left/Right arrows change active card)
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onKeyDown = (e) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) return;

      const rect = section.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 0.85 && rect.bottom > window.innerHeight * 0.15;
      if (!inView) return;

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (isRtl) {
          handlePrev();
        } else {
          handleNext();
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (isRtl) {
          handleNext();
        } else {
          handlePrev();
        }
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isRtl, handlePrev, handleNext]);

  return (
    <section 
      id="faq" 
      ref={sectionRef} 
      className="relative py-20 lg:py-28 bg-[#FAF9F5] border-t border-zinc-200/70 overflow-hidden select-text"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header: Editorial 2-line title on start side, Subtitle & Arrow controls on end side (NO PILLS) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 lg:mb-16">
          
          {/* Title column (No pill above title) */}
          <div className="max-w-xl">
            <h2 className="font-display text-[clamp(2.4rem,5vw,4rem)] font-extrabold tracking-tight text-zinc-950 leading-[1.12]">
              <div>{t?.faq_title_line1 || (isRtl ? "الأسئلة" : "Questions")}</div>
              <div>
                {t?.faq_title_line2_prefix || (isRtl ? "" : "Fréquemment ")}
                <span className="text-[#559E00]">{t?.faq_title_line2_highlight || (isRtl ? "الأكثر شيوعاً" : "Posées")}</span>
              </div>
            </h2>
          </div>

          {/* Subtitle & Circular Arrow Controls */}
          <div className="flex flex-col sm:items-end gap-5">
            <p className="text-sm sm:text-base text-zinc-600 max-w-md leading-relaxed text-left rtl:text-right sm:text-right rtl:sm:text-left">
              {t?.faq_desc || (isRtl 
                ? "إجابات واضحة ومباشرة حول تشغيل رصيد، نظام العمل بدون إنترنت، وإدارة جولات التوزيع في الميدان." 
                : "Trouvez les réponses directes sur le fonctionnement de RASSID, le mode hors-ligne absolu et la gestion de vos tournées réelles."
              )}
            </p>

            {/* Circular Navigation Buttons */}
            <div className="flex items-center gap-3">
              {/* Previous Arrow Button */}
              <button
                onClick={handlePrev}
                disabled={activeIndex === 0}
                aria-label={t?.faq_prev || "Précédent"}
                className="size-11 rounded-full border border-zinc-300/90 bg-white text-zinc-900 flex items-center justify-center transition-all shadow-sm hover:bg-zinc-100 hover:border-zinc-400 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              >
                {isRtl ? <ChevronRight className="size-5" /> : <ChevronLeft className="size-5" />}
              </button>

              {/* Next Arrow Button (Dark filled) */}
              <button
                onClick={handleNext}
                disabled={activeIndex === faqs.length - 1}
                aria-label={t?.faq_next || "Suivant"}
                className="size-11 rounded-full bg-zinc-950 text-white flex items-center justify-center transition-all shadow-md hover:bg-zinc-800 active:scale-95 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              >
                {isRtl ? <ChevronLeft className="size-5" /> : <ChevronRight className="size-5" />}
              </button>
            </div>
          </div>

        </div>

        {/* Carousel Viewport: Aligned directly within max-w-7xl so active card starts flush with the title */}
        <div 
          ref={containerRef}
          className="relative overflow-hidden"
          role="region"
          aria-label="FAQ carousel"
        >
          <motion.div
            onPanEnd={(_e, info) => {
              const swipeThreshold = 40;
              const velocityThreshold = 250;
              if (isRtl) {
                if (info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold) {
                  handleNext();
                } else if (info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) {
                  handlePrev();
                }
              } else {
                if (info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) {
                  handleNext();
                } else if (info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold) {
                  handlePrev();
                }
              }
            }}
            animate={{ x: isRtl ? currentOffset : -currentOffset }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex pb-8 pt-2 cursor-grab active:cursor-grabbing select-none"
            style={{ 
              gap: `${cardMetrics.gap}px`,
              touchAction: "pan-y" 
            }}
          >
            {faqs.map((faq, index) => {
              const isActive = activeIndex === index;
              const isPast = index < activeIndex;

              return (
                <motion.div
                  key={faq.id}
                  onClick={() => handleSelectCard(index)}
                  animate={{
                    width: isActive ? cardMetrics.activeW : cardMetrics.inactiveW,
                    opacity: isPast ? 0 : 1,
                    scale: isPast ? 0.94 : 1,
                  }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  tabIndex={isActive ? -1 : 0}
                  role="button"
                  aria-pressed={isActive}
                  className={`shrink-0 min-h-[490px] sm:min-h-[530px] rounded-[30px] sm:rounded-[36px] p-8 sm:p-9 lg:p-10 flex flex-col justify-end transition-colors duration-700 select-text ${
                    isActive
                      ? 'bg-[#7FE300] text-zinc-950 shadow-2xl shadow-[#7FE300]/25 border border-[#70ce00] cursor-default'
                      : 'bg-[#F0EFEA] hover:bg-[#EAE8E1] text-zinc-950 border border-black/5 hover:border-black/10 shadow-sm hover:shadow-md cursor-pointer group'
                  }`}
                  style={{
                    pointerEvents: isPast ? 'none' : 'auto',
                    visibility: isPast ? 'hidden' : 'visible',
                    transition: 'visibility 0.8s, background-color 0.7s, border-color 0.7s, box-shadow 0.7s'
                  }}
                >
                  {/* Active Card: Question + Full Answer anchored to bottom (top left empty) */}
                  {isActive ? (
                    <div className="flex flex-col justify-end w-full">
                      <h3 className="text-zinc-950 font-extrabold text-2xl sm:text-3xl lg:text-[32px] leading-[1.18] tracking-tight">
                        {faq.q}
                      </h3>
                      <AnimatePresence mode="wait">
                        <motion.p 
                          initial={{ opacity: 0, y: 12 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -6 }}
                          transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
                          className="text-zinc-900/90 text-sm sm:text-base lg:text-[16px] leading-relaxed mt-5 font-medium"
                        >
                          {faq.a}
                        </motion.p>
                      </AnimatePresence>
                    </div>
                  ) : (
                    /* Inactive Card: Question anchored to bottom with top area completely empty */
                    <div className="flex flex-col justify-end w-full">
                      <h3 className="text-zinc-900 font-bold text-xl sm:text-2xl lg:text-[27px] leading-[1.22] tracking-tight group-hover:text-black transition-colors">
                        {faq.q}
                      </h3>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right edge fade gradient mask to indicate overflow */}
          <div 
            className={`pointer-events-none absolute top-0 bottom-8 w-16 sm:w-28 z-10 ${
              isRtl 
                ? 'left-0 bg-gradient-to-r from-[#FAF9F5] via-[#FAF9F5]/80 to-transparent' 
                : 'right-0 bg-gradient-to-l from-[#FAF9F5] via-[#FAF9F5]/80 to-transparent'
            }`} 
            aria-hidden="true" 
          />
        </div>

      </div>

    </section>
  );
}
