const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');
const fIdx = indexHtml.indexOf('<footer');
const endIdx = indexHtml.indexOf('</body>');

console.log('=== FROM 1000 CHARS BEFORE FOOTER TO BODY END IN INDEX.HTML ===');
console.log(indexHtml.slice(fIdx - 1200, endIdx));

