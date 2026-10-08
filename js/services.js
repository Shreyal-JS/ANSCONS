/**
 * ANSCONS Services & Engineering Disciplines Controller (services.js)
 * Coordinates the Blueprint Scope Deck, Construction Anatomy Cutaway,
 * Phase Gantt Roller, and Swatch Tray Drawer.
 */

import { deskAudio } from './audio.js';
import { DeskToolsController } from './desk-tools.js';
import { LegalSpecsController } from './legal-specs.js';

// Construction Anatomy Layers Database
const ANATOMY_LAYERS = {
  '1': {
    tag: 'LAYER 01 // SUBSTRUCTURE & GEOLOGY',
    heading: 'Bedrock Pinning & Post-Tensioned Foundations',
    narrative: 'Deep micro-piles drilled directly into solid bedrock formations up to 28 meters sub-grade. Foundation grade beams are reinforced with post-tensioned Dywidag alloy rods, eliminating unreinforced differential settlement across seismic faultlines.',
    formulaTitle: 'BEARING CAPACITY & UPLIFT MOMENT',
    formulaCode: 'q_allow = 1,450 kN/m² // T_ult = 3,200 kN',
    formulaDesc: 'Factor of safety FS = 3.5 across all bedrock tieback clusters.'
  },
  '2': {
    tag: 'LAYER 02 // SUPERSTRUCTURE & STEEL',
    heading: 'Heavy W-Flange Cantilever Moment Frames',
    narrative: 'Full-penetration welded ductile moment connections engineered for 18-meter column-free residential living pavilions. Steel members receive shop-applied zinc silicate corrosion inhibitors prior to site erection.',
    formulaTitle: 'CANTILEVER MOMENT & DEFLECTION LIMIT',
    formulaCode: 'M_u = 1,840 kNm // Δ_max ≤ L / 1000',
    formulaDesc: 'Zero noticeable spring deflection under full live dead-load envelope.'
  },
  '3': {
    tag: 'LAYER 03 // BUILDING ENVELOPE & BARRIER',
    heading: 'Continuous Air-Tightness & Thermal Breaks',
    narrative: 'A continuous, uninterrupted weather-resistive barrier (WRB) combined with aerogel thermal isolation shims at all steel-to-exterior penetrations. Prevents thermal bridging and interstitial condensation.',
    formulaTitle: 'THERMAL TRANSMITTANCE & AIR PERMEANCE',
    formulaCode: 'U_eff = 0.11 W/m²K // q_50 ≤ 0.4 ACH',
    formulaDesc: 'Surpasses Passive House airtightness standards by 35%.'
  },
  '4': {
    tag: 'LAYER 04 // ACOUSTIC COMFORT & STONE',
    heading: 'Floating Sprung Floors & Dry-Joint Stone Reveals',
    narrative: 'Sub-floors isolated on elastomeric spring-damper mounts delivering an NC-15 ambient noise floor. Monolithic stone reveals are anchored with concealed 316-stainless brackets allowing millimetric thermal expansion.',
    formulaTitle: 'NOISE CRITERIA & IMPACT TRANSMISSION',
    formulaCode: 'STC 68 // IIC 72 // Dry Tolerance ±0.2 mm',
    formulaDesc: 'Absolute decoupling of mechanical vibration, footfall, and exterior noise.'
  }
};

// Commission Phase Gantt Database
const GANTT_PHASES = {
  'phase-1': {
    heading: 'Phase I: Subsurface Geology & Geodetic Surveying',
    desc: 'Pre-construction diamond core drilling, sonic shear wave testing, 3D topographical lidar scanning, and environmental hydrology mapping to establish immutable bedrock coordinates.',
    gates: [
      'Geotechnical Core Sampling & Soil Load Certification',
      'Millimetric Sub-Grade Laser Boundary Mapping',
      'Structural Engineering Peer-Review Approval'
    ]
  },
  'phase-2': {
    heading: 'Phase II: Structural Rough & Heavy Tectonics',
    desc: 'Excavation of foundation caissons, insertion of post-tensioned high-tensile anchor rods, monolithic concrete mat pours, and heavy W-flange structural steel erection.',
    gates: [
      'Concrete Slump & 28-Day Compression Testing (65 MPa)',
      'Ultrasonic Weld Flaw Detection on All Moment Joints',
      'Anchor Bolt Pull-Out Verification'
    ]
  },
  'phase-3': {
    heading: 'Phase III: Architectural Envelope & Guild Enclosure',
    desc: 'Installation of custom triple-glazed structural curtain walls, ventilated rainscreen stone sub-frames, and continuous self-adhering vapor and air membranes.',
    gates: [
      'ASTM E783 & E1105 Air/Water Infiltration Pressure Tests',
      'Infrared Thermographic Thermal Bridging Scan',
      'Acoustic Perimeter Seal Decibel Verification'
    ]
  },
  'phase-4': {
    heading: 'Phase IV: Atelier Joinery & Bespoke Finishes',
    desc: 'Deployment of in-house foundry bronze fittings, installation of charred yakisugi wood panels, bookmatched Italian marble slabs, and custom French-polished millwork.',
    gates: [
      '0.5mm Guild Tolerance Verification on All Reveals',
      'HVAC Plenum Balancing to Quiet NC-15 Specification',
      'Hand-Raking Light Inspection of Finished Surfaces'
    ]
  },
  'phase-5': {
    heading: 'Phase V: Archival Turnover & 250-Year Deed Vault',
    desc: 'Formal building commissioning, air-purification burn-in, and delivery of the archival steel deed vault containing hand-drawn as-built blueprints, material provenance passports, and lifetime maintenance protocols.',
    gates: [
      'Certificate of Occupancy & Statutory Sign-Offs',
      'Archival Linen Blueprint Documentation Set Handover',
      '250-Year Structural Longevity Warranty Enactment'
    ]
  }
};

class ServicesPageController {
  constructor() {
    this.initScopeDeck();
    this.initConstructionAnatomy();
    this.initProcessGantt();
    this.initSwatchTray();
    this.initAddendumModal();
  }

  // 1. Blueprint Scope Deck Tabs
  initScopeDeck() {
    const tabs = document.querySelectorAll('.scope-tab-button');
    const cards = document.querySelectorAll('.scope-folio-card');

    if (!tabs.length || !cards.length) return;

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const targetId = tab.getAttribute('data-scope');

        tabs.forEach(t => t.classList.remove('active'));
        cards.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        const targetCard = document.getElementById(targetId);
        if (targetCard) {
          targetCard.classList.add('active');
        }

        deskAudio.playSwitchClick();
      });
    });
  }

  // 2. Construction Anatomy Layer Cutaway
  initConstructionAnatomy() {
    const pins = document.querySelectorAll('.depth-pin');
    const rotaryBtns = document.querySelectorAll('.rotary-button');
    const svgLayers = document.querySelectorAll('.cutaway-layer');
    const layerTag = document.getElementById('anatomy-layer-tag');
    const layerHeading = document.getElementById('anatomy-layer-heading');
    const layerNarrative = document.getElementById('anatomy-layer-narrative');
    const formulaTitle = document.getElementById('redline-formula-title');
    const formulaCode = document.getElementById('redline-formula-code');
    const formulaDesc = document.getElementById('redline-formula-desc');

    const setLayer = (layerNum) => {
      const data = ANATOMY_LAYERS[layerNum];
      if (!data) return;

      // Update pins & buttons
      pins.forEach(p => p.classList.toggle('active', p.getAttribute('data-layer') === layerNum));
      rotaryBtns.forEach(b => b.classList.toggle('active', b.getAttribute('data-layer') === layerNum));

      // Update SVG layer highlighting
      svgLayers.forEach(l => {
        const lNum = l.getAttribute('data-layer');
        if (lNum === layerNum) {
          l.classList.add('active');
          l.classList.remove('dimmed');
        } else {
          l.classList.remove('active');
          l.classList.add('dimmed');
        }
      });

      // Update technical note card
      if (layerTag) layerTag.textContent = data.tag;
      if (layerHeading) layerHeading.textContent = data.heading;
      if (layerNarrative) layerNarrative.textContent = data.narrative;
      if (formulaTitle) formulaTitle.textContent = data.formulaTitle;
      if (formulaCode) formulaCode.textContent = data.formulaCode;
      if (formulaDesc) formulaDesc.textContent = data.formulaDesc;

      deskAudio.playSwitchClick();
    };

    pins.forEach(pin => {
      pin.addEventListener('click', () => {
        setLayer(pin.getAttribute('data-layer'));
      });
    });

    rotaryBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        setLayer(btn.getAttribute('data-layer'));
      });
    });

    svgLayers.forEach(layer => {
      layer.addEventListener('click', () => {
        setLayer(layer.getAttribute('data-layer'));
      });
    });
  }

  // 3. Commission Phase Gantt Controller
  initProcessGantt() {
    const nodes = document.querySelectorAll('.gantt-phase-node');
    const inspectorHeading = document.getElementById('phase-inspector-heading');
    const inspectorDesc = document.getElementById('phase-inspector-desc');
    const gatesList = document.getElementById('phase-gates-list');

    if (!nodes.length || !inspectorHeading || !inspectorDesc) return;

    nodes.forEach(node => {
      node.addEventListener('click', () => {
        const phaseKey = node.getAttribute('data-phase');
        const data = GANTT_PHASES[phaseKey];

        if (!data) return;

        nodes.forEach(n => n.classList.remove('active'));
        node.classList.add('active');

        inspectorHeading.textContent = data.heading;
        inspectorDesc.textContent = data.desc;

        if (gatesList) {
          gatesList.innerHTML = data.gates.map(gate => `
            <div class="phase-gate-badge">✓ ${gate}</div>
          `).join('');
        }

        deskAudio.playSwitchClick();
      });
    });
  }

  // 4. Field Sample Swatch Tray Drawer
  initSwatchTray() {
    const swatchItems = document.querySelectorAll('.swatch-item-card');

    swatchItems.forEach(item => {
      item.addEventListener('click', () => {
        swatchItems.forEach(s => s.classList.remove('active'));
        item.classList.add('active');
        deskAudio.playSwitchClick();
      });
    });
  }

  // 5. Technical Service Addendum Request Button
  initAddendumModal() {
    const btn = document.getElementById('btn-request-dossier');
    if (!btn) return;

    btn.addEventListener('click', () => {
      deskAudio.playSwitchClick();
      alert('🏛️ ANSCONS TECHNICAL SPECIFICATION DOSSIER:\n\nA comprehensive 120-page confidential engineering scope document (PDF format, Class A General Building Specifications) has been prepared.\n\nPlease proceed to DOC 06 LIAISON to execute your direct architectural tender submission.');
    });
  }
}

// Master DOM Ready Coordinator for Services Page
document.addEventListener('DOMContentLoaded', () => {
  // Initialize desk controls (theme switch, audio mute, return-to-origin, sticky docked nav)
  new DeskToolsController(deskAudio);

  // Initialize legal spec sheets tucked under mat
  new LegalSpecsController(deskAudio);

  // Initialize services page interactive features
  new ServicesPageController();

  console.log('🏛️ ANSCONS Master Builder Work-Order Folio initialized.');
});

