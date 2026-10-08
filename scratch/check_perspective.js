const fs = require('fs');

const mainCss = fs.readFileSync('css/main.css', 'utf8');

const pMatches = [...mainCss.matchAll(/[^\r\n]*perspective[^\r\n]*/gi)];
console.log('Matches for perspective in css/main.css:');
pMatches.forEach(m => console.log(m[0]));

