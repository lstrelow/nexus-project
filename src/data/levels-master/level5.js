export const ML5 = {
  intro: {
    charKey: "sophie",
    message: "Ich bin nicht zufällig als Enterprise Architektin zu NEXUS Corp gekommen. Es gibt eine ganze Disziplin dafür, wie man Systemlandschaften wie unsere systematisch gestaltet, dokumentiert und weiterentwickelt. Lassen Sie mich Ihnen zeigen, wie sich dieses Verständnis über die Jahrzehnte entwickelt hat und warum es für NEXUS Corp heute entscheidend ist.",
  },
  scenes: [
    {
      id: "m5_1", type: "definition", charKey: "sophie",
      charMessage: "Der Architekturbegriff, den wir heute verwenden, ist nicht vom Himmel gefallen. Er hat sich über sechzig Jahre entwickelt, von der einzelnen Software bis zum gesamten Unternehmen.",
      definition: {
        term: "Entwicklung des Architekturbegriffs",
        summary: "Der Architekturbegriff hat sich von der Software Architecture der 1960er über die IT Architecture der 1980er bis zur heutigen Enterprise Architecture entwickelt, mit jeweils erweitertem Betrachtungsgegenstand.",
        aspects: [
          { icon: "💻", title: "1960er: Software Architecture", text: "Frühe Definitionen umfassten die Attribute eines Systems aus Sicht des Programmierers: Modularität, Zuverlässigkeit, Konsistenz" },
          { icon: "🔗", title: "1980er: IT Architecture", text: "Business/IT-Alignment wurde zum zentralen Thema: Unternehmen mussten menschliche, organisatorische und technologische Aspekte aufeinander abstimmen" },
          { icon: "🏢", title: "Heute: Enterprise Architecture", text: "Alignment zwischen Business und IT allein reicht nicht mehr. Auch Unternehmensstruktur und strategische Ziele müssen einbezogen werden" },
          { icon: "❓", title: "Offene Frage", text: "Sollten Business und IT als Komponenten überhaupt noch getrennt betrachtet werden?" },
        ],
        nexusContext: "NEXUS Corp steht exemplarisch für diese Entwicklung: Die erste Transformation vor fünf Jahren dachte primär in IT-Architektur-Kategorien. Die heutige Herausforderung erfordert echte Enterprise Architecture, mit Blick auf Konzernstrategie, vier heterogene Organisationen und deren jeweilige IT.",
      },
      question: "Was ist der entscheidende konzeptionelle Unterschied zwischen 'IT Architecture' (1980er) und 'Enterprise Architecture' (heute)?",
      answers: [
        { text: "Enterprise Architecture beschäftigt sich ausschließlich mit Cloud-Technologien, IT Architecture mit On-Premise-Systemen, da sich beide Begriffe historisch entlang der jeweiligen Infrastrukturform entwickelt haben.", correct: false, feedback: "Der Unterschied liegt nicht in der eingesetzten Technologie, sondern im Betrachtungsumfang der Architektur." },
        { text: "Enterprise Architecture bezieht zusätzlich zur Business/IT-Abstimmung auch Unternehmensstruktur und strategische Ziele mit ein. IT Architecture fokussierte primär das Alignment zwischen Business und IT.", correct: true, feedback: "Genau. Die zentrale Erweiterung ist: Es reicht nicht, IT und Business aufeinander abzustimmen. Die gesamte Unternehmensstruktur und -strategie muss mitgedacht werden." },
        { text: "Es gibt keinen inhaltlichen Unterschied: beide Begriffe werden synonym verwendet und lediglich je nach akademischer Tradition unterschiedlich benannt.", correct: false, feedback: "Es gibt einen klaren konzeptionellen Entwicklungsschritt zwischen beiden Begriffen, wie die historische Entwicklung zeigt." },
      ],
    },
    {
      id: "m5_2", type: "definition", charKey: "sophie",
      charMessage: "Es gibt unzählige Definitionen von Enterprise Architecture in der Literatur. Drei davon sind besonders einflussreich, und sie zeigen unterschiedliche Schwerpunkte.",
      definition: {
        term: "Definitionen der Unternehmensarchitektur",
        summary: "Enterprise Architecture wird in der Literatur unterschiedlich akzentuiert: als strukturierte Sammlung von Plänen, als Zusammenwirken organisatorischer und technischer Aspekte, oder als Analyse und Dokumentation aus integrierter Perspektive.",
        aspects: [
          { icon: "📋", title: "Sammlung von Plänen", text: "Enterprise Architecture als strukturierte, aufeinander abgestimmte Sammlung von Plänen für die integrierte Darstellung der Business- und IT-Landschaft, in Vergangenheit, Gegenwart und Zukunft (Aier & Dogan, 2004, S. 81)" },
          { icon: "⚙️", title: "Zusammenwirken der Aspekte", text: "Erweiternd als Zusammenwirken organisatorischer, technischer und psychologischer Aspekte bei Planung und Entwicklung betrieblicher soziotechnischer Informationssysteme" },
          { icon: "🔍", title: "Analyse und Dokumentation", text: "Als Analyse und Dokumentation eines Unternehmens im aktuellen und zukünftigen Zustand aus integrierter Strategie-, Business- und Technologieperspektive (vgl. Simon, 2013, S. 2; in Anlehnung an Niemann, 2006; Bernard, 2005, S. 31)" },
        ],
        nexusContext: "Alle drei Definitionen betonen dasselbe Grundprinzip, das für NEXUS Corp entscheidend ist: Enterprise Architecture ist niemals nur Technik: sie verbindet Strategie, Organisation und IT-Landschaft in einem integrierten Verständnis.",
      },
      question: "Was haben alle drei vorgestellten EA-Definitionen trotz unterschiedlicher Formulierung gemeinsam?",
      answers: [
        { text: "Sie betrachten Enterprise Architecture ausschließlich als technisches IT-Dokumentationsprojekt.", correct: false, feedback: "Im Gegenteil: alle drei Definitionen betonen explizit organisatorische, strategische und teilweise sogar psychologische Aspekte, nicht nur die Technik." },
        { text: "Sie verstehen Enterprise Architecture als integrierte Betrachtung von Strategie, Organisation und Technologie, nicht als isoliertes IT-Thema.", correct: true, feedback: "Richtig. Ob als 'Sammlung von Plänen', 'Zusammenwirken der Aspekte' oder 'integrierte Perspektive' formuliert: Der gemeinsame Kern ist die Verbindung mehrerer Betrachtungsebenen." },
        { text: "Sie beziehen sich ausschließlich auf die Vergangenheit eines Unternehmens, nicht auf zukünftige Zustände.", correct: false, feedback: "Mindestens eine der Definitionen bezieht explizit 'past, current and future states' ein. Die Zukunftsperspektive ist zentraler Bestandteil des EA-Verständnisses." },
      ],
    },
    {
      id: "m5_3", type: "definition", charKey: "priya",
      charMessage: "Die klassische Wirtschaftsinformatik-Perspektive, wie wir sie in den ersten Jahren bei NEXUS Deutschland verfolgt haben, hatte einen sehr hohen Integrationsanspruch. Der ist heute kaum noch zu halten.",
      definition: {
        term: "Vom klassischen Integrationsanspruch zur Integrationsfähigkeit",
        summary: "Das klassische Paradigma forderte eine prozessorientierte Sicht über alle Funktionen, bei der Daten unternehmensweit einheitlich, redundanzfrei erfasst und verarbeitet werden. Funktionseigene Datenhaltung sollte technische Dateninkonsistenz von vornherein ausschließen.",
        aspects: [
          { icon: "🎯", title: "Klassisches Paradigma (Scheer)", text: "Prozessorientierte Sicht über alle Funktionen: Datendefinitionen unternehmensweit einheitlich festgelegt, redundanzfrei erfasst" },
          { icon: "🔀", title: "Konvergenz von IT und Produkt", text: "Digitale Technologien sind heute selbst Teil des Produkts, nicht nur Unterstützungsfunktion (z.B. Car Configurator, IoT-vernetzte Geräte)" },
          { icon: "🌐", title: "Technologievielfalt", text: "Exorbitanter Zuwachs unterschiedlichster Technologien für spezialisierte Aufgaben: von einer relationalen SQL-Datenbank zu Document DBs, Graph DBs, Data Lakes" },
          { icon: "🔓", title: "Neues Leitprinzip: Integrationsfähigkeit", text: "Ein einzelner Standardsoftware- hersteller kann nicht mehr alle betrieblichen Aufgaben vordenken. Integrationsfähigkeit mit Drittsystemen wird zum Architekturprinzip" },
        ],
        nexusContext: "Für die S/4HANA-Konsolidierung bedeutet das: NEXUS Corp sollte nicht versuchen, wieder ein vollständig geschlossenes SAP-Ökosystem für alle vier Landesgesellschaften zu erzwingen, sondern eine offene, integrationsfähige Architektur mit dokumentierten Schnittstellen anstreben.",
      },
      question: "Warum ist der klassische Anspruch 'ein Standardsoftwarehersteller deckt alle betrieblichen Aufgaben ab' heute kaum noch haltbar?",
      answers: [
        { text: "Weil Standardsoftware grundsätzlich technisch minderwertig geworden ist und mit den Anforderungen moderner, spezialisierter Fachanwendungen schlicht nicht mehr mithalten kann.", correct: false, feedback: "Die Qualität der Standardsoftware ist nicht das Problem. Die Ursache liegt in der Konvergenz von IT und Produkt sowie der enormen Technologievielfalt." },
        { text: "Weil IT-Systeme heute selbst Teil wettbewerbsdifferenzierender Produkte sind und die Technologievielfalt so groß geworden ist, dass kein einzelner Hersteller alle Anforderungen antizipieren kann.", correct: true, feedback: "Genau. Beide Beobachtungen zusammen, Konvergenz von Produkt und IT sowie explodierende Technologievielfalt, führen dazu, dass Integrationsfähigkeit statt vollständiger Integration zum realistischen Architekturprinzip wird." },
        { text: "Weil Unternehmen grundsätzlich keine Standardsoftware mehr einsetzen wollen.", correct: false, feedback: "Standardsoftware bleibt weiterhin zentral. Die Verschiebung betrifft den Integrationsanspruch, nicht die grundsätzliche Nutzung von Standardsoftware." },
      ],
    },
    {
      id: "m5_4", type: "definition", charKey: "sophie",
      charMessage: "Enterprise Architecture zu betreiben bedeutet nicht nur, ein schönes Zielbild zu malen. Es gibt sechs konkrete Aufgabenfelder, die kontinuierlich bearbeitet werden müssen.",
      definition: {
        term: "Aufgaben des Enterprise Architecture Managements",
        summary: "EAM umfasst sechs zusammenhängende Aufgabenfelder, von der Dokumentation der Ist-Architektur bis zur Governance, die die Umsetzung EA-konformer Entscheidungen überprüft.",
        aspects: [
          { icon: "📄", title: "1. Dokumentation", text: "Erfassung und Beschreibung der IST-Architektur, meist gegliedert in Abstraktionsebenen. Herausforderung: fehleranfällige, zeitintensive manuelle Erstellung" },
          { icon: "🗺️", title: "2. Planung", text: "Entwicklung der SOLL-Architektur für verschiedene Zeithorizonte. Herausforderung: unerwartete organisatorische Änderungen erfordern teure Neuplanung" },
          { icon: "📐", title: "3. Programmierung", text: "Definition von Architekturregeln und -standards: z.B. Architekturprinzipien, technische Standards, Entwicklungsrichtlinien" },
          { icon: "🔧", title: "4. Implementierung", text: "Umsetzung von Systemänderungen, z.B. Systemkonsolidierung. Herausforderung: fehlende Skills oder Ressourcen" },
          { icon: "💬", title: "5. Kommunikation & Unterstützung", text: "Information der Stakeholder über EA-bezogene Themen und Unterstützung bei der Umsetzung EA-konformer Projekte" },
          { icon: "⚖️", title: "6. Governance", text: "Überprüft die Umsetzung EA-definierter Entscheidungen: z.B. durch formale Prüfungs- und Genehmigungsprozesse" },
        ],
        nexusContext: "Bei NEXUS Corp fehlt aktuell fast jede dieser sechs Aufgaben in strukturierter Form: keine vollständige IST-Dokumentation, keine abgestimmte SOLL-Architektur, keine verbindlichen Standards, keine Governance-Instanz für Systementscheidungen.",
      },
      question: "Sophie stellt fest: 'Ich kann die SOLL-Architektur für S/4HANA nicht seriös planen, weil wir keine vollständige Dokumentation der IST-Architektur haben.' Was zeigt diese Aussage?",
      answers: [
        { text: "Dass Dokumentation und Planung völlig unabhängige, austauschbare Aufgaben sind.", correct: false, feedback: "Das Gegenteil zeigt Sophies Aussage: Beide Aufgaben stehen in einer klaren Abhängigkeit zueinander." },
        { text: "Dass die sechs EAM-Aufgabenfelder aufeinander aufbauen: eine unvollständige Dokumentation untergräbt direkt die Qualität der nachfolgenden Planung.", correct: true, feedback: "Genau. Die Aufgabenfelder sind keine isolierten Checklisten-Punkte, sondern bauen logisch aufeinander auf. Ohne solide IST-Dokumentation bleibt jede SOLL-Planung spekulativ." },
        { text: "Dass Sophie ihre Aufgabe nicht richtig verstanden hat, da Planung immer vor Dokumentation erfolgen sollte.", correct: false, feedback: "Die übliche Reihenfolge ist genau umgekehrt: Eine fundierte IST-Dokumentation ist die Voraussetzung für eine belastbare SOLL-Planung." },
      ],
    },
    {
      id: "m5_5", type: "definition", charKey: "sophie",
      charMessage: "In der Praxis existieren zahlreiche EAM-Frameworks, manche akademischen, manche praxisorientierten Ursprungs. Die beiden bekanntesten sind TOGAF und Zachman.",
      definition: {
        term: "EAM-Frameworks: TOGAF und Zachman",
        summary: "TOGAF (The Open Group, o.J.) und das Zachman Framework (Zachman, 1997) sind die verbreitetsten praxisorientierten EAM-Frameworks. Beide werden jedoch für ähnliche Schwächen kritisiert: geringer Detailgrad, fehlende Umsetzungsmethoden, kaum empirische Evidenz für erfolgreiche Umsetzung.",
        aspects: [
          { icon: "🌍", title: "TOGAF: Marktanteil", text: "11-33 % Marktanteil je nach Studie: bietet primär Zielvorgaben, aber keine konkreten Umsetzungsmethoden" },
          { icon: "📊", title: "Zachman: Marktanteil", text: "22-25 % Marktanteil: strukturiert Architektur nach Perspektiven, ebenfalls mit geringem Detailgrad kritisiert" },
          { icon: "⚠️", title: "Gemeinsame Kritikpunkte", text: "Keine Umsetzungsmethoden, zu generisch, keine empirischen Studien, wenig Beispiele für erfolgreiche Umsetzung in der Praxis" },
          { icon: "🧩", title: "Gemeinsame Ebenen", text: "Trotz unterschiedlicher Begrifflichkeit lassen sich aus beiden Frameworks vergleichbare Ebenen ableiten: Geschäfts-, Applikations-, Technologiearchitektur" },
        ],
        nexusContext: "Für NEXUS Corp ist die Kritik an TOGAF und Zachman hoch relevant: Beide Frameworks würden zwar eine grobe Orientierung bieten, aber keine konkrete Methodik, wie die vier heterogenen NEXUS-Landesgesellschaften praktisch konsolidiert werden sollen.",
      },
      question: "Warum reicht die Wahl eines etablierten Frameworks wie TOGAF allein nicht aus, um die NEXUS-Konsolidierung erfolgreich zu gestalten?",
      answers: [
        { text: "Weil TOGAF ausschließlich für Cloud-native Unternehmen konzipiert ist und für NEXUS Corp nicht anwendbar wäre.", correct: false, feedback: "TOGAF ist nicht auf Cloud-native Unternehmen beschränkt. Die Kritik betrifft den generellen Detailgrad und die fehlenden Umsetzungsmethoden, unabhängig von der Zielarchitektur." },
        { text: "Weil TOGAF laut Kritik primär Zielvorgaben, aber kaum konkrete Umsetzungsmethoden bietet: NEXUS Corp bräuchte für die praktische Konsolidierung zusätzliche, konkretere methodische Unterstützung.", correct: true, feedback: "Genau. Die Kritik an TOGAF und Zachman zeigt: Frameworks liefern eine wertvolle strukturelle Orientierung, aber keine Blaupause für die konkrete Umsetzung. Die muss NEXUS Corp selbst entwickeln." },
        { text: "Weil TOGAF keinen nennenswerten Marktanteil hat und daher irrelevant für die Praxis ist, da sich in der Unternehmenswelt längst proprietäre Eigenentwicklungen durchgesetzt haben.", correct: false, feedback: "Mit 11-33% Marktanteil ist TOGAF eines der verbreitetsten Frameworks überhaupt. Der Kritikpunkt betrifft die inhaltliche Tiefe, nicht die Verbreitung." },
      ],
    },
    {
      id: "m5_6", type: "matching", charKey: "sophie",
      charMessage: "Aus dem Vergleich verschiedener EAM-Frameworks lässt sich ein gemeinsames Ebenenmodell ableiten, das wir für NEXUS Corp als Referenzrahmen nutzen. Ordnen Sie jede NEXUS-Aufgabe der richtigen Architekturebene zu.",
      instruction: "Klicken Sie zuerst eine Ebene, dann die passende Aufgabe.",
      pairs: [
        { situation: "Maya definiert die strategische Zielsetzung: 'Ein integrierter Konzern statt vier unabhängiger Silos bis 2028.'", term: "Geschäftsarchitektur" },
        { situation: "Priyas Team vereinheitlicht den Bestellprozess, der bei NEXUS Deutschland, France und Logistics aktuell komplett unterschiedlich abläuft.", term: "Prozessarchitektur" },
        { situation: "Sophie entscheidet, welche der drei bestehenden CRM-Lösungen als Zielsystem für den gesamten Konzern dienen soll.", term: "Applikationsarchitektur" },
        { situation: "Ein Entwicklerteam plant die konkrete Softwarelogistik für den SAP-Transportmanagement-Prozess zwischen Entwicklungs-, Test- und Produktivsystemen.", term: "Systemarchitektur" },
        { situation: "NEXUS Corp richtet ein neues Steuerungsgremium ein, das die Zusammenarbeit zwischen IT-Architektur-Team und den vier Landesgesellschaften koordiniert.", term: "Unternehmens- und Programmorganisation" },
      ],
    },
    {
      id: "m5_7", type: "reflection", charKey: "sophie",
      message: "Wir haben jetzt gesehen, dass Enterprise Architecture Management kein neues Konzept ist. Es hat eine sechzigjährige Entwicklungsgeschichte. Aber die grundlegende Herausforderung bleibt bestehen: Wie bringt man Struktur in eine gewachsene Systemlandschaft, ohne die Innovationsfähigkeit zu ersticken?",
      question: "Was ist die zentrale Spannung, die Enterprise Architecture Management bei NEXUS Corp navigieren muss?",
      answers: [
        { text: "Der Zielkonflikt zwischen einer stabilen, gut dokumentierten Architektur (Transparenz, Komplexitätsmanagement) und der Notwendigkeit, gleichzeitig Innovation und Veränderung zuzulassen.", correct: true, feedback: "Ausgezeichnet. Enterprise Architecture muss stabil genug sein, um Komplexität zu managen, aber gleichzeitig offen genug bleiben, um innovative und architektonische Veränderungen zu ermöglichen. Dieser Balanceakt ist die Kernaufgabe von EAM." },
        { text: "Der Konflikt zwischen deutschem und französischem Recht bei der Datenverarbeitung.", correct: false, feedback: "Rechtliche Compliance ist ein wichtiges Detailthema, aber nicht die zentrale konzeptionelle Spannung des Enterprise Architecture Managements als Disziplin." },
        { text: "Der Konflikt zwischen SAP und Salesforce als Softwareanbietern, da die Wahl des Herstellers letztlich über Erfolg oder Misserfolg der gesamten Architekturstrategie entscheidet.", correct: false, feedback: "Die Wahl konkreter Anbieter ist eine nachgelagerte Entscheidung. Die zentrale Spannung liegt auf der konzeptionellen Ebene zwischen Stabilität und Veränderungsfähigkeit." },
      ],
    },
  ],
  outro: {
    charKey: "sophie",
    message: "Enterprise Architecture Management gibt uns die Struktur, um die NEXUS-Konsolidierung nicht dem Zufall zu überlassen. Als Nächstes wird es sehr konkret: Wir schauen uns an, wie sich eine ES-Einführungsstrategie mit Templates gestalten lässt und welche Grundstrategien für NEXUS Corp infrage kommen.",
    xp: 340,
    badge: "🏛️ Enterprise-Architektin",
  },
};
