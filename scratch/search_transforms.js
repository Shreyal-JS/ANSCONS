const fs = require('fs');

const cssFiles = ['css/main.css', 'css/desk.css', 'css/nav.css', 'css/hero.css', 'css/projects.css', 'css/legal-specs.css'];

cssFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  lines.forEach((l, idx) => {
    if ((l.includes('transform:') || l.includes('perspective:')) && (l.includes('body') || l.includes('html') || l.includes('container') || l.includes('section') || l.includes('deck') || l.includes('mat'))) {
      console.log(`${file}:${idx + 1}: ${l.trim()}`);
    }
  });
});

