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