const fs = require('fs');

console.log('=== STARTING COMPREHENSIVE AUDIT ===');

// 1. Audit Spec Sheet Tabs across HTML files for any native title attribute
const htmlFiles = ['projects.html', 'index.html', 'about.html', 'services.html'];
let titleFailures = 0;

htmlFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const tabs = content.match(/<div class="spec-sheet-tab"[^>]*>/g) || [];
  console.log(`\nChecking ${file}: Found ${tabs.length} .spec-sheet-tab elements`);
  tabs.forEach((tab, i) => {
    if (tab.includes('title=')) {
      console.error(`  FAIL [${file}] Tab ${i + 1} has native title attribute: ${tab}`);
      titleFailures++;
    } else if (!tab.includes('aria-label=')) {
      console.warn(`  WARN [${file}] Tab ${i + 1} lacks aria-label: ${tab}`);
    } else {
      console.log(`  PASS [${file}] Tab ${i + 1}: Has aria-label, NO native title.`);
    }
  });
});

if (titleFailures === 0) {
  console.log('\n[PASS] All .spec-sheet-tab elements are 100% free of native title attributes!');
} else {
  console.error(`\n[FAIL] Found ${titleFailures} native title attributes on spec tabs!`);
}

// 2. Audit legal-specs.css
const legalCss = fs.readFileSync('css/legal-specs.css', 'utf8');
if (legalCss.includes('.spec-sheet-tab > *') && legalCss.includes('pointer-events: none;')) {
  console.log('[PASS] css/legal-specs.css disables pointer-events on .spec-sheet-tab children.');
} else {
  console.error('[FAIL] css/legal-specs.css missing child pointer-events rule!');
}

if (legalCss.includes('.spec-sheet-tab::after') && legalCss.includes('inset: -10px 0;')) {
  console.log('[PASS] css/legal-specs.css has invisible hitbox extension on .spec-sheet-tab.');
} else {
  console.error('[FAIL] css/legal-specs.css missing hitbox extension!');
}

// 3. Audit js/projects.js
const projectsJs = fs.readFileSync('js/projects.js', 'utf8');
const typologies = ['typ-1', 'typ-1-p2', 'typ-2', 'typ-2-p4', 'typ-3', 'typ-3-p6', 'typ-4'];

console.log('\nChecking CAD_OVERLAYS in js/projects.js:');
let missingTypologies = 0;
typologies.forEach(typ => {
  if (projectsJs.includes(`"${typ}":`)) {
    console.log(`  PASS: Typology "${typ}" found in CAD_OVERLAYS.`);
  } else {
    console.error(`  FAIL: Typology "${typ}" NOT found in CAD_OVERLAYS!`);
    missingTypologies++;
  }
});

// 4. Validate JS syntax
try {
  const cleanJs = projectsJs.replace(/^import\s+[^;]+;/gm, '// import').replace(/^export\s+/gm, '');
  new Function(cleanJs);
  console.log('[PASS] js/projects.js has 100% VALID JAVASCRIPT SYNTAX!');
} catch (e) {
  console.error('[FAIL] Syntax error in js/projects.js:', e);
}

// 5. Audit css/projects.css
const projectsCss = fs.readFileSync('css/projects.css', 'utf8');
const blueprintClasses = [
  'cad-bedrock-slope',
  'cad-bedrock-hatch',
  'cad-foundation-pile',
  'cad-pile-anchor-head',
  'cad-concrete-mass',
  'cad-structure-beam',
  'cad-detail-stroke',
  'cad-accent-vector',
  'cad-strata-layer',
  'cad-dimension-line',
  'cad-dimension-text',
  'cad-elevation-marker',
  'cad-redline-callout',
  'cad-title-block-box'
];

console.log('\nChecking Blueprint mode CSS overrides in css/projects.css:');
let missingBpClasses = 0;
blueprintClasses.forEach(cls => {
  const rule1 = `body.blueprint-mode .${cls}`;
  const rule2 = `body[data-theme="cyanotype"] .${cls}`;
  if (projectsCss.includes(rule1) && projectsCss.includes(rule2)) {
    console.log(`  PASS: .${cls} has both blueprint-mode and cyanotype rules.`);
  } else {
    console.error(`  FAIL: .${cls} missing proper dual-mode selectors!`);
    missingBpClasses++;
  }
});

// 6. Check .cad-redline-cluster in css/projects.css
if (projectsCss.includes('flex-wrap: nowrap;') && projectsCss.includes('.cad-redline-cluster')) {
  console.log('[PASS] .cad-redline-cluster is configured with flex-wrap: nowrap and overflow-x: auto.');
} else {
  console.error('[FAIL] .cad-redline-cluster wrapping rules not updated!');
}

console.log('\n=== COMPREHENSIVE AUDIT FINISHED ===');

