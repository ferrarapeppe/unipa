/* Site content — English version. Edit research areas, departments and clusters here. */

window.AREAS = [
  { icon: "i-bio", t: "Biodiversity and ecosystems", d: "Biodiversity monitoring and conservation, marine biology and ecology, ecosystem restoration, taxonomy and phylogenetics, GIS, environmental microbiology and biotechnology." },
  { icon: "i-clima", t: "Climate and resilience", d: "Climate impacts on marine, coastal and inland-water ecosystems, coastal erosion, hydrological processes, natural hazards and nature-based solutions." },
  { icon: "i-circ", t: "Circular economy", d: "Waste and wastewater treatment, soil and sediment remediation, recovery of secondary raw materials, green chemistry and Life Cycle Assessment." },
  { icon: "i-dna", t: "Health and precision medicine", d: "Molecular biology, genetics and epigenetics, microbiome, omics sciences, regenerative medicine, neuroscience, cancer research, liquid biopsy." },
  { icon: "i-onehealth", t: "One Health and healthy ageing", d: "Human, animal and environmental health, prevention, nutrition and Mediterranean lifestyles, infectious and neurodegenerative diseases." },
  { icon: "i-mat", t: "Materials and nanotechnology", d: "Innovative molecules and materials for pharmaceuticals, energy, environment, biomedicine and cultural heritage: nanomaterials, catalysts, drug delivery." },
  { icon: "i-energy", t: "Energy transition", d: "Renewables, smart grids and energy communities, sustainable mobility, storage, hydrogen, salinity gradient, advanced photovoltaics, fusion and fission." },
  { icon: "i-ai", t: "Digital and artificial intelligence", d: "Machine learning, computer vision, NLP, generative models, big data, federated learning, robotics, cybersecurity, IoT, digital twins, e‑health." },
  { icon: "i-infra", t: "Infrastructure and mobility", d: "Structural health monitoring, seismic resilience, innovative construction materials, sustainable transport, autonomous vehicles, critical infrastructure." },
  { icon: "i-space", t: "Mathematics, physics and space", d: "Mathematical modelling, numerical analysis, statistics, complex systems, quantum science and technology, photonics, astrophysics, space weather." },
  { icon: "i-soc", t: "Society, economics and governance", d: "Sustainable development, economic and financial resilience, public policy, inclusion, migration, inequalities, gender studies." },
  { icon: "i-heritage", t: "Heritage and humanities", d: "Archaeology, digitisation of cultural heritage, virtual archaeology, digital humanities, languages, memory and Mediterranean history." }
];

window.DEPTS = [
  {
    abbr: "STEBICEF", name: "Biological, Chemical and Pharmaceutical Sciences and Technologies",
    link: "https://www.unipa.it/dipartimenti/stebicef/",
    desc: "From physiology to medicinal chemistry, from marine biology to environmental technologies: a department that designs molecules, studies biological processes and adds value to resources.",
    kpi: [["2800+", "Publications"], ["160+", "Projects"], ["30+", "Patents"], ["3", "Spin‑offs"]],
    topics: [
      ["Molecules, materials and matrices", "New drugs and delivery systems, catalysts, green chemistry, natural products, supramolecular chemistry, materials for energy and analyses for cultural heritage."],
      ["Environment and valorisation", "Flora and fauna monitoring, biodiversity, blue economy, recovery of raw and secondary materials from waste, LCA."],
      ["Biological processes", "Cell culture, cancer, neuroscience, epigenetics, biomaterials, tissue engineering, omics, microbiome, bioinformatics, personalised medicine."],
      ["Pre‑clinical and clinical studies", "Biochemical assays, toxicity, antioxidant activity, in vitro, in vivo and ex vivo studies, animal models and human studies."]
    ]
  },
  {
    abbr: "DMI", name: "Mathematics and Computer Science",
    link: "https://www.unipa.it/dipartimenti/matematicaeinformatica/",
    desc: "48 faculty members carrying out multidisciplinary, and often interdisciplinary, research in mathematics and computer science.",
    kpi: [["48", "Faculty members"]],
    topics: [
      ["Pure mathematics", "Algebra, geometry, logic, mathematical analysis, polynomial identities, category theory."],
      ["Applied mathematics", "Mathematical physics, numerical analysis, dynamical systems, probability, fluid dynamics."],
      ["Computer science", "Algorithms and data structures, AI and machine learning, medical imaging, health informatics, computer vision, soft computing."],
      ["History and education", "History of mathematics, mathematics education and political economy."]
    ],
  },
  {
    abbr: "DiSTeM", name: "Earth and Marine Sciences",
    link: "https://www.unipa.it/dipartimenti/distem/",
    desc: "Fundamental and applied research into how the Earth’s biotic and abiotic compartments interact, with technology transfer to SMEs and public institutions.",
    topics: [
      ["Marine and terrestrial ecosystems", "Biodiversity and ecosystem functioning, fisheries and aquaculture, palaeoenvironments."],
      ["Natural risks and climate", "Monitoring of natural hazards and of the effects of climate change."],
      ["Geo‑resources", "Exploration, management and conservation of geological resources."],
      ["From organisms to health", "Biomarkers, molecules with biotechnological potential, antibiotic resistance and tissue regeneration, in a One Health perspective."]
    ]
  },
  {
    abbr: "DI", name: "Engineering",
    link: "https://www.unipa.it/dipartimenti/ingegneria/",
    desc: "Six research sections covering the full spectrum of engineering: from materials to energy, from AI to infrastructure.",
    topics: [
      ["Chemical, materials and hydraulic engineering", "Electrochemical devices, salinity‑gradient energy, metals from waste, water treatment, coastal erosion, NBS."],
      ["Structures and infrastructure", "Seismic strengthening with FRP/FRCM, structural health monitoring of bridges and historic buildings, sustainable mobility, 3D‑printed earthen materials."],
      ["Computer engineering", "AI for precision medicine, computer vision, cybersecurity and blockchain, federated learning, swarm and cognitive robotics."],
      ["Mechanics, management and aerospace", "Entrepreneurial science, digital transformation, aerospace and biomedical materials, digital manufacturing."],
      ["Electronics, physics, mathematics", "Autonomous driving, drones, e‑health, nanoelectronics, photovoltaics, 6G and THz networks, quantum technologies."],
      ["Energy", "Smart grids, small islands and energy communities, efficiency, heat pumps, fission and fusion reactors, radiation protection."]
    ]
  },
  {
    abbr: "DiFC", name: "Physics and Chemistry “Emilio Segrè”",
    link: "https://www.unipa.it/dipartimenti/difc/",
    desc: "Fundamental and applied research in physics and chemistry, from the infinitely small to the stars.",
    topics: [
      ["Experimental physics", "Condensed matter, biophysics, nuclear and particle physics, nanophysics, ultrafast physics, photonics, 2D materials."],
      ["Theoretical physics", "Quantum optics and electrodynamics, quantum thermodynamics, open quantum systems, quantum AI, dark matter and axions."],
      ["Astrophysics", "X‑ray and high‑energy astronomy, pulsars, supernova remnants, cosmic rays, exoplanets, solar physics, space weather, space missions."],
      ["Applied physics and chemistry", "Medical physics, radiation detectors, econophysics, complex networks; materials, quantum, computational and heritage chemistry."]
    ]
  },
  {
    abbr: "Bi.N.D.", name: "Biomedicine, Neuroscience and Advanced Diagnostics",
    link: "https://www.unipa.it/dipartimenti/bi.n.d./",
    desc: "Clinical and translational research, with active projects in precision medicine, diagnostics and prevention.",
    topics: [
      ["HEAL ITALIA", "National alliance for innovative therapies, advanced lab research and precision medicine."],
      ["Liver oncology", "Liquid biopsy and hepatocellular carcinoma; health inequities and social determinants of health in Sicily."],
      ["Neuro‑cognition", "Age‑related hearing loss and cognitive decline: from early diagnosis to tele‑rehabilitation."],
      ["Prevention and lifestyles", "DARE – digital lifelong prevention, INNOVA – advanced diagnostics, healthy long life in Mediterranean style."]
    ]
  },
  {
    abbr: "SEAS", name: "Economics, Business and Statistics",
    link: "https://www.unipa.it/dipartimenti/seas/",
    desc: "Quantitative models and data analysis to understand economies, territories and societies.",
    topics: [
      ["Financial sustainability", "Models for sovereigns, households and firms under climate, pandemic and social shocks; financial crises and fragility."],
      ["Networks and territories", "Network analysis of financial, social and biological systems; regional economics and competitiveness."],
      ["Advanced statistics", "Spatio‑temporal processes, sparse high‑dimensional inference, Bayesian statistics, graphical models."],
      ["Policy and institutions", "Health and climate economics, ageing, tourism, monetary policy and public spending."]
    ]
  },
  {
    abbr: "DEMS", name: "Political Sciences and International Relations",
    link: "https://www.unipa.it/dipartimenti/dems/",
    desc: "The common thread: the interactions between institutions – formal and informal – and their social context, across the ERC Social Sciences and Humanities domains.",
    topics: [
      ["Mediterranean and Europe", "Legal, religious and cultural transformations; the construction and crisis of European political systems."],
      ["Law and business", "Restorative justice and ADR, corporate liability, international taxation of multinationals."],
      ["Rights and inclusion", "Migration, multiculturalism, fundamental rights, gender diversity in organisations."],
      ["Sustainability and institutions", "Climate, energy, energy communities, smart cities, sustainability in the public and cultural sectors."]
    ]
  },
  {
    abbr: "SUM", name: "Humanities",
    link: "https://www.unipa.it/dipartimenti/scienzeumanistiche/",
    desc: "Philosophy, literature, languages and the arts as tools for reading the present.",
    topics: [
      ["Philosophy and critical theory", "Logic, metaphysics, phenomenology, ontology, public ethics, AI and ecological thinking, digital humanities."],
      ["Music and visual culture", "Musical traditions, ethnology, photography, video art, art history, theatre and film."],
      ["Languages and literatures", "Translation and cultural transfer, gender studies, migration, minority languages, Sicilian lexicon."],
      ["Memory and education", "Memory and war in literature, the legacy of the classics, linguistics, neurodidactics and Italian as a foreign language."]
    ]
  },
  {
    abbr: "CULTURE", name: "Cultures and Society",
    link: "https://www.unipa.it/dipartimenti/cultureesocieta/",
    desc: "Six sections and five ERC areas – from institutions to the human past – to study cultures and societies.",
    topics: [
      ["Cultural heritage", "Ritual symbolism and traditional food in the Euro‑Mediterranean area, landscape archaeology, virtual archaeology, digitisation."],
      ["Communication and semiotics", "AI, digital humanities, cultural memory, socio‑semiotics of gastronomy, media, design and urban spaces."],
      ["Society and politics", "Migration, governance, the Anthropocene, gender, inclusion, inter‑ethnic relations."],
      ["History and the ancient world", "Global crises, religious history, archives, deliberative democracy, ancient Greek medical texts, medieval Latin literature."]
    ]
  },
  {
    abbr: "SPPEFF", name: "Psychological, Pedagogical, Exercise and Training Sciences",
    link: "https://www.unipa.it/dipartimenti/sc.psicol.pedag.edellaformazione/",
    desc: "The study of human behaviour in continuous relationship with the ecological and biological contexts in which it takes place.",
    topics: [
      ["Health and well‑being", "Prevention across the life span, clinical psychology, organisational well‑being and work‑related stress."],
      ["Neuroscience and development", "Non‑invasive neuromodulation in neurodegenerative diseases, neurodevelopmental disorders, psychometrics."],
      ["Education", "University teaching, teacher education, educational technologies, quality of educational services."],
      ["Movement and society", "Adapted physical activity for all ages, migration, vulnerability of refugees and asylum seekers."]
    ]
  },
  {
    abbr: "DARCH", name: "Architecture",
    link: "https://www.unipa.it/dipartimenti/architettura/",
    desc: "Studies the physical environment and designs its transformation: architectural, urban and landscape design, territorial planning, diagnostics, restoration and conservation of architectural heritage.",
    kpi: [["84", "Faculty members"], ["44", "PhD students"]],
    topics: [
      ["Cultural heritage", "Restoration technologies and materials, nanotechnologies for heritage, archaeological parks, survey and digital reconstruction, cultural tourism."],
      ["Territorial development", "Mediterranean development strategies, environmental assessment and ecological networks, urban regeneration, participatory practices."],
      ["Architecture, city and landscape", "Design theory and methods, accessibility, mobility and public space, landscape systems, sustainable materials."],
      ["Design and visual communication", "Digital transformation of public space, exhibitions and installations, sustainable design with recycled materials."]
    ]
  },
  {
    abbr: "DiGi", name: "Law",
    link: "https://www.unipa.it/dipartimenti/di.gi./",
    desc: "Housed since 1779 in the historic Casa dei Padri Teatini on Via Maqueda. Recognised as a Department of Excellence by the Italian Ministry of University and Research for two consecutive cycles.",
    kpi: [["2018–22", "MUR Department of Excellence"], ["2023–27", "MUR Department of Excellence"]],
    topics: [
      ["Migration and rights", "Immigration and asylum law, international protection, integration; master’s degree taught in English “Migration, Rights, Integration”."],
      ["Human rights", "Evolution, protection and limits of human rights; protection of vulnerable people through the “Migration and Rights” Legal Clinic."],
      ["Legal pluralism", "Legal pluralism in ancient and contemporary perspectives, gender studies."],
      ["European and digital law", "Jean Monnet Chair in Comparative and European Digital Law; Jean Monnet Centre of Excellence EUMoSIT on illicit trafficking in the Mediterranean."]
    ]
  },
  {
    abbr: "Me.Pre.C.C.", name: "Precision Medicine in Medical, Surgical and Critical Care",
    link: "https://www.unipa.it/dipartimenti/me.pre.c.c./",
    desc: "Translational research in general and specialist surgery, dentistry, clinical and experimental oncology and regenerative medicine, in synergy with the “P. Giaccone” University Hospital.",
    kpi: [["3", "Research laboratories"]],
    topics: [
      ["Precision oncology", "Prognostic genomic biomarkers, omics sciences, breast and colorectal cancer, the role of adipose tissue in tumour progression."],
      ["Regenerative medicine", "Tissue healing, plastic and reconstructive surgery."],
      ["AI and digital health", "AI‑based diagnostic and decision support, telemedicine, ICT‑based laboratory networks."],
      ["Orthopaedic devices", "Bioactive devices for fracture treatment."]
    ]
  },
  {
    abbr: "ProMISE", name: "Health Promotion, Mother and Child Care, Internal Medicine and Medical Specialties “G. D’Alessandro”",
    link: "https://www.unipa.it/dipartimenti/promise/",
    desc: "Brings together health promotion, mother and child care, internal and specialist medicine in a multidisciplinary approach to prevention, diagnosis and treatment.",
    topics: [
      ["Hygiene and public health", "Surveillance of vaccine‑preventable diseases, cancer registry, epidemiology of antimicrobial resistance, food safety."],
      ["Infectious diseases", "HIV and comorbidities, chronic hepatitis, multidrug‑resistant infections, tuberculosis, vector‑borne diseases."],
      ["Mother and child health", "Pre‑ and postnatal diagnosis of malformations, high‑risk pregnancies, neonatal diseases, neurodevelopmental disorders."],
      ["Internal and metabolic medicine", "Fatty liver disease, hepatocellular carcinoma, coeliac disease, obesity and diabetes, cardio‑oncology, heart failure."]
    ]
  },
  {
    abbr: "SAAF", name: "Agricultural, Food and Forest Sciences",
    link: "https://www.unipa.it/dipartimenti/saaf/",
    desc: "Fundamental and applied research in agriculture, animal production, forestry and the environment, with an approach that values biodiversity and the region’s typical products.",
    kpi: [["6", "Laboratories"]],
    topics: [
      ["Crops and soil", "Agronomy, field crops, horticulture and floriculture, soil analysis, medicinal plants."],
      ["Arboriculture and forests", "Silviculture, wood technology, micropropagation, pomology, post‑harvest."],
      ["Crop protection and biosystems", "Plant pathology, entomology, mycology, agricultural hydraulics and mechanics, rural buildings."],
      ["Food and animal production", "Food technologies, agri‑food microbiology, product quality, animal science and nutrition."]
    ]
  }
];

window.CLUSTERS = [
  {
    e: "i-space", t: "Quantum technologies, astrophysics and fundamental physics",
    short: ["Quantum education", "Photonics and nanomaterials", "Computational astrophysics"],
    items: [
      ["Quantum science and advanced education", "Quantum literacy and workforce development (<em>European Quantum Academy</em>, <em>Light‑Matter Engineering</em>)."],
      ["Photonics and advanced nanomaterials", "Monodisperse nanocrystals, advanced materials engineering and high‑performance microlasers."],
      ["Computational astrophysics and cosmology", "Black hole dynamics and neutron star collisions; Rubin Observatory data to probe dark matter and dark energy (<em>Dark Universe</em>)."],
      ["Particle and hadron physics", "Experiments at hadron accelerators and front‑line research infrastructures."]
    ]
  },
  {
    e: "i-dna", t: "Public health, antimicrobial resistance and cognitive diagnostics",
    short: ["Malta–Sicily AMR governance", "Preventive oncology", "Living labs for digital health"],
    items: [
      ["Cross‑border infection control", "Governance strategies for antimicrobial resistance (<em>Malta &amp; Sicily AMR Governance</em>)."],
      ["Preventive oncology", "Epidemiological models and interventions for infection‑related cancers."],
      ["Cognitive assessment", "Adaptive multimodal tools for neurocognitive diagnosis."],
      ["Radiation safety for young people", "Justification and optimisation of medical exposure in paediatric care."],
      ["Digital and community health", "Digital technologies in primary care through participatory <em>Living Labs</em>."]
    ]
  },
  {
    e: "i-bio", t: "Climate resilience, sustainable agriculture and urban ecosystems",
    short: ["Urban reforestation", "Resilient agronomy", "Biofloc aquaculture"],
    items: [
      ["Urban reforestation and NBS", "Trans‑urban reforestation and climate adaptation strategies (<em>Trans‑urban Reforestation</em>)."],
      ["Climate‑resilient agronomy", "Ecosystem‑based field practices for resilient crops, e.g. tomato."],
      ["Agri‑food value chains", "Value creation and sustainable management in the olive and edible oil sectors (<em>From Commodity to Values</em>, <em>Edible Oils Bio‑recovery</em>)."],
      ["Sustainable aquaculture", "Biofloc Technology for circular, low‑impact aquatic farming."]
    ]
  },
  {
    e: "i-circ", t: "Circular economy, bio‑based materials and resource recovery",
    short: ["Biodegradable mulching films", "Membranes and biotechnology", "Participatory recycling"],
    items: [
      ["Bio‑based agricultural materials", "Functionalised, biodegradable mulching films for horticulture."],
      ["Industrial upcycling", "Advanced membranes and low‑emission biotechnology for recovery from by‑products."],
      ["Circularity in the built environment", "Circular and solidarity‑based economy in the built environment."],
      ["Participatory recycling", "Local and international community‑engaging recycling networks."]
    ]
  },
  {
    e: "i-ai", t: "Data science, digital twins and democratic defence",
    short: ["SoBigData", "Heritage digital twins", "Countering disinformation"],
    items: [
      ["Big data and open data infrastructures", "Distributed platforms (<em>SoBigData</em>) and environmental data exchange protocols (<em>Water Data Exchange</em>)."],
      ["Digital twins and heritage", "Hybrid digital twins for diagnosing and preserving historic buildings."],
      ["Information integrity", "Countering disinformation and foreign interference, media literacy, protecting democratic debate."]
    ]
  },
  {
    e: "i-heritage", t: "Digital humanities, cultural heritage and history of science",
    short: ["Medieval pharmacology", "Ancient theatres and sanctuaries"],
    items: [
      ["Historical‑scientific and philosophical analysis", "Medieval medical and pharmacological texts studied with formal logical and metaphysical tools."],
      ["Archaeology of performative spaces", "Ancient theatres and sanctuaries and socio‑cultural sustainability."]
    ]
  },
  {
    e: "i-energy", t: "Innovation transfer and institutional networks",
    short: ["Incubation and acceleration", "European networks"],
    items: [
      ["Technology transfer", "Innovation relays, incubation, business development and growth strategies for emerging technologies."],
      ["Networks and cross‑border cooperation", "Multi‑stakeholder national and European networks (e.g. EJN) and strategic partnerships."]
    ]
  },
  {
    e: "i-onehealth", t: "Cross‑cutting and methodological competences",
    short: ["One Health", "Participatory co‑design", "EU consortium leadership"],
    items: [
      ["One Health and socio‑ecological systems", "Human health, environment, agriculture and materials in a single sustainability framework."],
      ["Multidisciplinary research", "Hard sciences, biotechnology, social, digital and health disciplines combined."],
      ["Co‑design and civic engagement", "Living labs, community recycling initiatives, empowerment campaigns."],
      ["European consortium leadership", "Managing large trans‑national networks and EU framework programme projects."]
    ]
  }
];

window.SHOWCASE = [
  { tag: "Health · NRRP", c: "terra", t: "HEAL ITALIA", d: "National alliance for innovative therapies, advanced lab research and precision medicine. UniPa is the lead partner." },
  { tag: "Quantum", c: "mare", t: "European Quantum Academy", d: "Quantum literacy, advanced training and skills development for quantum technologies." },
  { tag: "Astrophysics", c: "mare", t: "Dark Universe", d: "Models of black holes and neutron stars and Rubin Observatory data to investigate dark matter and dark energy." },
  { tag: "Public health", c: "terra", t: "Malta & Sicily AMR Governance", d: "Cross‑border governance of antimicrobial resistance and infection control between Sicily and Malta." },
  { tag: "Climate and cities", c: "ocra", t: "Trans‑urban Reforestation", d: "Urban reforestation and nature‑based solutions for climate adaptation in cities." },
  { tag: "Data", c: "mare", t: "SoBigData", d: "Distributed European research infrastructure for big data and social data science." },
  { tag: "Agri‑food", c: "ocra", t: "From Commodity to Values", d: "Value and sustainability in the olive oil chain, with bio‑recovery of edible oils." },
  { tag: "Prevention", c: "terra", t: "DARE", d: "Digital lifelong prevention: digital tools for prevention across the whole life span." },
  { tag: "Oncology", c: "terra", t: "Liquid biopsy and liver cancer", d: "A new post‑genomic paradigm for the diagnosis of hepatocellular carcinoma." }
];
