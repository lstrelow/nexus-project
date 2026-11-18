export const ML4 = {
  intro: {
    charKey: "sophie",
    message: "Wir alle sagen ständig 'NEXUS Corp ist komplex geworden'. Aber was heißt das eigentlich? Bevor wir die Systemlandschaft konsolidieren können, müssen wir Komplexität messbar machen, sonst diskutieren wir nur über Bauchgefühle.",
  },
  scenes: [
    {
      id: "m4_1", type: "definition", charKey: "sophie",
      charMessage: "Fangen wir grundlegend an. Was passiert eigentlich, wenn ein Unternehmen mit langer Tradition wächst?",
      definition: {
        term: "Komplexitätsentstehung in wachsenden Unternehmen",
        summary: "Enterprise Systems spiegeln die fundamentalen Prozesse und Strukturen eines Unternehmens wider. Unternehmen unterliegen einem stetigen Wandel, mit direkten Folgen für die Komplexität ihrer Enterprise Systems.",
        aspects: [
          { icon: "📈", title: "Steigende Elementanzahl", text: "Mehr Elemente und Relationen im Unternehmen und im System" },
          { icon: "🔄", title: "Zunehmende Änderungen", text: "Häufigere Anpassungen im Zeitverlauf durch Wachstum und Marktveränderungen" },
          { icon: "🏗️", title: "Steigende Hierarchisierung", text: "Aufgaben werden zunehmend hierarchisch strukturiert" },
          { icon: "📊", title: "= steigende Komplexität", text: "Die Summe dieser Effekte führt zu einer strukturell wachsenden Systemkomplexität" },
        ],
        nexusContext: "NEXUS Corp ist ein Lehrbuchbeispiel: Aus einem übersichtlichen Mittelständler mit sechs sauber integrierten Komponenten ist durch drei Übernahmen ein Konzern mit 47 Systemen und vier eigenständigen Organisationseinheiten geworden: exakt das hier beschriebene Muster.",
      },
      question: "Zwei Konzerne betreiben jeweils 40 Systeme. Bei Konzern X haben sich Organisation und Systeme seit Jahren kaum verändert. Konzern Y hat drei Übernahmen und die Einführung einer zusätzlichen Hierarchieebene hinter sich. Was folgt daraus nach dem Modell der Komplexitätsentstehung?",
      answers: [
        { text: "Konzern Y ist voraussichtlich komplexer, weil neben der Elementanzahl auch Änderungshäufigkeit und zunehmende Hierarchisierung zur Komplexität beitragen.", correct: true, feedback: "Genau. Die Elementanzahl ist nur einer von drei Treibern. Häufige Änderungen und zunehmende Hierarchisierung erhöhen die Komplexität zusätzlich, auch bei gleicher Anzahl von Systemen." },
        { text: "Beide sind etwa gleich komplex, weil die Komplexität einer Systemlandschaft im Kern durch die Anzahl ihrer Elemente und Relationen bestimmt wird.", correct: false, feedback: "Die Anzahl der Elemente und Relationen ist ein wichtiger Treiber, erklärt aber nicht alles. Das Modell nennt zusätzlich die Änderungshäufigkeit und die Hierarchisierung als Ursachen steigender Komplexität." },
        { text: "Konzern X ist voraussichtlich komplexer, weil seit Jahren unveränderte Systeme technische Altlasten anhäufen, die mehr zusätzliche Relationen erzeugen als Übernahmen.", correct: false, feedback: "Technische Altlasten sind ein reales Problem, werden im Modell der Komplexitätsentstehung aber nicht als Treiber genannt. Nach dem Modell steigt die Komplexität gerade durch Änderungen und Hierarchisierung, die bei Konzern Y deutlich ausgeprägter sind." },
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
      question: "Nach der Konsolidierung hätte NEXUS Corp weniger, aber stark miteinander integrierte Systeme, die im Zuge weiterer Übernahmen häufig angepasst werden müssen. Wie ist dieses Zielbild einzuordnen?",
      answers: [
        { text: "Weiterhin als komplexes System: Die starke Interaktion hält die strukturelle Komplexität hoch, und die häufigen Anpassungen erzeugen zusätzlich hohe dynamische Komplexität.", correct: true, feedback: "Richtig. Strukturelle Komplexität umfasst nicht nur die Anzahl, sondern auch die Verschiedenheit und die Interaktion der Elemente. Eine Reduktion der Systemanzahl senkt sie deshalb nicht automatisch. Zusammen mit hoher Änderungsdynamik ergibt sich ein komplexes System im engeren Sinne." },
        { text: "Als dynamisches System, weil die Reduktion der Systemanzahl die strukturelle Komplexität senkt und nur die hohe Änderungsdynamik als Komplexitätstreiber verbleibt.", correct: false, feedback: "Die strukturelle Komplexität hängt nicht nur von der Anzahl ab, sondern auch von der Interaktion zwischen den Elementen. Bei stark integrierten Systemen bleibt sie trotz geringerer Anzahl hoch." },
        { text: "Als kompliziertes System, weil Anpassungen an stark integrierten Systemen leichter beherrschbar sind und daher kaum zur dynamischen Komplexität beitragen.", correct: false, feedback: "Dynamische Komplexität beschreibt Häufigkeit und Stärke der Änderungen, nicht wie gut sie beherrschbar sind. Bei stark integrierten Systemen wirkt jede Änderung zudem auf viele andere Elemente, was die Dynamik eher verstärkt." },
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
      question: "Sophie berechnet das Entropiemaß für die geplante Zielarchitektur. Es fällt deutlich niedriger aus als heute, obwohl S/4HANA und das alte ECC von NEXUS France während einer längeren Übergangsphase parallel laufen werden. Welche Schwäche der Kennzahl könnte das Ergebnis verzerren?",
      answers: [
        { text: "Das Entropiemaß berücksichtigt nur die Anzahl der Systeme, nicht deren Verteilung, weshalb parallel betriebene Systeme nicht korrekt abgebildet werden.", correct: false, feedback: "Das Entropiemaß misst gerade die Verteilung über die relativen Anteile der Systeme, nicht nur deren Anzahl. Die Schwäche liegt an anderer Stelle." },
        { text: "Das Entropiemaß steigt bei Konzentration auf ein dominantes System, weshalb ein sinkender Wert eigentlich auf zunehmende Fragmentierung hindeutet.", correct: false, feedback: "Hier ist die Logik umgekehrt: Das Entropiemaß erreicht seinen Minimalwert 0 bei einem 'Monopol' und steigt mit gleichmäßigerer Verteilung. Ein sinkender Wert zeigt also zunehmende Konzentration an." },
        { text: "Ob ECC und S/4HANA als gleiche oder als unterschiedliche Systeme gelten, ist nicht eindeutig definiert: Werden beide als 'SAP' zusammengefasst, erscheint die Landschaft homogener, als sie ist.", correct: true, feedback: "Genau. Die Kennzahl definiert Heterogenität nicht eindeutig. Je nachdem, ob unterschiedliche Releases desselben Herstellers als ein System oder als zwei gezählt werden, fällt das Ergebnis deutlich anders aus. Das Ergebnis hängt also von einer Annahme ab, die offengelegt werden muss." },
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
      question: "Sophie vergleicht zwei Optionen. Option 1 reduziert die Landschaft auf 20 Komponenten von vier verschiedenen Herstellern, die über Punkt-zu-Punkt-Schnittstellen verbunden sind. Option 2 reduziert nur auf 30 Komponenten, die aber fast alle auf derselben Plattform laufen und über eine zentrale Integrationsplattform mit deutlich weniger direkten Beziehungen verbunden sind. Was lässt sich nach Dern und Jung sagen?",
      answers: [
        { text: "Option 2 kann trotz höherer Komponentenanzahl die geringere Komplexität aufweisen, weil die Formel multiplikativ ist und geringere Abhängigkeit und höhere Homogenität die größere Anzahl ausgleichen können.", correct: true, feedback: "Genau. Da die drei Faktoren multipliziert werden, wirkt jeder von ihnen gleichermaßen auf das Ergebnis. Allein der Homogenitätsfaktor kann zwischen 1 und 2 liegen und damit die Komplexität halbieren oder verdoppeln." },
        { text: "Option 1 ist eindeutig weniger komplex, weil die Komponentenanzahl der dominierende Faktor der Formel ist und Abhängigkeit und Homogenität das Ergebnis nur geringfügig beeinflussen.", correct: false, feedback: "Die Formel kennt keinen dominierenden Faktor. Als Produkt verändern auch Abhängigkeit und Homogenität das Ergebnis proportional. Eine reine Betrachtung der Anzahl greift deshalb zu kurz." },
        { text: "Beide Optionen lassen sich nach Dern und Jung nicht vergleichen, solange die Betriebskosten unbekannt sind, weil die Formel Komplexität erst im Verhältnis zu den Kosten aussagekräftig macht.", correct: false, feedback: "Die Formel enthält keine Kostengröße. Sie ermöglicht einen Vergleich auf Basis von Anzahl, Abhängigkeit und Homogenität. Kosten sind für die Entscheidung relevant, aber nicht Teil der Komplexitätsmessung." },
      ],
    },
    {
      id: "m4_5", type: "reflection", charKey: "sophie",
      message: "Wir haben jetzt zwei Kennzahlensysteme kennengelernt: das Entropiemaß und die Dern-und-Jung-Formel. Beide haben ihre Berechtigung, aber auch ihre Grenzen. Bevor wir weitermachen: Was ist die zentrale Schwäche, die beiden Ansätzen gemeinsam ist?",
      question: "Beide Kennzahlen bewerten NEXUS Deutschland als vergleichsweise wenig komplex. Trotzdem dauert dort jede größere Änderung Monate, weil frühere Entscheidungen für Individualentwicklungen den Spielraum stark einschränken. Welche gemeinsame Einschränkung der Kennzahlen zeigt sich daran?",
      answers: [
        { text: "Beide erfassen nur den Zustand zu einem Zeitpunkt: Die Entwicklungsgeschichte und die Pfadabhängigkeiten früherer Entscheidungen, die heute Änderungen erschweren, bleiben unsichtbar.", correct: true, feedback: "Genau. Beide Kennzahlen sind statische Momentaufnahmen der strukturellen Komplexität. Sie zeigen nicht, wie die Landschaft entstanden ist und welche früheren Entscheidungen heute den Handlungsspielraum einschränken." },
        { text: "Beide unterschätzen die Komplexität, weil sie ausschließlich Standardsoftware zählen und Individualentwicklungen grundsätzlich aus der Berechnung ausklammern.", correct: false, feedback: "Keine der beiden Kennzahlen schließt Individualentwicklungen grundsätzlich aus. Dern und Jung zählen etwa alle Komponenten der Architektur. Die Einschränkung liegt in der fehlenden zeitlichen Perspektive." },
        { text: "Beide sind auf eine einzelne Landesgesellschaft nicht sinnvoll anwendbar, weil sie für den Vergleich ganzer Konzernlandschaften mit mehreren Organisationseinheiten entwickelt wurden.", correct: false, feedback: "Beide Kennzahlen lassen sich auf beliebige Abgrenzungen anwenden, auch auf eine einzelne Landesgesellschaft. Das Problem ist nicht der Betrachtungsumfang, sondern die statische Natur der Messung." },
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
      question: "Für NEXUS Parts gibt es zwei Optionen: den Ersatzteilkatalog jetzt ablösen oder ihn über eine individuelle Schnittstelle an S/4HANA anbinden. Die Anbindung ist heute deutlich günstiger. Was folgt aus dem Konzept der Path Dependency für diese Entscheidung?",
      answers: [
        { text: "Die günstigere Anbindung wählen, weil sich Pfadabhängigkeiten ohnehin erst rückblickend erkennen lassen und eine Entscheidung nur auf Basis der heute bekannten Kosten getroffen werden kann.", correct: false, feedback: "Pfadabhängigkeiten sind nicht vollständig vorhersehbar, aber das Konzept fordert gerade, absehbare Einschränkungen bewusst mitzudenken. Die NEXUS-Logistics-Entscheidung von 2022 zeigt, was passiert, wenn nur die heutigen Kosten zählen." },
        { text: "Nicht nur nach heutigen Kosten entscheiden, sondern bewerten, welche künftigen Optionen eine individuelle Schnittstelle einschränkt, etwa bei Releasewechseln oder weiteren Übernahmen.", correct: true, feedback: "Genau. Path Dependency bedeutet nicht, dass eine Option grundsätzlich falsch ist. Die Entscheidung muss aber die Folgekosten und Einschränkungen einbeziehen, die sie für künftige Entscheidungen erzeugt." },
        { text: "Den Katalog in jedem Fall jetzt ablösen, weil jede Individuallösung zwangsläufig eine Pfadabhängigkeit erzeugt, deren Beseitigung später teurer wird als heute.", correct: false, feedback: "Path Dependency ist kein Argument für eine pauschale Ablösung. Auch die Ablösung erzeugt einen neuen Pfad. Das Konzept fordert eine bewusste Abwägung der langfristigen Folgen, keine automatische Entscheidung in eine Richtung." },
      ],
    },
    {
      id: "m4_7", type: "matching", charKey: "priya",
      charMessage: "Testen wir das Verständnis der Maßnahmen zum Komplexitätsmanagement. Ordnen Sie jede NEXUS-Situation der passenden Managementebene zu.",
      instruction: "Klicken Sie zuerst eine Ebene, dann die passende Situation.",
      pairs: [
        { situation: "Sophie stellt fest, dass NEXUS France und NEXUS Deutschland zwei verschiedene Lösungen für die Reisekostenabrechnung betreiben, und lässt die französische Lösung nach einer Übergangsphase abschalten.", term: "Applikation" },
        { situation: "Priya legt fest, dass alle Anwendungen künftig nur noch auf zwei freigegebenen Datenbankplattformen betrieben werden dürfen, unabhängig davon, welche Fachanwendung darauf läuft.", term: "Technologie" },
        { situation: "Die IT-Verantwortlichen der vier Landesgesellschaften berichten künftig nicht mehr an die lokalen Geschäftsführungen, sondern direkt an Priya.", term: "Organisation" },
      ],
    },
    {
      id: "m4_8", type: "reflection", charKey: "sophie",
      message: "Wir haben jetzt gesehen, dass Komplexität zwar messbar ist, aber Kennzahlen allein reichen nicht aus, um sie zu managen. Was ist Ihre wichtigste Erkenntnis für die weitere Architekturarbeit bei NEXUS Corp?",
      question: "Lena berichtet dem Vorstand: 'Unser Entropiemaß ist im letzten Jahr von 2,1 auf 1,8 gesunken.' Maya fragt: 'Ist das gut genug?' Was ist die fachlich angemessene Antwort?",
      answers: [
        { text: "'Ja, denn jede Senkung des Entropiemaßes bedeutet weniger Komplexität und damit eine bessere Steuerbarkeit der Landschaft.'", correct: false, feedback: "Die Senkung zeigt eine Richtung, aber keine Bewertung. Ob 1,8 ausreichend ist, lässt sich daraus nicht ablesen. Zudem erfasst das Entropiemaß weder Dynamik noch Pfadabhängigkeiten, die die Steuerbarkeit ebenfalls bestimmen." },
        { text: "'Das lässt sich erst beurteilen, wenn zusätzlich die Dern-und-Jung-Formel berechnet ist, da beide Kennzahlen zusammen einen absoluten Zielwert ergeben.'", correct: false, feedback: "Auch zwei Kennzahlen zusammen liefern keine Skala, ab der Komplexität unproblematisch ist. Eine zweite Kennzahl ergänzt die Perspektive, löst aber das Bewertungsproblem nicht." },
        { text: "'Das lässt sich allein aus der Kennzahl nicht beantworten: Es gibt keine Skala, ab der Komplexität problematisch ist. Der Wert muss an den strategischen Zielen und der erlebten Steuerbarkeit gemessen werden.'", correct: true, feedback: "Genau. Kennzahlen machen Entwicklungen sichtbar, liefern aber keinen Maßstab dafür, was 'gut genug' ist. Zudem bleibt die Wahrnehmung von Komplexität subjektiv. Die Bewertung erfordert deshalb eine strategische Einordnung, die über die Metrik hinausgeht." },
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
