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
      question: "Wo stößt die Übertragung des Product Lifecycle Managements auf Software am deutlichsten an Grenzen?",
      answers: [
        { text: "Bei der Außerbetriebnahme: Software lässt sich anders als physische Produkte jederzeit ohne Aufwand abschalten, weshalb diese Phase im ALM praktisch entfällt.", correct: false, feedback: "Die Außerbetriebnahme von Software ist oft aufwendig: Daten müssen migriert oder archiviert, Schnittstellen abgebaut und Abhängigkeiten aufgelöst werden. Die Ablösung von Altsystemen bei NEXUS Corp zeigt das deutlich." },
        { text: "Bei der Produktion: Software wird nicht in Serie gefertigt, sondern beliebig kopiert. Der Aufwand verlagert sich stattdessen in Weiterentwicklung und Betrieb über viele Releases hinweg.", correct: true, feedback: "Genau. Die Lebenszyklus-Analogie trägt strukturell, aber die Phase 'Produktion' hat bei Software kaum eine Entsprechung. Dafür gewinnt die kontinuierliche Weiterentwicklung über Releases an Gewicht, was ALM von PLM unterscheidet." },
        { text: "Bei den Anforderungen: Anforderungen an Software lassen sich anders als bei physischen Produkten vollständig vor Entwicklungsbeginn festlegen.", correct: false, feedback: "Bei Software ist eher das Gegenteil der Fall: Viele Anforderungen entstehen erst im Betrieb und fließen über Releases zurück in die Entwicklung. Genau diese Rückkopplung betont ALM." },
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
      question: "Nach dem Go-live wird das S/4HANA-Projektteam aufgelöst. Fehlermeldungen gehen an einen externen Support-Dienstleister, der sie einzeln behebt. Was fehlt aus Sicht des Application Lifecycle Managements?",
      answers: [
        { text: "Nichts Wesentliches, solange der Dienstleister alle Fehler zügig behebt, da die Wartung den stabilen Betrieb sichert und damit das Ziel des ALM erfüllt.", correct: false, feedback: "Stabiler Betrieb ist notwendig, aber nicht das ganze Ziel. ALM strebt an, Applikationen über den gesamten Lebenszyklus wirtschaftlich weiterzuentwickeln. Dafür reicht es nicht, Fehler einzeln zu beheben." },
        { text: "Ein umfassenderer Testprozess vor dem Go-live, da Fehler nach dem Go-live darauf hinweisen, dass in der Entwicklung nicht ausreichend getestet wurde.", correct: false, feedback: "Gründliche Tests sind wichtig, können aber nicht alle Erfahrungen aus dem realen Betrieb vorwegnehmen. Viele Erkenntnisse entstehen erst im produktiven Einsatz und müssen dann systematisch genutzt werden." },
        { text: "Die systematische Rückkopplung: Betriebserfahrungen müssen ausgewertet und als Anforderungen in die Planung künftiger Releases eingehen, statt nur einzeln als Störungen abgearbeitet zu werden.", correct: true, feedback: "Genau. Nach der Ersteinführung wird die Rückkopplung vom Betrieb in die Weiterentwicklung zum zentralen Hebel. Ein reiner Störungsdienst behebt Symptome, lernt aber nicht systematisch aus ihnen." },
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
      question: "NEXUS Deutschland befindet sich mit dem gemeinsamen Template bereits in der Optimize-Phase, NEXUS Parts steht noch bei den Requirements. Welche Herausforderung entsteht daraus?",
      answers: [
        { text: "Erkenntnisse aus dem Betrieb in Deutschland verändern das Template, während Parts seine Anforderungen noch an einem älteren Stand ausrichtet. Die Zyklen müssen über ein gemeinsames Release-Management abgestimmt werden.", correct: true, feedback: "Genau. Die Zyklen der Gesellschaften laufen zwar nicht synchron, sind aber über das gemeinsame Template miteinander verbunden. Ohne Abstimmung arbeitet Parts auf ein Ziel hin, das sich bereits verändert hat." },
        { text: "Keine besondere, weil die Lebenszyklen der Gesellschaften voneinander unabhängig sind und sich gegenseitig nicht beeinflussen.", correct: false, feedback: "Bei einem gemeinsamen Template sind die Zyklen gerade nicht unabhängig: Jede Optimierung in Deutschland verändert die Grundlage, auf der Parts seine Anforderungen formuliert." },
        { text: "NEXUS Parts sollte warten, bis Deutschland den Zyklus abgeschlossen hat, damit alle Gesellschaften auf einem fertigen Template aufsetzen.", correct: false, feedback: "Der ALM-Zyklus ist ein Kreis: Er wird nie abgeschlossen, sondern beginnt nach Optimize erneut. Auf ein 'fertiges' Template zu warten, würde bedeuten, unbegrenzt zu warten." },
      ],
    },
    {
      id: "m7_4", type: "matching", charKey: "priya",
      charMessage: "Es gibt zahlreiche Tools, die ALM in der Praxis unterstützen. Ordnen Sie jede NEXUS-Situation dem passenden ALM-Aufgabenbereich zu.",
      instruction: "Klicken Sie zuerst einen Aufgabenbereich, dann die passende Situation.",
      pairs: [
        { situation: "In einem Workshop mit Toms Team wird festgehalten, dass Disponentinnen und Disponenten die Bestände aller Lager in einer Sicht sehen müssen, ohne zwischen Systemen zu wechseln.", term: "Requirements" },
        { situation: "Sophie wägt ab, ob die konzernweite Bestandssicht über eine zentrale Datenbank oder über eine Integrationsplattform mit replizierten Daten umgesetzt werden soll.", term: "Design" },
        { situation: "Im Entwicklungssystem werden Lagerorte, Bewegungsarten und Berechtigungen gemäß dem abgestimmten Konzept eingerichtet.", term: "Build" },
        { situation: "Auswertungen der ersten drei Betriebsmonate zeigen, dass die Disposition in Frankreich die neue Bestandssicht kaum nutzt. Die Ursachen werden analysiert und für das nächste Release priorisiert.", term: "Optimize" },
      ],
    },
    {
      id: "m7_5", type: "reflection", charKey: "priya",
      message: "ALM gibt uns den strukturellen Rahmen für das, was in den nächsten Levels folgt: Testmanagement und Softwaretransport sind konkrete Ausprägungen einzelner ALM-Phasen. Bevor wir tiefer einsteigen, möchte ich Ihre Einschätzung hören.",
      question: "Maya möchte das Budget für die S/4HANA-Konsolidierung vollständig auf den Zeitraum bis zum Go-live verplanen. Was spricht aus Sicht des ALM dagegen?",
      answers: [
        { text: "Dass die Entwicklung in der Regel den größten Teil der Lebenszykluskosten ausmacht und deshalb eine zusätzliche Reserve für Nachbesserungen vor dem Go-live nötig ist.", correct: false, feedback: "Die Lebenszyklusperspektive lenkt den Blick gerade auf die Zeit nach dem Go-live: Betrieb, Wartung und Weiterentwicklung verursachen über die Jahre erhebliche Kosten. Eine Reserve vor dem Go-live greift zu kurz." },
        { text: "Dass der Go-live kein Endpunkt ist, sondern den Übergang in die Optimize-Phase markiert: Betrieb, Wartung und Weiterentwicklung über Releases verursachen dauerhaft Kosten, die von Anfang an eingeplant werden müssen.", correct: true, feedback: "Genau. Wer nur bis zum Go-live budgetiert, behandelt die Konsolidierung als einmaliges Projekt. ALM versteht sie als Beginn eines fortlaufenden Zyklus, dessen Kosten zur Wirtschaftlichkeitsbetrachtung gehören." },
        { text: "Dass ein festes Projektbudget mit agiler Entwicklung unvereinbar ist und daher für jedes Release ein eigenes Projekt mit separatem Budget beantragt werden sollte.", correct: false, feedback: "Das Problem ist nicht das feste Budget an sich, sondern der zu kurze Betrachtungszeitraum. Getrennte Projekte pro Release können zudem die Verantwortung für den Lebenszyklus zersplittern." },
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
