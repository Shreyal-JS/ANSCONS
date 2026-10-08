const fs = require('fs');

const js = fs.readFileSync('js/projects.js', 'utf8');
const cadStart = js.indexOf('const CAD_OVERLAYS = {');
const cadEnd = js.indexOf('// Comprehensive Database for Built Works Typologies');
console.log(js.slice(cadStart, cadEnd));

