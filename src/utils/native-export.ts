/**
 * Native-aware export
 *
 * Browser downloads (<a download>) and window.print() do not work inside the
 * Android APK's WebView. On the tablet we save the file to the app's cache
 * with @capacitor/filesystem and hand it to Android's Share menu with
 * @capacitor/share (email, WhatsApp, Drive, "Open with Chrome" to print or
 * save as PDF). On the website the original download / print behaviour stays.
 */

import { Capacitor } from '@capacitor/core';

export type ExportOutcome = 'shared' | 'downloaded' | 'printed' | 'cancelled';

export function isNativeApp(): boolean {
  return Capacitor.isNativePlatform();
}

function isShareCancel(error: unknown): boolean {
  const message = String((error as { message?: string })?.message ?? error).toLowerCase();
  return message.includes('cancel') || message.includes('dismiss');
}

/** Save a text file to the app cache and open Android's Share menu for it. */
async function shareNative(fileName: string, content: string, title: string): Promise<ExportOutcome> {
  const { Filesystem, Directory, Encoding } = await import('@capacitor/filesystem');
  const { Share } = await import('@capacitor/share');
  const written = await Filesystem.writeFile({
    path: fileName,
    data: content,
    directory: Directory.Cache,
    encoding: Encoding.UTF8,
    recursive: true,
  });
  try {
    await Share.share({ title, dialogTitle: title, files: [written.uri] });
    return 'shared';
  } catch (error) {
    if (isShareCancel(error)) return 'cancelled';
    throw error;
  }
}

function downloadInBrowser(fileName: string, content: string, mimeType: string): ExportOutcome {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  return 'downloaded';
}

/** CSV / data export: Share menu on the tablet, download in the browser. */
export async function exportFile(fileName: string, content: string, mimeType: string, title: string): Promise<ExportOutcome> {
  if (isNativeApp()) return shareNative(fileName, content, title);
  return downloadInBrowser(fileName, content, mimeType);
}

/**
 * Printable HTML report. Browser: prints only the report through a hidden
 * frame ("Save as PDF" in the print dialog). Tablet: shares the report file;
 * opening it in Chrome gives Print / Save as PDF.
 */
export async function printOrShareHtml(fileName: string, html: string, title: string): Promise<ExportOutcome> {
  if (isNativeApp()) return shareNative(fileName, html, title);

  const frame = document.createElement('iframe');
  frame.setAttribute('aria-hidden', 'true');
  frame.style.cssText = 'position:fixed;right:0;bottom:0;width:0;height:0;border:0;';
  frame.srcdoc = html;
  frame.onload = () => {
    frame.contentWindow?.focus();
    frame.contentWindow?.print();
    setTimeout(() => frame.remove(), 60000);
  };
  document.body.appendChild(frame);
  return 'printed';
}
