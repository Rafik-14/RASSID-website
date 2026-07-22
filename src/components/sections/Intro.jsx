import { WifiOff, FileSpreadsheet, Link2 } from 'lucide-react'
import { useScrollReveal } from '../../animations/useScrollReveal'
import { useLang } from '../../contexts/LanguageContext'
import deliveryVideoWebm from '../../assets/videos/delivery.webm'
import deliveryVideoMp4 from '../../assets/videos/delivery.mp4'

export default function Intro() {
  const ref = useScrollReveal({ childSelector: '.reveal-item' })
  const { t } = useLang()

  const tags = [
    { icon: WifiOff, label: t('intro.tag1') },
    { icon: FileSpreadsheet, label: t('intro.tag2') },
    { icon: Link2, label: t('intro.tag3') },
  ]

  return (
    <section id="pourquoi" className="relative bg-paper py-20 lg:py-28">
      <div ref={ref} className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Copy */}
          <div>
            <p className="reveal-item mb-5 inline-flex items-center gap-2 text-sm font-semibold text-lime-deep">
              <span className="h-1.5 w-1.5 rounded-full bg-lime" />
              {t('intro.label')}
            </p>
            <h2 className="reveal-item font-display text-[clamp(2rem,4.4vw,3.4rem)] font-bold leading-[1.04] tracking-[-0.025em] text-ink text-balance">
              {t('intro.heading')}
            </h2>
            <p className="reveal-item mt-6 max-w-xl text-lg leading-relaxed text-ink-2 text-pretty">
              {t('intro.body')}
            </p>

            <ul className="reveal-item mt-8 flex flex-wrap gap-2.5">
              {tags.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-pill border border-line bg-paper-2 px-3.5 py-2 text-sm font-medium text-ink transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:border-lime/50 hover:bg-paper"
                >
                  <Icon size={15} className="text-lime-deep" strokeWidth={2.25} />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Media — framed delivery clip */}
          <div className="reveal-item">
            <figure className="relative">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] opacity-50 blur-2xl"
                style={{ background: 'radial-gradient(closest-side, oklch(0.86 0.23 132 / 0.28), transparent)' }}
              />
              <div className="overflow-hidden rounded-2xl border border-line bg-obsidian shadow-device">
                <video
                  autoPlay loop muted playsInline preload="metadata"
                  disablePictureInPicture disableRemotePlayback
                  controlsList="nodownload nofullscreen noremoteplayback"
                  className="aspect-[4/3] w-full object-cover"
                  style={{ pointerEvents: 'none' }}
                >
                  <source src={deliveryVideoWebm} type="video/webm" />
                  <source src={deliveryVideoMp4} type="video/mp4" />
                </video>
              </div>
              <figcaption className="mt-3 flex items-center gap-2 px-1 text-sm text-ink-3">
                <span className="inline-block h-2 w-2 animate-pulse-ring rounded-full bg-lime" />
                {t('intro.caption')}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
