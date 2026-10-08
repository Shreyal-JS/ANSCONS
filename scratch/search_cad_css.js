const fs = require('fs');

const css = fs.readFileSync('css/projects.css', 'utf8');

const cadRules = [...css.matchAll(/[^\r\n]*cad-[^\r\n]*/gi)];
console.log('Total matches for cad- in css/projects.css:', cadRules.length);
cadRules.forEach(m => console.log(m[0]));

