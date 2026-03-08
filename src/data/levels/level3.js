export const L3 = {
  intro: {
    charKey: "lena",
    message: "Maya hat mich heute Morgen in ihr Büro gerufen. Sie braucht eine Entscheidung: Sollen wir ein drittes Lager in Hamburg eröffnen oder lieber einen externen Logistikdienstleister beauftragen? Ich soll die Datenlage aufbereiten. Genau das ist meine Arbeit – aber bisher mache ich das in Excel, ohne jede systematische Methode. Heute zeige ich Ihnen, wie man ein Entscheidungsproblem mit BI-Methoden wirklich strukturiert.",
  },
  scenes: [
    {
      id: "3_1", type: "definition", charKey: "lena",
      charMessage: "Bevor wir Daten visualisieren, müssen wir das Problem selbst verstehen. Viele BI-Projekte scheitern daran, dass man sofort mit Dashboards anfängt – ohne das Entscheidungsproblem klar definiert zu haben.",
      definition: {
        term: "Entscheidungsproblem & -struktur",
        summary: "Ein Entscheidungsproblem liegt vor, wenn ein Entscheidungsträger zwischen mehreren Handlungsalternativen wählen muss, deren Konsequenzen von Umweltzuständen abhängen. Die Struktur umfasst: Ziel, Alternativen, Umweltzustände und Konsequenzen.",
        aspects: [
          { icon: "🎯", title: "Ziel",            text: "Was soll erreicht werden? Messbar und eindeutig formuliert – z.B. 'Logistikkosten minimieren bei gleichbleibender Lieferqualität'" },
          { icon: "🔀", title: "Alternativen",    text: "Welche Handlungsoptionen stehen zur Verfügung? Müssen vollständig und trennscharf sein" },
          { icon: "🌦️", title: "Umweltzustände", text: "Welche externen Faktoren beeinflussen das Ergebnis? Z.B. Nachfrageentwicklung, Marktveränderungen" },
          { icon: "📊", title: "Konsequenzen",    text: "Was folgt aus jeder Kombination von Alternative und Umweltzustand? Die Ergebnismatrix" },
        ],
        nexusContext: "Mayas Problem: Ziel = optimale Logistikstruktur. Alternativen = eigenes Lager Hamburg vs. externer Dienstleister. Umweltzustände = Nachfrage steigt stark / moderat / stagniert. Konsequenzen = Kosten und Lieferzeiten je Szenario.",
      },
      question: "Maya sagt: 'Ich will einfach wissen, was günstiger ist.' Warum reicht das als Entscheidungsziel nicht aus?",
      answers: [
        { text: "Weil 'günstiger' zu unspezifisch ist – Kosten müssen im Verhältnis zu Qualität, Risiko und Zeithorizont betrachtet werden.", correct: true, feedback: "Genau. Ein Entscheidungsziel muss operationalisierbar sein: Welche Kosten? Über welchen Zeitraum? Unter welchen Qualitätsbedingungen? Erst dann lässt sich eine Ergebnismatrix aufstellen." },
        { text: "Weil externe Dienstleister immer günstiger sind als eigene Lager.", correct: false, feedback: "Das ist eine pauschale Annahme, keine Analyse. Die Antwort hängt von Volumen, Wachstumsrate und Vertragsbedingungen ab – genau dafür braucht man ein strukturiertes Entscheidungsmodell." },
        { text: "Weil Maya als CEO keine operativen Entscheidungen treffen sollte.", correct: false, feedback: "Die Frage zielt nicht auf Mayas Rolle, sondern auf die Qualität der Zielformulierung. Standort- und Make-or-Buy-Entscheidungen sind typische strategische CEO-Entscheidungen." },
      ],
    },
    {
      id: "3_2", type: "definition", charKey: "lena",
      charMessage: "Jetzt kommen wir zur Technologie dahinter. BI-Systeme sind nicht einfach 'bessere Excel-Tabellen'. Sie folgen einer eigenen Architekturlogik – und die muss man verstanden haben, bevor man ein BI-Tool sinnvoll einsetzen kann.",
      definition: {
        term: "Business Intelligence (BI) – Grundarchitektur",
        summary: "Business Intelligence bezeichnet Methoden, Prozesse und Systeme zur Sammlung, Integration, Analyse und Präsentation von Unternehmensdaten mit dem Ziel, bessere Entscheidungen zu treffen. Kernbestandteile: Datenbasis, Analyseschicht, Visualisierungsschicht.",
        aspects: [
          { icon: "🗄️", title: "OLTP – Operative Systeme",   text: "Online Transaction Processing: Tagesgeschäft, Transaktionen, hohe Schreiblast – z.B. ERP, CRM. Optimiert für schnelle Einzeltransaktionen" },
          { icon: "📦", title: "Data Warehouse",              text: "Zentrale, historische, integrierte Datenbasis für Analysen. Getrennt vom operativen System – optimiert für Lesezugriffe" },
          { icon: "🔍", title: "OLAP – Analytische Systeme", text: "Online Analytical Processing: multidimensionale Analyse großer Datenmengen. Würfellogik: Slice, Dice, Drill-Down, Roll-Up" },
          { icon: "📈", title: "Visualisierung & Reporting",  text: "Dashboards, Berichte, Kennzahlen – die Schicht, die Entscheidungsträger direkt sehen. Wahl des richtigen Diagrammtyps ist entscheidend" },
        ],
        nexusContext: "Lena arbeitet heute noch ohne Data Warehouse: Sie zieht Daten manuell aus DATEV, Access und Excel (OLTP-Ebene) und konsolidiert sie selbst. Das ist ineffizient und fehleranfällig. Ein BI-System würde diese Schritte automatisieren.",
      },
      question: "Lena fragt sich: 'Soll ich die Analyse direkt auf der SAP-Datenbank laufen lassen?' Was spricht dagegen?",
      answers: [
        { text: "SAP ist zu teuer für zusätzliche Analysen.", correct: false, feedback: "Kosten sind ein praktisches Argument, aber nicht die konzeptionelle Antwort. Das eigentliche Problem ist architektonischer Natur." },
        { text: "Schwere Analyseabfragen auf OLTP-Systemen belasten das Tagesgeschäft – OLAP-Analysen sollten auf einem separaten Data Warehouse laufen.", correct: true, feedback: "Richtig! OLTP-Systeme sind für schnelle Schreiboperationen optimiert. Große Leseabfragen (z.B. Jahresvergleiche) würden das operative System verlangsamen und Transaktionen blockieren. Deshalb trennt man OLTP und OLAP durch ein Data Warehouse." },
        { text: "SAP unterstützt keine Analysen.", correct: false, feedback: "Das stimmt nicht – SAP hat eigene BI-Module. Das konzeptionelle Argument betrifft die Systemarchitektur: Analyse und Transaktion sollten aus Performancegründen getrennt werden." },
      ],
    },
    {
      id: "3_3", type: "chartpicker", charKey: "lena",
      charMessage: "Maya braucht eine Entscheidungsvorlage für den Vorstand. Ich habe die Daten aufbereitet – aber welche Visualisierung ist für welche Aussage die richtige? Das ist keine Geschmacksfrage, sondern Methode.",
      intro: "Wählen Sie für jede Analysefrage den passenden Diagrammtyp. Jede Auswahl ist begründet – es gibt eine beste Antwort.",
      questions: [
        {
          question: "Maya will wissen: Wie haben sich unsere Logistikkosten über die letzten 4 Quartale entwickelt?",
          context: "Es geht um eine zeitliche Entwicklung eines Wertes.",
          options: [
            { type: "Liniendiagramm", icon: "📈", description: "Zeigt Entwicklung über Zeit – ideal für Trends und Verläufe", correct: true,  feedback: "Richtig! Liniendiagramme eignen sich perfekt für zeitliche Verläufe. Der Trend ist auf einen Blick erkennbar." },
            { type: "Tortendiagramm", icon: "🥧", description: "Zeigt Anteile am Ganzen – ideal für Zusammensetzung",       correct: false, feedback: "Tortendiagramme zeigen Anteile, keine Zeitverläufe. Für Entwicklung über Quartale ungeeignet." },
            { type: "Streudiagramm",  icon: "⚬⚬", description: "Zeigt Korrelation zwischen zwei Variablen",                correct: false, feedback: "Streudiagramme zeigen Zusammenhänge zwischen zwei Variablen – nicht zeitliche Entwicklungen eines Wertes." },
          ],
        },
        {
          question: "Tom will sehen: Welcher unserer drei Lagerstandorte hat den größten Anteil an den Gesamtkosten?",
          context: "Es geht um Anteile an einem Ganzen zu einem Zeitpunkt.",
          options: [
            { type: "Balkendiagramm", icon: "📊", description: "Vergleicht absolute Werte verschiedener Kategorien",       correct: false, feedback: "Balkendiagramme zeigen absolute Vergleiche gut – aber für Anteile am Ganzen ist ein anderes Format besser geeignet." },
            { type: "Tortendiagramm", icon: "🥧", description: "Zeigt Anteile am Ganzen – ideal für Zusammensetzung",      correct: true,  feedback: "Genau! Tortendiagramme kommunizieren Anteile intuitiv. Bei drei Standorten ist die Aufteilung auf einen Blick lesbar." },
            { type: "Liniendiagramm", icon: "📈", description: "Zeigt Entwicklung über Zeit",                              correct: false, feedback: "Liniendiagramme zeigen Zeitverläufe, keine Anteile. Für Kostenverteilung zwischen Standorten ungeeignet." },
          ],
        },
        {
          question: "Lena will prüfen: Gibt es einen Zusammenhang zwischen Auftragsvolumen und Lieferzeit?",
          context: "Es geht um die Beziehung zwischen zwei numerischen Variablen.",
          options: [
            { type: "Balkendiagramm", icon: "📊", description: "Vergleicht Kategorien – gut für Rankings",     correct: false, feedback: "Balkendiagramme vergleichen Kategorien. Für den Zusammenhang zwischen zwei numerischen Größen ist ein anderes Format nötig." },
            { type: "Liniendiagramm", icon: "📈", description: "Zeigt zeitliche Verläufe",                      correct: false, feedback: "Liniendiagramme zeigen Zeitreihen. Hier geht es nicht um Zeit, sondern um die Beziehung zwischen zwei Variablen." },
            { type: "Streudiagramm",  icon: "⚬⚬", description: "Zeigt Korrelation – ideal für Zusammenhänge", correct: true,  feedback: "Perfekt! Streudiagramme machen Korrelationen sichtbar. Jeder Punkt ist ein Auftrag – die Wolke zeigt, ob hohe Volumina mit längeren Lieferzeiten zusammenhängen." },
          ],
        },
        {
          question: "Carlos will vergleichen: Wie hoch sind die Vertriebskosten pro Region im Vergleich – absolut?",
          context: "Es geht um den Vergleich absoluter Werte zwischen Kategorien.",
          options: [
            { type: "Balkendiagramm", icon: "📊", description: "Vergleicht absolute Werte – ideal für Rankings",      correct: true,  feedback: "Richtig! Balkendiagramme sind der Goldstandard für Kategorienvergleiche. Länge = Wert – intuitiv und präzise." },
            { type: "Tortendiagramm", icon: "🥧", description: "Zeigt Anteile – schwer zu vergleichen bei ähnlichen Werten", correct: false, feedback: "Bei ähnlich großen Regionen werden Torten schwer lesbar. Balken ermöglichen präzisere Vergleiche absoluter Werte." },
            { type: "Streudiagramm",  icon: "⚬⚬", description: "Zeigt Zusammenhänge zwischen zwei Variablen",         correct: false, feedback: "Streudiagramme zeigen Korrelationen – nicht den direkten Vergleich von Kostenwerten zwischen Regionen." },
          ],
        },
      ],
    },
    {
      id: "3_4", type: "definition", charKey: "lena",
      charMessage: "Wir haben jetzt Diagrammtypen kennengelernt – aber in der Praxis entscheidet noch etwas anderes über die Qualität einer BI-Visualisierung: die Kennzahlen dahinter. Nicht jede Zahl ist eine gute Kennzahl.",
      definition: {
        term: "Kennzahlen & KPIs im BI-Kontext",
        summary: "Eine Kennzahl verdichtet komplexe Sachverhalte in eine messbare Größe. Ein KPI (Key Performance Indicator) ist eine besonders entscheidungsrelevante Kennzahl, die direkt mit einem strategischen Ziel verknüpft ist. Gute KPIs sind: spezifisch, messbar, relevant, zeitgebunden.",
        aspects: [
          { icon: "📐", title: "Absolute Kennzahlen", text: "Rohwerte ohne Bezug – z.B. 'Logistikkosten: 240.000 €'. Aussagekraft begrenzt ohne Vergleichswert" },
          { icon: "📏", title: "Relative Kennzahlen", text: "Verhältnisgrößen – z.B. 'Logistikkosten je Auftrag: 48 €'. Ermöglichen Vergleiche über Zeit und zwischen Einheiten" },
          { icon: "🧭", title: "KPI",                 text: "Key Performance Indicator: Kennzahl mit direktem Strategiebezug. Z.B. 'On-Time-Delivery-Rate' als KPI für Lieferqualität" },
          { icon: "⚠️", title: "Häufiger Fehler",    text: "Zu viele Kennzahlen im Dashboard. Dashboards mit 30+ Kennzahlen sind unlesbar – weniger ist mehr" },
        ],
        nexusContext: "Mayas aktuelles 'Dashboard' (Lenas Excel) enthält 47 Spalten. Niemand liest alles. Ziel: 5–7 KPIs, die wirklich entscheidungsrelevant sind – Umsatz, Marge, Lieferperformance, Lagerreichweite, Kundenzufriedenheit.",
      },
      question: "Lenas Bericht zeigt: 'Logistikkosten Q3: 312.000 €'. Maya fragt: 'Ist das gut oder schlecht?' Was fehlt?",
      answers: [
        { text: "Ein Vergleichswert – z.B. Vorquartal, Budget oder Benchmark – um die absolute Zahl einordnen zu können.", correct: true,  feedback: "Exakt! Absolute Kennzahlen sind ohne Referenzwert bedeutungslos. 312.000 € könnten ein Rekordtief oder eine Katastrophe sein – ohne Vergleich weiß man es nicht." },
        { text: "Eine genauere Aufschlüsselung der Kosten nach Kostenarten.", correct: false, feedback: "Mehr Detail ist nicht immer besser. Das eigentliche Problem ist die fehlende Einordnung – absoluter Wert ohne Referenz hat keine Aussagekraft." },
        { text: "Die Unterschrift des Controllers zur Bestätigung der Zahl.", correct: false, feedback: "Formale Freigaben lösen das inhaltliche Problem nicht. Die Frage ist konzeptionell: Absolute Kennzahlen brauchen Referenzwerte, um Entscheidungen zu ermöglichen." },
      ],
    },
    {
      id: "3_5", type: "matching", charKey: "lena",
      charMessage: "Zum Abschluss ein Test: Ich beschreibe Analysesituationen aus dem NEXUS-Alltag. Ordnen Sie jede Situation dem richtigen BI-Begriff oder Diagrammtyp zu.",
      instruction: "Klicken Sie zuerst einen Begriff, dann die passende Situation.",
      pairs: [
        { situation: "Tom will sehen, ob sein Lager in München im letzten Jahr günstiger geworden ist.",              term: "Liniendiagramm" },
        { situation: "Priya fragt: Wie viel Prozent unserer IT-Kosten entfallen auf Hardware, Software und Personal?", term: "Tortendiagramm" },
        { situation: "Carlos analysiert: Kaufen Kunden mit höherem Jahresumsatz auch mehr Produkte pro Bestellung?",  term: "Streudiagramm" },
        { situation: "Maya vergleicht die Vertriebskosten der vier deutschen Regionen direkt miteinander.",            term: "Balkendiagramm" },
        { situation: "Lena liest Transaktionsdaten aus SAP und lädt sie zur Analyse in ein separates Analysesystem.", term: "Data Warehouse" },
        { situation: "Die 'On-Time-Delivery-Rate' wird täglich gemessen und direkt mit dem Ziel 95% verglichen.",     term: "KPI" },
      ],
    },
    {
      id: "3_6", type: "reflection", charKey: "maya",
      message: "Lena hat mir heute gezeigt, wie man ein Entscheidungsproblem wirklich strukturiert – und welche Visualisierung welche Aussage trägt. Das klingt methodisch, aber der Unterschied ist enorm: Ich treffe jetzt Entscheidungen auf Basis von Evidenz, nicht von Bauchgefühl. Das Lager Hamburg? Ich weiß jetzt genau, welche Daten ich brauche, bevor ich entscheide.",
      question: "Was ist der wichtigste Schritt, bevor man ein BI-Dashboard für eine Entscheidung aufbaut?",
      answers: [
        { text: "Das richtige BI-Tool auswählen und installieren.", correct: false, feedback: "Technologie ist Mittel, kein Ziel. Ohne klares Entscheidungsproblem und definierte KPIs wird auch das beste Tool ein buntes Dashboard ohne Mehrwert." },
        { text: "Das Entscheidungsproblem strukturieren: Ziel, Alternativen, Umweltzustände und relevante Kennzahlen definieren.", correct: true, feedback: "Genau das ist die Kernbotschaft. BI beginnt nicht mit Technologie, sondern mit der Frage: Welche Entscheidung soll unterstützt werden? Erst dann weiß man, welche Daten und welche Visualisierungen gebraucht werden." },
        { text: "Alle verfügbaren Daten in ein Dashboard laden und dann schauen, was auffällt.", correct: false, feedback: "Das ist der häufigste Fehler in der BI-Praxis: Data Overload ohne Entscheidungsfokus. 47-Spalten-Berichte wie Lenas Excel sind das Ergebnis – niemand kann damit sinnvoll arbeiten." },
      ],
    },
  ],
  outro: {
    charKey: "lena",
    message: "Sie haben heute gelernt, wie man Entscheidungsprobleme strukturiert, BI-Architekturen versteht und Visualisierungen gezielt einsetzt. Das ist der Unterschied zwischen Daten haben und Daten nutzen.",
    xp: 250,
    badge: "📊 BI-Analytikerin",
  },
};
