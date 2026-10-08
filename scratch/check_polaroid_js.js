const fs = require('fs');

const js = fs.readFileSync('js/projects.js', 'utf8');

const pIdx = js.indexOf('initPolaroidModal() {');
console.log(js.slice(pIdx, pIdx + 1200));

