import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Banknote, RotateCcw, FileText, Check, ScanLine, Sparkles } from 'lucide-react';

import livraisonScreen from '../../assets/Livraison_operation_screen.webp';
import paiementScreen from '../../assets/Paiment_operation_screen2.webp';
import retourScreen from '../../assets/retour_operation_screen3.webp';
import avoirScreen from '../../assets/Avoir_operation_screen4.webp';

export default function MobileOperationsShowcase({ isRtl }) {
  const [activeTab, setActiveTab] = useState('livraison');

  const operations = {
    livraison: {
      id: 'livraison',
      icon: ShoppingCart,
      label: isRtl ? '1. تسليم (بيع)' : '1. Livraison (Vente)',
      tag: isRtl ? 'حركة موجبة (+)' : 'Impact positif (+) Dette',
      title: isRtl ? 'إصدار وصل التسليم في 4 ثوانٍ' : 'Émission du bon de livraison en 4 secondes',
      subtitle: isRtl 
        ? 'اختيار السلع بالباركود، حساب فوري للرصيد الجديد، وتحديث المخزون.' 
        : 'Sélection rapide des articles au scanner, recalcul immédiat de la dette et déduction du stock fourgon sans erreur de calcul.',
      img: livraisonScreen,
      points: isRtl ? [
        'إضافة السلع بالكرتون أو الوحدة الفردية بنقرة واحدة',
        'تنبيه مباشر في حال تجاوز التاجر لسقف الديون المسموح',
        'طباعة فورية للوصل مع حساب الرصيد القديم والجديد'
      ] : [
        'Ajout des articles par cartons ou unités d’un seul tap au volant ou au comptoir',
        'Alerte immédiate avec blocage si le magasin dépasse son plafond de crédit',
        'Impression Bluetooth instantanée avec mention légale et code de contrôle'
      ]
    },
    paiement: {
      id: 'paiement',
      icon: Banknote,
      label: isRtl ? '2. تحصيل نقدي' : '2. Paiement (Encaissement)',
      tag: isRtl ? 'حركة سالبة (-) خفض الدين' : 'Impact négatif (−) Réduction Dette',
      title: isRtl ? 'تسجيل الدفعات النقدية بدون أي خطأ حسابي' : 'Encaissement espèces sans contestation possible',
      subtitle: isRtl 
        ? 'تسجيل المبالغ المستلمة مع منع دفع مبلغ أكبر من الدين الحقيقي للمحل.' 
        : 'Saisie ultra-rapide du montant perçu en espèces avec interdiction stricte d’encaisser plus que la dette réelle.',
      img: paiementScreen,
      points: isRtl ? [
        'تخفيض فوري ومباشر لدين المحل المسجل في النظام',
        'إضافة المبلغ المقبوض إلى خزينة الشاحنة المسائية',
        'تسليم وصل رسمي للتاجر يثبت المبلغ المدفوع'
      ] : [
        'Diminution immédiate et certifiée de la dette de l’épicerie cliente',
        'Alimentation automatique du compteur d’espèces en caisse du fourgon',
        'Remise d’un reçu thermique signé et horodaté prouvant le versement'
      ]
    },
    retour: {
      id: 'retour',
      icon: RotateCcw,
      label: isRtl ? '3. إرجاع السلع' : '3. Retour (Avaries)',
      tag: isRtl ? 'إرجاع سلعة مع إثبات' : 'Retour Avarie avec Photo',
      title: isRtl ? 'إدارة المرتجعات مع إرفاق صورة الإثبات' : 'Gestion des retours avec preuve photo obligatoire',
      subtitle: isRtl 
        ? 'تسجيل السلع التالفة أو المنتهية الصلاحية مع التقاط صورة مباشرة من الكاميرا.' 
        : 'Enregistrement transparent des cartons écrasés ou périmés avec capture photo immédiate pour le responsable du dépôt.',
      img: retourScreen,
      points: isRtl ? [
        'إرفاق صورة للمنتج التالف للتحقق قبل القبول في المستودع',
        'خصم فوري لقيمة المرتجع من فاتورة اليوم أو الحساب',
        'عزل البضائع المرتجعة عن المخزون الصالح للبيع'
      ] : [
        'Photo jointe pour validation avant acceptation physique au dépôt',
        'Déduction immédiate sur la facture en cours du commerçant',
        'Isolation automatique dans le stock "Retours / Avaries" du véhicule'
      ]
    },
    avoir: {
      id: 'avoir',
      icon: FileText,
      label: isRtl ? '4. إشعار خصم' : '4. Avoir (Ristourne)',
      tag: isRtl ? 'تخفيض تجاري رسمي' : 'Ajustement Commercial Encadré',
      title: isRtl ? 'خصومات وتعديلات أسعار موثقة ومقيدة' : 'Avoirs et remises commerciales sous contrôle',
      subtitle: isRtl 
        ? 'تطبيق التخفيضات التجارية بموافقة الإدارة مع توثيق كامل للعملية.' 
        : 'Application d’un ajustement tarifaire ou d’une ristourne autorisée par la direction, sans dérapage en coulisses.',
      img: avoirScreen,
      points: isRtl ? [
        'توثيق محاسبي رسمي مرتبط بحساب الزبون',
        'منع التخفيضات العشوائية خارج سياسة الشركة',
        'إدراج الخصم في الوصل الحراري المطبوع'
      ] : [
        'Traçabilité comptable inviolable liée au sous-compte du client',
        'Interdiction des remises arbitraires hors grille commerciale validée',
        'Mention claire et détaillée de l’avoir sur le ticket thermique remis au client'
      ]
    }
  };

  const current = operations[activeTab];

  return (
    <section id="mobile" className="relative py-24 lg:py-32 bg-[#08090C] dark-grain overflow-hidden">
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-semibold text-[#7FE300] mb-4">
            <ScanLine className="size-3.5" />
            <span>Ergonomie Terrain & Vente au Camion</span>
          </div>

          <h2 className="font-display text-[clamp(2.2rem,4.5vw,3.6rem)] font-extrabold text-white tracking-[-0.03em] leading-tight">
            Les 4 opérations de tournée,<br />
            <span className="text-zinc-400 font-normal italic">maîtrisées d'une seule main.</span>
          </h2>

          <p className="mt-4 text-zinc-400 text-base sm:text-lg leading-relaxed">
            Pas de menus cachés, pas de sous-onglets complexes. Un chauffeur livreur apprend à utiliser l'application en moins de 10 minutes.
          </p>

          {/* Tab Selector */}
          <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/12 bg-[#0E1015] p-1.5 text-xs font-semibold shadow-2xl backdrop-blur-xl">
            {Object.values(operations).map((op) => {
              const Icon = op.icon;
              const isActive = activeTab === op.id;
              return (
                <button
                  key={op.id}
                  onClick={() => setActiveTab(op.id)}
                  className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 transition-all duration-200 active:scale-95 ${
                    isActive
                      ? 'bg-[#7FE300] text-black font-bold shadow-[0_0_20px_rgba(127,227,0,0.35)]'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="size-4" />
                  <span>{op.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Master Showcase Container */}
        <div className="mt-14 max-w-5xl mx-auto grid items-center gap-10 md:grid-cols-12 rounded-3xl border border-white/12 bg-[#0E1015]/90 p-6 sm:p-12 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-[#7FE300]/5 rounded-full blur-3xl pointer-events-none" />

          {/* Phone Frame with Realistic Lighting & Reflection */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative w-64 sm:w-72 rounded-[3rem] border-4 border-[#252A33] bg-[#070809] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.9),0_0_25px_rgba(127,227,0,0.15)] ring-1 ring-white/15">
              
              {/* Dynamic Island / Speaker Notch */}
              <div className="absolute top-4 start-1/2 -translate-x-1/2 h-4 w-24 rounded-full bg-black z-30 border border-white/5 flex items-center justify-center">
                <span className="size-1.5 rounded-full bg-zinc-700 me-2" />
                <span className="size-2 rounded-full bg-blue-900/40" />
              </div>

              {/* Glass Glare Overlay */}
              <div className="pointer-events-none absolute inset-0 rounded-[2.8rem] bg-gradient-to-tr from-white/[0.04] via-transparent to-transparent z-20" />

              {/* Screen Container */}
              <div className="relative overflow-hidden rounded-[2.4rem] bg-black aspect-[9/19.5]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current.id}
                    src={current.img}
                    alt={current.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.25 }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Laser Barcode Scanner Simulator Line */}
                <div className="pointer-events-none absolute inset-x-4 top-1/3 h-0.5 bg-[#7FE300] shadow-[0_0_15px_#7FE300] animate-pulse z-10" />
              </div>
            </div>
          </div>

          {/* Details & Field Highlights */}
          <div className="md:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#7FE300]/15 px-3 py-1 text-xs font-bold text-[#7FE300] border border-[#7FE300]/30">
              <Sparkles className="size-3.5" />
              <span>{current.tag}</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {current.title}
            </h3>

            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              {current.subtitle}
            </p>

            <div className="border-t border-white/10 pt-6 space-y-3.5">
              {current.points.map((point, index) => (
                <div key={index} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                  <span className="grid size-5 place-items-center rounded-full bg-[#7FE300]/20 text-[#7FE300] shrink-0 mt-0.5 border border-[#7FE300]/30">
                    <Check className="size-3" />
                  </span>
                  <span className="leading-snug">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 text-xs font-mono text-zinc-400">
              ⚡ Compatible scan caméra smartphone & lecteurs laser PDA (Honeywell, Zebra, Urovo)
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
