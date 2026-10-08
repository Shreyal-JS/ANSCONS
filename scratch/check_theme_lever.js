const fs = require('fs');

const deskTools = fs.readFileSync('js/desk-tools.js', 'utf8');
const idx = deskTools.indexOf('this.themeLever.addEventListener');
console.log(deskTools.slice(idx, idx + 1000));

