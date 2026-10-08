const fs = require('fs');

const js = fs.readFileSync('js/projects.js', 'utf8');
const css = fs.readFileSync('css/projects.css', 'utf8');
const html = fs.readFileSync('projects.html', 'utf8');

console.log('=== CHECKING CAD_OVERLAYS IN js/projects.js ===');
const cadIdx = js.indexOf('const CAD_OVERLAYS = {');
const cadEnd = js.indexOf('// Comprehensive Database for Built Works Typologies');
const cadBlock = js.slice(cadIdx, cadEnd);

['typ-1', 'typ-1-p2', 'typ-2', 'typ-2-p4', 'typ-3', 'typ-3-p6', 'typ-4'].forEach(key => {
  const kIdx = cadBlock.indexOf(`'${key}':`);
  if (kIdx !== -1) {
    const chunk = cadBlock.slice(kIdx, kIdx + 1200);
    // Find all classes in this chunk
    const classes = [...chunk.matchAll(/class="([^"]+)"/g)].map(m => m[1]);
    console.log(`Key ${key}: found classes:`, [...new Set(classes.join(' ').split(' '))]);
  } else {
    console.log(`Key ${key}: NOT FOUND in CAD_OVERLAYS!`);
  }
});

