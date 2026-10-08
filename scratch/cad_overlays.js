const CAD_OVERLAYS = {
  'typ-1': `
    <!-- Bel-Air Cantilever Estate: 38° Hillside Bedrock & Post-Tensioned Cantilever Truss -->
    <svg viewBox="0 0 1200 600" class="vellum-cad-overlay" preserveAspectRatio="none">
      <!-- Bedrock Slope 38° Profile -->
      <path d="M 0,220 L 450,560 L 1200,560 L 1200,600 L 0,600 Z" class="cad-bedrock-slope" fill="rgba(180, 160, 130, 0.15)" stroke="#4a3825" stroke-width="2" />
      <line x1="60" y1="280" x2="30" y2="350" class="cad-bedrock-hatch" stroke="rgba(120, 95, 65, 0.45)" />
      <line x1="140" y1="340" x2="110" y2="410" class="cad-bedrock-hatch" stroke="rgba(120, 95, 65, 0.45)" />
      <line x1="220" y1="400" x2="190" y2="470" class="cad-bedrock-hatch" stroke="rgba(120, 95, 65, 0.45)" />
      <line x1="300" y1="460" x2="270" y2="530" class="cad-bedrock-hatch" stroke="rgba(120, 95, 65, 0.45)" />
      
      <!-- 28m Micro-Piles Drilled Deep Into Bedrock Basalt -->
      <line x1="220" y1="380" x2="100" y2="580" class="cad-foundation-pile" stroke="#1a222c" stroke-width="3" stroke-linecap="round" />
      <line x1="340" y1="470" x2="220" y2="595" class="cad-foundation-pile" stroke="#1a222c" stroke-width="3" stroke-linecap="round" />
      <line x1="450" y1="540" x2="380" y2="600" class="cad-foundation-pile" stroke="#1a222c" stroke-width="3" stroke-linecap="round" />
      <circle cx="220" cy="380" r="6" class="cad-pile-anchor-head" fill="#b3882e" stroke="#1a222c" stroke-width="1.5" />
      <circle cx="340" cy="470" r="6" class="cad-pile-anchor-head" fill="#b3882e" stroke="#1a222c" stroke-width="1.5" />
      <circle cx="450" cy="540" r="6" class="cad-pile-anchor-head" fill="#b3882e" stroke="#1a222c" stroke-width="1.5" />

      <!-- Deep Reinforced Foundation Pier Grade Beam -->
      <rect x="200" y="320" width="280" height="70" class="cad-concrete-pier" fill="rgba(160, 140, 110, 0.3)" stroke="#3a2e1d" stroke-width="2" />
      <text x="210" y="360" class="cad-dimension-text" fill="#4a3520">f'c = 65 MPa GRADE BEAM</text>

      <!-- Welded Steel Box Girder Spine (Cantilever Volume) -->
      <path d="M 320,320 L 1120,320 L 1090,380 L 320,380 Z" class="cad-cantilever-girder" fill="rgba(80, 60, 40, 0.2)" stroke="#b3882e" stroke-width="3.5" />
      
      <!-- Internal Post-Tensioned Cable Tendon Trajectory -->
      <path d="M 330,340 Q 650,370 1080,335" class="cad-tendon-profile" fill="none" stroke="#d93829" stroke-width="2.5" stroke-dasharray="8 4" />
      <text x="700" y="365" class="cad-redline-callout" fill="#d93829">12x 15.2mm DYWIDAG TENDONS @ 1,850 kN</text>

      <!-- Living Volume Glass Envelope & Timber Ceiling Planks -->
      <rect x="360" y="160" width="720" height="160" class="cad-envelope-frame" fill="none" stroke="#685038" stroke-width="1.5" stroke-dasharray="4 2" />
      <line x1="360" y1="160" x2="1080" y2="160" stroke="#b3882e" stroke-width="3" />
      <text x="560" y="145" class="cad-dimension-text" fill="#8d6b2c">CANTILEVER PROJECTION: 18.00 METERS OVER 42° SLOPE</text>

      <!-- Title Stamp -->
      <g transform="translate(860, 470)">
        <rect x="0" y="0" width="280" height="90" class="cad-title-block-box" fill="rgba(250, 245, 235, 0.95)" stroke="#7c6246" stroke-width="1.5" rx="3" />
        <text x="14" y="24" class="cad-dimension-text" font-weight="800" fill="#5a422d">ANSCONS ATELIER // DWG A-101</text>
        <text x="14" y="44" class="cad-dimension-text" fill="#5a422d">TYP-01: HILLSIDE CANTILEVERS</text>
        <text x="14" y="62" class="cad-dimension-text" fill="#5a422d">THE OBSIDIAN CANTILEVER</text>
        <text x="14" y="78" class="cad-dimension-text" fill="#b83324">ZERO DEFLECTION @ 120% LOAD</text>
      </g>
    </svg>
  `,

  'typ-1-p2': `
    <!-- Bluffline Sea-Wall Estate: Wave-Break Bedrock & Marine Concrete Sea-Wall -->
    <svg viewBox="0 0 1200 600" class="vellum-cad-overlay" preserveAspectRatio="none">
      <!-- Pacific Wave-Break Bedrock Reef -->
      <path d="M 0,380 Q 220,340 420,400 T 900,480 L 1200,490 L 1200,600 L 0,600 Z" class="cad-bedrock-slope" fill="rgba(140, 160, 180, 0.2)" stroke="#2b465e" stroke-width="2" />
      <!-- Wave Surge Vector -->
      <path d="M 0,440 Q 180,380 320,440" fill="none" stroke="#3898ec" stroke-width="2" stroke-dasharray="6 3" />
      <text x="80" y="420" class="cad-redline-callout" fill="#3898ec">PACIFIC WAVE SURGE 4,000 L/MIN DIVERTER</text>

      <!-- 70 MPa Sulfate-Resistant Marine Concrete Sea-Wall -->
      <rect x="360" y="240" width="480" height="220" fill="rgba(100, 120, 140, 0.3)" stroke="#1a2e40" stroke-width="3" />
      <text x="380" y="270" class="cad-dimension-text" fill="#1a2e40">70 MPa POZZOLAN MARINE CONCRETE RETENTION</text>

      <!-- Aluminum-Bronze Seismic Mullion System -->
      <rect x="420" y="140" width="360" height="100" fill="none" stroke="#c5a059" stroke-width="2.5" />
      <line x1="540" y1="140" x2="540" y2="240" stroke="#c5a059" stroke-width="2" />
      <line x1="660" y1="140" x2="660" y2="240" stroke="#c5a059" stroke-width="2" />
      <text x="440" y="125" class="cad-dimension-text" fill="#8d6b2c">C61400 ALUMINUM-BRONZE SEISMIC SLIP JOINTS</text>

      <!-- Title Stamp -->
      <g transform="translate(860, 470)">
        <rect x="0" y="0" width="280" height="90" class="cad-title-block-box" fill="rgba(250, 245, 235, 0.95)" stroke="#7c6246" stroke-width="1.5" rx="3" />
        <text x="14" y="24" class="cad-dimension-text" font-weight="800" fill="#5a422d">ANSCONS ATELIER // DWG A-102</text>
        <text x="14" y="44" class="cad-dimension-text" fill="#5a422d">TYP-01: HILLSIDE CANTILEVERS</text>
        <text x="14" y="62" class="cad-dimension-text" fill="#5a422d">BLUFFLINE SEA-WALL ESTATE</text>
        <text x="14" y="78" class="cad-dimension-text" fill="#b83324">480 COULOMBS CHLORIDE ASSAY</text>
      </g>
    </svg>
  `,

  'typ-2': `
    <!-- Sonoran Desert Monolith IV: Dual-Wythe Concrete Massing & 5 Travertine Courtyards -->
    <svg viewBox="0 0 1200 600" class="vellum-cad-overlay" preserveAspectRatio="none">
      <!-- Ground Horizon & Deep Caliche Hardpan Strata -->
      <line x1="0" y1="480" x2="1200" y2="480" stroke="#5a3d1c" stroke-width="2.5" />
      <rect x="0" y="480" width="1200" height="120" fill="rgba(190, 160, 110, 0.18)" />
      <text x="60" y="520" class="cad-dimension-text" fill="#7a5525">CALICHE HARDPAN BEDROCK // CONTINUOUS RAFT FOOTING</text>

      <!-- Sub-Floor Evaporative Cooling Water Flumes -->
      <rect x="180" y="460" width="840" height="20" fill="rgba(60, 140, 180, 0.25)" stroke="#2b7596" stroke-width="1.5" stroke-dasharray="4 2" />
      <text x="360" y="450" class="cad-redline-callout" fill="#2b7596">SUB-FLOOR EVAPORATIVE WATER CHANNELS ∇ -0.45M</text>

      <!-- 450mm Dual-Wythe Board-Formed Concrete Massing Walls -->
      <rect x="120" y="200" width="70" height="260" fill="rgba(140, 120, 95, 0.35)" stroke="#3d2b17" stroke-width="2.5" />
      <rect x="340" y="200" width="50" height="260" fill="rgba(140, 120, 95, 0.35)" stroke="#3d2b17" stroke-width="2.5" />
      <rect x="580" y="200" width="50" height="260" fill="rgba(140, 120, 95, 0.35)" stroke="#3d2b17" stroke-width="2.5" />
      <rect x="800" y="200" width="50" height="260" fill="rgba(140, 120, 95, 0.35)" stroke="#3d2b17" stroke-width="2.5" />
      <rect x="1010" y="200" width="70" height="260" fill="rgba(140, 120, 95, 0.35)" stroke="#3d2b17" stroke-width="2.5" />

      <!-- Formwork Tie-Hole Grid Lines Aligned to ±0.5mm -->
      <line x1="120" y1="260" x2="1080" y2="260" stroke="#b3882e" stroke-width="1" stroke-dasharray="6 3" />
      <line x1="120" y1="340" x2="1080" y2="340" stroke="#b3882e" stroke-width="1" stroke-dasharray="6 3" />
      <line x1="120" y1="420" x2="1080" y2="420" stroke="#b3882e" stroke-width="1" stroke-dasharray="6 3" />
      <text x="440" y="250" class="cad-redline-callout" fill="#b3882e">TIE-HOLE GRID ALIGNED ±0.5 mm OVER 60M POUR RUN</text>

      <!-- Deep Thermal Massing Roof Slab (Passive Diurnal Protection) -->
      <rect x="90" y="160" width="1020" height="40" fill="rgba(120, 100, 75, 0.4)" stroke="#3d2b17" stroke-width="3" />
      <text x="400" y="145" class="cad-dimension-text" fill="#8d6b2c">R-60 THERMAL MASS ROOF ENVELOPE (48°C TO 4°C DIURNAL SWING)</text>

      <!-- Travertine Courtyards 01 - 05 Open Sky Indicators -->
      <text x="210" y="320" class="cad-dimension-text" fill="#6d5331">COURTYARD I</text>
      <text x="430" y="320" class="cad-dimension-text" fill="#6d5331">COURTYARD II</text>
      <text x="670" y="320" class="cad-dimension-text" fill="#6d5331">COURTYARD III</text>
      <text x="880" y="320" class="cad-dimension-text" fill="#6d5331">COURTYARD IV</text>

      <!-- Title Stamp -->
      <g transform="translate(860, 470)">
        <rect x="0" y="0" width="280" height="90" class="cad-title-block-box" fill="rgba(250, 245, 235, 0.95)" stroke="#7c6246" stroke-width="1.5" rx="3" />
        <text x="14" y="24" class="cad-dimension-text" font-weight="800" fill="#5a422d">ANSCONS ATELIER // DWG A-204</text>
        <text x="14" y="44" class="cad-dimension-text" fill="#5a422d">TYP-02: MONOLITHIC PAVILIONS</text>
        <text x="14" y="62" class="cad-dimension-text" fill="#5a422d">MONOLITH IV: FIVE PATIOS</text>
        <text x="14" y="78" class="cad-dimension-text" fill="#b83324">CORE SAMPLE #09: 56-DAY CURE</text>
      </g>
    </svg>
  `,

  'typ-2-p4': `
    <!-- Quarry Cut Pavilion: Alpine Granite Outcropping & Glulam Timber Beams -->
    <svg viewBox="0 0 1200 600" class="vellum-cad-overlay" preserveAspectRatio="none">
      <!-- Natural Swiss Granite Outcropping Bedrock Profile -->
      <path d="M 0,160 L 380,380 L 1200,380 L 1200,600 L 0,600 Z" class="cad-bedrock-slope" fill="rgba(140, 150, 160, 0.25)" stroke="#3a4550" stroke-width="2.5" />
      <line x1="380" y1="380" x2="1200" y2="380" stroke="#222b34" stroke-width="3" />
      <text x="440" y="415" class="cad-redline-callout" fill="#d93829">DIAMOND-WIRE WIRE-SAWN GRANITE LIVING FLOOR (800 TONS)</text>

      <!-- Heavy Timber Glue-Laminated Douglas Fir Beams with Flitch Plates -->
      <rect x="360" y="180" width="740" height="45" fill="rgba(140, 95, 55, 0.4)" stroke="#583818" stroke-width="2.5" />
      <line x1="360" y1="202" x2="1100" y2="202" stroke="#b3882e" stroke-width="2" stroke-dasharray="8 4" />
      <text x="480" y="165" class="cad-dimension-text" fill="#8d6b2c">GLULAM DOUGLAS FIR WITH CONCEALED FLITCH PLATES</text>

      <!-- R-60 Triple-Isolated Roof Envelope for 3.5m Snow-Pack Load -->
      <rect x="340" y="130" width="780" height="50" fill="rgba(200, 210, 220, 0.3)" stroke="#2d3d4d" stroke-width="2" />
      <text x="500" y="115" class="cad-dimension-text" fill="#2d3d4d">R-60 ROOF // 3.5-METER SNOW-PACK LOAD COMPLIANT</text>

      <!-- Title Stamp -->
      <g transform="translate(860, 470)">
        <rect x="0" y="0" width="280" height="90" class="cad-title-block-box" fill="rgba(250, 245, 235, 0.95)" stroke="#7c6246" stroke-width="1.5" rx="3" />
        <text x="14" y="24" class="cad-dimension-text" font-weight="800" fill="#5a422d">ANSCONS ATELIER // DWG A-208</text>
        <text x="14" y="44" class="cad-dimension-text" fill="#5a422d">TYP-02: MONOLITHIC PAVILIONS</text>
        <text x="14" y="62" class="cad-dimension-text" fill="#5a422d">QUARRY CUT PAVILION (ALPS)</text>
        <text x="14" y="78" class="cad-dimension-text" fill="#b83324">ZERO MICRO-CAVITY GAP</text>
      </g>
    </svg>
  `,

  'typ-3': `
    <!-- Kyoto Sub-Grade Vault: Double-Hulled Waterproofing & Decoupled Acoustic Slab -->
    <svg viewBox="0 0 1200 600" class="vellum-cad-overlay" preserveAspectRatio="none">
      <!-- Ground Level & Subterranean Bedrock Strata -->
      <line x1="0" y1="120" x2="1200" y2="120" class="cad-dimension-line" stroke="#8d6b2c" stroke-width="2" />
      <text x="40" y="105" class="cad-dimension-text" fill="#8d6b2c">∇ NATURAL GRADE LEVEL +0.00M</text>

      <!-- Dual-Hull Waterproofing Envelope: Bentonite Sheet & Welded HDPE -->
      <rect x="180" y="180" width="840" height="340" fill="none" stroke="#2277bb" stroke-width="3" stroke-dasharray="8 4" rx="12" />
      <text x="260" y="165" class="cad-redline-callout" fill="#2277bb">DOUBLE-HULLED BENTONITE &amp; HDPE WATERPROOF ENVELOPE (100 kPa)</text>

      <!-- Decoupled Floating Room-Within-A-Room Acoustic Slab on Elastomeric Pads -->
      <rect x="230" y="460" width="740" height="40" fill="rgba(120, 110, 95, 0.4)" stroke="#3a2e1d" stroke-width="2" />
      <circle cx="280" cy="515" r="8" fill="#111" stroke="#b3882e" stroke-width="2" />
      <circle cx="480" cy="515" r="8" fill="#111" stroke="#b3882e" stroke-width="2" />
      <circle cx="700" cy="515" r="8" fill="#111" stroke="#b3882e" stroke-width="2" />
      <circle cx="900" cy="515" r="8" fill="#111" stroke="#b3882e" stroke-width="2" />
      <text x="320" y="540" class="cad-dimension-text" fill="#8d6b2c">ELASTOMERIC ACOUSTIC ISOLATION PADS (NC-12 RATING)</text>

      <!-- 3-Ton Counterweighted Solid Bronze Pivot Door -->
      <line x1="280" y1="240" x2="280" y2="460" stroke="#b3882e" stroke-width="5" />
      <circle cx="280" cy="460" r="10" fill="#b3882e" stroke="#111" stroke-width="2" />
      <text x="300" y="320" class="cad-redline-callout" fill="#b3882e">3-TON SOLID BRONZE BALANCED PIVOT DOOR</text>

      <!-- Climate Precision Enclosure Zone (±1% RH, ±0.5°C) -->
      <rect x="360" y="240" width="560" height="200" fill="rgba(180, 150, 110, 0.12)" stroke="#b3882e" stroke-width="1.5" stroke-dasharray="4 2" />
      <text x="440" y="300" class="cad-dimension-text" font-weight="700" fill="#4a3825">MUSEUM-GRADE CLIMATE STABILITY: ±1% RH • ±0.5°C</text>

      <!-- Title Stamp -->
      <g transform="translate(860, 470)">
        <rect x="0" y="0" width="280" height="90" class="cad-title-block-box" fill="rgba(250, 245, 235, 0.95)" stroke="#7c6246" stroke-width="1.5" rx="3" />
        <text x="14" y="24" class="cad-dimension-text" font-weight="800" fill="#5a422d">ANSCONS ATELIER // DWG A-301</text>
        <text x="14" y="44" class="cad-dimension-text" fill="#5a422d">TYP-03: SUB-GRADE VAULTS</text>
        <text x="14" y="62" class="cad-dimension-text" fill="#5a422d">KYOTO PRIVATE MUSEUM VAULT</text>
        <text x="14" y="78" class="cad-dimension-text" fill="#b83324">HYDROSTATIC SEAL VERIFIED</text>
      </g>
    </svg>
  `,

  'typ-3-p6': `
    <!-- Wellness & Biophilic Movement Sanctuary: Sprung Oak Floor & Laminar Airflow HVAC -->
    <svg viewBox="0 0 1200 600" class="vellum-cad-overlay" preserveAspectRatio="none">
      <!-- Base Concrete Slab -->
      <rect x="100" y="460" width="1000" height="60" fill="rgba(140, 130, 110, 0.3)" stroke="#4a3b2b" stroke-width="2" />
      
      <!-- Decoupled Dual-Density Neoprene Pads -->
      <rect x="180" y="440" width="40" height="20" fill="#222" stroke="#b3882e" stroke-width="1.5" />
      <rect x="380" y="440" width="40" height="20" fill="#222" stroke="#b3882e" stroke-width="1.5" />
      <rect x="580" y="440" width="40" height="20" fill="#222" stroke="#b3882e" stroke-width="1.5" />
      <rect x="780" y="440" width="40" height="20" fill="#222" stroke="#b3882e" stroke-width="1.5" />
      <rect x="980" y="440" width="40" height="20" fill="#222" stroke="#b3882e" stroke-width="1.5" />

      <!-- Sprung European White-Oak Flooring Layer with Hydronic Radiant Loops -->
      <rect x="100" y="415" width="1000" height="25" fill="rgba(210, 175, 120, 0.45)" stroke="#8e6830" stroke-width="2" />
      <path d="M 120,427 Q 150,420 180,427 T 240,427 T 300,427 T 360,427 T 420,427 T 480,427 T 540,427 T 600,427 T 660,427 T 720,427 T 780,427 T 840,427 T 900,427 T 960,427 T 1020,427 T 1080,427" fill="none" stroke="#d93829" stroke-width="2" />
      <text x="320" y="405" class="cad-redline-callout" fill="#d93829">HYDRONIC RADIANT HEATING LOOPS INTEGRATED IN SPRUNG FLOOR</text>

      <!-- Zero-Velocity Laminar Airflow HVAC Slots in Ceiling Plenum -->
      <rect x="100" y="140" width="1000" height="40" fill="rgba(80, 100, 120, 0.2)" stroke="#2b465e" stroke-width="2" />
      <path d="M 200,180 L 200,240 M 400,180 L 400,240 M 600,180 L 600,240 M 800,180 L 800,240 M 1000,180 L 1000,240" stroke="#3898ec" stroke-width="2" stroke-dasharray="4 2" />
      <text x="360" y="130" class="cad-dimension-text" fill="#2b465e">ZERO-VELOCITY LAMINAR AIRFLOW PLENUM (NO CONVECTIVE DRAFTS)</text>

      <!-- Acoustic Slatted American Walnut Baffles on Walls -->
      <line x1="100" y1="180" x2="100" y2="415" stroke="#5a3818" stroke-width="6" />
      <line x1="1100" y1="180" x2="1100" y2="415" stroke="#5a3818" stroke-width="6" />
      <text x="140" y="270" class="cad-dimension-text" fill="#8d6b2c">SLATTED ACOUSTIC WALNUT BAFFLES (RT60: 0.28 SECONDS)</text>

      <!-- Title Stamp -->
      <g transform="translate(860, 470)">
        <rect x="0" y="0" width="280" height="90" class="cad-title-block-box" fill="rgba(250, 245, 235, 0.95)" stroke="#7c6246" stroke-width="1.5" rx="3" />
        <text x="14" y="24" class="cad-dimension-text" font-weight="800" fill="#5a422d">ANSCONS ATELIER // DWG A-306</text>
        <text x="14" y="44" class="cad-dimension-text" fill="#5a422d">TYP-03: SUB-GRADE VAULTS</text>
        <text x="14" y="62" class="cad-dimension-text" fill="#5a422d">BIOPHILIC SANCTUARY</text>
        <text x="14" y="78" class="cad-dimension-text" fill="#b83324">DECOUPLED SPRUNG OAK SYSTEM</text>
      </g>
    </svg>
  `,

  'typ-4': `
    <!-- Tribeca Cast-Iron Mercantile Exchange: Needle-Beam Underpinning & Bronze Elevator Core -->
    <svg viewBox="0 0 1200 600" class="vellum-cad-overlay" preserveAspectRatio="none">
      <!-- 1892 Landmarked Cast-Iron Masonry Party Wall -->
      <rect x="100" y="80" width="180" height="380" fill="rgba(160, 100, 70, 0.25)" stroke="#4a2512" stroke-width="2.5" />
      <line x1="100" y1="140" x2="280" y2="140" stroke="#4a2512" stroke-width="1" />
      <line x1="100" y1="220" x2="280" y2="220" stroke="#4a2512" stroke-width="1" />
      <line x1="100" y1="300" x2="280" y2="300" stroke="#4a2512" stroke-width="1" />
      <text x="110" y="110" class="cad-dimension-text" fill="#5a2e16">1892 BRICK &amp; CAST-IRON WALL</text>

      <!-- Precision Needle-Beam Shoring & Micro-Jacks -->
      <rect x="60" y="420" width="300" height="35" fill="rgba(80, 80, 80, 0.4)" stroke="#111" stroke-width="2" />
      <rect x="140" y="455" width="40" height="40" fill="#b3882e" stroke="#111" stroke-width="2" />
      <text x="80" y="410" class="cad-redline-callout" fill="#d93829">HYDRAULIC NEEDLE BEAMS &amp; MICRO-JACKS</text>

      <!-- Excavated 4.5m Sub-Basement into Manhattan Schist -->
      <rect x="100" y="495" width="1000" height="90" fill="rgba(120, 140, 150, 0.3)" stroke="#2b3b4a" stroke-width="2.5" />
      <text x="360" y="540" class="cad-dimension-text" fill="#2b3b4a">∇ NEW 4.5M SUB-BASEMENT IN MANHATTAN SCHIST BEDROCK</text>

      <!-- Restored Ornate Fluted Cast-Iron Structural Column -->
      <rect x="450" y="120" width="50" height="340" fill="rgba(50, 50, 50, 0.35)" stroke="#1a1a1a" stroke-width="2.5" />
      <!-- Corinthian Capital Detail -->
      <path d="M 430,120 Q 475,95 520,120 Z" fill="#b3882e" stroke="#1a1a1a" stroke-width="2" />
      <text x="400" y="85" class="cad-redline-callout" fill="#b3882e">ULTRASONIC FLAW TESTED COLUMN</text>

      <!-- Blackened Architectural Bronze Elevator Core with Pulleys -->
      <rect x="740" y="100" width="180" height="450" fill="none" stroke="#684a20" stroke-width="3" stroke-dasharray="6 3" />
      <circle cx="830" cy="130" r="22" fill="none" stroke="#b3882e" stroke-width="2.5" />
      <line x1="810" y1="130" x2="810" y2="480" stroke="#111" stroke-width="2" />
      <line x1="850" y1="130" x2="850" y2="350" stroke="#111" stroke-width="2" />
      <text x="710" y="85" class="cad-dimension-text" fill="#8d6b2c">EXPOSED BRONZE ELEVATOR HOISTWAY</text>

      <!-- Title Stamp -->
      <g transform="translate(860, 470)">
        <rect x="0" y="0" width="280" height="90" class="cad-title-block-box" fill="rgba(250, 245, 235, 0.95)" stroke="#7c6246" stroke-width="1.5" rx="3" />
        <text x="14" y="24" class="cad-dimension-text" font-weight="800" fill="#5a422d">ANSCONS ATELIER // DWG A-408</text>
        <text x="14" y="44" class="cad-dimension-text" fill="#5a422d">TYP-04: HISTORIC RECONSTRUCTION</text>
        <text x="14" y="62" class="cad-dimension-text" fill="#5a422d">TRIBECA MERCANTILE EXCHANGE</text>
        <text x="14" y="78" class="cad-dimension-text" fill="#b83324">NEEDLE-BEAM SHORING PASSED</text>
      </g>
    </svg>
  `
};