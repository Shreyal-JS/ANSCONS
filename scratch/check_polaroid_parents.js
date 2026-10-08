const fs = require('fs');

const html = fs.readFileSync('projects.html', 'utf8');

const pModalIdx = html.indexOf('id="polaroid-modal-backdrop"');
console.log('Position of polaroid-modal-backdrop in projects.html:', pModalIdx);

// Look backwards from pModalIdx to see parent tags
const beforeModal = html.slice(Math.max(0, pModalIdx - 1500), pModalIdx);
console.log('Parent elements before modal:');
console.log(beforeModal.slice(-600));

// Look forwards from pModalIdx
const afterModal = html.slice(pModalIdx, pModalIdx + 600);
console.log('\nAfter modal:');
console.log(afterModal);

