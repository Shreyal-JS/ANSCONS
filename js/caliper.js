/**
 * ANSCONS Architectural Vernier Caliper Controller (Estimator Tool)
 */

export class CaliperEstimator {
  constructor(audioInstance) {
    this.audio = audioInstance;
    this.rangeInput = document.getElementById('caliper-slider-input');
    this.slidingJaw = document.getElementById('caliper-sliding-jaw');
    this.vernierValue = document.getElementById('vernier-current-val');
    
    this.valFootprint = document.getElementById('readout-footprint');
    this.valDuration = document.getElementById('readout-duration');
    this.valEnvelope = document.getElementById('readout-envelope');
    this.valInvestment = document.getElementById('readout-investment');

    this.scopeButtons = document.querySelectorAll('.scope-btn');
    this.activeScope = 'estate'; // 'estate', 'penthouse', 'pavilion'

    this.init();
  }

  init() {
    if (this.rangeInput) {
      this.rangeInput.addEventListener('input', (e) => {
        this.updatePosition(parseFloat(e.target.value));
      });
    }

    this.scopeButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.scopeButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.activeScope = btn.dataset.scope || 'estate';
        if (this.audio) this.audio.playSwitchClick();
        if (this.rangeInput) this.updatePosition(parseFloat(this.rangeInput.value));
      });
    });

    if (this.rangeInput) {
      this.updatePosition(parseFloat(this.rangeInput.value));
    }
  }

  updatePosition(percent) {
    // Clamp between 0 and 100
    const p = Math.max(0, Math.min(100, percent));
    
    // Position the sliding jaw across the beam
    if (this.slidingJaw) {
      // Beam range from 8% to 92%
      const leftPos = 8 + (p * 0.84);
      this.slidingJaw.style.left = `${leftPos}%`;
    }

    // Calculate Square Footage: 2,500 sq ft to 25,000 sq ft
    const sqft = Math.round(2500 + (p * 225));
    if (this.vernierValue) {
      this.vernierValue.textContent = `${sqft.toLocaleString()} SQ.FT.`;
    }
    if (this.valFootprint) {
      this.valFootprint.textContent = `${sqft.toLocaleString()} SQ. FT.`;
    }

    // Calculate Duration & Investment based on scope
    let durationMonths = 14;
    let minPerSqft = 900;
    let maxPerSqft = 1350;
    let envelopeSpec = "Minimal Steel & Low-E Triple Glazing";

    if (this.activeScope === 'estate') {
      durationMonths = Math.round(16 + (p * 0.16));
      minPerSqft = 1050;
      maxPerSqft = 1550;
      envelopeSpec = "Cantilevered Concrete & Thermally Broken Glass";
    } else if (this.activeScope === 'penthouse') {
      durationMonths = Math.round(10 + (p * 0.12));
      minPerSqft = 850;
      maxPerSqft = 1250;
      envelopeSpec = "Acoustic Double-Glazing & Historic Restoration";
    } else if (this.activeScope === 'pavilion') {
      durationMonths = Math.round(8 + (p * 0.10));
      minPerSqft = 750;
      maxPerSqft = 1100;
      envelopeSpec = "Travertine Terrace & Motorized Glass Envelopes";
    }

    const minInvestment = (sqft * minPerSqft) / 1000000;
    const maxInvestment = (sqft * maxPerSqft) / 1000000;

    if (this.valDuration) {
      this.valDuration.textContent = `${durationMonths} – ${durationMonths + 4} MO.`;
    }
    if (this.valEnvelope) {
      this.valEnvelope.textContent = envelopeSpec;
    }
    if (this.valInvestment) {
      this.valInvestment.textContent = `$${minInvestment.toFixed(1)}M – $${maxInvestment.toFixed(1)}M`;
    }

    if (this.audio) {
      this.audio.playCaliperTick();
    }
  }
}

