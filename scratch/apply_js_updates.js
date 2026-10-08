const fs = require('fs');

let js = fs.readFileSync('js/projects.js', 'utf8');

// 1. Replace CAD_OVERLAYS with scratch/cad_overlays_v2.js
const cadStart = js.indexOf('const CAD_OVERLAYS = {');
const cadEnd = js.indexOf('// Comprehensive Database for Built Works Typologies');

if (cadStart === -1 || cadEnd === -1) {
  console.error('Could not find CAD_OVERLAYS boundaries in js/projects.js');
  process.exit(1);
}

const newCad = fs.readFileSync('scratch/cad_overlays_v2.js', 'utf8');
js = js.slice(0, cadStart) + newCad + '\n\n' + js.slice(cadEnd);

// 2. Enhance initPolaroidModal with scroll lock and Escape key support
const oldPolaroidModal = `  initPolaroidModal() {
    if (this.polaroidAnchor) {
      this.polaroidAnchor.addEventListener('click', () => {
        const project = PORTFOLIO_TYPOLOGIES[this.currentTypologyKey];
        if (project && this.polaroidModal) {
          if (this.polaroidExpandedImg) this.polaroidExpandedImg.src = project.polaroid.image;
          if (this.polaroidExpandedNote) this.polaroidExpandedNote.textContent = project.polaroid.note;
          this.polaroidModal.classList.add('open');
          if (this.audio) this.audio.playPaperSlide();
        }
      });
    }

    if (this.polaroidCloseBtn) {
      this.polaroidCloseBtn.addEventListener('click', () => {
        if (this.polaroidModal) this.polaroidModal.classList.remove('open');
      });
    }

    if (this.polaroidModal) {
      this.polaroidModal.addEventListener('click', (e) => {
        if (e.target === this.polaroidModal) {
          this.polaroidModal.classList.remove('open');
        }
      });
    }
  }`;

const newPolaroidModal = `  initPolaroidModal() {
    const closeModal = () => {
      if (this.polaroidModal) {
        this.polaroidModal.classList.remove('open');
        document.body.style.overflow = '';
      }
    };

    if (this.polaroidAnchor) {
      this.polaroidAnchor.addEventListener('click', () => {
        const project = PORTFOLIO_TYPOLOGIES[this.currentTypologyKey];
        if (project && this.polaroidModal) {
          if (this.polaroidExpandedImg) this.polaroidExpandedImg.src = project.polaroid.image;
          if (this.polaroidExpandedNote) this.polaroidExpandedNote.textContent = project.polaroid.note;
          this.polaroidModal.classList.add('open');
          document.body.style.overflow = 'hidden';
          if (this.audio) this.audio.playPaperSlide();
        }
      });
    }

    if (this.polaroidCloseBtn) {
      this.polaroidCloseBtn.addEventListener('click', () => {
        closeModal();
      });
    }

    if (this.polaroidModal) {
      this.polaroidModal.addEventListener('click', (e) => {
        if (e.target === this.polaroidModal) {
          closeModal();
        }
      });
    }

    // Escape key closes polaroid modal
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.polaroidModal && this.polaroidModal.classList.contains('open')) {
        closeModal();
      }
    });
  }`;

if (js.includes(oldPolaroidModal)) {
  js = js.replace(oldPolaroidModal, newPolaroidModal);
  console.log('Successfully updated initPolaroidModal with scroll lock and Escape key support.');
} else {
  console.error('Could not find oldPolaroidModal block in js/projects.js');
}

// Check syntax
try {
  const nonModuleJs = js
    .replace(/^import\s+[^;]+;/gm, '// import')
    .replace(/^export\s+/gm, '');
  new Function(nonModuleJs);
  console.log('JavaScript syntax is completely valid!');
  fs.writeFileSync('js/projects.js', js, 'utf8');
  console.log('Successfully written js/projects.js! Total bytes:', js.length);
} catch (e) {
  console.error('Syntax error in updated js:', e);
}

