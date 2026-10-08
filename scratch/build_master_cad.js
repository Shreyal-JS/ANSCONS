const fs = require('fs');

const CAD_OVERLAYS = {
  'typ-1': `
    <!-- Bel-Air Cantilever Estate: 38° Hillside Bedrock & Post-Tensioned Cantilever Truss -->
    <svg viewBox="0 0 1200 600" class="vellum-cad-overlay" preserveAspectRatio="none">
      <!-- Grid Axis Lines -->
      <line x1="300" y1="80" x2="300" y2="560" class="cad-dimension-line" stroke-dasharray="10 4 2 4" opacity="0.6" />
      <line x1="600" y1="80" x2="600" y2="560" class="cad-dimension-line" stroke-dasharray="10 4 2 4" opacity="0.6" />
      <line x1="900" y1="80" x2="900" y2="560" class="cad-dimension-line" stroke-dasharray="10 4 2 4" opacity="0.6" />
      <line x1="1100" y1="80" x2="1100" y2="560" class="cad-dimension-line" stroke-dasharray="10 4 2 4" opacity="0.6" />
      <circle cx="300" cy="95" r="12" class="cad-title-block-box" />
      <text x="300" y="99" text-anchor="middle" class="cad-dimension-text" font-size="10" font-weight="800">A</text>
      <circle cx="600" cy="95" r="12" class="cad-title-block-box" />
      <text x="600" y="99" text-anchor="middle" class="cad-dimension-text" font-size="10" font-weight="800">B</text>
      <circle cx="900" cy="95" r="12" class="cad-title-block-box" />
      <text x="900" y="99" text-anchor="middle" class="cad-dimension-text" font-size="10" font-weight="800">C</text>
      <circle cx="1100" cy="95" r="12" class="cad-title-block-box" />
      <text x="1100" y="99" text-anchor="middle" class="cad-dimension-text" font-size="10" font-weight="800">D</text>

      <!-- 38° Hillside Bedrock Slope Profile -->
      <path d="M 0,220 L 460,540 L 1200,540 L 1200,600 L 0,600 Z" class="cad-bedrock-slope" />
      <!-- Bedrock 45° Geological Hatches -->
      <line x1="60" y1="280" x2="20" y2="350" class="cad-bedrock-hatch" />
      <line x1="120" y1="330" x2="70" y2="410" class="cad-bedrock-hatch" />
      <line x1="180" y1="380" x2="120" y2="470" class="cad-bedrock-hatch" />
      <line x1="250" y1="430" x2="180" y2="530" class="cad-bedrock-hatch" />
      <line x1="320" y1="480" x2="260" y2="570" class="cad-bedrock-hatch" />
      <line x1="400" y1="520" x2="350" y2="590" class="cad-bedrock-hatch" />
      <text x="45" y="250" class="cad-dimension-text">WEATHERED SHALE BEDROCK (38° CANYON INCLINE)</text>

      <!-- 14 Dywidag Rock Tiebacks Drilled 32m into Bedrock -->
      <line x1="220" y1="360" x2="70" y2="585" class="cad-foundation-pile" />
      <line x1="320" y1="410" x2="170" y2="595" class="cad-foundation-pile" />
      <line x1="420" y1="510" x2="330" y2="600" class="cad-foundation-pile" />
      <!-- Tieback Anchor Plates & Grout Bulbs -->
      <circle cx="220" cy="360" r="7" class="cad-pile-anchor-head" />
      <circle cx="320" cy="410" r="7" class="cad-pile-anchor-head" />
      <circle cx="420" cy="510" r="7" class="cad-pile-anchor-head" />
      <text x="35" y="470" class="cad-redline-callout">14x DYWIDAG HIGH-TENSILE TIEBACKS // 32M EMBEDMENT</text>
      <text x="35" y="490" class="cad-dimension-text">q_allow = 1,600 kN/m² // UPLIFT CAPACITY: 2,400 kN</text>

      <!-- Massive Reinforced Concrete Grade Beam Pier -->
      <rect x="180" y="310" width="260" height="90" class="cad-concrete-mass" rx="2" />
      <!-- Internal Rebar Cage Graphic -->
      <rect x="190" y="320" width="240" height="70" class="cad-detail-stroke" stroke-dasharray="4 2" />
      <line x1="210" y1="320" x2="210" y2="390" class="cad-detail-stroke" />
      <line x1="270" y1="320" x2="270" y2="390" class="cad-detail-stroke" />
      <line x1="330" y1="320" x2="330" y2="390" class="cad-detail-stroke" />
      <line x1="390" y1="320" x2="390" y2="390" class="cad-detail-stroke" />
      <text x="195" y="300" class="cad-dimension-text">f'c = 65 MPa REINFORCED GRADE PIER</text>

      <!-- Welded Box-Girder Steel Cantilever Spine (18m Projection) -->
      <path d="M 300,310 L 1120,310 L 1090,375 L 300,375 Z" class="cad-structure-beam" />
      <!-- Internal Steel Stiffener Plates -->
      <line x1="420" y1="310" x2="420" y2="375" class="cad-detail-stroke" />
      <line x1="540" y1="310" x2="540" y2="375" class="cad-detail-stroke" />
      <line x1="660" y1="310" x2="660" y2="375" class="cad-detail-stroke" />
      <line x1="780" y1="310" x2="780" y2="375" class="cad-detail-stroke" />
      <line x1="900" y1="310" x2="900" y2="375" class="cad-detail-stroke" />
      <line x1="1020" y1="310" x2="1020" y2="375" class="cad-detail-stroke" />

      <!-- Post-Tensioned Cable Tendon Trajectory Curve -->
      <path d="M 310,330 Q 680,370 1080,325" class="cad-accent-vector" stroke-dasharray="8 4" />
      <text x="560" y="355" class="cad-redline-callout">12x 15.2mm DYWIDAG TENDONS @ 1,850 kN // ZERO DEFLECTION</text>

      <!-- Living Volume: Glass Envelope, Shou Sugi Ban & Timber Roof -->
      <rect x="340" y="150" width="740" height="160" class="cad-detail-stroke" />
      <!-- Glass Window Mullions -->
      <line x1="460" y1="150" x2="460" y2="310" class="cad-detail-stroke" stroke-width="1" />
      <line x1="580" y1="150" x2="580" y2="310" class="cad-detail-stroke" stroke-width="1" />
      <line x1="700" y1="150" x2="700" y2="310" class="cad-detail-stroke" stroke-width="1" />
      <line x1="820" y1="150" x2="820" y2="310" class="cad-detail-stroke" stroke-width="1" />
      <line x1="940" y1="150" x2="940" y2="310" class="cad-detail-stroke" stroke-width="1" />
      <line x1="1060" y1="150" x2="1060" y2="310" class="cad-detail-stroke" stroke-width="1" />

      <!-- Cantilever Roof Overhang & Accoya Fascia -->
      <rect x="300" y="125" width="810" height="25" class="cad-structure-beam" />
      <text x="470" y="142" class="cad-dimension-text">CHARRED SHOU SUGI BAN ACCOYA FASCIATE &amp; ROOF TRUSS</text>

      <!-- Belgium Bluestone Floor Line -->
      <rect x="340" y="302" width="740" height="8" class="cad-pile-anchor-head" />
      <text x="420" y="275" class="cad-dimension-text">HONED BELGIAN BLUESTONE // ACOUSTIC TRIPLE GLAZING</text>

      <!-- Cantilever Projection Dimension Line -->
      <line x1="300" y1="115" x2="1110" y2="115" class="cad-dimension-line" />
      <line x1="300" y1="105" x2="300" y2="125" class="cad-dimension-line" />
      <line x1="1110" y1="105" x2="1110" y2="125" class="cad-dimension-line" />
      <text x="540" y="110" class="cad-dimension-text" font-weight="800">|← 18.00 METERS CANTILEVER PROJECTION (ZERO GROUND SUPPORTS) →|</text>

      <!-- Elevation Datums -->
      <text x="1115" y="140" class="cad-elevation-marker">∇ TOP OF ROOF +22.40M</text>
      <text x="1115" y="315" class="cad-elevation-marker">∇ FINISH FLOOR +18.20M</text>
      <text x="1115" y="380" class="cad-elevation-marker">∇ SOFFIT +15.50M</text>

      <!-- Archival Title Block -->
      <g transform="translate(860, 480)">
        <rect x="0" y="0" width="310" height="95" class="cad-title-block-box" rx="3" />
        <text x="16" y="24" class="cad-dimension-text" font-weight="800">ANSCONS ATELIER // DWG A-101-REV.04</text>
        <text x="16" y="44" class="cad-dimension-text">TYP-01: HILLSIDE CANTILEVERS</text>
        <text x="16" y="62" class="cad-dimension-text">THE OBSIDIAN CANTILEVER // BEL-AIR</text>
        <text x="16" y="80" class="cad-redline-callout">AS-BUILT DEFLECTION: 0.00mm @ 120% LOAD</text>
      </g>
    </svg>
  `,

  'typ-1-p2': `
    <!-- Bluffline Sea-Wall Estate: Wave-Break Bedrock & Marine Concrete Sea-Wall -->
    <svg viewBox="0 0 1200 600" class="vellum-cad-overlay" preserveAspectRatio="none">
      <!-- Grid Axis Lines -->
      <line x1="280" y1="80" x2="280" y2="560" class="cad-dimension-line" stroke-dasharray="10 4 2 4" opacity="0.6" />
      <line x1="640" y1="80" x2="640" y2="560" class="cad-dimension-line" stroke-dasharray="10 4 2 4" opacity="0.6" />
      <line x1="920" y1="80" x2="920" y2="560" class="cad-dimension-line" stroke-dasharray="10 4 2 4" opacity="0.6" />
      <circle cx="280" cy="95" r="12" class="cad-title-block-box" />
      <text x="280" y="99" text-anchor="middle" class="cad-dimension-text" font-size="10" font-weight="800">1</text>
      <circle cx="640" cy="95" r="12" class="cad-title-block-box" />
      <text x="640" y="99" text-anchor="middle" class="cad-dimension-text" font-size="10" font-weight="800">2</text>
      <circle cx="920" cy="95" r="12" class="cad-title-block-box" />
      <text x="920" y="99" text-anchor="middle" class="cad-dimension-text" font-size="10" font-weight="800">3</text>

      <!-- Pacific Wave-Break Bedrock Shelf Profile -->
      <path d="M 0,380 Q 180,330 380,390 T 780,450 L 1200,460 L 1200,600 L 0,600 Z" class="cad-bedrock-slope" />
      <line x1="60" y1="420" x2="20" y2="480" class="cad-bedrock-hatch" />
      <line x1="150" y1="400" x2="90" y2="490" class="cad-bedrock-hatch" />
      <line x1="240" y1="420" x2="180" y2="520" class="cad-bedrock-hatch" />
      <line x1="340" y1="440" x2="280" y2="550" class="cad-bedrock-hatch" />
      <text x="40" y="370" class="cad-dimension-text">PACIFIC WAVE-BREAK BEDROCK SHELF (HIGH TIDAL EXPOSURE)</text>

      <!-- Ocean Wave Surge Dynamic Vectors -->
      <path d="M 0,420 Q 150,360 280,410" class="cad-accent-vector" stroke-dasharray="6 3" />
      <path d="M 0,450 Q 180,400 320,440" class="cad-accent-vector" stroke-dasharray="6 3" />
      <text x="40" y="450" class="cad-redline-callout">PACIFIC STORM SURGE 4,000 L/MIN PERIMETER DIVERTER</text>

      <!-- 70 MPa Sulfate-Resistant Marine Concrete Sea-Wall Retention Barrier -->
      <path d="M 280,220 L 520,220 L 500,470 L 260,470 Z" class="cad-concrete-mass" />
      <!-- Sea-Wall Internal Rebar & Tie-Back Reinforcement -->
      <line x1="320" y1="240" x2="300" y2="460" class="cad-detail-stroke" />
      <line x1="380" y1="240" x2="360" y2="460" class="cad-detail-stroke" />
      <line x1="440" y1="240" x2="420" y2="460" class="cad-detail-stroke" />
      <line x1="280" y1="300" x2="510" y2="300" class="cad-detail-stroke" />
      <line x1="270" y1="380" x2="505" y2="380" class="cad-detail-stroke" />
      <!-- Weep Holes & Drainage Tubes -->
      <circle cx="340" cy="430" r="8" class="cad-pile-anchor-head" />
      <circle cx="440" cy="430" r="8" class="cad-pile-anchor-head" />
      <text x="310" y="210" class="cad-dimension-text">70 MPa POZZOLAN SEA-WALL BARRIER</text>
      <text x="310" y="445" class="cad-redline-callout">WEEP-HOLE PRESSURE EQUALIZERS</text>

      <!-- Marine Compound Cliffside Residence (Perched Behind Sea Wall) -->
      <rect x="520" y="140" width="580" height="260" class="cad-detail-stroke" />
      <!-- Heavy Concrete Floor Slabs -->
      <rect x="500" y="270" width="620" height="20" class="cad-structure-beam" />
      <rect x="500" y="130" width="620" height="25" class="cad-structure-beam" />

      <!-- Aluminum-Bronze C61400 Seismic Window Mullions & Glazing -->
      <line x1="620" y1="155" x2="620" y2="270" class="cad-detail-stroke" stroke-width="2" />
      <line x1="740" y1="155" x2="740" y2="270" class="cad-detail-stroke" stroke-width="2" />
      <line x1="860" y1="155" x2="860" y2="270" class="cad-detail-stroke" stroke-width="2" />
      <line x1="980" y1="155" x2="980" y2="270" class="cad-detail-stroke" stroke-width="2" />
      <line x1="620" y1="290" x2="620" y2="400" class="cad-detail-stroke" stroke-width="2" />
      <line x1="740" y1="290" x2="740" y2="400" class="cad-detail-stroke" stroke-width="2" />
      <line x1="860" y1="290" x2="860" y2="400" class="cad-detail-stroke" stroke-width="2" />
      <line x1="980" y1="290" x2="980" y2="400" class="cad-detail-stroke" stroke-width="2" />
      <text x="560" y="120" class="cad-dimension-text">C61400 ALUMINUM-BRONZE SEISMIC SLIP-JOINT FENESTRATION</text>

      <!-- Sea-Wall Height Dimension Line -->
      <line x1="240" y1="220" x2="240" y2="470" class="cad-dimension-line" />
      <line x1="230" y1="220" x2="250" y2="220" class="cad-dimension-line" />
      <line x1="230" y1="470" x2="250" y2="470" class="cad-dimension-line" />
      <text x="145" y="340" class="cad-dimension-text" font-weight="800">|← 8.5M SEA-WALL →|</text>

      <!-- Elevation Datums -->
      <text x="1115" y="145" class="cad-elevation-marker">∇ ROOF LEVEL +14.80M</text>
      <text x="1115" y="285" class="cad-elevation-marker">∇ MAIN LIVING +9.50M</text>
      <text x="1115" y="415" class="cad-elevation-marker">∇ BEDROCK PINNING +2.00M</text>

      <!-- Archival Title Block -->
      <g transform="translate(860, 480)">
        <rect x="0" y="0" width="310" height="95" class="cad-title-block-box" rx="3" />
        <text x="16" y="24" class="cad-dimension-text" font-weight="800">ANSCONS ATELIER // DWG A-102-REV.03</text>
        <text x="16" y="44" class="cad-dimension-text">TYP-01: HILLSIDE CANTILEVERS</text>
        <text x="16" y="62" class="cad-dimension-text">BLUFFLINE SEA-WALL // BIG SUR</text>
        <text x="16" y="80" class="cad-redline-callout">CHLORIDE ASSAY: &lt;480 COULOMBS (PASS)</text>
      </g>
    </svg>
  `,

  'typ-2': `
    <!-- Sonoran Desert Monolith IV: Dual-Wythe Concrete Massing & 5 Travertine Courtyards -->
    <svg viewBox="0 0 1200 600" class="vellum-cad-overlay" preserveAspectRatio="none">
      <!-- Grid Axis Lines -->
      <line x1="140" y1="80" x2="140" y2="560" class="cad-dimension-line" stroke-dasharray="10 4 2 4" opacity="0.6" />
      <line x1="330" y1="80" x2="330" y2="560" class="cad-dimension-line" stroke-dasharray="10 4 2 4" opacity="0.6" />
      <line x1="550" y1="80" x2="550" y2="560" class="cad-dimension-line" stroke-dasharray="10 4 2 4" opacity="0.6" />
      <line x1="770" y1="80" x2="770" y2="560" class="cad-dimension-line" stroke-dasharray="10 4 2 4" opacity="0.6" />
      <line x1="990" y1="80" x2="990" y2="560" class="cad-dimension-line" stroke-dasharray="10 4 2 4" opacity="0.6" />
      <circle cx="140" cy="95" r="12" class="cad-title-block-box" />
      <text x="140" y="99" text-anchor="middle" class="cad-dimension-text" font-size="10" font-weight="800">A</text>
      <circle cx="330" cy="95" r="12" class="cad-title-block-box" />
      <text x="330" y="99" text-anchor="middle" class="cad-dimension-text" font-size="10" font-weight="800">B</text>
      <circle cx="550" cy="95" r="12" class="cad-title-block-box" />
      <text x="550" y="99" text-anchor="middle" class="cad-dimension-text" font-size="10" font-weight="800">C</text>
      <circle cx="770" cy="95" r="12" class="cad-title-block-box" />
      <text x="770" y="99" text-anchor="middle" class="cad-dimension-text" font-size="10" font-weight="800">D</text>
      <circle cx="990" cy="95" r="12" class="cad-title-block-box" />
      <text x="990" y="99" text-anchor="middle" class="cad-dimension-text" font-size="10" font-weight="800">E</text>

      <!-- Caliche Hardpan Strata & Subsurface Horizon -->
      <rect x="0" y="480" width="1200" height="120" class="cad-strata-layer" />
      <line x1="0" y1="480" x2="1200" y2="480" class="cad-structure-beam" />
      <!-- Caliche Texture Lines -->
      <line x1="100" y1="520" x2="220" y2="520" class="cad-bedrock-hatch" />
      <line x1="380" y1="540" x2="520" y2="540" class="cad-bedrock-hatch" />
      <line x1="720" y1="520" x2="860" y2="520" class="cad-bedrock-hatch" />
      <text x="40" y="565" class="cad-dimension-text">CALICHE HARDPAN BEDROCK // CONTINUOUS STRUCTURAL RAFT FOOTING</text>

      <!-- Continuous Raft Footing & Sub-Floor Evaporative Water Flumes -->
      <rect x="60" y="445" width="1080" height="35" class="cad-concrete-mass" />
      <rect x="140" y="425" width="920" height="22" class="cad-accent-vector" stroke-dasharray="6 3" />
      <text x="320" y="440" class="cad-redline-callout">SUB-FLOOR EVAPORATIVE WATER CHANNELS ∇ -0.45M (PASSIVE COOLING)</text>

      <!-- 450mm Dual-Wythe Board-Formed Architectural Concrete Masses (5 Monumental Piers) -->
      <!-- Pier A -->
      <rect x="100" y="170" width="80" height="255" class="cad-concrete-mass" />
      <line x1="140" y1="170" x2="140" y2="425" class="cad-detail-stroke" stroke-dasharray="3 3" />
      <!-- Pier B -->
      <rect x="290" y="170" width="80" height="255" class="cad-concrete-mass" />
      <line x1="330" y1="170" x2="330" y2="425" class="cad-detail-stroke" stroke-dasharray="3 3" />
      <!-- Pier C -->
      <rect x="510" y="170" width="80" height="255" class="cad-concrete-mass" />
      <line x1="550" y1="170" x2="550" y2="425" class="cad-detail-stroke" stroke-dasharray="3 3" />
      <!-- Pier D -->
      <rect x="730" y="170" width="80" height="255" class="cad-concrete-mass" />
      <line x1="770" y1="170" x2="770" y2="425" class="cad-detail-stroke" stroke-dasharray="3 3" />
      <!-- Pier E -->
      <rect x="950" y="170" width="80" height="255" class="cad-concrete-mass" />
      <line x1="990" y1="170" x2="990" y2="425" class="cad-detail-stroke" stroke-dasharray="3 3" />

      <!-- Formwork Tie-Hole Snap Lines Aligned to ±0.5mm across 60m Pour -->
      <line x1="80" y1="230" x2="1050" y2="230" class="cad-detail-stroke" stroke-dasharray="6 4" />
      <line x1="80" y1="290" x2="1050" y2="290" class="cad-detail-stroke" stroke-dasharray="6 4" />
      <line x1="80" y1="350" x2="1050" y2="350" class="cad-detail-stroke" stroke-dasharray="6 4" />
      <line x1="80" y1="410" x2="1050" y2="410" class="cad-detail-stroke" stroke-dasharray="6 4" />
      <!-- Tie-Hole Alignment Markers -->
      <circle cx="140" cy="230" r="3" class="cad-pile-anchor-head" />
      <circle cx="330" cy="230" r="3" class="cad-pile-anchor-head" />
      <circle cx="550" cy="230" r="3" class="cad-pile-anchor-head" />
      <circle cx="770" cy="230" r="3" class="cad-pile-anchor-head" />
      <circle cx="990" cy="230" r="3" class="cad-pile-anchor-head" />
      <text x="360" y="222" class="cad-redline-callout">TIE-HOLE GRID ALIGNED ±0.5 mm OVER 60M CONTINUOUS RUN</text>

      <!-- Travertine Courtyards (Open Sky Skylights) -->
      <rect x="180" y="420" width="110" height="5" class="cad-pile-anchor-head" />
      <text x="235" y="310" text-anchor="middle" class="cad-dimension-text" font-weight="700">PATIO I</text>
      <text x="235" y="325" text-anchor="middle" class="cad-dimension-text" font-size="8">COURTYARD</text>

      <rect x="370" y="420" width="140" height="5" class="cad-pile-anchor-head" />
      <text x="440" y="310" text-anchor="middle" class="cad-dimension-text" font-weight="700">PATIO II</text>
      <text x="440" y="325" text-anchor="middle" class="cad-dimension-text" font-size="8">COURTYARD</text>

      <rect x="590" y="420" width="140" height="5" class="cad-pile-anchor-head" />
      <text x="660" y="310" text-anchor="middle" class="cad-dimension-text" font-weight="700">PATIO III</text>
      <text x="660" y="325" text-anchor="middle" class="cad-dimension-text" font-size="8">COURTYARD</text>

      <rect x="810" y="420" width="140" height="5" class="cad-pile-anchor-head" />
      <text x="880" y="310" text-anchor="middle" class="cad-dimension-text" font-weight="700">PATIO IV</text>
      <text x="880" y="325" text-anchor="middle" class="cad-dimension-text" font-size="8">COURTYARD</text>

      <!-- Monumental Thermal Massing Concrete Roof Slab -->
      <rect x="80" y="125" width="970" height="45" class="cad-structure-beam" />
      <text x="310" y="152" class="cad-dimension-text">R-60 THERMAL MASS ROOF ENVELOPE (48°C TO 4°C DIURNAL SWING)</text>

      <!-- Span Dimension Line -->
      <line x1="80" y1="110" x2="1050" y2="110" class="cad-dimension-line" />
      <line x1="80" y1="102" x2="80" y2="118" class="cad-dimension-line" />
      <line x1="1050" y1="102" x2="1050" y2="118" class="cad-dimension-line" />
      <text x="460" y="105" class="cad-dimension-text" font-weight="800">|← 60.00 METERS CONTINUOUS POUR LENGTH →|</text>

      <!-- Elevation Datums -->
      <text x="1065" y="145" class="cad-elevation-marker">∇ ROOF LEVEL +5.40M</text>
      <text x="1065" y="420" class="cad-elevation-marker">∇ TRAVERTINE FFL +0.00M</text>
      <text x="1065" y="455" class="cad-elevation-marker">∇ RAFT FOOTING -0.45M</text>

      <!-- Archival Title Block -->
      <g transform="translate(860, 480)">
        <rect x="0" y="0" width="310" height="95" class="cad-title-block-box" rx="3" />
        <text x="16" y="24" class="cad-dimension-text" font-weight="800">ANSCONS ATELIER // DWG A-204-REV.02</text>
        <text x="16" y="44" class="cad-dimension-text">TYP-02: MONOLITHIC PAVILIONS</text>
        <text x="16" y="62" class="cad-dimension-text">MONOLITH IV // FIVE PATIOS</text>
        <text x="16" y="80" class="cad-redline-callout">CORE SAMPLE #09: 56-DAY MONITORED CURE</text>
      </g>
    </svg>
  `,

  'typ-2-p4': `
    <!-- Quarry Cut Pavilion: Alpine Granite Outcropping & Glulam Timber Beams -->
    <svg viewBox="0 0 1200 600" class="vellum-cad-overlay" preserveAspectRatio="none">
      <!-- Grid Axis Lines -->
      <line x1="380" y1="80" x2="380" y2="560" class="cad-dimension-line" stroke-dasharray="10 4 2 4" opacity="0.6" />
      <line x1="680" y1="80" x2="680" y2="560" class="cad-dimension-line" stroke-dasharray="10 4 2 4" opacity="0.6" />
      <line x1="980" y1="80" x2="980" y2="560" class="cad-dimension-line" stroke-dasharray="10 4 2 4" opacity="0.6" />
      <circle cx="380" cy="95" r="12" class="cad-title-block-box" />
      <text x="380" y="99" text-anchor="middle" class="cad-dimension-text" font-size="10" font-weight="800">A</text>
      <circle cx="680" cy="95" r="12" class="cad-title-block-box" />
      <text x="680" y="99" text-anchor="middle" class="cad-dimension-text" font-size="10" font-weight="800">B</text>
      <circle cx="980" cy="95" r="12" class="cad-title-block-box" />
      <text x="980" y="99" text-anchor="middle" class="cad-dimension-text" font-size="10" font-weight="800">C</text>

      <!-- Alpine Granite Outcropping Bedrock Slope & Wire Saw Cut -->
      <path d="M 0,200 L 360,400 L 1200,400 L 1200,600 L 0,600 Z" class="cad-bedrock-slope" />
      <line x1="80" y1="280" x2="30" y2="350" class="cad-bedrock-hatch" />
      <line x1="160" y1="330" x2="100" y2="420" class="cad-bedrock-hatch" />
      <line x1="260" y1="380" x2="200" y2="480" class="cad-bedrock-hatch" />
      <text x="40" y="240" class="cad-dimension-text">SWISS ALPS GRANITE OUTCROPPING BEDROCK</text>

      <!-- Diamond-Wire Leveled Living Floor (800 Tons Natural Granite) -->
      <line x1="360" y1="400" x2="1140" y2="400" class="cad-structure-beam" stroke-width="4" />
      <rect x="360" y="400" width="780" height="20" class="cad-pile-anchor-head" />
      <text x="410" y="435" class="cad-redline-callout">DIAMOND-WIRE WIRE-SAWN GRANITE LIVING FLOOR (800 TONS LEVELED IN SITU)</text>

      <!-- Heavy Timber Douglas Fir Glulam Structural Posts & Flitch Plates -->
      <rect x="360" y="190" width="45" height="210" class="cad-structure-beam" />
      <rect x="660" y="190" width="45" height="210" class="cad-structure-beam" />
      <rect x="960" y="190" width="45" height="210" class="cad-structure-beam" />
      <!-- Post Base Pin Shoe Detail -->
      <circle cx="382" cy="395" r="5" class="cad-pile-anchor-head" />
      <circle cx="682" cy="395" r="5" class="cad-pile-anchor-head" />
      <circle cx="982" cy="395" r="5" class="cad-pile-anchor-head" />

      <!-- Primary Glulam Beams with Concealed Internal Flitch Plates -->
      <rect x="330" y="190" width="780" height="40" class="cad-structure-beam" />
      <line x1="330" y1="210" x2="1110" y2="210" class="cad-accent-vector" stroke-dasharray="8 4" />
      <text x="460" y="180" class="cad-dimension-text">GLULAM DOUGLAS FIR WITH CONCEALED STEEL FLITCH PLATES</text>

      <!-- R-60 Alpine Cold Roof Envelope for 3.5m Snow-Pack Load -->
      <rect x="310" y="130" width="820" height="60" class="cad-concrete-mass" />
      <line x1="310" y1="130" x2="1130" y2="130" class="cad-structure-beam" stroke-width="2" />
      <!-- Snow-Pack Load Vectors -->
      <text x="500" y="115" class="cad-dimension-text" font-weight="800">↓↓ 35 kN/m² SNOW-PACK LOAD COMPLIANT (R-60 TRIPLE ISOLATED ENVELOPE)</text>

      <!-- Triple-Pane Argon Fenestration Curtain Wall -->
      <rect x="405" y="230" width="255" height="170" class="cad-detail-stroke" />
      <line x1="532" y1="230" x2="532" y2="400" class="cad-detail-stroke" />
      <rect x="705" y="230" width="255" height="170" class="cad-detail-stroke" />
      <line x1="832" y1="230" x2="832" y2="400" class="cad-detail-stroke" />
      <text x="470" y="320" class="cad-dimension-text">TRIPLE-GLAZED ARGON LOW-E WALL</text>

      <!-- Roof Span Dimension Line -->
      <line x1="330" y1="100" x2="1110" y2="100" class="cad-dimension-line" />
      <line x1="330" y1="92" x2="330" y2="108" class="cad-dimension-line" />
      <line x1="1110" y1="92" x2="1110" y2="108" class="cad-dimension-line" />
      <text x="610" y="96" class="cad-dimension-text" font-weight="800">|← 26.00M CLEAR TIMBER ROOF SPAN →|</text>

      <!-- Elevation Datums -->
      <text x="1135" y="145" class="cad-elevation-marker">∇ TOP OF COLD ROOF +6.80M</text>
      <text x="1135" y="235" class="cad-elevation-marker">∇ GLULAM CEILING +4.20M</text>
      <text x="1135" y="405" class="cad-elevation-marker">∇ GRANITE FINISH FLOOR +0.00M</text>

      <!-- Archival Title Block -->
      <g transform="translate(860, 480)">
        <rect x="0" y="0" width="310" height="95" class="cad-title-block-box" rx="3" />
        <text x="16" y="24" class="cad-dimension-text" font-weight="800">ANSCONS ATELIER // DWG A-208-REV.03</text>
        <text x="16" y="44" class="cad-dimension-text">TYP-02: MONOLITHIC PAVILIONS</text>
        <text x="16" y="62" class="cad-dimension-text">QUARRY CUT PAVILION // ALPS</text>
        <text x="16" y="80" class="cad-redline-callout">DIAMOND-WIRE KERF: ±0.3mm TOLERANCE</text>
      </g>
    </svg>
  `,

  'typ-3': `
    <!-- Kyoto Sub-Grade Private Museum Vault: Double-Hulled Waterproofing & Decoupled Acoustic Slab -->
    <svg viewBox="0 0 1200 600" class="vellum-cad-overlay" preserveAspectRatio="none">
      <!-- Grid Axis Lines -->
      <line x1="280" y1="80" x2="280" y2="560" class="cad-dimension-line" stroke-dasharray="10 4 2 4" opacity="0.6" />
      <line x1="580" y1="80" x2="580" y2="560" class="cad-dimension-line" stroke-dasharray="10 4 2 4" opacity="0.6" />
      <line x1="880" y1="80" x2="880" y2="560" class="cad-dimension-line" stroke-dasharray="10 4 2 4" opacity="0.6" />
      <circle cx="280" cy="95" r="12" class="cad-title-block-box" />
      <text x="280" y="99" text-anchor="middle" class="cad-dimension-text" font-size="10" font-weight="800">V1</text>
      <circle cx="580" cy="95" r="12" class="cad-title-block-box" />
      <text x="580" y="99" text-anchor="middle" class="cad-dimension-text" font-size="10" font-weight="800">V2</text>
      <circle cx="880" cy="95" r="12" class="cad-title-block-box" />
      <text x="880" y="99" text-anchor="middle" class="cad-dimension-text" font-size="10" font-weight="800">V3</text>

      <!-- Ground Level & Subterranean Bedrock Strata -->
      <line x1="0" y1="150" x2="1200" y2="150" class="cad-structure-beam" stroke-width="2" />
      <text x="40" y="140" class="cad-elevation-marker">∇ NATURAL GRADE LEVEL +0.00M (EXCAVATION ENVELOPE)</text>
      <!-- Surrounding Bedrock Soil -->
      <rect x="0" y="150" width="120" height="450" class="cad-strata-layer" />
      <rect x="1080" y="150" width="120" height="450" class="cad-strata-layer" />

      <!-- Outer Heavy Structural Concrete Retaining Vault -->
      <rect x="120" y="160" width="960" height="380" rx="4" class="cad-concrete-mass" />

      <!-- Dual-Hull Waterproofing Envelope: Bentonite Sheet & Welded HDPE -->
      <rect x="145" y="185" width="910" height="330" rx="8" class="cad-accent-vector" stroke-dasharray="8 4" />
      <text x="260" y="180" class="cad-redline-callout">DOUBLE-HULLED BENTONITE &amp; HDPE WATERPROOF TANKING (100 kPa PRESSURE RATED)</text>

      <!-- Inner Decoupled Floating Room-Within-A-Room Acoustic Concrete Slab -->
      <rect x="180" y="440" width="840" height="40" class="cad-structure-beam" />
      <!-- Elastomeric Acoustic Isolation Spring Pads (NC-12 Rating) -->
      <circle cx="240" cy="505" r="9" class="cad-pile-anchor-head" />
      <circle cx="440" cy="505" r="9" class="cad-pile-anchor-head" />
      <circle cx="640" cy="505" r="9" class="cad-pile-anchor-head" />
      <circle cx="840" cy="505" r="9" class="cad-pile-anchor-head" />
      <circle cx="980" cy="505" r="9" class="cad-pile-anchor-head" />
      <text x="320" y="530" class="cad-dimension-text">ELASTOMERIC ACOUSTIC ISOLATION PADS (NC-12 NOISE RATING ACHIEVED)</text>

      <!-- 3-Ton Counterweighted Solid Bronze Balanced Pivot Door Assembly -->
      <line x1="280" y1="230" x2="280" y2="440" class="cad-structure-beam" stroke-width="6" />
      <circle cx="280" cy="440" r="10" class="cad-pile-anchor-head" />
      <!-- Door Swing Arc Clearance -->
      <path d="M 280,440 A 150,150 0 0,0 430,440" class="cad-accent-vector" stroke-dasharray="4 4" />
      <text x="300" y="320" class="cad-redline-callout">3-TON SOLID BRONZE BALANCED PIVOT DOOR (ZERO POWER MANUAL EFFORT)</text>

      <!-- Museum-Grade Hermetic Climate Enclosure (±1% RH, ±0.5°C) -->
      <rect x="340" y="220" width="650" height="200" class="cad-detail-stroke" />
      <!-- Laminar Ceiling Supply Diffusers -->
      <line x1="380" y1="220" x2="950" y2="220" class="cad-detail-stroke" stroke-dasharray="4 2" />
      <text x="440" y="270" class="cad-dimension-text">MUSEUM-GRADE CLIMATE STABILITY: ±1% RH • ±0.5°C VINTAGE WINE &amp; SCROLL VAULT</text>
      <!-- Glass Display Vitrines -->
      <rect x="420" y="330" width="140" height="90" class="cad-detail-stroke" />
      <rect x="620" y="330" width="140" height="90" class="cad-detail-stroke" />
      <rect x="820" y="330" width="140" height="90" class="cad-detail-stroke" />

      <!-- Sub-Grade Depth Dimension Line -->
      <line x1="100" y1="150" x2="100" y2="480" class="cad-dimension-line" />
      <line x1="90" y1="150" x2="110" y2="150" class="cad-dimension-line" />
      <line x1="90" y1="480" x2="110" y2="480" class="cad-dimension-line" />
      <text x="18" y="320" class="cad-dimension-text" font-weight="800">|← 6.20M SUB-GRADE DEPTH →|</text>

      <!-- Elevation Datums -->
      <text x="1090" y="215" class="cad-elevation-marker">∇ VAULT CEILING -2.20M</text>
      <text x="1090" y="445" class="cad-elevation-marker">∇ FLOATING SLAB -5.80M</text>
      <text x="1090" y="545" class="cad-elevation-marker">∇ SUMP PIT -6.90M</text>

      <!-- Archival Title Block -->
      <g transform="translate(860, 480)">
        <rect x="0" y="0" width="310" height="95" class="cad-title-block-box" rx="3" />
        <text x="16" y="24" class="cad-dimension-text" font-weight="800">ANSCONS ATELIER // DWG A-301-REV.05</text>
        <text x="16" y="44" class="cad-dimension-text">TYP-03: SUB-GRADE VAULTS</text>
        <text x="16" y="62" class="cad-dimension-text">KYOTO PRIVATE MUSEUM VAULT</text>
        <text x="16" y="80" class="cad-redline-callout">HYDROSTATIC WATERPROOF TEST: 100% PASS</text>
      </g>
    </svg>
  `,

  'typ-3-p6': `
    <!-- Wellness & Biophilic Movement Sanctuary: Sprung Oak Floor & Laminar Airflow HVAC -->
    <svg viewBox="0 0 1200 600" class="vellum-cad-overlay" preserveAspectRatio="none">
      <!-- Grid Axis Lines -->
      <line x1="240" y1="80" x2="240" y2="560" class="cad-dimension-line" stroke-dasharray="10 4 2 4" opacity="0.6" />
      <line x1="600" y1="80" x2="600" y2="560" class="cad-dimension-line" stroke-dasharray="10 4 2 4" opacity="0.6" />
      <line x1="960" y1="80" x2="960" y2="560" class="cad-dimension-line" stroke-dasharray="10 4 2 4" opacity="0.6" />
      <circle cx="240" cy="95" r="12" class="cad-title-block-box" />
      <text x="240" y="99" text-anchor="middle" class="cad-dimension-text" font-size="10" font-weight="800">S1</text>
      <circle cx="600" cy="95" r="12" class="cad-title-block-box" />
      <text x="600" y="99" text-anchor="middle" class="cad-dimension-text" font-size="10" font-weight="800">S2</text>
      <circle cx="960" cy="95" r="12" class="cad-title-block-box" />
      <text x="960" y="99" text-anchor="middle" class="cad-dimension-text" font-size="10" font-weight="800">S3</text>

      <!-- Subterranean Base Concrete Foundation Slab -->
      <rect x="80" y="470" width="1040" height="70" class="cad-concrete-mass" />
      <text x="100" y="525" class="cad-dimension-text">REINFORCED STRUCTURAL SLAB WITH INTEGRAL VAPOR RETARDER</text>

      <!-- Decoupled Dual-Density Neoprene Suspension Pads -->
      <rect x="160" y="445" width="45" height="25" class="cad-pile-anchor-head" />
      <rect x="360" y="445" width="45" height="25" class="cad-pile-anchor-head" />
      <rect x="560" y="445" width="45" height="25" class="cad-pile-anchor-head" />
      <rect x="760" y="445" width="45" height="25" class="cad-pile-anchor-head" />
      <rect x="960" y="445" width="45" height="25" class="cad-pile-anchor-head" />
      <text x="360" y="462" class="cad-dimension-text">DUAL-DENSITY NEOPRENE SUSPENSION PADS</text>

      <!-- Sprung European White-Oak Flooring Layer with Hydronic Radiant Loops -->
      <rect x="80" y="415" width="1040" height="30" class="cad-structure-beam" />
      <!-- Serpentine Hydronic Heating Loops Graphic -->
      <path d="M 100,430 Q 140,422 180,430 T 260,430 T 340,430 T 420,430 T 500,430 T 580,430 T 660,430 T 740,430 T 820,430 T 900,430 T 980,430 T 1060,430" class="cad-accent-vector" />
      <text x="280" y="405" class="cad-redline-callout">HYDRONIC RADIANT HEATING LOOPS INTEGRATED IN SPRUNG FLOOR (28°C SURFACE COMFORT)</text>

      <!-- Zero-Velocity Laminar Airflow HVAC Slots in Ceiling Plenum -->
      <rect x="80" y="140" width="1040" height="45" class="cad-detail-stroke" />
      <!-- Micro-Downflow Vectors -->
      <path d="M 200,185 L 200,240 M 400,185 L 400,240 M 600,185 L 600,240 M 800,185 L 800,240 M 1000,185 L 1000,240" class="cad-detail-stroke" stroke-dasharray="4 2" />
      <text x="320" y="130" class="cad-dimension-text">ZERO-VELOCITY LAMINAR AIRFLOW PLENUM (NO TURBULENT DRAFTS // HEPA H14)</text>

      <!-- Acoustic Slatted American Walnut Baffles on Lateral Walls -->
      <line x1="80" y1="185" x2="80" y2="415" class="cad-structure-beam" stroke-width="8" />
      <line x1="1120" y1="185" x2="1120" y2="415" class="cad-structure-beam" stroke-width="8" />
      <text x="100" y="260" class="cad-dimension-text">SLATTED ACOUSTIC WALNUT BAFFLES (RT60: 0.28 SECONDS REVERBERATION TIME)</text>

      <!-- Full-Spectrum Circadian Luminaire Array -->
      <rect x="220" y="195" width="760" height="15" class="cad-pile-anchor-head" />
      <text x="440" y="206" class="cad-dimension-text" font-size="8">FULL-SPECTRUM 6500K - 2200K CIRCADIAN EMITTERS</text>

      <!-- Sanctuary Height Dimension Line -->
      <line x1="60" y1="140" x2="60" y2="415" class="cad-dimension-line" />
      <line x1="50" y1="140" x2="70" y2="140" class="cad-dimension-line" />
      <line x1="50" y1="415" x2="70" y2="415" class="cad-dimension-line" />
      <text x="8" y="280" class="cad-dimension-text" font-weight="800">|← 4.50M CEILING HEIGHT →|</text>

      <!-- Elevation Datums -->
      <text x="1135" y="160" class="cad-elevation-marker">∇ PLENUM LEVEL +4.50M</text>
      <text x="1135" y="420" class="cad-elevation-marker">∇ SPRUNG OAK FFL +0.00M</text>
      <text x="1135" y="475" class="cad-elevation-marker">∇ SLAB BASE -0.55M</text>

      <!-- Archival Title Block -->
      <g transform="translate(860, 480)">
        <rect x="0" y="0" width="310" height="95" class="cad-title-block-box" rx="3" />
        <text x="16" y="24" class="cad-dimension-text" font-weight="800">ANSCONS ATELIER // DWG A-306-REV.02</text>
        <text x="16" y="44" class="cad-dimension-text">TYP-03: SUB-GRADE VAULTS</text>
        <text x="16" y="62" class="cad-dimension-text">BIOPHILIC MOVEMENT SANCTUARY</text>
        <text x="16" y="80" class="cad-redline-callout">DECOUPLED SPRUNG OAK: 0.28s RT60 PASSED</text>
      </g>
    </svg>
  `,

  'typ-4': `
    <!-- Tribeca Cast-Iron Mercantile Exchange: Needle-Beam Underpinning & Bronze Elevator Core -->
    <svg viewBox="0 0 1200 600" class="vellum-cad-overlay" preserveAspectRatio="none">
      <!-- Grid Axis Lines -->
      <line x1="200" y1="80" x2="200" y2="560" class="cad-dimension-line" stroke-dasharray="10 4 2 4" opacity="0.6" />
      <line x1="500" y1="80" x2="500" y2="560" class="cad-dimension-line" stroke-dasharray="10 4 2 4" opacity="0.6" />
      <line x1="820" y1="80" x2="820" y2="560" class="cad-dimension-line" stroke-dasharray="10 4 2 4" opacity="0.6" />
      <circle cx="200" cy="95" r="12" class="cad-title-block-box" />
      <text x="200" y="99" text-anchor="middle" class="cad-dimension-text" font-size="10" font-weight="800">P1</text>
      <circle cx="500" cy="95" r="12" class="cad-title-block-box" />
      <text x="500" y="99" text-anchor="middle" class="cad-dimension-text" font-size="10" font-weight="800">C1</text>
      <circle cx="820" cy="95" r="12" class="cad-title-block-box" />
      <text x="820" y="99" text-anchor="middle" class="cad-dimension-text" font-size="10" font-weight="800">E1</text>

      <!-- 1892 Landmarked Cast-Iron Masonry Party Wall & Joist Courses -->
      <rect x="80" y="140" width="220" height="300" class="cad-concrete-mass" />
      <!-- Brick Coursing Detail Lines -->
      <line x1="80" y1="180" x2="300" y2="180" class="cad-detail-stroke" />
      <line x1="80" y1="220" x2="300" y2="220" class="cad-detail-stroke" />
      <line x1="80" y1="260" x2="300" y2="260" class="cad-detail-stroke" />
      <line x1="80" y1="300" x2="300" y2="300" class="cad-detail-stroke" />
      <line x1="80" y1="340" x2="300" y2="340" class="cad-detail-stroke" />
      <line x1="80" y1="380" x2="300" y2="380" class="cad-detail-stroke" />
      <text x="95" y="165" class="cad-dimension-text">1892 HISTORIC BRICK &amp; CAST-IRON PARTY WALL</text>

      <!-- Precision Heavy Steel Needle-Beam Shoring & High-Tonnage Micro-Jacks -->
      <rect x="40" y="405" width="320" height="38" class="cad-structure-beam" />
      <rect x="100" y="443" width="45" height="35" class="cad-pile-anchor-head" />
      <rect x="240" y="443" width="45" height="35" class="cad-pile-anchor-head" />
      <text x="55" y="395" class="cad-redline-callout">HYDRAULIC NEEDLE BEAMS &amp; 450 kN MICRO-JACK UNDERPINNING</text>

      <!-- Excavated 4.5m Sub-Basement into Manhattan Schist Bedrock -->
      <rect x="80" y="490" width="1040" height="95" class="cad-strata-layer" />
      <line x1="80" y1="490" x2="1120" y2="490" class="cad-structure-beam" />
      <text x="320" y="535" class="cad-dimension-text">∇ NEW 4.5M SUB-BASEMENT EXCAVATED INTO MANHATTAN SCHIST BEDROCK</text>

      <!-- Restored Ornate Fluted Cast-Iron Structural Column with Corinthian Capital -->
      <rect x="475" y="190" width="50" height="255" class="cad-concrete-mass" />
      <!-- Fluting Lines -->
      <line x1="487" y1="230" x2="487" y2="445" class="cad-detail-stroke" />
      <line x1="500" y1="230" x2="500" y2="445" class="cad-detail-stroke" />
      <line x1="513" y1="230" x2="513" y2="445" class="cad-detail-stroke" />
      <!-- Corinthian Capital Crown -->
      <path d="M 450,225 Q 500,185 550,225 Z" class="cad-pile-anchor-head" />
      <!-- Base Plate -->
      <rect x="460" y="445" width="80" height="15" class="cad-structure-beam" />
      <text x="390" y="180" class="cad-redline-callout">ULTRASONIC NON-DESTRUCTIVE FLAW TESTED COLUMN (0.0 DEFECTS)</text>

      <!-- Blackened Architectural Bronze Elevator Core with Pulleys & Guide Rails -->
      <rect x="720" y="140" width="200" height="350" class="cad-detail-stroke" stroke-dasharray="6 3" />
      <!-- Bronze Pulley Wheels -->
      <circle cx="780" cy="180" r="22" class="cad-pile-anchor-head" />
      <circle cx="860" cy="180" r="22" class="cad-pile-anchor-head" />
      <!-- Hoist Cable Lines -->
      <line x1="780" y1="180" x2="780" y2="480" class="cad-structure-beam" stroke-width="2" />
      <line x1="860" y1="180" x2="860" y2="480" class="cad-structure-beam" stroke-width="2" />
      <!-- Counterweight -->
      <rect x="845" y="270" width="30" height="60" class="cad-accent-vector" />
      <text x="730" y="130" class="cad-dimension-text">BLACKENED ARCHITECTURAL BRONZE ELEVATOR HOISTWAY</text>

      <!-- Underpinning Depth Dimension Line -->
      <line x1="40" y1="440" x2="40" y2="535" class="cad-dimension-line" />
      <line x1="30" y1="440" x2="50" y2="440" class="cad-dimension-line" />
      <line x1="30" y1="535" x2="50" y2="535" class="cad-dimension-line" />
      <text x="8" y="490" class="cad-dimension-text" font-weight="800">|← 4.5M SCHIST DEPTH →|</text>

      <!-- Elevation Datums -->
      <text x="1135" y="155" class="cad-elevation-marker">∇ HISTORIC CEILING +4.80M</text>
      <text x="1135" y="440" class="cad-elevation-marker">∇ HISTORIC GROUND +0.00M</text>
      <text x="1135" y="535" class="cad-elevation-marker">∇ SUB-BASEMENT FFL -4.50M</text>

      <!-- Archival Title Block -->
      <g transform="translate(860, 480)">
        <rect x="0" y="0" width="310" height="95" class="cad-title-block-box" rx="3" />
        <text x="16" y="24" class="cad-dimension-text" font-weight="800">ANSCONS ATELIER // DWG A-408-REV.04</text>
        <text x="16" y="44" class="cad-dimension-text">TYP-04: HISTORIC RECONSTRUCTION</text>
        <text x="16" y="62" class="cad-dimension-text">MERCANTILE EXCHANGE // TRIBECA</text>
        <text x="16" y="80" class="cad-redline-callout">NEEDLE-BEAM SHORING PASSED // ZERO SETTLEMENT</text>
      </g>
    </svg>
  `
};

let js = fs.readFileSync('js/projects.js', 'utf8');

const startTag = 'const CAD_OVERLAYS = {';
const endTag = '// Comprehensive Database for Built Works Typologies';

const startIdx = js.indexOf(startTag);
const endIdx = js.indexOf(endTag);

if (startIdx === -1 || endIdx === -1) {
  console.error('Could not locate CAD_OVERLAYS in js/projects.js');
  process.exit(1);
}

const replacement = 'const CAD_OVERLAYS = ' + JSON.stringify(CAD_OVERLAYS, null, 2) + ';\n\n';

js = js.slice(0, startIdx) + replacement + js.slice(endIdx);

// Syntax validation
try {
  const testJs = js.replace(/^import\s+[^;]+;/gm, '// import').replace(/^export\s+/gm, '');
  new Function(testJs);
  console.log('Syntax test PASSED!');
  fs.writeFileSync('js/projects.js', js, 'utf8');
  console.log('Successfully written updated js/projects.js!');
} catch (e) {
  console.error('Syntax error:', e);
  process.exit(1);
}

