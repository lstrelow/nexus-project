export const ML6 = {
  intro: {
    charKey: "priya",
    message: "Jetzt wird es konkret. Wir müssen entscheiden, wie wir die S/4HANA-Einführung über vier Landesgesellschaften hinweg organisieren. Sollen alle dasselbe System nutzen? Oder braucht jede Landesgesellschaft ihre eigene Lösung? Der Template-Ansatz gibt uns dafür einen strukturierten Entscheidungsrahmen.",
  },
  scenes: [
    {
      id: "m6_1", type: "definition", charKey: "priya",
      charMessage: "Bevor wir über Strategien sprechen, brauchen wir ein gemeinsames Verständnis: Was ist eigentlich ein Template im Kontext von Enterprise Systems?",
      definition: {
        term: "ES-Template",
        summary: "Ein Template ist allgemein eine Vorlage für wiederkehrende Zwecke. Im Sinne eines Enterprise Systems ist ein Template ein Modell oder Konzept zur Standardisierung von Prozessen, Funktionen und Daten, die in einem konkreten, physischen System implementiert werden.",
        aspects: [
          { icon: "📋", title: "Betriebswirtschaft- licher Kern", text: "Legt den geforderten prozessualen und objektbezogenen Standard fest: also WAS standardisiert werden soll" },
          { icon: "🖥️", title: "Technischer Systemkern", text: "Legt fest, welche technischen Elemente und Systeme zu einem Template gehören und welche nicht" },
          { icon: "🌍", title: "Zweck bei Large Enterprise Systems", text: "Ermöglicht effektiveren und effizienteren Roll-out einer Lösung auf viele Roll-out-Einheiten (Regionen, Länder, Kontinente)" },
          { icon: "🔧", title: "Mehr als ein technisches System", text: "Umfasst Prozesse, Stammdaten und Roll-out-Management (betriebswirtschaftlich) sowie Customizing, Entwicklung, Betrieb und Releasestrategie (technisch)" },
        ],
        nexusContext: "Für NEXUS Corp bedeutet das: Ein S/4HANA-Template müsste festlegen, welche Geschäftsprozesse (z.B. Bestellabwicklung) konzernweit einheitlich sein sollen und welche technischen Systemkomponenten dafür verbindlich sind, unabhängig davon ob NEXUS Deutschland, France, Logistics oder Parts das Template nutzt.",
      },
      question: "Für das S/4HANA-Template sind Plattform, Module und Customizing bereits festgelegt. Die Landesgesellschaften verwenden aber weiterhin unterschiedliche Definitionen dafür, wann ein Auftrag als 'geliefert' gilt. Was fehlt dem Template?",
      answers: [
        { text: "Eine einheitliche Integrationsinfrastruktur, über die die Landesgesellschaften ihre unterschiedlichen Lieferstatus automatisch untereinander austauschen können.", correct: false, feedback: "Eine Integrationsinfrastruktur kann Daten austauschen, aber keine unterschiedlichen Bedeutungen vereinheitlichen. Solange 'geliefert' in jeder Gesellschaft etwas anderes bedeutet, bleiben die ausgetauschten Daten inkonsistent." },
        { text: "Eine Lokalisierung, die die unterschiedlichen Lieferdefinitionen als landesspezifische Anforderungen im Template abbildet.", correct: false, feedback: "Lokalisierung betrifft Anforderungen wie Währung, Steuern oder Recht, die sich tatsächlich unterscheiden müssen. Unterschiedliche fachliche Definitionen desselben Geschäftsobjekts sind dagegen genau das, was ein Template standardisieren soll." },
        { text: "Der betriebswirtschaftliche Kern: Ohne gemeinsame Festlegung von Prozessen und Objektdefinitionen standardisiert das Template nur die Technik, nicht das, was in ihr abgebildet wird.", correct: true, feedback: "Genau. Der betriebswirtschaftliche Kern legt fest, was standardisiert wird, der technische Systemkern, womit. Ohne den ersten bleibt das Template eine einheitliche technische Hülle für weiterhin uneinheitliche Prozesse." },
      ],
    },
    {
      id: "m6_2", type: "definition", charKey: "priya",
      charMessage: "Wenn wir über die S/4HANA-Strategie für NEXUS Corp entscheiden, gibt es nicht nur eine Option. Es gibt vier grundlegende Strategien mit sehr unterschiedlichen Konsequenzen.",
      definition: {
        term: "Grundlegende Template-Strategien",
        summary: "Für den Template-Ansatz in großen Unternehmen existieren vier grundlegende Strategien: Independent Systems, Partial Template, Full Template und Global Single System, mit zunehmendem Grad an Vereinheitlichung.",
        aspects: [
          { icon: "🏝️", title: "Independent Systems", text: "Voneinander unabhängige Systeme für jeden Standort: lokale Anpassungen möglich, aber keine Synergieeffekte oder Wissenstransfer" },
          { icon: "📐", title: "Partial Template", text: "Allgemeingültiges Template als Vorlage mit Definition unveränderbarer Standards: ein Kompromiss zwischen lokaler Flexibilität und Standardisierung" },
          { icon: "🌐", title: "Full Template", text: "Ein gemeinsames Template für alle Standorte mit geringer Anpassung an lokale Besonderheiten: Synergieeffekte und Wissenstransfer möglich" },
          { icon: "1️⃣", title: "Global Single System", text: "Ein einziges Template für alle Systeme: Anpassungen kaum möglich, aber maximale Synergieeffekte" },
        ],
        nexusContext: "Für NEXUS Corp mit vier sehr unterschiedlichen Landesgesellschaften (etabliertes SAP in Deutschland, veraltetes ECC in Frankreich, cloud-natives WMS bei Logistics, Nischenlösung bei Parts) ist die Wahl der richtigen Strategie eine der wichtigsten Entscheidungen der gesamten Transformation.",
      },
      question: "Für NEXUS Corp wird ein Global Single System diskutiert. Welches Argument spricht in der konkreten NEXUS-Situation am stärksten gegen diese Strategie?",
      answers: [
        { text: "Die Lizenz- und Betriebskosten eines einzigen globalen Systems, die bei vier Landesgesellschaften die Kosten unabhängiger Systeme deutlich übersteigen würden.", correct: false, feedback: "Ein Global Single System senkt durch Synergien bei Betrieb, Wartung und Releasewechseln in der Regel die Kosten. Die Kosten sind deshalb nicht das stärkste Gegenargument." },
        { text: "Die stark unterschiedlichen Geschäftsmodelle von Logistics und Parts: Ein einziges Template lässt kaum Anpassungen zu, sodass Besonderheiten wie der Ersatzteilkatalog verloren gingen oder außerhalb des Systems umgangen würden.", correct: true, feedback: "Genau. Der Preis maximaler Synergien ist minimale Anpassungsfähigkeit. Bei Landesgesellschaften mit grundlegend unterschiedlichen Geschäftsmodellen führt das entweder zum Verlust geschäftskritischer Funktionen oder zu Schattenlösungen außerhalb des Systems." },
        { text: "Der fehlende Wissenstransfer, da in einem Global Single System jede Landesgesellschaft isoliert in ihrem eigenen Systembereich arbeitet.", correct: false, feedback: "Hier ist die Logik umgekehrt: Ein Global Single System maximiert Wissenstransfer und Synergien. Fehlender Wissenstransfer ist ein Nachteil der Strategie Independent Systems." },
      ],
    },
    {
      id: "m6_3", type: "definition", charKey: "priya",
      charMessage: "Die vier Grundstrategien lassen sich noch feiner ausdifferenzieren, abhängig davon, wie viel Prozessstandardisierung angestrebt wird und ob eigene Systeme erhalten bleiben.",
      definition: {
        term: "Template-Ausprägungen im Detail",
        summary: "Die Template-Strategie äußert sich in vier konkreten Ausprägungen, abhängig vom Grad der Prozessstandardisierung und davon, ob regionale eigene Systeme bestehen bleiben.",
        aspects: [
          { icon: "🌍⚖️", title: "Globaler Ansatz ohne eigene Systeme", text: "Nur legale (gesetzlich zwingende) Anforderungen werden regional umgesetzt: maximale Standardisierung" },
          { icon: "📍⚖️", title: "Regionaler Ansatz ohne eigene Systeme", text: "Ebenfalls nur legale Anforderungen umgesetzt, aber mit regionaler statt globaler Steuerung" },
          { icon: "🌍🔧", title: "Globaler Ansatz mit eigenen Systemen", text: "Auch regionale Anforderungen werden umgesetzt, mit unterschiedlichen Technologien wie Customizing oder Individualisierungs- techniken" },
          { icon: "📍🔧", title: "Regionaler Ansatz mit eigenen Systemen", text: "Regionale Anforderungen werden mit eigenen Systemen und Technologien umgesetzt: höchste lokale Flexibilität" },
        ],
        nexusContext: "NEXUS France hat aufgrund französischer Buchhaltungs- und Datenschutzvorgaben zwingende legale Anforderungen, die über einen reinen 'nur legale Anforderungen'-Ansatz hinausgehen könnten. Ein Full-Template-Ansatz müsste diese regionalen Besonderheiten technisch abbilden.",
      },
      question: "Für NEXUS France wird eine Template-Ausprägung erwogen, bei der regional nur legale Anforderungen umgesetzt werden. NEXUS France verkauft jedoch überwiegend über ein Netz von Fachhändlern mit eigenen Konditionsmodellen, das es in Deutschland nicht gibt. Welche Ausprägung ist naheliegender?",
      answers: [
        { text: "Der globale Ansatz ohne eigene Systeme, weil das Händlernetz keine gesetzliche Anforderung ist und daher im Template nicht berücksichtigt werden sollte.", correct: false, feedback: "Diese Ausprägung würde zwar die Standardisierung maximieren, aber einen geschäftskritischen Vertriebsweg von NEXUS France nicht abbilden. Wenn solche Besonderheiten existieren, ist eine Ausprägung zu wählen, die auch regionale Anforderungen zulässt." },
        { text: "Der regionale Ansatz mit eigenen Systemen, weil jede regionale Besonderheit ein eigenes System erfordert, um die Standardisierung des Templates nicht zu gefährden.", correct: false, feedback: "Diese Ausprägung bietet die höchste lokale Flexibilität, verzichtet aber weitgehend auf Synergien. Eine einzelne geschäftliche Besonderheit rechtfertigt nicht, die zentrale Steuerung aufzugeben." },
        { text: "Ein globaler Ansatz mit eigenen Systemen, der neben den legalen auch ausgewählte regionale Anforderungen über Customizing oder Individualisierung abbildet, ohne die zentrale Steuerung des Templates aufzugeben.", correct: true, feedback: "Genau. Diese Ausprägung erlaubt es, begründete regionale Besonderheiten umzusetzen, während das Template weiterhin global gesteuert wird. Sie ist ein Mittelweg zwischen maximaler Standardisierung und lokaler Eigenständigkeit." },
      ],
    },
    {
      id: "m6_4", type: "definition", charKey: "sophie",
      charMessage: "Eine Template-Strategie zu wählen ist nur der erste Schritt. Danach muss die technische Governance geregelt werden, sonst driften die Systeme trotz gemeinsamem Template wieder auseinander.",
      definition: {
        term: "Template Governance",
        summary: "Neben der prozessualen Standardisierung muss auch die technische Architektur von Templates geregelt werden, und zwar über vier zentrale Dimensionen: Plattform, Unicode, Softwarekomponenten und Integrationsinfrastruktur.",
        aspects: [
          { icon: "🖥️", title: "Plattform", text: "Systeme der Templateentwicklungs- landschaft und der Einheiten sollten auf einheitlicher Plattform basieren: Hardware, Betriebssystem und Datenbank" },
          { icon: "🔤", title: "Unicode", text: "Alle neu aufgebauten Systeme in der Templateentwicklungs- landschaft sind als Unicode-Systeme zu installieren" },
          { icon: "🧩", title: "Software- komponenten", text: "Das Template enthält normierte Softwarekomponenten; für einheitsspezifische Komponenten ist ein Produktkatalog mit definierten Schnittstellen erforderlich" },
          { icon: "🔗", title: "Integrations- infrastruktur", text: "Eine festgelegte Integrationstechnologie verbindet alle Systeme. Neue Schnittstellen dürfen nur über diese Plattform realisiert werden" },
        ],
        nexusContext: "Bei NEXUS Corp fehlt aktuell jede dieser vier Governance-Dimensionen: unterschiedliche Plattformen (Cloud bei Logistics, On-Premise in Deutschland), keine einheitliche Zeichenkodierung, keine normierten Komponenten, keine zentrale Integrationsinfrastruktur.",
      },
      question: "NEXUS Logistics möchte sein WMS über eine direkte Punkt-zu-Punkt-Schnittstelle an S/4HANA anbinden, weil das schneller geht als über die festgelegte Integrationsplattform. Wie ist das aus Sicht der Template Governance zu bewerten?",
      answers: [
        { text: "Als vertretbar, weil die Vorgaben zur Integrationsinfrastruktur nur für Systeme innerhalb des Templates gelten und das WMS kein Bestandteil des Templates ist.", correct: false, feedback: "Gerade einheitsspezifische Komponenten außerhalb des Templates sollen über definierte Schnittstellen angebunden werden. Die Vorgabe, neue Schnittstellen nur über die festgelegte Plattform zu realisieren, gilt für alle Systeme der Landschaft." },
        { text: "Als Verstoß mit Folgewirkung: Neue Schnittstellen dürfen nur über die festgelegte Plattform realisiert werden, weil jede Ausnahme die Landschaft wieder in Richtung unkoordinierter Einzelverbindungen verschiebt.", correct: true, feedback: "Genau. Eine einzelne Ausnahme wirkt harmlos, schafft aber einen Präzedenzfall. Template Governance verhindert, dass die Integrationslandschaft schleichend wieder in das Muster zurückfällt, das die Konsolidierung eigentlich beseitigen soll." },
        { text: "Als unproblematisch, solange die Prozessstandards des betriebswirtschaftlichen Kerns eingehalten werden, da die technische Umsetzung den Landesgesellschaften überlassen bleibt.", correct: false, feedback: "Template Governance existiert gerade deshalb, weil die technische Umsetzung nicht den Einheiten überlassen bleiben kann. Gemeinsame Prozessstandards auf technisch auseinanderdriftenden Systemen führen langfristig zu Integrationsproblemen." },
      ],
    },
    {
      id: "m6_5", type: "definition", charKey: "priya",
      charMessage: "Wie jede strategische Entscheidung hat auch der Template-Ansatz Vor- und Nachteile. Die entscheiden sich aber nicht abstrakt, sondern hängen konkret von unserer Unternehmenssituation ab.",
      definition: {
        term: "Vor- und Nachteile einer Template-Strategie",
        summary: "Eine Template-Strategie bietet erhebliche Synergiepotenziale und Effizienzgewinne, birgt aber auch Risiken durch kulturelle Unterschiede und die Notwendigkeit lokaler Anpassungen.",
        aspects: [
          { icon: "✅", title: "Vorteile: Synergie & Effizienz", text: "Vereinheitlichung von Prozessen, einheitliche Kapazitäts- und Ressourcenplanung, Reduktion der Systemvielfalt, Zeit- und Kostenreduktion" },
          { icon: "✅", title: "Vorteile: Wissenstransfer", text: "Wiederverwendung erprobter Lösungen reduziert Projektrisiken, Synergien bei Support, Wartung und Releasewechseln" },
          { icon: "⚠️", title: "Risiken: Kultur & Sprache", text: "Kulturelle Unterschiede können markante Hürden darstellen; Unterschiede in Sprache und Begriffsbedeutung erschweren die Standardisierung" },
          { icon: "⚠️", title: "Risiken: Lokalisierung", text: "Auch bei einheitlichem Template bleibt Lokalisierung notwendig: Währung, Steuern, rechtliche Bedingungen unterscheiden sich weiterhin" },
        ],
        nexusContext: "Bei NEXUS Corp sind kulturelle Unterschiede zwischen dem deutschen Stammhaus und dem französischen Zukauf bereits heute spürbar. Zusätzlich zur technischen Herausforderung muss die Template-Strategie also auch diese kulturelle Dimension aktiv managen.",
      },
      question: "Ein Berater empfiehlt NEXUS Corp ein Full Template mit der Begründung, ein vergleichbar großer Konzern habe damit sehr gute Erfahrungen gemacht. Was sollte Priya vor allem prüfen?",
      answers: [
        { text: "Ob der andere Konzern denselben Softwarehersteller einsetzt, da die Vor- und Nachteile einer Template-Strategie im Wesentlichen von der eingesetzten Software abhängen.", correct: false, feedback: "Die Vor- und Nachteile hängen vor allem von der Unternehmensstruktur und den vorhandenen Altsystemen ab, nicht in erster Linie vom Hersteller. Zwei SAP-Konzerne können sehr unterschiedliche Ausgangslagen haben." },
        { text: "Ob Unternehmensstruktur und Altsysteme vergleichbar sind: Dieselbe Strategie kann bei einem homogenen Konzern Synergien bringen und bei heterogenen Gesellschaften wie NEXUS Logistics und Parts hohe Anpassungskosten verursachen.", correct: true, feedback: "Genau. Es gibt keine universell richtige Template-Strategie. Erfahrungen anderer Unternehmen sind nur übertragbar, wenn Struktur und Ausgangslage vergleichbar sind." },
        { text: "Ob der andere Konzern eine vergleichbare Anzahl an Landesgesellschaften hat, da die Synergieeffekte eines Templates linear mit der Zahl der Roll-out-Einheiten steigen.", correct: false, feedback: "Die Zahl der Roll-out-Einheiten beeinflusst das Synergiepotenzial, ist aber nicht der entscheidende Faktor. Vier sehr ähnliche Gesellschaften lassen sich leichter standardisieren als vier grundlegend verschiedene." },
      ],
    },
    {
      id: "m6_6", type: "matching", charKey: "priya",
      charMessage: "SAP bietet in der Praxis zwei grundlegende technische Alternativen für die Umsetzung eines Template-Ansatzes. Ordnen Sie die Merkmale den passenden Strategien zu.",
      instruction: "Klicken Sie zuerst eine Strategie, dann das passende Merkmal.",
      pairs: [
        { situation: "Ein Release-Upgrade kann nur in einem gemeinsamen Wartungsfenster für alle Landesgesellschaften durchgeführt werden, weil alle denselben Systemstand teilen. Im Gegenzug muss jede Template-Änderung nur an einer einzigen Stelle eingespielt werden.", term: "Mehrmandantenstrategie" },
        { situation: "NEXUS Logistics kann ein dringendes Update unabhängig von den anderen Gesellschaften einspielen. Im Gegenzug muss jede Template-Änderung auf mehrere Systeme verteilt und dort jeweils einzeln getestet werden.", term: "Mehrsystemstrategie" },
      ],
    },
    {
      id: "m6_7", type: "reflection", charKey: "sophie",
      message: "Wir haben jetzt die grundlegenden Template-Strategien und ihre technische Governance kennengelernt. Bevor wir in die konkrete Umsetzungsplanung für NEXUS Corp gehen: Was ist für Sie die wichtigste Erkenntnis aus diesem Level?",
      question: "Welche Empfehlung für die S/4HANA-Strategie von NEXUS Corp ist auf Basis dieses Levels am besten begründet?",
      answers: [
        { text: "Ein Global Single System für alle vier Gesellschaften, weil nur maximale Vereinheitlichung die durch die Übernahmen entstandene Fragmentierung dauerhaft beseitigt.", correct: false, feedback: "Maximale Vereinheitlichung ignoriert die unterschiedlichen Geschäftsmodelle von NEXUS Logistics und Parts. Die Fragmentierung würde dann eher durch Schattenlösungen außerhalb des Systems zurückkehren." },
        { text: "Independent Systems mit einer gemeinsamen BI-Schicht, weil die Landesgesellschaften so ihre bewährten Lösungen behalten und trotzdem konzernweite Kennzahlen entstehen.", correct: false, feedback: "Das entspricht weitgehend dem heutigen Zustand mit einem zusätzlichen Reporting. Synergien, Wissenstransfer und eine gemeinsame operative Datenbasis, etwa für Toms Lagernetzwerk oder Carlos' Großkunden, blieben aus." },
        { text: "Ein Template mit verbindlichem Kern für gemeinsame Prozesse und Stammdaten und definierten Freiräumen für begründete lokale Anforderungen, abgesichert durch eine technische Governance für Plattform und Integration.", correct: true, feedback: "Genau. Für vier so unterschiedliche Gesellschaften ist eine bewusste Position zwischen den Extremen am besten begründet. Sie trägt aber nur, wenn verbindlicher Kern und Freiräume klar definiert und technisch konsequent abgesichert sind." },
      ],
    },
  ],
  outro: {
    charKey: "priya",
    message: "Der Template-Ansatz gibt uns jetzt einen strukturierten Rahmen, um über die S/4HANA-Strategie für NEXUS Corp zu entscheiden. Als Nächstes schauen wir uns an, wie sich diese Erkenntnisse auf unser Application Lifecycle Management übertragen lassen.",
    xp: 340,
    badge: "📐 Template-Strategin",
  },
};
