const fs = require('fs');

const html = fs.readFileSync('projects.html', 'utf8');

const pModalIdx = html.indexOf('id="polaroid-modal-backdrop"');
const beforeModal = html.slice(0, pModalIdx);

// Count open and close tags
const openTags = [];
const tagRegex = /<\/?([a-zA-Z0-9\-]+)[^>]*>/g;
let m;
while ((m = tagRegex.exec(beforeModal)) !== null) {
  const full = m[0];
  const tag = m[1].toLowerCase();
  if (['br', 'hr', 'img', 'input', 'link', 'meta'].includes(tag)) continue;
  if (full.endsWith('/>')) continue;

  if (full.startsWith('</')) {
    // Closing tag
    const last = openTags.pop();
  } else {
    // Opening tag
    openTags.push(full.slice(0, 80));
  }
}

console.log('Unclosed parent tags enclosing #polaroid-modal-backdrop:');
openTags.forEach(t => console.log(' ->', t));

