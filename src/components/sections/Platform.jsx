import { motion, useReducedMotion } from 'framer-motion'
import {
  Smartphone,
  LayoutDashboard,
  RefreshCw,
  Wallet,
  Store,
  ArrowDownToLine,
  AlertTriangle,
  TrendingUp,
  ArrowUpRight,
} from 'lucide-react'
import PhoneFrame from '../ui/PhoneFrame'
import { useLang } from '../../contexts/LanguageContext'
import homeScreen from '../../assets/Home_screen.webp'

/* A number that must stay LTR (Western digits) even inside an RTL layout. */
const Amount = ({ children, className = '' }) => (
  <span dir="ltr" className={`tnum ${className}`}>
    {children}
  </span>
)

/* ── The coded RASSID web console (Aperçu), rendered in the site's tokens ──
   Dark proof framed by a light browser chrome — mirrors the real dashboard:
   four KPIs (one lime "feature" lead), a livraisons-vs-paiements trend, and
   the "Magasins clés" list with debt-status chips (lime = à jour, coral =
   en retard). Money is the subject; color carries meaning. */
function DashboardMock({ t }) {
  const kpis = [
    { key: 'receivables', icon: Wallet, value: '1 240 000', money: true, feature: true },
    { key: 'activeStores', icon: Store, value: '14' },
    { key: 'cashToday', icon: ArrowDownToLine, value: '96 000', money: true, tone: 'success' },
    { key: 'overdue', icon: AlertTriangle, value: '3', tone: 'danger' },
  ]

  const deliveries = [40, 55, 48, 62, 58, 70, 66]
  const payments = [30, 42, 50, 45, 60, 52, 64]

  const stores = [
    { i: 1, amount: '320 000', status: 'overdue' },
    { i: 2, amount: '145 000', status: 'pending' },
    { i: 3, amount: '60 000', status: 'uptodate' },
  ]

  const statusChip = {
    overdue: 'bg-coral/15 text-coral',
    pending: 'bg-mist/10 text-mist-2',
    uptodate: 'bg-lime/15 text-lime',
  }
  const statusDot = {
    overdue: 'bg-coral',
    pending: 'bg-mist-3',
    uptodate: 'bg-lime',
  }

  return (
    <div className="overflow-hidden rounded-[1.4rem] border border-line bg-paper shadow-device">
      {/* browser chrome — physical, always LTR */}
      <div className="flex items-center gap-2 border-b border-line bg-paper-2 px-4 py-3" dir="ltr">
        <span className="h-3 w-3 rounded-full bg-ink/15" />
        <span className="h-3 w-3 rounded-full bg-ink/15" />
        <span className="h-3 w-3 rounded-full bg-ink/15" />
        <span className="ms-3 inline-flex items-center gap-1.5 rounded-md bg-paper px-3 py-1 font-sans text-xs text-ink-3">
          <span className="h-1.5 w-1.5 rounded-full bg-lime" />
          rassid.app/apercu
        </span>
      </div>

      {/* console body — dark */}
      <div className="bg-obsidian p-4 sm:p-5">
        {/* header */}
        <div className="mb-4 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="font-display text-base font-bold leading-tight text-mist sm:text-lg">
              {t('platform.dash.title')}
            </h3>
            <p className="mt-0.5 truncate text-[0.7rem] text-mist-3">{t('platform.dash.desc')}</p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1 text-[0.65rem] font-semibold text-mist-2">
            <span className="h-1.5 w-1.5 animate-pulse-ring rounded-full bg-lime" />
            {t('platform.dash.live')}
          </span>
        </div>

        {/* KPI band */}
        <div className="grid grid-cols-2 gap-2.5">
          {kpis.map(({ key, icon: Icon, value, money, tone, feature }) => (
            <div
              key={key}
              className={`flex items-center gap-2.5 rounded-xl p-3 ${
                feature ? 'bg-obsidian-3 ring-1 ring-lime/30' : 'bg-obsidian-2'
              }`}
            >
              <span
                className={`grid size-8 shrink-0 place-items-center rounded-lg ${
                  feature
                    ? 'bg-lime/15 text-lime'
                    : tone === 'success'
                      ? 'bg-lime/12 text-lime'
                      : tone === 'danger'
                        ? 'bg-coral/15 text-coral'
                        : 'bg-white/5 text-mist-2'
                }`}
              >
                <Icon size={15} strokeWidth={2.25} />
              </span>
              <div className="min-w-0">
                <p className="truncate text-[0.62rem] font-medium text-mist-3">
                  {t(`platform.dash.kpi.${key}`)}
                </p>
                <p
                  className={`font-display text-[1.05rem] font-bold leading-tight ${
                    tone === 'success' ? 'text-lime' : tone === 'danger' ? 'text-coral' : 'text-mist'
                  }`}
                >
                  <Amount>{value}</Amount>
                  {money && (
                    <span className="ms-1 text-[0.6rem] font-semibold text-mist-3">
                      {t('platform.dash.currency')}
                    </span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* trend + key stores */}
        <div className="mt-2.5 grid gap-2.5 lg:grid-cols-2">
          {/* trend */}
          <div className="rounded-xl bg-obsidian-2 p-3.5">
            <div className="mb-3 flex items-center gap-2">
              <TrendingUp size={13} className="text-lime" strokeWidth={2.5} />
              <p className="text-[0.68rem] font-semibold text-mist-2">{t('platform.dash.trend')}</p>
            </div>
            <div className="flex h-16 items-end gap-1.5" dir="ltr">
              {deliveries.map((d, i) => (
                <div key={i} className="flex h-full flex-1 items-end gap-0.5">
                  <span
                    className="w-1/2 rounded-t-sm bg-mist/20"
                    style={{ height: `${d}%` }}
                  />
                  <span
                    className="w-1/2 rounded-t-sm bg-lime"
                    style={{ height: `${payments[i]}%` }}
                  />
                </div>
              ))}
            </div>
            <div className="mt-2.5 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-[0.6rem] text-mist-3">
                <span className="h-2 w-2 rounded-sm bg-mist/20" />
                {t('platform.dash.legend.deliveries')}
              </span>
              <span className="inline-flex items-center gap-1.5 text-[0.6rem] text-mist-3">
                <span className="h-2 w-2 rounded-sm bg-lime" />
                {t('platform.dash.legend.payments')}
              </span>
            </div>
          </div>

          {/* key stores */}
          <div className="rounded-xl bg-obsidian-2 p-3.5">
            <div className="mb-2.5 flex items-center justify-between">
              <p className="text-[0.68rem] font-semibold text-mist-2">
                {t('platform.dash.keyStores')}
              </p>
              <span className="inline-flex items-center gap-0.5 text-[0.6rem] font-medium text-mist-3">
                {t('platform.dash.seeAll')}
                <ArrowUpRight size={11} />
              </span>
            </div>
            <ul className="flex flex-col gap-2">
              {stores.map(({ i, amount, status }) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[0.72rem] font-medium text-mist">
                      {t(`platform.dash.store${i}`)}
                    </p>
                    <p className="truncate text-[0.6rem] text-mist-3">
                      {t(`platform.dash.store${i}.area`)}
                    </p>
                  </div>
                  <Amount className="text-[0.72rem] font-semibold text-mist-2">{amount}</Amount>
                  <span
                    className={`inline-flex shrink-0 items-center gap-1 rounded-md px-1.5 py-0.5 text-[0.58rem] font-semibold ${statusChip[status]}`}
                  >
                    <span className={`h-1 w-1 rounded-full ${statusDot[status]}`} />
                    {t(`platform.dash.status.${status}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

/* One "surface" of the product — the phone in the field, the console at the
   desk. Field wears a dark chip (the app is dark); office wears the lime chip
   and a "Nouveau" flag (the console is the new half). */
function SurfaceCard({ icon: Icon, eyebrow, role, features, tone, badge }) {
  const isOffice = tone === 'office'
  return (
    <div
      className={`rounded-2xl border bg-paper-2 p-5 ${
        isOffice ? 'border-lime/40 ring-1 ring-lime/15' : 'border-line'
      }`}
    >
      <div className="flex items-center gap-3">
        <span
          className={`grid size-11 shrink-0 place-items-center rounded-xl ${
            isOffice ? 'bg-lime text-ink' : 'bg-obsidian text-lime'
          }`}
        >
          <Icon size={20} strokeWidth={2.1} />
        </span>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <p className="text-xs font-bold uppercase tracking-widest text-lime-deep">{eyebrow}</p>
            {badge && (
              <span className="rounded-full bg-lime px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wide text-ink">
                {badge}
              </span>
            )}
          </div>
          <p className="mt-0.5 text-sm font-medium text-ink-2">{role}</p>
        </div>
      </div>
      <ul className="mt-4 flex flex-wrap gap-1.5">
        {features.map((f) => (
          <li
            key={f}
            className="inline-flex items-center gap-1.5 rounded-pill border border-line bg-paper px-2.5 py-1 text-xs font-medium text-ink-2"
          >
            <span className="h-1 w-1 rounded-full bg-lime-deep" />
            {f}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Platform() {
  const { t } = useLang()
  const reduce = useReducedMotion()

  const reveal = (delay = 0) =>
    reduce
      ? { initial: { opacity: 0 }, whileInView: { opacity: 1 }, viewport: { once: true, amount: 0.3 }, transition: { duration: 0.4 } }
      : {
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.3 },
          transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
        }

  return (
    <section id="plateforme" className="relative overflow-hidden bg-paper py-20 lg:py-28">
      {/* lime bloom anchored under the console */}
      <div
        aria-hidden
        className="pointer-events-none absolute end-[-4%] top-[30%] z-0 h-[34rem] w-[34rem] rounded-full opacity-50 blur-[120px]"
        style={{ background: 'radial-gradient(circle, oklch(0.86 0.23 132 / 0.16), transparent 60%)' }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* header */}
        <motion.div {...reveal()} className="mb-14 max-w-2xl lg:mb-16">
          <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-lime-deep">
            <span className="h-1.5 w-1.5 rounded-full bg-lime" />
            {t('platform.label')}
          </p>
          <h2 className="font-display text-[clamp(2rem,4.6vw,3.6rem)] font-bold leading-[1.04] tracking-[-0.025em] text-ink text-balance">
            {t('platform.heading')}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-2 text-pretty">
            {t('platform.body')}
          </p>
        </motion.div>

        <div className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
          {/* Two surfaces */}
          <motion.div {...reveal(0.05)} className="order-2 flex flex-col lg:order-1">
            <SurfaceCard
              icon={Smartphone}
              tone="field"
              eyebrow={t('platform.field.label')}
              role={t('platform.field.role')}
              features={[t('platform.field.f1'), t('platform.field.f2'), t('platform.field.f3')]}
            />

            {/* connector: same data, live */}
            <div className="relative flex items-center justify-center py-3" aria-hidden="false">
              <span className="absolute inset-y-0 start-[1.85rem] w-px bg-line" aria-hidden />
              <span className="relative inline-flex items-center gap-2 rounded-pill border border-line bg-paper px-3.5 py-1.5 text-xs font-semibold text-ink-2 shadow-lift">
                <RefreshCw size={13} className="text-lime-deep" strokeWidth={2.5} />
                {t('platform.sync')}
              </span>
            </div>

            <SurfaceCard
              icon={LayoutDashboard}
              tone="office"
              badge={t('platform.office.badge')}
              eyebrow={t('platform.office.label')}
              role={t('platform.office.role')}
              features={[t('platform.office.f1'), t('platform.office.f2'), t('platform.office.f3')]}
            />
          </motion.div>

          {/* Console + phone composite */}
          <motion.div {...reveal(0.1)} className="relative order-1 lg:order-2">
            <div className="relative">
              <DashboardMock t={t} />

              {/* app phone overlapping the corner — physical, LTR */}
              <div
                className="absolute -bottom-6 end-[-0.75rem] z-20 hidden w-[26%] max-w-[8.5rem] sm:block lg:end-[-1.5rem]"
                dir="ltr"
              >
                <PhoneFrame src={homeScreen} alt={t('platform.frameAlt')} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
