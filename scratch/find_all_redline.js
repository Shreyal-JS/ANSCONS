const fs = require('fs');

const css = fs.readFileSync('css/projects.css', 'utf8');

const matches = [...css.matchAll(/\.cad-redline-cluster\b/g)];
console.log('Occurrences of .cad-redline-cluster in projects.css:', matches.length);
matches.forEach(m => {
  console.log(css.slice(m.index, m.index + 200));
  console.log('---');
});

const bMatches = [...css.matchAll(/\.redline-annotation-badge\b/g)];
console.log('Occurrences of .redline-annotation-badge in projects.css:', bMatches.length);
bMatches.forEach(m => {
  console.log(css.slice(m.index, m.index + 200));
  console.log('---');
});

