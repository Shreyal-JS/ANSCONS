/**
 * ANSCONS Portfolio Folio Controller (3D Leather Binder)
 */

const portfolioProjects = [
  {
    id: 1,
    title: "The Bel-Air Cantilever Estate",
    location: "Bel-Air Crest, Los Angeles, CA",
    image: "assets/images/project-1-belair.jpg",
    narrative: "A monumental cantilevered luxury residence perched atop the ridge line. Features smoked French oak envelopes, massive uninterrupted structural glazing, and an infinity travertine terrace floating above the valley at twilight.",
    specs: {
      footprint: "9,400 SQ. FT.",
      typology: "TURNKEY CANTILEVER ESTATE",
      materials: "FRENCH OAK • TRAVERTINE • MINIMAL GLASS",
      structural: "POST-TENSIONED CANOPIES"
    },
    tag: "DWG REF: BA-RES-2026 // REV 06"
  },
  {
    id: 2,
    title: "The Tribeca Glasshouse Penthouse",
    location: "Franklin Street, Tribeca, New York",
    image: "assets/images/project-2-tribeca.jpg",
    narrative: "A double-height duplex penthouse interior architecture transformation. Centered on a 24-foot bookmatched Calacatta Gold fireplace monolithic wall, chevron oak millwork, and custom brushed champagne brass balustrades.",
    specs: {
      footprint: "5,800 SQ. FT.",
      typology: "BESPOKE INTERIOR ARCHITECTURE",
      materials: "CALACATTA GOLD • CHEVRON OAK • BRASS",
      structural: "REINFORCED STEEL & ACOUSTIC GLAZING"
    },
    tag: "DWG REF: TR-PENT-2025 // REV 04"
  },
  {
    id: 3,
    title: "The Mayfair Heritage Kitchen & Pavilion",
    location: "Grosvenor Square, Mayfair, London",
    image: "assets/images/project-3-mayfair.jpg",
    narrative: "A private garden pavilion and culinary salon addition to a Grade-II listed heritage residence. Showcases bespoke dark smoked oak cabinetry, fluted architectural glass, and a quartzite waterfall island opening onto a sunken courtyard.",
    specs: {
      footprint: "3,800 SQ. FT. ADDITION",
      typology: "HERITAGE ESTATE RENOVATION",
      materials: "SMOKED OAK • REEDED GLASS • BRONZE",
      structural: "THERMALLY BROKEN MINIMAL STEEL"
    },
    tag: "DWG REF: MF-PAV-2026 // REV 02"
  }
];

export class PortfolioController {
  constructor(audioInstance) {
    this.audio = audioInstance;
    this.currentIndex = 0;
    this.currentRevision = 6; // Default to REV 06 (COMPLETED)
    
    this.imgEl = document.getElementById('folio-photo-img');
    this.tagEl = document.getElementById('folio-overlay-tag');
    this.titleEl = document.getElementById('folio-project-title');
    this.locationEl = document.getElementById('folio-project-location');
    this.narrativeEl = document.getElementById('folio-project-narrative');
    this.photoFrameEl = document.getElementById('folio-photo-frame');
    this.revStepperEl = document.getElementById('folio-revision-stepper');
    this.revButtons = this.revStepperEl ? this.revStepperEl.querySelectorAll('.folio-rev-btn') : [];
    
    this.specFootprint = document.getElementById('spec-footprint');
    this.specTypology = document.getElementById('spec-typology');
    this.specMaterials = document.getElementById('spec-materials');
    this.specStructural = document.getElementById('spec-structural');
    
    this.dotsContainer = document.getElementById('folio-dots');
    this.prevBtn = document.getElementById('btn-folio-prev');
    this.nextBtn = document.getElementById('btn-folio-next');
    this.rightPageEl = document.querySelector('.folio-page-right');
    this.sheenEl = document.getElementById('page-lighting-sheen');
    this.isAnimating = false;
    
    this.init();
  }

  init() {
    if (this.prevBtn && this.nextBtn) {
      this.prevBtn.addEventListener('click', () => this.navigate(-1));
      this.nextBtn.addEventListener('click', () => this.navigate(1));
    }

    if (this.dotsContainer) {
      this.dotsContainer.querySelectorAll('.folio-page-dot').forEach((dot, idx) => {
        dot.addEventListener('click', () => this.goTo(idx));
      });
    }

    // Bind Drawing Revision Stepper
    this.revButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const rev = parseInt(btn.dataset.rev, 10);
        if (rev && rev !== this.currentRevision) {
          this.setRevision(rev);
        }
      });
    });

    this.renderInstant();
  }

  setRevision(rev) {
    this.currentRevision = rev;
    if (this.audio) this.audio.playSwitchClick();

    // Update active button state
    this.revButtons.forEach(btn => {
      btn.classList.toggle('active', parseInt(btn.dataset.rev, 10) === rev);
    });

    // Update photo frame visual data-revision attribute
    if (this.photoFrameEl) {
      this.photoFrameEl.setAttribute('data-revision', `rev-0${rev}`);
    }

    // Update tag text with revision phase
    const revNames = {
      1: 'REV 01 // CONCEPT',
      2: 'REV 02 // SCHEMATIC',
      3: 'REV 03 // STRUCTURAL',
      4: 'REV 04 // MATERIAL',
      5: 'REV 05 // EXECUTION',
      6: 'REV 06 // COMPLETED'
    };

    const p = portfolioProjects[this.currentIndex];
    if (p && this.tagEl) {
      const baseDwg = p.tag.split('//')[0].trim();
      this.tagEl.textContent = `${baseDwg} // ${revNames[rev] || `REV 0${rev}`}`;
    }
  }

  navigate(direction) {
    if (this.isAnimating) return;
    const nextIndex = (this.currentIndex + direction + portfolioProjects.length) % portfolioProjects.length;
    this.animateFlip(nextIndex, direction > 0 ? 'forward' : 'backward');
  }

  goTo(index) {
    if (this.isAnimating || index === this.currentIndex) return;
    const direction = index > this.currentIndex ? 'forward' : 'backward';
    this.animateFlip(index, direction);
  }

  animateFlip(targetIndex, direction) {
    this.isAnimating = true;
    if (this.audio) this.audio.playSwitchClick();

    const animClass = direction === 'forward' ? 'flipping-forward' : 'flipping-backward';
    
    if (this.rightPageEl) {
      this.rightPageEl.classList.remove('flipping-forward', 'flipping-backward');
      // Trigger reflow
      void this.rightPageEl.offsetWidth;
      this.rightPageEl.classList.add(animClass);
    }

    // Dynamic light sweep overlay roll
    if (this.sheenEl) {
      this.sheenEl.style.opacity = '0.95';
      setTimeout(() => {
        if (this.sheenEl) this.sheenEl.style.opacity = '0';
      }, 420);
    }

    // Swap content at the 90-degree apex
    setTimeout(() => {
      this.currentIndex = targetIndex;
      this.updatePageContent();
    }, 360);

    // End flip
    setTimeout(() => {
      if (this.rightPageEl) {
        this.rightPageEl.classList.remove('flipping-forward', 'flipping-backward');
      }
      this.isAnimating = false;
    }, 760);
  }

  renderInstant() {
    this.updatePageContent();
  }

  updatePageContent() {
    const p = portfolioProjects[this.currentIndex];
    if (!p) return;

    if (this.imgEl) {
      this.imgEl.style.opacity = '0.3';
      setTimeout(() => {
        this.imgEl.src = p.image;
        this.imgEl.alt = p.title;
        this.imgEl.style.opacity = '1';
      }, 100);
    }

    if (this.tagEl) {
      const revNames = {
        1: 'REV 01 // CONCEPT',
        2: 'REV 02 // SCHEMATIC',
        3: 'REV 03 // STRUCTURAL',
        4: 'REV 04 // MATERIAL',
        5: 'REV 05 // EXECUTION',
        6: 'REV 06 // COMPLETED'
      };
      const baseDwg = p.tag.split('//')[0].trim();
      this.tagEl.textContent = `${baseDwg} // ${revNames[this.currentRevision] || 'REV 06'}`;
    }
    if (this.titleEl) this.titleEl.textContent = p.title;
    if (this.locationEl) this.locationEl.textContent = p.location;
    if (this.narrativeEl) this.narrativeEl.textContent = p.narrative;

    if (this.specFootprint) this.specFootprint.textContent = p.specs.footprint;
    if (this.specTypology) this.specTypology.textContent = p.specs.typology;
    if (this.specMaterials) this.specMaterials.textContent = p.specs.materials;
    if (this.specStructural) this.specStructural.textContent = p.specs.structural;

    // Update dots
    if (this.dotsContainer) {
      const dots = this.dotsContainer.querySelectorAll('.folio-page-dot');
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === this.currentIndex);
      });
    }
  }
}

