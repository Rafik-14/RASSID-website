/**
 * The RASSID screenshots are already complete iPhone mockups (dark rounded body
 * baked in) on a transparent canvas — so we render the image directly. No bezel,
 * no bg, no corner clip (any of those leave artifacts in the transparent corners).
 * The shadow uses `drop-shadow`, which follows the phone's alpha silhouette rather
 * than its bounding box; the back phone is recessed with a brightness filter, not
 * a rectangular overlay.
 */
export default function PhoneFrame({ src, alt, glow = false, dim = false, className = '' }) {
  return (
    <div className={`group relative ${className}`}>
      {glow && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-4 -z-10 rounded-[3rem] opacity-70 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: 'radial-gradient(closest-side, oklch(0.86 0.23 132 / 0.4), transparent)' }}
        />
      )}
      <img
        src={src}
        alt={alt}
        draggable={false}
        loading="lazy"
        className={`relative block w-full select-none ${
          dim ? '' : 'transition-transform duration-500 ease-out-expo group-hover:-translate-y-1.5'
        }`}
        style={{
          WebkitUserDrag: 'none',
          filter: dim
            ? 'brightness(0.6) drop-shadow(0 16px 28px rgba(0,0,0,0.32))'
            : 'drop-shadow(0 2px 4px rgba(0,0,0,0.05)) drop-shadow(0 22px 42px rgba(0,0,0,0.26))',
        }}
      />
    </div>
  )
}
