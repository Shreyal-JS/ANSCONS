const CAD_OVERLAYS = {
  'typ-1': `
    <!-- Bel-Air Cantilever Estate: 38° Hillside Bedrock & Post-Tensioned Cantilever Truss -->
    <svg viewBox="0 0 1200 600" class="vellum-cad-overlay" preserveAspectRatio="none">
      <!-- Bedrock Slope 38° Profile -->
      <path d="M 0,260 L 450,540 L 1200,540 L 1200,600 L 0,600 Z" class="cad-bedrock-slope" />
      <line x1="60" y1="310" x2="30" y2="380" class="cad-bedrock-hatch" />
      <line x1="140" y1="370" x2="110" y2="440" class="cad-bedrock-hatch" />
      <line x1="220" y1="430" x2="190" y2="500" class="cad-bedrock-hatch" />
      <line x1="300" y1="490" x2="270" y2="550" class="cad-bedrock-hatch" />
      
      <!-- 28m Micro-Piles Drilled Deep Into Bedrock Basalt -->
      <line x1="220" y1="400" x2="110" y2="585" class="cad-foundation-pile" />
      <line x1="340" y1="480" x2="230" y2="595" class="cad-foundation-pile" />
      <line x1="450" y1="535" x2="390" y2="600" class="cad-foundation-pile" />
      <circle cx="220" cy="400" r="6" class="cad-pile-anchor-head" />
      <circle cx="340" cy="480" r="6" class="cad-pile-anchor-head" />
      <circle cx="450" cy="535" r="6" class="cad-pile-anchor-head" />

      <!-- Deep Reinforced Foundation Pier Grade Beam -->
      <rect x="200" y="340" width="280" height="70" class="cad-concrete-mass" />
      <text x="215" y="380" class="cad-dimension-text">f'c = 65 MPa GRADE BEAM PIER</text>

      <!-- Welded Steel Box Girder Spine (Cantilever Volume) -->
      <path d="M 320,340 L 1120,340 L 1090,400 L 320,400 Z" class="cad-structure-beam" />
      
      <!-- Internal Post-Tensioned Cable Tendon Trajectory -->
      <path d="M 330,360 Q 650,390 1080,355" class="cad-accent-vector" stroke-dasharray="8 4" />
      <text x="640" y="385" class="cad-redline-callout">12x 15.2mm DYWIDAG TENDONS @ 1,850 kN</text>

      <!-- Living Volume Glass Envelope & Timber Ceiling Planks -->
      <rect x="360" y="190" width="720" height="150" class="cad-detail-stroke" stroke-dasharray="4 2" />
      <line x1="360" y1="190" x2="1080" y2="190" class="cad-structure-beam" />
      <text x="500" y="175" class="cad-dimension-text">CANTILEVER PROJECTION: 18.00 METERS OVER 42° CANYON SLOPE</text>

      <!-- Title Stamp -->
      <g transform="translate(860, 480)">
        <rect x="0" y="0" width="280" height="85" class="cad-title-block-box" rx="3" />
        <text x="14" y="24" class="cad-dimension-text" font-weight="800">ANSCONS ATELIER // DWG A-101</text>
        <text x="14" y="44" class="cad-dimension-text">TYP-01: HILLSIDE CANTILEVERS</text>
        <text x="14" y="60" class="cad-dimension-text">THE OBSIDIAN CANTILEVER</text>
        <text x="14" y="74" class="cad-redline-callout">ZERO DEFLECTION @ 120% LOAD</text>
      </g>
    </svg>
  `,

  'typ-1-p2': `
    <!-- Bluffline Sea-Wall Estate: Wave-Break Bedrock & Marine Concrete Sea-Wall -->
    <svg viewBox="0 0 1200 600" class="vellum-cad-overlay" preserveAspectRatio="none">
      <!-- Pacific Wave-Break Bedrock Reef -->
      <path d="M 0,400 Q 220,360 420,410 T 900,480 L 1200,490 L 1200,600 L 0,600 Z" class="cad-bedrock-slope" />
      <!-- Wave Surge Vector -->
      <path d="M 0,440 Q 180,390 320,440" class="cad-accent-vector" stroke-dasharray="6 3" />
      <text x="80" y="425" class="cad-redline-callout">PACIFIC WAVE SURGE 4,000 L/MIN DIVERTER</text>

      <!-- 70 MPa Sulfate-Resistant Marine Concrete Sea-Wall -->
      <rect x="360" y="250" width="480" height="220" class="cad-concrete-mass" />
      <text x="380" y="280" class="cad-dimension-text">70 MPa POZZOLAN MARINE CONCRETE RETENTION</text>

      <!-- Aluminum-Bronze Seismic Mullion System -->
      <rect x="420" y="170" width="360" height="80" class="cad-detail-stroke" />
      <line x1="540" y1="170" x2="540" y2="250" class="cad-detail-stroke" />
      <line x1="660" y1="170" x2="660" y2="250" class="cad-detail-stroke" />
      <text x="440" y="155" class="cad-dimension-text">C61400 ALUMINUM-BRONZE SEISMIC SLIP JOINTS</text>

      <!-- Title Stamp -->
      <g transform="translate(860, 480)">
        <rect x="0" y="0" width="280" height="85" class="cad-title-block-box" rx="3" />
        <text x="14" y="24" class="cad-dimension-text" font-weight="800">ANSCONS ATELIER // DWG A-102</text>
        <text x="14" y="44" class="cad-dimension-text">TYP-01: HILLSIDE CANTILEVERS</text>
        <text x="14" y="60" class="cad-dimension-text">BLUFFLINE SEA-WALL ESTATE</text>
        <text x="14" y="74" class="cad-redline-callout">480 COULOMBS CHLORIDE ASSAY</text>
      </g>
    </svg>
  `,

  'typ-2': `
    <!-- Sonoran Desert Monolith IV: Dual-Wythe Concrete Massing & 5 Travertine Courtyards -->
    <svg viewBox="0 0 1200 600" class="vellum-cad-overlay" preserveAspectRatio="none">
      <!-- Ground Horizon & Deep Caliche Hardpan Strata -->
      <line x1="0" y1="490" x2="1200" y2="490" class="cad-structure-beam" />
      <rect x="0" y="490" width="1200" height="110" class="cad-strata-layer" />
      <text x="60" y="525" class="cad-dimension-text">CALICHE HARDPAN BEDROCK // CONTINUOUS RAFT FOOTING</text>

      <!-- Sub-Floor Evaporative Cooling Water Flumes -->
      <rect x="160" y="465" width="860" height="25" class="cad-accent-vector" stroke-dasharray="4 2" />
      <text x="340" y="455" class="cad-redline-callout">SUB-FLOOR EVAPORATIVE WATER CHANNELS ∇ -0.45M</text>

      <!-- 450mm Dual-Wythe Board-Formed Concrete Massing Columns -->
      <rect x="120" y="220" width="70" height="245" class="cad-concrete-mass" />
      <rect x="340" y="220" width="55" height="245" class="cad-concrete-mass" />
      <rect x="580" y="220" width="55" height="245" class="cad-concrete-mass" />
      <rect x="800" y="220" width="55" height="245" class="cad-concrete-mass" />
      <rect x="1000" y="220" width="70" height="245" class="cad-concrete-mass" />

      <!-- Formwork Tie-Hole Grid Lines Aligned to ±0.5mm -->
      <line x1="120" y1="280" x2="1070" y2="280" class="cad-detail-stroke" stroke-dasharray="6 3" />
      <line x1="120" y1="350" x2="1070" y2="350" class="cad-detail-stroke" stroke-dasharray="6 3" />
      <line x1="120" y1="420" x2="1070" y2="420" class="cad-detail-stroke" stroke-dasharray="6 3" />
      <text x="410" y="270" class="cad-redline-callout">TIE-HOLE GRID ALIGNED ±0.5 mm OVER 60M POUR RUN</text>

      <!-- Deep Thermal Massing Roof Slab (Passive Diurnal Protection) -->
      <rect x="90" y="180" width="1000" height="40" class="cad-structure-beam" />
      <text x="360" y="170" class="cad-dimension-text">R-60 THERMAL MASS ROOF ENVELOPE (48°C TO 4°C DIURNAL SWING)</text>

      <!-- Travertine Courtyards 01 - 05 Open Sky Indicators -->
      <text x="210" y="335" class="cad-dimension-text">COURTYARD I</text>
      <text x="430" y="335" class="cad-dimension-text">COURTYARD II</text>
      <text x="660" y="335" class="cad-dimension-text">COURTYARD III</text>
      <text x="870" y="335" class="cad-dimension-text">COURTYARD IV</text>

      <!-- Title Stamp -->
      <g transform="translate(860, 480)">
        <rect x="0" y="0" width="280" height="85" class="cad-title-block-box" rx="3" />
        <text x="14" y="24" class="cad-dimension-text" font-weight="800">ANSCONS ATELIER // DWG A-204</text>
        <text x="14" y="44" class="cad-dimension-text">TYP-02: MONOLITHIC PAVILIONS</text>
        <text x="14" y="60" class="cad-dimension-text">MONOLITH IV: FIVE PATIOS</text>
        <text x="14" y="74" class="cad-redline-callout">CORE SAMPLE #09: 56-DAY CURE</text>
      </g>
    </svg>
  `,

  'typ-2-p4': `
    <!-- Quarry Cut Pavilion: Alpine Granite Outcropping & Glulam Timber Beams -->
    <svg viewBox="0 0 1200 600" class="vellum-cad-overlay" preserveAspectRatio="none">
      <!-- Natural Swiss Granite Outcropping Bedrock Profile -->
      <path d="M 0,220 L 380,410 L 1200,410 L 1200,600 L 0,600 Z" class="cad-bedrock-slope" />
      <line x1="380" y1="410" x2="1200" y2="410" class="cad-structure-beam" />
      <text x="430" y="440" class="cad-redline-callout">DIAMOND-WIRE WIRE-SAWN GRANITE LIVING FLOOR (800 TONS)</text>

      <!-- Heavy Timber Glue-Laminated Douglas Fir Beams with Flitch Plates -->
      <rect x="360" y="220" width="740" height="45" class="cad-structure-beam" />
      <line x1="360" y1="242" x2="1100" y2="242" class="cad-accent-vector" stroke-dasharray="8 4" />
      <text x="470" y="210" class="cad-dimension-text">GLULAM DOUGLAS FIR WITH CONCEALED FLITCH PLATES</text>

      <!-- R-60 Triple-Isolated Roof Envelope for 3.5m Snow-Pack Load -->
      <rect x="340" y="170" width="780" height="50" class="cad-concrete-mass" />
      <text x="490" y="160" class="cad-dimension-text">R-60 ROOF // 3.5-METER SNOW-PACK LOAD COMPLIANT</text>

      <!-- Title Stamp -->
      <g transform="translate(860, 480)">
        <rect x="0" y="0" width="280" height="85" class="cad-title-block-box" rx="3" />
        <text x="14" y="24" class="cad-dimension-text" font-weight="800">ANSCONS ATELIER // DWG A-208</text>
        <text x="14" y="44" class="cad-dimension-text">TYP-02: MONOLITHIC PAVILIONS</text>
        <text x="14" y="60" class="cad-dimension-text">QUARRY CUT PAVILION (ALPS)</text>
        <text x="14" y="74" class="cad-redline-callout">ZERO MICRO-CAVITY GAP</text>
      </g>
    </svg>
  `,

  'typ-3': `
    <!-- Kyoto Sub-Grade Vault: Double-Hulled Waterproofing & Decoupled Acoustic Slab -->
    <svg viewBox="0 0 1200 600" class="vellum-cad-overlay" preserveAspectRatio="none">
      <!-- Ground Level & Subterranean Bedrock Strata -->
      <line x1="0" y1="170" x2="1200" y2="170" class="cad-dimension-line" />
      <text x="40" y="160" class="cad-elevation-marker">∇ NATURAL GRADE LEVEL +0.00M</text>

      <!-- Dual-Hull Waterproofing Envelope: Bentonite Sheet & Welded HDPE -->
      <rect x="170" y="200" width="860" height="320" rx="12" class="cad-accent-vector" stroke-dasharray="8 4" />
      <text x="250" y="190" class="cad-redline-callout">DOUBLE-HULLED BENTONITE &amp; HDPE WATERPROOF ENVELOPE (100 kPa)</text>

      <!-- Decoupled Floating Room-Within-A-Room Acoustic Slab on Elastomeric Pads -->
      <rect x="220" y="450" width="760" height="40" class="cad-concrete-mass" />
      <circle cx="270" cy="510" r="8" class="cad-pile-anchor-head" />
      <circle cx="470" cy="510" r="8" class="cad-pile-anchor-head" />
      <circle cx="690" cy="510" r="8" class="cad-pile-anchor-head" />
      <circle cx="890" cy="510" r="8" class="cad-pile-anchor-head" />
      <text x="320" y="535" class="cad-dimension-text">ELASTOMERIC ACOUSTIC ISOLATION PADS (NC-12 NOISE RATING)</text>

      <!-- 3-Ton Counterweighted Solid Bronze Pivot Door -->
      <line x1="270" y1="240" x2="270" y2="450" class="cad-structure-beam" stroke-width="5" />
      <circle cx="270" cy="450" r="10" class="cad-pile-anchor-head" />
      <text x="290" y="320" class="cad-redline-callout">3-TON SOLID BRONZE BALANCED PIVOT DOOR</text>

      <!-- Climate Precision Enclosure Zone (±1% RH, ±0.5°C) -->
      <rect x="350" y="240" width="580" height="190" class="cad-detail-stroke" stroke-dasharray="4 2" />
      <text x="420" y="295" class="cad-dimension-text">MUSEUM-GRADE CLIMATE STABILITY: ±1% RH • ±0.5°C</text>

      <!-- Title Stamp -->
      <g transform="translate(860, 480)">
        <rect x="0" y="0" width="280" height="85" class="cad-title-block-box" rx="3" />
        <text x="14" y="24" class="cad-dimension-text" font-weight="800">ANSCONS ATELIER // DWG A-301</text>
        <text x="14" y="44" class="cad-dimension-text">TYP-03: SUB-GRADE VAULTS</text>
        <text x="14" y="60" class="cad-dimension-text">KYOTO PRIVATE MUSEUM VAULT</text>
        <text x="14" y="74" class="cad-redline-callout">HYDROSTATIC SEAL VERIFIED</text>
      </g>
    </svg>
  `,

  'typ-3-p6': `
    <!-- Wellness & Biophilic Movement Sanctuary: Sprung Oak Floor & Laminar Airflow HVAC -->
    <svg viewBox="0 0 1200 600" class="vellum-cad-overlay" preserveAspectRatio="none">
      <!-- Base Concrete Slab -->
      <rect x="100" y="470" width="1000" height="60" class="cad-concrete-mass" />
      
      <!-- Decoupled Dual-Density Neoprene Pads -->
      <rect x="180" y="450" width="40" height="20" class="cad-pile-anchor-head" />
      <rect x="380" y="450" width="40" height="20" class="cad-pile-anchor-head" />
      <rect x="580" y="450" width="40" height="20" class="cad-pile-anchor-head" />
      <rect x="780" y="450" width="40" height="20" class="cad-pile-anchor-head" />
      <rect x="980" y="450" width="40" height="20" class="cad-pile-anchor-head" />

      <!-- Sprung European White-Oak Flooring Layer with Hydronic Radiant Loops -->
      <rect x="100" y="425" width="1000" height="25" class="cad-structure-beam" />
      <path d="M 120,437 Q 150,430 180,437 T 240,437 T 300,437 T 360,437 T 420,437 T 480,437 T 540,437 T 600,437 T 660,437 T 720,437 T 780,437 T 840,437 T 900,437 T 960,437 T 1020,437 T 1080,437" class="cad-accent-vector" />
      <text x="310" y="415" class="cad-redline-callout">HYDRONIC RADIANT HEATING LOOPS INTEGRATED IN SPRUNG FLOOR</text>

      <!-- Zero-Velocity Laminar Airflow HVAC Slots in Ceiling Plenum -->
      <rect x="100" y="170" width="1000" height="40" class="cad-detail-stroke" />
      <path d="M 200,210 L 200,260 M 400,210 L 400,260 M 600,210 L 600,260 M 800,210 L 800,260 M 1000,210 L 1000,260" class="cad-detail-stroke" stroke-dasharray="4 2" />
      <text x="350" y="160" class="cad-dimension-text">ZERO-VELOCITY LAMINAR AIRFLOW PLENUM (NO CONVECTIVE DRAFTS)</text>

      <!-- Acoustic Slatted American Walnut Baffles on Walls -->
      <line x1="100" y1="210" x2="100" y2="425" class="cad-structure-beam" stroke-width="6" />
      <line x1="1100" y1="210" x2="1100" y2="425" class="cad-structure-beam" stroke-width="6" />
      <text x="140" y="270" class="cad-dimension-text">SLATTED ACOUSTIC WALNUT BAFFLES (RT60: 0.28 SECONDS)</text>

      <!-- Title Stamp -->
      <g transform="translate(860, 480)">
        <rect x="0" y="0" width="280" height="85" class="cad-title-block-box" rx="3" />
        <text x="14" y="24" class="cad-dimension-text" font-weight="800">ANSCONS ATELIER // DWG A-306</text>
        <text x="14" y="44" class="cad-dimension-text">TYP-03: SUB-GRADE VAULTS</text>
        <text x="14" y="60" class="cad-dimension-text">BIOPHILIC SANCTUARY</text>
        <text x="14" y="74" class="cad-redline-callout">DECOUPLED SPRUNG OAK SYSTEM</text>
      </g>
    </svg>
  `,

  'typ-4': `
    <!-- Tribeca Cast-Iron Mercantile Exchange: Needle-Beam Underpinning & Bronze Elevator Core -->
    <svg viewBox="0 0 1200 600" class="vellum-cad-overlay" preserveAspectRatio="none">
      <!-- 1892 Landmarked Cast-Iron Masonry Party Wall -->
      <rect x="100" y="170" width="180" height="300" class="cad-concrete-mass" />
      <line x1="100" y1="230" x2="280" y2="230" class="cad-detail-stroke" />
      <line x1="100" y1="300" x2="280" y2="300" class="cad-detail-stroke" />
      <line x1="100" y1="370" x2="280" y2="370" class="cad-detail-stroke" />
      <line x1="100" y1="440" x2="280" y2="440" class="cad-detail-stroke" />
      <text x="110" y="195" class="cad-dimension-text">1892 BRICK &amp; CAST-IRON WALL</text>

      <!-- Precision Needle-Beam Shoring & Micro-Jacks -->
      <rect x="60" y="440" width="300" height="35" class="cad-structure-beam" />
      <rect x="140" y="475" width="40" height="40" class="cad-pile-anchor-head" />
      <text x="80" y="430" class="cad-redline-callout">HYDRAULIC NEEDLE BEAMS &amp; MICRO-JACKS</text>

      <!-- Excavated 4.5m Sub-Basement into Manhattan Schist -->
      <rect x="100" y="515" width="1000" height="75" class="cad-strata-layer" />
      <text x="340" y="555" class="cad-dimension-text">∇ NEW 4.5M SUB-BASEMENT IN MANHATTAN SCHIST BEDROCK</text>

      <!-- Restored Ornate Fluted Cast-Iron Structural Column -->
      <rect x="450" y="210" width="50" height="260" class="cad-concrete-mass" />
      <!-- Corinthian Capital Detail -->
      <path d="M 430,210 Q 475,185 520,210 Z" class="cad-pile-anchor-head" />
      <text x="380" y="175" class="cad-redline-callout">ULTRASONIC FLAW TESTED COLUMN</text>

      <!-- Blackened Architectural Bronze Elevator Core with Pulleys -->
      <rect x="740" y="170" width="180" height="375" class="cad-detail-stroke" stroke-dasharray="6 3" />
      <circle cx="830" cy="200" r="20" class="cad-accent-vector" />
      <line x1="810" y1="200" x2="810" y2="510" class="cad-structure-beam" />
      <line x1="850" y1="200" x2="850" y2="420" class="cad-structure-beam" />
      <text x="700" y="155" class="cad-dimension-text">EXPOSED BRONZE ELEVATOR HOISTWAY</text>

      <!-- Title Stamp -->
      <g transform="translate(860, 480)">
        <rect x="0" y="0" width="280" height="85" class="cad-title-block-box" rx="3" />
        <text x="14" y="24" class="cad-dimension-text" font-weight="800">ANSCONS ATELIER // DWG A-408</text>
        <text x="14" y="44" class="cad-dimension-text">TYP-04: HISTORIC RECONSTRUCTION</text>
        <text x="14" y="60" class="cad-dimension-text">TRIBECA MERCANTILE EXCHANGE</text>
        <text x="14" y="74" class="cad-redline-callout">NEEDLE-BEAM SHORING PASSED</text>
      </g>
    </svg>
  `
};