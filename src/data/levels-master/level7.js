export const ML7 = {
  intro: {
    charKey: "priya",
    message: "Wir haben jetzt eine Template-Strategie. Aber ein Template ist kein einmaliges Artefakt. Es lebt, verändert sich, wird gewartet. Application Lifecycle Management gibt uns den Rahmen, um genau das zu steuern.",
  },
  scenes: [
    {
      id: "m7_1", type: "definition", charKey: "priya",
      charMessage: "Die Idee, den gesamten Lebenszyklus eines Produkts zu managen, kommt ursprünglich nicht aus der Software, sondern aus der klassischen Industrie.",
      definition: {
        term: "Product Lifecycle Management als Vorbild",
        summary: "Product Lifecycle Management (PLM) ist die unternehmerische Aktivität, ein Produkt über seinen gesamten Lebenszyklus hinweg möglichst effektiv zu managen, von der ersten Idee bis zur Außerbetriebnahme und Entsorgung (Stark, 2011, S. 1).",
        aspects: [
          { icon: "💡", title: "Anforderungen & Produktplanung", text: "Die erste Idee für ein Produkt wird konkretisiert und geplant" },
          { icon: "🔧", title: "Entwicklung & Produktion", text: "Das Produkt wird entwickelt, getestet und in Serie produziert" },
          { icon: "⚙️", title: "Betrieb", text: "Das Produkt wird genutzt und unterstützt" },
          { icon: "♻️", title: "Recycling", text: "Am Ende des Lebenszyklus wird das Produkt stillgelegt und entsorgt" },
        ],
        nexusContext: "Diese Analogie ist hilfreich für NEXUS Corp: Auch die S/4HANA-Landschaft wird nicht einmalig 'fertig' sein. Sie durchläuft denselben Zyklus aus Anforderung, Entwicklung, Betrieb und irgendwann auch Ablösung.",
      },
      question: "Warum eignet sich die PLM-Analogie aus der physischen Produktwelt für das Management von Software?",
      answers: [
        { text: "Weil Software und physische Produkte identische Materialkosten haben, da beide über vergleichbare Herstellungs- und Rohstoffkosten kalkuliert werden.", correct: false, feedback: "Materialkosten sind bei Software nicht vergleichbar. Die Analogie funktioniert auf einer anderen Ebene." },
        { text: "Weil beide einen vergleichbaren Lebenszyklus durchlaufen, von der ersten Anforderung über Entwicklung und Betrieb bis zur Außerbetriebnahme, auch wenn die konkreten Aktivitäten unterschiedlich sind.", correct: true, feedback: "Genau. Die strukturelle Analogie liegt im Lebenszyklus-Gedanken selbst: Beide Produktarten erfordern durchgängiges Management von der Idee bis zur Stilllegung, nicht nur punktuelle Entwicklung." },
        { text: "Weil physische Produkte grundsätzlich komplexer sind als Software und daher als Vorbild dienen, da ihre Entwicklung deutlich mehr Fachdisziplinen und Fertigungsschritte koordinieren muss.", correct: false, feedback: "Die Komplexität ist nicht der Grund für die Analogie. Es geht um die strukturelle Übertragbarkeit des Lebenszyklus-Konzepts." },
      ],
    },
    {
      id: "m7_2", type: "definition", charKey: "priya",
      charMessage: "Übertragen auf Software ergibt sich daraus das Application Lifecycle Management: ein Konzept, das gerade bei Large Enterprise Systems immer wichtiger wird.",
      definition: {
        term: "Application Lifecycle Management (ALM)",
        summary: "Application Lifecycle Management strebt das ganzheitliche Management von Applikationen von der Anforderung über die Entwicklung bis zur Wartung an, um Applikationen aus einer Lebenszyklusperspektive wirtschaftlich zu gestalten.",
        aspects: [
          { icon: "📈", title: "Kürzere Durchlaufzeiten", text: "Wie bei physischen Produkten steigt der Druck, Software schneller bereitzustellen" },
          { icon: "🔗", title: "Zunehmende Durchdringung", text: "Informationen durchdringen zunehmend Prozesse und Produkte. Software wird allgegenwärtiger" },
          { icon: "💰", title: "Softwarefehler sind teuer", text: "Fehler sind für Entwicklung UND Betrieb kostspielig, nicht nur einmalig bei der Entwicklung" },
          { icon: "🔄", title: "Rückkopplung von Betrieb zu Entwicklung", text: "Nach der Ersteinführung wird die systematische Rückmeldung aus dem Betrieb in die Weiterentwicklung über Releases immer wichtiger" },
        ],
        nexusContext: "Für NEXUS Corp ist besonders der letzte Punkt entscheidend: Nach dem Go-Live der S/4HANA-Konsolidierung darf die Systementwicklung nicht enden. Rückmeldungen aus dem Betrieb aller vier Landesgesellschaften müssen systematisch in künftige Releases einfließen.",
      },
      question: "Warum wird betont, dass die Rückkopplung von Betrieb zu Entwicklung gerade nach der Ersteinführung, über Releases hinweg, so wichtig wird?",
      answers: [
        { text: "Weil vor der Ersteinführung noch keine Betriebserfahrungen existieren, die zurückgemeldet werden könnten: die Rückkopplung wird erst nach dem ersten Go-Live überhaupt möglich.", correct: true, feedback: "Richtig. Vor dem ersten produktiven Einsatz gibt es keine Betriebsdaten. Erst nach dem Go-Live entstehen reale Nutzungserfahrungen, die systematisch in nachfolgende Releases zurückfließen können." },
        { text: "Weil Rückkopplung nur bei gescheiterten Projekten überhaupt relevant wird, da erfolgreiche Systeme per Definition keine weiteren Anpassungen mehr benötigen.", correct: false, feedback: "Rückkopplung ist bei jedem laufenden System relevant, unabhängig vom Projekterfolg. Sie ist Teil des normalen ALM-Zyklus." },
        { text: "Weil Releases grundsätzlich unabhängig vom laufenden Betrieb geplant werden sollten.", correct: false, feedback: "Das Gegenteil beschreibt die zentrale ALM-Idee: Releases sollten gerade durch Betriebserfahrungen informiert werden, nicht unabhängig davon geplant werden." },
      ],
    },
    {
      id: "m7_3", type: "definition", charKey: "priya",
      charMessage: "ALM ist nicht nur eine Idee: es gibt konkrete Aufgaben und einen Lebenszyklus, der sich in der Praxis in sechs Phasen gliedert.",
      definition: {
        term: "Lebenszyklus von Anwendungen",
        summary: "Ein lifecycle-orientiertes Anwendungsmanagement betrachtet drei Perspektiven gemeinsam: Applikationssystemsicht, Organisationssicht und Lifecycle-Sicht, und durchläuft dabei sechs wiederkehrende Phasen.",
        aspects: [
          { icon: "📝", title: "Requirements", text: "Anforderungen an die Applikation werden erfasst und dokumentiert" },
          { icon: "📐", title: "Design", text: "Die Lösung wird konzeptionell entworfen" },
          { icon: "🔨", title: "Build", text: "Die Applikation wird entwickelt bzw. konfiguriert" },
          { icon: "🧪", title: "Test", text: "Die entwickelte Lösung wird gegen die Anforderungen geprüft" },
          { icon: "🚀", title: "Deploy", text: "Die Applikation wird in die produktive Umgebung überführt" },
          { icon: "⚡", title: "Optimize", text: "Basierend auf Betriebserfahrungen wird die Applikation weiterentwickelt. Der Zyklus beginnt erneut" },
        ],
        nexusContext: "Für die S/4HANA-Einführung bei NEXUS Corp durchläuft jede der vier Landesgesellschaften diesen Zyklus, aber nicht unbedingt synchron: NEXUS Deutschland könnte bereits in der Optimize-Phase sein, während NEXUS Parts noch bei Requirements steht.",
      },
      question: "Warum ist es wichtig, dass der ALM-Zyklus als Kreis (nicht als lineare Kette) dargestellt wird?",
      answers: [
        { text: "Weil die Optimize-Phase neue Anforderungen generiert, die wieder in die Requirements-Phase einfließen. Der Zyklus ist ein fortlaufender Prozess, kein einmaliges lineares Projekt.", correct: true, feedback: "Genau. Diese zirkuläre Darstellung ist konzeptionell entscheidend: Anwendungsmanagement endet nicht mit dem Deploy, sondern die Betriebserfahrungen aus Optimize fließen als neue Anforderungen zurück in den Zyklus." },
        { text: "Weil alle sechs Phasen in der Praxis gleichzeitig stattfinden und die Reihenfolge irrelevant ist.", correct: false, feedback: "Die Phasen haben durchaus eine sinnvolle Reihenfolge. Die zirkuläre Form bedeutet Wiederholung des gesamten Zyklus, nicht Gleichzeitigkeit aller Phasen." },
        { text: "Weil ein linearer Prozess technisch nicht darstellbar wäre und Diagrammwerkzeuge grundsätzlich nur zirkuläre Darstellungsformen unterstützen.", correct: false, feedback: "Ein linearer Prozess wäre technisch durchaus darstellbar. Der Kreis wurde bewusst gewählt, um die kontinuierliche Rückkopplung zu betonen." },
      ],
    },
    {
      id: "m7_4", type: "matching", charKey: "priya",
      charMessage: "Es gibt zahlreiche Tools, die ALM in der Praxis unterstützen. Ordnen Sie jede NEXUS-Situation dem passenden ALM-Aufgabenbereich zu.",
      instruction: "Klicken Sie zuerst einen Aufgabenbereich, dann die passende Situation.",
      pairs: [
        { situation: "Tom formuliert die Anforderung: 'Das neue System muss Lagerbestände in Echtzeit über alle vier Landesgesellschaften synchronisieren.'", term: "Requirements" },
        { situation: "Sophie entwirft ein Architekturkonzept, wie die Echtzeitsynchronisation technisch umgesetzt werden könnte.", term: "Design" },
        { situation: "Ein Entwicklerteam konfiguriert die entsprechenden SAP-Module gemäß dem Architekturkonzept.", term: "Build" },
        { situation: "Nach dem Go-Live meldet NEXUS France, dass die Synchronisation bei sehr hohem Bestellaufkommen verzögert reagiert. Dies fließt in die nächste Release-Planung ein.", term: "Optimize" },
      ],
    },
    {
      id: "m7_5", type: "reflection", charKey: "priya",
      message: "ALM gibt uns den strukturellen Rahmen für das, was in den nächsten Levels folgt: Testmanagement und Softwaretransport sind konkrete Ausprägungen einzelner ALM-Phasen. Bevor wir tiefer einsteigen, möchte ich Ihre Einschätzung hören.",
      question: "Was ist die wichtigste konzeptionelle Verbindung zwischen ALM und der bevorstehenden S/4HANA-Konsolidierung von NEXUS Corp?",
      answers: [
        { text: "ALM zeigt, dass die S/4HANA-Einführung nicht als einmaliges Projekt mit klarem Enddatum verstanden werden sollte, sondern als Beginn eines fortlaufenden Managementzyklus.", correct: true, feedback: "Genau. Das ist die zentrale Lehre: Der Go-Live ist nicht das Ende der Arbeit, sondern der Übergang von Build/Test/Deploy in die Optimize-Phase, von der aus der Zyklus erneut beginnt." },
        { text: "ALM ist nur für die technische Entwicklungsphase relevant und hat nach dem Go-Live keine Bedeutung mehr.", correct: false, feedback: "Das Gegenteil ist der Kern von ALM: Gerade die Optimize-Phase nach dem Go-Live ist zentral für den langfristigen Erfolg." },
        { text: "ALM ersetzt die Notwendigkeit von Tests, da der Zyklus automatisch Fehler behebt, sobald Betriebserfahrungen in die nächste Optimize-Phase einfließen.", correct: false, feedback: "ALM ersetzt kein Testmanagement. Im Gegenteil, Test ist eine der sechs zentralen ALM-Phasen und bleibt unverzichtbar." },
      ],
    },
  ],
  outro: {
    charKey: "priya",
    message: "Application Lifecycle Management gibt uns die Landkarte. Jetzt schauen wir uns eine der wichtigsten Phasen genauer an: das Testmanagement. Denn bei einem System dieser Größenordnung entscheidet die Testqualität maßgeblich über den Projekterfolg.",
    xp: 320,
    badge: "🔄 ALM-Kennerin",
  },
};
