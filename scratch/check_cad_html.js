const fs = require('fs');

const html = fs.readFileSync('projects.html', 'utf8');
const cadIdx = html.indexOf('cad-svg-container');
console.log(html.slice(cadIdx - 100, cadIdx + 1200));

