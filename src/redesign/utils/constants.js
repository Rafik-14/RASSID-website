/**
 * Global App & Download Constants
 * 
 * Production APK hosted on Cloudflare R2 at download.rassid.net.
 * Override with VITE_APK_URL if needed.
 */
export const APK_DOWNLOAD_PATH = import.meta.env?.VITE_APK_URL || 'https://download.rassid.net/rassid.apk';

/**
 * Returns an absolute URL suitable for QR codes and external phone scanners.
 */
export function getApkAbsoluteUrl() {
  if (typeof window === 'undefined') {
    return 'https://download.rassid.net/rassid.apk';
  }
  if (APK_DOWNLOAD_PATH.startsWith('http://') || APK_DOWNLOAD_PATH.startsWith('https://')) {
    return APK_DOWNLOAD_PATH;
  }
  const cleanPath = APK_DOWNLOAD_PATH.startsWith('/') ? APK_DOWNLOAD_PATH : `/${APK_DOWNLOAD_PATH}`;
  return `${window.location.origin}${cleanPath}`;
}
