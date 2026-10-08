const fs = require('fs');

const legalCss = fs.readFileSync('css/legal-specs.css', 'utf8');
const specIdx = legalCss.indexOf('.spec-modal-overlay');
console.log(legalCss.slice(specIdx, specIdx + 600));

