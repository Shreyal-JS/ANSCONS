/**
 * ANSCONS DOC 06: Architectural Commission Registry & Dispatch Controller
 * Skeuomorphic dispatch folio, brass contact pegs, interactive sketch canvas,
 * digital fountain pen signature pad, and mechanical wax press actuator.
 */

import { deskAudio } from './audio.js';
import { DeskToolsController } from './desk-tools.js';
import { LegalSpecsController } from './legal-specs.js';

export class LiaisonController {
  constructor(audioInstance) {
    this.audio = audioInstance || deskAudio;

    // 1. Voucher & Continuity Elements
    this.voucherCard = document.getElementById('estimate-voucher-attachment');
    this.voucherSummaryText = document.getElementById('voucher-summary-text');

    // 2. Form Inputs
    this.inputPatron = document.getElementById('input-patron-name');
    this.inputParcel = document.getElementById('input-parcel-coords');
    this.inputCommLine = document.getElementById('input-comm-line');
    this.inputValuation = document.getElementById('input-land-valuation');
    this.narrativeText = document.getElementById('treaty-narrative-brief');

    // 3. Brass Contact Pegs
    this.pegCards = document.querySelectorAll('.brass-peg-card');
    this.selectedTypology = 'estate';

    // 4. Dual-Mode Brief Switcher
    this.tabNarrativeBtn = document.getElementById('btn-tab-narrative');
    this.tabSketchBtn = document.getElementById('btn-tab-sketch');
    this.textPane = document.getElementById('brief-text-pane');
    this.sketchPane = document.getElementById('brief-sketch-pane');

    // 5. Sketch Canvas & Tools
    this.sketchCanvas = document.getElementById('sketch-canvas');
    this.sketchCtx = this.sketchCanvas?.getContext('2d');
    this.currentSketchTool = 'pencil'; // 'pencil', 'north', 'bluff', 'axis', 'pavilion'
    this.currentStrokeWidth = 2;
    this.isSketching = false;
    this.toolChipBtns = document.querySelectorAll('[data-sketch-tool]');
    this.btnClearSketch = document.getElementById('btn-clear-sketch');

    // 6. Fountain Pen Signature Pad
    this.sigCanvas = document.getElementById('signature-canvas');
    this.sigCtx = this.sigCanvas?.getContext('2d');
    this.isSigning = false;
    this.hasSignature = false;
    this.btnClearSig = document.getElementById('btn-clear-signature');

    // 7. Wax Seal Press Actuator & Modal
    this.btnWaxPress = document.getElementById('btn-wax-press-actuator');
    this.crimsonWaxSeal = document.getElementById('crimson-wax-seal');
    this.modalBackdrop = document.getElementById('dispatch-modal-backdrop');
    this.modalCloseBtn = document.getElementById('modal-close-x');
    this.modalDismissBtn = document.getElementById('btn-modal-dismiss');
    this.modalRefCode = document.getElementById('modal-registry-ref');
    this.modalClientSummary = document.getElementById('modal-client-summary');

    if (typeof window !== 'undefined') {
      window.__ansconsLiaison = this;
    }

    this.init();
  }

  init() {
    this.hydrateEstimateVoucher();
    this.initBrassPegs();
    this.initBriefSwitcher();
    this.initSketchCanvas();
    this.initSignaturePad();
    this.initWaxPress();
    this.initModalEvents();
  }

  /* ------------------------------------------------------------------------
     1. Pre-Filled Estimate Voucher Hydration (DOC 05 Continuity)
     ------------------------------------------------------------------------ */
  hydrateEstimateVoucher() {
    let payload = null;

    // Check sessionStorage first
    try {
      const stored = sessionStorage.getItem('anscons_tender_estimate');
      if (stored) payload = JSON.parse(stored);
    } catch (_) {}

    // Fallback to URL Query Params
    if (!payload && typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.has('sqft')) {
        payload = {
          sqft: parseInt(params.get('sqft'), 10),
          typology: params.get('typology') || 'typ-a',
          geotechFactor: parseFloat(params.get('geotech')) || 1.0,
          unitSystem: params.get('units') || 'imperial'
        };
      }
    }

    if (payload && this.voucherSummaryText) {
      const isMetric = payload.unitSystem === 'metric';
      const area = isMetric 
        ? `${Math.round(payload.sqft * 0.092903).toLocaleString()} M²` 
        : `${payload.sqft.toLocaleString()} SQ. FT.`;
      
      const typMap = {
        'typ-a': 'MONOLITHIC SLAB',
        'typ-b': 'CANTILEVER MOMENT FRAME',
        'typ-c': 'SUBTERRANEAN VAULT'
      };
      const typName = typMap[payload.typology] || 'CERTIFIED TECTONIC SPEC';

      this.voucherSummaryText.textContent = `ATTACHED ESTIMATE: ${area} // ${typName} // CALIBRATED PARAMETRIC TENDER RANGE`;

      // Pre-select matching brass peg
      if (payload.typology === 'typ-b') this.activatePeg('cantilever');
      else if (payload.typology === 'typ-c') this.activatePeg('vault');
      else this.activatePeg('estate');
    }
  }

  /* ------------------------------------------------------------------------
     2. Tactile Brass Contact Pegs (Typology Switchboard)
     ------------------------------------------------------------------------ */
  initBrassPegs() {
    this.pegCards.forEach(card => {
      card.addEventListener('click', () => {
        const typ = card.getAttribute('data-typology');
        this.activatePeg(typ);
        if (this.audio) this.audio.playBrassClick();
      });
    });
  }

  activatePeg(typologyKey) {
    this.selectedTypology = typologyKey;
    this.pegCards.forEach(card => {
      const matches = (card.getAttribute('data-typology') === typologyKey);
      card.classList.toggle('plugged-in', matches);
    });
  }

  /* ------------------------------------------------------------------------
     3. Dual-Mode Brief Switcher (Narrative vs Site Sketch)
     ------------------------------------------------------------------------ */
  initBriefSwitcher() {
    if (!this.tabNarrativeBtn || !this.tabSketchBtn) return;

    this.tabNarrativeBtn.addEventListener('click', () => {
      this.tabNarrativeBtn.classList.add('active');
      this.tabSketchBtn.classList.remove('active');
      this.textPane?.classList.remove('hidden');
      this.sketchPane?.classList.add('hidden');
      if (this.audio) this.audio.playPaperSlide();
    });

    this.tabSketchBtn.addEventListener('click', () => {
      this.tabSketchBtn.classList.add('active');
      this.tabNarrativeBtn.classList.remove('active');
      this.textPane?.classList.add('hidden');
      this.sketchPane?.classList.remove('hidden');
      this.resizeCanvas(this.sketchCanvas);
      if (this.audio) this.audio.playPaperSlide();
    });
  }

  /* ------------------------------------------------------------------------
     4. Interactive Sketch Canvas & Topographical Waypoint Tooling
     ------------------------------------------------------------------------ */
  initSketchCanvas() {
    if (!this.sketchCanvas || !this.sketchCtx) return;

    this.resizeCanvas(this.sketchCanvas);
    window.addEventListener('resize', () => {
      this.resizeCanvas(this.sketchCanvas);
      this.resizeCanvas(this.sigCanvas);
    });

    // Tool selector buttons
    this.toolChipBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        this.toolChipBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.currentSketchTool = btn.getAttribute('data-sketch-tool');
        if (this.audio) this.audio.playSwitchClick();
      });
    });

    // Clear Canvas
    if (this.btnClearSketch) {
      this.btnClearSketch.addEventListener('click', () => {
        this.clearCanvas(this.sketchCanvas, this.sketchCtx);
        if (this.audio) this.audio.playPaperSlide();
      });
    }

    let lastX = 0;
    let lastY = 0;

    const startDraw = (e) => {
      const rect = this.sketchCanvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      if (this.currentSketchTool === 'pencil') {
        this.isSketching = true;
        lastX = x;
        lastY = y;
      } else {
        // Stamp waypoint
        this.stampWaypoint(x, y, this.currentSketchTool);
      }
    };

    const draw = (e) => {
      if (!this.isSketching || this.currentSketchTool !== 'pencil') return;
      const rect = this.sketchCanvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const isBlueprint = document.body.classList.contains('blueprint-mode');
      this.sketchCtx.strokeStyle = isBlueprint ? '#64ffda' : '#2b231a';
      this.sketchCtx.lineWidth = this.currentStrokeWidth;
      this.sketchCtx.lineCap = 'round';
      this.sketchCtx.lineJoin = 'round';

      this.sketchCtx.beginPath();
      this.sketchCtx.moveTo(lastX, lastY);
      this.sketchCtx.lineTo(x, y);
      this.sketchCtx.stroke();

      lastX = x;
      lastY = y;
    };

    const stopDraw = () => {
      this.isSketching = false;
    };

    this.sketchCanvas.addEventListener('pointerdown', startDraw);
    this.sketchCanvas.addEventListener('pointermove', draw);
    this.sketchCanvas.addEventListener('pointerup', stopDraw);
    this.sketchCanvas.addEventListener('pointercancel', stopDraw);
  }

  stampWaypoint(x, y, toolType) {
    if (!this.sketchCtx) return;
    const isBlueprint = document.body.classList.contains('blueprint-mode');
    this.sketchCtx.save();
    this.sketchCtx.fillStyle = isBlueprint ? '#64ffda' : '#8c2828';
    this.sketchCtx.strokeStyle = isBlueprint ? '#64ffda' : '#8c2828';
    this.sketchCtx.lineWidth = 1.5;
    this.sketchCtx.font = '10px "Courier New", monospace';
    this.sketchCtx.textAlign = 'center';

    if (toolType === 'north') {
      // North Arrow
      this.sketchCtx.beginPath();
      this.sketchCtx.moveTo(x, y - 18);
      this.sketchCtx.lineTo(x - 6, y + 6);
      this.sketchCtx.lineTo(x, y);
      this.sketchCtx.lineTo(x + 6, y + 6);
      this.sketchCtx.closePath();
      this.sketchCtx.fill();
      this.sketchCtx.fillText('N', x, y - 22);
    } else if (toolType === 'bluff') {
      // Contour / Bluff grade mark
      this.sketchCtx.strokeRect(x - 22, y - 10, 44, 20);
      this.sketchCtx.fillText('▲ BLUFF 38°', x, y + 3);
    } else if (toolType === 'axis') {
      // Seismic axis
      this.sketchCtx.beginPath();
      this.sketchCtx.setLineDash([4, 3]);
      this.sketchCtx.moveTo(x - 30, y);
      this.sketchCtx.lineTo(x + 30, y);
      this.sketchCtx.stroke();
      this.sketchCtx.fillText('☩ SEISMIC AXIS', x, y - 8);
    } else if (toolType === 'pavilion') {
      // Living Pavilion Box
      this.sketchCtx.strokeRect(x - 26, y - 14, 52, 28);
      this.sketchCtx.fillText('⌂ PAVILION', x, y + 3);
    }

    this.sketchCtx.restore();
    if (this.audio) this.audio.playCaliperTick();
  }

  /* ------------------------------------------------------------------------
     5. Digital Fountain Pen Signature Pad
     ------------------------------------------------------------------------ */
  initSignaturePad() {
    if (!this.sigCanvas || !this.sigCtx) return;

    this.resizeCanvas(this.sigCanvas);

    if (this.btnClearSig) {
      this.btnClearSig.addEventListener('click', () => {
        this.clearCanvas(this.sigCanvas, this.sigCtx);
        this.hasSignature = false;
        if (this.audio) this.audio.playPaperSlide();
      });
    }

    let lastX = 0;
    let lastY = 0;

    const startSign = (e) => {
      this.isSigning = true;
      const rect = this.sigCanvas.getBoundingClientRect();
      lastX = e.clientX - rect.left;
      lastY = e.clientY - rect.top;
      this.hasSignature = true;
    };

    const sign = (e) => {
      if (!this.isSigning) return;
      const rect = this.sigCanvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const isBlueprint = document.body.classList.contains('blueprint-mode');
      this.sigCtx.strokeStyle = isBlueprint ? '#64ffda' : '#140e07';
      this.sigCtx.lineWidth = 2.2;
      this.sigCtx.lineCap = 'round';
      this.sigCtx.lineJoin = 'round';

      this.sigCtx.beginPath();
      this.sigCtx.moveTo(lastX, lastY);
      this.sigCtx.lineTo(x, y);
      this.sigCtx.stroke();

      lastX = x;
      lastY = y;
    };

    const stopSign = () => {
      this.isSigning = false;
    };

    this.sigCanvas.addEventListener('pointerdown', startSign);
    this.sigCanvas.addEventListener('pointermove', sign);
    this.sigCanvas.addEventListener('pointerup', stopSign);
    this.sigCanvas.addEventListener('pointercancel', stopSign);
  }

  resizeCanvas(canvas) {
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      canvas.width = rect.width;
      canvas.height = rect.height;
    }
  }

  clearCanvas(canvas, ctx) {
    if (canvas && ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  /* ------------------------------------------------------------------------
     6. Weighted Brass Stamping Lever / Hot Wax Seal Press Execution
     ------------------------------------------------------------------------ */
  initWaxPress() {
    if (!this.btnWaxPress) return;

    this.btnWaxPress.addEventListener('click', (e) => {
      e?.preventDefault?.();

      // Mechanical actuation recoil
      this.btnWaxPress.classList.add('depressed');
      setTimeout(() => this.btnWaxPress.classList.remove('depressed'), 300);

      if (this.audio) {
        this.audio.playStampSlam();
      }

      // Basic input validation
      const patronName = this.inputPatron?.value.trim();
      const commLine = this.inputCommLine?.value.trim();

      if (!patronName || !commLine) {
        if (!patronName) this.highlightInput(this.inputPatron);
        if (!commLine) this.highlightInput(this.inputCommLine);
        return;
      }

      // Stamp the crimson hot-wax seal onto the paper
      if (this.crimsonWaxSeal) {
        this.crimsonWaxSeal.classList.add('stamped');
      }

      // Generate registry confirmation
      const randomRef = 'ANS-2026-L9-' + Math.floor(1000 + Math.random() * 9000).toString(16).toUpperCase();
      if (this.modalRefCode) {
        this.modalRefCode.textContent = `REGISTRY REF: ${randomRef}`;
      }
      if (this.modalClientSummary) {
        const typNames = {
          'estate': 'GROUND-UP PRIVATE ESTATE',
          'cantilever': 'SEISMIC CANTILEVER / BLUFF COMMISSION',
          'vault': 'SUBTERRANEAN VAULT & GALLERY',
          'heritage': 'HISTORIC LANDMARK RESTORATION'
        };
        const typName = typNames[this.selectedTypology] || 'BESPOKE RESIDENTIAL MASTER BUILD';
        this.modalClientSummary.textContent = `COMMISSION LODGED BY: ${patronName.toUpperCase()} // PARCEL: ${this.inputParcel?.value.trim().toUpperCase() || 'CONFIDENTIAL'} // TYPOLOGY: ${typName}`;
      }

      // Show confirmation dispatch dialog after 600ms
      setTimeout(() => {
        if (this.modalBackdrop) {
          this.modalBackdrop.classList.add('active');
          if (this.audio) this.audio.playPaperSlide();
        }
      }, 600);
    });
  }

  highlightInput(input) {
    if (!input) return;
    input.focus();
    input.style.borderBottomColor = '#ff5252';
    input.style.backgroundColor = 'rgba(255, 82, 82, 0.15)';
    setTimeout(() => {
      input.style.borderBottomColor = '';
      input.style.backgroundColor = '';
    }, 1800);
  }

  /* ------------------------------------------------------------------------
     7. Dispatch Modal Events
     ------------------------------------------------------------------------ */
  initModalEvents() {
    const closeModal = () => {
      this.modalBackdrop?.classList.remove('active');
      if (this.audio) this.audio.playSwitchClick();
    };

    if (this.modalCloseBtn) this.modalCloseBtn.addEventListener('click', closeModal);
    if (this.modalDismissBtn) this.modalDismissBtn.addEventListener('click', closeModal);

    if (this.modalBackdrop) {
      this.modalBackdrop.addEventListener('click', (e) => {
        if (e.target === this.modalBackdrop) closeModal();
      });
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.modalBackdrop?.classList.contains('active')) {
        closeModal();
      }
    });
  }
}

// Auto-initialize on DOM ready
function initLiaison() {
  new DeskToolsController(deskAudio);
  new LegalSpecsController(deskAudio);
  new LiaisonController(deskAudio);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLiaison);
} else {
  initLiaison();
}
