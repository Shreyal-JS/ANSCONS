const fs = require('fs');

const cssContent = `/* ==========================================================================
   ANSCONS ARCHITECTURAL VERNIER CALIPER & CALIBRATION BENCH (ESTIMATOR)
   Document 05: Instrument Calibration Desk & Bill of Quantities Drafting Sheet
   ========================================================================== */

/* --------------------------------------------------------------------------
   0. LEGACY COMPATIBILITY STYLES (Used by index.html #section-caliper)
   -------------------------------------------------------------------------- */
.caliper-section {
  position: relative;
  max-width: 1220px;
  margin: 0 auto 100px auto;
}

.caliper-board-housing {
  position: relative;
  background: linear-gradient(135deg, #221d18 0%, #15120f 100%);
  border: 1px solid rgba(180, 150, 110, 0.4);
  border-radius: 8px;
  padding: 40px;
  box-shadow: 
    var(--shadow-elevation-3),
    inset 0 1px 2px rgba(255,255,255,0.1);
}

.caliper-header {
  text-align: center;
  margin-bottom: 36px;
}

.caliper-subtitle {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: #c9a456;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.caliper-main-heading {
  font-family: var(--font-serif-luxury);
  font-size: 2.2rem;
  color: #faf6ee;
}

.scope-toggle-tabs {
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.scope-btn {
  background: rgba(36, 30, 24, 0.9);
  border: 1px solid rgba(212, 175, 55, 0.35);
  border-radius: 4px;
  padding: 10px 20px;
  color: #dfd2be;
  font-family: var(--font-title-arch);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  cursor: pointer;
  box-shadow: -2px 3px 6px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1);
  transition: all 0.25s ease;
}

.scope-btn:hover {
  border-color: #d4af37;
  color: #ffffff;
  transform: translateY(-2px);
}

.scope-btn.active {
  background: var(--brass-gradient);
  color: #211604;
  border-color: #ffecb8;
  box-shadow: -2px 4px 10px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.8);
  font-weight: 700;
}

.vernier-caliper-tool {
  position: relative;
  width: 100%;
  max-width: 960px;
  margin: 0 auto 40px auto;
  height: 90px;
  user-select: none;
}

.caliper-main-beam {
  position: absolute;
  top: 25px;
  left: 60px;
  right: 20px;
  height: 38px;
  background: linear-gradient(180deg, #d8d8d8 0%, #b2b2b2 45%, #888888 80%, #a4a4a4 100%);
  border: 1.5px solid #5a5a5a;
  border-radius: 2px;
  box-shadow: -2px 4px 10px rgba(0,0,0,0.6), inset 0 1px 2px rgba(255,255,255,0.9);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2px 10px;
}

.beam-scale-ticks {
  width: 100%;
  height: 12px;
  background-image: repeating-linear-gradient(to right, transparent, transparent 11px, #222222 11px, #222222 12px);
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-family: var(--font-mono);
  font-size: 8px;
  color: #111111;
  font-weight: 700;
}

.beam-scale-bottom-ticks {
  width: 100%;
  height: 10px;
  background-image: repeating-linear-gradient(to right, transparent, transparent 17px, #333333 17px, #333333 18px);
}

.caliper-fixed-jaw {
  position: absolute;
  top: 0;
  left: 0;
  width: 70px;
  height: 100px;
  background: linear-gradient(135deg, #e6e6e6 0%, #a6a6a6 60%, #7d7d7d 100%);
  border: 1.5px solid #4a4a4a;
  border-radius: 4px 0 0 12px;
  box-shadow: -4px 6px 14px rgba(0,0,0,0.55);
  clip-path: polygon(0 0, 100% 25px, 100% 63px, 50% 100px, 0 100px);
  z-index: 10;
}

.caliper-sliding-jaw {
  position: absolute;
  top: 0;
  left: 35%;
  width: 90px;
  height: 110px;
  background: linear-gradient(135deg, #f7dfa5 0%, #c89e3a 50%, #87621c 100%);
  border: 2px solid #ffecb8;
  border-radius: 4px;
  box-shadow: -4px 8px 18px rgba(0,0,0,0.65), inset 0 1px 1px rgba(255,255,255,0.9);
  z-index: 20;
  cursor: grab;
  transform: translateX(-50%);
  transition: transform 0.05s linear;
  touch-action: none;
}

.caliper-sliding-jaw:active {
  cursor: grabbing;
}

.caliper-thumbwheel {
  position: absolute;
  top: 45px;
  right: -12px;
  width: 14px;
  height: 32px;
  background: repeating-linear-gradient(0deg, #694a15 0px, #9c7328 2px, #ffde82 3px, #9c7328 4px);
  border: 1px solid #442f0c;
  border-radius: 2px;
  box-shadow: -2px 2px 5px rgba(0,0,0,0.5);
}

.vernier-window {
  position: absolute;
  top: 30px;
  left: 10px;
  right: 15px;
  height: 28px;
  background: rgba(255, 255, 255, 0.25);
  border: 1px solid #5a4014;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-mono);
  font-size: 9px;
  font-weight: 800;
  color: #1a1204;
}

.caliper-range-input {
  position: absolute;
  top: 25px;
  left: 60px;
  right: 20px;
  height: 38px;
  opacity: 0;
  cursor: pointer;
  z-index: 25;
}

.caliper-readout-gauge {
  background: #110e0b;
  border: 2px solid #8c6a28;
  border-radius: 6px;
  padding: 24px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  box-shadow: inset 0 2px 6px rgba(0,0,0,0.9), -2px 4px 12px rgba(0,0,0,0.4);
}

.readout-cell {
  background: #191511;
  border: 1px solid rgba(212, 175, 55, 0.25);
  border-radius: 4px;
  padding: 14px 18px;
  display: flex;
  flex-direction: column;
}

.readout-label {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: #a88b58;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 6px;
}

.readout-value {
  font-family: var(--font-title-arch);
  font-size: 1.35rem;
  font-weight: 700;
  color: #fce7b2;
  text-shadow: 0 0 10px rgba(252, 231, 178, 0.35);
}

/* ==========================================================================
   1. DOC 05 MASTER CALIBRATION BENCH (THE PHYSICAL WORKBENCH CHASSIS)
   ========================================================================== */

.calibration-workbench-desk {
  position: relative;
  max-width: 1220px;
  margin: 20px auto 100px auto;
}

/* Heavy Oiled Oak / Anodized Instrument Housing */
.workbench-instrument-housing {
  position: relative;
  background: linear-gradient(135deg, #1e1914 0%, #13100d 50%, #1a1511 100%);
  border: 2px solid #a8833c;
  border-radius: 10px;
  padding: 40px;
  box-shadow: 
    0 35px 80px rgba(0, 0, 0, 0.75),
    inset 0 1px 2px rgba(255, 255, 255, 0.2),
    inset 0 0 40px rgba(0, 0, 0, 0.8);
  user-select: none;
}

body.blueprint-mode .workbench-instrument-housing,
body[data-theme="cyanotype"] .workbench-instrument-housing {
  background: linear-gradient(135deg, #091a2e 0%, #05101d 50%, #0d2238 100%);
  border-color: #5daee8;
  box-shadow: 
    0 35px 80px rgba(0, 0, 0, 0.85),
    0 0 30px rgba(100, 255, 218, 0.12),
    inset 0 1px 2px rgba(255, 255, 255, 0.25),
    inset 0 0 40px rgba(3, 10, 20, 0.9);
}

/* Brass Corner Edge Protectors & Industrial Rivets */
.brass-corner-bracket {
  position: absolute;
  width: 32px;
  height: 32px;
  border: 3px solid #d4af37;
  pointer-events: none;
  z-index: 5;
}

.brass-corner-bracket.top-left { top: 8px; left: 8px; border-right: none; border-bottom: none; }
.brass-corner-bracket.top-right { top: 8px; right: 8px; border-left: none; border-bottom: none; }
.brass-corner-bracket.bottom-left { bottom: 8px; left: 8px; border-right: none; border-top: none; }
.brass-corner-bracket.bottom-right { bottom: 8px; right: 8px; border-left: none; border-top: none; }

body.blueprint-mode .brass-corner-bracket,
body[data-theme="cyanotype"] .brass-corner-bracket {
  border-color: #64ffda;
}

/* Workbench Header Banner & Asset Tag Plate */
.workbench-header-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}

.workbench-title-group {
  flex: 1;
  min-width: 280px;
}

.workbench-doc-code {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  color: #c9a456;
  text-transform: uppercase;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 8px;
}

body.blueprint-mode .workbench-doc-code,
body[data-theme="cyanotype"] .workbench-doc-code {
  color: #64ffda;
}

.workbench-doc-title {
  font-family: var(--font-serif-luxury);
  font-size: 2.2rem;
  font-weight: 600;
  color: #f7f1e3;
  line-height: 1.15;
  margin-bottom: 8px;
}

body.blueprint-mode .workbench-doc-title,
body[data-theme="cyanotype"] .workbench-doc-title {
  color: #ffffff;
  text-shadow: 0 0 14px rgba(100, 255, 218, 0.25);
}

.workbench-doc-subtitle {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: #ad9472;
  line-height: 1.45;
  max-width: 680px;
}

body.blueprint-mode .workbench-doc-subtitle,
body[data-theme="cyanotype"] .workbench-doc-subtitle {
  color: #8fc7ed;
}

/* Metal Asset Tag Plaque */
.calibration-asset-tag {
  background: linear-gradient(135deg, #d3b472 0%, #a27a33 50%, #d8ba78 100%);
  border: 1px solid #ffe8a8;
  border-radius: 4px;
  padding: 8px 16px;
  box-shadow: 
    -2px 4px 10px rgba(0, 0, 0, 0.45),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  display: flex;
  flex-direction: column;
  gap: 2px;
  text-align: right;
  flex-shrink: 0;
}

body.blueprint-mode .calibration-asset-tag,
body[data-theme="cyanotype"] .calibration-asset-tag {
  background: linear-gradient(135deg, #a3c2de 0%, #4a7aa5 50%, #89b3d9 100%);
  border-color: #d8ebfb;
}

.asset-tag-id {
  font-family: var(--font-title-arch);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  color: #211503;
}

.asset-tag-serial {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  font-weight: 700;
  color: #382407;
  letter-spacing: 0.1em;
}

/* ==========================================================================
   2. PHYSICAL WORKBENCH SETUP (VERNIER CALIPER & ROTARY GEOTECHNICAL DIAL)
   ========================================================================== */

.workbench-top-instruments-grid {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 30px;
  margin-bottom: 40px;
  align-items: stretch;
}

@media (max-width: 992px) {
  .workbench-top-instruments-grid {
    grid-template-columns: 1fr;
  }
}

/* Instrument Card Housing */
.instrument-card-housing {
  background: rgba(14, 11, 9, 0.85);
  border: 1.5px solid rgba(168, 131, 60, 0.4);
  border-radius: 8px;
  padding: 24px;
  box-shadow: 
    inset 0 2px 8px rgba(0, 0, 0, 0.9),
    0 8px 24px rgba(0, 0, 0, 0.5);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

body.blueprint-mode .instrument-card-housing,
body[data-theme="cyanotype"] .instrument-card-housing {
  background: rgba(6, 18, 30, 0.88);
  border-color: rgba(93, 174, 232, 0.4);
  box-shadow: 
    inset 0 2px 8px rgba(0, 0, 0, 0.95),
    0 8px 24px rgba(0, 0, 0, 0.6);
}

.instrument-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
  padding-bottom: 8px;
  border-bottom: 1px dashed rgba(168, 131, 60, 0.35);
}

body.blueprint-mode .instrument-card-header,
body[data-theme="cyanotype"] .instrument-card-header {
  border-bottom-color: rgba(93, 174, 232, 0.3);
}

.instrument-label-title {
  font-family: var(--font-title-arch);
  font-size: 0.74rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  color: #e5c880;
  text-transform: uppercase;
}

body.blueprint-mode .instrument-label-title,
body[data-theme="cyanotype"] .instrument-label-title {
  color: #64ffda;
}

.instrument-spec-code {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: #9c825a;
  letter-spacing: 0.08em;
}

body.blueprint-mode .instrument-spec-code,
body[data-theme="cyanotype"] .instrument-spec-code {
  color: #8fc7ed;
}

/* --------------------------------------------------------------------------
   THE PRIMARY VERNIER CALIPER (MAIN BEAM & KNURLED SLIDING JAW)
   -------------------------------------------------------------------------- */
.vernier-caliper-stage {
  position: relative;
  width: 100%;
  height: 120px;
  margin: 10px 0 20px 0;
  user-select: none;
}

/* The Heavy Main Stainless Steel & Tool Steel Caliper Beam */
.vernier-caliper-stage .master-caliper-beam {
  position: absolute;
  top: 36px;
  left: 65px;
  right: 25px;
  height: 48px;
  background: linear-gradient(180deg, #e4e4e4 0%, #b8b8b8 35%, #8a8a8a 70%, #afafaf 100%);
  border: 1.5px solid #4a4a4a;
  border-radius: 3px;
  box-shadow: 
    -3px 5px 14px rgba(0, 0, 0, 0.75),
    inset 0 1px 2px rgba(255, 255, 255, 0.95),
    inset 0 -1px 2px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4px 14px;
}

body.blueprint-mode .vernier-caliper-stage .master-caliper-beam,
body[data-theme="cyanotype"] .vernier-caliper-stage .master-caliper-beam {
  background: linear-gradient(180deg, #9bbcdb 0%, #688fae 35%, #42637e 70%, #769cb8 100%);
  border-color: #2b4966;
}

/* Upper Scale: Imperial Footprint Markings */
.caliper-imperial-scale {
  width: 100%;
  height: 16px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  font-family: var(--font-mono);
  font-size: 8.5px;
  font-weight: 800;
  color: #1a1715;
  letter-spacing: 0.04em;
  background-image: repeating-linear-gradient(
    to right,
    transparent,
    transparent 11px,
    #1f1a14 11px,
    #1f1a14 12px
  );
}

body.blueprint-mode .caliper-imperial-scale,
body[data-theme="cyanotype"] .caliper-imperial-scale {
  color: #071728;
  background-image: repeating-linear-gradient(
    to right,
    transparent,
    transparent 11px,
    #0d2238 11px,
    #0d2238 12px
  );
}

/* Lower Scale: Metric Footprint Markings */
.caliper-metric-scale {
  width: 100%;
  height: 14px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  font-family: var(--font-mono);
  font-size: 7.5px;
  font-weight: 700;
  color: #3a3229;
  background-image: repeating-linear-gradient(
    to right,
    transparent,
    transparent 17px,
    #33291d 17px,
    #33291d 18px
  );
}

body.blueprint-mode .caliper-metric-scale,
body[data-theme="cyanotype"] .caliper-metric-scale {
  color: #12304d;
  background-image: repeating-linear-gradient(
    to right,
    transparent,
    transparent 17px,
    #173c5f 17px,
    #173c5f 18px
  );
}

/* Heavy Machined Left Fixed Jaw (The Reference Anvil) */
.master-fixed-jaw {
  position: absolute;
  top: 8px;
  left: 0;
  width: 76px;
  height: 108px;
  background: linear-gradient(135deg, #d6d6d6 0%, #9e9e9e 50%, #6e6e6e 100%);
  border: 2px solid #3d3d3d;
  border-radius: 4px 0 0 16px;
  box-shadow: -5px 8px 18px rgba(0, 0, 0, 0.7);
  clip-path: polygon(0 0, 100% 28px, 100% 84px, 45% 108px, 0 108px);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
}

body.blueprint-mode .master-fixed-jaw,
body[data-theme="cyanotype"] .master-fixed-jaw {
  background: linear-gradient(135deg, #9bbcdb 0%, #5d819e 50%, #3a566d 100%);
  border-color: #213c54;
}

.jaw-brand-hallmark {
  font-family: var(--font-title-arch);
  font-size: 7px;
  font-weight: 800;
  letter-spacing: 0.12em;
  color: #1f1b17;
  transform: rotate(-90deg) translateY(-8px);
}

/* Sliding Vernier Jaw with Knurled Brass Clamp & Fine-Adjustment Loupe */
.master-sliding-jaw {
  position: absolute;
  top: 4px;
  left: 33%;
  width: 105px;
  height: 114px;
  background: linear-gradient(135deg, #fae2a5 0%, #c99b38 45%, #7e5c18 85%, #b88f30 100%);
  border: 2px solid #fff1cc;
  border-radius: 5px;
  box-shadow: 
    -6px 12px 24px rgba(0, 0, 0, 0.8),
    inset 0 1px 2px rgba(255, 255, 255, 0.95),
    inset 0 -2px 4px rgba(0, 0, 0, 0.5);
  z-index: 20;
  cursor: grab;
  transform: translateX(-50%);
  transition: transform 0.05s ease-out;
  touch-action: pan-y;
}

.master-sliding-jaw:active {
  cursor: grabbing;
}

body.blueprint-mode .master-sliding-jaw,
body[data-theme="cyanotype"] .master-sliding-jaw {
  background: linear-gradient(135deg, #a8d5f7 0%, #4da3df 45%, #1d5f94 85%, #569fda 100%);
  border-color: #e0f2fe;
  box-shadow: 
    -6px 12px 24px rgba(0, 0, 0, 0.85),
    0 0 18px rgba(100, 255, 218, 0.25),
    inset 0 1px 2px rgba(255, 255, 255, 0.95);
}

/* Knurled Brass Thumbwheel Screw */
.jaw-knurled-thumbscrew {
  position: absolute;
  top: -8px;
  right: 18px;
  width: 22px;
  height: 14px;
  background: repeating-linear-gradient(90deg, #6e4d14 0px, #a87e2b 2px, #ffdf85 3px, #a87e2b 4px);
  border: 1px solid #442f0a;
  border-radius: 3px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.6);
}

body.blueprint-mode .jaw-knurled-thumbscrew,
body[data-theme="cyanotype"] .jaw-knurled-thumbscrew {
  background: repeating-linear-gradient(90deg, #1a3f61 0px, #3d79a8 2px, #b2dcff 3px, #3d79a8 4px);
  border-color: #112d47;
}

/* Vernier Sliding Loupe Window */
.jaw-vernier-window {
  position: absolute;
  top: 36px;
  left: 10px;
  right: 10px;
  height: 38px;
  background: rgba(255, 255, 255, 0.28);
  border: 1px solid #6b4d18;
  border-radius: 3px;
  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2px 4px;
  backdrop-filter: blur(1.5px);
}

body.blueprint-mode .jaw-vernier-window,
body[data-theme="cyanotype"] .jaw-vernier-window {
  background: rgba(6, 22, 40, 0.45);
  border-color: #174269;
}

/* Fractional Vernier Sub-Scale Hairlines */
.vernier-hairline-ticks {
  width: 100%;
  height: 8px;
  background-image: repeating-linear-gradient(to right, transparent, transparent 6px, #261b0c 6px, #261b0c 7px);
}

body.blueprint-mode .vernier-hairline-ticks,
body[data-theme="cyanotype"] .vernier-hairline-ticks {
  background-image: repeating-linear-gradient(to right, transparent, transparent 6px, #8fc7ed 6px, #8fc7ed 7px);
}

.vernier-index-mark {
  font-family: var(--font-mono);
  font-size: 8px;
  font-weight: 800;
  color: #241908;
  letter-spacing: 0.08em;
}

body.blueprint-mode .vernier-index-mark,
body[data-theme="cyanotype"] .vernier-index-mark {
  color: #64ffda;
}

/* Accessible Interactive Range Input Overlay */
.master-caliper-range-input {
  position: absolute;
  top: 36px;
  left: 65px;
  right: 25px;
  height: 48px;
  opacity: 0;
  cursor: ew-resize;
  z-index: 25;
}

/* Live Calibrated Footprint Output Display */
.caliper-readout-strip {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #0d0a07;
  border: 1.5px solid #a8833c;
  border-radius: 4px;
  padding: 10px 18px;
  box-shadow: inset 0 2px 8px rgba(0, 0, 0, 0.85);
}

body.blueprint-mode .caliper-readout-strip,
body[data-theme="cyanotype"] .caliper-readout-strip {
  background: #05101d;
  border-color: #5daee8;
}

.caliper-readout-title {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  font-weight: 700;
  color: #baa27c;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

body.blueprint-mode .caliper-readout-title,
body[data-theme="cyanotype"] .caliper-readout-title {
  color: #8fc7ed;
}

.caliper-footprint-value {
  font-family: var(--font-title-arch);
  font-size: 1.45rem;
  font-weight: 800;
  color: #ffecb8;
  letter-spacing: 0.06em;
  text-shadow: 0 0 12px rgba(255, 236, 184, 0.4);
}

body.blueprint-mode .caliper-footprint-value,
body[data-theme="cyanotype"] .caliper-footprint-value {
  color: #64ffda;
  text-shadow: 0 0 14px rgba(100, 255, 218, 0.4);
}

/* --------------------------------------------------------------------------
   THE ROTARY GEOTECHNICAL BEZEL / DIAL (SEISMIC & BEDROCK FACTOR)
   -------------------------------------------------------------------------- */
.rotary-geotech-bezel-unit {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.rotary-bezel-assembly {
  position: relative;
  width: 170px;
  height: 170px;
  margin: 6px auto 14px auto;
  user-select: none;
}

/* Outer Machined Escutcheon Ring with Engraved Angle Degree Ticks */
.bezel-outer-ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: radial-gradient(circle, #2a221b 50%, #15110d 100%);
  border: 2px solid #a8833c;
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.8),
    inset 0 2px 6px rgba(255, 255, 255, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
}

body.blueprint-mode .bezel-outer-ring,
body[data-theme="cyanotype"] .bezel-outer-ring {
  background: radial-gradient(circle, #0e2b47 50%, #061524 100%);
  border-color: #5daee8;
  box-shadow: 
    0 8px 24px rgba(0, 0, 0, 0.85),
    0 0 16px rgba(100, 255, 218, 0.15);
}

/* Rotating Knurled Brass Dial Face */
.bezel-rotating-knob {
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f0d592 0%, #b88d36 40%, #7d5918 80%, #a67c29 100%);
  border: 2px solid #fff0c7;
  box-shadow: 
    -4px 8px 18px rgba(0, 0, 0, 0.75),
    inset 0 1px 2px rgba(255, 255, 255, 0.9),
    inset 0 -2px 4px rgba(0, 0, 0, 0.6);
  cursor: pointer;
  transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
  display: flex;
  align-items: center;
  justify-content: center;
}

body.blueprint-mode .bezel-rotating-knob,
body[data-theme="cyanotype"] .bezel-rotating-knob {
  background: linear-gradient(135deg, #94cbf5 0%, #4a9ddb 40%, #1a5789 80%, #438fc9 100%);
  border-color: #d8ebfb;
}

/* Pointer Needle Index on Dial */
.bezel-pointer-needle {
  position: absolute;
  top: 8px;
  width: 4px;
  height: 24px;
  background: #c23824;
  border-radius: 2px;
  box-shadow: 0 0 6px rgba(194, 56, 36, 0.8);
}

body.blueprint-mode .bezel-pointer-needle,
body[data-theme="cyanotype"] .bezel-pointer-needle {
  background: #ff5252;
  box-shadow: 0 0 8px #ff5252;
}

/* Dial Center Cap with Knurling Ring */
.bezel-center-cap {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: radial-gradient(circle, #29211a 30%, #17120d 100%);
  border: 1.5px solid #a8833c;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  font-weight: 800;
  color: #ffecb8;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.8);
}

body.blueprint-mode .bezel-center-cap,
body[data-theme="cyanotype"] .bezel-center-cap {
  background: radial-gradient(circle, #081d30 30%, #030d17 100%);
  border-color: #5daee8;
  color: #64ffda;
}

/* Detent Step Buttons */
.rotary-detent-buttons {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  width: 100%;
}

.detent-pill-btn {
  background: rgba(22, 17, 13, 0.9);
  border: 1px solid rgba(168, 131, 60, 0.4);
  border-radius: 4px;
  padding: 6px 8px;
  font-family: var(--font-mono);
  font-size: 0.64rem;
  font-weight: 700;
  color: #d1b88e;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.detent-pill-btn:hover {
  border-color: #d4af37;
  color: #ffffff;
  transform: translateY(-1px);
}

.detent-pill-btn.active {
  background: var(--brass-gradient);
  color: #211604;
  border-color: #ffecb8;
  font-weight: 800;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
}

body.blueprint-mode .detent-pill-btn,
body[data-theme="cyanotype"] .detent-pill-btn {
  background: rgba(8, 22, 36, 0.9);
  border-color: rgba(93, 174, 232, 0.4);
  color: #8fc7ed;
}

body.blueprint-mode .detent-pill-btn.active,
body[data-theme="cyanotype"] .detent-pill-btn.active {
  background: linear-gradient(135deg, #a8d5f7 0%, #4da3df 100%);
  color: #06182a;
  border-color: #e0f2fe;
}

/* --------------------------------------------------------------------------
   THE METRIC / IMPERIAL FLIP SWITCH ASSEMBLY
   -------------------------------------------------------------------------- */
.system-toggle-assembly {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: #110e0b;
  border: 1.5px solid #a8833c;
  border-radius: 4px;
  padding: 6px 14px;
  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.8);
  user-select: none;
}

body.blueprint-mode .system-toggle-assembly,
body[data-theme="cyanotype"] .system-toggle-assembly {
  background: #05101d;
  border-color: #5daee8;
}

.unit-mode-label {
  font-family: var(--font-mono);
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: #806b4d;
  transition: color 0.2s ease;
}

.unit-mode-label.active {
  color: #ffecb8;
  font-weight: 800;
}

body.blueprint-mode .unit-mode-label,
body[data-theme="cyanotype"] .unit-mode-label {
  color: #4a759c;
}

body.blueprint-mode .unit-mode-label.active,
body[data-theme="cyanotype"] .unit-mode-label.active {
  color: #64ffda;
}

.unit-switch-plate {
  position: relative;
  width: 44px;
  height: 22px;
  background: #1e1914;
  border: 1px solid #735a2d;
  border-radius: 11px;
  cursor: pointer;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.9);
}

body.blueprint-mode .unit-switch-plate,
body[data-theme="cyanotype"] .unit-switch-plate {
  background: #091a2e;
  border-color: #2b5680;
}

.unit-switch-toggle {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--brass-gradient);
  border: 1px solid #ffecb8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
  transition: transform 0.25s var(--ease-spring);
}

body.blueprint-mode .unit-switch-toggle,
body[data-theme="cyanotype"] .unit-switch-toggle {
  background: linear-gradient(135deg, #a8d5f7 0%, #4da3df 100%);
  border-color: #e0f2fe;
}

.unit-switch-plate.metric-active .unit-switch-toggle {
  transform: translateX(22px);
}

/* ==========================================================================
   3. MULTI-AXIS PARAMETRIC SCOPE TOGGLES (THE "MATERIAL LEVERS")
   ========================================================================== */

.parametric-levers-section {
  margin-bottom: 45px;
}

.levers-rack-header {
  margin-bottom: 20px;
}

.levers-rack-title {
  font-family: var(--font-title-arch);
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  color: #e5c880;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 10px;
}

body.blueprint-mode .levers-rack-title,
body[data-theme="cyanotype"] .levers-rack-title {
  color: #64ffda;
}

.levers-rack-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

@media (max-width: 900px) {
  .levers-rack-grid {
    grid-template-columns: 1fr;
  }
}

/* Individual Lever Bank Enclosure */
.lever-bank-enclosure {
  background: rgba(14, 11, 9, 0.9);
  border: 1.5px solid rgba(168, 131, 60, 0.45);
  border-radius: 6px;
  padding: 22px 18px;
  box-shadow: 
    inset 0 1px 3px rgba(255, 255, 255, 0.1),
    0 8px 20px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

body.blueprint-mode .lever-bank-enclosure,
body[data-theme="cyanotype"] .lever-bank-enclosure {
  background: rgba(6, 18, 30, 0.92);
  border-color: rgba(93, 174, 232, 0.45);
}

.lever-bank-tag {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: #c9a456;
  text-transform: uppercase;
  margin-bottom: 6px;
}

body.blueprint-mode .lever-bank-tag,
body[data-theme="cyanotype"] .lever-bank-tag {
  color: #64ffda;
}

.lever-bank-title {
  font-family: var(--font-title-arch);
  font-size: 0.88rem;
  font-weight: 800;
  color: #f7f1e3;
  margin-bottom: 16px;
  line-height: 1.25;
}

body.blueprint-mode .lever-bank-title,
body[data-theme="cyanotype"] .lever-bank-title {
  color: #ffffff;
}

/* Controls inside Lever Banks */
.lever-options-stack {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

/* Rocker Switch Button / Selector Card */
.lever-selector-card {
  background: #1c1712;
  border: 1px solid rgba(168, 131, 60, 0.35);
  border-radius: 4px;
  padding: 12px 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  transition: all 0.22s ease;
  user-select: none;
}

.lever-selector-card:hover {
  border-color: #d4af37;
  transform: translateX(3px);
  background: #241e17;
}

.lever-selector-card.active {
  background: linear-gradient(135deg, #2b2114 0%, #1f180e 100%);
  border-color: #d4af37;
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.4),
    inset 0 0 10px rgba(212, 175, 55, 0.2);
}

body.blueprint-mode .lever-selector-card,
body[data-theme="cyanotype"] .lever-selector-card {
  background: #091a2e;
  border-color: rgba(93, 174, 232, 0.35);
}

body.blueprint-mode .lever-selector-card:hover,
body[data-theme="cyanotype"] .lever-selector-card:hover {
  border-color: #64ffda;
  background: #0f2742;
}

body.blueprint-mode .lever-selector-card.active,
body[data-theme="cyanotype"] .lever-selector-card.active {
  background: linear-gradient(135deg, #0d2847 0%, #06182c 100%);
  border-color: #64ffda;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5), inset 0 0 12px rgba(100, 255, 218, 0.2);
}

.card-spec-info {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.card-spec-code {
  font-family: var(--font-mono);
  font-size: 0.64rem;
  font-weight: 700;
  color: #c9a456;
  letter-spacing: 0.08em;
}

body.blueprint-mode .card-spec-code,
body[data-theme="cyanotype"] .card-spec-code {
  color: #64ffda;
}

.card-spec-name {
  font-family: var(--font-serif-luxury);
  font-size: 0.88rem;
  font-weight: 600;
  color: #f7f1e3;
  line-height: 1.25;
}

body.blueprint-mode .card-spec-name,
body[data-theme="cyanotype"] .card-spec-name {
  color: #ffffff;
}

.card-spec-desc {
  font-family: var(--font-mono);
  font-size: 0.6rem;
  color: #9c8567;
  letter-spacing: 0.04em;
}

body.blueprint-mode .card-spec-desc,
body[data-theme="cyanotype"] .card-spec-desc {
  color: #8fc7ed;
}

.card-multiplier-badge {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  font-weight: 800;
  color: #211604;
  background: #c9a456;
  padding: 3px 7px;
  border-radius: 3px;
  white-space: nowrap;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}

body.blueprint-mode .card-multiplier-badge,
body[data-theme="cyanotype"] .card-multiplier-badge {
  background: #64ffda;
  color: #06182a;
}

/* ==========================================================================
   4. DRAFTING PAPER UNDERLAY: "THE LEDGER / BILL OF QUANTITIES (BOM)"
   ========================================================================== */

.bom-drafting-sheet-container {
  position: relative;
  margin-top: 50px;
}

/* Translucent Drafting Tape on 4 Corners */
.drafting-tape-pin {
  position: absolute;
  width: 90px;
  height: 24px;
  background: rgba(235, 222, 190, 0.65);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(2px);
  z-index: 15;
  pointer-events: none;
}

.drafting-tape-pin.tl { top: -10px; left: -25px; transform: rotate(-35deg); }
.drafting-tape-pin.tr { top: -10px; right: -25px; transform: rotate(35deg); }
.drafting-tape-pin.bl { bottom: -10px; left: -25px; transform: rotate(35deg); }
.drafting-tape-pin.br { bottom: -10px; right: -25px; transform: rotate(-35deg); }

/* The Heavy Green / Blue Grid Architect's Estimate Ledger */
.bom-drafting-sheet {
  position: relative;
  background-color: #f7f3e8;
  background-image: 
    /* Fine millimetric grid */
    linear-gradient(to right, rgba(160, 130, 95, 0.12) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(160, 130, 95, 0.12) 1px, transparent 1px),
    linear-gradient(to right, rgba(160, 130, 95, 0.28) 1.5px, transparent 1.5px),
    linear-gradient(to bottom, rgba(160, 130, 95, 0.28) 1.5px, transparent 1.5px);
  background-size: 15px 15px, 15px 15px, 75px 75px, 75px 75px;
  border: 1.5px solid rgba(160, 130, 95, 0.6);
  border-radius: 4px;
  padding: 44px 40px;
  box-shadow: 
    0 25px 60px rgba(0, 0, 0, 0.65),
    inset 0 1px 2px rgba(255, 255, 255, 0.95);
  color: #1a1714;
}

body.blueprint-mode .bom-drafting-sheet,
body[data-theme="cyanotype"] .bom-drafting-sheet {
  background-color: #081a2e;
  background-image: 
    linear-gradient(to right, rgba(100, 255, 218, 0.08) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(100, 255, 218, 0.08) 1px, transparent 1px),
    linear-gradient(to right, rgba(100, 255, 218, 0.22) 1.5px, transparent 1.5px),
    linear-gradient(to bottom, rgba(100, 255, 218, 0.22) 1.5px, transparent 1.5px);
  border-color: rgba(93, 174, 232, 0.5);
  box-shadow: 
    0 25px 60px rgba(0, 0, 0, 0.85),
    0 0 30px rgba(100, 255, 218, 0.1);
  color: #e0f2fe;
}

/* Ledger Header Block */
.bom-sheet-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 22px;
  border-bottom: 2px solid #2b2114;
  margin-bottom: 28px;
  flex-wrap: wrap;
  gap: 20px;
}

body.blueprint-mode .bom-sheet-header,
body[data-theme="cyanotype"] .bom-sheet-header {
  border-bottom-color: #5daee8;
}

.bom-header-col-left {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.bom-document-serial {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  color: #9c2828;
}

body.blueprint-mode .bom-document-serial,
body[data-theme="cyanotype"] .bom-document-serial {
  color: #ff6b6b;
}

.bom-document-headline {
  font-family: var(--font-title-arch);
  font-size: 1.45rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  color: #1f1810;
  text-transform: uppercase;
}

body.blueprint-mode .bom-document-headline,
body[data-theme="cyanotype"] .bom-document-headline {
  color: #ffffff;
}

.bom-header-col-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: #5a4933;
}

body.blueprint-mode .bom-header-col-right,
body[data-theme="cyanotype"] .bom-header-col-right {
  color: #8fc7ed;
}

/* --------------------------------------------------------------------------
   LINE-ITEM TECHNICAL BREAKDOWN (TYPEWRITER MONOSPACE)
   -------------------------------------------------------------------------- */
.bom-line-items-table {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 34px;
}

.bom-item-row {
  display: grid;
  grid-template-columns: 280px 1fr auto;
  align-items: baseline;
  gap: 18px;
  padding-bottom: 12px;
  border-bottom: 1px dotted rgba(80, 60, 30, 0.35);
  font-family: var(--font-mono);
  font-size: 0.78rem;
}

@media (max-width: 768px) {
  .bom-item-row {
    grid-template-columns: 1fr;
    gap: 6px;
  }
}

body.blueprint-mode .bom-item-row,
body[data-theme="cyanotype"] .bom-item-row {
  border-bottom-color: rgba(100, 255, 218, 0.25);
}

.bom-item-title {
  font-weight: 800;
  color: #261e15;
  letter-spacing: 0.06em;
}

body.blueprint-mode .bom-item-title,
body[data-theme="cyanotype"] .bom-item-title {
  color: #ffffff;
}

.bom-item-detail {
  color: #6b573d;
  font-size: 0.74rem;
  line-height: 1.35;
}

body.blueprint-mode .bom-item-detail,
body[data-theme="cyanotype"] .bom-item-detail {
  color: #8fc7ed;
}

.bom-item-amount {
  font-weight: 800;
  font-size: 0.95rem;
  color: #1c150d;
  white-space: nowrap;
  text-align: right;
}

body.blueprint-mode .bom-item-amount,
body[data-theme="cyanotype"] .bom-item-amount {
  color: #64ffda;
}

/* Schedule & Critical Path Box */
.bom-schedule-card {
  background: rgba(230, 222, 205, 0.55);
  border: 1.5px solid rgba(160, 130, 95, 0.6);
  border-radius: 4px;
  padding: 18px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  flex-wrap: wrap;
  gap: 16px;
}

body.blueprint-mode .bom-schedule-card,
body[data-theme="cyanotype"] .bom-schedule-card {
  background: rgba(6, 22, 40, 0.65);
  border-color: rgba(93, 174, 232, 0.4);
}

.schedule-label-block {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.schedule-header-tag {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  color: #8a3324;
  text-transform: uppercase;
}

body.blueprint-mode .schedule-header-tag,
body[data-theme="cyanotype"] .schedule-header-tag {
  color: #ff6b6b;
}

.schedule-milestones-text {
  font-family: var(--font-mono);
  font-size: 0.74rem;
  color: #473926;
}

body.blueprint-mode .schedule-milestones-text,
body[data-theme="cyanotype"] .schedule-milestones-text {
  color: #8fc7ed;
}

.schedule-duration-badge {
  font-family: var(--font-title-arch);
  font-size: 1.15rem;
  font-weight: 800;
  color: #211604;
  background: #deb868;
  padding: 6px 16px;
  border-radius: 3px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  white-space: nowrap;
}

body.blueprint-mode .schedule-duration-badge,
body[data-theme="cyanotype"] .schedule-duration-badge {
  background: #64ffda;
  color: #06182a;
}

/* Total Certified Investment Range Banner */
.bom-total-banner {
  background: #1c1610;
  border: 2px solid #a8833c;
  border-radius: 4px;
  padding: 24px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 24px;
}

body.blueprint-mode .bom-total-banner,
body[data-theme="cyanotype"] .bom-total-banner {
  background: #05101d;
  border-color: #5daee8;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.7), 0 0 20px rgba(100, 255, 218, 0.2);
}

.total-label-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.total-cert-tag {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  color: #c9a456;
  text-transform: uppercase;
}

body.blueprint-mode .total-cert-tag,
body[data-theme="cyanotype"] .total-cert-tag {
  color: #64ffda;
}

.total-unit-rate {
  font-family: var(--font-mono);
  font-size: 0.76rem;
  color: #a8947b;
}

body.blueprint-mode .total-unit-rate,
body[data-theme="cyanotype"] .total-unit-rate {
  color: #8fc7ed;
}

.total-sum-range {
  font-family: var(--font-title-arch);
  font-size: 2.1rem;
  font-weight: 900;
  color: #ffebbc;
  letter-spacing: 0.04em;
  text-shadow: 0 0 16px rgba(255, 235, 188, 0.4);
}

body.blueprint-mode .total-sum-range,
body[data-theme="cyanotype"] .total-sum-range {
  color: #64ffda;
  text-shadow: 0 0 20px rgba(100, 255, 218, 0.5);
}

/* Dynamic Redline AIA Feasibility Ink Stamp */
.aia-feasibility-stamp {
  display: inline-block;
  border: 3px double #b82828;
  border-radius: 4px;
  padding: 10px 18px;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 900;
  letter-spacing: 0.12em;
  color: #a81e1e;
  text-transform: uppercase;
  transform: rotate(-2.5deg);
  margin-top: 10px;
  box-shadow: 0 2px 8px rgba(184, 40, 40, 0.25);
  background: rgba(255, 235, 235, 0.4);
  transition: all 0.3s ease;
}

.aia-feasibility-stamp.approved {
  border-color: #248a3d;
  color: #1e7a33;
  box-shadow: 0 2px 8px rgba(36, 138, 61, 0.25);
  background: rgba(235, 255, 240, 0.4);
}

body.blueprint-mode .aia-feasibility-stamp,
body[data-theme="cyanotype"] .aia-feasibility-stamp {
  border-color: #ff5252;
  color: #ff6b6b;
  background: rgba(255, 82, 82, 0.12);
  box-shadow: 0 0 14px rgba(255, 82, 82, 0.35);
}

body.blueprint-mode .aia-feasibility-stamp.approved,
body[data-theme="cyanotype"] .aia-feasibility-stamp.approved {
  border-color: #64ffda;
  color: #64ffda;
  background: rgba(100, 255, 218, 0.12);
  box-shadow: 0 0 14px rgba(100, 255, 218, 0.35);
}

/* ==========================================================================
   5. PERFORATED "TEAR-OFF" PRINT SLIP & TRANSMIT TO TENDER ACTION
   ========================================================================== */

.bom-tear-off-card {
  position: relative;
  background: #fdfaf2;
  border: 1.5px solid rgba(160, 130, 95, 0.7);
  border-top: 2px dashed #8c2828;
  border-radius: 0 0 6px 6px;
  padding: 24px 30px;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
  transition: transform 0.6s var(--ease-spring), opacity 0.6s ease;
}

body.blueprint-mode .bom-tear-off-card,
body[data-theme="cyanotype"] .bom-tear-off-card {
  background: #091a2e;
  border-color: rgba(93, 174, 232, 0.5);
  border-top-color: #ff5252;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.6);
}

/* Animated Teared State */
.bom-tear-off-card.tearing {
  transform: translateY(40px) rotate(3deg);
  opacity: 0;
  pointer-events: none;
}

.tear-off-left-summary {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.tear-perforation-tag {
  font-family: var(--font-mono);
  font-size: 0.62rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  color: #8c2828;
  text-transform: uppercase;
}

body.blueprint-mode .tear-perforation-tag,
body[data-theme="cyanotype"] .tear-perforation-tag {
  color: #ff6b6b;
}

.tear-summary-title {
  font-family: var(--font-title-arch);
  font-size: 1.05rem;
  font-weight: 800;
  color: #1f1810;
}

body.blueprint-mode .tear-summary-title,
body[data-theme="cyanotype"] .tear-summary-title {
  color: #ffffff;
}

.tear-summary-details {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: #5c4b36;
}

body.blueprint-mode .tear-summary-details,
body[data-theme="cyanotype"] .tear-summary-details {
  color: #8fc7ed;
}

/* Heavy Transmit Tender Button */
.btn-tear-and-transmit {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: var(--brass-gradient);
  border: 1.5px solid #ffecb8;
  border-radius: 4px;
  padding: 14px 28px;
  font-family: var(--font-title-arch);
  font-size: 0.84rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  color: #211604;
  text-decoration: none;
  cursor: pointer;
  box-shadow: 
    -3px 6px 16px rgba(0, 0, 0, 0.4),
    inset 0 1px 1px rgba(255, 255, 255, 0.9);
  transition: all 0.25s var(--ease-spring);
}

.btn-tear-and-transmit:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 
    -4px 10px 22px rgba(0, 0, 0, 0.5),
    inset 0 1px 1px rgba(255, 255, 255, 1);
  color: #000000;
}

body.blueprint-mode .btn-tear-and-transmit,
body[data-theme="cyanotype"] .btn-tear-and-transmit {
  background: linear-gradient(135deg, #a8d5f7 0%, #4da3df 45%, #1d5f94 100%);
  border-color: #e0f2fe;
  color: #06182a;
  box-shadow: 
    -3px 6px 16px rgba(0, 0, 0, 0.6),
    0 0 16px rgba(100, 255, 218, 0.3),
    inset 0 1px 1px rgba(255, 255, 255, 0.9);
}
`;

fs.writeFileSync('css/caliper.css', cssContent, 'utf8');
console.log('Successfully written css/caliper.css! Bytes:', cssContent.length);

