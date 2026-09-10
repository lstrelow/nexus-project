export const ML1 = {
  intro: {
    charKey: "maya",
    message: "Willkommen zurück. Fünf Jahre ist es her, dass wir gemeinsam die erste Transformation von NEXUS Corp gemeistert haben. Seitdem hat sich viel getan, vielleicht zu viel, zu schnell. Ich brauche Sie wieder als externes Beratungsteam. Diesmal geht es nicht mehr darum, ob wir Enterprise Systems einführen. Es geht darum, die Landschaft die wir geschaffen haben, endlich in den Griff zu bekommen.",
  },
  scenes: [
    {
      id: "m1_1", type: "company", charKey: "priya",
      charMessage: "Ich habe in den letzten fünf Jahren fast keine Nacht mehr durchgeschlafen. Lassen Sie mich zeigen, was aus unserem sauberen Sechs-Komponenten-System geworden ist.",
      content: {
        intro: "NEXUS Corp ist nicht mehr das Unternehmen, das Sie kennengelernt haben. Drei Übernahmen in fünf Jahren haben aus einem übersichtlichen Mittelständler einen komplexen Konzern gemacht, mit allen Konsequenzen für die IT-Landschaft.",
        metrics: [
          { label: "Mitarbeitende", value: "800", icon: "👥" },
          { label: "Standorte", value: "9", icon: "🏢" },
          { label: "Länder", value: "4", icon: "🌍" },
          { label: "Jahresumsatz", value: "310 Mio. €", icon: "💰" },
          { label: "IT-Systeme im Einsatz", value: "47", icon: "🖥️" },
          { label: "ERP-Instanzen", value: "3", icon: "⚠️" },
        ],
        systems: [
          "NEXUS Deutschland: Das ursprüngliche System aus Ihrer ersten Transformation (ERP, CRM, SCM, SRM, Shopsystem und BI), sauber integriert.",
          "NEXUS Logistics (2022 übernommen): Ein Berliner Logistik-Startup mit eigenem, cloud-nativem WMS und einer selbstgebauten Auftragsabwicklung.",
          "NEXUS France (2023 übernommen): Ein französischer Wettbewerber mit einer 15 Jahre alten SAP-ECC-Installation und komplett eigenen Stammdaten.",
          "NEXUS Parts (2025 übernommen): Ein spezialisierter Teilehändler mit einer Nischenlösung für Ersatzteilkataloge, die durch nichts zu ersetzen schien, also blieb sie.",
        ],
      },
      question: "Was ist die wahrscheinlichste Konsequenz dieser gewachsenen Systemlandschaft für NEXUS Corp?",
      answers: [
        { text: "Keine nennenswerten Probleme: Mehr Systeme bedeuten mehr Flexibilität für jede Landesgesellschaft.", correct: false, feedback: "Genau das Gegenteil ist der Fall. Ohne übergreifende Architektur entstehen Redundanzen, Inkonsistenzen und explodierende Integrationskosten, wie Priya bereits andeutet." },
        { text: "Redundante Stammdaten, inkonsistente Prozesse und eine massiv gestiegene Architektur-Komplexität, die das Unternehmen zunehmend handlungsunfähig macht.", correct: true, feedback: "Genau das ist die Kernproblematik gewachsener Konzern-IT-Landschaften: vier unabhängige Systemwelten ohne gemeinsames Architekturverständnis erzeugen genau diese Effekte." },
        { text: "Die Systeme werden sich mit der Zeit von selbst vereinheitlichen, sobald alle Mitarbeitenden eingearbeitet sind.", correct: false, feedback: "Systemlandschaften konsolidieren sich nicht von selbst. Ohne aktives Architekturmanagement verfestigt sich die Fragmentierung eher, als dass sie sich auflöst." },
      ],
    },
    {
      id: "m1_2", type: "persona", charKey: "maya",
      intro: "Ich bin nach wie vor CEO, aber mein Alltag hat sich fundamental verändert. Früher habe ich operative Entscheidungen getroffen. Heute verbringe ich die Hälfte meiner Zeit damit, zwischen vier Landesgesellschaften zu vermitteln, die jeweils glauben, ihr System sei das bessere.",
      content: {
        background: "Maya Chen leitet NEXUS Corp seit über 15 Jahren. Nach der erfolgreichen ersten Transformation hat sie das Unternehmen durch drei Übernahmen geführt, getrieben von Wachstumsambitionen, aber ohne eine klare IT-Konsolidierungsstrategie für die übernommenen Unternehmen.",
        personality: "Strategisch, entscheidungsfreudig, aber zunehmend frustriert davon, dass technische Komplexität ihre unternehmerischen Entscheidungen ausbremst.",
        tasks: ["Konzernstrategie", "M&A-Integration", "Stakeholder-Management", "Budgetverantwortung für die S/4HANA-Transformation"],
        painPoints: "Jede strategische Entscheidung, von der Einführung eines neuen Vertriebskanals bis zur Konsolidierung des Lagernetzwerks, wird durch inkompatible Systeme verzögert oder verkompliziert.",
      },
      question: "Maya sagt: 'Früher war IT ein Werkzeug. Heute ist IT die Grenze dessen, was wir als Unternehmen überhaupt tun können.' Was beschreibt diese Aussage am treffendsten?",
      answers: [
        { text: "Dass NEXUS Corp zu wenig Geld in IT investiert hat, obwohl gerade in Wachstumsphasen ein ausreichendes IT-Budget häufig als wichtigster Erfolgsfaktor für eine gelungene Digitalisierung gilt.", correct: false, feedback: "Das Kernproblem ist nicht der IT-Investitionsumfang, sondern die fehlende architektonische Kohärenz der Investitionen." },
        { text: "Dass die IT-Architektur von einer unterstützenden Funktion zu einem strategischen Engpassfaktor geworden ist, der unternehmerische Handlungsfähigkeit direkt begrenzt.", correct: true, feedback: "Richtig. Das ist die zentrale Beobachtung hinter 'Large Enterprise Systems': In komplexen, gewachsenen Landschaften wird die IT-Architektur selbst zum limitierenden Faktor für unternehmerisches Handeln." },
        { text: "Dass Maya keine ausreichende technische Expertise besitzt, um die Situation zu verstehen.", correct: false, feedback: "Mayas Beobachtung ist eine zutreffende strategische Diagnose, unabhängig von ihrem technischen Detailwissen." },
      ],
    },
    {
      id: "m1_3", type: "persona", charKey: "priya",
      intro: "Ich habe mittlerweile ein Team von zwölf Leuten, aber selbst das reicht kaum aus. Jede der vier Systemwelten hat ihre eigene Logik, ihre eigenen Ansprechpartner, ihre eigenen Altlasten.",
      content: {
        background: "Priya Nair ist inzwischen Head of Enterprise Architecture. Sie hat gerade einen Enterprise Architect neu eingestellt, der ihr helfen soll, endlich eine konzernweite Zielarchitektur zu entwickeln.",
        personality: "Analytisch, systematisch, mittlerweile auch politisch erfahren: Sie weiß, dass technische Lösungen ohne organisatorisches Mandat scheitern.",
        tasks: ["Konzern-IT-Architektur", "Bewertung der Systemkomplexität", "Vorbereitung der S/4HANA-Migration", "Führung des Architektur-Teams"],
        painPoints: "Jede Landesgesellschaft hat im Laufe der Jahre eigene Erweiterungen und Individualisierungen vorgenommen. Ein einfaches 'wir migrieren alle auf ein System' ist technisch und politisch nicht durchsetzbar.",
      },
      question: "Warum reicht es nicht aus, dass Priya technisch die beste Lösung kennt?",
      answers: [
        { text: "Weil technische Lösungen grundsätzlich unwichtig sind: Nur die Unternehmenspolitik zählt. Fachliche Expertise spielt bei Entscheidungen dieser Tragweite ohnehin nur eine untergeordnete Rolle gegenüber politischem Geschick.", correct: false, feedback: "Technische Exzellenz bleibt notwendig. Sie ist nur nicht hinreichend für eine erfolgreiche Transformation." },
        { text: "Weil eine Systemkonsolidierung dieser Größenordnung organisatorisches Mandat, Stakeholder-Zustimmung und Change-Management erfordert, nicht nur technisches Wissen.", correct: true, feedback: "Genau. Das ist eine zentrale Lehre aus gescheiterten Großprojekten: Technische Richtigkeit garantiert keine erfolgreiche Umsetzung, wenn Organisation und Stakeholder nicht mitgenommen werden." },
        { text: "Weil die Landesgesellschaften rechtlich unabhängig agieren und Priya keinerlei Einfluss auf sie hat.", correct: false, feedback: "Rechtliche Eigenständigkeit ist nicht das Kernproblem. Priya hat als Head of Enterprise Architecture durchaus Mandat, aber technische Richtigkeit allein setzt sich nicht automatisch durch." },
      ],
    },
    {
      id: "m1_4", type: "persona", charKey: "tom",
      intro: "Ich leite jetzt die Logistik für ganz NEXUS Corp, zumindest auf dem Papier. In Wirklichkeit kämpfe ich damit, dass unser deutsches Lager, das französische Lager und das System von NEXUS Logistics nicht miteinander sprechen.",
      content: {
        background: "Tom Becker ist zum Head of Global Operations aufgestiegen. Er koordiniert heute neun Lagerstandorte in vier Ländern, mit drei unterschiedlichen Warenwirtschaftssystemen.",
        personality: "Pragmatisch, bodenständig, mittlerweile auch frustriert: Er hat gehofft, dass die Systemlandschaft nach der ersten Transformation für immer gelöst wäre.",
        tasks: ["Globale Lagerkoordination", "Bestandssteuerung über Ländergrenzen", "Lieferantenmanagement für vier Regionen"],
        painPoints: "Ein einfacher Lagerbestandsabgleich zwischen Deutschland und Frankreich dauert heute länger als früher der komplette Wareneingang, weil die Systeme keine gemeinsame Datenbasis haben.",
      },
      question: "Was zeigt Toms Beispiel exemplarisch?",
      answers: [
        { text: "Dass Systemintegration nach einer Übernahme ein rein technisches Problem ist, das mit genug Entwicklerzeit gelöst werden kann.", correct: false, feedback: "Systemintegration nach Übernahmen ist selten rein technisch. Unterschiedliche Datenmodelle, Prozesslogiken und organisatorische Verantwortlichkeiten erschweren die Integration erheblich." },
        { text: "Dass fehlende Systemintegration nach Unternehmensübernahmen operative Kernprozesse direkt und spürbar verlangsamt.", correct: true, feedback: "Genau das ist der Kern des Problems: Was auf der Strategiefolie als 'Synergiepotenzial' erscheint, wird im Tagesgeschäft zur konkreten Bremse, wie Toms Lagerbeispiel zeigt." },
        { text: "Dass Tom für seine neue, globale Rolle nicht ausreichend qualifiziert ist.", correct: false, feedback: "Toms Herausforderung liegt nicht an mangelnder Qualifikation, sondern an der strukturellen Fragmentierung der Systemlandschaft." },
      ],
    },
    {
      id: "m1_4b", type: "persona", charKey: "carlos",
      intro: "Vertrieb ist für mich heute ein anderes Spiel. Früher hatte ich ein Team, einen Markt, ein CRM. Heute verhandle ich mit Kunden in vier Ländern, und jedes Mal muss ich mich fragen, in welchem System ich gerade eigentlich arbeite.",
      content: {
        background: "Carlos Ruiz ist zum VP Sales International aufgestiegen. Er verantwortet den Vertrieb über alle vier Landesgesellschaften hinweg: ein Vertrieb, der auf drei unterschiedlichen CRM-Systemen läuft, die kaum Daten austauschen.",
        personality: "Kundenorientiert, ambitioniert, zunehmend genervt davon, dass ihm die eigene Systemlandschaft im Weg steht statt ihn zu unterstützen.",
        tasks: ["Internationale Vertriebsstrategie", "Konzernweites Key-Account-Management", "Harmonisierung der Vertriebsprozesse"],
        painPoints: "Ein Großkunde, der in Deutschland und Frankreich gleichzeitig bestellt, taucht in den Systemen als zwei komplett unabhängige Kunden auf, mit unterschiedlichen Historien, unterschiedlichen Konditionen, keinerlei gemeinsamer Sicht.",
      },
      question: "Was beschreibt Carlos' Beispiel am treffendsten?",
      answers: [
        { text: "Ein reines Trainingsproblem: Die Vertriebsmitarbeitenden müssten nur besser geschult werden. Mit ausreichenden Schulungen ließen sich Dateninkonsistenzen in aller Regel durch sorgfältigere manuelle Eingabe kompensieren.", correct: false, feedback: "Das Problem liegt nicht in der Qualifikation der Mitarbeitenden, sondern in der fehlenden Datenintegration zwischen den Systemen selbst." },
        { text: "Fehlende Datenintegration verhindert eine konzernweit einheitliche Kundensicht, ein zentrales Symptom fragmentierter Enterprise-System-Landschaften.", correct: true, feedback: "Genau. Eine 'Single Source of Truth' für Kundendaten ist eines der Kernversprechen integrierter Enterprise Systems, und genau das geht bei unkoordiniertem Wachstum durch M&A verloren." },
        { text: "Das Problem betrifft nur den Vertrieb und hat keine weiteren Konsequenzen für das Unternehmen.", correct: false, feedback: "Fehlende Kundendatenintegration wirkt sich auch auf Controlling, Lieferketten und strategische Entscheidungen aus. Das Problem ist nicht auf den Vertrieb beschränkt." },
      ],
    },
    {
      id: "m1_4c", type: "persona", charKey: "lena",
      intro: "Ich sollte eigentlich Business Intelligence für den gesamten Konzern liefern. Stattdessen verbringe ich die meiste Zeit damit, Daten aus vier unterschiedlichen BI-Umgebungen manuell zusammenzuführen, bevor ich überhaupt anfangen kann zu analysieren.",
      content: {
        background: "Lena Fischer ist zur Head of Group Analytics aufgestiegen. Sie soll Maya und dem Führungsteam konzernweite Kennzahlen liefern, auf Basis von vier BI-Systemen mit völlig unterschiedlichen Datenmodellen.",
        personality: "Präzise, dateninteressiert, zunehmend frustriert davon, dass ihre eigentliche Aufgabe, die Analyse, zur Nebensache neben der Datenaufbereitung geworden ist.",
        tasks: ["Konzernweites Reporting", "Vereinheitlichung der Kennzahlenlogik", "Vorbereitung datenbasierter Entscheidungen für die Geschäftsführung"],
        painPoints: "Ein einfacher Vergleich des Umsatzes zwischen NEXUS Deutschland und NEXUS France dauert wegen unterschiedlicher Datenmodelle und Berichtsperioden mehrere Tage. Zeit, die für strategische Analyse fehlt.",
      },
      question: "Was ist die grundlegende Voraussetzung, damit Lena ihre eigentliche Aufgabe wieder erfüllen kann?",
      answers: [
        { text: "Lena benötigt vor allem leistungsfähigere Analysesoftware mit mehr Funktionen.", correct: false, feedback: "Zusätzliche Software-Funktionen lösen das Kernproblem nicht. Die Datenbasis selbst ist fragmentiert und inkonsistent." },
        { text: "Eine konsolidierte, konzernweite Datenintegration: Ohne einheitliche Datenbasis bleibt jede Analyse-Funktionalität wirkungslos.", correct: true, feedback: "Exakt. Das ist eine zentrale Lehre aus BI-Architekturen: Die beste Analysefähigkeit ist wertlos, wenn die zugrunde liegende Datenintegration fehlt. 'Garbage in, garbage out' gilt erst recht bei fragmentierten Konzernstrukturen." },
        { text: "Lena sollte einfach mit den Daten einer einzigen Landesgesellschaft arbeiten und die anderen ignorieren.", correct: false, feedback: "Das würde Mayas Bedarf an konzernweiten Entscheidungsgrundlagen nicht erfüllen und das eigentliche Problem nur umgehen statt lösen." },
      ],
    },
    {
      id: "m1_4d", type: "persona", charKey: "sophie",
      intro: "Ich bin seit drei Monaten hier. Priya hat mich gezielt geholt, weil bislang niemand die Systemlandschaft als Ganzes im Blick hatte, geschweige denn eine Zielarchitektur für die Konsolidierung. Ohne diese Struktur ist die anstehende Transformation nicht zu stemmen.",
      content: {
        background: "Sophie Lindqvist ist NEXUS Corps erste Enterprise Architect. Sie kommt aus einem großen internationalen Konzern, wo sie bereits mehrere System-Konsolidierungen begleitet hat. Priya hat sie gezielt rekrutiert, um eine konzernweite Zielarchitektur zu entwickeln.",
        personality: "Methodisch, erfahren, unbequem in der besten Bedeutung des Wortes: Sie stellt Fragen, die niemand bei NEXUS Corp bisher stellen wollte.",
        tasks: ["Entwicklung der konzernweiten Zielarchitektur", "Bewertung der Architektur-Komplexität", "Steuerung der S/4HANA-Transformationsstrategie"],
        painPoints: "In ihren ersten Wochen hat Sophie festgestellt, dass es bei NEXUS Corp bislang keine einzige vollständige Dokumentation der bestehenden Systemlandschaft gibt. Jede Landesgesellschaft kennt nur ihre eigene Welt.",
      },
      question: "Warum ist die Position einer Enterprise Architektin gerade jetzt für NEXUS Corp entscheidend?",
      answers: [
        { text: "Weil Enterprise Architects in erster Linie für die Auswahl neuer Softwareprodukte zuständig sind.", correct: false, feedback: "Softwareauswahl ist nur ein kleiner Teil der Aufgabe. Enterprise Architecture Management umfasst die ganzheitliche Steuerung von Geschäfts-, Daten-, Applikations- und Technologiearchitektur." },
        { text: "Weil eine Systemkonsolidierung dieser Größenordnung eine ganzheitliche, methodische Steuerung von Geschäfts- und IT-Architektur erfordert, eine Aufgabe, die bislang bei NEXUS Corp niemand explizit übernommen hat.", correct: true, feedback: "Genau. Enterprise Architecture Management schließt genau diese Lücke: Es verbindet die strategische, geschäftliche und technische Perspektive auf die Systemlandschaft, etwas, das bei organisch gewachsener Komplexität zwingend gebraucht wird." },
        { text: "Weil Priya nicht mehr in der Lage ist, technische Entscheidungen zu treffen. Nach Jahren in einer Führungsrolle sei es üblich, dass Führungskräfte zunehmend administrative Aufgaben übernehmen und operative Detailentscheidungen an Spezialisten abgeben.", correct: false, feedback: "Priya bleibt technisch kompetent. Die neue Rolle ergänzt ihr Team um spezialisierte Methodik für konzernweite Architekturarbeit, ersetzt sie aber nicht." },
      ],
    },
    {
      id: "m1_5", type: "definition", charKey: "priya",
      charMessage: "Bevor wir tief in die einzelnen Themen einsteigen, möchte ich Ihnen eine neue Kollegin vorstellen und den Rahmen erklären, in dem wir uns die nächsten Wochen bewegen werden.",
      definition: {
        term: "Large Enterprise Systems",
        summary: "Large Enterprise Systems bezeichnen Applikationsarchitekturen großer Unternehmen, die von einer Vielzahl an Standardsoftwaresystemen dominiert werden. Die schiere Anzahl an Systemen macht das Management zunehmend komplex und behindert die Entwicklung des gesamten Unternehmens.",
        aspects: [
          { icon: "🏗️", title: "Vom Applikations- zum Architektur- management", text: "Einzelne Systeme zu verwalten reicht nicht mehr. Die Gesamtarchitektur muss aktiv gestaltet werden" },
          { icon: "☁️", title: "Technologische Herausforderungen", text: "Cloud Computing verändert grundlegend, wie Systemlandschaften betrieben und integriert werden" },
          { icon: "🔗", title: "Organisation und Applikation", text: "Die Interdependenzen zwischen Unternehmensstruktur und IT-Architektur müssen aktiv gestaltet werden" },
          { icon: "📈", title: "Zukunftsrelevanz", text: "Konzeption, Entwicklung und Transformation von Applikationsarchitekturen gewinnen in der Praxis weiter an Bedeutung" },
        ],
        nexusContext: "NEXUS Corp mit seinen 47 Systemen über vier Landesgesellschaften ist ein Lehrbuchbeispiel für ein Large Enterprise System und genau für die Herausforderungen, die in den kommenden Wochen im Zentrum stehen werden.",
      },
      question: "Was unterscheidet die Herausforderung von 'Large Enterprise Systems' von der klassischen ES-Einführung, die Sie im Bachelor-Modul begleitet haben?",
      answers: [
        { text: "Es gibt keinen Unterschied: Die Herausforderungen sind identisch, nur die Firmengröße ändert sich. Größere Unternehmen benötigen lediglich mehr Lizenzen und Serverkapazität, die grundlegende Vorgehensweise bei der Systemeinführung bleibt unverändert.", correct: false, feedback: "Die Herausforderungen unterscheiden sich grundlegend: Bei der Ersteinführung ging es um Systemauswahl und -einführung, bei Large Enterprise Systems um Architektur-, Komplexitäts- und Integrationsmanagement bestehender, gewachsener Landschaften." },
        { text: "Bei Large Enterprise Systems geht es nicht mehr um die Einführung einzelner Systeme, sondern um die Gestaltung, Steuerung und Transformation komplexer, bereits bestehender Systemlandschaften.", correct: true, feedback: "Genau. Das Bachelor-Modul behandelte die Frage 'Welches System führen wir ein?', das Master-Modul behandelt die deutlich komplexere Frage 'Wie steuern wir eine bereits gewachsene, fragmentierte Landschaft?'" },
        { text: "Large Enterprise Systems sind ausschließlich ein Cloud-Computing-Thema und haben nichts mit Organisation zu tun.", correct: false, feedback: "Cloud Computing ist ein wichtiger Aspekt, aber die zentrale Herausforderung liegt im Zusammenspiel von Organisation und Applikationsarchitektur, nicht in der Technologie allein." },
      ],
    },
    {
      id: "m1_6", type: "reflection", charKey: "maya",
      message: "Ich muss ehrlich sein: Ich habe die erste Transformation als Erfolg gefeiert. Fünf Jahre später merke ich, dass Erfolg in der IT nie ein Endzustand ist, sondern ein fortlaufender Prozess. Bevor wir in die Details der einzelnen Themen einsteigen, möchte ich wissen, wie Sie die Situation einschätzen.",
      question: "Was ist die zentrale Lehre aus der Entwicklung von NEXUS Corp in den letzten fünf Jahren?",
      answers: [
        { text: "Dass Unternehmenswachstum grundsätzlich zu unlösbaren IT-Problemen führt und daher vermieden werden sollte.", correct: false, feedback: "Wachstum an sich ist nicht das Problem. Die fehlende architektonische Steuerung des Wachstums ist es." },
        { text: "Dass eine einmalige, erfolgreiche ES-Einführung kein Freibrief ist: Ohne kontinuierliches Architekturmanagement fragmentiert jede wachsende Systemlandschaft erneut.", correct: true, feedback: "Genau das ist die zentrale Erkenntnis, die uns durch das gesamte Master-Modul begleiten wird: IT-Architektur ist keine einmalige Aufgabe, sondern eine dauerhafte Führungsverantwortung." },
        { text: "Dass Priya als Head of Enterprise Architecture versagt hat und ausgetauscht werden sollte, da die Systemlandschaft trotz ihrer jahrelangen Verantwortung genauso fragmentiert wirkt wie zuvor.", correct: false, feedback: "Die Fragmentierung ist eine strukturelle Folge unkoordinierten Wachstums durch M&A, kein individuelles Versagen einer Person." },
      ],
    },
  ],
  outro: {
    charKey: "maya",
    message: "Willkommen zurück. Diesmal ist die Aufgabe größer, komplexer und ehrlich gesagt auch unbequemer als beim ersten Mal. Aber ich vertraue darauf, dass wir gemeinsam wieder eine Lösung finden, diesmal eine, die auch in fünf weiteren Jahren noch trägt.",
    xp: 300,
    badge: "🏗️ Konzern-Kennerin",
  },
};
