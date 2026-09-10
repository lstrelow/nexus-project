export const ML2 = {
  intro: {
    charKey: "maya",
    message: "Bevor wir mit der S/4HANA-Konsolidierung beginnen, müssen wir aus der Vergangenheit lernen, aus unserer eigenen, aber auch aus der anderer Unternehmen. Große ES-Projekte scheitern häufiger, als man denkt. Ich möchte, dass wir verstehen, woran das liegt, bevor wir denselben Fehler machen.",
  },
  scenes: [
    {
      id: "m2_1", type: "definition", charKey: "priya",
      charMessage: "Ich zeige Ihnen ein Beispiel, das mir jedes Mal eine Gänsehaut verschafft, weil es zeigt, wie auch etablierte Unternehmen mit enormen Ressourcen an einer ES-Einführung scheitern können.",
      definition: {
        term: "Gescheiterte ES-Einführung: Lidl eLWIS",
        summary: "Lidl startete 2011 das Projekt eLWIS (elektronisches Lidl Warenwirtschaftsinformationssystem) mit dem Ziel, das komplette Warenwirtschaftssystem auf SAP-Basis zu erneuern. 2018 wurde das Projekt nach Ausgaben von rund 500 Millionen Euro eingestellt.",
        aspects: [
          { icon: "📅", title: "Zeitrahmen", text: "Projektstart 2011, Projektstopp 2018: sieben Jahre Laufzeit ohne erfolgreichen Abschluss" },
          { icon: "💰", title: "Budget", text: "Ausgaben bis zum Stopp: rund 500 Millionen Euro" },
          { icon: "🖥️", title: "Beteiligte Systeme", text: "SAP Retail, SAP Transportmanagement, SAP Lagerverwaltung, SAP Shoplösung: ein umfassendes SAP-Ökosystem" },
          { icon: "🎯", title: "Ursprüngliches Ziel", text: "Ablösung des Altsystems und Abbildung integrierter Prozessketten vom Lieferanten bis zum Kunden" },
        ],
        nexusContext: "Für NEXUS Corp ist dieser Fall hoch relevant: Auch hier steht eine große, SAP-basierte Konsolidierung an, mit ähnlichem Umfang und ähnlichen Risiken wie bei Lidl.",
      },
      question: "Was war laut offizieller Begründung der zentrale Grund für den Abbruch von eLWIS?",
      answers: [
        { text: "SAP als Softwarehersteller hat sich aus dem Projekt zurückgezogen.", correct: false, feedback: "SAP war weiterhin als Implementierungspartner beteiligt (u.a. über KPS). Der Rückzug des Herstellers war nicht die Ursache." },
        { text: "Die ursprünglich definierten strategischen Ziele waren mit vertretbarem Aufwand nicht mehr erreichbar.", correct: true, feedback: "Genau das war die offizielle Begründung von Lidl. Über die Jahre wurden über 30 Systeme aus der bestehenden Infrastruktur in eLWIS integriert. Die Komplexität wuchs schneller, als das Projekt sie bewältigen konnte." },
        { text: "Es gab keinen ausreichenden Bedarf für ein neues Warenwirtschaftssystem bei Lidl.", correct: false, feedback: "Der Bedarf an einem modernen Warenwirtschaftssystem war unbestritten. Das Scheitern lag an der Umsetzung, nicht am fehlenden Bedarf." },
      ],
    },
    {
      id: "m2_2", type: "definition", charKey: "priya",
      charMessage: "Der Lidl-Fall ist kein Einzelfall. Wenn man sich anschaut, woran ES-Einführungen typischerweise scheitern, erkennt man wiederkehrende Muster.",
      definition: {
        term: "Gründe für das Scheitern von Systemeinführungen",
        summary: "Analysen gescheiterter ES-Projekte zeigen wiederkehrende strukturelle Ursachen, von fehlender Zielklarheit bis zu unterschätzter Komplexität.",
        aspects: [
          { icon: "🎯", title: "Fehlende Zielvorstellung", text: "Keine klare Zielvorstellung und keine belastbare Wirtschaftlichkeitsperspektive für das Projekt" },
          { icon: "🧩", title: "Systemvielfalt", text: "Eine Vielzahl unterschiedlicher Systeme verschiedener Hersteller (ERP, CRM, SCM etc.) erhöht die Komplexität exponentiell" },
          { icon: "🏗️", title: "Fehlendes Architektur- management", text: "Ohne Integrations- und Architekturmanagement wächst die Komplexität unkontrolliert" },
          { icon: "🔁", title: "Stammdaten-Redundanz", text: "Redundanz von Stammdaten, sowohl innerhalb einzelner Systeme als auch systemübergreifend" },
          { icon: "⏱️", title: "Zeitdruck und Kosten", text: "Zeitknappheit und hohe Kosten erzwingen oft überstürzte Entscheidungen" },
          { icon: "📉", title: "Fehlende Großprojekt- erfahrung", text: "Ohne Erfahrung mit Projekten dieser Größenordnung werden Risiken systematisch unterschätzt" },
        ],
        nexusContext: "NEXUS Corp weist bereits mehrere dieser Risikofaktoren auf: 47 Systeme unterschiedlicher Herkunft, keine dokumentierte Gesamtarchitektur, und, anders als Lidl, noch keine Erfahrung mit einem Projekt dieser Größenordnung.",
      },
      question: "Warum ist 'Zeitknappheit und hohe Kosten' ein eigenständiger Risikofaktor und nicht nur eine Folge der anderen Probleme?",
      answers: [
        { text: "Weil Zeitdruck grundsätzlich unabhängig von der Projektqualität existiert und keinen Einfluss auf Entscheidungen hat.", correct: false, feedback: "Das Gegenteil ist der Fall: Zeitdruck beeinflusst Entscheidungsqualität unmittelbar. Er ist kein neutraler Faktor." },
        { text: "Weil Zeit- und Kostendruck dazu führt, dass Teams unter Druck systematisch Abkürzungen nehmen, etwa bei Tests, Datenqualität oder Change Management, und dadurch neue Risiken erzeugen, statt bestehende zu lösen.", correct: true, feedback: "Richtig. Zeitdruck wirkt als Verstärker: Er verschlechtert die Qualität von Entscheidungen in allen anderen Risikobereichen, von Testabdeckung bis Stakeholder-Kommunikation." },
        { text: "Weil ausreichendes Budget automatisch alle anderen Risikofaktoren neutralisiert, da sich mit genug finanziellen Mitteln jedes organisatorische oder technische Problem lösen lässt.", correct: false, feedback: "Der Lidl-Fall widerlegt das direkt: 500 Millionen Euro Budget haben das Scheitern nicht verhindert." },
      ],
    },
    {
      id: "m2_3", type: "definition", charKey: "priya",
      charMessage: "Es gibt mittlerweile eine umfangreiche Forschung zu kritischen Erfolgsfaktoren von ERP- und ES-Einführungen. Eine Literaturanalyse hat die am häufigsten genannten Faktoren zusammengetragen.",
      definition: {
        term: "Kritische Erfolgsfaktoren: Literaturanalyse",
        summary: "Eine Auswertung von 18 Studien identifiziert wiederkehrende kritische Erfolgsfaktoren für ERP- und Enterprise-System-Einführungen (Mareai & Patil, 2012). Die am häufigsten genannten Faktoren sind über nahezu alle Studien hinweg konsistent.",
        aspects: [
          { icon: "👔", title: "Top Management Support", text: "Aktive, sichtbare Unterstützung durch die Unternehmensführung: der am häufigsten genannte Erfolgsfaktor überhaupt" },
          { icon: "👥", title: "Project Team", text: "Ein kompetentes, funktionsübergreifendes Projektteam mit klaren Verantwortlichkeiten" },
          { icon: "🎯", title: "Clear Objectives", text: "Klar definierte, messbare Projektziele als Grundlage aller Entscheidungen" },
          { icon: "🔄", title: "Change Management", text: "Aktives Management des organisatorischen Wandels, nicht nur der technischen Umstellung" },
          { icon: "💬", title: "Communication", text: "Kontinuierliche, transparente Kommunikation mit allen Stakeholdern während des gesamten Projekts" },
          { icon: "📊", title: "Data Conversion & Quality", text: "Sorgfältige Migration und Qualitätssicherung der Altdaten, oft unterschätzt, aber projektentscheidend" },
        ],
        nexusContext: "Bei der S/4HANA-Konsolidierung von NEXUS Corp wird sich zeigen, welche dieser Faktoren bereits vorhanden sind und wo Priya und ihr Team gezielt nachsteuern müssen.",
      },
      question: "Warum wird 'Top Management Support' in praktisch jeder Studie als wichtigster Erfolgsfaktor genannt?",
      answers: [
        { text: "Weil das Top-Management die Software am besten technisch versteht.",
          correct: false, feedback: "Technisches Verständnis ist nicht der Kern der Aussage. Es geht um Mandat, Priorisierung und Ressourcenfreigabe." },
        { text: "Weil ohne sichtbares Committment der Führungsebene notwendige Ressourcen, Priorisierung und organisatorische Durchsetzungskraft für ein Projekt dieser Tragweite fehlen.",
          correct: true, feedback: "Genau. ES-Einführungen erfordern Entscheidungen, die einzelne Abteilungen nicht allein treffen können. Ohne Top Management Support fehlt die Autorität, um abteilungsübergreifende Konflikte zu lösen." },
        { text: "Weil das Top-Management gesetzlich für den Projekterfolg haftet.",
          correct: false, feedback: "Es geht nicht um rechtliche Haftung, sondern um die praktische Notwendigkeit von Entscheidungsmacht und Ressourcenzuteilung." },
      ],
    },
    {
      id: "m2_4", type: "matching", charKey: "priya",
      charMessage: "Testen wir Ihr Verständnis. Ich beschreibe Situationen aus dem NEXUS-Konsolidierungsprojekt. Ordnen Sie jede Situation dem passenden kritischen Erfolgsfaktor zu.",
      instruction: "Klicken Sie zuerst einen Erfolgsfaktor, dann die passende Situation.",
      pairs: [
        { situation: "Maya nimmt an jedem wöchentlichen Steering-Committee-Meeting persönlich teil und trifft dort schnelle Entscheidungen bei Konflikten zwischen Landesgesellschaften.", term: "Top Management Support" },
        { situation: "Sophie stellt fest, dass die Kundendaten aus dem französischen System teilweise doppelte, teilweise widersprüchliche Einträge enthalten, bevor eine Migration stattfinden kann.", term: "Data Conversion & Quality" },
        { situation: "Das Projektteam besteht aus Vertretern aller vier Landesgesellschaften sowie IT, Finance und operativen Bereichen.", term: "Project Team" },
        { situation: "Priya formuliert für die S/4HANA-Migration die messbare Zielgröße: 'Reduktion der Systeme von 47 auf 12 bis Ende 2027.'", term: "Clear Objectives" },
        { situation: "Tom befürchtet, dass sein Team im französischen Lager Widerstand gegen die neuen Prozesse leisten wird, und plant deshalb frühzeitige Workshops vor Ort.", term: "Change Management" },
        { situation: "Lena versendet einen monatlichen Newsletter an alle Mitarbeitenden mit dem aktuellen Projektstand und Meilensteinen der Transformation.", term: "Communication" },
      ],
    },
    {
      id: "m2_5", type: "reflection", charKey: "maya",
      message: "Ich habe die eLWIS-Geschichte schon oft gehört, aber erst jetzt verstehe ich wirklich, wie nah dran wir bei NEXUS Corp an denselben Fehlern sind. 47 Systeme, keine dokumentierte Architektur, vier Landesgesellschaften mit eigenen Prioritäten. Bevor wir tiefer einsteigen: Was ist für Sie die wichtigste Lehre aus diesem Level?",
      question: "Was unterscheidet ein Unternehmen, das trotz hoher Komplexität erfolgreich transformiert, von einem, das wie Lidl scheitert?",
      answers: [
        { text: "Ausreichendes Budget: Mit genug Geld lässt sich jede Komplexität überwinden, da finanzielle Mittel den Zugang zu den besten Beratern, Tools und Fachkräften sichern.", correct: false, feedback: "Der Lidl-Fall zeigt eindrücklich das Gegenteil: 500 Millionen Euro haben das Scheitern nicht verhindert. Budget allein ist kein Erfolgsfaktor." },
        { text: "Die konsequente Umsetzung mehrerer kritischer Erfolgsfaktoren gleichzeitig: Top Management Support, klare Ziele, Change Management und Datenqualität wirken zusammen, nicht isoliert.", correct: true, feedback: "Genau. Erfolgreiche Transformationen zeichnen sich nicht durch einen einzelnen Erfolgsfaktor aus, sondern durch das Zusammenspiel mehrerer Faktoren. Das Fehlen eines einzigen kann bereits das gesamte Projekt gefährden." },
        { text: "Die Wahl des richtigen Softwareanbieters: SAP-Projekte scheitern grundsätzlich seltener als andere.", correct: false, feedback: "Der Lidl-Fall widerlegt das direkt: Es war ein SAP-basiertes Projekt und ist dennoch gescheitert. Die Softwarewahl allein garantiert keinen Erfolg." },
      ],
    },
  ],
  outro: {
    charKey: "priya",
    message: "Jetzt wissen wir, worauf wir achten müssen. Der Lidl-Fall wird uns die nächsten Wochen begleiten, als Mahnung, dass selbst gut ausgestattete Projekte scheitern können, wenn die kritischen Erfolgsfaktoren nicht konsequent verfolgt werden.",
    xp: 300,
    badge: "⚠️ Risikobewusste Beraterin",
  },
};
