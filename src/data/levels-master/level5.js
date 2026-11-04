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
      question: "Maya plant, in zwei Jahren einen Teil des Geschäfts von NEXUS Logistics als eigenständige Gesellschaft auszugliedern. Wie würden ein IT-Architecture- und ein Enterprise-Architecture-Ansatz mit dieser Information umgehen?",
      answers: [
        { text: "Ein EA-Ansatz würde die geplante Unternehmensstruktur schon in die heutige Architekturplanung einbeziehen, etwa durch klar abgrenzbare Daten und Systeme. Ein IT-Architecture-Ansatz würde primär die aktuelle Abstimmung zwischen Business und IT optimieren.", correct: true, feedback: "Genau. Die zentrale Erweiterung von Enterprise Architecture besteht darin, Unternehmensstruktur und strategische Ziele einzubeziehen. Eine geplante Ausgliederung ist genau eine solche strukturelle Information, die eine reine Business/IT-Abstimmung leicht übersieht." },
        { text: "Beide würden die Information in gleicher Weise berücksichtigen, weil Business/IT-Alignment strukturelle Veränderungen des Unternehmens automatisch mit einschließt.", correct: false, feedback: "Business/IT-Alignment richtet die IT an den aktuellen fachlichen Anforderungen aus. Unternehmensstruktur und Strategie als eigenständige Gestaltungsgrößen kommen erst mit dem Enterprise-Architecture-Verständnis hinzu." },
        { text: "Ein IT-Architecture-Ansatz würde sie stärker berücksichtigen, weil eine Ausgliederung vor allem eine technische Trennung von Systemen erfordert, während sich EA auf strategische Fragen beschränkt.", correct: false, feedback: "Hier ist die Logik umgekehrt: Enterprise Architecture umfasst Strategie, Struktur und IT gemeinsam und beschränkt sich nicht auf Strategie. Gerade das Zusammenspiel von struktureller Veränderung und technischer Trennung ist ihr Gegenstand." },
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
      question: "Ein Berater liefert Sophie eine vollständige, aktuelle Übersicht aller 47 Systeme mit ihren Schnittstellen. Welche Anforderung der vorgestellten EA-Definitionen erfüllt dieses Ergebnis noch nicht?",
      answers: [
        { text: "Die Verbindung zu Strategie und Geschäft sowie der Blick auf künftige Zustände: Eine Bestandsaufnahme der IT ist ein Baustein, aber noch keine integrierte Sicht auf Strategie, Business und Technologie im Zeitverlauf.", correct: true, feedback: "Genau. Alle drei Definitionen betonen die integrierte Betrachtung mehrerer Ebenen, und mindestens zwei schließen ausdrücklich künftige Zustände ein. Eine Systemübersicht deckt nur die technische Ebene im Ist-Zustand ab." },
        { text: "Die formale Strukturierung nach einem etablierten Framework wie TOGAF, ohne die eine solche Übersicht nach allen drei Definitionen nicht als Enterprise Architecture gilt.", correct: false, feedback: "Keine der drei Definitionen setzt ein bestimmtes Framework voraus. Frameworks können bei der Strukturierung helfen, sind aber kein definitorisches Merkmal von Enterprise Architecture." },
        { text: "Die vollständige Dokumentation der Vergangenheit, da alle drei Definitionen vorrangig die Rekonstruktion früherer Systemzustände verlangen.", correct: false, feedback: "Nur eine Definition nennt die Vergangenheit ausdrücklich, und auch dort zusammen mit Gegenwart und Zukunft. Im Vordergrund steht die integrierte Sicht auf den aktuellen und den künftigen Zustand." },
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
      question: "Tom möchte das cloud-native WMS von NEXUS Logistics behalten. Priya möchte es durch SAP EWM ersetzen, um wieder eine vollständig integrierte SAP-Landschaft zu erhalten. Wie ist Priyas Argument vor dem Hintergrund des Paradigmenwechsels zu bewerten?",
      answers: [
        { text: "Als überzeugend, weil das klassische Paradigma einer einheitlichen, redundanzfreien Datenhaltung weiterhin der Maßstab ist und jedes Drittsystem diesem Ideal widerspricht.", correct: false, feedback: "Das klassische Paradigma ist angesichts der Technologievielfalt und der Konvergenz von IT und Produkt kaum noch zu halten. Ein Drittsystem allein ist deshalb kein ausreichendes Argument für eine Ablösung." },
        { text: "Als nicht haltbar, weil Integrationsfähigkeit bedeutet, dass spezialisierte Drittsysteme grundsätzlich Vorrang vor der Standardsoftware eines dominierenden Herstellers haben.", correct: false, feedback: "Integrationsfähigkeit ist kein Vorrang für Drittsysteme. Sie bedeutet, dass die Architektur offen für Drittsysteme ist. Ob das WMS bleibt oder abgelöst wird, muss weiterhin fachlich begründet werden." },
        { text: "Als zu einseitig: Entscheidend ist nicht, ob das WMS von SAP stammt, sondern ob es fachlich überlegen ist und sich über dokumentierte Schnittstellen verlässlich in die Zielarchitektur einfügt.", correct: true, feedback: "Genau. Unter dem Leitprinzip der Integrationsfähigkeit ist die Herkunft eines Systems kein Kriterium an sich. Maßgeblich sind sein fachlicher Beitrag und die Frage, ob es sich sauber und dauerhaft in die Gesamtarchitektur integrieren lässt." },
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
      question: "Sophie hat eine Zielarchitektur und verbindliche Architekturprinzipien erarbeitet und an alle Landesgesellschaften verteilt. Ein halbes Jahr später hat NEXUS France trotzdem eigenmächtig ein zusätzliches CRM-Add-on eingeführt. Welches EAM-Aufgabenfeld wurde vor allem vernachlässigt?",
      answers: [
        { text: "Die Planung, weil die SOLL-Architektur die Anforderungen von NEXUS France offenbar nicht ausreichend berücksichtigt hat und das Add-on diese Lücke schließt.", correct: false, feedback: "Das kann ein Teil der Ursache sein und sollte geprüft werden. Der beschriebene Fall zeigt aber vor allem, dass Entscheidungen der Landesgesellschaften nicht auf ihre Konformität mit den bestehenden Vorgaben geprüft wurden." },
        { text: "Die Programmierung, weil die Architekturprinzipien nicht konkret genug formuliert waren, um die Einführung eines solchen Add-ons eindeutig auszuschließen.", correct: false, feedback: "Prinzipien und Standards waren vorhanden und kommuniziert. Auch präzisere Regeln hätten das Problem nicht gelöst, solange niemand ihre Einhaltung vor der Umsetzung prüft." },
        { text: "Die Governance, weil es keinen Prüf- und Genehmigungsprozess gab, der Systementscheidungen der Landesgesellschaften vor der Umsetzung auf ihre Architekturkonformität überprüft.", correct: true, feedback: "Genau. Dokumentation, Planung, Regeln und Kommunikation bleiben wirkungslos, wenn ihre Einhaltung nicht überprüft wird. Governance schließt diese Lücke durch formale Prüf- und Genehmigungsprozesse." },
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
      question: "Priya schlägt vor, TOGAF als verbindliches Framework für die Konsolidierung einzuführen. Welche Erwartung an diese Entscheidung ist realistisch?",
      answers: [
        { text: "TOGAF liefert eine empirisch gut belegte Schritt-für-Schritt-Methodik, nach der sich die Konsolidierung der vier Landesgesellschaften direkt umsetzen lässt.", correct: false, feedback: "Genau das wird an TOGAF kritisiert: Es bietet primär Zielvorgaben, aber kaum konkrete Umsetzungsmethoden, und es gibt wenig empirische Evidenz für erfolgreiche Umsetzungen." },
        { text: "TOGAF schafft eine gemeinsame Struktur und Begrifflichkeit, etwa für Geschäfts-, Applikations- und Technologiearchitektur. Konkrete Umsetzungsmethoden für die NEXUS-Situation muss das Team jedoch selbst entwickeln.", correct: true, feedback: "Genau. Frameworks liefern eine wertvolle Orientierung und eine gemeinsame Sprache für die Architekturarbeit. Die konkrete Methodik für vier heterogene Landesgesellschaften müssen sie aber selbst erarbeiten." },
        { text: "TOGAF ist für NEXUS Corp die schwächere Wahl, weil Zachman deutlich verbreiteter ist und deshalb mehr Praxisbeispiele für erfolgreiche Konsolidierungen bietet.", correct: false, feedback: "Die Marktanteile beider Frameworks überschneiden sich je nach Studie (TOGAF 11 bis 33 %, Zachman 22 bis 25 %). Beiden wird zudem gleichermaßen vorgeworfen, kaum Beispiele für eine erfolgreiche Umsetzung zu liefern." },
      ],
    },
    {
      id: "m5_6", type: "matching", charKey: "sophie",
      charMessage: "Aus dem Vergleich verschiedener EAM-Frameworks lässt sich ein gemeinsames Ebenenmodell ableiten, das wir für NEXUS Corp als Referenzrahmen nutzen. Ordnen Sie jede NEXUS-Aufgabe der richtigen Architekturebene zu.",
      instruction: "Klicken Sie zuerst eine Ebene, dann die passende Aufgabe.",
      pairs: [
        { situation: "Maya entscheidet, dass NEXUS Parts Ersatzteile künftig nicht nur an Händler, sondern auch direkt an Endkunden verkaufen soll.", term: "Geschäftsarchitektur" },
        { situation: "Es wird festgelegt, dass Retouren in allen Gesellschaften künftig in derselben Abfolge aus Prüfung, Gutschrift und Wiedereinlagerung bearbeitet werden.", term: "Prozessarchitektur" },
        { situation: "Sophie legt fest, dass Kundenstammdaten künftig nur noch in einem führenden System angelegt und von dort an alle anderen Anwendungen verteilt werden.", term: "Applikationsarchitektur" },
        { situation: "Für S/4HANA wird festgelegt, welche Instanzen für Entwicklung, Qualitätssicherung und Produktion bereitgestellt werden und wie Änderungen zwischen ihnen transportiert werden.", term: "Systemarchitektur" },
        { situation: "Für jede Landesgesellschaft wird eine Person benannt, die im Konsolidierungsprogramm für die Abnahme der lokalen Anforderungen verantwortlich ist.", term: "Unternehmens- und Programmorganisation" },
      ],
    },
    {
      id: "m5_7", type: "reflection", charKey: "sophie",
      message: "Wir haben jetzt gesehen, dass Enterprise Architecture Management kein neues Konzept ist. Es hat eine sechzigjährige Entwicklungsgeschichte. Aber die grundlegende Herausforderung bleibt bestehen: Wie bringt man Struktur in eine gewachsene Systemlandschaft, ohne die Innovationsfähigkeit zu ersticken?",
      question: "Das Team von NEXUS Logistics möchte ein neues KI-gestütztes Routenplanungstool einsetzen, das in der Zielarchitektur nicht vorgesehen ist. Wie sollte das Enterprise Architecture Management damit umgehen?",
      answers: [
        { text: "Das Tool bis zum Abschluss der Konsolidierung ablehnen, weil jede Abweichung von der Zielarchitektur die gerade mühsam reduzierte Komplexität wieder erhöht.", correct: false, feedback: "Damit würde EAM die Stabilität über die Innovationsfähigkeit stellen. Eine Architektur, die jede Veränderung blockiert, verliert an Akzeptanz und wird erfahrungsgemäß umgangen." },
        { text: "Einen kontrollierten Rahmen schaffen, etwa eine zeitlich begrenzte Erprobung mit definierten Schnittstellen und einer anschließenden Entscheidung über die Aufnahme in die Zielarchitektur.", correct: true, feedback: "Genau. EAM muss stabil genug sein, um Komplexität zu beherrschen, und zugleich offen genug, um Innovation zu ermöglichen. Ein kontrollierter Rahmen verbindet beides, statt sich für eine Seite zu entscheiden." },
        { text: "Das Tool zulassen, weil Innovation in der Logistik geschäftskritisch ist und sich die Zielarchitektur nachträglich an neue Systeme anpassen lässt.", correct: false, feedback: "Genau so ist die heutige Fragmentierung entstanden: Einzelentscheidungen wurden getroffen und die Architektur sollte später folgen. Innovation braucht einen Rahmen, keinen Freibrief." },
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
