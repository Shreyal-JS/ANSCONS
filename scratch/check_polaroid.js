const fs = require('fs');

const html = fs.readFileSync('projects.html', 'utf8');
const js = fs.readFileSync('js/projects.js', 'utf8');
const css = fs.readFileSync('css/projects.css', 'utf8');

console.log('=== POLAROID MODAL HTML ===');
const pModalIdx = html.indexOf('polaroid-modal-backdrop');
console.log(html.slice(pModalIdx - 50, pModalIdx + 600));

console.log('\n=== POLAROID MODAL CSS ===');
const pCssIdx = css.indexOf('.polaroid-modal-backdrop');
console.log(css.slice(pCssIdx, pCssIdx + 1200));

console.log('\n=== POLAROID MODAL JS ===');
const pJsIdx = js.indexOf('initPolaroidModal');
console.log(js.slice(pJsIdx, pJsIdx + 800));

