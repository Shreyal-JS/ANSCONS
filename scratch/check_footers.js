const fs = require('fs');

console.log('=== 1. CHECK FOOTERS IN OTHER PAGES ===');
['index.html', 'about.html', 'services.html', 'projects.html'].forEach(file => {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    const footerMatch = content.match(/<footer[\s\S]*?<\/footer>/i);
    if (footerMatch) {
      console.log(`\n--- Footer in ${file} (length: ${footerMatch[0].length}) ---`);
      console.log(footerMatch[0].slice(0, 300) + '...\n...' + footerMatch[0].slice(-200));
    } else {
      console.log(`\n--- No <footer> tag found in ${file} ---`);
    }
  }
});

