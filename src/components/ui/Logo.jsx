import logo from '../../assets/logo.png'

/**
 * RASSID mark — a produce crate fused with circuit nodes.
 * The source PNG is solid black on transparent, so:
 *   tone="ink"   → shown as-is (for light surfaces)
 *   tone="light" → inverted to near-white (for dark surfaces)
 */
export default function Logo({ className = 'h-9 w-auto', showWordmark = false, tone = 'ink' }) {
  const isLight = tone === 'light'
  return (
    <span className="inline-flex items-center gap-2.5">
      <img
        src={logo}
        alt="RASSID"
        className={className}
        style={isLight ? { filter: 'invert(1)' } : undefined}
      />
      {showWordmark && (
        <span
          className={`font-display text-[1.15rem] font-extrabold tracking-tight ${
            isLight ? 'text-mist' : 'text-ink'
          }`}
        >
          RASS<span className={isLight ? 'text-lime' : 'text-lime-deep'}>ID</span>
        </span>
      )}
    </span>
  )
}
