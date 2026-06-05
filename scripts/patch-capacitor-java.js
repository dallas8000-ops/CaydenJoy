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
];

let changedCount = 0;
let scannedCount = 0;

for (const gradleFile of gradleFiles) {
  if (!fs.existsSync(gradleFile)) {
    console.log(`[patch-capacitor-java] Not found, skipping: ${path.relative(process.cwd(), gradleFile)}`);
    continue;
  }

  scannedCount += 1;
  const original = fs.readFileSync(gradleFile, 'utf8');
  const updated = original.replace(/JavaVersion\.VERSION_21/g, 'JavaVersion.VERSION_17');

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
