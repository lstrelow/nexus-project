export const ML4 = {
  intro: {
    charKey: "sophie",
    message: "Wir alle sagen ständig 'NEXUS Corp ist komplex geworden'. Aber was heißt das eigentlich präzise? Bevor wir die Systemlandschaft konsolidieren können, müssen wir Komplexität messbar machen, sonst diskutieren wir nur über Bauchgefühle.",
  },
  scenes: [
    {
      id: "m4_1", type: "definition", charKey: "sophie",
      charMessage: "Fangen wir grundlegend an. Was passiert eigentlich systematisch, wenn ein Unternehmen mit langer Tradition wächst?",
      definition: {
        term: "Komplexitätsentstehung in wachsenden Unternehmen",
        summary: "Enterprise Systems spiegeln die fundamentalen Prozesse und Strukturen eines Unternehmens wider. Unternehmen sind Systeme im Sinne der Systemtheorie und unterliegen einem stetigen Wandel, mit direkten Folgen für die Komplexität ihrer Enterprise Systems.",
        aspects: [
          { icon: "📈", title: "Steigende Elementanzahl", text: "Mehr Elemente und Relationen im Unternehmen und im System" },
          { icon: "🔄", title: "Zunehmende Änderungen", text: "Häufigere Anpassungen im Zeitverlauf durch Wachstum und Marktveränderungen" },
          { icon: "🏗️", title: "Steigende Hierarchisierung", text: "Aufgaben werden zunehmend hierarchisch strukturiert" },
          { icon: "📊", title: "= steigende Komplexität", text: "Die Summe dieser Effekte führt zu einer strukturell wachsenden Systemkomplexität" },
        ],
        nexusContext: "NEXUS Corp ist ein Lehrbuchbeispiel: Aus einem übersichtlichen Mittelständler mit sechs sauber integrierten Komponenten ist durch drei Übernahmen ein Konzern mit 47 Systemen und vier eigenständigen Organisationseinheiten geworden: exakt das hier beschriebene Muster.",
      },
      question: "Warum reicht 'mehr Systeme' als Erklärung für steigende Komplexität nicht aus?",
      answers: [
        { text: "Weil die Anzahl der Systeme überhaupt keinen Einfluss auf die Komplexität hat, da ausschließlich organisatorische Faktoren wie Hierarchisierung über den Grad der Komplexität entscheiden.", correct: false, feedback: "Die Anzahl der Elemente ist durchaus ein wichtiger Faktor, aber eben nicht der einzige." },
        { text: "Weil Komplexität sich aus dem Zusammenspiel mehrerer Faktoren ergibt: Elementanzahl, Änderungshäufigkeit und Hierarchisierung wirken gemeinsam, nicht isoliert.", correct: true, feedback: "Genau. Diese drei Faktoren addieren sich zur Gesamtkomplexität. Ein Unternehmen mit vielen, aber stabilen und flach organisierten Systemen kann weniger komplex sein als eines mit wenigen, aber volatilen und tief hierarchisierten Systemen." },
        { text: "Weil nur die Hierarchisierung von Aufgaben für Komplexität verantwortlich ist, nicht die Systemanzahl.", correct: false, feedback: "Hierarchisierung ist einer von drei Faktoren. Sie allein erklärt die Komplexitätsentstehung nicht vollständig." },
      ],
    },
    {
      id: "m4_2", type: "definition", charKey: "sophie",
      charMessage: "Komplexität lässt sich in zwei grundlegende Dimensionen unterteilen: Das ist die wichtigste konzeptionelle Unterscheidung, die wir in diesem Level brauchen.",
      definition: {
        term: "Strukturelle und dynamische Komplexität",
        summary: "Strukturelle Komplexität beschreibt die Anzahl und Verschiedenheit der Systemelemente sowie deren Interaktionen zu einem Zeitpunkt. Dynamische Komplexität beschreibt Häufigkeit und Stärke der Änderungen dieser Elemente im Zeitverlauf.",
        aspects: [
          { icon: "🧱", title: "Strukturelle Komplexität: niedrig", text: "Wenige, ähnliche Elemente mit geringer Interaktion → 'einfaches System'" },
          { icon: "🏗️", title: "Strukturelle Komplexität: hoch", text: "Viele, unterschiedliche Elemente mit hoher Interaktion → 'kompliziertes System'" },
          { icon: "⚡", title: "Dynamische Komplexität: hoch + niedrige Struktur", text: "Häufige, starke Änderungen bei geringer Struktur → 'dynamisches System'" },
          { icon: "🌪️", title: "Beide hoch", text: "Hohe Struktur- UND Änderungsdynamik gemeinsam → 'komplexes System' im engeren Sinne" },
        ],
        nexusContext: "NEXUS Deutschland ist strukturell komplex, aber wenig dynamisch: Die Architektur ist gewachsen, ändert sich aber selten. NEXUS Logistics dagegen ist dynamisch: als Startup-Übernahme ändert sich das System dort ständig. Die Kombination aus beidem macht die Konzern-IT insgesamt zu einem hochkomplexen System.",
      },
      question: "Ein System hat viele unterschiedliche Elemente mit intensiven Interaktionen, ändert sich aber kaum über die Zeit. Wie ist dieses System einzuordnen?",
      answers: [
        { text: "Als 'einfaches System', weil es sich kaum ändert. Stabilität über die Zeit gilt gemeinhin als das wichtigste Merkmal eines einfachen, gut beherrschbaren Systems.", correct: false, feedback: "Fehlende Änderung bedeutet niedrige dynamische Komplexität. Das sagt nichts über die strukturelle Komplexität aus, die hier laut Beschreibung hoch ist." },
        { text: "Als 'kompliziertes System': hohe strukturelle Komplexität (viele, unterschiedliche, stark interagierende Elemente) bei gleichzeitig niedriger dynamischer Komplexität.", correct: true, feedback: "Richtig. Die Matrix aus struktureller und dynamischer Komplexität liefert genau diese Einordnung: hohe Struktur + niedrige Dynamik = kompliziertes (aber nicht dynamisches) System." },
        { text: "Als 'komplexes System', weil viele Elemente automatisch hohe Dynamik bedeuten.", correct: false, feedback: "Elementanzahl und Änderungsdynamik sind unabhängige Dimensionen. Viele Elemente bedeuten nicht automatisch häufige Änderungen." },
      ],
    },
    {
      id: "m4_3", type: "definition", charKey: "sophie",
      charMessage: "Um Komplexität nicht nur zu beschreiben, sondern zu messen, gibt es in der Literatur konkrete Kennzahlen. Die bekannteste ist das Entropiemaß.",
      definition: {
        term: "Kennzahlen zur Komplexitätserfassung: Entropiemaß",
        summary: "Das Entropiemaß (EM) misst die Konzentration bzw. Verteilung von IT-Systemen in einem Unternehmen (Jacquemin & Berry, 1979). Es nimmt seinen Minimalwert 0 bei einem 'Monopol' (nur ein dominantes System) an und sein Maximum bei vollständig gleichverteilten Systemanteilen.",
        aspects: [
          { icon: "🔢", title: "Formel-Prinzip", text: "EM = Σ f·ln(1/f): berechnet über die relativen Anteile aller Systeme im Unternehmen" },
          { icon: "0️⃣", title: "Minimalwert bei Monopol", text: "Dominiert ein einziges System vollständig, ist EM = 0: geringste Komplexität" },
          { icon: "📊", title: "Herfindahl-Hirschman-Index", text: "Zur Berechnung der relativen Anteile wird der HHI herangezogen (Schmidt et al., 2012, S. 5): steigt bei geringerer Systemanzahl oder höherer Verschiedenartigkeit" },
          { icon: "⚠️", title: "Grenzen der Kennzahl", text: "Heterogenität wird nicht eindeutig definiert: z.B. ob SAP ERP 6.0 und SAP ERP S/4HANA als gleich oder verschieden gelten, bleibt unklar" },
        ],
        nexusContext: "Würde man das Entropiemaß auf NEXUS Corp anwenden: NEXUS Deutschland hätte ein niedriges EM (SAP dominiert klar), während der Gesamtkonzern durch die vier heterogenen Landesgesellschaften ein deutlich höheres EM aufweisen würde.",
      },
      question: "Was bedeutet ein hoher HHI-Wert bezogen auf die IT-Landschaft eines Unternehmens?",
      answers: [
        { text: "Eine hohe Konzentration: wenige, dominante Systeme bestimmen die Landschaft.", correct: true, feedback: "Genau. Ein hoher HHI steigt bei geringerer Systemanzahl oder höherer Verschiedenartigkeit. Er zeigt eine hohe Konzentration an, nicht Fragmentierung." },
        { text: "Eine hohe Fragmentierung mit vielen gleichberechtigten Systemen.", correct: false, feedback: "Das Gegenteil ist der Fall. Ein hoher HHI zeigt Konzentration, nicht Fragmentierung an." },
        { text: "Eine automatisch hohe Wirtschaftlichkeit der IT-Landschaft.", correct: false, feedback: "Der HHI misst Konzentration, nicht Wirtschaftlichkeit. Beide Größen hängen nicht direkt zusammen." },
      ],
    },
    {
      id: "m4_4", type: "definition", charKey: "priya",
      charMessage: "Neben dem Entropiemaß gibt es einen zweiten, in der Praxis häufig genutzten Ansatz: die Formel nach Dern und Jung, die explizit die IT-Architektur betrachtet.",
      definition: {
        term: "IT-Architekturkomplexität nach Dern und Jung",
        summary: "Die Komplexität der IT-Architektur wird als Produkt aus drei Faktoren berechnet: Komponentenanzahl, Abhängigkeit zwischen den Komponenten und deren Homogenität (Dern & Jung, 2009, S. 670).",
        aspects: [
          { icon: "🧮", title: "Formel", text: "Komplexität = Komponentenanzahl × Abhängigkeit × Homogenität" },
          { icon: "🔢", title: "Komponentenanzahl", text: "Anzahl der Komponenten der IT-Architektur (Anwendungs- und/oder technologische Architektur)" },
          { icon: "🔗", title: "Abhängigkeit", text: "Anzahl der Informationsbeziehungen im Verhältnis zu allen theoretisch möglichen Beziehungen" },
          { icon: "🎭", title: "Homogenität", text: "Gleichartigkeit der enthaltenen IT-Systeme: Wert zwischen 1 (maximal homogen) und 2 (maximal heterogen)" },
        ],
        nexusContext: "Für NEXUS Corp ergäbe sich bei einer Berechnung nach Dern & Jung eine deutlich höhere Komplexität als bei NEXUS Deutschland allein: mehr Komponenten (47 statt 6), hohe Abhängigkeiten zwischen unkoordinierten Systemen, und eine hohe Heterogenität durch vier unterschiedliche Landesgesellschaften.",
      },
      question: "Warum ist die 'Homogenität' als dritter Faktor in der Dern-und-Jung-Formel notwendig, obwohl bereits Komponentenanzahl und Abhängigkeit erfasst werden?",
      answers: [
        { text: "Weil zwei Unternehmen mit identischer Komponentenanzahl und identischen Abhängigkeiten trotzdem unterschiedlich komplex sein können, je nachdem, wie ähnlich oder verschieden die Systeme selbst sind.", correct: true, feedback: "Genau. Fünf identische Systeme mit denselben Abhängigkeiten sind leichter zu verwalten als fünf völlig unterschiedliche Systeme mit denselben Abhängigkeiten. Die Homogenität erfasst genau diesen zusätzlichen Effekt." },
        { text: "Weil Homogenität eigentlich dasselbe misst wie Komponentenanzahl und daher redundant, aber unschädlich ist.", correct: false, feedback: "Homogenität ist keine Redundanz. Sie erfasst eine eigenständige Dimension (Gleichartigkeit), die weder durch Anzahl noch durch Abhängigkeit abgedeckt wird." },
        { text: "Weil die Formel ohne einen dritten Faktor mathematisch nicht lösbar wäre, da ein reines Produkt aus zwei Faktoren keine sinnvoll interpretierbare Kennzahl ergeben würde.", correct: false, feedback: "Das ist keine mathematische Notwendigkeit, sondern eine inhaltliche Entscheidung. Homogenität erfasst eine eigenständige, relevante Komplexitätsdimension." },
      ],
    },
    {
      id: "m4_5", type: "reflection", charKey: "sophie",
      message: "Wir haben jetzt zwei Kennzahlensysteme kennengelernt: das Entropiemaß und die Dern-und-Jung-Formel. Beide haben ihre Berechtigung, aber auch ihre Grenzen. Bevor wir weitermachen: Was ist die zentrale Schwäche, die beiden Ansätzen gemeinsam ist?",
      question: "Was ist eine grundlegende, gemeinsame Einschränkung von Entropiemaß und Dern-und-Jung-Formel?",
      answers: [
        { text: "Beide Kennzahlen sind zu kompliziert zu berechnen und daher in der Praxis nutzlos.", correct: false, feedback: "Die Berechnungskomplexität ist nicht die zentrale Einschränkung. Beide Formeln sind mit vorhandenen Daten praktisch anwendbar." },
        { text: "Beide messen nur die strukturelle Komplexität zu einem Zeitpunkt, die dynamische Komplexität und Pfadabhängigkeiten vergangener Entscheidungen bleiben unberücksichtigt.", correct: true, feedback: "Genau das ist die zentrale Einschränkung: Beide Kennzahlen sind statische Momentaufnahmen. Sie erfassen nicht, wie sich Systeme im Zeitverlauf entwickelt haben oder welche Pfadabhängigkeiten vergangene Entscheidungen erzeugt haben." },
        { text: "Beide Kennzahlen können nur bei SAP-Systemen angewendet werden, da sie ursprünglich speziell zur Analyse von SAP-Modullandschaften entwickelt wurden.", correct: false, feedback: "Beide Ansätze sind herstellerunabhängig konzipiert und lassen sich grundsätzlich auf jede IT-Landschaft anwenden." },
      ],
    },
    {
      id: "m4_6", type: "definition", charKey: "sophie",
      charMessage: "Eine wichtige Erkenntnis, bevor wir zu Maßnahmen kommen: Vergangene Entscheidungen determinieren, wie sich ein System zukünftig weiterentwickeln kann, auch wenn sie zum damaligen Zeitpunkt optimal erschienen.",
      definition: {
        term: "Path Dependency in der Systementwicklung",
        summary: "In der Vergangenheit getroffene Entscheidungen führen zu Systemzuständen, die die zukünftige Systemweiterentwicklung determinieren. Enterprise Systems sind mitunter pfadabhängig: eine zu einem Zeitpunkt optimale Entscheidung kann sich später als problematisch herausstellen.",
        aspects: [
          { icon: "🛤️", title: "Determinierung durch Vergangenheit", text: "Frühere Entscheidungen schränken den Raum zukünftiger Möglichkeiten ein" },
          { icon: "📸", title: "Momentaufnahme-Problem", text: "Strukturelle Komplexitätskennzahlen erfassen nur den Zustand zu einem Zeitpunkt, nicht die Entwicklungsgeschichte" },
          { icon: "🔀", title: "Optimal zu t, problematisch zu t+1", text: "Ein Release-Wechsel, der heute sinnvoll erscheint, kann sich später als Fehlentscheidung erweisen" },
        ],
        nexusContext: "Die Entscheidung, NEXUS Logistics' eigenständiges WMS nach der Übernahme unverändert weiterlaufen zu lassen, erschien 2022 pragmatisch und kostengünstig. Fünf Jahre später ist genau diese Entscheidung eine der größten Hürden für die S/4HANA-Konsolidierung: ein klassisches Beispiel für Path Dependency.",
      },
      question: "Was folgt aus dem Konzept der Path Dependency für die aktuelle S/4HANA-Konsolidierungsentscheidung von NEXUS Corp?",
      answers: [
        { text: "Da frühere Entscheidungen ohnehin nicht mehr änderbar sind, sollte auf jede weitere Architekturplanung verzichtet werden.", correct: false, feedback: "Path Dependency bedeutet nicht Resignation. Im Gegenteil, das Bewusstsein für Pfadabhängigkeit hilft, künftige Entscheidungen mit Blick auf langfristige Konsequenzen bewusster zu treffen." },
        { text: "Die heutige Konsolidierungsentscheidung sollte bewusst als langfristig determinierend verstanden werden: zukünftige Weiterentwicklungsmöglichkeiten sollten von Anfang an mitgedacht werden.", correct: true, feedback: "Exzellent. Path Dependency lehrt, dass die S/4HANA-Entscheidung nicht nur für heute, sondern für die nächsten Jahre den Handlungsspielraum von NEXUS Corp prägen wird. Eine Erkenntnis, die die Sorgfalt bei dieser Entscheidung erhöhen sollte." },
        { text: "Path Dependency ist nur ein theoretisches Konzept ohne praktische Relevanz für Unternehmen wie NEXUS Corp, da sich Entscheidungen im Zweifel jederzeit folgenlos revidieren lassen.", correct: false, feedback: "Das Gegenteil zeigt das NEXUS-Logistics-Beispiel: Die 2022 getroffene Entscheidung hat sehr konkrete, praktische Konsequenzen für die heutige Transformation." },
      ],
    },
    {
      id: "m4_7", type: "matching", charKey: "priya",
      charMessage: "Testen wir das Verständnis der Maßnahmen zum Komplexitätsmanagement. Ordnen Sie jede NEXUS-Situation der passenden Managementebene zu.",
      instruction: "Klicken Sie zuerst eine Ebene, dann die passende Situation.",
      pairs: [
        { situation: "Sophie reduziert die Anzahl der bei NEXUS France genutzten SAP-Module von 14 auf 8, indem ungenutzte Module deaktiviert werden.", term: "Applikation" },
        { situation: "Priya definiert eine verbindliche Entwicklungsumgebung, die für alle künftigen Individualentwicklungen bei NEXUS Corp gilt.", term: "Technologie" },
        { situation: "NEXUS Corp führt ein IT-Governance-Gremium ein, das alle vier Landesgesellschaften vor neuen Systemanschaffungen konsultieren müssen.", term: "Organisation" },
      ],
    },
    {
      id: "m4_8", type: "reflection", charKey: "sophie",
      message: "Wir haben jetzt gesehen, dass Komplexität zwar messbar ist, aber Kennzahlen allein reichen nicht aus, um sie zu managen. Was ist Ihre wichtigste Erkenntnis für die weitere Architekturarbeit bei NEXUS Corp?",
      question: "Warum reichen Komplexitätskennzahlen wie Entropiemaß oder die Dern-und-Jung-Formel allein nicht aus, um Komplexität bei NEXUS Corp zu managen?",
      answers: [
        { text: "Weil Kennzahlen zwar den Status quo messbar machen, aber keine Skala liefern, ab welchem Wert Komplexität als problematisch gilt, und weil Wahrnehmung von Komplexität grundsätzlich subjektiv bleibt.", correct: true, feedback: "Genau. Kennzahlen sind ein notwendiger, aber kein hinreichender erster Schritt. Es braucht eine strategische Antwort, die über reine Metriken hinausgeht, etwa durch Standardisierung und aktives Applikationsmanagement." },
        { text: "Weil Kennzahlen grundsätzlich falsch berechnet werden und keine verlässlichen Werte liefern.", correct: false, feedback: "Die Kennzahlen sind methodisch korrekt berechenbar. Das Problem liegt nicht in der Berechnung, sondern in der fehlenden Skala und der subjektiven Bewertung der Ergebnisse." },
        { text: "Weil Komplexität bei NEXUS Corp inzwischen zu hoch ist, um überhaupt gemessen zu werden, da die schiere Anzahl an Systemen und Abhängigkeiten jede belastbare Berechnung unmöglich macht.", correct: false, feedback: "Auch sehr komplexe Systeme lassen sich mit den vorgestellten Kennzahlen messen. Das Messen selbst ist nicht das Problem, sondern die Interpretation und Handlungsableitung." },
      ],
    },
  ],
  outro: {
    charKey: "sophie",
    message: "Komplexität ist jetzt kein Bauchgefühl mehr, sondern etwas, das wir strukturiert diskutieren können, auch wenn wir wissen, dass Kennzahlen nur der erste Schritt sind. Als Nächstes schauen wir uns an, wie wir diese Erkenntnisse in ein systematisches Enterprise Architecture Management überführen.",
    xp: 340,
    badge: "📐 Komplexitäts-Analystin",
  },
};
