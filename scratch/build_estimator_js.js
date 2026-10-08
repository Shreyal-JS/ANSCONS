const fs = require('fs');

const jsContent = `/**
 * ANSCONS DOC 05: Instrument Calibration Desk & Bill of Quantities (BOM) Controller
 * High-liability master builder parametric cost engine & physical skeuomorphic workbench.
 */

import { DeskAudio } from './audio.js';
import { DeskToolsController } from './desk-tools.js';
import { LegalSpecsController } from './legal-specs.js';

export class EstimatorController {
  constructor(audioInstance) {
    this.audio = audioInstance || new DeskAudio();

    // 1. Primary Physical Instrument: The Vernier Caliper
    this.caliperInput = document.getElementById('caliper-slider-input');
    this.slidingJaw = document.getElementById('master-sliding-jaw');
    this.footprintValueDisplay = document.getElementById('caliper-footprint-value');
    this.vernierIndexMark = document.getElementById('vernier-index-mark');

    // 2. Rotary Geotechnical Dial
    this.bezelRotatingKnob = document.getElementById('bezel-rotating-knob');
    this.bezelCenterCap = document.getElementById('bezel-center-cap');
    this.detentButtons = document.querySelectorAll('.detent-pill-btn');

    // 3. Measurement System Flip Switch (Imperial / Metric)
    this.unitTogglePlate = document.getElementById('unit-switch-plate');
    this.labelImperial = document.getElementById('label-unit-imperial');
    this.labelMetric = document.getElementById('label-unit-metric');

    // 4. Material Levers & Selector Cards
    this.typologyCards = document.querySelectorAll('[data-lever="typology"]');
    this.envelopeCards = document.querySelectorAll('[data-lever="envelope"]');
    this.finishCards = document.querySelectorAll('[data-lever="finishes"]');

    // 5. Bill of Quantities (BOM) Output Nodes
    this.bomDocCode = document.getElementById('bom-doc-code');
    this.bomDateStamp = document.getElementById('bom-date-stamp');
    this.lineSubstructureAmount = document.getElementById('line-substructure-amount');
    this.lineSubstructureDetail = document.getElementById('line-substructure-detail');
    this.lineSuperstructureAmount = document.getElementById('line-superstructure-amount');
    this.lineSuperstructureDetail = document.getElementById('line-superstructure-detail');
    this.lineEnvelopeAmount = document.getElementById('line-envelope-amount');
    this.lineEnvelopeDetail = document.getElementById('line-envelope-detail');
    this.lineFinishesAmount = document.getElementById('line-finishes-amount');
    this.lineFinishesDetail = document.getElementById('line-finishes-detail');
    this.lineGeneralAmount = document.getElementById('line-general-amount');
    this.lineGeneralDetail = document.getElementById('line-general-detail');

    // Schedule & Totals
    this.scheduleMilestones = document.getElementById('schedule-milestones-text');
    this.scheduleDurationBadge = document.getElementById('schedule-duration-badge');
    this.totalUnitRate = document.getElementById('total-unit-rate');
    this.totalSumRange = document.getElementById('total-sum-range');
    this.aiaStamp = document.getElementById('aia-feasibility-stamp');

    // 6. Perforated Tear-Off Card & Transmit
    this.tearOffCard = document.getElementById('bom-tear-off-card');
    this.tearSummaryDetails = document.getElementById('tear-summary-details');
    this.btnTearTransmit = document.getElementById('btn-tear-and-transmit');

    // Parametric State Defaults
    this.footprintSqFt = 10000; // 2,500 to 25,000 sq ft
    this.lastSoundFootprint = 10000;
    this.unitSystem = 'imperial'; // 'imperial' | 'metric'
    this.geotechFactor = 1.00;
    this.geotechAngle = 0; // 0, 45, 90, 135 deg
    this.geotechName = 'Stable Granite Bedrock';

    this.activeTypology = 'typ-a'; // typ-a (1.0x), typ-b (1.35x), typ-c (1.50x)
    this.typologyMult = 1.00;
    this.typologyName = 'Monolithic Reinforced Slab';

    this.activeEnvelope = 'spec-1'; // spec-1 (1.0x), spec-2 (1.25x), spec-3 (1.55x)
    this.envelopeMult = 1.00;
    this.envelopeName = 'Standard Minimal Sightlines';

    this.activeFinishes = 'fin-1'; // fin-1 (1.0x), fin-2 (1.30x), fin-3 (1.65x)
    this.finishesMult = 1.00;
    this.finishesName = 'Smoked French Oak & Travertine';

    this.init();
  }

  init() {
    this.initVernierCaliper();
    this.initGeotechDial();
    this.initUnitToggle();
    this.initMaterialLevers();
    this.initTearOffSlip();

    // Initial calculation
    this.calculateAndRender();
  }

  /* ------------------------------------------------------------------------
     1. Primary Physical Instrument: The Vernier Caliper
     ------------------------------------------------------------------------ */
  initVernierCaliper() {
    if (!this.caliperInput) return;

    this.caliperInput.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value);
      this.footprintSqFt = val;

      // Audio tick every 500 sq ft notch
      if (Math.abs(val - this.lastSoundFootprint) >= 500) {
        this.lastSoundFootprint = val;
        if (this.audio) this.audio.playCaliperTick();
      }

      this.updateCaliperJawPosition();
      this.calculateAndRender();
    });

    this.updateCaliperJawPosition();
  }

  updateCaliperJawPosition() {
    if (!this.slidingJaw) return;
    // Map 2500 - 25000 sq ft to percentage across beam (8% to 92%)
    const pct = (this.footprintSqFt - 2500) / (25000 - 2500);
    const clampedPct = Math.max(0, Math.min(1, pct));
    const leftPercent = 8 + (clampedPct * 84);
    this.slidingJaw.style.left = \`\${leftPercent}%\`;

    if (this.vernierIndexMark) {
      const vernierFraction = Math.round((clampedPct * 10) % 10);
      this.vernierIndexMark.textContent = \`VERNIER: 0.\${vernierFraction} // \${Math.round(clampedPct * 100)}%\`;
    }
  }

  /* ------------------------------------------------------------------------
     2. Rotary Geotechnical Bezel / Dial
     ------------------------------------------------------------------------ */
  initGeotechDial() {
    const setDial = (factor, angle, name) => {
      this.geotechFactor = factor;
      this.geotechAngle = angle;
      this.geotechName = name;

      if (this.bezelRotatingKnob) {
        this.bezelRotatingKnob.style.transform = \`rotate(\${angle}deg)\`;
      }
      if (this.bezelCenterCap) {
        this.bezelCenterCap.textContent = \`\${factor.toFixed(2)}×\`;
      }

      this.detentButtons.forEach(btn => {
        const btnFactor = parseFloat(btn.getAttribute('data-factor'));
        btn.classList.toggle('active', btnFactor === factor);
      });

      if (this.audio) this.audio.playSwitchClick();
      this.calculateAndRender();
    };

    // Detent pill buttons
    this.detentButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const factor = parseFloat(btn.getAttribute('data-factor'));
        const angle = parseFloat(btn.getAttribute('data-angle'));
        const name = btn.getAttribute('data-name') || 'Bedrock Coeff';
        setDial(factor, angle, name);
      });
    });

    // Clicking the dial itself cycles to the next detent
    if (this.bezelRotatingKnob) {
      this.bezelRotatingKnob.addEventListener('click', () => {
        const factors = [1.00, 1.15, 1.30, 1.45];
        const angles = [0, 45, 90, 135];
        const names = [
          'Stable Granite Bedrock',
          'Weathered Shale Hillside',
          'Active Fault Shear Zone',
          'Coastal Wave-Break Bluff'
        ];
        const currIdx = factors.indexOf(this.geotechFactor);
        const nextIdx = (currIdx + 1) % factors.length;
        setDial(factors[nextIdx], angles[nextIdx], names[nextIdx]);
      });
    }
  }

  /* ------------------------------------------------------------------------
     3. Measurement System Flip Switch (Imperial / Metric)
     ------------------------------------------------------------------------ */
  initUnitToggle() {
    if (!this.unitTogglePlate) return;

    this.unitTogglePlate.addEventListener('click', () => {
      this.unitSystem = (this.unitSystem === 'imperial') ? 'metric' : 'imperial';
      const isMetric = (this.unitSystem === 'metric');

      this.unitTogglePlate.classList.toggle('metric-active', isMetric);
      if (this.labelImperial) this.labelImperial.classList.toggle('active', !isMetric);
      if (this.labelMetric) this.labelMetric.classList.toggle('active', isMetric);

      if (this.audio) this.audio.playBrassClick();
      this.calculateAndRender();
    });
  }

  /* ------------------------------------------------------------------------
     4. Material Levers & Selector Cards
     ------------------------------------------------------------------------ */
  initMaterialLevers() {
    // 1. Typology Rockers
    this.typologyCards.forEach(card => {
      card.addEventListener('click', () => {
        this.typologyCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        this.activeTypology = card.getAttribute('data-typology');
        this.typologyMult = parseFloat(card.getAttribute('data-multiplier'));
        this.typologyName = card.querySelector('.card-spec-name')?.textContent || 'Typology';
        if (this.audio) this.audio.playSwitchClick();
        this.calculateAndRender();
      });
    });

    // 2. Envelope Spec Stepper
    this.envelopeCards.forEach(card => {
      card.addEventListener('click', () => {
        this.envelopeCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        this.activeEnvelope = card.getAttribute('data-envelope');
        this.envelopeMult = parseFloat(card.getAttribute('data-multiplier'));
        this.envelopeName = card.querySelector('.card-spec-name')?.textContent || 'Envelope';
        if (this.audio) this.audio.playSwitchClick();
        this.calculateAndRender();
      });
    });

    // 3. Finishes Slide Bolt
    this.finishCards.forEach(card => {
      card.addEventListener('click', () => {
        this.finishCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        this.activeFinishes = card.getAttribute('data-finish');
        this.finishesMult = parseFloat(card.getAttribute('data-multiplier'));
        this.finishesName = card.querySelector('.card-spec-name')?.textContent || 'Finishes';
        if (this.audio) this.audio.playSwitchClick();
        this.calculateAndRender();
      });
    });
  }

  /* ------------------------------------------------------------------------
     5. Master Parametric Cost & Quantities Engine
     ------------------------------------------------------------------------ */
  calculateAndRender() {
    const isMetric = (this.unitSystem === 'metric');
    const sqft = this.footprintSqFt;
    const sqMeters = Math.round(sqft * 0.092903);

    // Update Footprint Header Display
    if (this.footprintValueDisplay) {
      if (isMetric) {
        this.footprintValueDisplay.textContent = \`\${sqMeters.toLocaleString()} M² [\${sqft.toLocaleString()} SQ. FT.]\`;
      } else {
        this.footprintValueDisplay.textContent = \`\${sqft.toLocaleString()} SQ. FT. [\${sqMeters.toLocaleString()} M²]\`;
      }
    }

    // Parametric Combined Index Multiplier
    const leverComposite = (0.35 * this.typologyMult) + (0.35 * this.envelopeMult) + (0.30 * this.finishesMult);
    const compositeIndex = this.geotechFactor * leverComposite;

    // Hard Civil Quantities
    const concreteCuYds = Math.round(sqft * 0.045 * this.geotechFactor * (this.activeTypology === 'typ-c' ? 2.1 : 1.0));
    const concreteCuM = Math.round(concreteCuYds * 0.764555);

    const tiebackCount = Math.round((sqft / 550) * (this.geotechFactor >= 1.30 ? 2.2 : 1.1));
    const steelTons = Math.round((sqft * 0.018) * (this.activeTypology === 'typ-b' ? 1.85 : 1.0));
    const steelMetricTonnes = Math.round(steelTons * 0.907185);

    const facadeSqFt = Math.round(sqft * 0.65);
    const facadeSqM = Math.round(facadeSqFt * 0.092903);

    // Base Construction Cost Benchmark: $1,050 to $1,420 USD per sq ft
    let minRateUSD = 1050 * compositeIndex;
    let maxRateUSD = 1420 * compositeIndex;

    let minTotalUSD = Math.round(sqft * minRateUSD);
    let maxTotalUSD = Math.round(sqft * maxRateUSD);

    // Currency Conversion (EUR € rate ~0.92)
    const currencySym = isMetric ? '€' : '$';
    const currencySuffix = isMetric ? 'EUR' : 'USD';
    const rateFactor = isMetric ? 0.92 : 1.0;

    const minTotal = Math.round(minTotalUSD * rateFactor);
    const maxTotal = Math.round(maxTotalUSD * rateFactor);

    const unitRateMin = Math.round(minRateUSD * rateFactor / (isMetric ? 0.092903 : 1.0));
    const unitRateMax = Math.round(maxRateUSD * rateFactor / (isMetric ? 0.092903 : 1.0));
    const unitAreaName = isMetric ? 'M²' : 'SQ. FT.';

    // Line Item Percentages
    const costSubstructure = { min: Math.round(minTotal * 0.22), max: Math.round(maxTotal * 0.22) };
    const costSuperstructure = { min: Math.round(minTotal * 0.28), max: Math.round(maxTotal * 0.28) };
    const costEnvelope = { min: Math.round(minTotal * 0.24), max: Math.round(maxTotal * 0.24) };
    const costFinishes = { min: Math.round(minTotal * 0.18), max: Math.round(maxTotal * 0.18) };
    const costGeneral = { min: Math.round(minTotal * 0.08), max: Math.round(maxTotal * 0.08) };

    const fmtMoney = (val) => \`\${currencySym}\${val.toLocaleString()}\`;

    // Render Line Items
    if (this.lineSubstructureAmount) {
      this.lineSubstructureAmount.textContent = \`\${fmtMoney(costSubstructure.min)} — \${fmtMoney(costSubstructure.max)}\`;
    }
    if (this.lineSubstructureDetail) {
      const volText = isMetric ? \`\${concreteCuM.toLocaleString()} m³\` : \`\${concreteCuYds.toLocaleString()} cu. yd.\`;
      this.lineSubstructureDetail.textContent = \`\${volText} 70 MPa self-consolidating pozzolan concrete + \${tiebackCount} Dywidag rock tiebacks (\${this.geotechName})\`;
    }

    if (this.lineSuperstructureAmount) {
      this.lineSuperstructureAmount.textContent = \`\${fmtMoney(costSuperstructure.min)} — \${fmtMoney(costSuperstructure.max)}\`;
    }
    if (this.lineSuperstructureDetail) {
      const steelText = isMetric ? \`\${steelMetricTonnes.toLocaleString()} tonnes\` : \`\${steelTons.toLocaleString()} tons\`;
      this.lineSuperstructureDetail.textContent = \`\${steelText} welded moment box girders (\${this.typologyName}) with ductile moment seismic connections\`;
    }

    if (this.lineEnvelopeAmount) {
      this.lineEnvelopeAmount.textContent = \`\${fmtMoney(costEnvelope.min)} — \${fmtMoney(costEnvelope.max)}\`;
    }
    if (this.lineEnvelopeDetail) {
      const areaText = isMetric ? \`\${facadeSqM.toLocaleString()} m²\` : \`\${facadeSqFt.toLocaleString()} sq. ft.\`;
      this.lineEnvelopeDetail.textContent = \`\${areaText} envelope envelope (\${this.envelopeName}) with thermally broken bronze mullions\`;
    }

    if (this.lineFinishesAmount) {
      this.lineFinishesAmount.textContent = \`\${fmtMoney(costFinishes.min)} — \${fmtMoney(costFinishes.max)}\`;
    }
    if (this.lineFinishesDetail) {
      this.lineFinishesDetail.textContent = \`Artisanal guild execution: \${this.finishesName} with custom foundry bronze castings\`;
    }

    if (this.lineGeneralAmount) {
      this.lineGeneralAmount.textContent = \`\${fmtMoney(costGeneral.min)} — \${fmtMoney(costGeneral.max)}\`;
    }
    if (this.lineGeneralDetail) {
      this.lineGeneralDetail.textContent = \`Site security, AIA statutory oversight, full-time superintendent, third-party laboratory pull-testing\`;
    }

    // Schedule Calculation
    const baseDuration = Math.round(14 + (sqft / 1100) + (this.geotechFactor * 3.5) + (this.activeTypology === 'typ-c' ? 5 : (this.activeTypology === 'typ-b' ? 3 : 0)));
    const durationMin = baseDuration;
    const durationMax = baseDuration + 4;

    if (this.scheduleDurationBadge) {
      this.scheduleDurationBadge.textContent = \`\${durationMin} — \${durationMax} MONTHS\`;
    }
    if (this.scheduleMilestones) {
      this.scheduleMilestones.textContent = \`Excavation: Mo 01-04 → Substructure: Mo 05-09 → Steel & Envelope: Mo 10-\${durationMin - 6} → Handover: Mo \${durationMin}-\${durationMax}\`;
    }

    // Total Banner
    if (this.totalUnitRate) {
      this.totalUnitRate.textContent = \`INDICATIVE UNIT RATE: \${fmtMoney(unitRateMin)} — \${fmtMoney(unitRateMax)} / \${unitAreaName}\`;
    }
    if (this.totalSumRange) {
      const minM = (minTotal / 1000000).toFixed(2);
      const maxM = (maxTotal / 1000000).toFixed(2);
      this.totalSumRange.textContent = \`\${currencySym}\${minM}M — \${currencySym}\${maxM}M \${currencySuffix}\`;
    }

    // Dynamic Redline AIA Feasibility Ink Stamp
    if (this.aiaStamp) {
      if (this.activeTypology === 'typ-b' && sqft < 4500) {
        this.aiaStamp.className = 'aia-feasibility-stamp';
        this.aiaStamp.innerHTML = '⚠ WARNING: EXCEEDS TYPICAL CODE SPAN // REQUIRES POST-TENSION TIEBACK PEER REVIEW';
      } else if (this.geotechFactor >= 1.45) {
        this.aiaStamp.className = 'aia-feasibility-stamp';
        this.aiaStamp.innerHTML = '⚠ HIGH-LIABILITY COASTAL WAVE BLUFF // 70 MPa POZZOLAN SEA-WALL MANDATORY';
      } else if (this.activeTypology === 'typ-c') {
        this.aiaStamp.className = 'aia-feasibility-stamp approved';
        this.aiaStamp.innerHTML = '✓ SUB-GRADE HYDROSTATIC SEAL VERIFIED // DUAL-HULL WATERPROOFING PROTOCOL';
      } else {
        this.aiaStamp.className = 'aia-feasibility-stamp approved';
        this.aiaStamp.innerHTML = '✓ AIA DOCUMENT B101 COMPLIANT // TENDER FEASIBILITY CERTIFIED';
      }
    }

    // Update Perforated Slip Summary
    if (this.tearSummaryDetails) {
      const areaSummary = isMetric ? \`\${sqMeters.toLocaleString()} M²\` : \`\${sqft.toLocaleString()} SQ. FT.\`;
      const budgetSummary = \`\${currencySym}\${(minTotal/1000000).toFixed(1)}M — \${currencySym}\${(maxTotal/1000000).toFixed(1)}M \${currencySuffix}\`;
      this.tearSummaryDetails.textContent = \`FOOTPRINT: \${areaSummary} • TYPOLOGY: \${this.typologyName.toUpperCase()} • GEOLOGY: \${this.geotechFactor.toFixed(2)}× • ESTIMATE: \${budgetSummary}\`;
    }
  }

  /* ------------------------------------------------------------------------
     6. Perforated "Tear-Off" Slip & Transmit Action
     ------------------------------------------------------------------------ */
  initTearOffSlip() {
    if (!this.btnTearTransmit) return;

    this.btnTearTransmit.addEventListener('click', (e) => {
      e.preventDefault();

      if (this.audio) {
        this.audio.playPaperSlide();
        setTimeout(() => this.audio.playStampSlam(), 200);
      }

      // Animate tear-off
      if (this.tearOffCard) {
        this.tearOffCard.classList.add('tearing');
      }

      // Package payload for Commission Liaison (contact.html)
      const isMetric = (this.unitSystem === 'metric');
      const payload = {
        sqft: this.footprintSqFt,
        sqMeters: Math.round(this.footprintSqFt * 0.092903),
        unitSystem: this.unitSystem,
        geotechFactor: this.geotechFactor,
        typology: this.activeTypology,
        typologyName: this.typologyName,
        envelope: this.activeEnvelope,
        finishes: this.activeFinishes,
        timestamp: new Date().toISOString()
      };

      try {
        sessionStorage.setItem('anscons_tender_estimate', JSON.stringify(payload));
      } catch (err) {
        console.warn('Session storage write failed:', err);
      }

      // Dispatch to contact.html with query parameters after 650ms animation
      setTimeout(() => {
        const queryParams = new URLSearchParams({
          sqft: this.footprintSqFt,
          typology: this.activeTypology,
          geotech: this.geotechFactor,
          units: this.unitSystem
        });
        window.location.href = \`contact.html?\${queryParams.toString()}\`;
      }, 650);
    });
  }
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const deskAudio = new DeskAudio();
  new DeskToolsController(deskAudio);
  new LegalSpecsController();
  new EstimatorController(deskAudio);
});
`;

fs.writeFileSync('js/estimator.js', jsContent, 'utf8');
console.log('Successfully written js/estimator.js! Total bytes:', jsContent.length);

