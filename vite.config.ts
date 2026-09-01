import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.VITE_BASE || "./",
  build: {
    // Sourcemaps ship the full, readable original TypeScript (comments
    // included) as .map files anyone can fetch from the live site — fine for
    // the tablet/dev build, not something the App Store / Play Store build
    // should serve alongside the app's actual source and internal notes.
    sourcemap: process.env.VITE_DEV_MODE === 'true',
    assetsDir: "code",
    target: ["esnext"],
    cssMinify: true,
    lib: false
  },
  plugins: [
    VitePWA({
      strategies: "injectManifest",
      injectManifest: {
        swSrc: 'public/sw.js',
        swDest: 'dist/sw.js',
        globDirectory: 'dist',
        globPatterns: [
          '**/*.{html,js,css,json,png}',
        ],
      },
      injectRegister: false,
      manifest: false,
      devOptions: {
        enabled: true
      }
    })
  ]
})
