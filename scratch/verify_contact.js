const fs = require('fs');

const html = fs.readFileSync('contact.html', 'utf8');

const expectedIds = [
  'btn-return-origin',
  'desk-audio-toggle',
  'audio-status-badge',
  'brass-theme-lever',
  'label-mode-studio',
  'brass-toggle-bat',
  'label-mode-blueprint',
  'section-liaison-chamber',
  'estimate-voucher-attachment',
  'voucher-summary-text',
  'input-patron-name',
  'input-parcel-coords',
  'input-comm-line',
  'input-land-valuation',
  'btn-tab-narrative',
  'btn-tab-sketch',
  'brief-text-pane',
  'treaty-narrative-brief',
  'brief-sketch-pane',
  'btn-clear-sketch',
  'sketch-canvas',
  'btn-clear-signature',
  'signature-canvas',
  'btn-wax-press-actuator',
  'crimson-wax-seal',
  'seal-date-text',
  'dispatch-modal-backdrop',
  'modal-receipt-title',
  'modal-close-x',
  'modal-registry-ref',
  'modal-client-summary',
  'btn-modal-dismiss',
  'spec-modal-overlay',
  'modal-spec-code',
  'modal-spec-title',
  'modal-spec-classification',
  'spec-modal-close-btn',
  'modal-spec-body',
  'modal-spec-ref'
];

let missing = [];
for (const id of expectedIds) {
  if (!html.includes(`id="${id}"`)) {
    missing.push(id);
  }
}

console.log('Missing IDs in contact.html:', missing);
console.log('Total checked:', expectedIds.length);

const cssFiles = [
  'css/main.css',
  'css/desk.css',
  'css/nav.css',
  'css/hero.css',
  'css/liaison.css',
  'css/legal-specs.css',
  'css/responsive.css'
];

let allCss = '';
cssFiles.forEach(f => {
  allCss += fs.readFileSync(f, 'utf8') + '\n';
});

const classMatches = [...html.matchAll(/class="([^"]+)"/g)];
const htmlClasses = new Set();
classMatches.forEach(m => {
  m[1].split(/\s+/).forEach(c => {
    if (c.trim()) htmlClasses.add(c.trim());
  });
});

console.log(`Found ${htmlClasses.size} unique classes in contact.html.`);

const missingClasses = [];
htmlClasses.forEach(cls => {
  const reg = new RegExp(`\\.${cls}\\b`);
  if (!reg.test(allCss)) {
    missingClasses.push(cls);
  }
});

console.log('Classes not found directly in CSS:', missingClasses);

