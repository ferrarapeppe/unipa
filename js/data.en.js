/* Site content — English version. Edit research areas, departments and clusters here. */

window.AREAS = [
  { icon: "i-bio", t: "Biodiversity and ecosystems", d: "Biodiversity monitoring and conservation, marine biology and ecology, ecosystem restoration, taxonomy and phylogenetics, GIS, environmental microbiology and biotechnology." },
  { icon: "i-clima", t: "Climate and resilience", d: "Climate impacts on marine, coastal and inland-water ecosystems, coastal erosion, hydrological processes, natural hazards and nature-based solutions." },
  { icon: "i-circ", t: "Circular economy", d: "Waste and wastewater treatment, soil and sediment remediation, recovery of secondary raw materials, green chemistry and Life Cycle Assessment." },
  { icon: "i-dna", t: "Health and precision medicine", d: "Molecular and cellular biology, genetics and epigenetics, microbiome, omics sciences, bioinformatics, regenerative medicine, biomaterials and tissue engineering, neuroscience, cancer research, innovative diagnostics, liquid biopsy, pre‑clinical and clinical studies." },
  { icon: "i-onehealth", t: "One Health and healthy ageing", d: "Human, animal and environmental health, prevention, nutrition and Mediterranean lifestyles, infectious and neurodegenerative diseases." },
  { icon: "i-mat", t: "Materials and nanotechnology", d: "Innovative molecules and materials for pharmaceuticals, energy, environment, biomedicine and cultural heritage: nanomaterials, catalysts, drug delivery." },
  { icon: "i-energy", t: "Energy transition", d: "Renewables, smart grids and energy communities, sustainable mobility, storage, hydrogen, salinity gradient, advanced photovoltaics, fusion and fission." },
  { icon: "i-ai", t: "Digital and artificial intelligence", d: "Machine learning, computer vision, NLP, generative models, big data, federated learning, robotics, cybersecurity, blockchain, IoT, cloud and edge computing, digital twins, e‑health, human‑computer interaction." },
  { icon: "i-infra", t: "Infrastructure and mobility", d: "Structural health monitoring, seismic resilience, innovative construction materials, sustainable transport, autonomous vehicles, critical infrastructure." },
  { icon: "i-space", t: "Mathematics, physics and space", d: "Mathematical modelling, numerical analysis, statistics, complex systems, quantum science and technology, photonics, biophysics, materials physics, astrophysics, space weather, advanced instrumentation." },
  { icon: "i-soc", t: "Society, economics and governance", d: "Sustainable development, economic and financial resilience, territorial competitiveness, climate economics, public policy and governance, inclusion, migration, inequalities, gender studies, Euro‑Mediterranean cooperation." },
  { icon: "i-heritage", t: "Heritage and humanities", d: "Archaeology, digitisation of cultural heritage, virtual archaeology, digital humanities, languages, cultural studies, communication, memory and Mediterranean history, social and cultural dimensions of environmental change." }
];

window.DEPTS = [
  {
    abbr: "STEBICEF", name: "Biological, Chemical and Pharmaceutical Sciences and Technologies",
    link: "https://www.unipa.it/dipartimenti/stebicef/",
    desc: "From physiology to medicinal chemistry, from marine biology to environmental technologies: a department that designs molecules, studies biological processes and adds value to resources.",
    kpi: [["2800+", "Publications"], ["160+", "Projects"], ["30+", "Patents"], ["3", "Spin‑offs"]],
    topics: [
      ["Molecules, materials and matrices", "New drugs and delivery systems, catalysts, organic synthesis, green chemistry, natural products, supramolecular chemistry, soft matter, materials for energy, computational methods, hybrid materials, spectroscopy and analyses for cultural heritage."],
      ["Environment and valorisation", "Flora and fauna monitoring, landscape preservation, biodiversity, blue economy, waste evaluation, extraction and purification methods, food fortification, raw and secondary materials from waste, Life Cycle Assessment."],
      ["Biological processes", "Cell culture, cancer, biotechnology, neuroscience, genetic diseases, epigenetics, biomaterials, tissue engineering, metabolomics and proteomics, bioremediation, environmental microbiology, microbiome, palaeoecology, nutraceuticals, bioinformatics, personalised medicine."],
      ["Pre‑clinical and clinical studies", "Biochemical assays, toxicity, antioxidant activity, in vitro, in vivo and ex vivo studies, mutagenic activity, animal models, human studies."],
      ["Disciplines", "Physiology, zoology, anatomy, anthropology, biochemistry, molecular and applied biology, pharmacology, genetics, microbiology, analytical, physical, inorganic, organic, industrial and medicinal chemistry, pharmaceutical technology, food, environmental and heritage chemistry, palaeontology, pathology, dietetics, ecology, conservation biology, phylogenetics and systematics, marine biology, GIS."]
    ]
  },
  {
    abbr: "DMI", name: "Mathematics and Computer Science",
    link: "https://www.unipa.it/dipartimenti/matematicaeinformatica/",
    desc: "48 faculty members carrying out multidisciplinary, and often interdisciplinary, research in mathematics and computer science.",
    kpi: [["48", "Faculty members"]],
    topics: [
      ["Algebra and geometry", "Polynomial identities, category theory and categorical algebra, Lie theory, algebraic geometry, varieties and Grassmannians."],
      ["Analysis and mathematical physics", "Functional analysis and operator theory, measure and integration, partial differential equations, reaction‑diffusion systems, fluid dynamics, dynamical systems and celestial mechanics, statistical mechanics."],
      ["Logic and probability", "Logic of conditionals, coherence‑based probability, reasoning under uncertainty, entropy and scoring rules."],
      ["Computer science and AI", "Combinatorial and algorithmic problems, knowledge extraction from data, deep learning, medical imaging, health informatics, computer vision, multisensory interaction."],
      ["Numerical analysis", "Numerical and computational methods, approximation and numerical solution of differential equations."],
      ["History, philosophy and education", "History and philosophy of mathematics, mathematics education, soft computing and fuzzy logic, political economy."]
    ],
  },
  {
    abbr: "DiSTeM", name: "Earth and Marine Sciences",
    link: "https://www.unipa.it/dipartimenti/distem/",
    desc: "Fundamental and applied research into how the Earth’s biotic and abiotic compartments interact, with technology transfer to SMEs and public institutions.",
    topics: [
      ["Ecosystems and biodiversity", "Marine and terrestrial ecosystems, biodiversity and ecosystem functioning, palaeoenvironments."],
      ["Fisheries and aquaculture", "Ecosystem productivity, vulnerability to anthropogenic drivers, fisheries and aquaculture."],
      ["Natural risks and climate", "Monitoring of natural hazards and of the effects of climate change."],
      ["Geo‑resources", "Exploration, management and conservation of geological resources."],
      ["Organisms and environmental change", "Effects of anthropogenic factors and environmental change on biological and ecological responses; biomarkers and adaptive responses to assess ecosystem quality."],
      ["From biodiversity to health", "Molecules with biotechnological potential for human health, antibiotic resistance, tissue regeneration; from organisms to ecosystems to human health (WHO priorities)."]
    ]
  },
  {
    abbr: "DI", name: "Engineering",
    link: "https://www.unipa.it/dipartimenti/ingegneria/",
    desc: "Six research sections covering the full spectrum of engineering: from materials to energy, from AI to infrastructure.",
    topics: [
      ["Chemical, materials and hydraulic engineering", "Materials for electrochemical devices, tissue engineering, heritage protection, biopolymers; salinity‑gradient energy, fuel cells, metals from waste, computational fluid dynamics; hydroelectric devices and water network management."],
      ["Water, climate and environment", "Water‑sediment‑biota interaction in river ecosystems, wastewater and sludge treatment, remediation of soils and marine sediments; enhanced weathering, coastal erosion, nature‑based solutions, crop water requirements, river monitoring, compound flood‑temperature and temperature‑wildfire effects."],
      ["Structures and infrastructure", "Modelling of materials, buildings, structures and soils; seismic strengthening with FRP and FRCM; structural health monitoring of buildings, bridges and heritage, including after earthquakes or blasts; planning for road, rail, water and air transport; rubberised reclaimed asphalt (Rub‑RAP); 3D‑printed earthen materials."],
      ["Computer engineering", "AI for computer vision, natural language, precision medicine, generative models, multi‑object tracking, chatbots, breast cancer detection and e‑health; cybersecurity, blockchain, cryptanalysis, e‑voting; federated learning and crowdsourcing; human‑computer interaction; swarm, quantum and cognitive robotics."],
      ["Mechanics, management and aerospace", "Entrepreneurial science, innovation management and digital transformation, ecological transition, materials for aerospace, mechanics and biomedicine, cyber‑physical production systems, digital manufacturing."],
      ["Electronics, physics and mathematics", "Intelligent mobility and autonomous land, marine and aerial vehicles; vital‑sign sensors, rehabilitation robotics, optical brain imaging; nanoelectronics, resistive memories, photovoltaics; future networks: IoT, LoRa, visible light, 5G and 6G, intelligent surfaces, mmWave and THz, underwater communications, cloud and edge; quantum technologies and nuclear fusion; pure and applied mathematics."],
      ["Energy", "Smart grids and buildings, renewables, e‑mobility, energy transition of small islands, energy communities and microgrids; power quality and efficiency; measurement and diagnostics, electromagnetic compatibility; polygeneration, district heating and heat pumps; fission and fusion reactors, safety and radiation protection."],
      ["Cross‑cutting directions", "Trust, regulation, inclusiveness and sustainability: monitoring critical infrastructure and energy use, new regulation policies, connecting the unconnected, education and e‑health for all, better use of natural resources."]
    ]
  },
  {
    abbr: "DiFC", name: "Physics and Chemistry “Emilio Segrè”",
    link: "https://www.unipa.it/dipartimenti/difc/",
    desc: "Fundamental and applied research in physics and chemistry, from the infinitely small to the stars.",
    topics: [
      ["Experimental physics", "Condensed matter, biophysics, soft matter, nuclear and elementary particle physics, nanophysics, ultrafast physics, materials science, photonics and biophotonics, electronics, 2D materials."],
      ["Theoretical physics", "Quantum optics and electrodynamics, quantum thermodynamics, complex systems, quantum technologies, open quantum systems, quantum AI, many‑body physics, quantum fields in curved spacetime, dark matter and axions."],
      ["Astrophysics", "X‑ray and high‑energy astronomy, X‑ray binaries, pulsars, supernova remnants, cosmic rays, astroparticles, solar physics, exoplanets, stellar magnetic activity, star formation, space weather, X‑ray instrumentation and space missions."],
      ["Applied physics", "Computational physics, physics applied to medicine, semiconductor detectors for ionising radiation, image analysis, econophysics, complex systems and networks, biomaterials development."],
      ["Physics education and history", "Teaching and learning methodologies, historical scientific instrument collections."],
      ["Chemistry", "Experimental chemistry of materials and nanomaterials; theoretical and computational chemistry, catalysis, molecular spectroscopy; chemistry for cultural heritage, bioinorganic chemistry."]
    ]
  },
  {
    abbr: "Bi.N.D.", name: "Biomedicine, Neuroscience and Advanced Diagnostics",
    link: "https://www.unipa.it/dipartimenti/bi.n.d./",
    desc: "Clinical and translational research, with active projects in precision medicine, diagnostics and prevention.",
    topics: [
      ["HEAL ITALIA", "National alliance for innovative therapies, advanced lab research and integrated approaches to precision medicine."],
      ["Reproductive health", "Female reproductive potential in mammals: recovering the untapped ovarian reserve and generating oocytes and granulosa cells from mesenchymal stem cells."],
      ["Hepatology and oncology", "Networks between general practitioners and specialist centres for HBV/HDV diagnosis; liquid biopsy and hepatocellular carcinoma; health inequities and social determinants in liver cancer in Sicily."],
      ["Neuro‑cognition", "Age‑related hearing loss and neuro‑cognitive decline: from early diagnosis to tele‑rehabilitation."],
      ["Prevention and diagnostics", "DARE – digital lifelong prevention; INNOVA – advanced diagnostics."],
      ["Mediterranean nutrition", "Healthy long life in Mediterranean style; technological solutions to improve food in Mediterranean environments (COMOCONSALUD‑VITORIA)."]
    ]
  },
  {
    abbr: "SEAS", name: "Economics, Business and Statistics",
    link: "https://www.unipa.it/dipartimenti/seas/",
    desc: "Quantitative models and data analysis to understand economies, territories and societies.",
    topics: [
      ["Financial sustainability and fragility", "Quantitative models of financial sustainability for sovereigns, households and firms under climate, pandemic and social shocks; financial crises and fragility."],
      ["Complex networks", "Network analysis of financial, social and biological systems."],
      ["Territories and firms", "Regional and spatial economic data analysis, performance and competitiveness of territories and firms, tourism and regional economics."],
      ["Advanced statistics", "Complex spatio‑temporal processes, sparse inference in high‑dimensional models, Bayesian statistics and graphical models, preference data and consensus ranking."],
      ["Life course", "The school‑university‑work transition studied with statistical life course analysis."],
      ["Economics, health and institutions", "Population ageing, health economics, the effects of pandemics on inequality, climate change economics, growth and development, the role of institutions, monetary policy and public spending."]
    ]
  },
  {
    abbr: "DEMS", name: "Political Sciences and International Relations",
    link: "https://www.unipa.it/dipartimenti/dems/",
    desc: "The common thread: the interactions between institutions – formal and informal – and their social context, across the ERC Social Sciences and Humanities domains.",
    topics: [
      ["Mediterranean and Europe", "Legal, religious and cultural transformations in the modern and contemporary Mediterranean; construction, collapse and redefinition of European political, economic and social systems in the 19th and 20th centuries."],
      ["Institutions and politics", "Evolving national and international political systems and institutions; power, participation and contemporary critical interpretations."],
      ["Law, business and public administration", "Restorative justice and ADR, corporate criminal liability and social responsibility, international taxation of multinationals; the NRRP, employment in public administration and public intervention in the economy."],
      ["Rights and inclusion", "Migration, multiculturalism, inequalities and marginality; fundamental rights and social inclusion in national and supranational court decisions; gender diversity in public and private organisations."],
      ["Sustainability and institutions", "Climate, innovation, energy efficiency, energy communities, smart cities and performance management; dynamic modelling for sustainability in healthcare and evaluation in the cultural sector."],
      ["Languages and translation", "Legal English: discourse genres in European and international multilingual contexts; French: translation studies, history and techniques in the humanities and arts."],
      ["Economic history", "American economic thought: economics and eugenics, the gender gap between the two world wars; history of the Italian banking system."]
    ]
  },
  {
    abbr: "SUM", name: "Humanities",
    link: "https://www.unipa.it/dipartimenti/scienzeumanistiche/",
    desc: "Philosophy, literature, languages and the arts as tools for reading the present.",
    topics: [
      ["Philosophy and critical theory", "Logic and knowledge, metaphysics, phenomenology, ontology, formal languages, emotions and desire, power and language, critical theory of social models, public ethics, film theory."],
      ["Technics and environment", "Artificial intelligence, ecological thinking, soundscape, digital humanities."],
      ["Music and visual culture", "Musical traditions, ethnology, photography, video art, art history, theatre, music and film."],
      ["Borders and spaces in languages and literatures", "Translation studies and cultural transfer, gender and women’s studies, multiculturalism, migration, media studies, minority languages, literary geographies, Sicilian lexicon and dialect culture, Sicilian writers."],
      ["Memory, ideology and conflict", "History, memory and war in literature, censorship, politics and ideology, languages and politics, identity and national literature, myths in contemporary literatures, crime and political violence, diplomatic sources, Mediterranean trade."],
      ["Literary theory and criticism", "Discourse and genre analysis, genetic criticism, ecocriticism, classical studies, Latin literature, the legacy of the classics in contemporary culture."],
      ["Linguistics", "Applied linguistics, contrastive analysis, lexicology and lexicography, cognitive linguistics, pragmatics, rhetoric, enactivism, intercomprehension, Italian grammar, sociolinguistics."],
      ["Theories of teaching", "Language teaching methods, teaching literature, Italian as a second and foreign language, neurodidactics."]
    ]
  },
  {
    abbr: "CULTURE", name: "Cultures and Society",
    link: "https://www.unipa.it/dipartimenti/cultureesocieta/",
    desc: "Six sections and five ERC areas to study cultures and societies: SH2 institutions, governance and legal systems; SH3 the social world and its diversity; SH5 cultures and cultural production; SH6 the study of the human past; SH7 human mobility, environment and space.",
    topics: [
      ["Cultural heritage", "Ritual symbolism and traditional food in the Euro‑Mediterranean area, history of anthropological thought, anthropological approaches to environmental degradation and climate, landscape archaeology, virtual archaeology, heritage digitisation."],
      ["Philology, linguistics and communication", "AI, digital humanities, cultural memory, Albanology, socio‑semiotics of gastronomy, media, design, brands and urban spaces, virtual reality."],
      ["Humanities, social and political sciences", "Migration, political sociology, governance, memory, contemporary anthropology, the Anthropocene, gender, inclusion and discrimination, the role of women, political language, inter‑ethnic relations, measuring ethnic identity."],
      ["Cultural studies", "Visual studies, cultural dynamics of the Anthropocene, ecological awareness and sustainability, gender, media studies, the digital turn."],
      ["Historical studies", "Global crises, religious history, digital humanities, memory and archives, consensus and dissent in medieval Europe, global history methods."],
      ["The ancient world", "Political language and representation of power, ancient Greek medical texts, medicine and gastronomy as expertise, deliberative democracy, rhetoric, history of emotions, institutions of ancient Greece, medieval and humanist Latin literature."]
    ]
  },
  {
    abbr: "SPPEFF", name: "Psychological, Pedagogical, Exercise and Training Sciences",
    link: "https://www.unipa.it/dipartimenti/sc.psicol.pedag.edellaformazione/",
    desc: "The study of human behaviour in continuous relationship with the ecological and biological contexts in which it takes place.",
    topics: [
      ["Health and well‑being", "Prevention and health promotion across the life span, clinical psychology, organisational well‑being and work‑related stress."],
      ["People, technology and citizenship", "Social skills and active citizenship, user experience and human factors, cyberpsychology."],
      ["Neuroscience and rehabilitation", "Rehabilitation protocols for neurodegenerative diseases using non‑invasive brain neuromodulation."],
      ["Development and measurement", "Typical and atypical developmental trajectories, neurodevelopmental disorders, paediatric psychology, psychometric validation of psychological and neuropsychological scales."],
      ["Education and training", "School and university teaching, teacher education, educational technologies, family pedagogy, quality of educational services."],
      ["Movement and sport", "Physical activity methods for all ages, adapted physical activity programmes."],
      ["Society and culture", "Migration and human mobility, vulnerability of refugees and asylum seekers, tourism statistics, evaluation of social and health services, philosophy and psychology, the transition to modernity in German‑area music."]
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
