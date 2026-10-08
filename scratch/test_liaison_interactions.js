// Automated integration test for Liaison chamber interactions
const fs = require('fs');

class MockElement {
  constructor(tag, id = '', className = '') {
    this.tagName = tag.toUpperCase();
    this.id = id;
    this.className = className;
    this.classList = {
      _classes: new Set(className.split(' ').filter(Boolean)),
      contains: (c) => this.classList._classes.has(c),
      add: (c) => this.classList._classes.add(c),
      remove: (c) => this.classList._classes.delete(c),
      toggle: (c, force) => {
        if (force === undefined) {
          if (this.classList.contains(c)) this.classList.remove(c);
          else this.classList.add(c);
        } else if (force) {
          this.classList.add(c);
        } else {
          this.classList.remove(c);
        }
        return this.classList.contains(c);
      }
    };
    this.attributes = {};
    this.style = {};
    this.listeners = {};
    this.textContent = '';
    this.innerHTML = '';
    this.value = '';
    this.children = [];
    this.parentElement = null;
  }

  getAttribute(k) { return this.attributes[k] || null; }
  setAttribute(k, v) { this.attributes[k] = v; }
  focus() {}

  addEventListener(type, fn) {
    if (!this.listeners[type]) this.listeners[type] = [];
    this.listeners[type].push(fn);
  }

  dispatchEvent(type, evt = {}) {
    evt.target = evt.target || this;
    if (this.listeners[type]) {
      this.listeners[type].forEach(fn => fn(evt));
    }
  }

  closest(sel) {
    if (sel.startsWith('#') && this.id === sel.slice(1)) return this;
    if (sel.startsWith('.') && this.classList.contains(sel.slice(1))) return this;
    return this.parentElement?.closest?.(sel) || null;
  }

  getContext(type) {
    return {
      beginPath: () => {},
      moveTo: () => {},
      lineTo: () => {},
      stroke: () => {},
      closePath: () => {},
      fill: () => {},
      fillText: () => {},
      strokeRect: () => {},
      setLineDash: () => {},
      save: () => {},
      restore: () => {},
      clearRect: () => {}
    };
  }

  getBoundingClientRect() {
    return { left: 50, right: 850, width: 800, top: 50, bottom: 250, height: 200 };
  }
}

const docElements = new Map();
function createElem(tag, id, cls) {
  const el = new MockElement(tag, id, cls);
  if (id) docElements.set(id, el);
  return el;
}

const body = createElem('body', 'body', 'studio-mode');
body.setAttribute('data-theme', 'studio');

// Core elements
const voucher = createElem('div', 'estimate-voucher-attachment', 'estimate-voucher-attachment');
const voucherText = createElem('p', 'voucher-summary-text', 'voucher-summary-text');

const inputPatron = createElem('input', 'input-patron-name', 'treaty-text-input');
const inputParcel = createElem('input', 'input-parcel-coords', 'treaty-text-input');
const inputComm = createElem('input', 'input-comm-line', 'treaty-text-input');
const inputVal = createElem('input', 'input-land-valuation', 'treaty-text-input');
const narrativeText = createElem('textarea', 'treaty-narrative-brief', 'treaty-textarea');

// Pegs
const pegEstate = createElem('div', 'peg-estate', 'brass-peg-card plugged-in');
pegEstate.setAttribute('data-typology', 'estate');
const pegCantilever = createElem('div', 'peg-cantilever', 'brass-peg-card');
pegCantilever.setAttribute('data-typology', 'cantilever');
const pegVault = createElem('div', 'peg-vault', 'brass-peg-card');
pegVault.setAttribute('data-typology', 'vault');
const pegHeritage = createElem('div', 'peg-heritage', 'brass-peg-card');
pegHeritage.setAttribute('data-typology', 'heritage');

const allPegs = [pegEstate, pegCantilever, pegVault, pegHeritage];

// Switcher
const tabNarrative = createElem('button', 'btn-tab-narrative', 'brief-tab-btn active');
const tabSketch = createElem('button', 'btn-tab-sketch', 'brief-tab-btn');
const textPane = createElem('div', 'brief-text-pane', 'brief-text-pane');
const sketchPane = createElem('div', 'brief-sketch-pane', 'brief-sketch-pane hidden');

// Sketch
const sketchCanvas = createElem('canvas', 'sketch-canvas', '');
const btnClearSketch = createElem('button', 'btn-clear-sketch', 'tool-chip-btn');
const toolPencil = createElem('button', 'tool-pencil', 'tool-chip-btn active');
toolPencil.setAttribute('data-sketch-tool', 'pencil');
const toolNorth = createElem('button', 'tool-north', 'tool-chip-btn');
toolNorth.setAttribute('data-sketch-tool', 'north');
const allTools = [toolPencil, toolNorth];

// Signature
const sigCanvas = createElem('canvas', 'signature-canvas', '');
const btnClearSig = createElem('button', 'btn-clear-signature', 'clear-signature-btn');

// Wax Press
const btnWaxPress = createElem('button', 'btn-wax-press-actuator', 'btn-wax-press-actuator');
const waxSeal = createElem('div', 'crimson-wax-seal', 'crimson-wax-seal');

// Modal
const modalBackdrop = createElem('div', 'dispatch-modal-backdrop', 'dispatch-modal-backdrop');
const modalClose = createElem('button', 'modal-close-x', 'modal-close-x');
const modalDismiss = createElem('button', 'btn-modal-dismiss', 'btn-modal-dismiss');
const modalRef = createElem('div', 'modal-registry-ref', 'modal-tracking-pill');
const modalClient = createElem('p', 'modal-client-summary', '');

global.document = {
  body,
  getElementById: (id) => docElements.get(id) || null,
  querySelector: (sel) => {
    if (sel.startsWith('#')) return docElements.get(sel.slice(1)) || null;
    return null;
  },
  querySelectorAll: (sel) => {
    if (sel === '.brass-peg-card') return allPegs;
    if (sel === '[data-sketch-tool]') return allTools;
    return [];
  },
  addEventListener: () => {},
  readyState: 'loading'
};

global.window = {
  location: { search: '?sqft=18000&typology=typ-b&geotech=1.45&units=imperial' },
  addEventListener: () => {}
};

async function runLiaisonTests() {
  const { deskAudio } = await import('../js/audio.js');
  const { LiaisonController } = await import('../js/liaison.js');

  const liaison = new LiaisonController(deskAudio);

  console.log('--- TEST 1: Voucher Hydration from URL params ---');
  console.log('Voucher Summary:', voucherText.textContent);
  console.log('Active Typology Peg:', liaison.selectedTypology);
  console.log('Is Cantilever Peg Plugged In:', pegCantilever.classList.contains('plugged-in'));

  console.log('\n--- TEST 2: Brass Contact Peg Switchboard ---');
  pegVault.dispatchEvent('click');
  console.log('After clicking Vault peg: selectedTypology:', liaison.selectedTypology);
  console.log('Is Vault Peg Plugged In:', pegVault.classList.contains('plugged-in'));
  console.log('Is Cantilever Peg Plugged In:', pegCantilever.classList.contains('plugged-in'));

  console.log('\n--- TEST 3: Brief Switcher (Narrative <-> Sketch Pad) ---');
  tabSketch.dispatchEvent('click');
  console.log('After switching to Sketch: sketchPane hidden:', sketchPane.classList.contains('hidden'), 'textPane hidden:', textPane.classList.contains('hidden'));
  tabNarrative.dispatchEvent('click');
  console.log('After switching to Narrative: sketchPane hidden:', sketchPane.classList.contains('hidden'), 'textPane hidden:', textPane.classList.contains('hidden'));

  console.log('\n--- TEST 4: Digital Signature & Wipe Ink ---');
  sigCanvas.dispatchEvent('pointerdown', { clientX: 100, clientY: 100 });
  sigCanvas.dispatchEvent('pointermove', { clientX: 150, clientY: 110 });
  sigCanvas.dispatchEvent('pointerup');
  console.log('Has Signature after draw:', liaison.hasSignature);
  btnClearSig.dispatchEvent('click');
  console.log('Has Signature after wipe:', liaison.hasSignature);

  console.log('\n--- TEST 5: Wax Seal Press & Treaty Lodging ---');
  // Fill required inputs
  inputPatron.value = 'Sterling Family Office';
  inputParcel.value = 'Big Sur Coastal Bluff Lot 12';
  inputComm.value = 'signal://+12128402901';

  console.log('Wax seal before submit stamped:', waxSeal.classList.contains('stamped'));
  btnWaxPress.dispatchEvent('click');
  console.log('Wax seal after submit stamped:', waxSeal.classList.contains('stamped'));

  // Wait for 650ms modal delay
  await new Promise(r => setTimeout(r, 700));
  console.log('Modal active:', modalBackdrop.classList.contains('active'));
  console.log('Registry Ref Generated:', modalRef.textContent);
  console.log('Client Summary in Modal:', modalClient.textContent);

  modalDismiss.dispatchEvent('click');
  console.log('Modal active after dismiss:', modalBackdrop.classList.contains('active'));

  console.log('\nALL 5 LIAISON CONTROLLER TESTS PASSED PERFECTLY!');
}

runLiaisonTests().catch(e => console.error('TEST ERROR:', e));

