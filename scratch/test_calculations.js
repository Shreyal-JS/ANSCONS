// Test parametric calculations logic from estimator.js
function runParametricTest(sqft, geotechFactor, typ, env, fin, unitSystem) {
  const typMultipliers = { 'typ-a': 1.0, 'typ-b': 1.35, 'typ-c': 1.5 };
  const envMultipliers = { 'spec-1': 1.0, 'spec-2': 1.25, 'spec-3': 1.55 };
  const finMultipliers = { 'fin-1': 1.0, 'fin-2': 1.30, 'fin-3': 1.65 };

  const isMetric = (unitSystem === 'metric');
  const sqMeters = Math.round(sqft * 0.092903);

  const leverComposite = (0.35 * typMultipliers[typ]) + (0.35 * envMultipliers[env]) + (0.30 * finMultipliers[fin]);
  const compositeIndex = geotechFactor * leverComposite;

  const concreteCuYds = Math.round(sqft * 0.045 * geotechFactor * (typ === 'typ-c' ? 2.1 : 1.0));
  const concreteCuM = Math.round(concreteCuYds * 0.764555);

  const tiebackCount = Math.round((sqft / 550) * (geotechFactor >= 1.30 ? 2.2 : 1.1));
  const steelTons = Math.round((sqft * 0.018) * (typ === 'typ-b' ? 1.85 : 1.0));
  const steelMetricTonnes = Math.round(steelTons * 0.907185);

  const facadeSqFt = Math.round(sqft * 0.65);
  const facadeSqM = Math.round(facadeSqFt * 0.092903);

  const minRateUSD = 1050 * compositeIndex;
  const maxRateUSD = 1420 * compositeIndex;

  const minTotalUSD = Math.round(sqft * minRateUSD);
  const maxTotalUSD = Math.round(sqft * maxRateUSD);

  const currencySym = isMetric ? '€' : '$';
  const currencySuffix = isMetric ? 'EUR' : 'USD';
  const rateFactor = isMetric ? 0.92 : 1.0;

  const minTotal = Math.round(minTotalUSD * rateFactor);
  const maxTotal = Math.round(maxTotalUSD * rateFactor);

  // Line items
  const costSub = { min: Math.round(minTotal * 0.22), max: Math.round(maxTotal * 0.22) };
  const costSuper = { min: Math.round(minTotal * 0.28), max: Math.round(maxTotal * 0.28) };
  const costEnv = { min: Math.round(minTotal * 0.24), max: Math.round(maxTotal * 0.24) };
  const costFin = { min: Math.round(minTotal * 0.18), max: Math.round(maxTotal * 0.18) };
  const costGen = { min: Math.round(minTotal * 0.08), max: Math.round(maxTotal * 0.08) };

  const sumMin = costSub.min + costSuper.min + costEnv.min + costFin.min + costGen.min;
  const sumMax = costSub.max + costSuper.max + costEnv.max + costFin.max + costGen.max;

  // Schedule
  const baseDuration = Math.round(14 + (sqft / 1100) + (geotechFactor * 3.5) + (typ === 'typ-c' ? 5 : (typ === 'typ-b' ? 3 : 0)));
  const durationMin = baseDuration;
  const durationMax = baseDuration + 4;

  // AIA Stamp test
  let stampType = 'AIA B101 COMPLIANT';
  if (typ === 'typ-b' && sqft < 4500) {
    stampType = 'WARNING: EXCEEDS TYPICAL CODE SPAN // PEER REVIEW REQUIRED';
  } else if (geotechFactor >= 1.45) {
    stampType = 'WARNING: HIGH-LIABILITY COASTAL BLUFF // 70 MPa POZZOLAN SEA-WALL MANDATORY';
  } else if (typ === 'typ-c') {
    stampType = 'SUB-GRADE HYDROSTATIC SEAL VERIFIED';
  }

  return {
    sqft,
    sqMeters,
    compositeIndex: compositeIndex.toFixed(3),
    minTotalFormatted: `${currencySym}${(minTotal/1e6).toFixed(2)}M`,
    maxTotalFormatted: `${currencySym}${(maxTotal/1e6).toFixed(2)}M ${currencySuffix}`,
    concrete: `${concreteCuYds} cu.yd. (${concreteCuM} m³)`,
    tiebacks: tiebackCount,
    steel: `${steelTons} tons (${steelMetricTonnes} tonnes)`,
    schedule: `${durationMin} - ${durationMax} Months`,
    stampType,
    lineItemsSumCheck: Math.abs(sumMin - minTotal) / minTotal < 0.01 // within 1% rounding
  };
}

console.log('--- TEST 1: Default Parameters (10,000 sq ft, Bedrock 1.0, TYP-A, SPEC-1, FIN-1, Imperial) ---');
console.log(runParametricTest(10000, 1.0, 'typ-a', 'spec-1', 'fin-1', 'imperial'));

console.log('\n--- TEST 2: Cantilever Hillside (18,000 sq ft, Coastal 1.45, TYP-B, SPEC-3, FIN-3, Imperial) ---');
console.log(runParametricTest(18000, 1.45, 'typ-b', 'spec-3', 'fin-3', 'imperial'));

console.log('\n--- TEST 3: Extreme Small Cantilever Warning (3,500 sq ft, Hillside 1.15, TYP-B, SPEC-2, FIN-2, Metric) ---');
console.log(runParametricTest(3500, 1.15, 'typ-b', 'spec-2', 'fin-2', 'metric'));

console.log('\n--- TEST 4: Subterranean Vault (22,000 sq ft, Fault 1.30, TYP-C, SPEC-2, FIN-2, Imperial) ---');
console.log(runParametricTest(22000, 1.30, 'typ-c', 'spec-2', 'fin-2', 'imperial'));

