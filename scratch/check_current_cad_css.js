const fs = require('fs');

const css = fs.readFileSync('css/projects.css', 'utf8');

const cadIdx = css.indexOf('.vellum-cad-overlay');
console.log('Current CAD CSS in projects.css:');
console.log(css.slice(cadIdx, cadIdx + 1500));

