import { Quote, MapPin, CheckCircle2 } from 'lucide-react';

export default function FieldProof({ isRtl }) {
  return (
    <section className="relative py-20 lg:py-28 bg-[#F8F9FA] border-t border-zinc-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Customer Testimonial Card */}
        <div className="max-w-3xl mx-auto rounded-3xl border border-zinc-200/90 bg-white p-8 sm:p-12 text-center shadow-[0_12px_40px_rgba(0,0,0,0.04)] relative overflow-hidden">
          <Quote className="size-10 mx-auto text-[#7FE300] mb-4" />
          <p className="font-display text-lg sm:text-xl font-medium text-zinc-900 italic leading-relaxed">
            {isRtl
              ? "« لا مزيد من الدفاتر الضائعة، ولا حسابات تقريبية على أوراق ممزقة. رصيد منحنا وضوحاً كاملاً بشأن ما تدين به كل بقالة، وسائقونا لم يعودوا يقضون ساعتين في عد النقود ومطابقتها مساءً. »"
              : "« Plus de carnets perdus, plus de calculs approximatifs sur des bouts de papier sales. RASSID nous donne une clarté totale sur ce que chaque épicerie nous doit, et mes livreurs ne passent plus deux heures à recompter des billets le soir. »"
            }
          </p>
          
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="size-10 rounded-full bg-zinc-950 text-[#7FE300] grid place-items-center font-bold text-sm shadow-sm">
              DZ
            </div>
            <div className="text-left rtl:text-right">
              <p className="text-sm font-bold text-zinc-950 flex items-center gap-1.5">
                <span>{isRtl ? 'الإدارة العامة' : 'Direction Générale'}</span>
                <CheckCircle2 className="size-3.5 text-[#5EA800]" />
              </p>
              <p className="text-xs text-zinc-500 flex items-center gap-1">
                <MapPin className="size-3 text-zinc-400" />
                <span>{isRtl ? 'تاجر جملة وموزّع مواد غذائية (البليدة / الجزائر)' : 'Grossiste & Distributeur Agroalimentaire (Blida / Alger)'}</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
