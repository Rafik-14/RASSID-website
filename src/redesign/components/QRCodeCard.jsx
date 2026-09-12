import appIcon from '../assets/rassid_app_icon.webp';

/**
 * Compact high-contrast QR code card for desktop scanning.
 * Points to the Google Play store listing with Level H error correction
 * and the iconic Rassid squircle badge in the center.
 */
export default function QRCodeCard({ t, isRtl }) {
  return (
    <div className="flex flex-col items-center bg-zinc-950 text-white rounded-[22px] p-3 sm:p-3.5 shadow-[0_14px_36px_rgba(0,0,0,0.16)] border border-zinc-800/90 w-[146px] sm:w-[156px] shrink-0 text-center">
      
      {/* QR Code White Badge */}
      <div className="relative bg-white p-2 rounded-xl shadow-sm w-[122px] h-[122px] sm:w-[130px] sm:h-[130px] flex items-center justify-center">
        <svg 
          viewBox="0 0 47 47" 
          className="w-full h-full block"
          shapeRendering="crispEdges"
          aria-label="QR Code Google Play RASSID"
        >
          <path fill="#ffffff" d="M0 0h47v47H0z"/>
          <path stroke="#000000" strokeWidth="1" d="M1 1.5h7m2 0h1m7 0h2m1 0h1m1 0h4m2 0h1m1 0h1m1 0h2m2 0h1m1 0h7M1 2.5h1m5 0h1m1 0h3m1 0h2m1 0h1m1 0h2m3 0h1m3 0h1m2 0h2m4 0h1m2 0h1m5 0h1M1 3.5h1m1 0h3m1 0h1m1 0h1m2 0h2m2 0h2m2 0h2m1 0h1m1 0h3m1 0h1m2 0h3m1 0h1m2 0h1m1 0h3m1 0h1M1 4.5h1m1 0h3m1 0h1m1 0h1m1 0h2m3 0h3m2 0h1m2 0h2m2 0h1m1 0h5m1 0h2m1 0h1m1 0h3m1 0h1M1 5.5h1m1 0h3m1 0h1m1 0h2m4 0h1m4 0h7m1 0h1m2 0h2m2 0h3m1 0h1m1 0h3m1 0h1M1 6.5h1m5 0h1m1 0h1m1 0h1m3 0h1m5 0h1m3 0h1m1 0h8m4 0h1m5 0h1M1 7.5h7m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h1m1 0h7M10 8.5h1m3 0h4m1 0h1m1 0h1m3 0h1m1 0h4m1 0h4M3 9.5h1m2 0h6m1 0h3m1 0h1m3 0h6m2 0h1m1 0h1m1 0h1m4 0h1m1 0h5M1 10.5h1m2 0h2m3 0h2m1 0h1m7 0h1m1 0h3m2 0h2m1 0h1m2 0h1m11 0h1M5 11.5h3m1 0h1m1 0h1m6 0h5m2 0h1m1 0h2m5 0h1m1 0h3m2 0h1m3 0h1M1 12.5h1m1 0h1m5 0h1m2 0h3m1 0h3m2 0h2m2 0h1m1 0h1m5 0h4m3 0h3m1 0h1M2 13.5h4m1 0h5m3 0h1m2 0h2m4 0h2m1 0h2m1 0h1m2 0h2m3 0h4m2 0h2M1 14.5h1m1 0h1m1 0h1m2 0h1m3 0h3m1 0h5m1 0h3m1 0h1m2 0h2m3 0h1m1 0h1m1 0h1m1 0h2m1 0h1m1 0h1M1 15.5h1m1 0h1m2 0h4m6 0h1m4 0h1m2 0h1m1 0h2m2 0h1m2 0h2m1 0h2m2 0h4m1 0h1M3 16.5h1m2 0h1m2 0h1m1 0h2m3 0h1m1 0h2m3 0h1m1 0h1m3 0h1m3 0h1m4 0h1m2 0h2M1 17.5h2m4 0h3m1 0h1m1 0h1m5 0h2m2 0h2m3 0h2m1 0h6m3 0h2m3 0h1M2 18.5h2m1 0h2m1 0h4m2 0h1m1 0h3m2 0h1m1 0h2m2 0h2m3 0h1m1 0h1m3 0h1m1 0h1m1 0h1m2 0h1M1 19.5h1m2 0h1m2 0h2m1 0h1m2 0h1m1 0h1m2 0h1m1 0h3m1 0h1m1 0h1m1 0h2m1 0h1m5 0h2m2 0h1m3 0h1M3 20.5h1m2 0h1m3 0h1m1 0h2m2 0h1m5 0h1m2 0h1m2 0h4m1 0h4m1 0h2m1 0h2m2 0h1M1 21.5h1m1 0h1m1 0h6m1 0h4m2 0h8m1 0h1m1 0h2m2 0h1m1 0h8M2 22.5h2m1 0h1m3 0h3m6 0h2m1 0h1m3 0h1m1 0h1m2 0h2m2 0h1m1 0h2m3 0h3m1 0h1M1 23.5h5m1 0h1m1 0h1m1 0h2m2 0h1m2 0h1m2 0h1m1 0h1m1 0h1m3 0h3m2 0h1m1 0h2m1 0h1m1 0h1m3 0h1M1 24.5h3m1 0h1m3 0h1m3 0h1m3 0h1m1 0h1m1 0h1m3 0h1m1 0h3m2 0h1m4 0h1m3 0h2m1 0h2M1 25.5h2m2 0h6m1 0h4m1 0h1m1 0h1m1 0h7m2 0h12m2 0h1M1 26.5h1m2 0h2m2 0h1m3 0h1m2 0h1m1 0h1m3 0h1m2 0h1m1 0h1m2 0h2m1 0h1m3 0h1m1 0h3m2 0h3M2 27.5h1m3 0h2m5 0h2m3 0h5m2 0h2m3 0h6m3 0h1m3 0h1m1 0h1M1 28.5h1m4 0h1m1 0h2m6 0h6m5 0h2m2 0h1m1 0h5m1 0h4m1 0h1M6 29.5h2m1 0h1m1 0h4m2 0h1m2 0h1m1 0h1m5 0h1m1 0h4m2 0h1m5 0h1m1 0h2M1 30.5h3m2 0h1m3 0h1m2 0h1m1 0h1m1 0h1m1 0h2m1 0h1m2 0h2m4 0h1m1 0h2m3 0h3m4 0h1M1 31.5h1m2 0h2m1 0h1m1 0h1m1 0h2m2 0h1m2 0h1m1 0h1m1 0h3m1 0h1m1 0h3m1 0h1m3 0h2m1 0h3m3 0h1M2 32.5h1m2 0h1m3 0h1m5 0h1m1 0h2m1 0h1m2 0h6m1 0h1m2 0h1m2 0h2m1 0h2m1 0h1M1 33.5h4m2 0h1m1 0h3m1 0h2m1 0h1m1 0h4m2 0h2m4 0h2m1 0h1m2 0h1m3 0h1m1 0h1m2 0h1M1 34.5h1m1 0h1m4 0h1m4 0h2m1 0h1m1 0h2m1 0h1m1 0h5m1 0h2m1 0h3m4 0h2m1 0h1m1 0h2M5 35.5h1m1 0h5m1 0h3m1 0h1m1 0h2m1 0h1m5 0h2m4 0h1m4 0h1m1 0h3m1 0h1M2 36.5h4m2 0h1m1 0h1m1 0h1m2 0h2m3 0h1m2 0h4m1 0h1m1 0h2m1 0h1m2 0h2m1 0h1m1 0h2m1 0h2M1 37.5h1m2 0h2m1 0h2m1 0h2m2 0h1m2 0h1m3 0h5m3 0h3m1 0h1m2 0h6m2 0h2M9 38.5h3m2 0h3m1 0h4m3 0h1m1 0h1m1 0h1m2 0h2m2 0h2m3 0h3m1 0h1M1 39.5h7m1 0h3m4 0h2m3 0h1m1 0h1m1 0h1m4 0h1m3 0h1m1 0h2m1 0h1m1 0h1m2 0h2M1 40.5h1m5 0h1m1 0h1m1 0h1m1 0h5m1 0h1m1 0h1m3 0h1m3 0h1m1 0h1m1 0h2m2 0h1m3 0h2m1 0h1M1 41.5h1m1 0h3m1 0h1m2 0h4m1 0h1m1 0h3m1 0h6m3 0h1m2 0h10m1 0h1M1 42.5h1m1 0h3m1 0h1m3 0h1m4 0h2m1 0h4m1 0h1m1 0h5m3 0h1m2 0h1m2 0h2m2 0h2M1 43.5h1m1 0h3m1 0h1m1 0h3m2 0h3m1 0h2m1 0h2m1 0h1m2 0h2m2 0h3m3 0h1m3 0h2m1 0h2M1 44.5h1m5 0h1m2 0h1m2 0h4m3 0h1m1 0h1m1 0h1m1 0h3m5 0h2m6 0h1M1 45.5h7m3 0h1m2 0h2m3 0h2m2 0h1m1 0h1m4 0h2m2 0h1m7 0h1m2 0h1"/>
        </svg>

        {/* Rassid Squircle Center Badge */}
        <div className="absolute inset-0 m-auto size-6 rounded-md bg-[#0A0A0A] p-0.5 shadow-sm flex items-center justify-center ring-1 ring-white/20">
          <img 
            src={appIcon} 
            alt="Rassid App" 
            className="size-full object-cover rounded-[4px]"
          />
        </div>
      </div>

      {/* Label */}
      <div className="mt-2 space-y-0.5">
        <p className="text-[12.5px] sm:text-[13px] font-bold text-white tracking-wide leading-tight">
          {t?.cta_qr_title || "Google Play"}
        </p>
        <p className="text-[9.5px] sm:text-[10px] text-zinc-400 font-medium leading-none">
          {t?.cta_qr_sub || (isRtl ? "امسح للتثبيت" : "Scanner pour installer")}
        </p>
      </div>

    </div>
  );
}
