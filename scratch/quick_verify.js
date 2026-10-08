const fs = require('fs');

console.log('Running quick test of audit...');
const html = fs.readFileSync('projects.html', 'utf8');
const js = fs.readFileSync('js/projects.js', 'utf8');
const css = fs.readFileSync('css/projects.css', 'utf8');
const mainCss = fs.readFileSync('css/main.css', 'utf8');

console.log('projects.html size:', html.length);
console.log('js/projects.js size:', js.length);
console.log('css/projects.css size:', css.length);
console.log('css/main.css size:', mainCss.length);

// Check CSS braces
const openBraces = (css.match(/\{/g) || []).length;
const closeBraces = (css.match(/\}/g) || []).length;
console.log(`css/projects.css braces: open=${openBraces}, close=${closeBraces}`);

// Check JS syntax
try {
  const nonModuleJs = js
    .replace(/^import\s+[^;]+;/gm, '// import')
    .replace(/^export\s+/gm, '');
  new Function(nonModuleJs);
  console.log('JS syntax is completely valid!');
} catch (e) {
  console.error('JS Syntax error:', e.message);
}

// Check footer in projects.html
const hasDraftingFooter = html.includes('class="drafting-table-footer-zone"');
const hasMatLip = html.includes('class="cutting-mat-bottom-lip"');
const hasTuckedStack = html.includes('class="tucked-spec-stack"');
console.log('Footer check:', { hasDraftingFooter, hasMatLip, hasTuckedStack });

// Check perspective in main.css
console.log('main.css contains perspective:', mainCss.includes('perspective'));

// Check polaroid modal CSS
const pModalHasFixed = css.includes('position: fixed !important');
const pModalHasZIndex = css.includes('z-index: 999999 !important');
console.log('Polaroid modal CSS check:', { pModalHasFixed, pModalHasZIndex });

// Check CAD classes in projects.js
console.log('CAD overlays has cad-concrete-mass:', js.includes('cad-concrete-mass'));
console.log('CAD overlays has cad-structure-beam:', js.includes('cad-structure-beam'));

