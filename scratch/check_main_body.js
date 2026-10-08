const fs = require('fs');

const mainCss = fs.readFileSync('css/main.css', 'utf8');
const bodyStart = mainCss.indexOf('body {');
console.log(mainCss.slice(bodyStart, bodyStart + 400));

