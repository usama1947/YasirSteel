export const currentYear = new Date().getFullYear();

export const companyFacts = [
  { label: 'Company', value: 'M. Yaser & Partners Steel Factory Co. Ltd' },
  { label: 'Trade name', value: 'Yasir Steel' },
  { label: 'Location', value: 'Al Wadi, Jeddah, Kingdom of Saudi Arabia' },
  { label: 'Core standards', value: 'ASTM A36, ASTM A615 Gr 60, BS 4449' },
];

export const leadership = {
  name: 'Mr. Yaser Muhammad Yasin',
  title: 'Chief Executive Officer',
  quote:
    'We started this factory to make steel that builders can trust the first time. Every bar that leaves our floor is rolled, cut, and checked against the standard the project was specified to - A36, A615, BS 4449. That promise is the whole company.',
};

export const missionVision = [
  {
    label: 'Mission',
    title: "To roll Saudi Arabia's everyday steel - to spec, on time, every load.",
    text:
      'We exist to put dependable structural and reinforcement steel into the hands of contractors, fabricators, and merchants across the Kingdom - manufactured to A36, ASTM A615 Grade 60, and BS 4449, shipped in the lengths and tonnages our customers need.',
  },
  {
    label: 'Vision',
    title: 'A reference Saudi mill - the name a project specifies before it tenders.',
    text:
      'To become the steel manufacturer that Saudi consultants and contractors specify by name - known for tight dimensional control, full mill certification, and a six-line catalog that covers the day-to-day work of the construction sector.',
  },
];

export const capabilityCards = [
  { label: 'Round bars (A615)', value: '8-25 mm' },
  { label: 'Square bars (A36)', value: '9.5-20 mm' },
  { label: 'Flat bar widths (A36)', value: '16-50 mm' },
  { label: 'Steel angles (A36)', value: '20x20 - 40x40 mm' },
  { label: 'Mesh sheets (BS 4449)', value: '1.5-2.4 m x 4-6 m' },
  { label: 'Rebar length (A615)', value: '12 m standard' },
];

export const registrations = [
  {
    title: 'Commercial Registration',
    authority: 'Ministry of Commerce',
    id: 'CR 4030163751',
    detail: 'Issued 02/09/2006 - Active',
    href: './resources/CrCertificate (1).pdf',
  },
  {
    title: 'VAT Registration',
    authority: 'ZATCA',
    id: 'VAT 300120296100003',
    detail: 'Effective 01/01/2018 - Quarterly',
    href: './resources/VAT Reg. 2023.pdf',
  },
  {
    title: 'National Address',
    authority: 'Saudi Post',
    id: 'JMWB 2941 · 22518',
    detail: 'Abi Al Abbas Al Yamani Street, Al Wadi, Jeddah',
  },
];

export const productLines = [
  {
    name: 'Round Bars',
    spec: '8-25 mm',
    description:
      'High-quality round bar for construction and industrial work. Standard length 6.0 m, rolled to ASTM A36 and ASTM A615 Gr 60.',
    image: '/resources/roundbars.png',
  },
  {
    name: 'Square Bars',
    spec: '9.5-20 mm',
    description:
      'Precision-rolled square sections for gates, grilles, frames, and fabrication blanks. Standard length 6.0 m to ASTM A36.',
    image: '/resources/mild-steel-square-bar-500x500.webp',
  },
  {
    name: 'Flat Bars',
    spec: '16-50 mm width',
    description:
      'Flat bars for fabrication, brackets, and plates. Thickness 4.5-10 mm, standard length 6.0 m to ASTM A36.',
    image: '/resources/flat-bar.webp',
  },
  {
    name: 'Steel Angles',
    spec: '20x20 - 40x40 mm',
    description:
      'Equal-leg L-sections for structural support and framing. Thickness 2.1-4.0 mm to ASTM A36.',
    image: '/resources/angles.webp',
  },
  {
    name: 'Welded Wire Mesh',
    spec: '5-12 mm wire',
    description:
      'Automatic pneumatic mesh welding to BS 4449. Sheet sizes 1.5-2.4 m width by 4-6 m length.',
    image: '/resources/weilded-wire-mesh.jpg',
  },
  {
    name: 'Deformed Rebar',
    spec: '10-14 mm',
    description:
      'Hot-rolled deformed reinforcement bars, standard 12 m length to ASTM A615 Gr 60.',
    image: '/resources/Deformed-Rebar-Steel-HRB400-HRB500-8mm-10mm-12mm-14mm-16mm.avif',
  },
];

export const valueCards = [
  { number: '01', title: 'Built to standard.', text: 'Every bar, sheet, and section is rolled and tested against a written specification - A36, A615, or BS 4449. No grey-area shipments.' },
  { number: '02', title: 'Honest tonnage.', text: 'Cut lengths, sheet counts, and weights match the bill of lading - measured at the mill, declared on the certificate.' },
  { number: '03', title: 'Safe by design.', text: 'Production lines, lifting, and dispatch run on documented procedures because nothing leaves the yard if a person is at risk.' },
  { number: '04', title: 'Local accountability.', text: 'Saudi-manufactured, Saudi-shipped - with a phone number on every invoice and a person at the other end of it.' },
];

export const facilityCards = [
  {
    title: 'Structural rolling facility',
    text: 'Round, square, flat, and angle sections are produced on controlled rolling equipment with consistent dimensional checks. Operated from our main site.',
  },
  {
    title: 'LZ-9 cold rolling line',
    text: '9-pass cold-rolling line producing 8 mm x 6 m and 10 mm x 12 m feedstock coils for mesh and rebar lines.',
  },
  {
    title: 'KY-2500R-Q mesh welder',
    text: 'Pneumatic mesh welding line producing 2.4 m wide sheets, 4-6 m lengths, and 5-12 mm wire diameters to BS 4449.',
  },
  {
    title: 'Stockyard and dispatch',
    text: 'Bundling, certification, and ready-to-ship stock management for fast release of mill-certified orders.',
  },
];

export const standards = [
  { code: 'ASTM A36', title: 'Structural carbon steel', text: 'Applies to round bars, square bars, flat bars, and steel angles.' },
  { code: 'ASTM A615 Gr 60', title: 'Reinforcement steel', text: 'Applies to round bars and deformed rebar, minimum 60 ksi yield.' },
  { code: 'BS 4449 / BS 483', title: 'Mesh standards', text: 'Applies to welded wire mesh and reference mesh series sizing.' },
];

export const qualityPolicy = [
  'Roll only against A36, ASTM A615 Gr 60, or BS 4449. No near-spec output ships.',
  'Tensile, yield, and bend tests run per heat - sampled and recorded.',
  'Diameter, thickness, and length checked at the mill before bundling.',
  'Mill certificate accompanies every dispatch, traceable to heat number.',
  'Customer non-conformities reviewed by management; corrective actions logged.',
];

export const hsePolicy = [
  'PPE is non-negotiable for every shift and every visitor.',
  'Operators run equipment only after documented training sign-off.',
  'Lifts follow rated capacity, certified slings, and cleared travel paths.',
  'Every incident and near-miss is logged, root-caused, and closed.',
  'Any worker can stop a line if they see an unsafe condition.',
  'Operations follow KSA labor and occupational safety regulations.',
];

export const environmentPolicy = [
  'Mill scrap, off-cuts, and reject coils are recovered for re-melt.',
  'Lines run at production load to reduce kWh per tonne.',
  'Emissions remain within KSA environmental regulations for industrial facilities.',
  'Cooling water is contained, treated, and reused in closed circuits.',
];

export const processSteps = [
  { step: '01', title: 'Order review', text: 'Customer requirements, dimensions, and standards are checked before production begins.' },
  { step: '02', title: 'Rolling and forming', text: 'Material is rolled, cut, bent, or welded to the target profile under line supervision.' },
  { step: '03', title: 'Inspection and test', text: 'Dimensional and mechanical checks confirm the product matches its declared specification.' },
  { step: '04', title: 'Bundling and dispatch', text: 'Certified material is bundled, documented, and released for local or regional delivery.' },
];

export const sectors = [
  'Commercial and residential construction',
  'Infrastructure and civil works',
  'Reinforcement contractors',
  'Steel fabricators and workshops',
  'Industrial and logistics projects',
  'Merchants and stockists',
];

export const whatsappLink = 'https://wa.me/966591128495?text=Hello%20YasirSteel,%20I%20have%20a%20query%20about%20your%20products';