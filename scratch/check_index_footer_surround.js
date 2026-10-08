const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');
const fIdx = indexHtml.indexOf('<footer');
console.log('Before footer in index.html:');
console.log(indexHtml.slice(fIdx - 600, fIdx));

