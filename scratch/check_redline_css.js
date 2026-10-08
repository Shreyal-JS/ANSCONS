const fs = require('fs');

const css = fs.readFileSync('css/projects.css', 'utf8');

const rIdx = css.indexOf('.cad-redline-cluster');
console.log(css.slice(rIdx, rIdx + 1200));

