const fs = require('fs');

const html = fs.readFileSync('projects.html', 'utf8');
const allCss = [
  fs.readFileSync('css/main.css', 'utf8'),
  fs.readFileSync('css/desk.css', 'utf8'),
  fs.readFileSync('css/nav.css', 'utf8'),
  fs.readFileSync('css/hero.css', 'utf8'),
  fs.readFileSync('css/projects.css', 'utf8'),
  fs.readFileSync('css/legal-specs.css', 'utf8')
].join('\n');

const classMatches = [...html.matchAll(/class="([^"]+)"/g)];
const allClasses = new Set();
classMatches.forEach(m => {
  m[1].split(/\s+/).forEach(cls => {
    if (cls.trim()) allClasses.add(cls.trim());
  });
});

console.log(`Total unique classes in projects.html: ${allClasses.size}`);
const unstyled = [];
allClasses.forEach(c => {
  const reg = new RegExp(`\\.${c}\\b`);
  if (!reg.test(allCss)) {
    unstyled.push(c);
  }
});
console.log('Unstyled classes count:', unstyled.length);
if (unstyled.length > 0) {
  console.log('Unstyled:', unstyled);
} else {
  console.log('All classes in projects.html are styled!');
}

