/**
 * ANSCONS Philosophy & Heritage Page Controller (about.js)
 * Coordinates the 3D Wax Seal, Vellum Peel Caliper Slider,
 * Interactive Specimen Board, and Field Ledger Timeline.
 */

import { deskAudio } from './audio.js';
import { DeskToolsController } from './desk-tools.js';
import { LegalSpecsController } from './legal-specs.js';

// Material Provenance Specimen Database
const SPECIMEN_DATA = {
  carrara: {
    tag: 'SPECIMEN REF: MC-01 // TUSCANY EXTRA-FINE',
    heading: 'Statuary Carrara Marble',
    narrative: 'Extracted from the historic Fantiscritti quarries in the Apuan Alps. Each monolithic block is inspected under raking light for micro-fractures before waterjet squaring. Hand-chiseled margins create an interplay between raw quarry texture and honed axial surfaces.',
    metrics: [
      { label: 'COMPRESSIVE STRENGTH', value: '135 MPa', desc: 'High seismic resistance' },
      { label: 'WATER ABSORPTION', value: '0.12%', desc: 'Impermeable crystal matrix' },
      { label: 'DESIGN LIFESPAN', value: '300+ YRS', desc: 'Indefinite interior cycle' },
      { label: 'CARBON PROFILE', value: '-12 kg CO₂e/t', desc: 'Gravity-assisted cable haul' }
    ]
  },
  shousugi: {
    tag: 'SPECIMEN REF: YK-04 // JAPANESE CYPRESS',
    heading: 'Charred Shou Sugi Ban Timber',
    narrative: 'Hand-selected Cryptomeria japonica subjected to 1200°C open-flame pyrolysis. The resulting carbonaceous "alligator skin" crust creates an organic barrier impervious to rot, termites, UV bleaching, and airborne salinity without chemical sealants.',
    metrics: [
      { label: 'FLAME RETARDANCE', value: 'CLASS A', desc: 'Pre-carbonized barrier' },
      { label: 'MAINTENANCE CYCLE', value: '80 YRS', desc: 'Zero synthetic refinishing' },
      { label: 'DESIGN LIFESPAN', value: '150+ YRS', desc: 'Proven historic longevity' },
      { label: 'CARBON PROFILE', value: '-840 kg CO₂e/m³', desc: 'Net carbon sequestered' }
    ]
  },
  bronze: {
    tag: 'SPECIMEN REF: BZ-09 // ARCHITECTURAL PATINA',
    heading: 'Oxidized Architectural Bronze',
    narrative: 'High-copper architectural alloy C38500 cast in sand beds and burnished with steel wool. Accelerated natural oxidation via liver of sulphur yields a deep verdant malachite patina that self-heals when scratched by forming a protective cuprous oxide film.',
    metrics: [
      { label: 'TENSILE YIELD', value: '380 MPa', desc: 'Superior cantilever bracing' },
      { label: 'CORROSION RATE', value: '0.01 mm/cent.', desc: 'Passivating self-healing film' },
      { label: 'DESIGN LIFESPAN', value: '500+ YRS', desc: 'Museum-grade permanence' },
      { label: 'CARBON PROFILE', value: '98% RECYCLED', desc: 'Closed-loop foundry alloy' }
    ]
  }
};

class PhilosophyPageController {
  constructor() {
    this.initWaxSeal();
    this.initPeelSlider();
    this.initSpecimenBoard();
  }

  // 1. 3D Blind-Debossed Wax Seal Interactivity
  initWaxSeal() {
    const sealContainer = document.querySelector('.wax-seal-container');
    const sealStamp = document.querySelector('.wax-seal-stamp');
    const specular = document.querySelector('.wax-specular');

    if (!sealContainer || !sealStamp) return;

    sealContainer.addEventListener('mousemove', (e) => {
      const rect = sealStamp.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const deltaX = (x - centerX) / centerX;
      const deltaY = (y - centerY) / centerY;

      const rotateX = -deltaY * 16;
      const rotateY = deltaX * 16;

      sealStamp.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;

      if (specular) {
        const lightX = 35 + deltaX * 25;
        const lightY = 30 + deltaY * 25;
        specular.style.background = `radial-gradient(circle at ${lightX}% ${lightY}%, rgba(255, 255, 255, 0.5) 0%, transparent 60%)`;
      }
    });

    sealContainer.addEventListener('mouseleave', () => {
      sealStamp.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
      if (specular) {
        specular.style.background = 'radial-gradient(circle at 30% 25%, rgba(255, 255, 255, 0.4) 0%, transparent 60%)';
      }
    });

    sealStamp.addEventListener('click', () => {
      deskAudio.playSwitchClick();
      // Tactile stamp bounce
      sealStamp.style.transform = 'scale(0.92)';
      setTimeout(() => {
        sealStamp.style.transform = 'scale(1)';
      }, 150);
    });
  }

  // 2. Layered Tracing Paper Philosophy Slider
  initPeelSlider() {
    const stage = document.querySelector('.peel-slider-stage');
    const overlay = document.querySelector('.peel-vellum-overlay');
    const divider = document.querySelector('.peel-caliper-divider');
    const presetBtns = document.querySelectorAll('.btn-peel-preset');

    if (!stage || !overlay || !divider) return;

    let isDragging = false;

    const updateSlider = (clientX) => {
      const rect = stage.getBoundingClientRect();
      let offsetX = clientX - rect.left;
      let percentage = (offsetX / rect.width) * 100;

      // Clamp between 2% and 98%
      percentage = Math.max(2, Math.min(98, percentage));

      overlay.style.width = `${percentage}%`;
      divider.style.left = `${percentage}%`;
    };

    // Pointer events on divider and stage
    const onStart = (e) => {
      isDragging = true;
      divider.classList.add('dragging');
      deskAudio.playSwitchClick();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      updateSlider(clientX);
    };

    const onMove = (e) => {
      if (!isDragging) return;
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      updateSlider(clientX);
    };

    const onEnd = () => {
      if (isDragging) {
        isDragging = false;
        divider.classList.remove('dragging');
      }
    };

    divider.addEventListener('mousedown', onStart);
    stage.addEventListener('mousedown', (e) => {
      if (e.target !== divider && !divider.contains(e.target)) {
        onStart(e);
      }
    });

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onEnd);

    // Touch events for mobile/tablet
    divider.addEventListener('touchstart', onStart, { passive: true });
    stage.addEventListener('touchstart', (e) => {
      if (e.target !== divider && !divider.contains(e.target)) {
        onStart(e);
      }
    }, { passive: true });
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('touchend', onEnd);

    // Preset toggle buttons
    presetBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        deskAudio.playSwitchClick();
        const targetPercent = parseFloat(btn.getAttribute('data-percent') || '50');
        overlay.style.transition = 'width 0.4s var(--ease-spring)';
        divider.style.transition = 'left 0.4s var(--ease-spring)';
        
        overlay.style.width = `${targetPercent}%`;
        divider.style.left = `${targetPercent}%`;

        setTimeout(() => {
          overlay.style.transition = 'width 0.05s ease-out';
          divider.style.transition = 'left 0.05s ease-out';
        }, 450);
      });
    });
  }

  // 3. Interactive Material Provenance Specimen Board
  initSpecimenBoard() {
    const trayItems = document.querySelectorAll('.specimen-tray-item');
    const dossierTag = document.querySelector('.dossier-card-tag');
    const dossierHeading = document.querySelector('.dossier-card-heading');
    const dossierNarrative = document.querySelector('.dossier-card-narrative');
    const dossierMetrics = document.querySelector('.dossier-metrics-grid');

    if (!trayItems.length || !dossierTag || !dossierHeading) return;

    trayItems.forEach(item => {
      item.addEventListener('click', () => {
        const materialKey = item.getAttribute('data-material');
        const data = SPECIMEN_DATA[materialKey];

        if (!data) return;

        deskAudio.playSwitchClick();

        // Update active class
        trayItems.forEach(t => t.classList.remove('active'));
        item.classList.add('active');

        // Populate Dossier Card with smooth fade
        const card = document.querySelector('.specimen-dossier-card');
        if (card) card.style.opacity = '0.5';

        setTimeout(() => {
          dossierTag.textContent = data.tag;
          dossierHeading.textContent = data.heading;
          dossierNarrative.textContent = data.narrative;

          // Render metrics grid
          dossierMetrics.innerHTML = data.metrics.map(m => `
            <div class="metric-gauge-item">
              <span class="metric-gauge-label">${m.label}</span>
              <span class="metric-gauge-value">${m.value}</span>
              <span class="metric-gauge-desc">${m.desc}</span>
            </div>
          `).join('');

          if (card) card.style.opacity = '1';
        }, 150);
      });
    });
  }
}

// Master DOM Ready Coordinator for Philosophy Page
document.addEventListener('DOMContentLoaded', () => {
  // Initialize desk controls (lever, mute button, return-to-origin)
  new DeskToolsController(deskAudio);

  // Initialize legal spec sheets tucked under mat
  new LegalSpecsController(deskAudio);

  // Initialize philosophy & heritage interactive features
  new PhilosophyPageController();

  console.log('🏛️ ANSCONS Heritage Dossier & Foundation Ledger initialized.');
});

