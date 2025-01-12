const alloyPercentages = [
    { name: "SiMn", composition: { C: 2.00, Mn: 60.00, S: 0.25, P: 0.15, Si: 15.00, Al: 0.00, Cu: 0.00, Ca: 0.00, Ni: 0.00, Cr: 0.00, Mo: 0.00, Ti: 0.00, V: 0.00, Nb: 0.00, Pb: 0.00, B: 0.00 }, recoveryRate: 0.85 },
    { name: "FeSi", composition: { C: 0.12, Mn: 0.00, S: 0.05, P: 0.01, Si: 70.00, Al: 1.50, Cu: 0.00, Ca: 0.00, Ni: 0.00, Cr: 0.00, Mo: 0.00, Ti: 0.00, V: 0.00, Nb: 0.00, Pb: 0.00, B: 0.00 }, recoveryRate: 0.80 },
    { name: "Low Al FeSi", composition: { C: 0.06, Mn: 0.00, S: 0.00, P: 0.00, Si: 98.50, Al: 0.60, Cu: 0.00, Ca: 0.00, Ni: 0.00, Cr: 0.00, Mo: 0.00, Ti: 0.00, V: 0.00, Nb: 0.00, Pb: 0.00, B: 0.00 }, recoveryRate: 0.75 },
    { name: "HC FeMn", composition: { C: 7.00, Mn: 70.00, S: 0.35, P: 0.35, Si: 1.25, Al: 0.00, Cu: 0.00, Ca: 0.00, Ni: 0.00, Cr: 0.00, Mo: 0.00, Ti: 0.00, V: 0.00, Nb: 0.00, Pb: 0.00, B: 0.00 }, recoveryRate: 0.90 },
    { name: "LC FeMn", composition: { C: 0.18, Mn: 75.00, S: 0.05, P: 0.05, Si: 0.20, Al: 0.00, Cu: 0.00, Ca: 0.00, Ni: 0.00, Cr: 0.00, Mo: 0.00, Ti: 0.00, V: 0.00, Nb: 0.00, Pb: 0.00, B: 0.00 }, recoveryRate: 0.92 },
    { name: "Mn Metal", composition: { C: 0.04, Mn: 99.00, S: 0.00, P: 0.00, Si: 0.05, Al: 0.00, Cu: 0.00, Ca: 0.00, Ni: 0.00, Cr: 0.00, Mo: 0.00, Ti: 0.00, V: 0.00, Nb: 0.00, Pb: 0.00, B: 0.00 }, recoveryRate: 0.94 },
    { name: "Al Ingot", composition: { C: 0.00, Mn: 0.00, S: 0.00, P: 0.00, Si: 0.00, Al: 99.70, Cu: 0.00, Ca: 0.00, Ni: 0.00, Cr: 0.00, Mo: 0.00, Ti: 0.00, V: 0.00, Nb: 0.00, Pb: 0.00, B: 0.00 }, recoveryRate: 0.99 },
    { name: "HC FeCr", composition: { C: 8.00, Mn: 0.00, S: 0.02, P: 0.04, Si: 3.50, Al: 0.00, Cu: 0.00, Ca: 0.00, Ni: 0.00, Cr: 60.00, Mo: 0.00, Ti: 0.00, V: 0.03, Nb: 0.00, Pb: 0.00, B: 0.00 }, recoveryRate: 0.88 },
    { name: "LC FeCr", composition: { C: 0.10, Mn: 0.00, S: 0.02, P: 0.03, Si: 2.00, Al: 0.00, Cu: 0.00, Ca: 0.00, Ni: 0.00, Cr: 65.00, Mo: 0.00, Ti: 0.00, V: 0.00, Nb: 0.00, Pb: 0.00, B: 0.00 }, recoveryRate: 0.92 },
    { name: "FeV", composition: { C: 0.20, Mn: 0.00, S: 0.01, P: 0.01, Si: 1.50, Al: 0.00, Cu: 0.00, Ca: 0.00, Ni: 0.00, Cr: 0.00, Mo: 0.00, Ti: 0.00, V: 80.00, Nb: 0.00, Pb: 0.00, B: 0.00 }, recoveryRate: 0.87 },
    { name: "FeB", composition: { C: 0.10, Mn: 0.00, S: 0.00, P: 0.01, Si: 0.50, Al: 0.00, Cu: 0.00, Ca: 0.00, Ni: 0.00, Cr: 0.00, Mo: 0.00, Ti: 0.00, V: 0.00, Nb: 0.00, Pb: 0.00, B: 65.00 }, recoveryRate: 0.70 },
    
    // Add more alloys as needed
    
  ];
  
  export default alloyPercentages;
  