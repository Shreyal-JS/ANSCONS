const fs = require('fs');

const html = fs.readFileSync('estimator.html', 'utf8');
const cssFiles = [
  'css/main.css',
  'css/desk.css',
  'css/nav.css',
  'css/hero.css',
  'css/caliper.css',
  'css/legal-specs.css',
  'css/responsive.css'
];

let allCss = '';
cssFiles.forEach(f => {
  allCss += fs.readFileSync(f, 'utf8') + '\n';
});

// Extract all class names from estimator.html
const classMatches = [...html.matchAll(/class="([^"]+)"/g)];
const htmlClasses = new Set();
classMatches.forEach(m => {
  m[1].split(/\s+/).forEach(c => {
    if (c.trim()) htmlClasses.add(c.trim());
  });
});

console.log(`Found ${htmlClasses.size} unique classes in estimator.html.`);

const missingClasses = [];
htmlClasses.forEach(cls => {
  // Look for .className in allCss
  const reg = new RegExp(`\\.${cls}\\b`);
  if (!reg.test(allCss)) {
    missingClasses.push(cls);
  }
});

if (missingClasses.length === 0) {
  console.log('[PASS] All classes in estimator.html are defined in CSS!');
} else {
  console.log('[WARN] Classes not found directly with .name in CSS:', missingClasses);
}

// Check all IDs referenced in js/estimator.js
const js = fs.readFileSync('js/estimator.js', 'utf8');
const idMatches = [...js.matchAll(/getElementById\(['"]([^'"]+)['"]\)/g)];
const missingIds = [];
idMatches.forEach(m => {
  const id = m[1];
  if (!html.includes(`id="${id}"`)) {
    missingIds.push(id);
  }
});

if (missingIds.length === 0) {
  console.log('[PASS] All getElementById targets in js/estimator.js exist in estimator.html!');
} else {
  console.error('[FAIL] Missing IDs in estimator.html:', missingIds);
}

