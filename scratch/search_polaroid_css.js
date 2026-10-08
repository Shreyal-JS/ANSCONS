const fs = require('fs');

['css/main.css', 'css/desk.css', 'css/nav.css', 'css/hero.css', 'css/projects.css', 'css/legal-specs.css'].forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  if (content.includes('polaroid-modal')) {
    console.log(`Found polaroid-modal in ${file}:`);
    const idx = content.indexOf('polaroid-modal');
    console.log(content.slice(idx - 50, idx + 400));
  }
});

