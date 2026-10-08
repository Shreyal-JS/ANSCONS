const fs = require('fs');

let mainCss = fs.readFileSync('css/main.css', 'utf8');

const oldBody = `body {
  font-family: var(--font-body);
  color: var(--desk-paper-ink);
  overflow-x: hidden;
  min-height: 100vh;
  position: relative;
  background-color: var(--desk-base-color);
  perspective: 1800px;
  transition: background-color 0.5s ease, color 0.5s ease;
}`;

const newBody = `body {
  font-family: var(--font-body);
  color: var(--desk-paper-ink);
  overflow-x: hidden;
  min-height: 100vh;
  position: relative;
  background-color: var(--desk-base-color);
  transition: background-color 0.5s ease, color 0.5s ease;
}`;

if (mainCss.includes(oldBody)) {
  mainCss = mainCss.replace(oldBody, newBody);
  fs.writeFileSync('css/main.css', mainCss, 'utf8');
  console.log('Successfully removed perspective: 1800px from body in css/main.css');
} else {
  console.error('Could not find exact oldBody block in css/main.css');
}

