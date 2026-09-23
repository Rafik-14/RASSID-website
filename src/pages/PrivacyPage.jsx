import LegalPageLayout from './LegalPageLayout';

function PrivacyFr() {
  return (
    <>
      <h2>1. Introduction</h2>
      <p>
        Chez RASSID, la protection de vos données est une priorité. Cette politique explique quelles données nous collectons, comment nous les utilisons et comment nous les protégeons. Elle s'applique à l'application mobile RASSID et à la console web.
      </p>

      <h2>2. Données collectées</h2>

      <h3>2.1 Données fournies par l'utilisateur</h3>
      <ul>
        <li><strong>Informations de compte</strong> : numéro de téléphone, nom (optionnel), rôle dans l'entreprise.</li>
        <li><strong>Données commerciales</strong> : noms des magasins clients, coordonnées, livraisons, paiements, retours, avoirs, stock et dettes.</li>
        <li><strong>Catalogue produits</strong> : noms des produits, prix, unités.</li>
        <li><strong>Dépenses de route</strong> : montants, catégories (carburant, repas, réparations), photos de justificatifs.</li>
      </ul>

      <h3>2.2 Données collectées automatiquement</h3>
      <ul>
        <li><strong>Localisation GPS</strong> : enregistrée uniquement lors de la validation d'une opération (livraison, paiement) pour permettre au gérant de localiser ses opérations sur la carte. L'application ne vous géolocalise pas en continu.</li>
        <li><strong>Données techniques</strong> : modèle de téléphone, version de l'application, version du système d'exploitation — pour le diagnostic en cas de problème.</li>
      </ul>

      <h3>2.3 Données que nous ne collectons PAS</h3>
      <ul>
        <li>Contacts du téléphone.</li>
        <li>Messages ou appels.</li>
        <li>Photos personnelles (seules les photos de dépenses sont traitées).</li>
        <li>Données de navigation web.</li>
        <li>Données bancaires ou de paiement en ligne.</li>
      </ul>

      <h2>3. Comment nous utilisons vos données</h2>
      <p>Vos données sont utilisées exclusivement pour :</p>
      <ul>
        <li>Faire fonctionner le service : enregistrer vos opérations, calculer les dettes, gérer le stock.</li>
        <li>Synchroniser vos données entre l'application mobile et la console web du gérant.</li>
        <li>Récupérer vos données en cas de changement ou perte de téléphone.</li>
        <li>Améliorer la fiabilité et la performance de l'application.</li>
        <li>Communiquer avec vous pour le support technique.</li>
      </ul>
      <p>
        <strong>Nous ne vendons pas vos données.</strong> Nous ne partageons pas vos données avec des tiers à des fins publicitaires ou marketing.
      </p>

      <h2>4. Stockage et sécurité</h2>

      <h3>4.1 Stockage local (sur le téléphone)</h3>
      <p>
        Toutes vos données opérationnelles sont stockées localement sur votre téléphone dans une base de données chiffrée (SQLCipher). Cela garantit que vos données restent accessibles même sans connexion internet et qu'elles sont protégées en cas de vol du téléphone.
      </p>

      <h3>4.2 Stockage en ligne (serveurs)</h3>
      <p>
        Lorsqu'une connexion internet est disponible, vos données se synchronisent avec nos serveurs hébergés par <strong>Supabase</strong> (infrastructure cloud sécurisée). Les données sont transmises via une connexion chiffrée (HTTPS/TLS) et stockées dans des bases de données protégées.
      </p>

      <h3>4.3 Intégrité des données</h3>
      <p>
        Chaque transaction est liée à la précédente par une signature numérique, formant une chaîne inaltérable. Cela garantit qu'aucune opération ne peut être modifiée ou supprimée après coup.
      </p>

      <h2>5. Partage de données</h2>
      <p>Vos données peuvent être partagées uniquement dans les cas suivants :</p>
      <ul>
        <li><strong>Au sein de votre organisation</strong> : le gérant qui vous a invité peut voir vos opérations via la console web.</li>
        <li><strong>Prestataires techniques</strong> : nos hébergeurs (Supabase) qui traitent les données selon des contrats de confidentialité stricts.</li>
        <li><strong>Obligations légales</strong> : si la loi algérienne l'exige, nous pouvons être amenés à communiquer certaines données aux autorités compétentes.</li>
      </ul>

      <h2>6. Conservation des données</h2>
      <p>
        Vos données sont conservées tant que votre compte est actif. Si vous demandez la suppression de votre compte, vos données personnelles et commerciales seront supprimées dans un délai de 30 jours, sauf obligation légale de conservation.
      </p>

      <h2>7. Vos droits</h2>
      <p>Vous avez le droit de :</p>
      <ul>
        <li><strong>Accéder</strong> à vos données : consultez vos informations directement dans l'application ou la console web.</li>
        <li><strong>Exporter</strong> vos données : la console web permet l'export en format Excel/CSV.</li>
        <li><strong>Supprimer</strong> votre compte et vos données : envoyez une demande à <a href="mailto:contact@rassid.dz">contact@rassid.dz</a>.</li>
        <li><strong>Corriger</strong> vos informations personnelles à tout moment.</li>
      </ul>

      <h2>8. Mineurs</h2>
      <p>
        RASSID est destiné à un usage professionnel par des adultes dans le cadre d'une activité de distribution. Nous ne collectons pas sciemment des données de mineurs.
      </p>

      <h2>9. Cookies et technologies de suivi</h2>
      <p>
        Le site web rassid.dz ne place aucun cookie publicitaire ni tracker tiers. Seul un cookie de préférence de langue est utilisé pour mémoriser votre choix entre le français et l'arabe.
      </p>

      <h2>10. Modifications de cette politique</h2>
      <p>
        Nous pouvons mettre à jour cette politique de confidentialité. Les modifications seront publiées sur cette page avec la date de mise à jour. L'utilisation continue du service vaut acceptation de la politique mise à jour.
      </p>

      <h2>11. Contact</h2>
      <p>
        Pour toute question relative à la confidentialité de vos données :<br />
        Email : <a href="mailto:contact@rassid.dz">contact@rassid.dz</a><br />
        WhatsApp : <a href="https://wa.me/213550000000">+213 550 000 000</a>
      </p>
    </>
  );
}

function PrivacyAr() {
  return (
    <>
      <h2>1. مقدمة</h2>
      <p>
        في رصيد، حماية بياناتكم أولوية. توضح هذه السياسة ما هي البيانات التي نجمعها، كيف نستخدمها وكيف نحميها. تنطبق على تطبيق رصيد للهاتف ولوحة التحكم.
      </p>

      <h2>2. البيانات المجمّعة</h2>

      <h3>2.1 البيانات المقدّمة من المستخدم</h3>
      <ul>
        <li><strong>معلومات الحساب</strong>: رقم الهاتف، الاسم (اختياري)، الدور في المؤسسة.</li>
        <li><strong>البيانات التجارية</strong>: أسماء الحوانيت، معلومات الاتصال، التسليمات، الخلاصات، المرتجعات، الإشعارات، المخزون والديون.</li>
        <li><strong>قائمة المنتجات</strong>: أسماء المنتجات، الأسعار، الوحدات.</li>
        <li><strong>مصاريف الطريق</strong>: المبالغ، الفئات (وقود، وجبات، إصلاحات)، صور الإيصالات.</li>
      </ul>

      <h3>2.2 البيانات المجمّعة تلقائياً</h3>
      <ul>
        <li><strong>الموقع GPS</strong>: يُسجّل فقط عند تأكيد عملية (تسليم، خلاص) لتمكين المسيّر من تتبع العمليات على الخريطة. التطبيق لا يتتبع موقعك بشكل مستمر.</li>
        <li><strong>بيانات تقنية</strong>: طراز الهاتف، إصدار التطبيق، إصدار النظام — للتشخيص في حالة المشاكل.</li>
      </ul>

      <h3>2.3 بيانات لا نجمعها</h3>
      <ul>
        <li>جهات اتصال الهاتف.</li>
        <li>الرسائل أو المكالمات.</li>
        <li>الصور الشخصية (فقط صور المصاريف).</li>
        <li>بيانات التصفح.</li>
        <li>بيانات بنكية أو دفع إلكتروني.</li>
      </ul>

      <h2>3. كيف نستخدم بياناتك</h2>
      <p>نستخدم بياناتك حصرياً لـ:</p>
      <ul>
        <li>تشغيل الخدمة: تسجيل العمليات، حساب الديون، إدارة المخزون.</li>
        <li>مزامنة البيانات بين تطبيق الهاتف ولوحة تحكم المسيّر.</li>
        <li>استرجاع بياناتك عند تغيير أو فقدان الهاتف.</li>
        <li>تحسين أداء وموثوقية التطبيق.</li>
        <li>التواصل معك للدعم التقني.</li>
      </ul>
      <p>
        <strong>نحن لا نبيع بياناتك.</strong> ولا نشاركها مع أطراف ثالثة لأغراض إعلانية أو تسويقية.
      </p>

      <h2>4. التخزين والأمان</h2>

      <h3>4.1 التخزين المحلي (على الهاتف)</h3>
      <p>
        جميع بياناتك التشغيلية مخزّنة محلياً في هاتفك في قاعدة بيانات مشفّرة (SQLCipher). هذا يضمن بقاء بياناتك متاحة حتى بدون إنترنت وحمايتها في حالة سرقة الهاتف.
      </p>

      <h3>4.2 التخزين السحابي (الخوادم)</h3>
      <p>
        عند توفر الإنترنت، تتم مزامنة بياناتك مع خوادمنا المستضافة على <strong>Supabase</strong> (بنية سحابية آمنة). البيانات تُنقل عبر اتصال مشفّر (HTTPS/TLS) وتُخزّن في قواعد بيانات محمية.
      </p>

      <h3>4.3 سلامة البيانات</h3>
      <p>
        كل عملية مرتبطة بالعملية السابقة بتوقيع رقمي، مما يشكّل سلسلة غير قابلة للتغيير. هذا يضمن عدم تعديل أو حذف أي عملية بعد تسجيلها.
      </p>

      <h2>5. مشاركة البيانات</h2>
      <p>يمكن مشاركة بياناتك فقط في الحالات التالية:</p>
      <ul>
        <li><strong>داخل منظمتك</strong>: المسيّر الذي دعاك يمكنه رؤية عملياتك عبر لوحة التحكم.</li>
        <li><strong>مقدّمو الخدمات التقنية</strong>: مستضيفونا (Supabase) الذين يعالجون البيانات وفق عقود سرية صارمة.</li>
        <li><strong>الالتزامات القانونية</strong>: إذا اقتضى القانون الجزائري، قد نضطر لتقديم بعض البيانات للسلطات المختصة.</li>
      </ul>

      <h2>6. مدة الاحتفاظ بالبيانات</h2>
      <p>
        يتم الاحتفاظ ببياناتك طالما حسابك نشط. عند طلب حذف حسابك، سيتم حذف بياناتك الشخصية والتجارية خلال 30 يوماً، إلا في حالة وجود التزام قانوني بالاحتفاظ.
      </p>

      <h2>7. حقوقك</h2>
      <p>لديك الحق في:</p>
      <ul>
        <li><strong>الاطلاع</strong> على بياناتك: يمكنك مراجعة معلوماتك مباشرة في التطبيق أو لوحة التحكم.</li>
        <li><strong>تصدير</strong> بياناتك: لوحة التحكم تتيح التصدير بصيغة Excel/CSV.</li>
        <li><strong>حذف</strong> حسابك وبياناتك: أرسل طلبك إلى <a href="mailto:contact@rassid.dz">contact@rassid.dz</a>.</li>
        <li><strong>تصحيح</strong> معلوماتك الشخصية في أي وقت.</li>
      </ul>

      <h2>8. القاصرون</h2>
      <p>
        رصيد مخصّص للاستخدام المهني من طرف البالغين في إطار نشاط التوزيع. لا نجمع عن عمد بيانات القاصرين.
      </p>

      <h2>9. الكوكيز وتقنيات التتبع</h2>
      <p>
        موقع rassid.dz لا يستخدم أي كوكيز إعلانية أو أدوات تتبع من أطراف ثالثة. يُستخدم فقط كوكي لحفظ اختيار اللغة (فرنسية أو عربية).
      </p>

      <h2>10. تعديل هذه السياسة</h2>
      <p>
        يمكننا تحديث سياسة الخصوصية هذه. ستُنشر التعديلات في هذه الصفحة مع تاريخ التحديث. استمرار استخدام الخدمة يعتبر قبولاً للسياسة المحدّثة.
      </p>

      <h2>11. التواصل</h2>
      <p>
        لأي سؤال حول خصوصية بياناتك:<br />
        البريد الإلكتروني: <a href="mailto:contact@rassid.dz">contact@rassid.dz</a><br />
        واتساب: <a href="https://wa.me/213550000000">213550000000+</a>
      </p>
    </>
  );
}

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      titleFr="Politique de confidentialité"
      titleAr="سياسة الخصوصية"
    >
      {({ isRtl }) => (isRtl ? <PrivacyAr /> : <PrivacyFr />)}
    </LegalPageLayout>
  );
}
