export default function FieldProof({ t, isRtl }) {
  const quote = isRtl
    ? "قبل، كنّا نخسرو الفلوس بلا ما نعرفو وين. الكرّاسات تضيع، السائقين ينساو، والزبائن ينكرو. مع رصيد، كل دينار محسوب. في المساء، حساب الصندوق يخرج مضبوط في 30 ثانية. ما نرجعوش للوراء."
    : "Avant, on perdait de l'argent sans savoir où. Les cahiers se perdaient, les chauffeurs oubliaient, les clients niaient. Avec RASSID, chaque dinar est tracé. Le soir, la caisse tombe juste en 30 secondes. On ne revient plus en arrière.";

  return (
    <section id="temoignage" className="relative py-20 sm:py-28 lg:py-32 bg-white overflow-hidden">
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Single Card: Image 1 Tactile Style (white, rounded-[32px], border-2, hard shadow) */}
        <div className="rounded-[32px] sm:rounded-[36px] bg-white border-2 border-zinc-950 shadow-[6px_6px_0_0_#18181b] sm:shadow-[8px_8px_0_0_#18181b] p-8 sm:p-12 lg:p-14 transition-all duration-300 hover:shadow-[10px_10px_0_0_#18181b]">
          
          {/* Main Layout: Image 2 (Large Quote Mark on Start + Text Block & Footer on End) */}
          <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8 lg:gap-10">
            
            {/* Large Solid Quotation Mark (Image 2 style) */}
            <div className="shrink-0 pt-1">
              <svg 
                className={`w-12 h-10 sm:w-16 sm:h-12 lg:w-18 lg:h-14 ${isRtl ? 'scale-x-[-1]' : ''}`} 
                viewBox="0 0 72 52" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path 
                  d="M28 26C28 39 19 49 5 52L2 44C10 42 16 35 17 28H2V0H28V26Z" 
                  fill="#7FE300" 
                  stroke="#18181b" 
                  strokeWidth="2.5" 
                  strokeLinejoin="round" 
                />
                <path 
                  d="M70 26C70 39 61 49 47 52L44 44C52 42 58 35 59 28H44V0H70V26Z" 
                  fill="#7FE300" 
                  stroke="#18181b" 
                  strokeWidth="2.5" 
                  strokeLinejoin="round" 
                />
              </svg>
            </div>

            {/* Right Column: Quote + Author Footer */}
            <div className="flex-1 min-w-0">
              
              {/* Quote Statement */}
              <blockquote className="font-display text-[clamp(1.15rem,2.1vw,1.65rem)] font-bold text-zinc-950 leading-[1.48] tracking-tight text-balance">
                « {quote} »
              </blockquote>

              {/* Bottom Footer: Author attribution */}
              <div className="mt-8 pt-6 border-t border-zinc-950/10 flex items-center justify-between gap-4">
                <div className="text-xs sm:text-sm font-medium text-zinc-600 leading-snug">
                  <span className="text-[#3f7c00] font-black text-base mr-1.5">—</span>
                  <span className="font-black text-zinc-950">
                    {t?.field_proof_author_role || (isRtl ? "المدير" : "Gérant")}
                  </span>
                  <span className="mx-1 text-zinc-400">·</span>
                  <span>
                    {t?.field_proof_author_company || (isRtl ? "تاجر جملة وموزّع" : "Grossiste & Distributeur")}
                  </span>
                  <span className="mx-1 text-zinc-400">·</span>
                  <span className="text-zinc-500">
                    {t?.field_proof_author_location || (isRtl ? "البليدة · الجزائر" : "Blida · Alger")}
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
