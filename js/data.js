/* Contenuti del sito. Modificare qui testi di aree, dipartimenti e cluster. */

window.AREAS = [
  { icon: "i-bio", t: "Biodiversità ed ecosistemi", d: "Monitoraggio e conservazione, biologia ed ecologia marina, restauro degli ecosistemi, tassonomia e filogenesi, GIS, microbiologia e biotecnologie ambientali." },
  { icon: "i-clima", t: "Clima e resilienza", d: "Impatti climatici su mare, coste e acque interne, erosione costiera, processi idrologici, rischi naturali e soluzioni basate sulla natura." },
  { icon: "i-circ", t: "Economia circolare", d: "Trattamento di rifiuti e acque reflue, bonifica di suoli e sedimenti, recupero di materie prime seconde, chimica verde e Life Cycle Assessment." },
  { icon: "i-dna", t: "Salute e medicina di precisione", d: "Biologia molecolare, genetica ed epigenetica, microbioma, scienze omiche, medicina rigenerativa, neuroscienze, oncologia, biopsia liquida." },
  { icon: "i-onehealth", t: "One Health e invecchiamento sano", d: "Salute umana, animale e ambientale, prevenzione, nutrizione e stili di vita mediterranei, malattie infettive e neurodegenerative." },
  { icon: "i-mat", t: "Materiali e nanotecnologie", d: "Molecole e materiali innovativi per farmaci, energia, ambiente, biomedicina e beni culturali: nanomateriali, catalizzatori, drug delivery." },
  { icon: "i-energy", t: "Transizione energetica", d: "Rinnovabili, smart grid e comunità energetiche, mobilità sostenibile, accumulo, idrogeno, gradiente salino, fotovoltaico avanzato, fusione e fissione." },
  { icon: "i-ai", t: "Digitale e intelligenza artificiale", d: "Machine learning, computer vision, NLP, modelli generativi, big data, federated learning, robotica, cybersecurity, IoT, digital twin, e‑health." },
  { icon: "i-infra", t: "Infrastrutture e mobilità", d: "Monitoraggio strutturale, resilienza sismica, materiali da costruzione innovativi, trasporti sostenibili, veicoli autonomi, infrastrutture critiche." },
  { icon: "i-space", t: "Matematica, fisica e spazio", d: "Modellistica matematica, analisi numerica, statistica, sistemi complessi, scienze e tecnologie quantistiche, fotonica, astrofisica, space weather." },
  { icon: "i-soc", t: "Società, economia e governance", d: "Sviluppo sostenibile, resilienza economica e finanziaria, politiche pubbliche, inclusione, migrazioni, disuguaglianze, studi di genere." },
  { icon: "i-heritage", t: "Patrimonio e scienze umane", d: "Archeologia, digitalizzazione del patrimonio, archeologia virtuale, digital humanities, lingue, memoria e storia del Mediterraneo." }
];

window.DEPTS = [
  {
    abbr: "STEBICEF", name: "Scienze e Tecnologie Biologiche, Chimiche e Farmaceutiche",
    link: "https://www.unipa.it/dipartimenti/stebicef/",
    desc: "Dalla fisiologia alla chimica farmaceutica, dalla biologia marina alle tecnologie ambientali: un dipartimento che progetta molecole, studia processi biologici e valorizza le risorse.",
    kpi: [["2800+", "Pubblicazioni"], ["160+", "Progetti"], ["30+", "Brevetti"], ["3", "Spin‑off"]],
    topics: [
      ["Molecole, materiali e matrici", "Nuovi farmaci e sistemi di rilascio, catalizzatori, chimica verde, prodotti naturali, chimica supramolecolare, materiali per l’energia e analisi per i beni culturali."],
      ["Ambiente e valorizzazione", "Monitoraggio di flora e fauna, biodiversità, blue economy, recupero di materie prime e seconde dai rifiuti, LCA."],
      ["Processi biologici", "Colture cellulari, oncologia, neuroscienze, epigenetica, biomateriali, ingegneria tissutale, omiche, microbioma, bioinformatica, medicina personalizzata."],
      ["Studi preclinici e clinici", "Saggi biochimici, tossicità, attività antiossidante, studi in vitro, in vivo ed ex vivo, modelli animali e studi sull’uomo."]
    ]
  },
  {
    abbr: "DMI", name: "Matematica e Informatica",
    link: "https://www.unipa.it/dipartimenti/matematicaeinformatica/",
    desc: "48 docenti e ricercatori con una ricerca multidisciplinare e spesso interdisciplinare in matematica e informatica.",
    kpi: [["48", "Docenti e ricercatori"]],
    topics: [
      ["Matematica pura", "Algebra, geometria, logica, analisi matematica, identità polinomiali, teoria delle categorie."],
      ["Matematica applicata", "Fisica matematica, analisi numerica, sistemi dinamici, probabilità, fluidodinamica."],
      ["Informatica", "Algoritmi e strutture dati, AI e machine learning, imaging medico, health informatics, computer vision, soft computing."],
      ["Storia e didattica", "Storia della matematica, didattica della matematica ed economia politica."]
    ],
  },
  {
    abbr: "DiSTeM", name: "Scienze della Terra e del Mare",
    link: "https://www.unipa.it/dipartimenti/distem/",
    desc: "Ricerca fondamentale e applicata per capire come interagiscono le componenti biotiche e abiotiche del pianeta, con trasferimento tecnologico verso PMI e istituzioni.",
    topics: [
      ["Ecosistemi marini e terrestri", "Biodiversità e funzionamento degli ecosistemi, pesca e acquacoltura, paleoambienti."],
      ["Rischi naturali e clima", "Monitoraggio dei rischi naturali e degli effetti dei cambiamenti climatici."],
      ["Georisorse", "Esplorazione, gestione e conservazione delle risorse geologiche."],
      ["Dagli organismi alla salute", "Biomarcatori, molecole con potenziale biotecnologico, antibiotico‑resistenza e rigenerazione tissutale, in ottica One Health."]
    ]
  },
  {
    abbr: "DI", name: "Ingegneria",
    link: "https://www.unipa.it/dipartimenti/ingegneria/",
    desc: "Sei sezioni di ricerca che coprono l’intero spettro dell’ingegneria: dai materiali all’energia, dall’AI alle infrastrutture.",
    topics: [
      ["Chimica, materiali e idraulica", "Dispositivi elettrochimici, energia da gradiente salino, metalli dai rifiuti, trattamento acque, erosione costiera, NBS."],
      ["Strutture e infrastrutture", "Rinforzo sismico con FRP/FRCM, structural health monitoring di ponti ed edifici storici, mobilità sostenibile, terra cruda stampata in 3D."],
      ["Ingegneria informatica", "AI per la medicina di precisione, computer vision, cybersecurity e blockchain, federated learning, swarm e cognitive robotics."],
      ["Meccanica, gestione e aerospazio", "Imprenditorialità scientifica, trasformazione digitale, materiali aerospaziali e biomedicali, manifattura digitale."],
      ["Elettronica, fisica, matematica", "Guida autonoma, droni, e‑health, nanoelettronica, fotovoltaico, reti 6G e THz, tecnologie quantistiche."],
      ["Energia", "Smart grid, isole minori e comunità energetiche, efficienza, pompe di calore, reattori a fissione e fusione, radioprotezione."]
    ]
  },
  {
    abbr: "DiFC", name: "Fisica e Chimica “Emilio Segrè”",
    link: "https://www.unipa.it/dipartimenti/difc/",
    desc: "Ricerca fondamentale e applicata in fisica e chimica, dall’infinitamente piccolo alle stelle.",
    topics: [
      ["Fisica sperimentale", "Materia condensata, biofisica, fisica nucleare e delle particelle, nanofisica, fisica ultraveloce, fotonica, materiali 2D."],
      ["Fisica teorica", "Ottica ed elettrodinamica quantistica, termodinamica quantistica, sistemi quantistici aperti, quantum AI, materia oscura e assioni."],
      ["Astrofisica", "Astronomia X, alte energie, pulsar, resti di supernova, raggi cosmici, esopianeti, fisica solare, space weather, missioni spaziali."],
      ["Fisica applicata e chimica", "Fisica medica, rivelatori di radiazione, econofisica, reti complesse; chimica dei materiali, quantistica, computazionale e per i beni culturali."]
    ]
  },
  {
    abbr: "Bi.N.D.", name: "Biomedicina, Neuroscienze e Diagnostica avanzata",
    link: "https://www.unipa.it/dipartimenti/bi.n.d./",
    desc: "Ricerca clinica e traslazionale, con progetti attivi in medicina di precisione, diagnostica e prevenzione.",
    topics: [
      ["HEAL ITALIA", "Alleanza nazionale per terapie innovative, ricerca di laboratorio avanzata e medicina di precisione."],
      ["Oncologia epatica", "Biopsia liquida ed epatocarcinoma; disuguaglianze di salute e determinanti sociali in Sicilia."],
      ["Neuro‑cognizione", "Ipoacusia legata all’età e declino cognitivo: dalla diagnosi precoce alla tele‑riabilitazione."],
      ["Prevenzione e stili di vita", "DARE – prevenzione digitale lungo tutta la vita, INNOVA – diagnostica avanzata, longevità in stile mediterraneo."]
    ]
  },
  {
    abbr: "SEAS", name: "Scienze Economiche, Aziendali e Statistiche",
    link: "https://www.unipa.it/dipartimenti/seas/",
    desc: "Modelli quantitativi e analisi dei dati per comprendere economie, territori e società.",
    topics: [
      ["Sostenibilità finanziaria", "Modelli per Stati, famiglie e imprese sotto shock climatici, pandemici e sociali; crisi e fragilità finanziaria."],
      ["Reti e territori", "Network analysis di sistemi finanziari, sociali e biologici; economia regionale e competitività."],
      ["Statistica avanzata", "Processi spazio‑temporali, inferenza sparsa ad alta dimensionalità, statistica bayesiana, modelli grafici."],
      ["Politiche e istituzioni", "Economia della salute e del clima, invecchiamento, turismo, politica monetaria e spesa pubblica."]
    ]
  },
  {
    abbr: "DEMS", name: "Scienze Politiche e delle Relazioni Internazionali",
    link: "https://www.unipa.it/dipartimenti/dems/",
    desc: "Il filo comune: le interazioni tra istituzioni – formali e informali – e il loro contesto sociale, nelle aree ERC delle scienze sociali e umane.",
    topics: [
      ["Mediterraneo ed Europa", "Trasformazioni giuridiche, religiose e culturali; costruzione e crisi dei sistemi politici europei."],
      ["Diritto e impresa", "Giustizia riparativa e ADR, responsabilità d’impresa, fiscalità internazionale delle multinazionali."],
      ["Diritti e inclusione", "Migrazioni, multiculturalismo, diritti fondamentali, diversità di genere nelle organizzazioni."],
      ["Sostenibilità e istituzioni", "Clima, energia, comunità energetiche, smart city, sostenibilità nel settore pubblico e culturale."]
    ]
  },
  {
    abbr: "SUM", name: "Scienze Umanistiche",
    link: "https://www.unipa.it/dipartimenti/scienzeumanistiche/",
    desc: "Filosofia, letterature, lingue e arti come strumenti per leggere il presente.",
    topics: [
      ["Filosofia e teoria critica", "Logica, metafisica, fenomenologia, ontologia, etica pubblica, AI e pensiero ecologico, digital humanities."],
      ["Musica e cultura visuale", "Tradizioni musicali, etnologia, fotografia, video‑arte, storia dell’arte, teatro e cinema."],
      ["Lingue e letterature", "Traduzione e transfer culturale, studi di genere, migrazioni, lingue minoritarie, lessico siciliano."],
      ["Memoria e didattica", "Memoria e guerra in letteratura, eredità dei classici, linguistica, neurodidattica e italiano L2."]
    ]
  },
  {
    abbr: "CULTURE", name: "Culture e Società",
    link: "https://www.unipa.it/dipartimenti/cultureesocieta/",
    desc: "Sei sezioni e cinque aree ERC – dalle istituzioni al passato umano – per studiare culture e società.",
    topics: [
      ["Patrimonio culturale", "Simbolismo rituale e cibo tradizionale euro‑mediterraneo, archeologia del paesaggio, archeologia virtuale, digitalizzazione."],
      ["Comunicazione e semiotica", "AI, digital humanities, memoria culturale, socio‑semiotica di gastronomia, media, design e spazi urbani."],
      ["Società e politica", "Migrazioni, governance, antropocene, genere, inclusione, relazioni inter‑etniche."],
      ["Storia e mondo antico", "Crisi globali, storia religiosa, archivi, democrazia deliberativa, testi medici greci, letteratura latina medievale."]
    ]
  },
  {
    abbr: "SPPEFF", name: "Scienze Psicologiche, Pedagogiche, dell’Esercizio Fisico e della Formazione",
    link: "https://www.unipa.it/dipartimenti/sc.psicol.pedag.edellaformazione/",
    desc: "Lo studio del comportamento umano in relazione continua con i contesti ecologici e biologici in cui si svolge.",
    topics: [
      ["Salute e benessere", "Prevenzione lungo l’arco di vita, psicologia clinica, benessere organizzativo e stress lavoro‑correlato."],
      ["Neuroscienze e sviluppo", "Neuromodulazione non invasiva nelle malattie neurodegenerative, disturbi del neurosviluppo, psicometria."],
      ["Educazione", "Didattica universitaria, formazione degli insegnanti, tecnologie educative, qualità dei servizi educativi."],
      ["Movimento e società", "Attività fisica adattata per tutte le età, migrazioni, vulnerabilità di rifugiati e richiedenti asilo."]
    ]
  },
  {
    abbr: "DARCH", name: "Architettura",
    link: "https://www.unipa.it/dipartimenti/architettura/",
    desc: "Studia l’ambiente fisico e ne progetta le trasformazioni: progettazione architettonica, urbana e del paesaggio, pianificazione territoriale, diagnostica, restauro e conservazione dei beni architettonici.",
    kpi: [["84", "Docenti e ricercatori"], ["44", "Dottorandi"]],
    topics: [
      ["Patrimonio culturale", "Tecnologie e materiali per il restauro, nanotecnologie per i beni culturali, parchi archeologici, rilievo e ricostruzione digitale, turismo culturale."],
      ["Sviluppo territoriale", "Strategie di sviluppo mediterraneo, valutazioni ambientali e reti ecologiche, rigenerazione urbana, pratiche partecipative."],
      ["Architettura, città e paesaggio", "Teorie e metodi del progetto, accessibilità, mobilità e spazio pubblico, sistemi paesaggistici, materiali sostenibili."],
      ["Design e comunicazione visiva", "Trasformazione digitale dello spazio pubblico, allestimenti e installazioni, design sostenibile con materiali riciclati."]
    ]
  },
  {
    abbr: "DiGi", name: "Giurisprudenza",
    link: "https://www.unipa.it/dipartimenti/di.gi./",
    desc: "Dal 1779 nella storica Casa dei Padri Teatini, in via Maqueda. Dipartimento di Eccellenza del Ministero dell’Università e della Ricerca per due cicli consecutivi.",
    kpi: [["2018–22", "Dipartimento di Eccellenza MUR"], ["2023–27", "Dipartimento di Eccellenza MUR"]],
    topics: [
      ["Migrazioni e diritti", "Diritto dell’immigrazione e dell’asilo, protezione internazionale, integrazione; laurea magistrale in inglese “Migration, Rights, Integration”."],
      ["Diritti umani", "Evoluzione, tutela e limiti dei diritti umani; tutela dei soggetti vulnerabili con la Clinica legale “Migrazioni e Diritti”."],
      ["Pluralismi giuridici", "Pluralismi giuridici tra prospettive antiche e attuali, studi di genere."],
      ["Diritto europeo e digitale", "Cattedra Jean Monnet in Comparative and European Digital Law; Centro di Eccellenza Jean Monnet EUMoSIT sui traffici illeciti nel Mediterraneo."]
    ]
  },
  {
    abbr: "Me.Pre.C.C.", name: "Medicina di Precisione in Area Medica, Chirurgica e Critica",
    link: "https://www.unipa.it/dipartimenti/me.pre.c.c./",
    desc: "Ricerca traslazionale in chirurgia generale e specialistica, odontostomatologia, oncologia clinica e sperimentale e medicina rigenerativa, in sinergia con il Policlinico “P. Giaccone”.",
    kpi: [["3", "Laboratori di ricerca"]],
    topics: [
      ["Oncologia di precisione", "Biomarcatori genomici prognostici, scienze omiche, tumori della mammella e del colon‑retto, ruolo del tessuto adiposo nella progressione tumorale."],
      ["Medicina rigenerativa", "Guarigione dei tessuti, chirurgia plastica e ricostruttiva."],
      ["IA e sanità digitale", "Supporto diagnostico e decisionale basato sull’IA, telemedicina, reti di laboratorio basate su ICT."],
      ["Dispositivi ortopedici", "Dispositivi bioattivi per il trattamento delle fratture."]
    ]
  },
  {
    abbr: "ProMISE", name: "Promozione della Salute, Materno‑Infantile, di Medicina Interna e Specialistica di Eccellenza “G. D’Alessandro”",
    link: "https://www.unipa.it/dipartimenti/promise/",
    desc: "Unisce promozione della salute, area materno‑infantile, medicina interna e specialistica in un approccio multidisciplinare di prevenzione, diagnosi e cura.",
    topics: [
      ["Igiene e sanità pubblica", "Sorveglianza delle malattie prevenibili con vaccino, registro tumori, epidemiologia dell’antibiotico‑resistenza, sicurezza alimentare."],
      ["Malattie infettive", "HIV e comorbidità, epatiti croniche, infezioni multiresistenti, tubercolosi, malattie trasmesse da vettori."],
      ["Salute materno‑infantile", "Diagnosi pre e postnatale delle malformazioni, gravidanze a rischio, patologie neonatali, disturbi del neurosviluppo."],
      ["Medicina interna e metabolica", "Steatosi epatica, epatocarcinoma, celiachia, obesità e diabete, cardio‑oncologia, scompenso cardiaco."]
    ]
  },
  {
    abbr: "SAAF", name: "Scienze Agrarie, Alimentari e Forestali",
    link: "https://www.unipa.it/dipartimenti/saaf/",
    desc: "Ricerca di base e applicata nei settori agrario, zootecnico, forestale e ambientale, con un approccio che valorizza la biodiversità e i prodotti tipici del territorio.",
    kpi: [["6", "Laboratori"]],
    topics: [
      ["Colture e suolo", "Agronomia, colture erbacee, orticoltura e floricoltura, analisi del suolo, piante officinali."],
      ["Arboricoltura e foreste", "Selvicoltura, tecnologia del legno, micropropagazione, pomologia, post‑raccolta."],
      ["Difesa e biosistemi", "Patologia vegetale, entomologia, micologia, idraulica e meccanica agraria, costruzioni rurali."],
      ["Alimenti e produzioni animali", "Tecnologie alimentari, microbiologia agroalimentare, qualità dei prodotti, zootecnia e nutrizione animale."]
    ]
  }
];

window.CLUSTERS = [
  {
    e: "i-space", t: "Tecnologie quantistiche, astrofisica e fisica fondamentale",
    short: ["Educazione quantistica", "Fotonica e nanomateriali", "Astrofisica computazionale"],
    items: [
      ["Scienza quantistica e alta formazione", "Quantum literacy e sviluppo di competenze (<em>European Quantum Academy</em>, <em>Light‑Matter Engineering</em>)."],
      ["Fotonica e nanomateriali avanzati", "Nanocristalli monodispersi, ingegneria dei materiali e microlaser ad alte prestazioni."],
      ["Astrofisica computazionale e cosmologia", "Dinamica dei buchi neri e collisioni di stelle di neutroni; dati dell’Osservatorio Rubin per materia ed energia oscura (<em>Dark Universe</em>)."],
      ["Fisica delle particelle e adronica", "Esperimenti presso acceleratori e infrastrutture di ricerca di frontiera."]
    ]
  },
  {
    e: "i-dna", t: "Salute pubblica, antimicrobico‑resistenza e diagnostica cognitiva",
    short: ["Governance AMR Malta–Sicilia", "Oncologia preventiva", "Living lab per la salute digitale"],
    items: [
      ["Controllo delle infezioni transfrontaliero", "Strategie di governance dell’antimicrobico‑resistenza (<em>Malta &amp; Sicily AMR Governance</em>)."],
      ["Oncologia preventiva", "Modelli epidemiologici e interventi per i tumori legati alle infezioni."],
      ["Valutazione cognitiva", "Strumenti multimodali adattivi per la diagnosi neurocognitiva."],
      ["Radioprotezione in età pediatrica", "Giustificazione e ottimizzazione dell’esposizione medica nei giovani."],
      ["Salute digitale e di comunità", "Tecnologie digitali nelle cure primarie tramite <em>Living Lab</em> partecipativi."]
    ]
  },
  {
    e: "i-bio", t: "Resilienza climatica, agricoltura sostenibile ed ecosistemi urbani",
    short: ["Riforestazione urbana", "Agronomia resiliente", "Acquacoltura biofloc"],
    items: [
      ["Riforestazione urbana e NBS", "Strategie trans‑urbane di riforestazione e adattamento climatico (<em>Trans‑urban Reforestation</em>)."],
      ["Agronomia climate‑resilient", "Pratiche ecosistemiche per colture resilienti, es. il pomodoro."],
      ["Filiere agro‑alimentari", "Valore e gestione sostenibile nel settore olivicolo e degli oli (<em>From Commodity to Values</em>, <em>Edible Oils Bio‑recovery</em>)."],
      ["Acquacoltura sostenibile", "Tecnologia Biofloc per allevamenti acquatici circolari a basso impatto."]
    ]
  },
  {
    e: "i-circ", t: "Economia circolare, materiali bio‑based e recupero di risorse",
    short: ["Film pacciamanti biodegradabili", "Membrane e biotecnologie", "Riciclo partecipato"],
    items: [
      ["Materiali agricoli bio‑based", "Film pacciamanti funzionalizzati e biodegradabili per l’orticoltura."],
      ["Upcycling industriale", "Membrane avanzate e biotecnologie a basse emissioni per il recupero da sottoprodotti."],
      ["Circolarità nel costruito", "Economia circolare e solidale nell’ambiente costruito."],
      ["Riciclo partecipato", "Reti di riciclo locali e internazionali che coinvolgono le comunità."]
    ]
  },
  {
    e: "i-ai", t: "Data science, digital twin e difesa della democrazia",
    short: ["SoBigData", "Digital twin del patrimonio", "Contrasto alla disinformazione"],
    items: [
      ["Infrastrutture big data e open data", "Piattaforme distribuite (<em>SoBigData</em>) e protocolli di scambio di dati ambientali (<em>Water Data Exchange</em>)."],
      ["Digital twin e patrimonio", "Gemelli digitali ibridi per diagnosi e conservazione del costruito storico."],
      ["Integrità dell’informazione", "Contrasto a disinformazione e interferenze straniere, media literacy, tutela del dibattito democratico."]
    ]
  },
  {
    e: "i-heritage", t: "Digital humanities, patrimonio culturale e storia della scienza",
    short: ["Farmacologia medievale", "Teatri e santuari antichi"],
    items: [
      ["Analisi storico‑scientifica e filosofica", "Testi medici e farmacologici medievali studiati con strumenti logici e metafisici formali."],
      ["Archeologia degli spazi performativi", "Teatri e santuari antichi e sostenibilità socio‑culturale."]
    ]
  },
  {
    e: "i-energy", t: "Trasferimento dell’innovazione e reti istituzionali",
    short: ["Incubazione e accelerazione", "Reti europee"],
    items: [
      ["Trasferimento tecnologico", "Innovation relay, incubazione, sviluppo d’impresa e strategie di crescita per le tecnologie emergenti."],
      ["Reti e cooperazione transfrontaliera", "Reti multi‑stakeholder nazionali ed europee (es. EJN) e partenariati strategici."]
    ]
  },
  {
    e: "i-onehealth", t: "Competenze trasversali e metodologiche",
    short: ["One Health", "Co‑design partecipato", "Leadership di consorzi UE"],
    items: [
      ["One Health e sistemi socio‑ecologici", "Salute umana, ambiente, agricoltura e materiali in un unico quadro di sostenibilità."],
      ["Ricerca multidisciplinare", "Scienze dure, biotecnologie, discipline sociali, digitali e sanitarie integrate."],
      ["Co‑design e partecipazione civica", "Living lab, iniziative di riciclo di comunità, campagne di empowerment."],
      ["Leadership di consorzi europei", "Gestione di grandi reti transnazionali e progetti dei programmi quadro UE."]
    ]
  }
];

/* Progetti in evidenza (fonte: mappa competenze e presentazione dipartimenti) */
window.SHOWCASE = [
  { tag: "Salute · PNRR", c: "terra", t: "HEAL ITALIA", d: "Alleanza nazionale per terapie innovative, ricerca di laboratorio avanzata e medicina di precisione. UniPa è capofila." },
  { tag: "Quantum", c: "mare", t: "European Quantum Academy", d: "Quantum literacy, alta formazione e sviluppo di competenze per le tecnologie quantistiche." },
  { tag: "Astrofisica", c: "mare", t: "Dark Universe", d: "Modelli di buchi neri e stelle di neutroni e dati dell’Osservatorio Rubin per indagare materia ed energia oscura." },
  { tag: "Salute pubblica", c: "terra", t: "Malta & Sicily AMR Governance", d: "Governance transfrontaliera dell’antimicrobico‑resistenza e controllo delle infezioni tra Sicilia e Malta." },
  { tag: "Clima e città", c: "ocra", t: "Trans‑urban Reforestation", d: "Riforestazione urbana e soluzioni basate sulla natura per l’adattamento climatico delle città." },
  { tag: "Dati", c: "mare", t: "SoBigData", d: "Infrastruttura europea distribuita per big data e scienza sociale dei dati." },
  { tag: "Agroalimentare", c: "ocra", t: "From Commodity to Values", d: "Valore e sostenibilità nella filiera dell’olio d’oliva, con il bio‑recupero degli oli alimentari." },
  { tag: "Prevenzione", c: "terra", t: "DARE", d: "Digital lifelong prevention: prevenzione digitale lungo tutto l’arco della vita." },
  { tag: "Oncologia", c: "terra", t: "Biopsia liquida ed epatocarcinoma", d: "Un nuovo paradigma post‑genomico per la diagnosi del tumore del fegato." }
];
