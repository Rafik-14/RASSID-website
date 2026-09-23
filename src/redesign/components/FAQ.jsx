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
        ? "واش يخدم بلا إنترنت؟" 
        : "Est-ce que ça marche sans internet ?",
      a: isRtl 
        ? "إيه، 100%. رصيد يحفظ كلشي في التيليفون. تسليمات، خلاصات، وصولات — كلشي يخدم حتى في تحت الأرض بلا شبكة. كي يرجع النت، كلشي يتزامن أوتوماتيك."
        : "Oui, 100%. RASSID sauvegarde tout sur le téléphone. Livraisons, paiements, bons — tout fonctionne même dans un sous-sol sans réseau. Quand le réseau revient, tout se synchronise automatiquement."
    },
    {
      id: "02",
      q: isRtl 
        ? "كيفاش نطبع الوصولات؟" 
        : "Comment ça marche pour imprimer les bons ?",
      a: isRtl 
        ? "السوّاق يدير طابعة بلوتوث صغيرة على الحزام. بعد كل تسليم ولا خلاص، كليك واحد والوصل يطلع في 3 ثواني. الزبون ياخذ الورقة ديالو في بلاصته."
        : "Le chauffeur porte une petite imprimante Bluetooth à la ceinture. Après chaque livraison ou paiement, un clic et le bon sort en 3 secondes. Le client garde sa preuve papier sur place."
    },
    {
      id: "03",
      q: isRtl 
        ? "السوّاق ديالي ماشي فاهم في التكنولوجيا. واش صعيبة؟" 
        : "Mon chauffeur n'est pas doué avec la technologie. C'est compliqué ?",
      a: isRtl 
        ? "لا. التطبيق مصمّم للميدان، ماشي للمهندسين. بوطون أخضر كبير باش تسجّل، أرقام واضحة، وهذاك هو. أكبر السوّاقة تاعنا يخدمو بيها بلا مشكل."
        : "Non. L'application est faite pour le terrain, pas pour les ingénieurs. Un gros bouton vert pour enregistrer, des chiffres clairs, et c'est tout. Nos chauffeurs les plus âgés l'utilisent sans problème."
    },
    {
      id: "04",
      q: isRtl 
        ? "واش يصرا إذا التيليفون تكسّر ولا ضاع؟" 
        : "Qu'est-ce qui se passe si le téléphone se casse ou se perd ?",
      a: isRtl 
        ? "كل المعلومات محفوظة بالأمان. نركّبو التطبيق في التيليفون الجديد وكلشي يرجع أوتوماتيك — تسليمات، ديون، تاريخ. والو ما يضيع."
        : "Toutes les données sont sauvegardées en sécurité. On installe l'application sur le nouveau téléphone et tout revient automatiquement — livraisons, dettes, historique. Rien n'est perdu."
    },
    {
      id: "05",
      q: isRtl 
        ? "بشحال؟ كاين فريّ كاشي؟" 
        : "C'est combien ? Il y a des frais cachés ?",
      a: isRtl 
        ? "بلان سولو يبدا من 30 000 دج لـ 6 أشهر. كلشي فيه، بدون تكاليف مخفية. للأساطيل، نديرو سعر مخصّص حسب عدد الشاحنات. وتقدر تجرّب شهر بالمجان قبل ما تقرر."
        : "Le plan Solo commence à 30 000 DA pour 6 mois. Tout est inclus, pas de frais cachés. Pour les flottes, on fait un prix personnalisé selon le nombre de camions. Et vous pouvez essayer 1 mois gratuitement avant de décider."
    },
    {
      id: "06",
      q: isRtl 
        ? "هل يقدر المسيّر يشوف واش يدير السائق؟" 
        : "Est-ce que le patron peut voir ce que fait le chauffeur ?",
      a: isRtl 
        ? "نعم. عند المسيّر لوحة تحكم ويب تبيّن له في اللحظة: التسليمات، الخلاصات، ديون كل حانوت، مخزون كل شاحنة، وحتى الموقع GPS تاع كل عملية. وفي المساء، مراقبة الصندوق تأخذ 30 ثانية فقط."
        : "Oui. Le patron a une console web qui montre en temps réel : les livraisons, les paiements, les dettes de chaque magasin, le stock de chaque camion, et même l'emplacement GPS de chaque opération. Le soir, la vérification de la caisse prend 30 secondes."
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
      className="relative py-20 lg:py-28 bg-white border-t border-zinc-100 overflow-hidden select-text"
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
                ? "الأجوبة على الأسئلة اللي يسقسونا عليها بزاف." 
                : "Les réponses aux questions qu'on nous pose le plus."
              )}
            </p>

            {/* Circular Navigation Buttons */}
            <div className="flex items-center gap-3">
              {/* Previous Arrow Button */}
              <button
                onClick={handlePrev}
                disabled={activeIndex === 0}
                aria-label={t?.faq_prev || "Précédent"}
                className="size-11 rounded-full border-2 border-zinc-950 bg-white text-zinc-950 flex items-center justify-center transition-all shadow-[2px_2px_0_0_#18181b] hover:shadow-[3px_3px_0_0_#18181b] hover:bg-zinc-50 active:translate-x-0.5 active:translate-y-0.5 disabled:opacity-30 disabled:shadow-none disabled:cursor-not-allowed cursor-pointer"
              >
                {isRtl ? <ChevronRight className="size-5" /> : <ChevronLeft className="size-5" />}
              </button>

              {/* Next Arrow Button (Dark filled) */}
              <button
                onClick={handleNext}
                disabled={activeIndex === faqs.length - 1}
                aria-label={t?.faq_next || "Suivant"}
                className="size-11 rounded-full border-2 border-zinc-950 bg-zinc-950 text-white flex items-center justify-center transition-all shadow-[2px_2px_0_0_#18181b] hover:shadow-[3px_3px_0_0_#18181b] hover:bg-zinc-800 active:translate-x-0.5 active:translate-y-0.5 disabled:opacity-30 disabled:shadow-none disabled:cursor-not-allowed cursor-pointer"
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
                  className={`shrink-0 min-h-[490px] sm:min-h-[530px] rounded-[30px] sm:rounded-[36px] p-8 sm:p-9 lg:p-10 flex flex-col justify-end transition-all duration-500 select-text ${
                    isActive
                      ? 'bg-[#7FE300] text-zinc-950 border-2 border-zinc-950 shadow-[6px_6px_0_0_#18181b] cursor-default'
                      : 'bg-white hover:bg-zinc-50/80 text-zinc-950 border-2 border-zinc-950 shadow-[4px_4px_0_0_#18181b] hover:shadow-[6px_6px_0_0_#18181b] cursor-pointer group'
                  }`}
                  style={{
                    pointerEvents: isPast ? 'none' : 'auto',
                    visibility: isPast ? 'hidden' : 'visible',
                    transition: 'visibility 0.8s, background-color 0.5s, border-color 0.5s, box-shadow 0.5s'
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
                ? 'left-0 bg-gradient-to-r from-white via-white/80 to-transparent' 
                : 'right-0 bg-gradient-to-l from-white via-white/80 to-transparent'
            }`} 
            aria-hidden="true" 
          />
        </div>

      </div>

    </section>
  );
}
