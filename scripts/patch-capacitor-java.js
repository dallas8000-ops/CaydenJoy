const fs = require('fs');
const path = require('path');

const gradleFiles = [
  path.join(
    process.cwd(),
    'node_modules',
    '@capacitor',
    'android',
    'capacitor',
    'build.gradle'
  ),
  path.join(process.cwd(), 'android', 'app', 'capacitor.build.gradle'),
  path.join(
    process.cwd(),
    'android',
    'capacitor-cordova-android-plugins',
    'build.gradle'
  ),
  ...pluginGradleFiles(),
];

// Every Capacitor plugin (share, filesystem, native-purchases, ...) ships its own
// build.gradle that may target Java 21. Read the plugin list that `cap sync`
// writes to android/capacitor.settings.gradle so new plugins are covered too.
function pluginGradleFiles() {
  const settings = path.join(process.cwd(), 'android', 'capacitor.settings.gradle');
  if (!fs.existsSync(settings)) return [];
  const androidDir = path.dirname(settings);
  const files = [];
  const re = /projectDir\s*=\s*new File\('([^']+)'\)/g;
  for (const m of fs.readFileSync(settings, 'utf8').matchAll(re)) {
    const file = path.resolve(androidDir, m[1], 'build.gradle');
    if (file.includes(`${path.sep}node_modules${path.sep}`) && !files.includes(file)) files.push(file);
  }
  return files;
}

let changedCount = 0;
let scannedCount = 0;

for (const gradleFile of gradleFiles) {
  if (!fs.existsSync(gradleFile)) {
    console.log(`[patch-capacitor-java] Not found, skipping: ${path.relative(process.cwd(), gradleFile)}`);
    continue;
  }

  scannedCount += 1;
  const original = fs.readFileSync(gradleFile, 'utf8');
  // Java and Kotlin targets must match, so patch the Kotlin toolchain too
  // (@capacitor/filesystem uses `kotlin { jvmToolchain(21) }`).
  const updated = original
    .replace(/JavaVersion\.VERSION_21/g, 'JavaVersion.VERSION_17')
    .replace(/jvmToolchain\(\s*21\s*\)/g, 'jvmToolchain(17)');

  if (updated !== original) {
    fs.writeFileSync(gradleFile, updated, 'utf8');
    changedCount += 1;
    console.log(`[patch-capacitor-java] Patched Java 21 -> 17 in ${path.relative(process.cwd(), gradleFile)}`);
  }
}

if (scannedCount === 0) {
  console.log('[patch-capacitor-java] No known Gradle files were found.');
} else if (changedCount === 0) {
  console.log('[patch-capacitor-java] No Java 21 references found in scanned files.');
} else {
  console.log(`[patch-capacitor-java] Done. Updated ${changedCount} file(s).`);
}
