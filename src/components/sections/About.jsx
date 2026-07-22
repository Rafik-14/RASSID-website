import { motion, useReducedMotion } from 'framer-motion'
import { Smartphone, Wallet, ShieldCheck, RefreshCcw } from 'lucide-react'
import { useLang } from '../../contexts/LanguageContext'
import demoVideoWebm from '../../assets/videos/app-demo.webm'
import demoVideoMp4 from '../../assets/videos/app-demo.mp4'

const icons = [Smartphone, Wallet, ShieldCheck, RefreshCcw]

export default function About() {
  const { t } = useLang()
  const reduce = useReducedMotion()

  const pillars = [0, 1, 2, 3].map((i) => ({
    Icon: icons[i],
    title: t(`about.${i}.title`),
    text: t(`about.${i}.text`),
  }))

  return (
    <section id="apropos" className="relative bg-obsidian pb-20 pt-20 lg:pb-28 lg:pt-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm font-semibold text-lime">{t('about.label')}</p>
          <h2 className="font-display text-[clamp(2rem,4.6vw,3.6rem)] font-bold leading-[1.05] tracking-[-0.025em] text-mist text-balance">
            {t('about.heading')}
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          {/* Pillars */}
          <ol className="order-2 lg:order-1">
            {pillars.map(({ Icon, title, text }, i) => (
              <motion.li
                key={title}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="flex gap-5 border-t border-hairline py-7 first:border-t-0 first:pt-0"
              >
                <span className="relative mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-obsidian-3 text-lime">
                  <Icon size={20} strokeWidth={2} />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold tracking-tight text-mist">{title}</h3>
                  <p className="mt-2 text-[0.97rem] leading-relaxed text-mist-2">{text}</p>
                </div>
              </motion.li>
            ))}
          </ol>

          {/* Sticky demo */}
          <div className="order-1 lg:order-2">
            <div className="lg:sticky lg:top-28">
              <figure className="relative">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] opacity-60 blur-3xl"
                  style={{ background: 'radial-gradient(closest-side, oklch(0.86 0.23 132 / 0.3), transparent)' }}
                />
                {/* browser chrome */}
                <div className="flex items-center gap-2 rounded-t-2xl border border-b-0 border-hairline bg-obsidian-2 px-4 py-3" dir="ltr">
                  <span className="h-3 w-3 rounded-full bg-mist/20" />
                  <span className="h-3 w-3 rounded-full bg-mist/20" />
                  <span className="h-3 w-3 rounded-full bg-mist/20" />
                  <span className="ms-3 inline-flex items-center gap-1.5 rounded-md bg-obsidian px-3 py-1 font-sans text-xs text-mist-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-lime" />
                    rassid.app
                  </span>
                </div>
                <div className="overflow-hidden rounded-b-2xl border border-t-0 border-hairline bg-black">
                  <video
                    autoPlay loop muted playsInline preload="metadata"
                    disablePictureInPicture disableRemotePlayback
                    controlsList="nodownload nofullscreen noremoteplayback"
                    className="block h-auto w-full"
                    style={{ pointerEvents: 'none' }}
                  >
                    <source src={demoVideoWebm} type="video/webm" />
                    <source src={demoVideoMp4} type="video/mp4" />
                  </video>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
