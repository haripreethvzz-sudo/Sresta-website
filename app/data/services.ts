export interface ServiceStep {
  step: string;
  title: string;
  description: string;
  badge: string;
}

export interface MechanismItem {
  title: string;
  description: string;
  physics: string;
}

export interface ServiceDetail {
  slug: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  fullDescription: string;
  keyMetric: string;
  standards: string;
  standardsList: { code: string; title: string }[];
  equipmentUsed: string[];
  howItWorks: ServiceStep[];
  mechanisms: MechanismItem[];
  specs: { label: string; value: string }[];
  iconType: "transformer" | "relay" | "cable" | "motor" | "generator" | "equipment";
}

export const servicesData: ServiceDetail[] = [
  {
    slug: "transformer-testing",
    number: "01",
    title: "Transformer Testing",
    category: "High Voltage Substation",
    summary:
      "Comprehensive diagnostic assessment and condition testing for power and distribution transformers to ensure safe, dependable electrical performance.",
    fullDescription:
      "Power transformers are the critical backbone of industrial electrical networks. SRESTA delivers certified on-site diagnostic testing, dielectric health verification, SFRA structural integrity checks, and Dissolved Gas Analysis (DGA) to detect incipient faults before catastrophic failure.",
    keyMetric: "Up to 400kV Class",
    standards: "IEEE C57.12 • IEC 60076",
    standardsList: [
      { code: "IEC 60076", title: "Power Transformers Diagnostic & Performance Standard" },
      { code: "IEEE C57.12.90", title: "Standard Test Code for Liquid-Immersed Power Transformers" },
      { code: "IS 2026", title: "Indian Standard Specification for Power Transformers" },
      { code: "IEEE C57.104", title: "Guide for the Interpretation of Gases Generated in Oil-Immersed Transformers" },
    ],
    equipmentUsed: [
      "Automated 12kV Tan Delta & Capacitance Bridge",
      "Sweep Frequency Response Analyzer (SFRA)",
      "High-Accuracy Turns Ratio (TTR) Test Set",
      "Winding Resistance & Demagnetization Meter",
      "Dissolved Gas Chromatography & Moisture Kit",
    ],
    howItWorks: [
      {
        step: "01",
        title: "On-Site Physical & Visual Assessment",
        description:
          "Comprehensive inspection of transformer tank, bushing terminals, silica gel breathers, conservator oil levels, grounding links, and pressure relief devices.",
        badge: "Visual & Isolation Check",
      },
      {
        step: "02",
        title: "Dielectric & Insulation Diagnostics",
        description:
          "High-precision 10kV/12kV dissipation factor (Tan Delta) testing on primary/secondary windings and condenser bushings, paired with Insulation Resistance (IR & PI).",
        badge: "Dielectric Screening",
      },
      {
        step: "03",
        title: "Magnetic & Structural Frequency Analysis",
        description:
          "Execution of SFRA (Sweep Frequency Response Analysis) to detect mechanical winding deformation, axial displacement, core grounding faults, and magnetic balance checks.",
        badge: "Core & Winding Physics",
      },
      {
        step: "04",
        title: "Compliance Certification & Action Plan",
        description:
          "Detailed engineering report complete with trend graphs, DGA Duval Triangle interpretation, remaining life estimation, and prioritized maintenance recommendations.",
        badge: "Certified Engineering Report",
      },
    ],
    mechanisms: [
      {
        title: "Dielectric Insulation Degradation",
        description:
          "Measurement of dissipation factor (Tan δ) to evaluate moisture ingress, thermal aging, and cellulose paper breakdown between winding turns and grounded core.",
        physics: "Capacitance (C) & Loss Angle (tan δ) at 50Hz/variable frequency",
      },
      {
        title: "Mechanical Winding Deformation",
        description:
          "High-frequency sub-band transfer function scanning to pinpoint physical radial buckling or axial shifting caused by external short-circuit electrodynamic forces.",
        physics: "Sub-band resonance transfer function (20Hz – 2MHz)",
      },
      {
        title: "Incipient Thermal & Arcing Faults",
        description:
          "Detection of hydrogen (H₂), methane (CH₄), ethylene (C₂H₄), and acetylene (C₂H₂) ppm concentrations to identify localized hot spots or partial discharge under load.",
        physics: "Photoacoustic Spectroscopy & Gas Chromatography",
      },
      {
        title: "Magnetic Core Grounding & Balance",
        description:
          "Verification of single-point intentional core grounding to prevent circular eddy currents, magnetic flux leakage, and localized tank overheating.",
        physics: "Core-to-Ground IR & Low-Voltage Magnetic Balance",
      },
    ],
    specs: [
      { label: "Voltage Ratings Supported", value: "11kV / 33kV / 66kV / 132kV / 220kV / 400kV" },
      { label: "MVA Capacity", value: "Distribution up to 500 MVA Power Transformers" },
      { label: "Insulation Test Range", value: "Up to 500 GΩ @ 5kV / 10kV DC" },
      { label: "Tan Delta Resolution", value: "1 × 10⁻⁵ Dissipation Factor Precision" },
      { label: "Turn Ratio Accuracy", value: "±0.05% across all tap changer steps" },
      { label: "Testing Standards", value: "IEC 60076, IEEE C57.12, IS 2026" },
    ],
    iconType: "transformer",
  },
  {
    slug: "relay-testing",
    number: "02",
    title: "Relay Testing",
    category: "Protection & Automation",
    summary:
      "Testing and verification of numerical, digital, and electromechanical protection relays and associated electrical protection schemes.",
    fullDescription:
      "Electrical protection relays act as the defensive intelligence of your power system. SRESTA performs automated secondary injection testing, dynamic pick-up/drop-off threshold verification, and microsecond trip timing checks across numerical and legacy protection schemes.",
    keyMetric: "Trip Time < 18ms Accuracy",
    standards: "IEC 60255 • IEEE C37.90",
    standardsList: [
      { code: "IEC 60255", title: "Measuring Relays and Protection Equipment Series" },
      { code: "IEEE C37.90", title: "Standard for Relays and Relay Systems Associated with Electric Power Apparatus" },
      { code: "IS 3231", title: "Specification for Electrical Relays for Power System Protection" },
      { code: "IEC 61850", title: "Communication Networks and Systems for Power Utility Automation" },
    ],
    equipmentUsed: [
      "Microprocessor 6-Phase Secondary Current/Voltage Injection Test Set",
      "Precision Microsecond Digital Timing Analyzer",
      "GOOSE / IEC 61850 Network Protocol Diagnostic Unit",
      "Current Transformer Secondary Saturation & Burden Test Kit",
    ],
    howItWorks: [
      {
        step: "01",
        title: "Scheme Verification & Configuration Review",
        description:
          "Inspection of relay wiring, trip coil circuit integrity, auxiliary DC power supplies, and verification of active protection setting parameters against study models.",
        badge: "Settings & Wiring Audit",
      },
      {
        step: "02",
        title: "Automated Secondary Current & Voltage Injection",
        description:
          "Application of multi-phase current and voltage vectors using automated 6-phase test sets to verify pick-up thresholds, drop-off ratios, and directional characteristics.",
        badge: "Vector Injection",
      },
      {
        step: "03",
        title: "Dynamic Trip Timing & Differential Plotting",
        description:
          "High-speed timing verification of IDMT curve characteristics, instantaneous trip stages (<20ms), differential slope restraint boundaries, and distance impedance zones.",
        badge: "Timing & Zone Plotting",
      },
      {
        step: "04",
        title: "End-to-End Breaker Trip & Logic Verification",
        description:
          "Live or dry-contact tripping of master trip relays (86), lockouts, and circuit breaker trip coils to guarantee physical fault clearing in field conditions.",
        badge: "Trip Clearing Validation",
      },
    ],
    mechanisms: [
      {
        title: "Overcurrent & Earth Fault Discrimination (50/51/51N)",
        description:
          "Verifying IDMT curve operating times across multiple fault current multipliers to ensure correct cascading coordination without upstream feeder trips.",
        physics: "Inverse-Time Curve Verification: t = k / ((I/Is)α - 1)",
      },
      {
        title: "Differential Slope & Harmonic Restraint (87T / 87G)",
        description:
          "Testing percentage bias slopes and 2nd/5th harmonic restraint algorithms to avoid nuisance tripping during transformer inrush or CT saturation events.",
        physics: "Differential Vector Current vs. Restraining Current (Id / Ir)",
      },
      {
        title: "Distance Protection Mho / Quad Impedance Zones (21)",
        description:
          "Plotting R-X impedance reach boundaries, SIR ratios, and directional blinder characteristics for high-voltage transmission lines.",
        physics: "Apparent Impedance Measurement (Z = V / I in R-X Plane)",
      },
      {
        title: "Trip Circuit Supervision (TCS 95)",
        description:
          "Ensuring continuous electrical continuity of the trip coil circuit both in breaker open and closed states to eliminate silent failure risks.",
        physics: "Supervised Low-Current DC Continuity Monitoring",
      },
    ],
    specs: [
      { label: "Relay Types Supported", value: "Numerical (ABB, Siemens, Schneider, GE, Alstom), Static, Electromechanical" },
      { label: "Injection Capabilities", value: "6 × 32A Current / 4 × 300V Voltage Channels" },
      { label: "Timing Resolution", value: "0.1 millisecond precision (< 100 µs)" },
      { label: "Protection Functions", value: "50, 51, 51N, 87, 21, 27, 59, 81O/U, 67, 49, 46, 59N" },
      { label: "Communication Protocols", value: "IEC 61850 GOOSE, Modbus, IEC 60870-5-103" },
      { label: "Standards Compliance", value: "IEC 60255, IEEE C37.90, IS 3231" },
    ],
    iconType: "relay",
  },
  {
    slug: "cable-testing",
    number: "03",
    title: "Cable Testing",
    category: "Transmission & Distribution",
    summary:
      "Inspection and electrical testing of cable systems to support operational reliability, insulation condition review, and fault prevention.",
    fullDescription:
      "Underground and tray-routed power cables face thermal aging, water treeing, and mechanical stress. SRESTA utilizes non-destructive 0.1Hz VLF Hi-Pot withstand, VLF Tan Delta profiling, and on-line Partial Discharge (PD) diagnostic methods to assess remaining cable life without causing insulation damage.",
    keyMetric: "Up to 66kV XLPE / PILC",
    standards: "IEEE 400.2 • IEC 60502",
    standardsList: [
      { code: "IEEE 400.2", title: "Guide for Field Testing of Shielded Power Cable Systems Using VLF" },
      { code: "IEC 60502-2", title: "Power Cables with Extruded Insulation (6 kV up to 30 kV)" },
      { code: "IEEE 400.3", title: "Guide for PD Testing of Shielded Power Cable Systems in the Field" },
      { code: "IS 7098", title: "Indian Standard for Crosslinked Polyethylene Insulated Cables" },
    ],
    equipmentUsed: [
      "0.1Hz Very Low Frequency (VLF) High-Voltage Sinusoidal Generator",
      "VLF Dielectric Dissipation Factor (Tan Delta) Test Set",
      "High-Frequency Partial Discharge (PD) Sensor & Calibrator",
      "Automated High-Voltage Cable Fault Locator & TDR Surge Generator",
      "10kV Digital Insulation Resistance & Polarization Index Tester",
    ],
    howItWorks: [
      {
        step: "01",
        title: "Pre-Test Insulation Resistance & Continuity",
        description:
          "Verification of phase-to-phase and phase-to-ground insulation resistance (IR) up to 10kV DC, alongside cable shield continuity and sheath integrity checks.",
        badge: "Initial Screening",
      },
      {
        step: "02",
        title: "VLF High-Potential Voltage Withstand",
        description:
          "Application of controlled 0.1Hz sinusoidal test voltage at up to 3× rated voltage for specified duration to verify withstand capability without destructive DC space-charge trapping.",
        badge: "VLF Hi-Pot",
      },
      {
        step: "03",
        title: "VLF Tan Delta & Dielectric Aging Profiling",
        description:
          "Precision measurement of Tan δ stability, voltage step differential (Delta Tan δ), and dielectric loss history to categorize water treeing and thermal degradation.",
        badge: "Tan Delta Profiling",
      },
      {
        step: "04",
        title: "Partial Discharge (PD) Localization & Report",
        description:
          "Detection and mapping of localized void discharge pulses along the cable length using Time Domain Reflectometry (TDR) for pinpointed joint/termination remediation.",
        badge: "PD Mapping & Health Report",
      },
    ],
    mechanisms: [
      {
        title: "Water Treeing in Cross-Linked Polyethylene (XLPE)",
        description:
          "Microscopic tree-like moisture channels formed in the insulation under high electrical stress, diagnosed accurately through VLF Tan Delta step-voltage profiling.",
        physics: "Loss Angle increase as a function of electric field stress (E-field)",
      },
      {
        title: "Localized Void Partial Discharge",
        description:
          "Ionization and electrical discharges occurring inside air/gas cavities within cable joints, stress cones, or terminations, quantified in picocoulombs (pC).",
        physics: "Apparent charge discharge Q (pC) & phase-resolved PD (PRPD) patterns",
      },
      {
        title: "Outer Sheath & Screen Corrosion",
        description:
          "DC sheath voltage testing to identify mechanical punctures, moisture ingress, and circulating screen currents that cause localized cable overheating.",
        physics: "Sheath-to-Earth 5kV DC withstand (1 min) per IEC 60229",
      },
      {
        title: "Conductor Resistance & Phase Balance",
        description:
          "Micro-ohm resistance measurement across cable joints and terminations to prevent thermal runaway and hot-spot failure under high load.",
        physics: "Four-wire Kelvin DC resistance measurement",
      },
    ],
    specs: [
      { label: "Voltage Class Tested", value: "3.3kV / 6.6kV / 11kV / 22kV / 33kV / 66kV" },
      { label: "Cable Types", value: "XLPE, EPR, PILC (Paper-Insulated Lead-Covered)" },
      { label: "VLF Test Frequency", value: "0.1 Hz / 0.05 Hz / 0.02 Hz Sinusoidal" },
      { label: "PD Sensitivity", value: "< 5 pC (Picocoulombs) detection threshold" },
      { label: "Tan Delta Accuracy", value: "±1 × 10⁻⁴ (0.1 mrad resolution)" },
      { label: "Governing Standards", value: "IEEE 400.2, IEC 60502, IS 7098" },
    ],
    iconType: "cable",
  },
  {
    slug: "motor-testing",
    number: "04",
    title: "Motor Testing",
    category: "Rotating Electrical Assets",
    summary:
      "Technical evaluation of electrical motors for service readiness, performance, insulation integrity, and condition assessment.",
    fullDescription:
      "High-voltage and low-voltage industrial motors are subject to harsh operational cycles, thermal stresses, and mechanical vibration. SRESTA conducts non-destructive static insulation diagnostics, surge comparison profiling, dynamic FFT vibration analysis, and rotor bar integrity evaluation.",
    keyMetric: "HT / LT Industrial Motors",
    standards: "NEMA MG-1 • IEEE 43 / 522",
    standardsList: [
      { code: "IEEE 43", title: "Recommended Practice for Testing Insulation Resistance of Electric Machinery" },
      { code: "IEEE 522", title: "Guide for Testing Turn-to-Turn Insulation on Form-Wound Stator Coils" },
      { code: "NEMA MG-1", title: "Motors and Generators Standard" },
      { code: "ISO 10816", title: "Mechanical Vibration Evaluation of Machine Vibration" },
    ],
    equipmentUsed: [
      "High-Voltage Surge Comparison & Turn-to-Turn Impulse Tester",
      "Precision Digital Micro-Ohmmeter with Temperature Compensation",
      "Multi-Channel FFT Vibration & Bearing Frequency Analyzer",
      "10kV DC Automated Polarization Index & Step Voltage Test Set",
    ],
    howItWorks: [
      {
        step: "01",
        title: "Cold Inspection & Resistance Balancing",
        description:
          "Four-wire micro-ohm measurement across all 3 stator phases with temperature compensation to detect high-resistance joints, brazing defects, or unbalances.",
        badge: "Winding Balancing",
      },
      {
        step: "02",
        title: "High-Potential & Insulation Resistance Profiling",
        description:
          "Application of DC test voltage to evaluate Insulation Resistance (IR), Polarization Index (PI = R10min / R1min), and Dielectric Absorption Ratio (DAR).",
        badge: "Insulation Health (PI)",
      },
      {
        step: "03",
        title: "High-Voltage Surge Comparison Testing",
        description:
          "Fast-rise impulse voltage pulses injected into matched phase pairs to identify early inter-turn insulation weakness, weak slot liners, or ground shorts.",
        badge: "Surge Impulse Scan",
      },
      {
        step: "04",
        title: "Dynamic Vibration & Mechanical Health Auditing",
        description:
          "Spectral FFT vibration monitoring to detect unbalance, misalignment, mechanical looseness, bearing race defects, and rotor bar anomalies.",
        badge: "FFT Vibration Spectrum",
      },
    ],
    mechanisms: [
      {
        title: "Turn-to-Turn Insulation Breakdown",
        description:
          "Surge comparison tests induce high differential voltage between adjacent turns to detect dielectric weakness before it turns into a phase-to-ground burnout.",
        physics: "High-frequency damped resonance waveform comparison (Error Area Ratio)",
      },
      {
        title: "Winding Contamination & Moisture Ingress",
        description:
          "Polarization Index (PI) profiling assesses leakage currents through the bulk insulation and along coil surface end-turns.",
        physics: "Dielectric absorption ratio: PI = R₁₀ / R₁ (Threshold > 2.0)",
      },
      {
        title: "Broken Rotor Bars & End-Ring Cracks",
        description:
          "Motor Current Signature Analysis (MCSA) and vibration spectrum checks for sideband frequencies around the fundamental supply frequency.",
        physics: "Sideband current peaks at f_sb = f_L (1 ± 2s)",
      },
      {
        title: "Bearing Fatigue & Lubrication Failure",
        description:
          "High-frequency acceleration peak demodulation (Shock Pulse / Crest Factor) pinpointing outer race (BPFO) and inner race (BPFI) bearing degradation.",
        physics: "Spectral peak analysis matching bearing geometric frequencies",
      },
    ],
    specs: [
      { label: "Motor Capacities", value: "Fractional HP up to 10+ MW High-Voltage Motors" },
      { label: "Voltage Ratings", value: "415V, 3.3kV, 6.6kV, 11kV Induction & Synchronous" },
      { label: "Surge Voltage Range", value: "Up to 15kV fast-rise impulse waveforms" },
      { label: "Vibration Channels", value: "Tri-axial accelerometer (0.5 Hz – 20 kHz)" },
      { label: "Resistance Resolution", value: "0.1 µΩ (Micro-ohm) precision" },
      { label: "Applicable Standards", value: "IEEE 43, IEEE 522, NEMA MG-1, ISO 10816" },
    ],
    iconType: "motor",
  },
  {
    slug: "generator-testing",
    number: "05",
    title: "Generator Testing",
    category: "Power Generation Units",
    summary:
      "Testing and assessment of generators, exciters, and associated power system components for dependable, synchronous operation.",
    fullDescription:
      "Generators and turbine alternators operate under intense thermal, centrifugal, and electromagnetic stresses. SRESTA delivers comprehensive condition assessment spanning stator core flux testing (ELCID), rotor winding impedance profiling, exciter response checks, and dielectric dissipation testing.",
    keyMetric: "Captive & Utility Gensets",
    standards: "IEC 60034 • IEEE 115",
    standardsList: [
      { code: "IEC 60034-1", title: "Rotating Electrical Machines - Rating and Performance" },
      { code: "IEEE 115", title: "Guide for Test Procedures for Synchronous Machines" },
      { code: "IEEE 56", title: "Guide for Insulation Maintenance of Large Alternating-Current Machines" },
      { code: "IS 4722", title: "Indian Standard for Rotating Electrical Machines" },
    ],
    equipmentUsed: [
      "Electromagnetic Core Imperfection Detector (ELCID) Test System",
      "Precision AC/DC Rotor Impedance & Pole Drop Test Kit",
      "Digital Insulation Resistance & Tan Delta Test Set",
      "Brushless Excitation Diode Wheel Diagnostic Set",
      "Dynamic Reciprocating / Turbo Vibration Analysis System",
    ],
    howItWorks: [
      {
        step: "01",
        title: "Stator Core Imperfection Scanning (ELCID)",
        description:
          "Low-flux excitation of the generator stator core to identify interlaminar insulation breakdown and prevent destructive core melting hot spots.",
        badge: "ELCID Core Scan",
      },
      {
        step: "02",
        title: "Rotor Winding & Pole Drop Testing",
        description:
          "AC impedance measurement and pole-by-pole voltage drop verification at various rotor positions to locate shorted turns caused by centrifugal copper distortion.",
        badge: "Rotor Pole Drop",
      },
      {
        step: "03",
        title: "High-Voltage Stator Dielectric Testing",
        description:
          "Measurement of dissipation factor (Tan δ) and tip-up to detect slot partial discharge, end-winding corona, and resin-rich insulation aging.",
        badge: "Stator Tan Delta",
      },
      {
        step: "04",
        title: "Excitation System & Synchronous Performance Audit",
        description:
          "Inspection of rotating diode bridges, automatic voltage regulator (AVR) step response, field discharge breakers, and protection synchronization checks.",
        badge: "Excitation Audit",
      },
    ],
    mechanisms: [
      {
        title: "Stator Core Interlaminar Short Circuits",
        description:
          "Damaged lamination varnish induces high circulating eddy currents, leading to localized thermal hot spots that can melt stator iron in minutes.",
        physics: "Chattock potentiometer detection of quadrature fault currents (>100mA)",
      },
      {
        title: "Rotor Shorted Turns Under Centrifugal Load",
        description:
          "Centrifugal force at 3000/3600 RPM compresses rotor turn insulation; AC impedance and pole drop testing identify turn-to-turn shorts.",
        physics: "AC impedance (Z = V / I) and phase angle drop per pole",
      },
      {
        title: "Slot Partial Discharge & End-Winding Corona",
        description:
          "High electrical field gradients in stator slots erode semi-conductive slot paint, creating ozone and causing white corona powdering.",
        physics: "Tan Delta Tip-Up (Δ tan δ = tan δ_rated - tan δ_0.2Un)",
      },
      {
        title: "Shaft Voltage & Bearing Current Erosion",
        description:
          "Residual magnetic asymmetry and static charging generate shaft voltages that discharge through oil film, pitting bearing babbitt surfaces.",
        physics: "Shaft grounding brush voltage monitoring (< 200mV RMS threshold)",
      },
    ],
    specs: [
      { label: "Machine Types", value: "Turbo-Generators, Hydro Alternators, Diesel Gensets" },
      { label: "Power Ratings", value: "500 kVA to 500+ MW Utility Alternators" },
      { label: "Stator Voltage Range", value: "3.3kV / 6.6kV / 11kV / 15.75kV / 21kV" },
      { label: "Core Test Flux Level", value: "4% nominal flux (Safe, Low-Energy ELCID)" },
      { label: "Excitation Systems", value: "Static Excitation & Brushless PMG Systems" },
      { label: "Standards", value: "IEC 60034, IEEE 115, IEEE 56, IS 4722" },
    ],
    iconType: "generator",
  },
  {
    slug: "electrical-equipment-testing",
    number: "06",
    title: "Electrical Equipment Testing",
    category: "Switchgear & Substation",
    summary:
      "Support for a wide range of electrical equipment and installations across industrial and commercial environments.",
    fullDescription:
      "Substations rely on the synchronized operation of circuit breakers, instrument transformers (CT/PT), surge arresters, and busbars. SRESTA delivers comprehensive multi-parameter testing to ensure arc-extinguishing capability, timing synchronization, and precision metering accuracy.",
    keyMetric: "GIS & AIS Substation Ready",
    standards: "IEC 62271 • ANSI C37",
    standardsList: [
      { code: "IEC 62271-100", title: "High-Voltage Switchgear and Controlgear - Circuit-Breakers" },
      { code: "IEC 61869", title: "Instrument Transformers - Current & Inductive Voltage Transformers" },
      { code: "IEC 60099-4", title: "Surge Arresters - Metal-Oxide Surge Arresters without Gaps" },
      { code: "IS 13118", title: "Specification for High-Voltage AC Circuit Breakers" },
    ],
    equipmentUsed: [
      "Dynamic Circuit Breaker Timing & Motion Analyzer",
      "Micro-Ohm Contact Resistance (CRM) Tester (100A/200A DC)",
      "Automated CT/PT Ratio, Excitation Knee-Point & Polarity Test Set",
      "High-Resolution Infrared Thermographic Camera (FLIR calibrated)",
      "SF6 Gas Moisture, Dew Point & Purity Diagnostic Kit",
    ],
    howItWorks: [
      {
        step: "01",
        title: "Circuit Breaker Dynamic Timing & Contact Resistance",
        description:
          "Millisecond timing analysis of close, open, and close-open (C-O) cycles across all poles, paired with micro-ohm static contact resistance (CRM) measurements.",
        badge: "Breaker Timing & CRM",
      },
      {
        step: "02",
        title: "Instrument Transformer (CT / PT) Testing",
        description:
          "Verification of CT excitation knee-point voltage, secondary winding resistance, turns ratio error, polarity, and composite error per accuracy class.",
        badge: "CT/PT Accuracy & Burden",
      },
      {
        step: "03",
        title: "Surge Arrester & Insulation Leakage Checks",
        description:
          "Measurement of total and resistive 3rd harmonic leakage current under operating voltage to detect moisture ingress and zinc-oxide (ZnO) block aging.",
        badge: "ZnO Arrester Health",
      },
      {
        step: "04",
        title: "Thermal Infrared & SF6 Gas Quality Auditing",
        description:
          "Thermographic scanning for high-resistance busbar joints and SF6 gas moisture/purity checks to prevent internal flashover and dielectric failure.",
        badge: "Thermography & SF6 Purity",
      },
    ],
    mechanisms: [
      {
        title: "Circuit Breaker Contact Wear & Pole Discrepancy",
        description:
          "Pole non-simultaneity during trip operations causes severe transient recovery voltage (TRV) and phase unbalance, diagnosed via microsecond timing.",
        physics: "Main & Arcing contact timing discrepancy (< 2.5ms threshold)",
      },
      {
        title: "Current Transformer (CT) Core Saturation",
        description:
          "Evaluating magnetic core knee-point voltage (Vk) to ensure protection relays receive faithful secondary currents during high short-circuit events.",
        physics: "Excitation V-I curve knee-point (10% voltage increase causes 50% current rise)",
      },
      {
        title: "SF6 Gas Decomposition & Moisture",
        description:
          "Electrical arcing breaks SF6 into toxic SO₂, HF, and SOF₂; moisture above 150 ppm creates corrosive hydrofluoric acid that attacks solid insulation.",
        physics: "Dew point measurement and electrochemical gas chromatography",
      },
      {
        title: "Busbar Joint Resistance & Thermal Hotspots",
        description:
          "Loose or oxidized bolted busbar joints create localized I²R heating, detected non-invasively via radiometric thermography under peak load.",
        physics: "Stefan-Boltzmann thermal radiation (E = ε σ T⁴)",
      },
    ],
    specs: [
      { label: "Switchgear Classes", value: "Air Insulated (AIS) & Gas Insulated (GIS) up to 400kV" },
      { label: "Breaker Types", value: "SF6 Gas, Vacuum (VCB), Oil (OCB), Air Blast" },
      { label: "Timing Channels", value: "6 Main Contact + 6 Auxiliary Contact Channels" },
      { label: "CRM Test Current", value: "100A / 200A true DC continuous injection" },
      { label: "CT Knee-Point Range", value: "Up to 4kV excitation voltage capability" },
      { label: "Governing Standards", value: "IEC 62271, IEC 61869, IEC 60099, IS 13118" },
    ],
    iconType: "equipment",
  },
];
