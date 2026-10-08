const fs = require('fs');

['index.html', 'about.html', 'services.html'].forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  console.log(`${f} has clipboard-metal-asset-tag:`, content.includes('clipboard-metal-asset-tag'));
});

