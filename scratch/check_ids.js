const fs = require('fs');
const html = fs.readFileSync('d:/Disk - D/Shryl/ANSCONS/estimator.html', 'utf8');

const expectedIds = [
  'btn-return-origin',
  'desk-audio-toggle',
  'audio-status-badge',
  'brass-theme-lever',
  'label-mode-studio',
  'brass-toggle-bat',
  'label-mode-blueprint',
  'unit-switch-plate',
  'label-unit-imperial',
  'label-unit-metric',
  'caliper-slider-input',
  'master-sliding-jaw',
  'caliper-footprint-value',
  'vernier-index-mark',
  'bezel-rotating-knob',
  'bezel-center-cap',
  'bom-doc-code',
  'bom-date-stamp',
  'line-substructure-amount',
  'line-substructure-detail',
  'line-superstructure-amount',
  'line-superstructure-detail',
  'line-envelope-amount',
  'line-envelope-detail',
  'line-finishes-amount',
  'line-finishes-detail',
  'line-general-amount',
  'line-general-detail',
  'schedule-milestones-text',
  'schedule-duration-badge',
  'total-unit-rate',
  'total-sum-range',
  'aia-feasibility-stamp',
  'bom-tear-off-card',
  'tear-summary-details',
  'btn-tear-and-transmit',
  // Legal spec modal IDs
  'spec-modal-overlay',
  'spec-modal-close-btn',
  'modal-spec-code',
  'modal-spec-title',
  'modal-spec-classification',
  'modal-spec-body',
  'modal-spec-ref'
];

let missing = [];
for (const id of expectedIds) {
  if (!html.includes(`id="${id}"`)) {
    missing.push(id);
  }
}

console.log('Missing IDs:', missing);
console.log('Total checked:', expectedIds.length);

