/* Contenuti del sito. Modificare qui testi di aree, dipartimenti e cluster. */

window.AREAS = [
  { icon: "i-bio", t: "Biodiversità ed ecosistemi", d: "Monitoraggio e conservazione, biologia ed ecologia marina, restauro degli ecosistemi, tassonomia e filogenesi, GIS, microbiologia e biotecnologie ambientali." },
  { icon: "i-clima", t: "Clima e resilienza", d: "Impatti climatici su mare, coste e acque interne, erosione costiera, processi idrologici, rischi naturali e soluzioni basate sulla natura." },
  { icon: "i-circ", t: "Economia circolare", d: "Trattamento di rifiuti e acque reflue, bonifica di suoli e sedimenti, recupero di materie prime seconde, chimica verde e Life Cycle Assessment." },
  { icon: "i-dna", t: "Salute e medicina di precisione", d: "Biologia molecolare e cellulare, genetica ed epigenetica, microbioma, scienze omiche, bioinformatica, medicina rigenerativa, biomateriali e ingegneria tissutale, neuroscienze, oncologia, diagnostica innovativa, biopsia liquida, studi preclinici e clinici." },
  { icon: "i-onehealth", t: "One Health e invecchiamento sano", d: "Salute umana, animale e ambientale, prevenzione, nutrizione e stili di vita mediterranei, malattie infettive e neurodegenerative." },
  { icon: "i-mat", t: "Materiali e nanotecnologie", d: "Molecole e materiali innovativi per farmaci, energia, ambiente, biomedicina e beni culturali: nanomateriali, catalizzatori, drug delivery." },
  { icon: "i-energy", t: "Transizione energetica", d: "Rinnovabili, smart grid e comunità energetiche, mobilità sostenibile, accumulo, idrogeno, gradiente salino, fotovoltaico avanzato, fusione e fissione." },
  { icon: "i-ai", t: "Digitale e intelligenza artificiale", d: "Machine learning, computer vision, NLP, modelli generativi, big data, federated learning, robotica, cybersecurity, blockchain, IoT, cloud ed edge computing, digital twin, e‑health, interazione uomo‑macchina." },
  { icon: "i-infra", t: "Infrastrutture e mobilità", d: "Monitoraggio strutturale, resilienza sismica, materiali da costruzione innovativi, trasporti sostenibili, veicoli autonomi, infrastrutture critiche." },
  { icon: "i-space", t: "Matematica, fisica e spazio", d: "Modellistica matematica, analisi numerica, statistica, sistemi complessi, scienze e tecnologie quantistiche, fotonica, biofisica, fisica dei materiali, astrofisica, space weather, strumentazione avanzata." },
  { icon: "i-soc", t: "Società, economia e governance", d: "Sviluppo sostenibile, resilienza economica e finanziaria, competitività territoriale, economia del clima, politiche pubbliche e governance, inclusione, migrazioni, disuguaglianze, studi di genere, cooperazione euro‑mediterranea." },
  { icon: "i-heritage", t: "Patrimonio e scienze umane", d: "Archeologia, digitalizzazione del patrimonio, archeologia virtuale, digital humanities, lingue, studi culturali, comunicazione, memoria e storia del Mediterraneo, dimensione sociale e culturale del cambiamento ambientale." }
];

window.DEPTS = [
  {
    abbr: "STEBICEF", name: "Scienze e Tecnologie Biologiche, Chimiche e Farmaceutiche",
    link: "https://www.unipa.it/dipartimenti/stebicef/",
    desc: "Dalla fisiologia alla chimica farmaceutica, dalla biologia marina alle tecnologie ambientali: un dipartimento che progetta molecole, studia processi biologici e valorizza le risorse.",
    kpi: [["2800+", "Pubblicazioni"], ["160+", "Progetti"], ["30+", "Brevetti"], ["3", "Spin‑off"]],
    topics: [
      ["Molecole, materiali e matrici", "Nuovi farmaci e sistemi di rilascio, catalizzatori, sintesi organica, chimica verde, prodotti naturali, chimica supramolecolare, soft matter, materiali per l’energia, metodi computazionali, materiali ibridi, spettroscopia e analisi per i beni culturali."],
      ["Ambiente e valorizzazione", "Monitoraggio di flora e fauna, tutela del paesaggio, biodiversità, blue economy, valutazione dei rifiuti, metodi di estrazione e purificazione, fortificazione degli alimenti, materie prime e seconde dai rifiuti, Life Cycle Assessment."],
      ["Processi biologici", "Colture cellulari, oncologia, biotecnologie, neuroscienze, malattie genetiche, epigenetica, biomateriali, ingegneria tissutale, metabolomica e proteomica, biorisanamento, microbiologia ambientale, microbioma, paleoecologia, nutraceutica, bioinformatica, medicina personalizzata."],
      ["Studi preclinici e clinici", "Saggi biochimici, tossicità, attività antiossidante, studi in vitro, in vivo ed ex vivo, attività mutagena, modelli animali, studi sull’uomo."],
      ["Discipline", "Fisiologia, zoologia, anatomia, antropologia, biochimica, biologia molecolare e applicata, farmacologia, genetica, microbiologia, chimica analitica, fisica, inorganica, organica, industriale e farmaceutica, tecnologie farmaceutiche, chimica degli alimenti, dell’ambiente e dei beni culturali, paleontologia, patologia, scienze dietetiche, ecologia, biologia della conservazione, filogenesi e sistematica, biologia marina, GIS."]
    ]
  },
  {
    abbr: "DMI", name: "Matematica e Informatica",
    link: "https://www.unipa.it/dipartimenti/matematicaeinformatica/",
    desc: "48 docenti e ricercatori con una ricerca multidisciplinare e spesso interdisciplinare in matematica e informatica.",
    kpi: [["48", "Docenti e ricercatori"]],
    topics: [
      ["Algebra e geometria", "Identità polinomiali, teoria delle categorie e algebra categoriale, teoria di Lie, geometria algebrica, varietà e Grassmanniane."],
      ["Analisi e fisica matematica", "Analisi funzionale e teoria degli operatori, teoria della misura e integrazione, equazioni alle derivate parziali, sistemi di reazione‑diffusione, fluidodinamica, sistemi dinamici e meccanica celeste, meccanica statistica."],
      ["Logica e probabilità", "Logica dei condizionali, probabilità coerente, ragionamento in condizioni di incertezza, entropia e regole di scoring."],
      ["Informatica e intelligenza artificiale", "Problemi combinatori e algoritmici, estrazione di conoscenza dai dati, deep learning, imaging medico, health informatics, computer vision, interazione multisensoriale."],
      ["Analisi numerica", "Metodi numerici e computazionali, approssimazione e soluzione numerica di equazioni differenziali."],
      ["Storia, filosofia e didattica", "Storia e filosofia della matematica, didattica della matematica, soft computing e logica fuzzy, economia politica."]
    ],
  },
  {
    abbr: "DiSTeM", name: "Scienze della Terra e del Mare",
    link: "https://www.unipa.it/dipartimenti/distem/",
    desc: "Ricerca fondamentale e applicata per capire come interagiscono le componenti biotiche e abiotiche del pianeta, con trasferimento tecnologico verso PMI e istituzioni.",
    topics: [
      ["Ecosistemi e biodiversità", "Ecosistemi marini e terrestri, biodiversità e funzionamento degli ecosistemi, paleoambienti."],
      ["Pesca e acquacoltura", "Produttività degli ecosistemi, vulnerabilità ai fattori antropici, pesca e acquacoltura."],
      ["Rischi naturali e clima", "Monitoraggio dei rischi naturali e degli effetti dei cambiamenti climatici."],
      ["Georisorse", "Esplorazione, gestione e conservazione delle risorse geologiche."],
      ["Organismi e cambiamento ambientale", "Effetti dei fattori antropici e del cambiamento ambientale sulle risposte biologiche ed ecologiche; biomarcatori e risposte adattative per valutare la qualità degli ecosistemi."],
      ["Dalla biodiversità alla salute", "Molecole con potenziale biotecnologico per la salute umana, antibiotico‑resistenza, rigenerazione tissutale; dagli organismi agli ecosistemi alla salute umana (priorità OMS)."]
    ]
  },
  {
    abbr: "DI", name: "Ingegneria",
    link: "https://www.unipa.it/dipartimenti/ingegneria/",
    desc: "Sei sezioni di ricerca che coprono l’intero spettro dell’ingegneria: dai materiali all’energia, dall’AI alle infrastrutture.",
    topics: [
      ["Chimica, materiali e idraulica", "Materiali per dispositivi elettrochimici, ingegneria tissutale, protezione dei beni culturali, biopolimeri; energia da gradiente salino, celle a combustibile, metalli dai rifiuti, fluidodinamica computazionale; dispositivi idroelettrici e gestione delle reti idriche."],
      ["Acqua, clima e ambiente", "Interazione acqua‑sedimenti‑biota negli ecosistemi fluviali, trattamento di acque reflue e fanghi, bonifica di suoli e sedimenti marini; enhanced weathering, erosione costiera, soluzioni basate sulla natura, fabbisogni irrigui, monitoraggio fluviale, effetti combinati alluvioni‑temperatura e temperatura‑incendi boschivi."],
      ["Strutture e infrastrutture", "Modellazione di materiali, edifici, strutture e terreni; rinforzo sismico con FRP e FRCM; monitoraggio strutturale di edifici, ponti e beni culturali anche dopo terremoti o esplosioni; pianificazione dei trasporti stradali, ferroviari, marittimi e aerei; asfalto con gomma riciclata (Rub‑RAP); terra cruda stampata in 3D."],
      ["Ingegneria informatica", "IA per computer vision, linguaggio naturale, medicina di precisione, modelli generativi, tracciamento multi‑oggetto, chatbot, diagnosi del tumore al seno ed e‑health; cybersecurity, blockchain, crittoanalisi, voto elettronico; federated learning e crowdsourcing; interazione uomo‑macchina; robotica swarm, quantistica e cognitiva."],
      ["Meccanica, gestionale e aerospaziale", "Imprenditorialità scientifica, gestione dell’innovazione e trasformazione digitale, transizione ecologica, materiali per aerospazio, meccanica e biomedicina, sistemi di produzione cyber‑fisici, manifattura digitale."],
      ["Elettronica, fisica e matematica", "Mobilità intelligente e veicoli autonomi terrestri, marini e aerei; sensori per parametri vitali, robotica riabilitativa, imaging ottico cerebrale; nanoelettronica, memorie resistive, fotovoltaico; reti del futuro: IoT, LoRa, luce visibile, 5G e 6G, superfici intelligenti, onde millimetriche e THz, comunicazioni subacquee, cloud ed edge; tecnologie quantistiche e fusione nucleare; matematica pura e applicata."],
      ["Energia", "Smart grid e smart building, rinnovabili, mobilità elettrica, transizione energetica delle isole minori, comunità energetiche e microreti; power quality ed efficienza; misure e diagnostica, compatibilità elettromagnetica; poligenerazione, reti di teleriscaldamento e pompe di calore; reattori a fissione e fusione, sicurezza e radioprotezione."],
      ["Direzioni trasversali", "Fiducia, regolazione, inclusività e sostenibilità: monitoraggio delle infrastrutture critiche e dei consumi energetici, nuove politiche di regolazione, connettere chi non è connesso, istruzione ed e‑health per tutti, uso migliore delle risorse naturali."]
    ]
  },
  {
    abbr: "DiFC", name: "Fisica e Chimica “Emilio Segrè”",
    link: "https://www.unipa.it/dipartimenti/difc/",
    desc: "Ricerca fondamentale e applicata in fisica e chimica, dall’infinitamente piccolo alle stelle.",
    topics: [
      ["Fisica sperimentale", "Materia condensata, biofisica, soft matter, fisica nucleare e delle particelle elementari, nanofisica, fisica ultraveloce, scienza dei materiali, fotonica e biofotonica, elettronica, materiali 2D."],
      ["Fisica teorica", "Ottica ed elettrodinamica quantistica, termodinamica quantistica, sistemi complessi, tecnologie quantistiche, sistemi quantistici aperti, IA quantistica, fisica a molti corpi, campi quantistici in spazio‑tempo curvo, materia oscura e assioni."],
      ["Astrofisica", "Astronomia X e delle alte energie, binarie X, pulsar, resti di supernova, raggi cosmici, astroparticelle, fisica solare, esopianeti, attività magnetica stellare, formazione stellare, space weather, strumentazione X e missioni spaziali."],
      ["Fisica applicata", "Fisica computazionale, fisica applicata alla medicina, rivelatori a semiconduttore per radiazioni ionizzanti, analisi di immagini, econofisica, sistemi e reti complesse, sviluppo di biomateriali."],
      ["Didattica e storia della fisica", "Metodologie di insegnamento e apprendimento, collezioni storiche di strumenti scientifici."],
      ["Chimica", "Chimica sperimentale dei materiali e dei nanomateriali; chimica teorica e computazionale, catalisi, spettroscopia molecolare; chimica applicata ai beni culturali, chimica bioinorganica."]
    ]
  },
  {
    abbr: "Bi.N.D.", name: "Biomedicina, Neuroscienze e Diagnostica avanzata",
    link: "https://www.unipa.it/dipartimenti/bi.n.d./",
    desc: "Ricerca clinica e traslazionale, con progetti attivi in medicina di precisione, diagnostica e prevenzione.",
    topics: [
      ["HEAL ITALIA", "Alleanza nazionale per terapie innovative, ricerca di laboratorio avanzata e approcci integrati di medicina di precisione."],
      ["Salute riproduttiva", "Potenziale riproduttivo femminile nei mammiferi: recupero della riserva ovarica e generazione di ovociti e cellule della granulosa da cellule staminali mesenchimali."],
      ["Epatologia e oncologia", "Rete tra medicina generale e centri specialistici per la diagnosi di HBV/HDV; biopsia liquida ed epatocarcinoma; disuguaglianze di salute e determinanti sociali nell’epatocarcinoma in Sicilia."],
      ["Neuro‑cognizione", "Ipoacusia legata all’età e declino neuro‑cognitivo: dalla diagnosi precoce alla tele‑riabilitazione."],
      ["Prevenzione e diagnostica", "DARE – prevenzione digitale lungo tutta la vita; INNOVA – diagnostica avanzata."],
      ["Alimentazione mediterranea", "Longevità in salute con lo stile di vita mediterraneo; soluzioni tecnologiche per migliorare il cibo negli ambienti mediterranei (COMOCONSALUD‑VITORIA)."]
    ]
  },
  {
    abbr: "SEAS", name: "Scienze Economiche, Aziendali e Statistiche",
    link: "https://www.unipa.it/dipartimenti/seas/",
    desc: "Modelli quantitativi e analisi dei dati per comprendere economie, territori e società.",
    topics: [
      ["Sostenibilità e fragilità finanziaria", "Modelli quantitativi per la sostenibilità finanziaria di Stati, famiglie e imprese sotto shock climatici, pandemici e sociali; crisi e fragilità finanziaria."],
      ["Reti complesse", "Analisi di rete dei sistemi finanziari, sociali e biologici."],
      ["Territori e imprese", "Analisi di dati economici regionali e spaziali, performance e competitività di territori e imprese, turismo ed economia regionale."],
      ["Statistica avanzata", "Processi spazio‑temporali complessi, inferenza sparsa in modelli ad alta dimensionalità, statistica bayesiana e modelli grafici, dati di preferenza e ranking di consenso."],
      ["Percorsi di vita", "Transizione scuola‑università‑lavoro studiata con metodi statistici di life course analysis."],
      ["Economia, salute e istituzioni", "Invecchiamento della popolazione, economia sanitaria, effetti delle pandemie sulle disuguaglianze, economia del cambiamento climatico, crescita e sviluppo, ruolo delle istituzioni, politica monetaria e spesa pubblica."]
    ]
  },
  {
    abbr: "DEMS", name: "Scienze Politiche e delle Relazioni Internazionali",
    link: "https://www.unipa.it/dipartimenti/dems/",
    desc: "Il filo comune: le interazioni tra istituzioni – formali e informali – e il loro contesto sociale, nelle aree ERC delle scienze sociali e umane.",
    topics: [
      ["Mediterraneo ed Europa", "Trasformazioni giuridiche, religiose e culturali nel Mediterraneo moderno e contemporaneo; costruzione, crisi e ridefinizione dei sistemi politici, economici e sociali europei tra XIX e XX secolo."],
      ["Istituzioni e politica", "Evoluzione dei sistemi e delle istituzioni politiche nazionali e internazionali; potere, partecipazione e interpretazioni critiche contemporanee."],
      ["Diritto, impresa e pubblica amministrazione", "Giustizia riparativa e ADR, responsabilità penale d’impresa e responsabilità sociale, fiscalità internazionale delle multinazionali; PNRR, lavoro nelle pubbliche amministrazioni e intervento pubblico nell’economia."],
      ["Diritti e inclusione", "Migrazioni, multiculturalismo, disuguaglianze e marginalità; diritti fondamentali e inclusione nelle decisioni delle corti nazionali e sovranazionali; diversità di genere nelle organizzazioni pubbliche e private."],
      ["Sostenibilità e istituzioni", "Clima, innovazione, efficienza energetica, comunità energetiche, smart city e performance management; modelli dinamici per la sostenibilità nel settore sanitario e valutazione nel settore culturale."],
      ["Lingue e traduzione", "Inglese giuridico: analisi dei generi testuali in contesti multilingui europei e internazionali; lingua francese: studi di traduzione, storia e tecniche nelle discipline umanistiche e artistiche."],
      ["Storia economica", "Pensiero economico americano: economia ed eugenetica, divario di genere tra le due guerre; storia del sistema bancario italiano."]
    ]
  },
  {
    abbr: "SUM", name: "Scienze Umanistiche",
    link: "https://www.unipa.it/dipartimenti/scienzeumanistiche/",
    desc: "Filosofia, letterature, lingue e arti come strumenti per leggere il presente.",
    topics: [
      ["Filosofia e teoria critica", "Logica e conoscenza, metafisica, fenomenologia, ontologia, linguaggi formali, emozioni e desiderio, potere e linguaggio, teoria critica dei modelli sociali, etica pubblica, teoria del cinema."],
      ["Tecnica e ambiente", "Intelligenza artificiale, pensiero ecologico, paesaggio sonoro, digital humanities."],
      ["Musica e cultura visuale", "Tradizioni musicali, etnologia, fotografia, video‑arte, storia dell’arte, teatro, musica e cinema."],
      ["Confini e spazi nelle lingue e letterature", "Studi di traduzione e transfer culturale, studi di genere e delle donne, multiculturalismo, migrazioni, media studies, lingue minoritarie, geografie letterarie, lessico e cultura dialettale siciliana, scrittori siciliani."],
      ["Memoria, ideologia e conflitto", "Storia, memoria e guerra nella letteratura, censura, politica e ideologia, lingue e politica, identità e letteratura nazionale, miti nelle letterature contemporanee, criminalità e violenza politica, fonti diplomatiche, commercio nel Mediterraneo."],
      ["Teoria e critica letteraria", "Analisi del discorso e dei generi, critica genetica, ecocritica, studi classici, letteratura latina, eredità dei classici nella cultura contemporanea."],
      ["Linguistica", "Linguistica applicata, analisi contrastiva, lessicologia e lessicografia, linguistica cognitiva, pragmatica, retorica, enattivismo, intercomprensione, grammatica italiana, sociolinguistica."],
      ["Teorie della didattica", "Metodi di insegnamento delle lingue, didattica della letteratura, italiano come lingua seconda e straniera, neurodidattica."]
    ]
  },
  {
    abbr: "CULTURE", name: "Culture e Società",
    link: "https://www.unipa.it/dipartimenti/cultureesocieta/",
    desc: "Sei sezioni e cinque aree ERC per studiare culture e società: SH2 istituzioni, governance e sistemi giuridici; SH3 mondo sociale e diversità; SH5 culture e produzione culturale; SH6 studio del passato umano; SH7 mobilità umana, ambiente e spazio.",
    topics: [
      ["Patrimonio culturale", "Simbolismo rituale e cibo tradizionale nell’area euro‑mediterranea, storia del pensiero antropologico, approcci antropologici al degrado ambientale e al clima, archeologia del paesaggio, archeologia virtuale, digitalizzazione del patrimonio."],
      ["Filologia, linguistica e comunicazione", "IA, digital humanities, memoria culturale, albanologia, sociosemiotica di gastronomia, media, design, brand e spazi urbani, realtà virtuale."],
      ["Scienze umane, sociali e politiche", "Migrazioni, sociologia politica, governance, memoria, antropologia contemporanea, antropocene, genere, inclusione e discriminazione, ruolo delle donne, linguaggio politico, relazioni inter‑etniche, misurazione dell’identità etnica."],
      ["Studi culturali", "Visual studies, dinamiche culturali dell’antropocene, consapevolezza ecologica e sostenibilità, genere, media studies, svolta digitale."],
      ["Studi storici", "Crisi globali, storia religiosa, digital humanities, memoria e archivi, consenso e dissenso nell’Europa medievale, metodo della storia globale."],
      ["Mondo antico", "Linguaggio politico e rappresentazione del potere, testi medici greci antichi, medicina e gastronomia come saperi, democrazia deliberativa, retorica, storia delle emozioni, istituzioni della Grecia antica, letteratura latina medievale e umanistica."]
    ]
  },
  {
    abbr: "SPPEFF", name: "Scienze Psicologiche, Pedagogiche, dell’Esercizio Fisico e della Formazione",
    link: "https://www.unipa.it/dipartimenti/sc.psicol.pedag.edellaformazione/",
    desc: "Lo studio del comportamento umano in relazione continua con i contesti ecologici e biologici in cui si svolge.",
    topics: [
      ["Salute e benessere", "Prevenzione e promozione della salute lungo l’arco di vita, psicologia clinica, benessere organizzativo e stress lavoro‑correlato."],
      ["Persone, tecnologie e cittadinanza", "Competenze sociali e cittadinanza attiva, user experience e fattori umani, cyberpsicologia."],
      ["Neuroscienze e riabilitazione", "Protocolli di riabilitazione nelle malattie neurodegenerative con tecniche di neuromodulazione cerebrale non invasiva."],
      ["Sviluppo e misurazione", "Traiettorie di sviluppo tipiche e atipiche, disturbi del neurosviluppo, psicologia pediatrica, validazione psicometrica di scale psicologiche e neuropsicologiche."],
      ["Educazione e formazione", "Didattica scolastica e universitaria, formazione degli insegnanti, tecnologie educative, pedagogia della famiglia, qualità dei servizi educativi."],
      ["Movimento e sport", "Tecniche e metodi di attività motoria per tutte le età, programmi di attività fisica adattata."],
      ["Società e cultura", "Migrazioni e mobilità umana, vulnerabilità di rifugiati e richiedenti asilo, statistica del turismo, valutazione dei servizi sociali e sanitari, rapporto tra filosofia e psicologia, transizione alla modernità nella musica di area tedesca."]
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
