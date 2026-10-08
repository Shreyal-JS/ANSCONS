const fs = require('fs');

const css = fs.readFileSync('css/projects.css', 'utf8');

const matches = [...css.matchAll(/\.polaroid-modal-backdrop\b[^{]*\{[^}]*\}/g)];
console.log('Matches for .polaroid-modal-backdrop in css/projects.css:');
matches.forEach(m => console.log(m[0]));

