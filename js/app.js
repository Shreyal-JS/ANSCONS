/**
 * ANSCONS Architecture & Bespoke Construction
 * Master Application Coordinator
 */

import { deskAudio } from './audio.js';
import { PortfolioController } from './portfolio.js';
import { CaliperEstimator } from './caliper.js';
import { CommissionFormController } from './commission-form.js';
import { DeskToolsController } from './desk-tools.js';
import { LegalSpecsController } from './legal-specs.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize desk controls (lever, mute button, scrollspy)
  new DeskToolsController(deskAudio);

  // Initialize 3D leather portfolio folio
  new PortfolioController(deskAudio);

  // Initialize architectural sliding vernier caliper estimator
  new CaliperEstimator(deskAudio);

  // Initialize commissioning work order form & mechanical stamp
  new CommissionFormController(deskAudio);

  // Initialize architectural document index & legal spec sheets
  new LegalSpecsController(deskAudio);

  console.log('🏛️ ANSCONS Master Drafting Table initialized. Dynamic lighting active.');
});

