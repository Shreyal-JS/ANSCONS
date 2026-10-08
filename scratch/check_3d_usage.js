const fs = require('fs');

const cssFiles = ['css/main.css', 'css/desk.css', 'css/nav.css', 'css/hero.css', 'css/projects.css', 'css/legal-specs.css', 'css/responsive.css'];

cssFiles.forEach(file => {
  if (!fs.existsSync(file)) return;
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split('\n');
  lines.forEach((l, idx) => {
    if (l.includes('rotateX') || l.includes('rotateY') || l.includes('translateZ') || l.includes('preserve-3d')) {
      console.log(`${file}:${idx + 1}: ${l.trim()}`);
    }
  });
});

