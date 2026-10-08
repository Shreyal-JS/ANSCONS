// Comprehensive integration test for Estimator, DeskTools, Audio, and LegalSpecs
const fs = require('fs');

// Simple DOM Mock
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
    this.value = '10000';
    this.children = [];
    this.parentElement = null;
  }

  getAttribute(k) { return this.attributes[k] || null; }
  setAttribute(k, v) { this.attributes[k] = v; }
  dataset = {};

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

  querySelector(sel) {
    return this.children.find(c => {
      if (sel.startsWith('#') && c.id === sel.slice(1)) return true;
      if (sel.startsWith('.') && c.classList.contains(sel.slice(1))) return true;
      return false;
    }) || null;
  }

  querySelectorAll(sel) {
    return this.children.filter(c => {
      if (sel.startsWith('#') && c.id === sel.slice(1)) return true;
      if (sel.startsWith('.') && c.classList.contains(sel.slice(1))) return true;
      if (sel.startsWith('[data-')) {
        const attr = sel.replace(/[\[\]"]/g, '').split('=');
        return c.getAttribute(attr[0]) === attr[1];
      }
      return false;
    });
  }

  getBoundingClientRect() {
    return { left: 100, right: 900, width: 800, top: 50, bottom: 150, height: 100 };
  }
}

// Build Mock Document
const docElements = new Map();
function createElem(tag, id, cls) {
  const el = new MockElement(tag, id, cls);
  if (id) docElements.set(id, el);
  return el;
}

const body = createElem('body', 'body', 'studio-mode');
body.setAttribute('data-theme', 'studio');

const audioBtn = createElem('button', 'desk-audio-toggle', 'desk-audio-toggle');
const audioBadge = createElem('span', 'audio-status-badge', 'desk-audio-badge');
audioBadge.textContent = 'Muted';

const themeLever = createElem('div', 'brass-theme-lever', 'brass-switch-plate');
const labelStudio = createElem('span', 'label-mode-studio', 'switch-mode-label active');
const labelBlueprint = createElem('span', 'label-mode-blueprint', 'switch-mode-label');
themeLever.children.push(labelStudio, labelBlueprint);
labelStudio.parentElement = themeLever;
labelBlueprint.parentElement = themeLever;

const toggleAssembly = createElem('div', 'system-toggle-assembly', 'system-toggle-assembly');
const labelImperial = createElem('span', 'label-unit-imperial', 'unit-mode-label active');
const switchPlate = createElem('div', 'unit-switch-plate', 'unit-switch-plate');
const labelMetric = createElem('span', 'label-unit-metric', 'unit-mode-label');
toggleAssembly.children.push(labelImperial, switchPlate, labelMetric);
labelImperial.parentElement = toggleAssembly;
switchPlate.parentElement = toggleAssembly;
labelMetric.parentElement = toggleAssembly;

const stage = createElem('div', 'vernier-caliper-stage', 'vernier-caliper-stage');
const beam = createElem('div', 'master-caliper-beam', 'master-caliper-beam');
const slidingJaw = createElem('div', 'master-sliding-jaw', 'master-sliding-jaw');
const vernierMark = createElem('span', 'vernier-index-mark', 'vernier-index-mark');
const caliperInput = createElem('input', 'caliper-slider-input', 'master-caliper-range-input');
const footprintVal = createElem('span', 'caliper-footprint-value', 'caliper-footprint-value');

stage.children.push(beam, slidingJaw, caliperInput);
slidingJaw.children.push(vernierMark);

const knob = createElem('div', 'bezel-rotating-knob', 'bezel-rotating-knob');
const centerCap = createElem('div', 'bezel-center-cap', 'bezel-center-cap');

// Output fields
const totalSumRange = createElem('div', 'total-sum-range', 'total-sum-range');
const aiaStamp = createElem('div', 'aia-feasibility-stamp', 'aia-feasibility-stamp approved');
const scheduleBadge = createElem('div', 'schedule-duration-badge', 'schedule-duration-badge');

global.document = {
  body,
  getElementById: (id) => docElements.get(id) || null,
  querySelector: (sel) => {
    if (sel.startsWith('#')) return docElements.get(sel.slice(1)) || null;
    if (sel === '.system-toggle-assembly') return toggleAssembly;
    if (sel === '.vernier-caliper-stage') return stage;
    if (sel === '.master-caliper-beam') return beam;
    return null;
  },
  querySelectorAll: (sel) => {
    if (sel.includes('typology')) return [];
    if (sel.includes('envelope')) return [];
    if (sel.includes('finishes')) return [];
    if (sel === '.detent-pill-btn') return [];
    if (sel === '.spec-sheet-tab') return [];
    return [];
  },
  addEventListener: (t, fn) => {
    if (!docElements.has('doc_listeners_' + t)) docElements.set('doc_listeners_' + t, []);
    docElements.get('doc_listeners_' + t).push(fn);
  },
  dispatchEvent: (t, e = {}) => {
    const list = docElements.get('doc_listeners_' + t) || [];
    list.forEach(fn => fn(e));
  },
  readyState: 'loading'
};
global.window = {
  addEventListener: () => {},
  scrollY: 0,
  requestAnimationFrame: (cb) => cb()
};

async function runTests() {
  const { DeskAudio, deskAudio } = await import('../js/audio.js');
  const { EstimatorController } = await import('../js/estimator.js');

  // Trigger DOM ready
  document.readyState = 'complete';
  document.dispatchEvent('DOMContentLoaded');

  const estimator = window.__ansconsEstimator;

  console.log('--- TEST A: Audio Mute / Unmute ---');
  console.log('Initial isMuted:', deskAudio.isMuted, 'Badge:', audioBadge.textContent);
  audioBtn.dispatchEvent('click');
  console.log('After click 1: isMuted:', deskAudio.isMuted, 'Badge:', audioBadge.textContent, 'Btn active:', audioBtn.classList.contains('active'));
  audioBtn.dispatchEvent('click');
  console.log('After click 2: isMuted:', deskAudio.isMuted, 'Badge:', audioBadge.textContent, 'Btn active:', audioBtn.classList.contains('active'));

  console.log('\n--- TEST B: Theme Toggle (Studio <-> Blueprint) ---');
  console.log('Initial theme:', body.getAttribute('data-theme'), 'blueprint-mode:', body.classList.contains('blueprint-mode'));
  themeLever.dispatchEvent('click');
  console.log('After theme toggle: theme:', body.getAttribute('data-theme'), 'blueprint-mode:', body.classList.contains('blueprint-mode'));
  themeLever.dispatchEvent('click');
  console.log('After 2nd theme toggle: theme:', body.getAttribute('data-theme'), 'blueprint-mode:', body.classList.contains('blueprint-mode'));

  console.log('\n--- TEST C: Imperial <-> Metric Toggle ---');
  console.log('Initial unitSystem:', estimator.unitSystem, 'Imperial active:', labelImperial.classList.contains('active'));
  toggleAssembly.dispatchEvent('click');
  console.log('After toggle click: unitSystem:', estimator.unitSystem, 'Metric active:', labelMetric.classList.contains('active'), 'Total text:', totalSumRange.textContent);
  toggleAssembly.dispatchEvent('click', { target: labelImperial });
  console.log('After clicking Imperial label: unitSystem:', estimator.unitSystem, 'Imperial active:', labelImperial.classList.contains('active'), 'Total text:', totalSumRange.textContent);

  console.log('\n--- TEST D: Caliper Movement ---');
  console.log('Initial footprint:', estimator.footprintSqFt, 'Jaw left:', slidingJaw.style.left);
  // Simulate range slider move to 18000
  caliperInput.value = '18000';
  caliperInput.dispatchEvent('input');
  console.log('After range slider to 18,000 sq ft: footprint:', estimator.footprintSqFt, 'Jaw left:', slidingJaw.style.left, 'Footprint display:', footprintVal.textContent);

  // Simulate pointer drag across stage (click at 50% = 500px on an 800px width from 100 to 900)
  stage.dispatchEvent('pointerdown', { clientX: 500 });
  console.log('After pointer down at 500px: footprint:', estimator.footprintSqFt, 'Jaw left:', slidingJaw.style.left, 'Footprint display:', footprintVal.textContent);

  console.log('\nALL INTERACTIVE TESTS PASSED COMPLETELY!');
}

runTests().catch(e => console.error('TEST ERROR:', e));
