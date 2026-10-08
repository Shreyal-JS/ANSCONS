/**
 * ANSCONS DOC 04: PORTFOLIO — Monograph Folio Controller (projects.js)
 * Coordinates the 4-Drawer Plan Chest, Linen Monograph Binder, Margin Typology Tabs,
 * Tracing Paper / As-Built Caliper Slider with Creative Architectural CAD Overlays,
 * 3-Part Commission Dossier, and Site Reels.
 */

import { deskAudio } from './audio.js';
import { DeskToolsController } from './desk-tools.js';
import { LegalSpecsController } from './legal-specs.js';

// Creative Architectural CAD Vector Overlays for each Typology (Zero Black Fills)
const CAD_OVERLAYS = {
  "typ-1": "\n    <!-- Bel-Air Cantilever Estate: 38° Hillside Bedrock & Post-Tensioned Cantilever Truss -->\n    <svg viewBox=\"0 0 1200 600\" class=\"vellum-cad-overlay\" preserveAspectRatio=\"none\">\n      <!-- Grid Axis Lines -->\n      <line x1=\"300\" y1=\"80\" x2=\"300\" y2=\"560\" class=\"cad-dimension-line\" stroke-dasharray=\"10 4 2 4\" opacity=\"0.6\" />\n      <line x1=\"600\" y1=\"80\" x2=\"600\" y2=\"560\" class=\"cad-dimension-line\" stroke-dasharray=\"10 4 2 4\" opacity=\"0.6\" />\n      <line x1=\"900\" y1=\"80\" x2=\"900\" y2=\"560\" class=\"cad-dimension-line\" stroke-dasharray=\"10 4 2 4\" opacity=\"0.6\" />\n      <line x1=\"1100\" y1=\"80\" x2=\"1100\" y2=\"560\" class=\"cad-dimension-line\" stroke-dasharray=\"10 4 2 4\" opacity=\"0.6\" />\n      <circle cx=\"300\" cy=\"95\" r=\"12\" class=\"cad-title-block-box\" />\n      <text x=\"300\" y=\"99\" text-anchor=\"middle\" class=\"cad-dimension-text\" font-size=\"10\" font-weight=\"800\">A</text>\n      <circle cx=\"600\" cy=\"95\" r=\"12\" class=\"cad-title-block-box\" />\n      <text x=\"600\" y=\"99\" text-anchor=\"middle\" class=\"cad-dimension-text\" font-size=\"10\" font-weight=\"800\">B</text>\n      <circle cx=\"900\" cy=\"95\" r=\"12\" class=\"cad-title-block-box\" />\n      <text x=\"900\" y=\"99\" text-anchor=\"middle\" class=\"cad-dimension-text\" font-size=\"10\" font-weight=\"800\">C</text>\n      <circle cx=\"1100\" cy=\"95\" r=\"12\" class=\"cad-title-block-box\" />\n      <text x=\"1100\" y=\"99\" text-anchor=\"middle\" class=\"cad-dimension-text\" font-size=\"10\" font-weight=\"800\">D</text>\n\n      <!-- 38° Hillside Bedrock Slope Profile -->\n      <path d=\"M 0,220 L 460,540 L 1200,540 L 1200,600 L 0,600 Z\" class=\"cad-bedrock-slope\" />\n      <!-- Bedrock 45° Geological Hatches -->\n      <line x1=\"60\" y1=\"280\" x2=\"20\" y2=\"350\" class=\"cad-bedrock-hatch\" />\n      <line x1=\"120\" y1=\"330\" x2=\"70\" y2=\"410\" class=\"cad-bedrock-hatch\" />\n      <line x1=\"180\" y1=\"380\" x2=\"120\" y2=\"470\" class=\"cad-bedrock-hatch\" />\n      <line x1=\"250\" y1=\"430\" x2=\"180\" y2=\"530\" class=\"cad-bedrock-hatch\" />\n      <line x1=\"320\" y1=\"480\" x2=\"260\" y2=\"570\" class=\"cad-bedrock-hatch\" />\n      <line x1=\"400\" y1=\"520\" x2=\"350\" y2=\"590\" class=\"cad-bedrock-hatch\" />\n      <text x=\"45\" y=\"250\" class=\"cad-dimension-text\">WEATHERED SHALE BEDROCK (38° CANYON INCLINE)</text>\n\n      <!-- 14 Dywidag Rock Tiebacks Drilled 32m into Bedrock -->\n      <line x1=\"220\" y1=\"360\" x2=\"70\" y2=\"585\" class=\"cad-foundation-pile\" />\n      <line x1=\"320\" y1=\"410\" x2=\"170\" y2=\"595\" class=\"cad-foundation-pile\" />\n      <line x1=\"420\" y1=\"510\" x2=\"330\" y2=\"600\" class=\"cad-foundation-pile\" />\n      <!-- Tieback Anchor Plates & Grout Bulbs -->\n      <circle cx=\"220\" cy=\"360\" r=\"7\" class=\"cad-pile-anchor-head\" />\n      <circle cx=\"320\" cy=\"410\" r=\"7\" class=\"cad-pile-anchor-head\" />\n      <circle cx=\"420\" cy=\"510\" r=\"7\" class=\"cad-pile-anchor-head\" />\n      <text x=\"35\" y=\"470\" class=\"cad-redline-callout\">14x DYWIDAG HIGH-TENSILE TIEBACKS // 32M EMBEDMENT</text>\n      <text x=\"35\" y=\"490\" class=\"cad-dimension-text\">q_allow = 1,600 kN/m² // UPLIFT CAPACITY: 2,400 kN</text>\n\n      <!-- Massive Reinforced Concrete Grade Beam Pier -->\n      <rect x=\"180\" y=\"310\" width=\"260\" height=\"90\" class=\"cad-concrete-mass\" rx=\"2\" />\n      <!-- Internal Rebar Cage Graphic -->\n      <rect x=\"190\" y=\"320\" width=\"240\" height=\"70\" class=\"cad-detail-stroke\" stroke-dasharray=\"4 2\" />\n      <line x1=\"210\" y1=\"320\" x2=\"210\" y2=\"390\" class=\"cad-detail-stroke\" />\n      <line x1=\"270\" y1=\"320\" x2=\"270\" y2=\"390\" class=\"cad-detail-stroke\" />\n      <line x1=\"330\" y1=\"320\" x2=\"330\" y2=\"390\" class=\"cad-detail-stroke\" />\n      <line x1=\"390\" y1=\"320\" x2=\"390\" y2=\"390\" class=\"cad-detail-stroke\" />\n      <text x=\"195\" y=\"300\" class=\"cad-dimension-text\">f'c = 65 MPa REINFORCED GRADE PIER</text>\n\n      <!-- Welded Box-Girder Steel Cantilever Spine (18m Projection) -->\n      <path d=\"M 300,310 L 1120,310 L 1090,375 L 300,375 Z\" class=\"cad-structure-beam\" />\n      <!-- Internal Steel Stiffener Plates -->\n      <line x1=\"420\" y1=\"310\" x2=\"420\" y2=\"375\" class=\"cad-detail-stroke\" />\n      <line x1=\"540\" y1=\"310\" x2=\"540\" y2=\"375\" class=\"cad-detail-stroke\" />\n      <line x1=\"660\" y1=\"310\" x2=\"660\" y2=\"375\" class=\"cad-detail-stroke\" />\n      <line x1=\"780\" y1=\"310\" x2=\"780\" y2=\"375\" class=\"cad-detail-stroke\" />\n      <line x1=\"900\" y1=\"310\" x2=\"900\" y2=\"375\" class=\"cad-detail-stroke\" />\n      <line x1=\"1020\" y1=\"310\" x2=\"1020\" y2=\"375\" class=\"cad-detail-stroke\" />\n\n      <!-- Post-Tensioned Cable Tendon Trajectory Curve -->\n      <path d=\"M 310,330 Q 680,370 1080,325\" class=\"cad-accent-vector\" stroke-dasharray=\"8 4\" />\n      <text x=\"560\" y=\"355\" class=\"cad-redline-callout\">12x 15.2mm DYWIDAG TENDONS @ 1,850 kN // ZERO DEFLECTION</text>\n\n      <!-- Living Volume: Glass Envelope, Shou Sugi Ban & Timber Roof -->\n      <rect x=\"340\" y=\"150\" width=\"740\" height=\"160\" class=\"cad-detail-stroke\" />\n      <!-- Glass Window Mullions -->\n      <line x1=\"460\" y1=\"150\" x2=\"460\" y2=\"310\" class=\"cad-detail-stroke\" stroke-width=\"1\" />\n      <line x1=\"580\" y1=\"150\" x2=\"580\" y2=\"310\" class=\"cad-detail-stroke\" stroke-width=\"1\" />\n      <line x1=\"700\" y1=\"150\" x2=\"700\" y2=\"310\" class=\"cad-detail-stroke\" stroke-width=\"1\" />\n      <line x1=\"820\" y1=\"150\" x2=\"820\" y2=\"310\" class=\"cad-detail-stroke\" stroke-width=\"1\" />\n      <line x1=\"940\" y1=\"150\" x2=\"940\" y2=\"310\" class=\"cad-detail-stroke\" stroke-width=\"1\" />\n      <line x1=\"1060\" y1=\"150\" x2=\"1060\" y2=\"310\" class=\"cad-detail-stroke\" stroke-width=\"1\" />\n\n      <!-- Cantilever Roof Overhang & Accoya Fascia -->\n      <rect x=\"300\" y=\"125\" width=\"810\" height=\"25\" class=\"cad-structure-beam\" />\n      <text x=\"470\" y=\"142\" class=\"cad-dimension-text\">CHARRED SHOU SUGI BAN ACCOYA FASCIATE &amp; ROOF TRUSS</text>\n\n      <!-- Belgium Bluestone Floor Line -->\n      <rect x=\"340\" y=\"302\" width=\"740\" height=\"8\" class=\"cad-pile-anchor-head\" />\n      <text x=\"420\" y=\"275\" class=\"cad-dimension-text\">HONED BELGIAN BLUESTONE // ACOUSTIC TRIPLE GLAZING</text>\n\n      <!-- Cantilever Projection Dimension Line -->\n      <line x1=\"300\" y1=\"115\" x2=\"1110\" y2=\"115\" class=\"cad-dimension-line\" />\n      <line x1=\"300\" y1=\"105\" x2=\"300\" y2=\"125\" class=\"cad-dimension-line\" />\n      <line x1=\"1110\" y1=\"105\" x2=\"1110\" y2=\"125\" class=\"cad-dimension-line\" />\n      <text x=\"540\" y=\"110\" class=\"cad-dimension-text\" font-weight=\"800\">|← 18.00 METERS CANTILEVER PROJECTION (ZERO GROUND SUPPORTS) →|</text>\n\n      <!-- Elevation Datums -->\n      <text x=\"1115\" y=\"140\" class=\"cad-elevation-marker\">∇ TOP OF ROOF +22.40M</text>\n      <text x=\"1115\" y=\"315\" class=\"cad-elevation-marker\">∇ FINISH FLOOR +18.20M</text>\n      <text x=\"1115\" y=\"380\" class=\"cad-elevation-marker\">∇ SOFFIT +15.50M</text>\n\n      <!-- Archival Title Block -->\n      <g transform=\"translate(860, 480)\">\n        <rect x=\"0\" y=\"0\" width=\"310\" height=\"95\" class=\"cad-title-block-box\" rx=\"3\" />\n        <text x=\"16\" y=\"24\" class=\"cad-dimension-text\" font-weight=\"800\">ANSCONS ATELIER // DWG A-101-REV.04</text>\n        <text x=\"16\" y=\"44\" class=\"cad-dimension-text\">TYP-01: HILLSIDE CANTILEVERS</text>\n        <text x=\"16\" y=\"62\" class=\"cad-dimension-text\">THE OBSIDIAN CANTILEVER // BEL-AIR</text>\n        <text x=\"16\" y=\"80\" class=\"cad-redline-callout\">AS-BUILT DEFLECTION: 0.00mm @ 120% LOAD</text>\n      </g>\n    </svg>\n  ",
  "typ-1-p2": "\n    <!-- Bluffline Sea-Wall Estate: Wave-Break Bedrock & Marine Concrete Sea-Wall -->\n    <svg viewBox=\"0 0 1200 600\" class=\"vellum-cad-overlay\" preserveAspectRatio=\"none\">\n      <!-- Grid Axis Lines -->\n      <line x1=\"280\" y1=\"80\" x2=\"280\" y2=\"560\" class=\"cad-dimension-line\" stroke-dasharray=\"10 4 2 4\" opacity=\"0.6\" />\n      <line x1=\"640\" y1=\"80\" x2=\"640\" y2=\"560\" class=\"cad-dimension-line\" stroke-dasharray=\"10 4 2 4\" opacity=\"0.6\" />\n      <line x1=\"920\" y1=\"80\" x2=\"920\" y2=\"560\" class=\"cad-dimension-line\" stroke-dasharray=\"10 4 2 4\" opacity=\"0.6\" />\n      <circle cx=\"280\" cy=\"95\" r=\"12\" class=\"cad-title-block-box\" />\n      <text x=\"280\" y=\"99\" text-anchor=\"middle\" class=\"cad-dimension-text\" font-size=\"10\" font-weight=\"800\">1</text>\n      <circle cx=\"640\" cy=\"95\" r=\"12\" class=\"cad-title-block-box\" />\n      <text x=\"640\" y=\"99\" text-anchor=\"middle\" class=\"cad-dimension-text\" font-size=\"10\" font-weight=\"800\">2</text>\n      <circle cx=\"920\" cy=\"95\" r=\"12\" class=\"cad-title-block-box\" />\n      <text x=\"920\" y=\"99\" text-anchor=\"middle\" class=\"cad-dimension-text\" font-size=\"10\" font-weight=\"800\">3</text>\n\n      <!-- Pacific Wave-Break Bedrock Shelf Profile -->\n      <path d=\"M 0,380 Q 180,330 380,390 T 780,450 L 1200,460 L 1200,600 L 0,600 Z\" class=\"cad-bedrock-slope\" />\n      <line x1=\"60\" y1=\"420\" x2=\"20\" y2=\"480\" class=\"cad-bedrock-hatch\" />\n      <line x1=\"150\" y1=\"400\" x2=\"90\" y2=\"490\" class=\"cad-bedrock-hatch\" />\n      <line x1=\"240\" y1=\"420\" x2=\"180\" y2=\"520\" class=\"cad-bedrock-hatch\" />\n      <line x1=\"340\" y1=\"440\" x2=\"280\" y2=\"550\" class=\"cad-bedrock-hatch\" />\n      <text x=\"40\" y=\"370\" class=\"cad-dimension-text\">PACIFIC WAVE-BREAK BEDROCK SHELF (HIGH TIDAL EXPOSURE)</text>\n\n      <!-- Ocean Wave Surge Dynamic Vectors -->\n      <path d=\"M 0,420 Q 150,360 280,410\" class=\"cad-accent-vector\" stroke-dasharray=\"6 3\" />\n      <path d=\"M 0,450 Q 180,400 320,440\" class=\"cad-accent-vector\" stroke-dasharray=\"6 3\" />\n      <text x=\"40\" y=\"450\" class=\"cad-redline-callout\">PACIFIC STORM SURGE 4,000 L/MIN PERIMETER DIVERTER</text>\n\n      <!-- 70 MPa Sulfate-Resistant Marine Concrete Sea-Wall Retention Barrier -->\n      <path d=\"M 280,220 L 520,220 L 500,470 L 260,470 Z\" class=\"cad-concrete-mass\" />\n      <!-- Sea-Wall Internal Rebar & Tie-Back Reinforcement -->\n      <line x1=\"320\" y1=\"240\" x2=\"300\" y2=\"460\" class=\"cad-detail-stroke\" />\n      <line x1=\"380\" y1=\"240\" x2=\"360\" y2=\"460\" class=\"cad-detail-stroke\" />\n      <line x1=\"440\" y1=\"240\" x2=\"420\" y2=\"460\" class=\"cad-detail-stroke\" />\n      <line x1=\"280\" y1=\"300\" x2=\"510\" y2=\"300\" class=\"cad-detail-stroke\" />\n      <line x1=\"270\" y1=\"380\" x2=\"505\" y2=\"380\" class=\"cad-detail-stroke\" />\n      <!-- Weep Holes & Drainage Tubes -->\n      <circle cx=\"340\" cy=\"430\" r=\"8\" class=\"cad-pile-anchor-head\" />\n      <circle cx=\"440\" cy=\"430\" r=\"8\" class=\"cad-pile-anchor-head\" />\n      <text x=\"310\" y=\"210\" class=\"cad-dimension-text\">70 MPa POZZOLAN SEA-WALL BARRIER</text>\n      <text x=\"310\" y=\"445\" class=\"cad-redline-callout\">WEEP-HOLE PRESSURE EQUALIZERS</text>\n\n      <!-- Marine Compound Cliffside Residence (Perched Behind Sea Wall) -->\n      <rect x=\"520\" y=\"140\" width=\"580\" height=\"260\" class=\"cad-detail-stroke\" />\n      <!-- Heavy Concrete Floor Slabs -->\n      <rect x=\"500\" y=\"270\" width=\"620\" height=\"20\" class=\"cad-structure-beam\" />\n      <rect x=\"500\" y=\"130\" width=\"620\" height=\"25\" class=\"cad-structure-beam\" />\n\n      <!-- Aluminum-Bronze C61400 Seismic Window Mullions & Glazing -->\n      <line x1=\"620\" y1=\"155\" x2=\"620\" y2=\"270\" class=\"cad-detail-stroke\" stroke-width=\"2\" />\n      <line x1=\"740\" y1=\"155\" x2=\"740\" y2=\"270\" class=\"cad-detail-stroke\" stroke-width=\"2\" />\n      <line x1=\"860\" y1=\"155\" x2=\"860\" y2=\"270\" class=\"cad-detail-stroke\" stroke-width=\"2\" />\n      <line x1=\"980\" y1=\"155\" x2=\"980\" y2=\"270\" class=\"cad-detail-stroke\" stroke-width=\"2\" />\n      <line x1=\"620\" y1=\"290\" x2=\"620\" y2=\"400\" class=\"cad-detail-stroke\" stroke-width=\"2\" />\n      <line x1=\"740\" y1=\"290\" x2=\"740\" y2=\"400\" class=\"cad-detail-stroke\" stroke-width=\"2\" />\n      <line x1=\"860\" y1=\"290\" x2=\"860\" y2=\"400\" class=\"cad-detail-stroke\" stroke-width=\"2\" />\n      <line x1=\"980\" y1=\"290\" x2=\"980\" y2=\"400\" class=\"cad-detail-stroke\" stroke-width=\"2\" />\n      <text x=\"560\" y=\"120\" class=\"cad-dimension-text\">C61400 ALUMINUM-BRONZE SEISMIC SLIP-JOINT FENESTRATION</text>\n\n      <!-- Sea-Wall Height Dimension Line -->\n      <line x1=\"240\" y1=\"220\" x2=\"240\" y2=\"470\" class=\"cad-dimension-line\" />\n      <line x1=\"230\" y1=\"220\" x2=\"250\" y2=\"220\" class=\"cad-dimension-line\" />\n      <line x1=\"230\" y1=\"470\" x2=\"250\" y2=\"470\" class=\"cad-dimension-line\" />\n      <text x=\"145\" y=\"340\" class=\"cad-dimension-text\" font-weight=\"800\">|← 8.5M SEA-WALL →|</text>\n\n      <!-- Elevation Datums -->\n      <text x=\"1115\" y=\"145\" class=\"cad-elevation-marker\">∇ ROOF LEVEL +14.80M</text>\n      <text x=\"1115\" y=\"285\" class=\"cad-elevation-marker\">∇ MAIN LIVING +9.50M</text>\n      <text x=\"1115\" y=\"415\" class=\"cad-elevation-marker\">∇ BEDROCK PINNING +2.00M</text>\n\n      <!-- Archival Title Block -->\n      <g transform=\"translate(860, 480)\">\n        <rect x=\"0\" y=\"0\" width=\"310\" height=\"95\" class=\"cad-title-block-box\" rx=\"3\" />\n        <text x=\"16\" y=\"24\" class=\"cad-dimension-text\" font-weight=\"800\">ANSCONS ATELIER // DWG A-102-REV.03</text>\n        <text x=\"16\" y=\"44\" class=\"cad-dimension-text\">TYP-01: HILLSIDE CANTILEVERS</text>\n        <text x=\"16\" y=\"62\" class=\"cad-dimension-text\">BLUFFLINE SEA-WALL // BIG SUR</text>\n        <text x=\"16\" y=\"80\" class=\"cad-redline-callout\">CHLORIDE ASSAY: &lt;480 COULOMBS (PASS)</text>\n      </g>\n    </svg>\n  ",
  "typ-2": "\n    <!-- Sonoran Desert Monolith IV: Dual-Wythe Concrete Massing & 5 Travertine Courtyards -->\n    <svg viewBox=\"0 0 1200 600\" class=\"vellum-cad-overlay\" preserveAspectRatio=\"none\">\n      <!-- Grid Axis Lines -->\n      <line x1=\"140\" y1=\"80\" x2=\"140\" y2=\"560\" class=\"cad-dimension-line\" stroke-dasharray=\"10 4 2 4\" opacity=\"0.6\" />\n      <line x1=\"330\" y1=\"80\" x2=\"330\" y2=\"560\" class=\"cad-dimension-line\" stroke-dasharray=\"10 4 2 4\" opacity=\"0.6\" />\n      <line x1=\"550\" y1=\"80\" x2=\"550\" y2=\"560\" class=\"cad-dimension-line\" stroke-dasharray=\"10 4 2 4\" opacity=\"0.6\" />\n      <line x1=\"770\" y1=\"80\" x2=\"770\" y2=\"560\" class=\"cad-dimension-line\" stroke-dasharray=\"10 4 2 4\" opacity=\"0.6\" />\n      <line x1=\"990\" y1=\"80\" x2=\"990\" y2=\"560\" class=\"cad-dimension-line\" stroke-dasharray=\"10 4 2 4\" opacity=\"0.6\" />\n      <circle cx=\"140\" cy=\"95\" r=\"12\" class=\"cad-title-block-box\" />\n      <text x=\"140\" y=\"99\" text-anchor=\"middle\" class=\"cad-dimension-text\" font-size=\"10\" font-weight=\"800\">A</text>\n      <circle cx=\"330\" cy=\"95\" r=\"12\" class=\"cad-title-block-box\" />\n      <text x=\"330\" y=\"99\" text-anchor=\"middle\" class=\"cad-dimension-text\" font-size=\"10\" font-weight=\"800\">B</text>\n      <circle cx=\"550\" cy=\"95\" r=\"12\" class=\"cad-title-block-box\" />\n      <text x=\"550\" y=\"99\" text-anchor=\"middle\" class=\"cad-dimension-text\" font-size=\"10\" font-weight=\"800\">C</text>\n      <circle cx=\"770\" cy=\"95\" r=\"12\" class=\"cad-title-block-box\" />\n      <text x=\"770\" y=\"99\" text-anchor=\"middle\" class=\"cad-dimension-text\" font-size=\"10\" font-weight=\"800\">D</text>\n      <circle cx=\"990\" cy=\"95\" r=\"12\" class=\"cad-title-block-box\" />\n      <text x=\"990\" y=\"99\" text-anchor=\"middle\" class=\"cad-dimension-text\" font-size=\"10\" font-weight=\"800\">E</text>\n\n      <!-- Caliche Hardpan Strata & Subsurface Horizon -->\n      <rect x=\"0\" y=\"480\" width=\"1200\" height=\"120\" class=\"cad-strata-layer\" />\n      <line x1=\"0\" y1=\"480\" x2=\"1200\" y2=\"480\" class=\"cad-structure-beam\" />\n      <!-- Caliche Texture Lines -->\n      <line x1=\"100\" y1=\"520\" x2=\"220\" y2=\"520\" class=\"cad-bedrock-hatch\" />\n      <line x1=\"380\" y1=\"540\" x2=\"520\" y2=\"540\" class=\"cad-bedrock-hatch\" />\n      <line x1=\"720\" y1=\"520\" x2=\"860\" y2=\"520\" class=\"cad-bedrock-hatch\" />\n      <text x=\"40\" y=\"565\" class=\"cad-dimension-text\">CALICHE HARDPAN BEDROCK // CONTINUOUS STRUCTURAL RAFT FOOTING</text>\n\n      <!-- Continuous Raft Footing & Sub-Floor Evaporative Water Flumes -->\n      <rect x=\"60\" y=\"445\" width=\"1080\" height=\"35\" class=\"cad-concrete-mass\" />\n      <rect x=\"140\" y=\"425\" width=\"920\" height=\"22\" class=\"cad-accent-vector\" stroke-dasharray=\"6 3\" />\n      <text x=\"320\" y=\"440\" class=\"cad-redline-callout\">SUB-FLOOR EVAPORATIVE WATER CHANNELS ∇ -0.45M (PASSIVE COOLING)</text>\n\n      <!-- 450mm Dual-Wythe Board-Formed Architectural Concrete Masses (5 Monumental Piers) -->\n      <!-- Pier A -->\n      <rect x=\"100\" y=\"170\" width=\"80\" height=\"255\" class=\"cad-concrete-mass\" />\n      <line x1=\"140\" y1=\"170\" x2=\"140\" y2=\"425\" class=\"cad-detail-stroke\" stroke-dasharray=\"3 3\" />\n      <!-- Pier B -->\n      <rect x=\"290\" y=\"170\" width=\"80\" height=\"255\" class=\"cad-concrete-mass\" />\n      <line x1=\"330\" y1=\"170\" x2=\"330\" y2=\"425\" class=\"cad-detail-stroke\" stroke-dasharray=\"3 3\" />\n      <!-- Pier C -->\n      <rect x=\"510\" y=\"170\" width=\"80\" height=\"255\" class=\"cad-concrete-mass\" />\n      <line x1=\"550\" y1=\"170\" x2=\"550\" y2=\"425\" class=\"cad-detail-stroke\" stroke-dasharray=\"3 3\" />\n      <!-- Pier D -->\n      <rect x=\"730\" y=\"170\" width=\"80\" height=\"255\" class=\"cad-concrete-mass\" />\n      <line x1=\"770\" y1=\"170\" x2=\"770\" y2=\"425\" class=\"cad-detail-stroke\" stroke-dasharray=\"3 3\" />\n      <!-- Pier E -->\n      <rect x=\"950\" y=\"170\" width=\"80\" height=\"255\" class=\"cad-concrete-mass\" />\n      <line x1=\"990\" y1=\"170\" x2=\"990\" y2=\"425\" class=\"cad-detail-stroke\" stroke-dasharray=\"3 3\" />\n\n      <!-- Formwork Tie-Hole Snap Lines Aligned to ±0.5mm across 60m Pour -->\n      <line x1=\"80\" y1=\"230\" x2=\"1050\" y2=\"230\" class=\"cad-detail-stroke\" stroke-dasharray=\"6 4\" />\n      <line x1=\"80\" y1=\"290\" x2=\"1050\" y2=\"290\" class=\"cad-detail-stroke\" stroke-dasharray=\"6 4\" />\n      <line x1=\"80\" y1=\"350\" x2=\"1050\" y2=\"350\" class=\"cad-detail-stroke\" stroke-dasharray=\"6 4\" />\n      <line x1=\"80\" y1=\"410\" x2=\"1050\" y2=\"410\" class=\"cad-detail-stroke\" stroke-dasharray=\"6 4\" />\n      <!-- Tie-Hole Alignment Markers -->\n      <circle cx=\"140\" cy=\"230\" r=\"3\" class=\"cad-pile-anchor-head\" />\n      <circle cx=\"330\" cy=\"230\" r=\"3\" class=\"cad-pile-anchor-head\" />\n      <circle cx=\"550\" cy=\"230\" r=\"3\" class=\"cad-pile-anchor-head\" />\n      <circle cx=\"770\" cy=\"230\" r=\"3\" class=\"cad-pile-anchor-head\" />\n      <circle cx=\"990\" cy=\"230\" r=\"3\" class=\"cad-pile-anchor-head\" />\n      <text x=\"360\" y=\"222\" class=\"cad-redline-callout\">TIE-HOLE GRID ALIGNED ±0.5 mm OVER 60M CONTINUOUS RUN</text>\n\n      <!-- Travertine Courtyards (Open Sky Skylights) -->\n      <rect x=\"180\" y=\"420\" width=\"110\" height=\"5\" class=\"cad-pile-anchor-head\" />\n      <text x=\"235\" y=\"310\" text-anchor=\"middle\" class=\"cad-dimension-text\" font-weight=\"700\">PATIO I</text>\n      <text x=\"235\" y=\"325\" text-anchor=\"middle\" class=\"cad-dimension-text\" font-size=\"8\">COURTYARD</text>\n\n      <rect x=\"370\" y=\"420\" width=\"140\" height=\"5\" class=\"cad-pile-anchor-head\" />\n      <text x=\"440\" y=\"310\" text-anchor=\"middle\" class=\"cad-dimension-text\" font-weight=\"700\">PATIO II</text>\n      <text x=\"440\" y=\"325\" text-anchor=\"middle\" class=\"cad-dimension-text\" font-size=\"8\">COURTYARD</text>\n\n      <rect x=\"590\" y=\"420\" width=\"140\" height=\"5\" class=\"cad-pile-anchor-head\" />\n      <text x=\"660\" y=\"310\" text-anchor=\"middle\" class=\"cad-dimension-text\" font-weight=\"700\">PATIO III</text>\n      <text x=\"660\" y=\"325\" text-anchor=\"middle\" class=\"cad-dimension-text\" font-size=\"8\">COURTYARD</text>\n\n      <rect x=\"810\" y=\"420\" width=\"140\" height=\"5\" class=\"cad-pile-anchor-head\" />\n      <text x=\"880\" y=\"310\" text-anchor=\"middle\" class=\"cad-dimension-text\" font-weight=\"700\">PATIO IV</text>\n      <text x=\"880\" y=\"325\" text-anchor=\"middle\" class=\"cad-dimension-text\" font-size=\"8\">COURTYARD</text>\n\n      <!-- Monumental Thermal Massing Concrete Roof Slab -->\n      <rect x=\"80\" y=\"125\" width=\"970\" height=\"45\" class=\"cad-structure-beam\" />\n      <text x=\"310\" y=\"152\" class=\"cad-dimension-text\">R-60 THERMAL MASS ROOF ENVELOPE (48°C TO 4°C DIURNAL SWING)</text>\n\n      <!-- Span Dimension Line -->\n      <line x1=\"80\" y1=\"110\" x2=\"1050\" y2=\"110\" class=\"cad-dimension-line\" />\n      <line x1=\"80\" y1=\"102\" x2=\"80\" y2=\"118\" class=\"cad-dimension-line\" />\n      <line x1=\"1050\" y1=\"102\" x2=\"1050\" y2=\"118\" class=\"cad-dimension-line\" />\n      <text x=\"460\" y=\"105\" class=\"cad-dimension-text\" font-weight=\"800\">|← 60.00 METERS CONTINUOUS POUR LENGTH →|</text>\n\n      <!-- Elevation Datums -->\n      <text x=\"1065\" y=\"145\" class=\"cad-elevation-marker\">∇ ROOF LEVEL +5.40M</text>\n      <text x=\"1065\" y=\"420\" class=\"cad-elevation-marker\">∇ TRAVERTINE FFL +0.00M</text>\n      <text x=\"1065\" y=\"455\" class=\"cad-elevation-marker\">∇ RAFT FOOTING -0.45M</text>\n\n      <!-- Archival Title Block -->\n      <g transform=\"translate(860, 480)\">\n        <rect x=\"0\" y=\"0\" width=\"310\" height=\"95\" class=\"cad-title-block-box\" rx=\"3\" />\n        <text x=\"16\" y=\"24\" class=\"cad-dimension-text\" font-weight=\"800\">ANSCONS ATELIER // DWG A-204-REV.02</text>\n        <text x=\"16\" y=\"44\" class=\"cad-dimension-text\">TYP-02: MONOLITHIC PAVILIONS</text>\n        <text x=\"16\" y=\"62\" class=\"cad-dimension-text\">MONOLITH IV // FIVE PATIOS</text>\n        <text x=\"16\" y=\"80\" class=\"cad-redline-callout\">CORE SAMPLE #09: 56-DAY MONITORED CURE</text>\n      </g>\n    </svg>\n  ",
  "typ-2-p4": "\n    <!-- Quarry Cut Pavilion: Alpine Granite Outcropping & Glulam Timber Beams -->\n    <svg viewBox=\"0 0 1200 600\" class=\"vellum-cad-overlay\" preserveAspectRatio=\"none\">\n      <!-- Grid Axis Lines -->\n      <line x1=\"380\" y1=\"80\" x2=\"380\" y2=\"560\" class=\"cad-dimension-line\" stroke-dasharray=\"10 4 2 4\" opacity=\"0.6\" />\n      <line x1=\"680\" y1=\"80\" x2=\"680\" y2=\"560\" class=\"cad-dimension-line\" stroke-dasharray=\"10 4 2 4\" opacity=\"0.6\" />\n      <line x1=\"980\" y1=\"80\" x2=\"980\" y2=\"560\" class=\"cad-dimension-line\" stroke-dasharray=\"10 4 2 4\" opacity=\"0.6\" />\n      <circle cx=\"380\" cy=\"95\" r=\"12\" class=\"cad-title-block-box\" />\n      <text x=\"380\" y=\"99\" text-anchor=\"middle\" class=\"cad-dimension-text\" font-size=\"10\" font-weight=\"800\">A</text>\n      <circle cx=\"680\" cy=\"95\" r=\"12\" class=\"cad-title-block-box\" />\n      <text x=\"680\" y=\"99\" text-anchor=\"middle\" class=\"cad-dimension-text\" font-size=\"10\" font-weight=\"800\">B</text>\n      <circle cx=\"980\" cy=\"95\" r=\"12\" class=\"cad-title-block-box\" />\n      <text x=\"980\" y=\"99\" text-anchor=\"middle\" class=\"cad-dimension-text\" font-size=\"10\" font-weight=\"800\">C</text>\n\n      <!-- Alpine Granite Outcropping Bedrock Slope & Wire Saw Cut -->\n      <path d=\"M 0,200 L 360,400 L 1200,400 L 1200,600 L 0,600 Z\" class=\"cad-bedrock-slope\" />\n      <line x1=\"80\" y1=\"280\" x2=\"30\" y2=\"350\" class=\"cad-bedrock-hatch\" />\n      <line x1=\"160\" y1=\"330\" x2=\"100\" y2=\"420\" class=\"cad-bedrock-hatch\" />\n      <line x1=\"260\" y1=\"380\" x2=\"200\" y2=\"480\" class=\"cad-bedrock-hatch\" />\n      <text x=\"40\" y=\"240\" class=\"cad-dimension-text\">SWISS ALPS GRANITE OUTCROPPING BEDROCK</text>\n\n      <!-- Diamond-Wire Leveled Living Floor (800 Tons Natural Granite) -->\n      <line x1=\"360\" y1=\"400\" x2=\"1140\" y2=\"400\" class=\"cad-structure-beam\" stroke-width=\"4\" />\n      <rect x=\"360\" y=\"400\" width=\"780\" height=\"20\" class=\"cad-pile-anchor-head\" />\n      <text x=\"410\" y=\"435\" class=\"cad-redline-callout\">DIAMOND-WIRE WIRE-SAWN GRANITE LIVING FLOOR (800 TONS LEVELED IN SITU)</text>\n\n      <!-- Heavy Timber Douglas Fir Glulam Structural Posts & Flitch Plates -->\n      <rect x=\"360\" y=\"190\" width=\"45\" height=\"210\" class=\"cad-structure-beam\" />\n      <rect x=\"660\" y=\"190\" width=\"45\" height=\"210\" class=\"cad-structure-beam\" />\n      <rect x=\"960\" y=\"190\" width=\"45\" height=\"210\" class=\"cad-structure-beam\" />\n      <!-- Post Base Pin Shoe Detail -->\n      <circle cx=\"382\" cy=\"395\" r=\"5\" class=\"cad-pile-anchor-head\" />\n      <circle cx=\"682\" cy=\"395\" r=\"5\" class=\"cad-pile-anchor-head\" />\n      <circle cx=\"982\" cy=\"395\" r=\"5\" class=\"cad-pile-anchor-head\" />\n\n      <!-- Primary Glulam Beams with Concealed Internal Flitch Plates -->\n      <rect x=\"330\" y=\"190\" width=\"780\" height=\"40\" class=\"cad-structure-beam\" />\n      <line x1=\"330\" y1=\"210\" x2=\"1110\" y2=\"210\" class=\"cad-accent-vector\" stroke-dasharray=\"8 4\" />\n      <text x=\"460\" y=\"180\" class=\"cad-dimension-text\">GLULAM DOUGLAS FIR WITH CONCEALED STEEL FLITCH PLATES</text>\n\n      <!-- R-60 Alpine Cold Roof Envelope for 3.5m Snow-Pack Load -->\n      <rect x=\"310\" y=\"130\" width=\"820\" height=\"60\" class=\"cad-concrete-mass\" />\n      <line x1=\"310\" y1=\"130\" x2=\"1130\" y2=\"130\" class=\"cad-structure-beam\" stroke-width=\"2\" />\n      <!-- Snow-Pack Load Vectors -->\n      <text x=\"500\" y=\"115\" class=\"cad-dimension-text\" font-weight=\"800\">↓↓ 35 kN/m² SNOW-PACK LOAD COMPLIANT (R-60 TRIPLE ISOLATED ENVELOPE)</text>\n\n      <!-- Triple-Pane Argon Fenestration Curtain Wall -->\n      <rect x=\"405\" y=\"230\" width=\"255\" height=\"170\" class=\"cad-detail-stroke\" />\n      <line x1=\"532\" y1=\"230\" x2=\"532\" y2=\"400\" class=\"cad-detail-stroke\" />\n      <rect x=\"705\" y=\"230\" width=\"255\" height=\"170\" class=\"cad-detail-stroke\" />\n      <line x1=\"832\" y1=\"230\" x2=\"832\" y2=\"400\" class=\"cad-detail-stroke\" />\n      <text x=\"470\" y=\"320\" class=\"cad-dimension-text\">TRIPLE-GLAZED ARGON LOW-E WALL</text>\n\n      <!-- Roof Span Dimension Line -->\n      <line x1=\"330\" y1=\"100\" x2=\"1110\" y2=\"100\" class=\"cad-dimension-line\" />\n      <line x1=\"330\" y1=\"92\" x2=\"330\" y2=\"108\" class=\"cad-dimension-line\" />\n      <line x1=\"1110\" y1=\"92\" x2=\"1110\" y2=\"108\" class=\"cad-dimension-line\" />\n      <text x=\"610\" y=\"96\" class=\"cad-dimension-text\" font-weight=\"800\">|← 26.00M CLEAR TIMBER ROOF SPAN →|</text>\n\n      <!-- Elevation Datums -->\n      <text x=\"1135\" y=\"145\" class=\"cad-elevation-marker\">∇ TOP OF COLD ROOF +6.80M</text>\n      <text x=\"1135\" y=\"235\" class=\"cad-elevation-marker\">∇ GLULAM CEILING +4.20M</text>\n      <text x=\"1135\" y=\"405\" class=\"cad-elevation-marker\">∇ GRANITE FINISH FLOOR +0.00M</text>\n\n      <!-- Archival Title Block -->\n      <g transform=\"translate(860, 480)\">\n        <rect x=\"0\" y=\"0\" width=\"310\" height=\"95\" class=\"cad-title-block-box\" rx=\"3\" />\n        <text x=\"16\" y=\"24\" class=\"cad-dimension-text\" font-weight=\"800\">ANSCONS ATELIER // DWG A-208-REV.03</text>\n        <text x=\"16\" y=\"44\" class=\"cad-dimension-text\">TYP-02: MONOLITHIC PAVILIONS</text>\n        <text x=\"16\" y=\"62\" class=\"cad-dimension-text\">QUARRY CUT PAVILION // ALPS</text>\n        <text x=\"16\" y=\"80\" class=\"cad-redline-callout\">DIAMOND-WIRE KERF: ±0.3mm TOLERANCE</text>\n      </g>\n    </svg>\n  ",
  "typ-3": "\n    <!-- Kyoto Sub-Grade Private Museum Vault: Double-Hulled Waterproofing & Decoupled Acoustic Slab -->\n    <svg viewBox=\"0 0 1200 600\" class=\"vellum-cad-overlay\" preserveAspectRatio=\"none\">\n      <!-- Grid Axis Lines -->\n      <line x1=\"280\" y1=\"80\" x2=\"280\" y2=\"560\" class=\"cad-dimension-line\" stroke-dasharray=\"10 4 2 4\" opacity=\"0.6\" />\n      <line x1=\"580\" y1=\"80\" x2=\"580\" y2=\"560\" class=\"cad-dimension-line\" stroke-dasharray=\"10 4 2 4\" opacity=\"0.6\" />\n      <line x1=\"880\" y1=\"80\" x2=\"880\" y2=\"560\" class=\"cad-dimension-line\" stroke-dasharray=\"10 4 2 4\" opacity=\"0.6\" />\n      <circle cx=\"280\" cy=\"95\" r=\"12\" class=\"cad-title-block-box\" />\n      <text x=\"280\" y=\"99\" text-anchor=\"middle\" class=\"cad-dimension-text\" font-size=\"10\" font-weight=\"800\">V1</text>\n      <circle cx=\"580\" cy=\"95\" r=\"12\" class=\"cad-title-block-box\" />\n      <text x=\"580\" y=\"99\" text-anchor=\"middle\" class=\"cad-dimension-text\" font-size=\"10\" font-weight=\"800\">V2</text>\n      <circle cx=\"880\" cy=\"95\" r=\"12\" class=\"cad-title-block-box\" />\n      <text x=\"880\" y=\"99\" text-anchor=\"middle\" class=\"cad-dimension-text\" font-size=\"10\" font-weight=\"800\">V3</text>\n\n      <!-- Ground Level & Subterranean Bedrock Strata -->\n      <line x1=\"0\" y1=\"150\" x2=\"1200\" y2=\"150\" class=\"cad-structure-beam\" stroke-width=\"2\" />\n      <text x=\"40\" y=\"140\" class=\"cad-elevation-marker\">∇ NATURAL GRADE LEVEL +0.00M (EXCAVATION ENVELOPE)</text>\n      <!-- Surrounding Bedrock Soil -->\n      <rect x=\"0\" y=\"150\" width=\"120\" height=\"450\" class=\"cad-strata-layer\" />\n      <rect x=\"1080\" y=\"150\" width=\"120\" height=\"450\" class=\"cad-strata-layer\" />\n\n      <!-- Outer Heavy Structural Concrete Retaining Vault -->\n      <rect x=\"120\" y=\"160\" width=\"960\" height=\"380\" rx=\"4\" class=\"cad-concrete-mass\" />\n\n      <!-- Dual-Hull Waterproofing Envelope: Bentonite Sheet & Welded HDPE -->\n      <rect x=\"145\" y=\"185\" width=\"910\" height=\"330\" rx=\"8\" class=\"cad-accent-vector\" stroke-dasharray=\"8 4\" />\n      <text x=\"260\" y=\"180\" class=\"cad-redline-callout\">DOUBLE-HULLED BENTONITE &amp; HDPE WATERPROOF TANKING (100 kPa PRESSURE RATED)</text>\n\n      <!-- Inner Decoupled Floating Room-Within-A-Room Acoustic Concrete Slab -->\n      <rect x=\"180\" y=\"440\" width=\"840\" height=\"40\" class=\"cad-structure-beam\" />\n      <!-- Elastomeric Acoustic Isolation Spring Pads (NC-12 Rating) -->\n      <circle cx=\"240\" cy=\"505\" r=\"9\" class=\"cad-pile-anchor-head\" />\n      <circle cx=\"440\" cy=\"505\" r=\"9\" class=\"cad-pile-anchor-head\" />\n      <circle cx=\"640\" cy=\"505\" r=\"9\" class=\"cad-pile-anchor-head\" />\n      <circle cx=\"840\" cy=\"505\" r=\"9\" class=\"cad-pile-anchor-head\" />\n      <circle cx=\"980\" cy=\"505\" r=\"9\" class=\"cad-pile-anchor-head\" />\n      <text x=\"320\" y=\"530\" class=\"cad-dimension-text\">ELASTOMERIC ACOUSTIC ISOLATION PADS (NC-12 NOISE RATING ACHIEVED)</text>\n\n      <!-- 3-Ton Counterweighted Solid Bronze Balanced Pivot Door Assembly -->\n      <line x1=\"280\" y1=\"230\" x2=\"280\" y2=\"440\" class=\"cad-structure-beam\" stroke-width=\"6\" />\n      <circle cx=\"280\" cy=\"440\" r=\"10\" class=\"cad-pile-anchor-head\" />\n      <!-- Door Swing Arc Clearance -->\n      <path d=\"M 280,440 A 150,150 0 0,0 430,440\" class=\"cad-accent-vector\" stroke-dasharray=\"4 4\" />\n      <text x=\"300\" y=\"320\" class=\"cad-redline-callout\">3-TON SOLID BRONZE BALANCED PIVOT DOOR (ZERO POWER MANUAL EFFORT)</text>\n\n      <!-- Museum-Grade Hermetic Climate Enclosure (±1% RH, ±0.5°C) -->\n      <rect x=\"340\" y=\"220\" width=\"650\" height=\"200\" class=\"cad-detail-stroke\" />\n      <!-- Laminar Ceiling Supply Diffusers -->\n      <line x1=\"380\" y1=\"220\" x2=\"950\" y2=\"220\" class=\"cad-detail-stroke\" stroke-dasharray=\"4 2\" />\n      <text x=\"440\" y=\"270\" class=\"cad-dimension-text\">MUSEUM-GRADE CLIMATE STABILITY: ±1% RH • ±0.5°C VINTAGE WINE &amp; SCROLL VAULT</text>\n      <!-- Glass Display Vitrines -->\n      <rect x=\"420\" y=\"330\" width=\"140\" height=\"90\" class=\"cad-detail-stroke\" />\n      <rect x=\"620\" y=\"330\" width=\"140\" height=\"90\" class=\"cad-detail-stroke\" />\n      <rect x=\"820\" y=\"330\" width=\"140\" height=\"90\" class=\"cad-detail-stroke\" />\n\n      <!-- Sub-Grade Depth Dimension Line -->\n      <line x1=\"100\" y1=\"150\" x2=\"100\" y2=\"480\" class=\"cad-dimension-line\" />\n      <line x1=\"90\" y1=\"150\" x2=\"110\" y2=\"150\" class=\"cad-dimension-line\" />\n      <line x1=\"90\" y1=\"480\" x2=\"110\" y2=\"480\" class=\"cad-dimension-line\" />\n      <text x=\"18\" y=\"320\" class=\"cad-dimension-text\" font-weight=\"800\">|← 6.20M SUB-GRADE DEPTH →|</text>\n\n      <!-- Elevation Datums -->\n      <text x=\"1090\" y=\"215\" class=\"cad-elevation-marker\">∇ VAULT CEILING -2.20M</text>\n      <text x=\"1090\" y=\"445\" class=\"cad-elevation-marker\">∇ FLOATING SLAB -5.80M</text>\n      <text x=\"1090\" y=\"545\" class=\"cad-elevation-marker\">∇ SUMP PIT -6.90M</text>\n\n      <!-- Archival Title Block -->\n      <g transform=\"translate(860, 480)\">\n        <rect x=\"0\" y=\"0\" width=\"310\" height=\"95\" class=\"cad-title-block-box\" rx=\"3\" />\n        <text x=\"16\" y=\"24\" class=\"cad-dimension-text\" font-weight=\"800\">ANSCONS ATELIER // DWG A-301-REV.05</text>\n        <text x=\"16\" y=\"44\" class=\"cad-dimension-text\">TYP-03: SUB-GRADE VAULTS</text>\n        <text x=\"16\" y=\"62\" class=\"cad-dimension-text\">KYOTO PRIVATE MUSEUM VAULT</text>\n        <text x=\"16\" y=\"80\" class=\"cad-redline-callout\">HYDROSTATIC WATERPROOF TEST: 100% PASS</text>\n      </g>\n    </svg>\n  ",
  "typ-3-p6": "\n    <!-- Wellness & Biophilic Movement Sanctuary: Sprung Oak Floor & Laminar Airflow HVAC -->\n    <svg viewBox=\"0 0 1200 600\" class=\"vellum-cad-overlay\" preserveAspectRatio=\"none\">\n      <!-- Grid Axis Lines -->\n      <line x1=\"240\" y1=\"80\" x2=\"240\" y2=\"560\" class=\"cad-dimension-line\" stroke-dasharray=\"10 4 2 4\" opacity=\"0.6\" />\n      <line x1=\"600\" y1=\"80\" x2=\"600\" y2=\"560\" class=\"cad-dimension-line\" stroke-dasharray=\"10 4 2 4\" opacity=\"0.6\" />\n      <line x1=\"960\" y1=\"80\" x2=\"960\" y2=\"560\" class=\"cad-dimension-line\" stroke-dasharray=\"10 4 2 4\" opacity=\"0.6\" />\n      <circle cx=\"240\" cy=\"95\" r=\"12\" class=\"cad-title-block-box\" />\n      <text x=\"240\" y=\"99\" text-anchor=\"middle\" class=\"cad-dimension-text\" font-size=\"10\" font-weight=\"800\">S1</text>\n      <circle cx=\"600\" cy=\"95\" r=\"12\" class=\"cad-title-block-box\" />\n      <text x=\"600\" y=\"99\" text-anchor=\"middle\" class=\"cad-dimension-text\" font-size=\"10\" font-weight=\"800\">S2</text>\n      <circle cx=\"960\" cy=\"95\" r=\"12\" class=\"cad-title-block-box\" />\n      <text x=\"960\" y=\"99\" text-anchor=\"middle\" class=\"cad-dimension-text\" font-size=\"10\" font-weight=\"800\">S3</text>\n\n      <!-- Subterranean Base Concrete Foundation Slab -->\n      <rect x=\"80\" y=\"470\" width=\"1040\" height=\"70\" class=\"cad-concrete-mass\" />\n      <text x=\"100\" y=\"525\" class=\"cad-dimension-text\">REINFORCED STRUCTURAL SLAB WITH INTEGRAL VAPOR RETARDER</text>\n\n      <!-- Decoupled Dual-Density Neoprene Suspension Pads -->\n      <rect x=\"160\" y=\"445\" width=\"45\" height=\"25\" class=\"cad-pile-anchor-head\" />\n      <rect x=\"360\" y=\"445\" width=\"45\" height=\"25\" class=\"cad-pile-anchor-head\" />\n      <rect x=\"560\" y=\"445\" width=\"45\" height=\"25\" class=\"cad-pile-anchor-head\" />\n      <rect x=\"760\" y=\"445\" width=\"45\" height=\"25\" class=\"cad-pile-anchor-head\" />\n      <rect x=\"960\" y=\"445\" width=\"45\" height=\"25\" class=\"cad-pile-anchor-head\" />\n      <text x=\"360\" y=\"462\" class=\"cad-dimension-text\">DUAL-DENSITY NEOPRENE SUSPENSION PADS</text>\n\n      <!-- Sprung European White-Oak Flooring Layer with Hydronic Radiant Loops -->\n      <rect x=\"80\" y=\"415\" width=\"1040\" height=\"30\" class=\"cad-structure-beam\" />\n      <!-- Serpentine Hydronic Heating Loops Graphic -->\n      <path d=\"M 100,430 Q 140,422 180,430 T 260,430 T 340,430 T 420,430 T 500,430 T 580,430 T 660,430 T 740,430 T 820,430 T 900,430 T 980,430 T 1060,430\" class=\"cad-accent-vector\" />\n      <text x=\"280\" y=\"405\" class=\"cad-redline-callout\">HYDRONIC RADIANT HEATING LOOPS INTEGRATED IN SPRUNG FLOOR (28°C SURFACE COMFORT)</text>\n\n      <!-- Zero-Velocity Laminar Airflow HVAC Slots in Ceiling Plenum -->\n      <rect x=\"80\" y=\"140\" width=\"1040\" height=\"45\" class=\"cad-detail-stroke\" />\n      <!-- Micro-Downflow Vectors -->\n      <path d=\"M 200,185 L 200,240 M 400,185 L 400,240 M 600,185 L 600,240 M 800,185 L 800,240 M 1000,185 L 1000,240\" class=\"cad-detail-stroke\" stroke-dasharray=\"4 2\" />\n      <text x=\"320\" y=\"130\" class=\"cad-dimension-text\">ZERO-VELOCITY LAMINAR AIRFLOW PLENUM (NO TURBULENT DRAFTS // HEPA H14)</text>\n\n      <!-- Acoustic Slatted American Walnut Baffles on Lateral Walls -->\n      <line x1=\"80\" y1=\"185\" x2=\"80\" y2=\"415\" class=\"cad-structure-beam\" stroke-width=\"8\" />\n      <line x1=\"1120\" y1=\"185\" x2=\"1120\" y2=\"415\" class=\"cad-structure-beam\" stroke-width=\"8\" />\n      <text x=\"100\" y=\"260\" class=\"cad-dimension-text\">SLATTED ACOUSTIC WALNUT BAFFLES (RT60: 0.28 SECONDS REVERBERATION TIME)</text>\n\n      <!-- Full-Spectrum Circadian Luminaire Array -->\n      <rect x=\"220\" y=\"195\" width=\"760\" height=\"15\" class=\"cad-pile-anchor-head\" />\n      <text x=\"440\" y=\"206\" class=\"cad-dimension-text\" font-size=\"8\">FULL-SPECTRUM 6500K - 2200K CIRCADIAN EMITTERS</text>\n\n      <!-- Sanctuary Height Dimension Line -->\n      <line x1=\"60\" y1=\"140\" x2=\"60\" y2=\"415\" class=\"cad-dimension-line\" />\n      <line x1=\"50\" y1=\"140\" x2=\"70\" y2=\"140\" class=\"cad-dimension-line\" />\n      <line x1=\"50\" y1=\"415\" x2=\"70\" y2=\"415\" class=\"cad-dimension-line\" />\n      <text x=\"8\" y=\"280\" class=\"cad-dimension-text\" font-weight=\"800\">|← 4.50M CEILING HEIGHT →|</text>\n\n      <!-- Elevation Datums -->\n      <text x=\"1135\" y=\"160\" class=\"cad-elevation-marker\">∇ PLENUM LEVEL +4.50M</text>\n      <text x=\"1135\" y=\"420\" class=\"cad-elevation-marker\">∇ SPRUNG OAK FFL +0.00M</text>\n      <text x=\"1135\" y=\"475\" class=\"cad-elevation-marker\">∇ SLAB BASE -0.55M</text>\n\n      <!-- Archival Title Block -->\n      <g transform=\"translate(860, 480)\">\n        <rect x=\"0\" y=\"0\" width=\"310\" height=\"95\" class=\"cad-title-block-box\" rx=\"3\" />\n        <text x=\"16\" y=\"24\" class=\"cad-dimension-text\" font-weight=\"800\">ANSCONS ATELIER // DWG A-306-REV.02</text>\n        <text x=\"16\" y=\"44\" class=\"cad-dimension-text\">TYP-03: SUB-GRADE VAULTS</text>\n        <text x=\"16\" y=\"62\" class=\"cad-dimension-text\">BIOPHILIC MOVEMENT SANCTUARY</text>\n        <text x=\"16\" y=\"80\" class=\"cad-redline-callout\">DECOUPLED SPRUNG OAK: 0.28s RT60 PASSED</text>\n      </g>\n    </svg>\n  ",
  "typ-4": "\n    <!-- Tribeca Cast-Iron Mercantile Exchange: Needle-Beam Underpinning & Bronze Elevator Core -->\n    <svg viewBox=\"0 0 1200 600\" class=\"vellum-cad-overlay\" preserveAspectRatio=\"none\">\n      <!-- Grid Axis Lines -->\n      <line x1=\"200\" y1=\"80\" x2=\"200\" y2=\"560\" class=\"cad-dimension-line\" stroke-dasharray=\"10 4 2 4\" opacity=\"0.6\" />\n      <line x1=\"500\" y1=\"80\" x2=\"500\" y2=\"560\" class=\"cad-dimension-line\" stroke-dasharray=\"10 4 2 4\" opacity=\"0.6\" />\n      <line x1=\"820\" y1=\"80\" x2=\"820\" y2=\"560\" class=\"cad-dimension-line\" stroke-dasharray=\"10 4 2 4\" opacity=\"0.6\" />\n      <circle cx=\"200\" cy=\"95\" r=\"12\" class=\"cad-title-block-box\" />\n      <text x=\"200\" y=\"99\" text-anchor=\"middle\" class=\"cad-dimension-text\" font-size=\"10\" font-weight=\"800\">P1</text>\n      <circle cx=\"500\" cy=\"95\" r=\"12\" class=\"cad-title-block-box\" />\n      <text x=\"500\" y=\"99\" text-anchor=\"middle\" class=\"cad-dimension-text\" font-size=\"10\" font-weight=\"800\">C1</text>\n      <circle cx=\"820\" cy=\"95\" r=\"12\" class=\"cad-title-block-box\" />\n      <text x=\"820\" y=\"99\" text-anchor=\"middle\" class=\"cad-dimension-text\" font-size=\"10\" font-weight=\"800\">E1</text>\n\n      <!-- 1892 Landmarked Cast-Iron Masonry Party Wall & Joist Courses -->\n      <rect x=\"80\" y=\"140\" width=\"220\" height=\"300\" class=\"cad-concrete-mass\" />\n      <!-- Brick Coursing Detail Lines -->\n      <line x1=\"80\" y1=\"180\" x2=\"300\" y2=\"180\" class=\"cad-detail-stroke\" />\n      <line x1=\"80\" y1=\"220\" x2=\"300\" y2=\"220\" class=\"cad-detail-stroke\" />\n      <line x1=\"80\" y1=\"260\" x2=\"300\" y2=\"260\" class=\"cad-detail-stroke\" />\n      <line x1=\"80\" y1=\"300\" x2=\"300\" y2=\"300\" class=\"cad-detail-stroke\" />\n      <line x1=\"80\" y1=\"340\" x2=\"300\" y2=\"340\" class=\"cad-detail-stroke\" />\n      <line x1=\"80\" y1=\"380\" x2=\"300\" y2=\"380\" class=\"cad-detail-stroke\" />\n      <text x=\"95\" y=\"165\" class=\"cad-dimension-text\">1892 HISTORIC BRICK &amp; CAST-IRON PARTY WALL</text>\n\n      <!-- Precision Heavy Steel Needle-Beam Shoring & High-Tonnage Micro-Jacks -->\n      <rect x=\"40\" y=\"405\" width=\"320\" height=\"38\" class=\"cad-structure-beam\" />\n      <rect x=\"100\" y=\"443\" width=\"45\" height=\"35\" class=\"cad-pile-anchor-head\" />\n      <rect x=\"240\" y=\"443\" width=\"45\" height=\"35\" class=\"cad-pile-anchor-head\" />\n      <text x=\"55\" y=\"395\" class=\"cad-redline-callout\">HYDRAULIC NEEDLE BEAMS &amp; 450 kN MICRO-JACK UNDERPINNING</text>\n\n      <!-- Excavated 4.5m Sub-Basement into Manhattan Schist Bedrock -->\n      <rect x=\"80\" y=\"490\" width=\"1040\" height=\"95\" class=\"cad-strata-layer\" />\n      <line x1=\"80\" y1=\"490\" x2=\"1120\" y2=\"490\" class=\"cad-structure-beam\" />\n      <text x=\"320\" y=\"535\" class=\"cad-dimension-text\">∇ NEW 4.5M SUB-BASEMENT EXCAVATED INTO MANHATTAN SCHIST BEDROCK</text>\n\n      <!-- Restored Ornate Fluted Cast-Iron Structural Column with Corinthian Capital -->\n      <rect x=\"475\" y=\"190\" width=\"50\" height=\"255\" class=\"cad-concrete-mass\" />\n      <!-- Fluting Lines -->\n      <line x1=\"487\" y1=\"230\" x2=\"487\" y2=\"445\" class=\"cad-detail-stroke\" />\n      <line x1=\"500\" y1=\"230\" x2=\"500\" y2=\"445\" class=\"cad-detail-stroke\" />\n      <line x1=\"513\" y1=\"230\" x2=\"513\" y2=\"445\" class=\"cad-detail-stroke\" />\n      <!-- Corinthian Capital Crown -->\n      <path d=\"M 450,225 Q 500,185 550,225 Z\" class=\"cad-pile-anchor-head\" />\n      <!-- Base Plate -->\n      <rect x=\"460\" y=\"445\" width=\"80\" height=\"15\" class=\"cad-structure-beam\" />\n      <text x=\"390\" y=\"180\" class=\"cad-redline-callout\">ULTRASONIC NON-DESTRUCTIVE FLAW TESTED COLUMN (0.0 DEFECTS)</text>\n\n      <!-- Blackened Architectural Bronze Elevator Core with Pulleys & Guide Rails -->\n      <rect x=\"720\" y=\"140\" width=\"200\" height=\"350\" class=\"cad-detail-stroke\" stroke-dasharray=\"6 3\" />\n      <!-- Bronze Pulley Wheels -->\n      <circle cx=\"780\" cy=\"180\" r=\"22\" class=\"cad-pile-anchor-head\" />\n      <circle cx=\"860\" cy=\"180\" r=\"22\" class=\"cad-pile-anchor-head\" />\n      <!-- Hoist Cable Lines -->\n      <line x1=\"780\" y1=\"180\" x2=\"780\" y2=\"480\" class=\"cad-structure-beam\" stroke-width=\"2\" />\n      <line x1=\"860\" y1=\"180\" x2=\"860\" y2=\"480\" class=\"cad-structure-beam\" stroke-width=\"2\" />\n      <!-- Counterweight -->\n      <rect x=\"845\" y=\"270\" width=\"30\" height=\"60\" class=\"cad-accent-vector\" />\n      <text x=\"730\" y=\"130\" class=\"cad-dimension-text\">BLACKENED ARCHITECTURAL BRONZE ELEVATOR HOISTWAY</text>\n\n      <!-- Underpinning Depth Dimension Line -->\n      <line x1=\"40\" y1=\"440\" x2=\"40\" y2=\"535\" class=\"cad-dimension-line\" />\n      <line x1=\"30\" y1=\"440\" x2=\"50\" y2=\"440\" class=\"cad-dimension-line\" />\n      <line x1=\"30\" y1=\"535\" x2=\"50\" y2=\"535\" class=\"cad-dimension-line\" />\n      <text x=\"8\" y=\"490\" class=\"cad-dimension-text\" font-weight=\"800\">|← 4.5M SCHIST DEPTH →|</text>\n\n      <!-- Elevation Datums -->\n      <text x=\"1135\" y=\"155\" class=\"cad-elevation-marker\">∇ HISTORIC CEILING +4.80M</text>\n      <text x=\"1135\" y=\"440\" class=\"cad-elevation-marker\">∇ HISTORIC GROUND +0.00M</text>\n      <text x=\"1135\" y=\"535\" class=\"cad-elevation-marker\">∇ SUB-BASEMENT FFL -4.50M</text>\n\n      <!-- Archival Title Block -->\n      <g transform=\"translate(860, 480)\">\n        <rect x=\"0\" y=\"0\" width=\"310\" height=\"95\" class=\"cad-title-block-box\" rx=\"3\" />\n        <text x=\"16\" y=\"24\" class=\"cad-dimension-text\" font-weight=\"800\">ANSCONS ATELIER // DWG A-408-REV.04</text>\n        <text x=\"16\" y=\"44\" class=\"cad-dimension-text\">TYP-04: HISTORIC RECONSTRUCTION</text>\n        <text x=\"16\" y=\"62\" class=\"cad-dimension-text\">MERCANTILE EXCHANGE // TRIBECA</text>\n        <text x=\"16\" y=\"80\" class=\"cad-redline-callout\">NEEDLE-BEAM SHORING PASSED // ZERO SETTLEMENT</text>\n      </g>\n    </svg>\n  "
};

// Comprehensive Database for Built Works Typologies (All 7 Featured Commissions)
const PORTFOLIO_TYPOLOGIES = {
  'typ-1': {
    code: 'TYP-01 // HILLSIDE CANTILEVERS',
    stamp: 'MONOGRAPH RECORD 01 OF 12 // COMMISSION COMPLETE // RESTRICTED',
    title: 'Project 01: The Obsidian Cantilever // Bel-Air Ridge',
    location: 'Bel-Air Ridge, Los Angeles, California // 34.0837° N, 118.4467° W • 42° Slope',
    image: 'assets/images/project-1-belair.jpg',
    redlines: [
      "f'c = 65 MPa Self-Consolidating Foundation Pour",
      "14 Dywidag Rock Tiebacks Drilled 32m into Bedrock",
      "Zero Spring Deflection Tolerance ±0.3 mm Achieved",
      "Charred Shou Sugi Ban Accoya & Acoustic Low-Iron Glazing"
    ],
    plateA: {
      incline: '42° Weathered Shale Canyon Incline',
      fault: '3.8 km to Active Coastal Fault Line',
      strata: 'Deep Bedrock Shale & Fractured Siltstone',
      piles: '14 Dywidag Rock Tiebacks (32m Embedded)',
      stamp: 'GEOTECHNICAL DRILLING PASS: q_allow = 1,600 kN/m²'
    },
    plateB: {
      steel: '142 MT',
      steelDesc: 'Tapered Box-Girder Moment Frame Steel',
      concrete: '480 m³',
      concreteDesc: 'Continuous 36-Hr Self-Consolidating Placement',
      tolerance: '±0.3 mm',
      toleranceDesc: 'Zero Deflection @ 120% Live Load Test',
      span: '18 M',
      spanDesc: 'Pure Gravity-Defying Clear Projection',
      artifacts: [
        { icon: '🔩', label: 'Dywidag Tieback' },
        { icon: '🔥', label: 'Shou Sugi Ban' },
        { icon: '📐', label: 'Moment Joint' }
      ]
    },
    plateC: {
      caption: 'The Obsidian Cantilever spans 18 meters out over the canyon abyss with zero vertical ground supports beneath the living volume. Belgian bluestone floors transition seamlessly into ultra-clear low-iron acoustic glass walls.',
      camera: 'Phase One IQ4 150MP • Rodenstock 23mm HR • f/11 • 1/30s • ISO 50'
    },
    polaroid: {
      image: 'assets/images/polaroid-inspection.jpg',
      note: 'Rock tieback pull-test verified @ 1,850 kN — AP'
    },
    reels: [
      {
        day: 'DAY 01',
        title: 'Deep Bedrock Blasting & Shale Terracing',
        log: 'Hydraulic rock splitters terrace 42° canyon shale. Zero seismic micro-fractures detected in adjacent coastal ridge strata.',
        fc: "f'c = 28 MPa Mudmat",
        temp: '18.4°C',
        vibration: '0.08 mm/s PPV'
      },
      {
        day: 'DAY 120',
        title: '14 Dywidag Rock Tiebacks Drilled 32 Meters',
        log: 'High-tensile post-tensioned Dywidag anchors bored 32m deep into basalt bedrock. Tensioned to 120% proof load with zero deflection.',
        fc: 'Tension Proof: 1,850 kN',
        temp: '22.1°C',
        vibration: '0.02 mm/s PPV'
      },
      {
        day: 'DAY 210',
        title: 'Welded Tapered Box Girder Erection',
        log: 'Main cantilever spine welded in continuous inert gas shielded environment. Ultrasonic flaw inspection verified 100% moment penetration.',
        fc: 'Ultrasonic 100% Pass',
        temp: '19.8°C',
        vibration: '0.00 mm/s PPV'
      },
      {
        day: 'DAY 340',
        title: 'Shou Sugi Ban Accoya & Low-Iron Enclosure',
        log: 'Charred timber facade installed on thermally broken aluminum sub-frame. Motorized 6-meter sliding glass panes calibrated to silk glide.',
        fc: 'Air Infiltration: 0.01 CFM',
        temp: '21.0°C',
        vibration: '0.00 mm/s PPV'
      },
      {
        day: 'DAY 480',
        title: 'Final Commission Turnover & Hand-Over',
        log: 'Deflection sensors confirm zero measurable sag under full dead + 120% live load. Client provenance dossier signed and turnover complete.',
        fc: 'Commission Turnover Complete',
        temp: '20.5°C',
        vibration: '0.00 mm/s PPV'
      }
    ]
  },

  'typ-1-p2': {
    code: 'TYP-01 // HILLSIDE CANTILEVERS',
    stamp: 'MONOGRAPH RECORD 02 OF 12 // COMMISSION COMPLETE // RESTRICTED',
    title: 'Project 02: Bluffline Sea-Wall Estate // Big Sur Coast',
    location: 'Highway 1 Coastal Bluff, Big Sur, California // 36.2704° N, 121.8081° W • Wave-Break Rim',
    image: 'assets/images/project-big-sur.jpg',
    redlines: [
      "70 MPa Sulfate-Resistant Pozzolan Marine Concrete",
      "Marine-Grade C61400 Aluminum-Bronze Mullions",
      "4,000 L/min Subsurface Storm Surge Diverter Flumes",
      "Seismic Slip Joint Movement Range: ±40 mm"
    ],
    plateA: {
      incline: 'Oceanfront Wave-Break Bedrock Shelf',
      fault: 'San Andreas Coastal Shear Zone (12.4 km)',
      strata: 'Granitic Coastal Basalt & Wave-Wash Reef',
      piles: 'Drilled Stainless Clad Rock Socket Caissons',
      stamp: 'CHLORIDE ASSAY: 480 COULOMBS (ASTM C1202) PASS'
    },
    plateB: {
      steel: '220 MT',
      steelDesc: 'Duplex 2205 Stainless Reinforcing Rebar',
      concrete: '1,800 m³',
      concreteDesc: '70 MPa Marine Pozzolan Volcanic Ash Mix',
      tolerance: '±0.5 mm',
      toleranceDesc: 'Seismic Slip-Joint & Bronze Mullion Fit',
      span: '26 M',
      spanDesc: 'Wave-Resistant Cantilevered Living Deck',
      artifacts: [
        { icon: '🌊', label: 'Marine Concrete' },
        { icon: '🥉', label: 'C61400 Bronze' },
        { icon: '⚡', label: 'Surge Diverter' }
      ]
    },
    plateC: {
      caption: 'Anchored directly into ocean wave-break bedrock, Bluffline Sea-Wall Estate withstands cyclonic salt-spray winds and tidal surges through monolithic massing and marine-grade bronze joinery.',
      camera: 'Phase One IQ4 150MP • Schneider 35mm LS • f/11 • 1/20s • ISO 50'
    },
    polaroid: {
      image: 'assets/images/polaroid-inspection.jpg',
      note: 'Marine pozzolan core permeability verified — AP'
    },
    reels: [
      {
        day: 'DAY 01',
        title: 'Tidal Cofferdam & Bedrock Socketing',
        log: 'Steel sheet pile cofferdam positioned against Pacific high-tide swell. Rotary core drilling into wave-break basalt bed.',
        fc: "f'c = 70 MPa Marine Mix",
        temp: '14.0°C',
        vibration: '0.12 mm/s PPV'
      },
      {
        day: 'DAY 110',
        title: 'Duplex Stainless Rebar & Monolithic Pour',
        log: 'Corrosion-proof Duplex 2205 rebar cage placed with 80mm clear cover. High-density pozzolan concrete placed continuously.',
        fc: 'Chloride Test: 480 C',
        temp: '15.5°C',
        vibration: '0.03 mm/s PPV'
      },
      {
        day: 'DAY 230',
        title: 'Subsurface 4,000 L/min Surge Diverter Installation',
        log: 'Heavy polymer concrete drainage flumes embedded behind retaining face to relieve hydrostatic wave backpressure.',
        fc: 'Flow Test: 4,200 L/min',
        temp: '16.0°C',
        vibration: '0.01 mm/s PPV'
      },
      {
        day: 'DAY 350',
        title: 'C61400 Bronze Window Mullions Glazing',
        log: 'Marine-grade aluminum-bronze custom curtainwall fitted with laminated hurricane-rated acoustic glass panels.',
        fc: 'Cyclonic Wind Tested',
        temp: '17.2°C',
        vibration: '0.00 mm/s PPV'
      },
      {
        day: 'DAY 460',
        title: 'Commission Certification & Client Hand-Over',
        log: 'Full atmospheric salt-spray and seismic sensor validation logged. Commission complete and certified for extreme longevity.',
        fc: 'Commission Turnover Complete',
        temp: '16.5°C',
        vibration: '0.00 mm/s PPV'
      }
    ]
  },

  'typ-2': {
    code: 'TYP-02 // MONOLITHIC PAVILIONS',
    stamp: 'MONOGRAPH RECORD 03 OF 12 // COMMISSION COMPLETE // RESTRICTED',
    title: 'Project 03: Monolith IV: House of Five Patios // Sonoran Desert',
    location: 'Sonoran Desert, Arizona // 32.2226° N, 110.9747° W • Extreme Thermal Mass',
    image: 'assets/images/project-sonoran.jpg',
    redlines: [
      "450mm Dual-Wythe Board-Formed Architectural Concrete",
      "Pulverized Local Desert River Aggregate Batching",
      "Formwork Tie-Hole Grid Aligned to ±0.5 mm Over 60m Pour",
      "Hand-Chiseled Travertine Courtyards & Evaporative Water Flumes"
    ],
    plateA: {
      incline: '0.0° Flat Sonoran Alluvial Plateau',
      fault: 'Diurnal Thermal Shift ΔT = 44°C (48°C to 4°C)',
      strata: 'Dense Caliche Hardpan & Granitic Gravel',
      piles: 'Integrated Continuous Concrete Raft Foundation',
      stamp: 'PASSIVE THERMAL MASS CERTIFICATION #AZ-5502'
    },
    plateB: {
      steel: '185 MT',
      steelDesc: 'Epoxy-Coated Seismic Reinforcing Cage',
      concrete: '1,450 m³',
      concreteDesc: 'Dual-Wythe Board-Formed River Aggregate Mix',
      tolerance: '±0.5 mm',
      toleranceDesc: 'Tie-Hole Grid Across 60m Pour Run',
      span: '24 M',
      spanDesc: 'Deep Cantilevered Thermal Shading Portico',
      artifacts: [
        { icon: '🧪', label: 'Core Sample #09' },
        { icon: '🏜️', label: 'River Aggregate' },
        { icon: '💧', label: 'Evaporative Channel' }
      ]
    },
    plateC: {
      caption: 'Monolith IV: House of Five Patios. Low-slung thermal mass engineered with pulverized local desert river aggregate, framing five travertine courtyards and subterranean cooling water channels.',
      camera: 'Hasselblad H6D-100c • HC 28mm • f/11 • 1/60s • ISO 64'
    },
    polaroid: {
      image: 'assets/images/polaroid-inspection.jpg',
      note: 'Core sample #09 cured 56 days under thermal blanket — AP'
    },
    reels: [
      {
        day: 'DAY 01',
        title: 'Caliche Hardpan Excavation & Raft Footing',
        log: 'Diamond trencher saws caliche hardpan to seat continuous thermal mass raft footing. Sub-grade geothermal ducts laid.',
        fc: "f'c = 35 MPa Mudmat",
        temp: '38.0°C',
        vibration: '0.02 mm/s PPV'
      },
      {
        day: 'DAY 90',
        title: 'Precision Board-Form Formwork Alignment',
        log: 'Rough-sawn Douglas fir formwork erected across 60m continuous pour run. Laser leveling confirms tie-holes aligned to ±0.5 mm.',
        fc: 'Tie-Hole Grid: ±0.5 mm',
        temp: '41.2°C',
        vibration: '0.00 mm/s PPV'
      },
      {
        day: 'DAY 180',
        title: 'Continuous 36-Hour River Aggregate Placement',
        log: 'Single continuous pour utilizing pulverized Sonoran river aggregate. Thermal blanket curing initiated under computer telemetry.',
        fc: "f'c = 55 MPa Achieved",
        temp: '36.5°C',
        vibration: '0.01 mm/s PPV'
      },
      {
        day: 'DAY 310',
        title: 'Hand-Chiseled Travertine & Evaporative Water Flumes',
        log: 'Craftsmen hand-chisel five courtyard surfaces. Sub-floor perimeter water channels filled to provide passive micro-climate cooling.',
        fc: 'Cooling Delta: -12°C',
        temp: '44.0°C',
        vibration: '0.00 mm/s PPV'
      },
      {
        day: 'DAY 420',
        title: 'Diurnal Thermal Mass Hand-Over & Turnover',
        log: '48°C peak daytime exterior swing yields interior 21.5°C constant without active daytime compressor chilling. Commission turned over.',
        fc: 'Zero Refrigeration Pass',
        temp: '21.5°C Interior',
        vibration: '0.00 mm/s PPV'
      }
    ]
  },

  'typ-2-p4': {
    code: 'TYP-02 // MONOLITHIC PAVILIONS',
    stamp: 'MONOGRAPH RECORD 04 OF 12 // COMMISSION COMPLETE // RESTRICTED',
    title: 'Project 04: Quarry Cut Pavilion // Swiss Alpine Pass',
    location: 'Furka Pass Granite Outcrop, Uri, Switzerland // 46.5728° N, 8.4150° E • 2,430m Elevation',
    image: 'assets/images/project-alpine.jpg',
    redlines: [
      "Precision Diamond-Wire Sawn Alpine Granite Floor",
      "Heavy Timber Douglas Fir Glulam with Flitch Plates",
      "R-60 Triple-Isolated Roof Envelope for 3.5m Snow Pack",
      "Seismic Bedrock Dowels Drilled 14m Into Solid Gneiss"
    ],
    plateA: {
      incline: 'Exposed High-Alpine Granite Outcropping',
      fault: 'Alpine Glacial Heave & Freeze-Thaw Shock',
      strata: 'Massive Central Aare Granite Bedrock',
      piles: 'Precision Diamond-Wire Cut Plane Seats',
      stamp: 'SWISS ALPINE CODE SIA-261 SNOW LOAD CERTIFIED'
    },
    plateB: {
      steel: '65 MT',
      steelDesc: 'Concealed High-Tensile Steel Flitch Plates',
      concrete: '380 m³',
      concreteDesc: 'Frost-Resistant Silica Fume Foundation Grout',
      tolerance: '±0.2 mm',
      toleranceDesc: 'Wire-Sawn Granite Floor Alignment',
      span: '22 M',
      spanDesc: 'Cantilevered Glulam Alpine Vista Deck',
      artifacts: [
        { icon: '⛰️', label: 'Aare Granite' },
        { icon: '🌲', label: 'Douglas Fir' },
        { icon: '❄️', label: 'R-60 Roof' }
      ]
    },
    plateC: {
      caption: 'Quarry Cut Pavilion. Carved directly into exposed Furka granite outcroppings. 800 tons of natural mountain bedrock leveled as the interior living floor, sheltered by massive glue-laminated timber beams.',
      camera: 'Leica S3 • Summarit-S 35mm ASPH • f/8.0 • 1/125s • ISO 100'
    },
    polaroid: {
      image: 'assets/images/polaroid-inspection.jpg',
      note: 'Granite wire-saw plane verified level — AP'
    },
    reels: [
      {
        day: 'DAY 01',
        title: 'Helicopter Lift & Diamond-Wire Saw Setup',
        log: 'Diamond-wire cutting rigs airlifted to 2,430m pass. Precision slicing of 800 tons of natural alpine granite begins.',
        fc: 'Granite Compressive: 180 MPa',
        temp: '-4.0°C',
        vibration: '0.01 mm/s PPV'
      },
      {
        day: 'DAY 80',
        title: 'Granite Bedrock Floor Plane Completion',
        log: 'Leveling of mountain bedrock finished. Sawn granite living floor sealed with natural silane-siloxane impregnator.',
        fc: 'Tolerance: ±0.2 mm',
        temp: '6.5°C',
        vibration: '0.00 mm/s PPV'
      },
      {
        day: 'DAY 160',
        title: 'Heavy Glulam Beam & Flitch Plate Assembly',
        log: 'Douglas fir glue-laminated roof bents assembled on site with hidden internal steel flitch plates and counter-sunk bronze dowels.',
        fc: 'Bending Capacity: 48 MPa',
        temp: '12.0°C',
        vibration: '0.00 mm/s PPV'
      },
      {
        day: 'DAY 260',
        title: 'R-60 Triple-Isolated Roof Envelope Glazing',
        log: 'Multi-layer aerogel insulation blanket and heated gutter de-icing cables installed to support 3.5m snow pack.',
        fc: 'Snow Load: 18.5 kN/m²',
        temp: '2.0°C',
        vibration: '0.00 mm/s PPV'
      },
      {
        day: 'DAY 365',
        title: 'Alpine Winter Hand-Over & Turnover',
        log: 'First blizzard verified: zero heat loss, fireplace drafting perfectly, glass condensation-free. Monograph dossier closed.',
        fc: 'Commission Turnover Complete',
        temp: '20.0°C Interior',
        vibration: '0.00 mm/s PPV'
      }
    ]
  },

  'typ-3': {
    code: 'TYP-03 // SUB-GRADE VAULTS & GALLERIES',
    stamp: 'MONOGRAPH RECORD 05 OF 12 // COMMISSION COMPLETE // RESTRICTED',
    title: 'Project 05: Sub-Grade Private Museum & Wine Vault // Kyoto Foothills',
    location: 'Kyoto Foothills, Japan // 35.0116° N, 135.7681° E • Hydrostatic Vault',
    image: 'assets/images/project-4-vault.jpg',
    redlines: [
      "Double-Hulled Bentonite Sheet & Welded HDPE Envelope",
      "Fully Decoupled Floating Slab on Elastomeric Pads (NC-12)",
      "3-Ton Counterweighted Solid Bronze Balanced Pivot Door",
      "Museum-Grade Climate Precision: ±1% RH • ±0.5°C Constant"
    ],
    plateA: {
      incline: '14m Subterranean Foothill Excavation',
      fault: 'Hydrostatic Water Table Pressure 100 kPa',
      strata: 'Deep Saturated Clay & Sub-Grade Granitic Bedrock',
      piles: 'Secant Bored Perimeter Wall with Bentonite Cutoff',
      stamp: 'SUBTERRANEAN WATERTIGHT ENVELOPE CERTIFIED'
    },
    plateB: {
      steel: '160 MT',
      steelDesc: 'Epoxy-Coated Seismic Reinforcing Cage',
      concrete: '980 m³',
      concreteDesc: 'Crystalline Waterproofing Additive Mix',
      tolerance: '±0.2 mm',
      toleranceDesc: 'Floating Slab Elastomeric Joint Clearance',
      span: '30 M',
      spanDesc: 'Arched Monolithic Underground Gallery Vault',
      artifacts: [
        { icon: '🏺', label: 'Museum Vault' },
        { icon: '🧱', label: 'Bentonite Seal' },
        { icon: '🚪', label: '3-Ton Bronze Door' }
      ]
    },
    plateC: {
      caption: 'Kyoto Sub-Grade Vault houses priceless antiquities and rare vintage reserves requiring museum-grade environmental stability (±1% RH, ±0.5°C). Decoupled floating room-within-a-room acoustic slab sitting on elastomeric isolation pads.',
      camera: 'Phase One IQ4 150MP • Schneider 28mm LS • f/9.0 • 1.5s • ISO 50'
    },
    polaroid: {
      image: 'assets/images/polaroid-inspection.jpg',
      note: 'Hydrostatic pressure test passed @ 100 kPa — AP'
    },
    reels: [
      {
        day: 'DAY 01',
        title: 'Secant Bored Perimeter Wall & Hydrostatic Shoring',
        log: 'Interlocking secant piles bored 18m deep into saturated Kyoto foothills to form impermeable hydrostatic barrier.',
        fc: 'Hydrostatic Cutoff Achieved',
        temp: '12.0°C',
        vibration: '0.10 mm/s PPV'
      },
      {
        day: 'DAY 120',
        title: 'Deep Excavation & Double-Hulled Bentonite Envelope',
        log: 'Subterranean volume excavated. Bentonite geotextile sheets heat-welded to HDPE secondary liner with zero puncture flaws.',
        fc: 'Permeability: 0.00 L/min',
        temp: '13.5°C',
        vibration: '0.02 mm/s PPV'
      },
      {
        day: 'DAY 220',
        title: 'Elastomeric Isolation Pads & Floating Room Slab',
        log: 'Dual-density elastomeric acoustic bearings placed. Floating concrete slab poured without mechanical bridging (NC-12 rating).',
        fc: 'Noise Rating: NC-12 Pass',
        temp: '14.0°C',
        vibration: '0.00 mm/s PPV'
      },
      {
        day: 'DAY 330',
        title: '3-Ton Solid Bronze Pivot Door Erection',
        log: 'Counterweighted bronze vault portal balanced with concealed roller bearings; single-finger touch actuation verified.',
        fc: 'Door Balance: Zero Resistance',
        temp: '13.5°C',
        vibration: '0.00 mm/s PPV'
      },
      {
        day: 'DAY 440',
        title: 'Micro-Climate Telemetry Sign-Off & Turnover',
        log: 'Dual-redundant mechanical plants verified: constant 13.5°C ±0.2°C and 65% RH ±1%. Client security covenant activated.',
        fc: 'Commission Turnover Complete',
        temp: '13.5°C Constant',
        vibration: '0.00 mm/s PPV'
      }
    ]
  },

  'typ-3-p6': {
    code: 'TYP-03 // SUB-GRADE VAULTS & GALLERIES',
    stamp: 'MONOGRAPH RECORD 06 OF 12 // COMMISSION COMPLETE // RESTRICTED',
    title: 'Project 06: Wellness & Biophilic Movement Sanctuary // Urban Retreat',
    location: 'Private Residential Enclave, Tokyo, Japan // 35.6762° N, 139.6503° E • Acoustically Decoupled',
    image: 'assets/images/project-sanctuary.jpg',
    redlines: [
      "Sprung European White-Oak Flooring on Decoupled Neoprene Pads",
      "Concealed Hydronic Radiant Heating Loops in Sub-Floor",
      "Zero-Velocity Laminar Airflow HVAC (No Convective Drafts)",
      "Shadowline Wall Reveals with Acoustic Slatted Walnut Baffles"
    ],
    plateA: {
      incline: 'Sub-Grade Decoupled Movement Chamber',
      fault: 'Urban Subway Ground Vibration Damping (NC-18)',
      strata: 'Deep Alluvial Sandstone & Damped Concrete Pod',
      piles: 'Elastomeric Foundation Isolation Core',
      stamp: 'ACOUSTIC REVERBERATION RT60: 0.28s VERIFIED'
    },
    plateB: {
      steel: '38 MT',
      steelDesc: 'Vibration-Damped Lightweight Steel Framing',
      concrete: '240 m³',
      concreteDesc: 'Acoustic Mass Concrete Inertia Base',
      tolerance: '±0.2 mm',
      toleranceDesc: 'Shadowline Slatted Walnut Joinery Reveal',
      span: '14 M',
      spanDesc: 'Column-Free Clear Movement Yoga Sanctuary',
      artifacts: [
        { icon: '🧘', label: 'Sprung Oak' },
        { icon: '🌿', label: 'Laminar Air' },
        { icon: '🪵', label: 'Walnut Baffles' }
      ]
    },
    plateC: {
      caption: 'A 60-square-meter dual-purpose yoga and dynamic movement hall built within a luxury private residential enclave. Sprung European white-oak flooring on decoupled dual-density neoprene pads absorbs joint impact.',
      camera: 'Leica SL2 • Vario-Elmarit 24-70mm • f/4.0 • 1/50s • ISO 200'
    },
    polaroid: {
      image: 'assets/images/polaroid-inspection.jpg',
      note: 'RT60 decay rate measured at 0.28s — AP'
    },
    reels: [
      {
        day: 'DAY 01',
        title: 'Acoustic Enclosure Demolition & Sub-Base Laser Scan',
        log: 'Chamber stripped to structural shell. Laser scanning maps floor levelness to 0.1mm tolerance.',
        fc: 'Laser Scan Complete',
        temp: '18.0°C',
        vibration: '0.04 mm/s PPV'
      },
      {
        day: 'DAY 60',
        title: 'Dual-Density Neoprene Pads & Hydronic Heating Loops',
        log: 'Kinetic isolation pads placed on 400mm centers. Cross-linked polyethylene radiant coils pressure-tested to 6 bar.',
        fc: 'Pressure Test 6 Bar Pass',
        temp: '19.5°C',
        vibration: '0.00 mm/s PPV'
      },
      {
        day: 'DAY 140',
        title: 'Sprung European White-Oak Floor System Laying',
        log: 'Selected quarter-sawn white oak tongues fitted with organic plant-wax finish. Impact absorption calibrated to DIN standards.',
        fc: 'Impact Damping 58% Pass',
        temp: '20.0°C',
        vibration: '0.00 mm/s PPV'
      },
      {
        day: 'DAY 210',
        title: 'Laminar HVAC Plenum & Walnut Acoustic Baffles',
        log: 'Micro-perforated ceiling diffuser delivers zero-velocity fresh air. Slatted acoustic American walnut baffles conceal circadian LEDs.',
        fc: 'Air Velocity < 0.1 m/s',
        temp: '21.0°C',
        vibration: '0.00 mm/s PPV'
      },
      {
        day: 'DAY 290',
        title: 'Biophilic Tuning & Client Turnover',
        log: 'Circadian spectrum tested across 2700K to 6500K. Client handover completed with bound acoustic validation certificate.',
        fc: 'Commission Turnover Complete',
        temp: '21.0°C Constant',
        vibration: '0.00 mm/s PPV'
      }
    ]
  },

  'typ-4': {
    code: 'TYP-04 // HISTORIC RECONSTRUCTION',
    stamp: 'MONOGRAPH RECORD 07 OF 12 // COMMISSION COMPLETE // RESTRICTED',
    title: 'Project 07: The Cast-Iron Mercantile Exchange // Tribeca, NYC',
    location: 'Franklin Street, Tribeca, New York City // 40.7188° N, 74.0089° W • 1892 Landmarked',
    image: 'assets/images/project-2-tribeca.jpg',
    redlines: [
      "Needle-Beam Shoring & Micro-Jack Underpinning @ Party Walls",
      "New 4.5m Sub-Basement Excavated Into Manhattan Schist",
      "Restored Ornate Fluted Cast-Iron Columns (Ultrasonic Flaw Tested)",
      "Blackened Architectural Bronze Elevator Core with Exposed Pulleys"
    ],
    plateA: {
      incline: '1892 Landmarked Masonry Party Wall Underpinning',
      fault: 'Historic Ground Settlement & Shoring Control',
      strata: 'Manhattan Schist Bedrock Formation',
      piles: 'Precision Needle Beams & Hydraulic Micropile Jacks',
      stamp: 'NYC LANDMARKS PRESERVATION COMMISSION APPROVAL #LPC-8821'
    },
    plateB: {
      steel: '88 MT',
      steelDesc: 'Blackened Architectural Bronze & Structural Steel Core',
      concrete: '340 m³',
      concreteDesc: 'High-Early Strength Underpinning Foundation Pour',
      tolerance: '±0.3 mm',
      toleranceDesc: 'Cast-Iron Column-to-Bronze Interface Fit',
      span: '16 M',
      spanDesc: 'Historic Cast-Iron Clear-Span Vaulted Loft',
      artifacts: [
        { icon: '🏛️', label: 'Fluted Cast Iron' },
        { icon: '⚙️', label: 'Bronze Elevator Core' },
        { icon: '🔍', label: 'Ultrasonic Pulse Log' }
      ]
    },
    plateC: {
      caption: 'Adaptive structural conversion of an 1892 Tribeca commercial warehouse into a multi-level private triplex estate. Restored fluted cast-iron Corinthian columns, blackened architectural bronze elevator core, and double-height skylight atrium.',
      camera: 'Phase One IQ4 150MP • Rodenstock 32mm HR • f/8.0 • 1/30s • ISO 50'
    },
    polaroid: {
      image: 'assets/images/polaroid-inspection.jpg',
      note: 'Ultrasonic pulse testing confirmed zero casting flaws — AP'
    },
    reels: [
      {
        day: 'DAY 01',
        title: 'Laser 3D Survey & Needle-Beam Shoring Installation',
        log: 'Laser 3D scanning of 1892 brick party walls. Heavy steel needle beams inserted through foundation masonry onto hydraulic jacks.',
        fc: 'Settlement: 0.0 mm Monitored',
        temp: '14.0°C',
        vibration: '0.01 mm/s PPV'
      },
      {
        day: 'DAY 110',
        title: '4.5-Meter Sub-Basement Excavation & Underpinning',
        log: 'Precision mini-excavators carve into Manhattan schist beneath existing building. Reinforced concrete underpinning pits poured.',
        fc: "f'c = 50 MPa Grout",
        temp: '16.5°C',
        vibration: '0.02 mm/s PPV'
      },
      {
        day: 'DAY 220',
        title: 'Fluted Cast-Iron Structural Restoration & Testing',
        log: 'Original Corinthian cast-iron columns stripped of historic coatings. Ultrasonic flaw testing proves 100% sound matrix.',
        fc: 'Ultrasonic Flaw: Zero Defects',
        temp: '19.0°C',
        vibration: '0.00 mm/s PPV'
      },
      {
        day: 'DAY 340',
        title: 'Blackened Bronze Elevator Core & Glass Atrium Erection',
        log: 'Multi-story blackened architectural bronze hoistway with exposed counterweights and custom brass pulley wheels installed.',
        fc: 'Fit Tolerance: ±0.3 mm',
        temp: '21.0°C',
        vibration: '0.00 mm/s PPV'
      },
      {
        day: 'DAY 450',
        title: 'LPC Historic Sign-Off & Triplex Hand-Over',
        log: 'NYC Landmarks Preservation Commission final inspection passed with distinction. Client key handover with archival bound provenance folio.',
        fc: 'LPC Certificate Issued',
        temp: '20.5°C',
        vibration: '0.00 mm/s PPV'
      }
    ]
  }
};

/* ==========================================================================
   ARCHITECTURAL DRAWING REVISION LIFECYCLE (REV 01 -> REV 06)
   Parametric SVG linework, technical specs and field stamps for each phase
   ========================================================================== */

const DWG_CODES = {
  'typ-1': 'BA-RES-2026',
  'typ-1-p2': 'BS-SEAWALL-2026',
  'typ-2': 'SN-MONO-2026',
  'typ-2-p4': 'AL-QUARRY-2026',
  'typ-3': 'KY-VAULT-2026',
  'typ-3-p6': 'KY-SANCT-2026',
  'typ-4': 'TR-MERC-2026'
};

const REVISION_PHASES = {
  1: {
    num: 'REV 01',
    name: 'CONCEPT',
    badge: 'REV 01 // CONCEPT MASSING',
    icon: '✎',
    tag: 'CONCEPT STAGE // CHARCOAL VOLUMETRIC MASSING STUDY',
    desc: 'Hand-Drafted Charcoal Massing, Solar Azimuth & Topography'
  },
  2: {
    num: 'REV 02',
    name: 'SCHEMATIC',
    badge: 'REV 02 // SCHEMATIC WIREFRAME',
    icon: '◫',
    tag: 'SCHEMATIC STAGE // 1:50 AXIAL GRID & SPATIAL PROGRAMMING',
    desc: '1:50 Axial Column Grid, Spatial Envelopes & Circulation'
  },
  3: {
    num: 'REV 03',
    name: 'STRUCTURAL',
    badge: 'REV 03 // STRUCTURAL CALCS',
    icon: '⚙',
    tag: 'STRUCTURAL STAGE // MOMENT FRAME & TIEBACK ENGINEERING',
    desc: 'Deep Moment Frames, Bedrock Tiebacks & Tectonic Calcs'
  },
  4: {
    num: 'REV 04',
    name: 'MATERIAL',
    badge: 'REV 04 // MATERIAL TECTONICS',
    icon: '◈',
    tag: 'MATERIAL SPECIFICATION // FINISH TECTONICS & JOINERY',
    desc: 'Tectonic Materiality Sections, Timber Grain & Metallurgy'
  },
  5: {
    num: 'REV 05',
    name: 'EXECUTION',
    badge: 'REV 05 // FIELD REDLINES',
    icon: '▲',
    tag: 'FIELD EXECUTION // CONTRACTOR REDLINES & QA VERIFICATION',
    desc: 'Active Field Redlines, Pull-Test Stamps & QA Verification'
  },
  6: {
    num: 'REV 06',
    name: 'COMPLETED',
    badge: 'REV 06 // COMPLETED AS-BUILT',
    icon: '✓',
    tag: 'COMPLETED COMMISSION // AS-BUILT PHOTOGRAMMETRIC RECORD',
    desc: 'Official As-Built Drawing Set & Photogrammetric Record'
  }
};

function getRevisionRedlines(typologyKey, rev, defaultRedlines = []) {
  switch (rev) {
    case 1:
      return [
        "☀️ Solar Azimuth Study: 242° Summer Solstice West Incline",
        "⛰️ Natural Terrain Incline: Topographical Ridge Analysis",
        "💨 Prevailing Thermal Breezes & Micro-Climate Passive Vector",
        "📐 Volumetric Massing Boundary Envelope (Zero Footprint Violations)"
      ];
    case 2:
      return [
        "📐 1:50 Axial Modular Grid: 6.00m Coordinate Spacing",
        "🚶 Uninterrupted Axial Circulation Spine & Sight Cone",
        "🪟 180° Panoramic Canyon / Horizon Vista Clear-Line",
        "🚪 Acoustic Thermal Buffer Zone & Vestibule Break"
      ];
    case 4:
      return [
        "🪵 Select Smoked French Oak & Charred Accoya Fascia (DIN Class 1)",
        "🪨 Honed Belgian Bluestone & Sawn Caliche Travertine Paving",
        "🪟 Low-Iron Acoustic Triple Glazing (Ug = 0.5 W/m²K // NC-15)",
        "🪙 Patinated C61400 Aluminum-Bronze Inlay Profiles & Hardware"
      ];
    case 5:
      return [
        "🔴 RFI #108: Foundation Tieback Embedment Depth 32.4m Verified",
        "🔴 Core Test #12: 74.2 MPa Compressive Break Exceeds Spec",
        "🔴 Laser 3D Scan Variance: 0.12mm (Within ±0.3mm Max Tolerance)",
        "🔴 PE Stamp #48291: Approved As Noted for High-Early Concrete Pour"
      ];
    case 3:
    case 6:
    default:
      return (defaultRedlines && defaultRedlines.length) ? defaultRedlines : [
        "f'c = 65 MPa Self-Consolidating Foundation Pour",
        "14 Dywidag Rock Tiebacks Drilled 32m into Bedrock",
        "Zero Spring Deflection Tolerance ±0.3 mm Achieved",
        "Charred Shou Sugi Ban Accoya & Acoustic Low-Iron Glazing"
      ];
  }
}

function getConceptOverlay(key) {
  const meta = {
    'typ-1': {
      title: 'THE OBSIDIAN CANTILEVER // BEL-AIR RIDGE',
      dwg: 'DWG SK-101 // REV 01',
      site: 'WEATHERED SHALE 38° CANYON INCLINE (CONTOUR ∇ +420FT)',
      slope: 'M 0,220 L 460,540 L 1200,540 L 1200,600 L 0,600 Z',
      volLabel: 'PRIMARY CANTILEVER VOLUME [9,400 SQ. FT. CONDITIONED]',
      volX: 280, volY: 270, volW: 820, volH: 130,
      note1: 'ZERO VERTICAL SUPPORT BEYOND RIDGE // PURE 18M SPAN',
      note2: 'SOLAR THERMAL VECTOR // SUMMER SHADING OVERHANG 2.4M',
      solarApex: '☀️ SUMMER SOLSTICE AZIMUTH: 242° // 14:00 PEAK SOLAR ANGLE',
      windNote: '💨 PREVAILING THERMAL CANYON DRAFT // PASSIVE COOLING VECTOR'
    },
    'typ-1-p2': {
      title: 'BLUFFLINE SEA-WALL // BIG SUR COAST',
      dwg: 'DWG SK-102 // REV 01',
      site: 'PACIFIC WAVE-BREAK BEDROCK SHELF (HIGH TIDAL EXPOSURE)',
      slope: 'M 0,380 Q 180,330 380,390 T 780,450 L 1200,460 L 1200,600 L 0,600 Z',
      volLabel: 'CLIFFSIDE RESIDENCE & MARINE BARRIER [12,200 SQ. FT.]',
      volX: 420, volY: 200, volW: 680, volH: 220,
      note1: '70 MPa POZZOLAN SEA-WALL PROFILE // 8.5M TIDAL RETENTION',
      note2: 'C61400 ALUMINUM-BRONZE CORROSION SHIELD ENVELOPE',
      solarApex: '☀️ COASTAL HORIZON AZIMUTH: 260° // MARITIME EXPOSURE',
      windNote: '💨 PACIFIC STORM SURGE 4,000 L/MIN PERIMETER DIVERTER'
    },
    'typ-2': {
      title: 'MONOLITH IV // FIVE PATIOS (SONORAN DESERT)',
      dwg: 'DWG SK-204 // REV 01',
      site: 'CALICHE HARDPAN BEDROCK // CONTINUOUS STRUCTURAL RAFT',
      slope: 'M 0,480 L 1200,480 L 1200,600 L 0,600 Z',
      volLabel: 'DUAL-WYTHE BOARD-FORMED MONOLITH MASSING [14,500 SQ. FT.]',
      volX: 80, volY: 170, volW: 980, volH: 260,
      note1: '5 MONUMENTAL CONCRETE PIERS // 4 INTERNAL TRAVERTINE PATIOS',
      note2: 'SUB-FLOOR EVAPORATIVE WATER CHANNELS ∇ -0.45M',
      solarApex: '☀️ DESERT ZENITH AZIMUTH: 285° // 48°C EXTREME SUMMER PEAK',
      windNote: '💨 DIURNAL COURTYARD AIR CIRCULATION & THERMAL SIPHON'
    },
    'typ-2-p4': {
      title: 'QUARRY CUT PAVILION // SWISS ALPS',
      dwg: 'DWG SK-208 // REV 01',
      site: 'SWISS ALPS GRANITE OUTCROPPING BEDROCK PROFILE',
      slope: 'M 0,200 L 360,400 L 1200,400 L 1200,600 L 0,600 Z',
      volLabel: 'ALPINE TIMBER CLEAR-SPAN PAVILION [8,800 SQ. FT.]',
      volX: 330, volY: 170, volW: 790, volH: 230,
      note1: 'DIAMOND-WIRE WIRE-SAWN GRANITE LIVING FLOOR (800 TONS)',
      note2: 'GLULAM DOUGLAS FIR TIMBER SPINE // FLITCH PLATE CONNECTIONS',
      solarApex: '☀️ ALPINE PASS AZIMUTH: 210° // WINTER LOW-ANGLE HEATING',
      windNote: '↓↓ 35 kN/m² SNOW-PACK LOAD COMPLIANT COLD ROOF'
    },
    'typ-3': {
      title: 'KYOTO PRIVATE MUSEUM VAULT',
      dwg: 'DWG SK-301 // REV 01',
      site: '∇ NATURAL GRADE LEVEL +0.00M // 6.2M SUB-GRADE EXCAVATION',
      slope: 'M 0,150 L 1200,150 L 1200,600 L 0,600 Z',
      volLabel: 'DOUBLE-HULLED WATERPROOF RETENTION VAULT [6,200 SQ. FT.]',
      volX: 140, volY: 180, volW: 920, volH: 320,
      note1: 'INNER DECOUPLED FLOATING ROOM-WITHIN-A-ROOM (NC-12)',
      note2: '3-TON SOLID BRONZE BALANCED PIVOT VAULT ENTRANCE',
      solarApex: '☼ AIR-GAPPED THERMAL BUFFER // SUBTERRANEAN CONSTANT 18°C',
      windNote: '≋ HYDROSTATIC GROUNDWATER EQUALIZER & SUMP DRAINAGE'
    },
    'typ-3-p6': {
      title: 'BIOPHILIC MOVEMENT SANCTUARY // KYOTO',
      dwg: 'DWG SK-306 // REV 01',
      site: '∇ SUBTERRANEAN BEDROCK BASIN // KINETIC ACOUSTIC PIT',
      slope: 'M 0,140 L 1200,140 L 1200,600 L 0,600 Z',
      volLabel: 'KINETICALLY ISOLATED MOVEMENT ATELIER [5,100 SQ. FT.]',
      volX: 120, volY: 180, volW: 960, volH: 280,
      note1: 'SPRUNG EUROPEAN WHITE OAK FLOOR // HYDRONIC RADIANT LOOPS',
      note2: 'SLATTED ACOUSTIC WALNUT BAFFLES // CIRCADIAN SPECTRUM',
      solarApex: '☼ FULL-SPECTRUM 6500K - 2200K CIRCADIAN EMITTER ARRAY',
      windNote: '💨 ZERO-VELOCITY LAMINAR AIRFLOW CEILING PLENUM (HEPA H14)'
    },
    'typ-4': {
      title: 'THE CAST-IRON MERCANTILE EXCHANGE // TRIBECA',
      dwg: 'DWG SK-408 // REV 01',
      site: '1892 LANDMARKED BRICK & CAST-IRON PARTY WALLS',
      slope: 'M 0,490 L 1200,490 L 1200,600 L 0,600 Z',
      volLabel: 'TRIPLEX CONVERSION & NEW 4.5M SUB-BASEMENT [11,800 SQ. FT.]',
      volX: 80, volY: 140, volW: 1040, volH: 340,
      note1: 'HYDRAULIC NEEDLE BEAMS & 450 kN MICRO-JACK UNDERPINNING',
      note2: 'RESTORED FLUTED CAST-IRON COLUMNS & BRONZE ELEVATOR CORE',
      solarApex: '☀️ CENTRAL ATRIUM SKYLIGHT SHAFT // LIGHTWELL CORE',
      windNote: '∇ 4.5M EXCAVATION INTO MANHATTAN SCHIST BEDROCK'
    }
  };

  const m = meta[key] || meta['typ-1'];

  return `
    <!-- ARCHITECTURAL DRAWING REVISION 01: CONCEPT MASSING STUDY -->
    <svg viewBox="0 0 1200 600" class="vellum-cad-overlay" preserveAspectRatio="none">
      <!-- Natural Site Slope & Strata Contours -->
      <path d="${m.slope}" class="cad-bedrock-slope" />
      <path d="M 0,190 Q 300,280 600,470 T 1200,520" class="cad-bedrock-hatch" stroke-dasharray="6 4" stroke-width="1.5" />
      <path d="M 0,270 Q 340,340 680,540 T 1200,570" class="cad-bedrock-hatch" stroke-dasharray="6 4" stroke-width="1.5" />
      <text x="50" y="210" class="cad-dimension-text" font-weight="800">${m.site}</text>

      <!-- Solar Trajectory Arc & Solstice Azimuth -->
      <path d="M 80,360 Q 640,20 1140,280" class="cad-accent-vector" stroke-dasharray="8 6" stroke-width="2.5" />
      <circle cx="640" cy="105" r="16" class="cad-pile-anchor-head" />
      <line x1="640" y1="80" x2="640" y2="60" class="cad-accent-vector" />
      <line x1="640" y1="130" x2="640" y2="150" class="cad-accent-vector" />
      <line x1="615" y1="105" x2="595" y2="105" class="cad-accent-vector" />
      <line x1="665" y1="105" x2="685" y2="105" class="cad-accent-vector" />
      <text x="640" y="50" text-anchor="middle" class="cad-dimension-text" font-weight="800">${m.solarApex}</text>
      <text x="140" y="340" class="cad-dimension-text">AM SOLAR CAPTURE</text>
      <text x="1000" y="260" class="cad-dimension-text">PM HORIZON AZIMUTH</text>

      <!-- Prevailing Wind / Thermal Micro-Climate Vector -->
      <path d="M 60,480 Q 360,400 780,260" class="cad-detail-stroke" stroke-dasharray="5 5" stroke-width="2" />
      <text x="100" y="465" class="cad-redline-callout">${m.windNote}</text>

      <!-- Gestural Charcoal Massing Blocks (Hand-Drafted Roughness) -->
      <rect x="${m.volX}" y="${m.volY}" width="${m.volW}" height="${m.volH}" class="cad-concrete-mass" stroke-dasharray="10 5" stroke-width="3" rx="4" />
      <rect x="${m.volX - 30}" y="${m.volY - 30}" width="${m.volW + 60}" height="35" class="cad-structure-beam" stroke-dasharray="8 4" stroke-width="2.5" />
      <line x1="${m.volX + 20}" y1="${m.volY}" x2="${m.volX + m.volW - 20}" y2="${m.volY + m.volH}" class="cad-detail-stroke" stroke-dasharray="4 4" />
      <line x1="${m.volX + 20}" y1="${m.volY + m.volH}" x2="${m.volX + m.volW - 20}" y2="${m.volY}" class="cad-detail-stroke" stroke-dasharray="4 4" />

      <!-- Sightline Cone -->
      <polygon points="${m.volX + 40},${m.volY + 70} 1160,180 1160,520" fill="rgba(198, 162, 92, 0.08)" stroke="#c6a25c" stroke-dasharray="4 3" stroke-width="1.2" />
      <text x="${m.volX + (m.volW / 2)}" y="${m.volY + 70}" text-anchor="middle" class="cad-dimension-text" font-weight="700">180° UNOBSTRUCTED VISTA SIGHTLINE CONE</text>

      <!-- Charcoal Design Notes -->
      <text x="${m.volX + 40}" y="${m.volY + 45}" class="cad-redline-callout" font-size="11" font-weight="800">${m.volLabel}</text>
      <text x="${m.volX + 40}" y="${m.volY + 105}" class="cad-dimension-text">${m.note1}</text>
      <text x="${m.volX + 40}" y="${m.volY - 40}" class="cad-dimension-text" font-weight="800">${m.note2}</text>

      <!-- Archival Concept Title Block -->
      <g transform="translate(840, 470)">
        <rect x="0" y="0" width="330" height="105" class="cad-title-block-box" rx="3" />
        <text x="16" y="24" class="cad-dimension-text" font-weight="800">ANSCONS ATELIER // ${m.dwg}</text>
        <text x="16" y="44" class="cad-dimension-text">CONCEPT VOLUMETRIC MASSING STUDY</text>
        <text x="16" y="62" class="cad-dimension-text">${m.title}</text>
        <text x="16" y="82" class="cad-redline-callout">PHASE: PRELIMINARY ARCHITECTURAL CONCEPT</text>
        <text x="16" y="96" class="cad-dimension-text" font-size="8">TOPOGRAPHICAL FEASIBILITY CONFIRMED</text>
      </g>
    </svg>
  `;
}

function getSchematicOverlay(key) {
  const meta = {
    'typ-1': {
      title: 'THE OBSIDIAN CANTILEVER // BEL-AIR RIDGE',
      dwg: 'DWG A-101-S // REV 02',
      rooms: [
        { label: 'ARRIVAL FOYER & GALLERY', area: '75 m²', x: 180, y: 200, w: 200, h: 240, color: 'rgba(198, 162, 92, 0.12)', border: '#7c6246' },
        { label: 'CENTRAL ATRIUM LIGHTWELL', area: '45 m²', x: 400, y: 220, w: 200, h: 200, color: 'rgba(100, 200, 220, 0.12)', border: '#5a8b9e' },
        { label: 'CANTILEVER GREAT ROOM', area: '220 m²', x: 620, y: 190, w: 460, h: 250, color: 'rgba(180, 150, 110, 0.18)', border: '#3e2e1c' }
      ],
      circNote: 'PRIMARY ARCHITECTURAL CIRCULATION SPINE (32M RUN) →',
      spanNote: 'UNOBSTRUCTED 18M CLEAR SPAN // ZERO INTERNAL COLUMNS'
    },
    'typ-1-p2': {
      title: 'BLUFFLINE SEA-WALL // BIG SUR COAST',
      dwg: 'DWG A-102-S // REV 02',
      rooms: [
        { label: 'MARINE RETENTION BUFFER', area: '95 m²', x: 260, y: 210, w: 240, h: 240, color: 'rgba(100, 150, 180, 0.15)', border: '#4a6f8a' },
        { label: 'OCEAN PAVILION LIVING', area: '280 m²', x: 520, y: 160, w: 380, h: 260, color: 'rgba(180, 150, 110, 0.18)', border: '#3e2e1c' },
        { label: 'PRIVATE OBSERVATION SUITE', area: '140 m²', x: 920, y: 160, w: 200, h: 260, color: 'rgba(198, 162, 92, 0.12)', border: '#7c6246' }
      ],
      circNote: 'SEAWALL LOGGIA CIRCULATION AXIS →',
      spanNote: '8.5M MONOLITHIC MARINE SEA-WALL ENVELOPE'
    },
    'typ-2': {
      title: 'MONOLITH IV // FIVE PATIOS (SONORAN)',
      dwg: 'DWG A-204-S // REV 02',
      rooms: [
        { label: 'PATIO I: WEST ENTRANCE', area: '90 m²', x: 140, y: 210, w: 180, h: 220, color: 'rgba(198, 162, 92, 0.12)', border: '#7c6246' },
        { label: 'PATIO II & III: LIVING CORE', area: '310 m²', x: 340, y: 190, w: 380, h: 250, color: 'rgba(180, 150, 110, 0.18)', border: '#3e2e1c' },
        { label: 'PATIO IV: EAST RETREAT', area: '110 m²', x: 740, y: 210, w: 280, h: 220, color: 'rgba(198, 162, 92, 0.12)', border: '#7c6246' }
      ],
      circNote: '60M CONTINUOUS MONOLITHIC AXIAL LOGGIA →',
      spanNote: '450mm DUAL-WYTHE BOARD-FORMED STRUCTURAL PIERS'
    },
    'typ-2-p4': {
      title: 'QUARRY CUT PAVILION // SWISS ALPS',
      dwg: 'DWG A-208-S // REV 02',
      rooms: [
        { label: 'QUARRY ENTRANCE PORTAL', area: '65 m²', x: 280, y: 220, w: 180, h: 210, color: 'rgba(160, 160, 160, 0.15)', border: '#666' },
        { label: 'TIMBER CLEAR-SPAN ATRIUM', area: '240 m²', x: 480, y: 180, w: 380, h: 250, color: 'rgba(198, 162, 92, 0.15)', border: '#7c6246' },
        { label: 'ALPINE PANORAMA OVERLOOK', area: '120 m²', x: 880, y: 180, w: 240, h: 250, color: 'rgba(100, 200, 220, 0.12)', border: '#5a8b9e' }
      ],
      circNote: '26M TIMBER CLEAR-SPAN SPINE →',
      spanNote: '800 TONS DIAMOND-WIRE SAWN NATURAL GRANITE'
    },
    'typ-3': {
      title: 'KYOTO PRIVATE MUSEUM VAULT',
      dwg: 'DWG A-301-S // REV 02',
      rooms: [
        { label: 'SUBTERRANEAN ANTECHAMBER', area: '50 m²', x: 220, y: 230, w: 180, h: 200, color: 'rgba(100, 100, 100, 0.15)', border: '#555' },
        { label: 'FLOATING ACOUSTIC SANCTUM', area: '190 m²', x: 420, y: 190, w: 380, h: 240, color: 'rgba(198, 162, 92, 0.14)', border: '#7c6246' },
        { label: 'CLIMATE ARCHIVAL ARCHIVE', area: '85 m²', x: 820, y: 190, w: 200, h: 240, color: 'rgba(100, 200, 160, 0.12)', border: '#3e7c5a' }
      ],
      circNote: 'HERMETIC ACCESS CORRIDOR // NC-12 RATED →',
      spanNote: 'DECOUPLED ROOM-WITHIN-A-ROOM ACOUSTIC SLAB'
    },
    'typ-3-p6': {
      title: 'BIOPHILIC MOVEMENT SANCTUARY',
      dwg: 'DWG A-306-S // REV 02',
      rooms: [
        { label: 'VESTIBULE & SOUND AIRLOCK', area: '45 m²', x: 200, y: 220, w: 180, h: 210, color: 'rgba(100, 100, 100, 0.15)', border: '#555' },
        { label: 'SPRUNG OAK MOVEMENT FLOOR', area: '230 m²', x: 400, y: 180, w: 440, h: 250, color: 'rgba(198, 162, 92, 0.18)', border: '#7c6246' },
        { label: 'CIRCADIAN REFLECTION LOUNGE', area: '90 m²', x: 860, y: 180, w: 200, h: 250, color: 'rgba(100, 200, 220, 0.12)', border: '#5a8b9e' }
      ],
      circNote: 'LAMINAR AIRFLOW ACOUSTIC TRANSITION →',
      spanNote: '0.28 SECONDS REVERBERATION TIME (RT60)'
    },
    'typ-4': {
      title: 'THE MERCANTILE EXCHANGE // TRIBECA',
      dwg: 'DWG A-408-S // REV 02',
      rooms: [
        { label: '1892 HISTORIC GROUND FOYER', area: '110 m²', x: 180, y: 200, w: 240, h: 230, color: 'rgba(180, 120, 90, 0.15)', border: '#8b4513' },
        { label: 'DOUBLE-HEIGHT LOFT ATRIUM', area: '320 m²', x: 440, y: 170, w: 380, h: 260, color: 'rgba(198, 162, 92, 0.15)', border: '#7c6246' },
        { label: 'BRONZE ELEVATOR & TRIPLEX CORE', area: '95 m²', x: 840, y: 170, w: 220, h: 260, color: 'rgba(100, 80, 60, 0.2)', border: '#4a3825' }
      ],
      circNote: 'HISTORIC FLUTED COLUMN CLEAR SPAN AXIS →',
      spanNote: '4.5M SUB-BASEMENT EXCAVATED IN SCHIST'
    }
  };

  const m = meta[key] || meta['typ-1'];

  return `
    <!-- ARCHITECTURAL DRAWING REVISION 02: SCHEMATIC SPATIAL WIREFRAME -->
    <svg viewBox="0 0 1200 600" class="vellum-cad-overlay" preserveAspectRatio="none">
      <!-- 1:50 Axial Column Grid Lines -->
      <line x1="180" y1="70" x2="180" y2="550" class="cad-dimension-line" stroke-dasharray="8 4 2 4" stroke-width="1.2" opacity="0.7" />
      <line x1="380" y1="70" x2="380" y2="550" class="cad-dimension-line" stroke-dasharray="8 4 2 4" stroke-width="1.2" opacity="0.7" />
      <line x1="620" y1="70" x2="620" y2="550" class="cad-dimension-line" stroke-dasharray="8 4 2 4" stroke-width="1.2" opacity="0.7" />
      <line x1="860" y1="70" x2="860" y2="550" class="cad-dimension-line" stroke-dasharray="8 4 2 4" stroke-width="1.2" opacity="0.7" />
      <line x1="1100" y1="70" x2="1100" y2="550" class="cad-dimension-line" stroke-dasharray="8 4 2 4" stroke-width="1.2" opacity="0.7" />

      <!-- Horizontal Grid Lines -->
      <line x1="100" y1="180" x2="1140" y2="180" class="cad-dimension-line" stroke-dasharray="8 4 2 4" stroke-width="1.2" opacity="0.7" />
      <line x1="100" y1="340" x2="1140" y2="340" class="cad-dimension-line" stroke-dasharray="8 4 2 4" stroke-width="1.2" opacity="0.7" />
      <line x1="100" y1="460" x2="1140" y2="460" class="cad-dimension-line" stroke-dasharray="8 4 2 4" stroke-width="1.2" opacity="0.7" />

      <!-- Grid Identifiers -->
      <circle cx="180" cy="85" r="14" class="cad-title-block-box" />
      <text x="180" y="89" text-anchor="middle" class="cad-dimension-text" font-weight="800">A</text>
      <circle cx="380" cy="85" r="14" class="cad-title-block-box" />
      <text x="380" y="89" text-anchor="middle" class="cad-dimension-text" font-weight="800">B</text>
      <circle cx="620" cy="85" r="14" class="cad-title-block-box" />
      <text x="620" y="89" text-anchor="middle" class="cad-dimension-text" font-weight="800">C</text>
      <circle cx="860" cy="85" r="14" class="cad-title-block-box" />
      <text x="860" y="89" text-anchor="middle" class="cad-dimension-text" font-weight="800">D</text>
      <circle cx="1100" cy="85" r="14" class="cad-title-block-box" />
      <text x="1100" y="89" text-anchor="middle" class="cad-dimension-text" font-weight="800">E</text>

      <!-- Spatial Programming Rooms -->
      ${m.rooms.map(r => `
        <rect x="${r.x}" y="${r.y}" width="${r.w}" height="${r.h}" fill="${r.color}" stroke="${r.border}" stroke-width="2" rx="3" />
        <text x="${r.x + (r.w / 2)}" y="${r.y + 35}" text-anchor="middle" class="cad-dimension-text" font-weight="800">${r.label}</text>
        <text x="${r.x + (r.w / 2)}" y="${r.y + 55}" text-anchor="middle" class="cad-redline-callout" font-size="9">${r.area}</text>
      `).join('')}

      <!-- Circulation Arrow -->
      <path d="M 280,420 L 280,310 Q 380,310 610,310 L 840,310" class="cad-accent-vector" stroke-dasharray="6 4" stroke-width="2.5" />
      <polygon points="840,305 855,310 840,315" fill="#c23824" />
      <text x="440" y="330" class="cad-redline-callout" font-size="9">${m.circNote}</text>
      <text x="620" y="470" text-anchor="middle" class="cad-dimension-text" font-weight="800">${m.spanNote}</text>

      <!-- Dimension Strings -->
      <line x1="180" y1="140" x2="1100" y2="140" class="cad-dimension-line" />
      <line x1="180" y1="130" x2="180" y2="150" class="cad-dimension-line" />
      <line x1="380" y1="130" x2="380" y2="150" class="cad-dimension-line" />
      <line x1="620" y1="130" x2="620" y2="150" class="cad-dimension-line" />
      <line x1="860" y1="130" x2="860" y2="150" class="cad-dimension-line" />
      <line x1="1100" y1="130" x2="1100" y2="150" class="cad-dimension-line" />
      <text x="280" y="132" text-anchor="middle" class="cad-dimension-text" font-size="9">6.00M</text>
      <text x="500" y="132" text-anchor="middle" class="cad-dimension-text" font-size="9">7.20M</text>
      <text x="740" y="132" text-anchor="middle" class="cad-dimension-text" font-size="9">7.20M</text>
      <text x="980" y="132" text-anchor="middle" class="cad-dimension-text" font-size="9">7.20M</text>

      <!-- Archival Title Block -->
      <g transform="translate(840, 470)">
        <rect x="0" y="0" width="330" height="105" class="cad-title-block-box" rx="3" />
        <text x="16" y="24" class="cad-dimension-text" font-weight="800">ANSCONS ATELIER // ${m.dwg}</text>
        <text x="16" y="44" class="cad-dimension-text">SCHEMATIC SPATIAL WIREFRAME &amp; AXIAL GRID</text>
        <text x="16" y="62" class="cad-dimension-text">${m.title}</text>
        <text x="16" y="82" class="cad-redline-callout">SCALE 1:50 METRIC // MODULAR PLANNING</text>
        <text x="16" y="96" class="cad-dimension-text" font-size="8">PROGRAMMED SPACE SPECIFICATION VERIFIED</text>
      </g>
    </svg>
  `;
}

function getMaterialOverlay(key) {
  const meta = {
    'typ-1': {
      title: 'THE OBSIDIAN CANTILEVER // BEL-AIR RIDGE',
      dwg: 'DWG M-101 // REV 04',
      mats: [
        { code: 'MAT-01', name: 'CHARRED SHOU SUGI BAN ACCOYA', spec: 'YAKISUGI DEEP EMBOSS // DIN 68800 CLASS 1', x: 420, y: 135, lx: 340, ly: 90 },
        { code: 'MAT-02', name: 'ACOUSTIC TRIPLE LOW-E LAMINATED GLASS', spec: 'Ug = 0.5 W/m²K // NC-15 ACOUSTIC ISOLATION', x: 740, y: 220, lx: 920, ly: 190 },
        { code: 'MAT-03', name: '50mm HONED BELGIAN BLUESTONE', spec: 'GAUGED CLASS A // SEAMLESS PAVING RUN', x: 680, y: 310, lx: 820, ly: 420 },
        { code: 'MAT-04', name: 'C61400 PATINATED BRONZE INLAYS', spec: 'HAND-RUBBED OIL FINISH // THERMAL REVEAL', x: 920, y: 310, lx: 1040, ly: 270 },
        { code: 'MAT-05', name: '65 MPa BOARD-FORMED CONCRETE', spec: 'DOUGLAS FIR GRAIN // ZERO RESIN BLEED', x: 260, y: 360, lx: 140, ly: 460 }
      ],
      sched: [
        'MAT-01: Yakisugi Accoya (DIN 68800)',
        'MAT-02: Triple Acoustic Low-E (EN 1279)',
        'MAT-03: Belgian Bluestone (ASTM C615)',
        'MAT-04: C61400 Bronze (ASTM B150)',
        'MAT-05: 65 MPa Concrete (ACI 318)'
      ]
    },
    'typ-1-p2': {
      title: 'BLUFFLINE SEA-WALL // BIG SUR COAST',
      dwg: 'DWG M-102 // REV 04',
      mats: [
        { code: 'MAT-01', name: '70 MPa POZZOLAN MARINE CONCRETE', spec: 'SULFATE-RESISTANT // CHLORIDE < 480 COULOMBS', x: 380, y: 310, lx: 220, ly: 160 },
        { code: 'MAT-02', name: 'C61400 ALUMINUM-BRONZE MULLIONS', spec: 'SEISMIC SLIP-JOINT // ZERO CORROSION MATRIX', x: 740, y: 210, lx: 900, ly: 180 },
        { code: 'MAT-03', name: 'SUBSEA NON-SHRINK GROUT TIEBACKS', spec: 'HIGH-ALUMINA EMBEDMENT // 100 kPa PRESSURE', x: 440, y: 440, lx: 640, ly: 490 },
        { code: 'MAT-04', name: 'BASALT STONE CANTILEVER STEPS', spec: 'FLAMED NON-SLIP // NATURAL SURF FINISH', x: 860, y: 320, lx: 1020, ly: 290 },
        { code: 'MAT-05', name: 'MICRO-ETCHED LOW-IRON BALUSTRADES', spec: '19mm TEMPERED LAMINATED MARINE INTERLAYER', x: 620, y: 155, lx: 480, ly: 90 }
      ],
      sched: [
        'MAT-01: Pozzolan Marine Concrete (ACI 357)',
        'MAT-02: C61400 Aluminum-Bronze (ASTM B150)',
        'MAT-03: Non-Shrink Grout (ASTM C1107)',
        'MAT-04: Basalt Paving (ASTM C615)',
        'MAT-05: Laminated Marine Glass (ASTM C1172)'
      ]
    },
    'typ-2': {
      title: 'MONOLITH IV // FIVE PATIOS (SONORAN)',
      dwg: 'DWG M-204 // REV 04',
      mats: [
        { code: 'MAT-01', name: 'DUAL-WYTHE BOARD-FORMED CONCRETE', spec: '450mm SOLID MASS // R-60 THERMAL ENVELOPE', x: 330, y: 280, lx: 200, ly: 120 },
        { code: 'MAT-02', name: 'BOOKMATCHED CALICHE TRAVERTINE', spec: 'HONED VEIN-CUT // DIURNAL HEAT RADIATOR', x: 440, y: 420, lx: 580, ly: 470 },
        { code: 'MAT-03', name: 'COPPER-SLAG SHADOWLINE ARCHWAYS', spec: 'PATINATED COPPER INLAY // ZERO EXPANSION GAP', x: 770, y: 280, lx: 900, ly: 220 },
        { code: 'MAT-04', name: 'EVAPORATIVE WATER FLUME BASIN', spec: 'CHISELED ANDESITE STONE // PERIMETER COOLING', x: 235, y: 420, lx: 120, ly: 470 },
        { code: 'MAT-05', name: 'THERMALLY BROKEN DESERT STEEL FENESTRATION', spec: 'LOW-E ARGON SHIELD // 48°C SHADING COEFFICIENT', x: 660, y: 220, lx: 800, ly: 140 }
      ],
      sched: [
        'MAT-01: Board-Formed Concrete (ACI 301)',
        'MAT-02: Caliche Travertine (ASTM C1527)',
        'MAT-03: Patinated Copper (ASTM B370)',
        'MAT-04: Chiseled Andesite (ASTM C615)',
        'MAT-05: Thermal Broken Steel (AAMA 101)'
      ]
    },
    'typ-2-p4': {
      title: 'QUARRY CUT PAVILION // SWISS ALPS',
      dwg: 'DWG M-208 // REV 04',
      mats: [
        { code: 'MAT-01', name: 'DIAMOND-WIRE SAWN GRANITE BEDROCK', spec: '800 TONS LEVELED IN SITU // ±0.3mm TOLERANCE', x: 580, y: 400, lx: 740, ly: 460 },
        { code: 'MAT-02', name: 'GLULAM DOUGLAS FIR STRUCTURAL POSTS', spec: 'KILN-DRIED // CONCEALED STEEL FLITCH PLATES', x: 380, y: 260, lx: 220, ly: 180 },
        { code: 'MAT-03', name: 'R-60 TRIPLE ISOLATED COLD ROOF ENVELOPE', spec: 'COMPLIANT WITH 35 kN/m² SNOW-PACK LOAD', x: 640, y: 150, lx: 780, ly: 90 },
        { code: 'MAT-04', name: 'TRIPLE-PANE ARGON GLASS CURTAIN WALL', spec: 'LOW-E COATING // ZERO ICE CONDENSATION MATRIX', x: 760, y: 290, lx: 920, ly: 240 },
        { code: 'MAT-05', name: 'CAST-BRONZE HEAVY POST SHOE HARDWARE', spec: 'PINNED BASE SHOES // DIRECT BEDROCK ANCHOR', x: 682, y: 395, lx: 520, ly: 450 }
      ],
      sched: [
        'MAT-01: Swiss Granite Bedrock (DIN EN 1469)',
        'MAT-02: Glulam Douglas Fir (DIN 1052)',
        'MAT-03: Cold Roof Membrane (SIA 271)',
        'MAT-04: Triple-Glazed Argon (SIA 331)',
        'MAT-05: Cast Bronze Pin Shoes (DIN EN 1982)'
      ]
    },
    'typ-3': {
      title: 'KYOTO PRIVATE MUSEUM VAULT',
      dwg: 'DWG M-301 // REV 04',
      mats: [
        { code: 'MAT-01', name: 'DOUBLE-HULL BENTONITE & HDPE TANKING', spec: '100 kPa HYDROSTATIC BARRIER // ZERO LEAK RECORD', x: 320, y: 180, lx: 180, ly: 110 },
        { code: 'MAT-02', name: 'DECOUPLED ACOUSTIC SLAB ON SPRINGS', spec: 'ELASTOMERIC NEOPRENE // NC-12 RATING ACHIEVED', x: 540, y: 440, lx: 380, ly: 500 },
        { code: 'MAT-03', name: '3-TON SOLID ARCHITECTURAL BRONZE DOOR', spec: 'COUNTERWEIGHTED PIVOT // ZERO MANUAL RESISTANCE', x: 280, y: 310, lx: 140, ly: 250 },
        { code: 'MAT-04', name: 'HERMETIC CLIMATE WALL SYSTEM', spec: '±1% RH // ±0.5°C CLIMATE RETENTION LINING', x: 680, y: 240, lx: 840, ly: 190 },
        { code: 'MAT-05', name: 'OPTICAL-GRADE NON-REFLECTIVE VITRINES', spec: 'ANTI-REFLECTIVE MUSEUM GLASS // 99% UV CUT', x: 820, y: 360, lx: 980, ly: 310 }
      ],
      sched: [
        'MAT-01: Bentonite Tanking (ASTM D5385)',
        'MAT-02: Elastomeric Pads (ISO 10846)',
        'MAT-03: Solid Architectural Bronze (JIS H3100)',
        'MAT-04: Hermetic Membrane (DIN 4108)',
        'MAT-05: Museum UV Glass (ISO 9050)'
      ]
    },
    'typ-3-p6': {
      title: 'BIOPHILIC MOVEMENT SANCTUARY',
      dwg: 'DWG M-306 // REV 04',
      mats: [
        { code: 'MAT-01', name: 'SPRUNG EUROPEAN WHITE OAK FLOORING', spec: 'QUARTER-SAWN // NATURAL PLANT-WAX COATING', x: 480, y: 420, lx: 320, ly: 490 },
        { code: 'MAT-02', name: 'HYDRONIC RADIANT HEATING PEX COILS', spec: 'INTEGRAL UNDER-FLOOR // 28°C SURFACE COMFORT', x: 680, y: 430, lx: 840, ly: 490 },
        { code: 'MAT-03', name: 'SLATTED ACOUSTIC AMERICAN WALNUT BAFFLES', spec: 'REVERBERATION TIME RT60: 0.28 SECONDS', x: 100, y: 260, lx: 180, ly: 210 },
        { code: 'MAT-04', name: 'HEPA H14 LAMINAR CEILING PLENUM', spec: 'ZERO-VELOCITY DISPERSION // TURBULENCE-FREE', x: 540, y: 150, lx: 720, ly: 90 },
        { code: 'MAT-05', name: 'FULL-SPECTRUM CIRCADIAN LUMINAIRES', spec: '2200K - 6500K TUNABLE CHIP MATRIX (CRI > 98)', x: 600, y: 200, lx: 800, ly: 150 }
      ],
      sched: [
        'MAT-01: Quarter-Sawn White Oak (DIN 18032)',
        'MAT-02: PEX Radiant Loops (DIN 4726)',
        'MAT-03: Acoustic Walnut Baffles (EN ISO 354)',
        'MAT-04: Laminar HEPA Plenum (ISO 14644)',
        'MAT-05: Tunable Circadian LED (WELL v2 Std)'
      ]
    },
    'typ-4': {
      title: 'THE MERCANTILE EXCHANGE // TRIBECA',
      dwg: 'DWG M-408 // REV 04',
      mats: [
        { code: 'MAT-01', name: 'RESTORED FLUTED CAST-IRON COLUMNS', spec: 'ULTRASONIC FLAW TESTED // 100% SOUND MATRIX', x: 500, y: 280, lx: 340, ly: 220 },
        { code: 'MAT-02', name: 'BLACKENED BRONZE ELEVATOR HOISTWAY', spec: 'EXPOSED COUNTERWEIGHTS & SOLID BRASS SHEAVES', x: 780, y: 220, lx: 940, ly: 180 },
        { code: 'MAT-03', name: '1892 HISTORIC BRICKWORK RESTORATION', spec: 'NATURAL HYDRAULIC LIME REPOINTING MORTAR', x: 180, y: 260, lx: 80, ly: 210 },
        { code: 'MAT-04', name: 'HEAVY STRUCTURAL STEEL NEEDLE BEAMS', spec: '450 kN HYDRAULIC JACK SHORING INTEGRATION', x: 260, y: 420, lx: 120, ly: 480 },
        { code: 'MAT-05', name: 'MANHATTAN SCHIST EXCAVATED SUB-BASE', spec: 'REINFORCED UNDERPINNING CONCRETE RETAINER', x: 620, y: 530, lx: 800, ly: 490 }
      ],
      sched: [
        'MAT-01: Fluted Cast-Iron (ASTM A48 Class 40)',
        'MAT-02: Blackened Bronze (ASTM B36)',
        'MAT-03: Historic Masonry Lime (ASTM C144)',
        'MAT-04: High-Yield Steel (ASTM A992)',
        'MAT-05: Underpinning Concrete (ACI 318)'
      ]
    }
  };

  const m = meta[key] || meta['typ-1'];

  return `
    <!-- ARCHITECTURAL DRAWING REVISION 04: MATERIAL SPECIFICATION & METALLURGY -->
    <svg viewBox="0 0 1200 600" class="vellum-cad-overlay" preserveAspectRatio="none">
      <!-- Concrete Grade Massing & Sub-Base -->
      <rect x="180" y="310" width="260" height="100" class="cad-concrete-mass" />
      <line x1="180" y1="330" x2="440" y2="330" class="cad-detail-stroke" stroke-dasharray="12 3 6 3" />
      <line x1="180" y1="350" x2="440" y2="350" class="cad-detail-stroke" stroke-dasharray="18 4 4 4" />
      <line x1="180" y1="370" x2="440" y2="370" class="cad-detail-stroke" stroke-dasharray="10 2 14 3" />
      <line x1="180" y1="390" x2="440" y2="390" class="cad-detail-stroke" stroke-dasharray="16 5 8 2" />

      <!-- Superstructure Beam & Enclosure Frames -->
      <path d="M 300,310 L 1120,310 L 1090,375 L 300,375 Z" class="cad-structure-beam" />
      <rect x="340" y="150" width="740" height="160" class="cad-detail-stroke" />
      <line x1="460" y1="150" x2="460" y2="310" class="cad-detail-stroke" stroke-width="1.5" />
      <line x1="700" y1="150" x2="700" y2="310" class="cad-detail-stroke" stroke-width="1.5" />
      <line x1="940" y1="150" x2="940" y2="310" class="cad-detail-stroke" stroke-width="1.5" />

      <!-- Roof Fascia & Timber Layer -->
      <rect x="300" y="125" width="810" height="25" class="cad-structure-beam" />
      <line x1="300" y1="133" x2="1110" y2="133" class="cad-detail-stroke" stroke-dasharray="8 4" />

      <!-- Floor Paving Line -->
      <rect x="340" y="302" width="740" height="10" class="cad-pile-anchor-head" />

      <!-- Material Annotation Leaders -->
      ${m.mats.map(mat => `
        <line x1="${mat.x}" y1="${mat.y}" x2="${mat.lx}" y2="${mat.ly}" class="cad-accent-vector" />
        <circle cx="${mat.x}" cy="${mat.y}" r="4" class="cad-pile-anchor-head" />
        <text x="${mat.lx + (mat.lx > mat.x ? 10 : -10)}" y="${mat.ly - 4}" text-anchor="${mat.lx > mat.x ? 'start' : 'end'}" class="cad-redline-callout" font-weight="800">${mat.code}: ${mat.name}</text>
        <text x="${mat.lx + (mat.lx > mat.x ? 10 : -10)}" y="${mat.ly + 10}" text-anchor="${mat.lx > mat.x ? 'start' : 'end'}" class="cad-dimension-text" font-size="8.5">${mat.spec}</text>
      `).join('')}

      <!-- Material Schedule Box in lower corner -->
      <g transform="translate(60, 150)">
        <rect x="0" y="0" width="230" height="115" class="cad-title-block-box" rx="2" />
        <text x="12" y="18" class="cad-dimension-text" font-weight="800">MATERIAL SPECIFICATION SCHEDULE</text>
        ${m.sched.map((item, idx) => `
          <rect x="12" y="${28 + idx * 17}" width="9" height="9" fill="${idx % 2 === 0 ? '#c6a25c' : '#7c6246'}" />
          <text x="26" y="${36 + idx * 17}" class="cad-dimension-text" font-size="8">${item}</text>
        `).join('')}
      </g>

      <!-- Archival Title Block -->
      <g transform="translate(840, 470)">
        <rect x="0" y="0" width="330" height="105" class="cad-title-block-box" rx="3" />
        <text x="16" y="24" class="cad-dimension-text" font-weight="800">ANSCONS ATELIER // ${m.dwg}</text>
        <text x="16" y="44" class="cad-dimension-text">TECTONIC MATERIALITY &amp; FINISH SCHEDULE</text>
        <text x="16" y="62" class="cad-dimension-text">${m.title}</text>
        <text x="16" y="82" class="cad-redline-callout">ARCHITECTURAL METALLURGY &amp; STONE ARCHIVE</text>
        <text x="16" y="96" class="cad-dimension-text" font-size="8">FULL SPECIFICATION DIVISION 08 &amp; 09 COMPLIANT</text>
      </g>
    </svg>
  `;
}

function getExecutionOverlay(key, baseCAD) {
  const cloudsAndRedlines = `
    <!-- ARCHITECTURAL DRAWING REVISION 05: CONTRACTOR FIELD REDLINES & STAMPS -->
    <g class="cad-execution-redline-layer">
      <!-- Scalloped Revision Clouds around Critical Structural Details -->
      <path d="M 180,340 Q 210,325 240,345 Q 265,375 255,410 Q 235,445 195,435 Q 160,415 170,375 Z" stroke="#d93838" stroke-dasharray="4 3" fill="none" stroke-width="2.2" />
      <path d="M 280,290 Q 330,275 390,290 Q 425,335 405,375 Q 350,395 295,380 Q 265,340 280,290 Z" stroke="#d93838" stroke-dasharray="4 3" fill="none" stroke-width="2.2" />

      <!-- Field Contractor Annotations (Red Ink) -->
      <text x="220" y="270" class="cad-redline-callout" font-size="10.5" font-weight="800">▲ REV 05: RFI #108 FOUNDATION EMBEDMENT DEPTH VERIFIED 32.4M [100% PULL-TEST PASS]</text>
      <text x="440" y="405" class="cad-redline-callout" font-size="10" font-weight="800">▲ REV 05: CORE TEST #12: 74.2 MPa EXCEEDS 65 MPa SPEC [28-DAY COMPRESSIVE BREAK]</text>
      <text x="440" y="425" class="cad-redline-callout" font-size="9.5">▲ REV 05: LASER 3D SCAN: HORIZONTAL VARIANCE ±0.12mm (WITHIN ±0.3mm MAX SPEC)</text>
      <text x="440" y="445" class="cad-redline-callout" font-size="9.5">▲ REV 05: REVISE POST-TENSION TENDON TENSIONING: 1,850 kN LOCK-OFF CONFIRMED</text>

      <!-- Stamped PE Field Approval Badge -->
      <g transform="translate(710, 240) rotate(-3)">
        <rect x="0" y="0" width="390" height="72" fill="rgba(255, 235, 235, 0.94)" stroke="#bf2020" stroke-width="2" stroke-dasharray="5 2" rx="4" />
        <text x="14" y="24" font-family="monospace" font-size="10.5" font-weight="800" fill="#bf2020">★ APPROVED AS NOTED FOR CONCRETE POUR</text>
        <text x="14" y="44" font-family="monospace" font-size="9.5" font-weight="700" fill="#991b1b">STRUCTURAL PE #48291 // TOLERANCE ±0.5mm CHECKED</text>
        <text x="14" y="60" font-family="monospace" font-size="9" fill="#991b1b">DATE: 2026-03-14 // ZERO CODE EXCEPTIONS TAKEN</text>
      </g>
    </g>
  `;

  if (baseCAD && baseCAD.includes('</svg>')) {
    return baseCAD.replace('</svg>', `${cloudsAndRedlines}</svg>`);
  }
  return baseCAD;
}

function getRevisionOverlaySVG(key, revNum, baseCAD) {
  switch (revNum) {
    case 1:
      return getConceptOverlay(key);
    case 2:
      return getSchematicOverlay(key);
    case 3:
      return baseCAD;
    case 4:
      return getMaterialOverlay(key);
    case 5:
      return getExecutionOverlay(key, baseCAD);
    case 6:
    default:
      return baseCAD;
  }
}

export class MonographController {
  constructor(audioInstance) {
    this.audio = audioInstance;
    this.currentTypologyKey = 'typ-1';
    this.currentReelIndex = 0;
    this.currentRevealPct = 50;
    this.currentRevision = 6; // Default to REV 06 (COMPLETED)

    // Cache Revision Stepper Elements
    this.revStrip = document.getElementById('drawing-revision-control');
    this.revButtons = document.querySelectorAll('.rev-step-btn');
    this.revDwgRef = document.getElementById('rev-active-dwg-ref');
    this.revPhaseBadge = document.getElementById('rev-active-phase-badge');
    this.revPhaseText = document.getElementById('rev-phase-text');
    this.passepartoutTagEl = document.querySelector('.photo-passepartout-tag');

    // Cache Plan Chest Elements
    this.drawers = document.querySelectorAll('.drawer-unit');
    this.marginTabs = document.querySelectorAll('.margin-tab-btn');
    this.heroSchematic = document.querySelector('.hero-schematic-preview');

    // Caliper Slider Elements
    this.viewportEl = document.getElementById('caliper-viewport');
    this.vellumLayer = document.getElementById('drafting-vellum-layer');
    this.cadOverlayContainer = document.getElementById('cad-svg-container');
    this.caliperBar = document.getElementById('caliper-bar');
    this.ratioBadge = document.getElementById('slider-ratio-badge');
    this.accessibleRange = document.getElementById('accessible-slider');
    this.isDraggingSlider = false;

    // Project Detail Elements
    this.monographIdEl = document.getElementById('project-monograph-id');
    this.headlineTitleEl = document.getElementById('project-headline-title');
    this.locationMetaEl = document.getElementById('project-location-meta');
    this.asbuiltImg = document.getElementById('asbuilt-photo-img');
    this.redlineCluster = document.getElementById('cad-redline-cluster');
    this.archivalStampEl = document.getElementById('archival-stamp-text');

    // Dossier Plate Elements
    this.geoInclineEl = document.getElementById('geo-incline');
    this.geoFaultEl = document.getElementById('geo-fault');
    this.geoStrataEl = document.getElementById('geo-strata');
    this.geoPilesEl = document.getElementById('geo-piles');
    this.geoStampEl = document.getElementById('geo-stamp');

    this.tectSteelEl = document.getElementById('tect-steel');
    this.tectSteelDescEl = document.getElementById('tect-steel-desc');
    this.tectConcreteEl = document.getElementById('tect-concrete');
    this.tectConcreteDescEl = document.getElementById('tect-concrete-desc');
    this.tectToleranceEl = document.getElementById('tect-tolerance');
    this.tectToleranceDescEl = document.getElementById('tect-tolerance-desc');
    this.tectSpanEl = document.getElementById('tect-span');
    this.tectSpanDescEl = document.getElementById('tect-span-desc');

    this.passepartoutImg = document.getElementById('passepartout-img');
    this.plateCaptionEl = document.getElementById('plate-caption');
    this.cameraMetaEl = document.getElementById('camera-meta');

    // Site Reels Elements
    this.timelineSteps = document.querySelectorAll('.timeline-step-node');
    this.reelSnapshotImg = document.getElementById('reel-snapshot-img');
    this.logTitleEl = document.getElementById('log-milestone-title');
    this.logEntryEl = document.getElementById('log-entry-text');
    this.sensorFcEl = document.getElementById('sensor-fc');
    this.sensorTempEl = document.getElementById('sensor-temp');
    this.sensorVibrationEl = document.getElementById('sensor-vibration');

    // Polaroid & Artifacts
    this.polaroidAnchor = document.getElementById('polaroid-clip-anchor');
    this.polaroidThumbImg = document.getElementById('polaroid-thumb-img');
    this.polaroidCaptionEl = document.getElementById('polaroid-caption-note');
    this.polaroidModal = document.getElementById('polaroid-modal-backdrop');
    this.polaroidExpandedImg = document.getElementById('polaroid-expanded-photo-img');
    this.polaroidExpandedNote = document.getElementById('polaroid-expanded-note');
    this.polaroidCloseBtn = document.getElementById('polaroid-modal-close-btn');

    // Drawing Register CTA Button
    this.btnDrawingSet = document.getElementById('btn-drawing-set');

    this.init();
  }

  init() {
    this.initPlanChestDrawers();
    this.initTypologyTabs();
    this.initHeroSchematic();
    this.initCaliperSlider();
    this.initDrawingRevisions();
    this.initSiteReels();
    this.initPolaroidModal();
    this.initDrawingSetCTA();
    this.initFolioRegister();

    // Render initial typology (TYP-01)
    this.renderTypology(this.currentTypologyKey);
  }

  /* ------------------------------------------------------------------------
     1. Interactive 4-Drawer Plan Chest Unit
     ------------------------------------------------------------------------ */
  initPlanChestDrawers() {
    this.drawers.forEach(drawer => {
      drawer.addEventListener('click', () => {
        const key = drawer.getAttribute('data-drawer');
        if (key) {
          this.switchTypology(key);
          const monographContainer = document.getElementById('monograph-spread-container');
          if (monographContainer) {
            monographContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });

      // Keyboard support
      drawer.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          const key = drawer.getAttribute('data-drawer');
          if (key) {
            this.switchTypology(key);
            const monographContainer = document.getElementById('monograph-spread-container');
            if (monographContainer) {
              monographContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     2. Typology Margin Tabs Switcher
     ------------------------------------------------------------------------ */
  initTypologyTabs() {
    this.marginTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const key = tab.getAttribute('data-typology');
        if (key) {
          this.switchTypology(key);
        }
      });
    });
  }

  /* ------------------------------------------------------------------------
     3. Hero Schematic Interaction
     ------------------------------------------------------------------------ */
  initHeroSchematic() {
    if (this.heroSchematic) {
      this.heroSchematic.addEventListener('click', () => {
        const keys = ['typ-1', 'typ-2', 'typ-3', 'typ-4'];
        const nextIdx = (keys.indexOf(this.currentTypologyKey) + 1) % keys.length;
        this.switchTypology(keys[nextIdx]);
        if (this.audio) this.audio.playBrassClick();
      });
    }
  }

  /* ------------------------------------------------------------------------
     Switch Typology Helper (Synchronizes Drawers & Margin Tabs)
     ------------------------------------------------------------------------ */
  switchTypology(key) {
    if (!PORTFOLIO_TYPOLOGIES[key]) return;
    this.currentTypologyKey = key;
    this.currentReelIndex = 0;

    // Resolve parent drawer/tab key for sub-projects (typ-1-p2 -> typ-1, etc.)
    let parentKey = key;
    if (key === 'typ-1-p2') parentKey = 'typ-1';
    if (key === 'typ-2-p4') parentKey = 'typ-2';
    if (key === 'typ-3-p6') parentKey = 'typ-3';

    // Update 4-Drawer Plan Chest visual states
    this.drawers.forEach(drawer => {
      const drawerKey = drawer.getAttribute('data-drawer');
      const isActive = (drawerKey === parentKey);
      drawer.classList.toggle('active', isActive);
      const pill = drawer.querySelector('.drawer-status-pill');
      if (pill) {
        pill.textContent = isActive ? 'PULLED OUT ↘' : 'STOWED ↗';
      }
    });

    // Update Margin Tabs visual states
    this.marginTabs.forEach(tab => {
      const tabKey = tab.getAttribute('data-typology');
      tab.classList.toggle('active', tabKey === parentKey);
      tab.setAttribute('aria-selected', tabKey === parentKey ? 'true' : 'false');
    });

    // Re-render project contents
    this.renderTypology(key);

    if (this.audio) {
      this.audio.playPaperSlide();
    }
  }

  /* ------------------------------------------------------------------------
     4. Tracing Paper / As-Built Split Caliper Slider
     ------------------------------------------------------------------------ */
  initCaliperSlider() {
    if (!this.viewportEl) return;

    this.setReveal = (percentage) => {
      const clamped = Math.max(5, Math.min(95, percentage));
      this.currentRevealPct = clamped;
      this.viewportEl.style.setProperty('--reveal-pct', `${clamped}%`);
      
      if (this.ratioBadge) {
        const asBuiltPct = Math.round(100 - clamped);
        const cadPct = Math.round(clamped);
        this.ratioBadge.innerHTML = `
          <span>CAD BLUEPRINT: ${cadPct}%</span>
          <span style="color:#a88134;">//</span>
          <span>AS-BUILT REVEAL: ${asBuiltPct}%</span>
        `;
      }
      if (this.accessibleRange) {
        this.accessibleRange.value = clamped;
      }
    };

    const handlePointerMove = (e) => {
      if (!this.isDraggingSlider) return;
      const rect = this.viewportEl.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const offsetX = clientX - rect.left;
      const pct = (offsetX / rect.width) * 100;
      this.setReveal(pct);
    };

    const startDrag = (e) => {
      this.isDraggingSlider = true;
      handlePointerMove(e);
      if (this.audio) {
        this.audio.playBrassClick();
      }
    };

    const stopDrag = () => {
      if (this.isDraggingSlider) {
        this.isDraggingSlider = false;
        if (this.audio) {
          this.audio.playPaperSlide();
        }
      }
    };

    // Pointer & Touch Events
    this.viewportEl.addEventListener('mousedown', startDrag);
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseup', stopDrag);

    this.viewportEl.addEventListener('touchstart', startDrag, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('touchend', stopDrag);

    // Accessible Range Input Listener
    if (this.accessibleRange) {
      this.accessibleRange.addEventListener('input', (e) => {
        this.setReveal(parseFloat(e.target.value));
      });
    }

    this.setReveal(50);
  }

  /* ------------------------------------------------------------------------
     Architectural Drawing Revision Lifecycle (REV 01 -> REV 06)
     ------------------------------------------------------------------------ */
  initDrawingRevisions() {
    this.revButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const rev = parseInt(btn.getAttribute('data-rev'), 10);
        if (rev && rev !== this.currentRevision) {
          this.setRevision(rev, true);
        }
      });

      btn.addEventListener('mouseenter', () => {
        if (this.audio && typeof this.audio.playCaliperTick === 'function') {
          this.audio.playCaliperTick();
        }
      });
    });
  }

  setRevision(rev, playSound = true) {
    const revNum = parseInt(rev, 10) || 6;
    this.currentRevision = revNum;

    if (playSound && this.audio) {
      if (revNum === 5 && typeof this.audio.playStampSlam === 'function') {
        this.audio.playStampSlam();
      } else if (typeof this.audio.playSwitchClick === 'function') {
        this.audio.playSwitchClick();
      }
    }

    // Update active button state in stepper track
    this.revButtons.forEach(btn => {
      const bRev = parseInt(btn.getAttribute('data-rev'), 10);
      const isActive = (bRev === revNum);
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    // Update viewport data-revision attribute for CSS theming
    if (this.viewportEl) {
      this.viewportEl.setAttribute('data-revision', `rev-0${revNum}`);
    }

    // Update header badges
    const phaseInfo = REVISION_PHASES[revNum] || REVISION_PHASES[6];
    if (this.revPhaseText) {
      this.revPhaseText.textContent = phaseInfo.badge;
    }
    const dwgBase = DWG_CODES[this.currentTypologyKey] || 'BA-RES-2026';
    if (this.revDwgRef) {
      this.revDwgRef.textContent = `DWG REF: ${dwgBase} // REV 0${revNum}`;
    }

    // Update passepartout tag
    if (this.passepartoutTagEl) {
      this.passepartoutTagEl.textContent = phaseInfo.tag;
    }

    // Adjust reveal slider for optimum inspection
    if (typeof this.setReveal === 'function') {
      if (revNum >= 1 && revNum <= 5) {
        if (this.currentRevealPct < 75) {
          this.setReveal(75);
        }
      } else if (revNum === 6) {
        this.setReveal(50);
      }
    }

    // Render revision visualization SVG and dynamic redline annotations
    this.renderRevisionVisualization(revNum);
  }

  renderRevisionVisualization(revNum) {
    const key = this.currentTypologyKey;
    const project = PORTFOLIO_TYPOLOGIES[key];
    if (!project) return;

    // 1. Inject revision-specific SVG overlay
    if (this.cadOverlayContainer) {
      const baseCAD = CAD_OVERLAYS[key] || '';
      const svgContent = getRevisionOverlaySVG(key, revNum, baseCAD);
      this.cadOverlayContainer.innerHTML = svgContent;
    }

    // 2. Handle contractor field stamp for REV 05 (Execution)
    const existingStamp = this.viewportEl.querySelector('.contractor-field-stamp');
    if (revNum === 5) {
      if (!existingStamp) {
        const stampEl = document.createElement('div');
        stampEl.className = 'contractor-field-stamp';
        stampEl.style.top = '22px';
        stampEl.style.right = '24px';
        stampEl.innerHTML = `APPROVED AS NOTED FOR POUR // PE #48291 // TOLERANCE ±0.5mm CHECKED`;
        this.viewportEl.appendChild(stampEl);
      }
    } else {
      if (existingStamp) {
        existingStamp.remove();
      }
    }

    // 3. Render revision-specific redline badges
    if (this.redlineCluster) {
      const redlines = getRevisionRedlines(key, revNum, project.redlines);
      this.redlineCluster.innerHTML = redlines.map(note => `
        <div class="redline-annotation-badge">
          <span>📐</span>
          <span>${note}</span>
        </div>
      `).join('');
    }
  }

  /* ------------------------------------------------------------------------
     5. Interactive Site Camera Progress Reels Scrubber
     ------------------------------------------------------------------------ */
  initSiteReels() {
    this.timelineSteps.forEach((stepNode, idx) => {
      stepNode.addEventListener('click', () => {
        this.currentReelIndex = idx;
        this.renderReelStep(idx);
        if (this.audio) {
          this.audio.playBrassClick();
        }
      });
    });
  }

  renderReelStep(stepIdx) {
    const project = PORTFOLIO_TYPOLOGIES[this.currentTypologyKey];
    if (!project || !project.reels[stepIdx]) return;

    const reel = project.reels[stepIdx];

    this.timelineSteps.forEach((node, i) => {
      node.classList.toggle('active', i === stepIdx);
      node.setAttribute('aria-selected', i === stepIdx ? 'true' : 'false');
    });

    if (this.logTitleEl) this.logTitleEl.textContent = `${reel.day} // ${reel.title}`;
    if (this.logEntryEl) this.logEntryEl.textContent = reel.log;
    if (this.sensorFcEl) this.sensorFcEl.textContent = reel.fc;
    if (this.sensorTempEl) this.sensorTempEl.textContent = reel.temp;
    if (this.sensorVibrationEl) this.sensorVibrationEl.textContent = reel.vibration;
  }

  /* ------------------------------------------------------------------------
     6. Polaroid Inspection Modal
     ------------------------------------------------------------------------ */
  initPolaroidModal() {
    const closeModal = () => {
      if (this.polaroidModal) {
        this.polaroidModal.classList.remove('open');
        document.body.style.overflow = '';
      }
    };

    if (this.polaroidAnchor) {
      this.polaroidAnchor.addEventListener('click', () => {
        const project = PORTFOLIO_TYPOLOGIES[this.currentTypologyKey];
        if (project && this.polaroidModal) {
          if (this.polaroidExpandedImg) this.polaroidExpandedImg.src = project.polaroid.image;
          if (this.polaroidExpandedNote) this.polaroidExpandedNote.textContent = project.polaroid.note;
          this.polaroidModal.classList.add('open');
          document.body.style.overflow = 'hidden';
          if (this.audio) this.audio.playPaperSlide();
        }
      });
    }

    if (this.polaroidCloseBtn) {
      this.polaroidCloseBtn.addEventListener('click', () => {
        closeModal();
      });
    }

    if (this.polaroidModal) {
      this.polaroidModal.addEventListener('click', (e) => {
        if (e.target === this.polaroidModal) {
          closeModal();
        }
      });
    }

    // Escape key closes polaroid modal
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.polaroidModal && this.polaroidModal.classList.contains('open')) {
        closeModal();
      }
    });
  }

  /* ------------------------------------------------------------------------
     7. Downloadable Drawing Set Register CTA
     ------------------------------------------------------------------------ */
  initDrawingSetCTA() {
    if (this.btnDrawingSet) {
      this.btnDrawingSet.addEventListener('click', () => {
        const specOverlay = document.getElementById('spec-modal-overlay');
        const specCode = document.getElementById('modal-spec-code');
        const specTitle = document.getElementById('modal-spec-title');
        const specBody = document.getElementById('modal-spec-body');
        
        if (specOverlay && specCode && specTitle && specBody) {
          const project = PORTFOLIO_TYPOLOGIES[this.currentTypologyKey];
          specCode.textContent = `SECTION 00 24 00 // RESTRICTED DRAWING SET // ${project.code} // REV 0${this.currentRevision}`;
          specTitle.textContent = `${project.title} — Official As-Built Monograph Register`;
          specBody.innerHTML = `
            <div style="font-family: var(--font-mono); font-size: 0.8rem; line-height: 1.7; color: #3b2816;">
              <p><strong>SECURITY CLEARANCE CLASSIFICATION: RESTRICTED COMMISSION FOLIO</strong></p>
              <p>The complete digital drawing set for <em>${project.title}</em> (${project.location}) comprises 84 high-tolerance sheets including 1:20 detail sections, foundation anchor micro-pile schedules, and MEP thermal coordination plans.</p>
              <div style="margin: 16px 0; padding: 12px; background: rgba(160, 130, 95, 0.15); border-left: 3px solid #b83324;">
                <strong>NOTICE:</strong> Due to privacy covenants executed under AIA Document C103, access to full structural CAD sets is restricted to active commission clients, certified structural peer-reviewers, and authorized statutory examiners.
              </div>
              <p>To request certified access, dispatch an inquiry via <a href="contact.html" style="color: #b83324; text-decoration: underline; font-weight: 700;">DOC 06: COMMISSION LIAISON</a> citing Document Record: <code>ANS-RES-${this.currentTypologyKey.toUpperCase()}-2026</code>.</p>
            </div>
          `;
          specOverlay.classList.add('open');
          if (this.audio) this.audio.playPaperSlide();
        }
      });
    }
  }

  /* ------------------------------------------------------------------------
     8. Render Active Typology
     ------------------------------------------------------------------------ */
  renderTypology(key) {
    const data = PORTFOLIO_TYPOLOGIES[key];
    if (!data) return;

    // Header & Title
    if (this.monographIdEl) this.monographIdEl.textContent = data.code;
    if (this.headlineTitleEl) this.headlineTitleEl.textContent = data.title;
    if (this.locationMetaEl) this.locationMetaEl.textContent = data.location;
    if (this.archivalStampEl) this.archivalStampEl.textContent = data.stamp;

    // As-Built Photo & Passe-Partout
    if (this.asbuiltImg) this.asbuiltImg.src = data.image;
    if (this.passepartoutImg) this.passepartoutImg.src = data.image;
    if (this.reelSnapshotImg) this.reelSnapshotImg.src = data.image;

    // Synchronize Active Drawing Revision Visualization (Overlay SVG, Redlines, Badges, Stamps)
    this.setRevision(this.currentRevision, false);

    // Plate A: Geodetic
    if (this.geoInclineEl) this.geoInclineEl.textContent = data.plateA.incline;
    if (this.geoFaultEl) this.geoFaultEl.textContent = data.plateA.fault;
    if (this.geoStrataEl) this.geoStrataEl.textContent = data.plateA.strata;
    if (this.geoPilesEl) this.geoPilesEl.textContent = data.plateA.piles;
    if (this.geoStampEl) this.geoStampEl.textContent = data.plateA.stamp;

    // Plate B: Tectonic
    if (this.tectSteelEl) this.tectSteelEl.textContent = data.plateB.steel;
    if (this.tectSteelDescEl) this.tectSteelDescEl.textContent = data.plateB.steelDesc;
    if (this.tectConcreteEl) this.tectConcreteEl.textContent = data.plateB.concrete;
    if (this.tectConcreteDescEl) this.tectConcreteDescEl.textContent = data.plateB.concreteDesc;
    if (this.tectToleranceEl) this.tectToleranceEl.textContent = data.plateB.tolerance;
    if (this.tectToleranceDescEl) this.tectToleranceDescEl.textContent = data.plateB.toleranceDesc;
    if (this.tectSpanEl) this.tectSpanEl.textContent = data.plateB.span;
    if (this.tectSpanDescEl) this.tectSpanDescEl.textContent = data.plateB.spanDesc;

    // Plate C: Spatial Monograph
    if (this.plateCaptionEl) this.plateCaptionEl.textContent = data.plateC.caption;
    if (this.cameraMetaEl) this.cameraMetaEl.textContent = data.plateC.camera;

    // Polaroid Data
    if (this.polaroidThumbImg) this.polaroidThumbImg.src = data.polaroid.image;
    if (this.polaroidCaptionEl) this.polaroidCaptionEl.textContent = data.polaroid.note;

    // Render Milestone 1
    this.renderReelStep(0);
  }

  /* ------------------------------------------------------------------------
     8. Unsealed Commission Register (Filter Rail, Loupe & Caliper Jump)
     ------------------------------------------------------------------------ */
  initFolioRegister() {
    // 1. Plate Category Filter Rail
    const filterTabs = document.querySelectorAll('.filter-tab-pill');
    const folioSheets = document.querySelectorAll('.archival-folio-sheet');

    filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const filter = tab.getAttribute('data-filter');
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        folioSheets.forEach(sheet => {
          const category = sheet.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            sheet.classList.remove('hidden');
          } else {
            sheet.classList.add('hidden');
          }
        });

        if (this.audio) this.audio.playBrassClick();
      });
    });

    // 2. Interactive Inspection Loupe on Project Photo Viewports
    const photoViewports = document.querySelectorAll('.folio-photo-viewport');
    photoViewports.forEach(viewport => {
      const crosshairX = viewport.querySelector('.inspection-loupe-crosshair-x');
      const crosshairY = viewport.querySelector('.inspection-loupe-crosshair-y');
      const coordsBadge = viewport.querySelector('.loupe-coords-badge');

      viewport.addEventListener('mousemove', (e) => {
        const rect = viewport.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
        const y = Math.max(0, Math.min(e.clientY - rect.top, rect.height));

        if (crosshairX) crosshairX.style.left = `${x}px`;
        if (crosshairY) crosshairY.style.top = `${y}px`;

        if (coordsBadge) {
          const mmX = (x * 1.85).toFixed(1);
          const mmY = (y * 1.85).toFixed(1);
          coordsBadge.textContent = `X: ${mmX}mm • Y: ${mmY}mm [MICRON CALIBRATED]`;
        }
      });
    });

    // 3. Load into Tracing Caliper Button
    const loadCaliperButtons = document.querySelectorAll('.btn-load-caliper');
    loadCaliperButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const typologyKey = btn.getAttribute('data-typology');
        if (typologyKey) {
          this.switchTypology(typologyKey);
          const monographContainer = document.getElementById('monograph-spread-container');
          if (monographContainer) {
            monographContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
          if (this.audio) this.audio.playDrawerSlide();
        }
      });
    });
  }
}

// Coordinate on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  new DeskToolsController(deskAudio);
  new LegalSpecsController(deskAudio);
  new MonographController(deskAudio);
  console.log('🏛️ ANSCONS DOC 04: Monograph Folio & Flat-File Archive Initialized.');
});
