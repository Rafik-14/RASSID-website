import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ({ isRtl }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: isRtl ? "هل يلزم وجود اتصال بالإنترنت للعمل في الميدان؟" : "Faut-il obligatoirement une connexion Internet pour travailler sur le terrain ?",
      a: isRtl 
        ? "لا، إطلاقاً. تطبيق رصيد يعمل 100% بدون إنترنت. كل العمليات (تسليم، تحصيل، إرجاع) تسجل في قاعدة بيانات SQLite محلية مشفرة على هاتف السائق. وعند توفر أول شبكة إنترنت (3G/4G أو واي فاي في المستودع) تتم المزامنة تلقائياً في الخلفية."
        : "Non, absolument pas. L'application mobile RASSID est conçue en offline-first absolu. Vos livreurs peuvent descendre dans les sous-sols les plus isolés et enregistrer des ventes à toute vitesse. Les données sont sauvegardées dans une base SQLite chiffrée sur le téléphone et se synchronisent avec la base centrale dès qu'une connexion (3G/4G ou Wi-Fi du dépôt) est rétablie."
    },
    {
      q: isRtl ? "هل لوحة تحكم الإدارة مشمولة في سعر الاشتراك؟" : "Le tableau de bord web de direction est-il inclus dans l'abonnement ?",
      a: isRtl 
        ? "نعم، بالتأكيد. كل اشتراك يمنحك حق الوصول إلى تطبيق الهاتف لسائقي التوزيع، ولوحة التحكم السحابية المخصصة للمدير، المحاسب ومسؤولي المبيعات لمراقبة الديون والمخزون وحركة الأموال."
        : "Oui, sans aucun supplément. Chaque forfait donne accès à l'application mobile de tournée pour vos chauffeurs ainsi qu'à la console web de supervision pour le directeur, le chef des ventes et la comptabilité."
    },
    {
      q: isRtl ? "ما هي الطابعات الحرارية المتوافقة مع التطبيق؟" : "Quelles imprimantes thermiques sont compatibles ?",
      a: isRtl 
        ? "رصيد متوافق مع كافة طابعات البلوتوث الحرارية المحمولة قياس 58 ملم و 80 ملم المتداولة في السوق الجزائري مثل Xprinter و Netum و Epson. الاقتران يتم في ثوانٍ معدودة مباشرة من داخل التطبيق."
        : "RASSID supporte toutes les imprimantes thermiques Bluetooth portables 58mm et 80mm courantes en Algérie (Xprinter, Netum, Epson, etc.). L'association Bluetooth se fait en 3 clics directement depuis l'application."
    },
    {
      q: isRtl ? "كيف تبدأ التجربة المجانية لمدة 7 أيام؟" : "Comment se passe l'essai gratuit de 7 jours ?",
      a: isRtl 
        ? "تتواصل معنا عبر واتساب أو الاتصال الهاتفي. نقوم بتهيئة فضاء شركتك وإدخال قائمة السلع والمحلات التجريبية خلال 24 ساعة، وتثبت التطبيق على هاتف سائقك لتجربته في جولة حقيقية دون دفع أي دينار."
        : "Contactez-nous directement par WhatsApp ou téléphone. Nous initialisons votre espace distributeur en 24h avec vos articles et vos premiers magasins clients. Vous installez l'application sur le téléphone d'un premier chauffeur et testez sur une vraie tournée sans sortir votre carte bancaire."
    }
  ];

  return (
    <section id="faq" className="relative py-20 lg:py-28 bg-[#0B0D10] border-t border-white/10">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-semibold text-[#7FE300] mb-3">
            <HelpCircle className="size-3.5" />
            <span>Questions & Réponses</span>
          </div>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.2rem)] font-extrabold text-white tracking-tight">
            Tout ce qu'il faut savoir avant de démarrer.
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="rounded-2xl border border-white/10 bg-[#121418] p-5 transition-all hover:border-white/20"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between text-left rtl:text-right text-sm sm:text-base font-bold text-white"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`size-4 text-[#7FE300] shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 pt-4 border-t border-white/10 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
