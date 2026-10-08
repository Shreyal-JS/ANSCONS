const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');
const projectsHtml = fs.readFileSync('projects.html', 'utf8');

const indexFooter = indexHtml.match(/<footer[\s\S]*?<\/footer>/i)[0];
const projectsFooter = projectsHtml.match(/<footer[\s\S]*?<\/footer>/i)[0];

console.log('=== INDEX FOOTER ===');
console.log(indexFooter);

console.log('\n=== PROJECTS FOOTER ===');
console.log(projectsFooter);

