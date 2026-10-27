import { useState, useEffect } from 'react';
import QRCode from 'qrcode';
import appIcon from '../assets/rassid_app_icon.webp';
import { getApkAbsoluteUrl, APK_DOWNLOAD_PATH } from '../utils/constants';

/**
 * High-contrast QR code card for desktop scanning.
 * Dynamically generates a crisp QR code pointing to the APK direct download URL,
 * with Level H error correction and the iconic Rassid squircle badge in the center.
 * Also functions as a direct download click target on desktop.
 */
export default function QRCodeCard({ t, isRtl }) {
  const [qrDataUrl, setQrDataUrl] = useState('');
  const apkUrl = getApkAbsoluteUrl();

  useEffect(() => {
    let isMounted = true;
    QRCode.toDataURL(apkUrl, {
      margin: 1,
      errorCorrectionLevel: 'H',
      width: 280,
      color: {
        dark: '#000000',
        light: '#ffffff',
      },
    })
      .then((dataUrl) => {
        if (isMounted) setQrDataUrl(dataUrl);
      })
      .catch((err) => {
        console.error('Failed to generate APK QR Code:', err);
      });

    return () => {
      isMounted = false;
    };
  }, [apkUrl]);

  return (
    <a
      href={APK_DOWNLOAD_PATH}
      download="rassid.apk"
      title={isRtl ? "تحميل تطبيق رصيد (APK)" : "Télécharger l'application RASSID (APK)"}
      className="group flex flex-col items-center bg-zinc-950 text-white rounded-[22px] p-3 sm:p-3.5 shadow-[0_14px_36px_rgba(0,0,0,0.16)] border border-zinc-800/90 w-[146px] sm:w-[156px] shrink-0 text-center transition-all duration-300 hover:border-zinc-700 hover:shadow-[0_18px_40px_rgba(0,0,0,0.24)] cursor-pointer"
    >
      {/* QR Code White Badge */}
      <div className="relative bg-white p-2 rounded-xl shadow-sm w-[122px] h-[122px] sm:w-[130px] sm:h-[130px] flex items-center justify-center overflow-hidden">
        {qrDataUrl ? (
          <img 
            src={qrDataUrl} 
            alt={t?.cta_qr_title || "QR Code APK RASSID"} 
            className="w-full h-full block object-contain"
          />
        ) : (
          <div className="w-full h-full bg-zinc-100 animate-pulse rounded-lg flex items-center justify-center">
            <span className="text-[10px] text-zinc-400 font-mono">APK</span>
          </div>
        )}

        {/* Rassid Squircle Center Badge */}
        <div className="absolute inset-0 m-auto size-6 rounded-md bg-[#0A0A0A] p-0.5 shadow-sm flex items-center justify-center ring-1 ring-white/20 pointer-events-none">
          <img 
            src={appIcon} 
            alt="Rassid App" 
            className="size-full object-cover rounded-[4px]"
          />
        </div>
      </div>

      {/* Label */}
      <div className="mt-2 space-y-0.5">
        <p className="text-[12.5px] sm:text-[13px] font-bold text-white tracking-wide leading-tight group-hover:text-[#7FE300] transition-colors">
          {t?.cta_qr_title || (isRtl ? "تحميل التطبيق APK" : "Télécharger l'APK")}
        </p>
        <p className="text-[9.5px] sm:text-[10px] text-zinc-400 font-medium leading-none">
          {t?.cta_qr_sub || (isRtl ? "امسح للتثبيت" : "Scanner pour installer")}
        </p>
      </div>
    </a>
  );
}
