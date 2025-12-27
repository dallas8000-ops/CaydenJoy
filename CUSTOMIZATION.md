# CaydenJoy PWA - Customization Guide

Welcome to CaydenJoy! This Progressive Web App has been customized with the following features and improvements.

## 🎨 Customizations Made

### 1. **Home Page Enhancement**
- Updated welcome message to "Welcome to CaydenJoy"
- Added offline/online status indicator (badge)
- Improved description with focus on productivity and joy
- Added link to new Services page

### 2. **New Services Page** (`src/pages/app-services.ts`)
A dedicated page showcasing PWA features with 6 service cards:
- **Responsive Design** - Mobile, tablet, and desktop optimization
- **Offline Support** - Work offline with auto-sync
- **Fast & Reliable** - Quick loading and 99.9% uptime
- **Push Notifications** - Real-time alerts and custom messaging
- **Secure & Private** - Data encryption and privacy protection
- **Install Anywhere** - One-click installation like a native app

### 3. **Improved Styling**
- **Global CSS** (`src/styles/global.css`):
  - Primary color: `#6C5CE7` (purple)
  - Better font family: Segoe UI, system fonts
  - Dark and light mode support
  - Styled headings and links

### 4. **Updated Manifest** (`public/manifest.json`)
- App name: "CaydenJoy - Progressive Web App"
- Short name: "CaydenJoy"
- Better description
- Theme color: `#6C5CE7` (purple)
- Background color: `#F8F9FA` (light gray)
- Added screenshots for app stores

### 5. **Notification Support** (`src/utils/notifications.ts`)
Utility module for sending push notifications:
```typescript
import { sendNotification, requestNotificationPermission } from './utils/notifications';

// Request permission and send notification
await requestNotificationPermission();
await sendNotification({
  title: 'Hello!',
  body: 'This is a notification',
  icon: '/assets/icons/192x192.png'
});
```

### 6. **Offline Support**
- Home page detects online/offline status
- Displays badge showing connection status
- Service Worker handles offline caching
- Auto-sync when reconnected

### 7. **Router Updates** (`src/router.ts`)
New route added for Services:
```
/services - Displays service features and capabilities
```

## 📱 Features

### Progressive Web App Capabilities
- ✅ **Installable** - Install on home screen like a native app
- ✅ **Offline** - Works without internet connection
- ✅ **Fast** - Service Worker caches assets for instant loading
- ✅ **Responsive** - Works on all devices and screen sizes
- ✅ **Notifications** - Push notifications support
- ✅ **Secure** - HTTPS required

## 🎯 Directory Structure

```
src/
├── pages/
│   ├── app-home.ts          # Home page (customized)
│   ├── app-services.ts      # NEW: Services page
│   └── app-about/           # About page
├── components/
│   └── header.ts            # Header component
├── utils/
│   └── notifications.ts     # NEW: Notification utilities
├── styles/
│   ├── global.css           # Global styles (updated)
│   └── shared-styles.ts     # Shared component styles
├── router.ts                # Routes (updated)
└── app-index.ts             # Main app entry
```

## 🚀 Running the App

### Development
```powershell
Set-Location -Path 'C:\CaydenJoy\CaydenJoy'
pwa start
```
Visit `http://localhost:5173` in your browser.

### Production Build
```powershell
npm run build
```
Output is in `dist/` folder.

## 🔧 Customizing Further

### Change Colors
Edit `src/styles/global.css`:
```css
:root {
  --primary-color: #6C5CE7;    /* Change this */
  --success-color: #00B894;
  --warning-color: #FDCB6E;
  --danger-color: #E17055;
}
```

### Add More Pages
1. Create a new file in `src/pages/` (e.g., `app-features.ts`)
2. Add it to `src/router.ts` routes array
3. Use Lit components and Shoelace UI components

### Modify App Metadata
Edit `public/manifest.json`:
```json
{
  "name": "Your App Name",
  "short_name": "App",
  "description": "Your description",
  "theme_color": "#6C5CE7",
  "background_color": "#F8F9FA"
}
```

## 📦 Dependencies

- **Lit** - Lightweight web components framework
- **Shoelace** - Web component library with styling
- **App Tools Router** - Client-side routing
- **Vite** - Fast build tool

## 🌐 Deployment

### GitHub Pages
The GitHub Actions workflow (`/.github/workflows/build.yml`) automatically:
1. Builds the project on push
2. Tests the build
3. Can be configured for auto-deployment

### Azure Static Web Apps
This project includes `swa-cli.config.json` for Azure deployment.

### Other Platforms
- Netlify
- Vercel
- Firebase Hosting
- Any static host (just deploy the `dist/` folder)

## 🔒 PWA Security

- HTTPS required for service workers
- Secure storage for data
- Content Security Policy ready
- No third-party tracking

## 📝 Next Steps

1. ✅ Customize home page content
2. ✅ Add services/features page
3. ✅ Update app colors and branding
4. 📝 Add more pages and features
5. 📝 Configure push notifications
6. 📝 Deploy to production
7. 📝 Publish to app stores (Microsoft Store, Google Play, Apple App Store)

## 🎓 Resources

- [PWA Documentation](https://docs.pwabuilder.com)
- [Lit Framework](https://lit.dev)
- [Shoelace Components](https://shoelace.style)
- [MDN Web Docs - PWA](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)

---

**Built with CaydenJoy** - Your personal progressive web app for joy and productivity.
