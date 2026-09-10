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
      question: "Warum reicht es nicht aus, ein Template nur als 'technisches System' zu verstehen?",
      answers: [
        { text: "Weil ein Template zusätzlich den betriebswirtschaftlichen Kern definieren muss: also welche Prozesse und Daten standardisiert werden, nicht nur welche Technik verwendet wird.", correct: true, feedback: "Genau. Der betriebswirtschaftliche Kern (Prozesse, Stammdaten) und der technische Systemkern gehören untrennbar zusammen. Ein Template ohne klaren Prozessstandard wäre nur eine leere technische Hülle." },
        { text: "Weil Templates ausschließlich für die Finanzbuchhaltung relevant sind.", correct: false, feedback: "Templates können für unterschiedlichste Bereiche relevant sein: Finanzsysteme, ERP mit Fokus auf Beschaffung/Vertrieb, SCM- oder CRM-Systeme, nicht nur Finanzbuchhaltung." },
        { text: "Weil technische Systeme sich ohnehin nicht standardisieren lassen, da jede Landesgesellschaft zwangsläufig eigene, inkompatible Hardware- und Softwareanforderungen mitbringt.", correct: false, feedback: "Das Gegenteil ist der Fall. Die technische Standardisierung ist einer der beiden zentralen Bestandteile eines Templates." },
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
      question: "Was ist der zentrale Trade-off zwischen 'Independent Systems' und 'Global Single System'?",
      answers: [
        { text: "Independent Systems sind immer teurer als Global Single System. Es gibt keinen inhaltlichen Trade-off.", correct: false, feedback: "Die Entscheidung ist kein reiner Kostenvergleich. Es geht um den Trade-off zwischen lokaler Anpassungsfähigkeit und globalen Synergieeffekten." },
        { text: "Independent Systems maximieren lokale Anpassungsfähigkeit, aber verzichten auf Synergieeffekte und Wissenstransfer. Global Single System maximiert Synergien, erlaubt aber kaum lokale Anpassungen.", correct: true, feedback: "Exakt. Das ist der zentrale strategische Trade-off: Je mehr Vereinheitlichung, desto größer die Synergieeffekte, aber desto geringer die Möglichkeit, auf lokale Besonderheiten einzugehen." },
        { text: "Independent Systems sind technisch nicht realisierbar und daher in der Praxis irrelevant, weil moderne Cloud-Architekturen ohnehin eine zentrale Systemlandschaft erzwingen.", correct: false, feedback: "Independent Systems sind eine reale, in der Praxis verbreitete Strategie, insbesondere wenn lokale Anpassungsfähigkeit Priorität hat." },
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
      question: "Warum reicht 'nur legale Anforderungen umsetzen' bei NEXUS France womöglich nicht aus?",
      answers: [
        { text: "Weil legale Anforderungen grundsätzlich unwichtig für Unternehmensentscheidungen sind.", correct: false, feedback: "Legale Anforderungen sind zwingend umzusetzen. Die Frage ist, ob DARÜBER HINAUS auch weitere regionale Besonderheiten berücksichtigt werden müssen." },
        { text: "Weil NEXUS France neben gesetzlichen Vorgaben auch spezifische Geschäftsprozesse oder Kundenanforderungen haben könnte, die über die reine Rechtskonformität hinausgehen und eine differenziertere Template-Ausprägung erfordern.", correct: true, feedback: "Genau. 'Nur legale Anforderungen' ist die restriktivste Ausprägung. Wenn NEXUS France zusätzliche geschäftliche Besonderheiten hat, wäre ein Ansatz 'mit eigenen Systemen' angemessener, um diese abzubilden." },
        { text: "Weil Frankreich keine eigenen gesetzlichen Anforderungen an Unternehmenssoftware hat und die EU-weite Rechtsangleichung nationale Sonderregelungen längst überflüssig gemacht hat.", correct: false, feedback: "Das Gegenteil ist der Fall. Frankreich hat wie jedes Land eigene rechtliche Anforderungen, die bei jeder Template-Strategie berücksichtigt werden müssen." },
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
      question: "Warum reicht eine gemeinsam definierte Prozessstandardisierung (betriebswirtschaftlicher Kern) allein nicht aus, um eine erfolgreiche Template-Strategie umzusetzen?",
      answers: [
        { text: "Weil ohne geregelte technische Governance (Plattform, Integrationsinfrastruktur etc.) die Systeme trotz gemeinsamer Prozessstandards technisch auseinanderdriften und die Integration langfristig scheitert.", correct: true, feedback: "Genau. Prozessstandardisierung und technische Governance müssen zusammen gedacht werden. Ein gemeinsamer Prozessstandard nützt wenig, wenn die zugrunde liegenden Systeme technisch inkompatibel bleiben." },
        { text: "Weil technische Governance in der Praxis irrelevant ist und nur ein theoretisches Konstrukt darstellt.", correct: false, feedback: "Technische Governance hat sehr konkrete praktische Konsequenzen, etwa bei Integrationsproblemen zwischen unterschiedlichen Plattformen oder Zeichenkodierungen." },
        { text: "Weil Prozessstandardisierung und technische Governance in Wirklichkeit dasselbe Thema sind und sich beide Fragen automatisch lösen, sobald ein gemeinsamer Prozessstandard definiert ist.", correct: false, feedback: "Es handelt sich um zwei unterschiedliche, sich ergänzende Dimensionen: der betriebswirtschaftliche Kern (was) und die technische Governance (wie technisch umgesetzt)." },
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
      question: "Warum betont die Vorlage explizit, dass die konkrete Ausprägung von Vor- und Nachteilen von der 'zugrunde liegenden Unternehmensstruktur und vorhandenen Alt-Systemen' abhängt?",
      answers: [
        { text: "Weil es keine universell richtige Template-Strategie gibt: dieselbe Strategie kann je nach Ausgangssituation eines Unternehmens völlig unterschiedliche Vor- und Nachteile entfalten.", correct: true, feedback: "Genau. Das ist eine zentrale Lehre für NEXUS Corp: Eine Strategie, die für NEXUS Deutschland (bereits homogenes SAP) passt, kann für NEXUS Parts (Nischensystem) völlig ungeeignet sein. Die Bewertung ist immer kontextabhängig." },
        { text: "Weil Vor- und Nachteile grundsätzlich subjektiv sind und sich nicht objektiv bewerten lassen.", correct: false, feedback: "Die Vor- und Nachteile sind objektiv beschreibbar. Ihre relative Gewichtung hängt aber vom konkreten Unternehmenskontext ab, nicht von reiner Subjektivität." },
        { text: "Weil alle Unternehmen letztlich dieselben Alt-Systeme haben und die Aussage daher trivial ist, da moderne Standardsoftware ohnehin überall zu vergleichbaren IT-Landschaften führt.", correct: false, feedback: "Das Gegenteil ist der Fall. NEXUS Corp zeigt gerade, wie unterschiedlich Alt-Systeme innerhalb eines einzigen Konzerns sein können." },
      ],
    },
    {
      id: "m6_6", type: "matching", charKey: "priya",
      charMessage: "SAP bietet in der Praxis zwei grundlegende technische Alternativen für die Umsetzung eines Template-Ansatzes. Ordnen Sie die Merkmale den passenden Strategien zu.",
      instruction: "Klicken Sie zuerst eine Strategie, dann das passende Merkmal.",
      pairs: [
        { situation: "Alle vier NEXUS-Landesgesellschaften nutzen dasselbe physische SAP-System, sind aber über getrennte Mandanten voneinander separiert. Bei einem Systemausfall wären dadurch theoretisch alle vier Landesgesellschaften gleichzeitig betroffen.", term: "Mehrmandantenstrategie" },
        { situation: "Jede NEXUS-Landesgesellschaft betreibt ein eigenständiges physisches SAP-System, das jedoch auf demselben zentral definierten Template basiert. NEXUS Logistics könnte sein System dadurch unabhängig von den Wartungsfenstern der anderen drei Landesgesellschaften aktualisieren.", term: "Mehrsystemstrategie" },
      ],
    },
    {
      id: "m6_7", type: "reflection", charKey: "sophie",
      message: "Wir haben jetzt die grundlegenden Template-Strategien und ihre technische Governance kennengelernt. Bevor wir in die konkrete Umsetzungsplanung für NEXUS Corp gehen: Was ist für Sie die wichtigste Erkenntnis aus diesem Level?",
      question: "Welche Aussage beschreibt den Kern des Template-Ansatzes für Large Enterprise Systems am treffendsten?",
      answers: [
        { text: "Ein Template ist in erster Linie eine technische Software-Konfiguration und hat wenig mit strategischen Unternehmensentscheidungen zu tun, da es lediglich vorgibt, welche Systeme installiert werden.", correct: false, feedback: "Das Gegenteil zeigt dieses Level: Die Wahl der Template-Strategie ist eine strategische Entscheidung mit weitreichenden organisatorischen, kulturellen und technischen Konsequenzen." },
        { text: "Der Template-Ansatz erfordert eine bewusste strategische Entscheidung über den Grad der Standardisierung, zwischen maximaler lokaler Flexibilität und maximalen globalen Synergieeffekten, verbunden mit konsequenter technischer und prozessualer Governance.", correct: true, feedback: "Präzise. Das ist die zentrale Erkenntnis: Es gibt nicht die eine richtige Antwort, sondern eine bewusste Positionierung im Spannungsfeld zwischen Standardisierung und Flexibilität, die dann konsequent technisch und organisatorisch umgesetzt werden muss." },
        { text: "Die beste Template-Strategie ist immer 'Global Single System', da sie die meisten Synergieeffekte bietet und Unternehmen langfristig immer von maximaler Vereinheitlichung profitieren, unabhängig von Branche oder Unternehmensgröße.", correct: false, feedback: "Es gibt keine pauschal beste Strategie. Die Wahl hängt von der jeweiligen Unternehmenssituation, Alt-Systemen und kulturellen Faktoren ab." },
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
