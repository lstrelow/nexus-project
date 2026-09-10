export const ML9 = {
  intro: {
    charKey: "priya",
    message: "Wir haben getestete Software, aber wie kommt sie sicher vom Entwicklungssystem in den produktiven Betrieb, ohne dass NEXUS Deutschland, France, Logistics und Parts sich gegenseitig ins Gehege kommen? Das ist die Aufgabe der Software-Logistik.",
  },
  scenes: [
    {
      id: "m9_1", type: "definition", charKey: "priya",
      charMessage: "In einer traditionellen SAP-Umgebung folgt die Software-Logistik einem klaren Drei-Stufen-Prinzip.",
      definition: {
        term: "Software-Logistik: Die DEV-QAS-PRD-Landschaft",
        summary: "Software-Logistik umfasst die Planung, Steuerung und Durchführung von Software-Transporten über verschiedene SAP-Systemlandschaften hinweg. Ziel ist es, Entwicklungen effizient, sicher und nachvollziehbar von der Entwicklungsumgebung bis ins Produktivsystem zu überführen.",
        aspects: [
          { icon: "🔧", title: "DEV (Development)", text: "Hier werden Entwicklungen und Änderungen umgesetzt" },
          { icon: "🧪", title: "QAS (Quality Assurance)", text: "Testumgebung zur Qualitätssicherung" },
          { icon: "🏭", title: "PRD (Production)", text: "Produktivsystem, in dem die Software live geschaltet wird" },
          { icon: "🛠️", title: "Werkzeuge", text: "SAP Solution Manager (CHARM) unterstützt das Änderungsmanagement; SAP Cloud ALM bietet cloudbasierte Automatisierung von Software-Transporten" },
        ],
        nexusContext: "NEXUS Deutschland hat diese Drei-Stufen-Landschaft bereits etabliert. NEXUS Logistics als cloud-native Übernahme hingegen kennt dieses Konzept kaum. Hier wird deutlich, wie unterschiedlich die technische Reife der vier Landesgesellschaften ist.",
      },
      question: "Warum wird die Software nicht direkt von der Entwicklungsumgebung (DEV) ins Produktivsystem (PRD) transportiert?",
      answers: [
        { text: "Weil ein Zwischenschritt (QAS) notwendig ist, um Änderungen vor dem produktiven Einsatz strukturiert zu testen und dadurch das Risiko für Betriebsstörungen im Live-System zu reduzieren.", correct: true, feedback: "Genau. Die QAS-Stufe ist ein bewusster Sicherheitsmechanismus: Sie verhindert, dass ungetestete Änderungen direkt das produktive System und damit den laufenden Geschäftsbetrieb gefährden." },
        { text: "Weil SAP-Systeme technisch keinen direkten Transport zwischen zwei Umgebungen zulassen.", correct: false, feedback: "Ein direkter Transport wäre technisch möglich. Die Drei-Stufen-Landschaft ist eine bewusste Risikomanagement-Entscheidung, keine technische Notwendigkeit." },
        { text: "Weil DEV und PRD immer auf unterschiedlicher Hardware laufen müssen, da produktive Systeme aus Sicherheitsgründen physisch von Entwicklungssystemen getrennt sein müssen.", correct: false, feedback: "Die Trennung der Umgebungen ist keine reine Hardware-Frage, sondern dient primär der strukturierten Qualitätssicherung vor dem produktiven Einsatz." },
      ],
    },
    {
      id: "m9_2", type: "definition", charKey: "sophie",
      charMessage: "Eine einfache Drei-Stufen-Landschaft reicht für komplexe Systeme oft nicht aus. Die Systemlandschaft entwickelt sich mit wachsenden Anforderungen weiter, von zwei auf drei, manchmal sogar vier Systeme.",
      definition: {
        term: "Entfaltung der Systemlandschaft",
        summary: "Systemlandschaften entwickeln sich je nach Anforderung von einer einfachen Zweisystemlandschaft über die empfohlene Standard-Dreisystemlandschaft bis zu einer Vier-System-Landschaft mit eigener Schulungsumgebung.",
        aspects: [
          { icon: "2️⃣", title: "Start: Zweisystem- landschaft", text: "DEV (mit Customizing, Test, Training, Qualitätssicherung als Mandanten) und PRO: der einfachste Ausgangspunkt" },
          { icon: "3️⃣", title: "Regel-Empfehlung: Dreisystem- landschaft", text: "DEV (Entwicklungssystem), QS (Qualitätssicherungs- system), PRO (Produktivsystem): der in der Praxis empfohlene Standard" },
          { icon: "4️⃣", title: "Erweiterung: Vier-System- landschaft", text: "Zusätzlich eine eigene Schulungsumgebung (TRN), getrennt von der Qualitätssicherung: ermöglicht paralleles Training ohne QS-Tests zu stören" },
          { icon: "⚖️", title: "Trennung von Wartung und Weiterentwicklung", text: "Bei parallelem Betrieb (Release N) und Weiterentwicklung (Release N+1) werden oft zusätzliche, parallele Systemlandschaften benötigt" },
        ],
        nexusContext: "Für NEXUS Corp mit vier Landesgesellschaften, laufendem Betrieb UND gleichzeitiger S/4HANA-Migration wird schnell klar: Eine einfache Zweisystemlandschaft reicht nicht. Es braucht mindestens die Dreisystemlandschaft, möglicherweise mit paralleler Wartungs- und Entwicklungsumgebung.",
      },
      question: "Warum reicht bei NEXUS Corp eine einfache Zweisystemlandschaft (nur DEV und PRO) wahrscheinlich nicht aus?",
      answers: [
        { text: "Weil bei einem Projekt dieser Größenordnung, mit paralleler Wartung des laufenden Betriebs und gleichzeitiger S/4HANA-Migration, eine dedizierte Qualitätssicherungsumgebung notwendig ist, um Tests durchzuführen, ohne den produktiven Betrieb zu gefährden.", correct: true, feedback: "Ausgezeichnet. Je komplexer und kritischer das System, desto wichtiger wird eine separate QS-Stufe. Bei NEXUS Corp mit vier Landesgesellschaften und parallelem Betrieb ist die Dreisystemlandschaft praktisch unverzichtbar." },
        { text: "Weil eine Zweisystemlandschaft technisch grundsätzlich nicht existiert, da jedes SAP-System aus lizenzrechtlichen Gründen mindestens drei getrennte Mandanten benötigt.", correct: false, feedback: "Die Zweisystemlandschaft ist ein durchaus real vorkommender Startpunkt. Sie ist nur für komplexe Projekte wie NEXUS Corp typischerweise nicht ausreichend." },
        { text: "Weil SAP-Systeme gesetzlich mindestens drei Umgebungen vorschreiben, um branchenübergreifende Compliance- und Auditanforderungen nachweisbar zu erfüllen und Wirtschaftsprüfern die Trennung von Test und Betrieb zu belegen.", correct: false, feedback: "Es gibt keine gesetzliche Vorschrift für die Anzahl der Systemumgebungen. Die Dreisystemlandschaft ist eine bewährte Praxisempfehlung, keine rechtliche Pflicht." },
      ],
    },
    {
      id: "m9_3", type: "definition", charKey: "sophie",
      charMessage: "Bei multinationalen Konzernen wie NEXUS Corp wird die Systemlandschaft noch komplexer: jede Landesgesellschaft benötigt eigene lokale Umgebungen, die dennoch an die zentrale Entwicklung angebunden bleiben müssen.",
      definition: {
        term: "Roll-out von Systemen in multinationalen Konzernen",
        summary: "Bei der Erweiterung der Systemlandschaft auf multinationale Konzerne entstehen lokale Produktivwartungs- und Produktivtestsysteme für jede Tochtergesellschaft, die an das zentrale Entwicklungssystem der Muttergesellschaft angebunden sind.",
        aspects: [
          { icon: "🏢", title: "Zentrale Muttergesellschaft", text: "Betreibt das zentrale Entwicklungssystem (DEV) und die zentrale Qualitätssicherung (QS)" },
          { icon: "🌏", title: "Lokale Tochtergesellschaften", text: "Jede Landesgesellschaft (z.B. asiatisch, amerikanisch, europäisch) erhält eigene lokale Produktivwartungs- und Produktivtestsysteme" },
          { icon: "🔗", title: "Zentrale Anbindung", text: "Alle lokalen Systeme sind an die zentrale Entwicklung angebunden, um Konsistenz zu wahren" },
          { icon: "🎯", title: "Produktivsysteme", text: "Jede Tochtergesellschaft betreibt letztlich ihr eigenes lokales Produktivsystem" },
        ],
        nexusContext: "Genau dieses Muster passt zur NEXUS-Struktur: NEXUS Deutschland als Mutterorganisation mit zentraler Entwicklung, während NEXUS France, Logistics und Parts jeweils eigene lokale Produktivwartungs- und Testsysteme benötigen, angebunden an dieselbe zentrale Entwicklungslandschaft.",
      },
      question: "Warum reicht es bei einem Roll-out über mehrere Landesgesellschaften nicht aus, dass nur die Muttergesellschaft eine eigene Systemlandschaft betreibt?",
      answers: [
        { text: "Weil jede Tochtergesellschaft eigene lokale Produktivtests und einen eigenen produktiven Betrieb benötigt. Ohne diese lokalen Umgebungen könnten landesspezifische Besonderheiten nicht angemessen getestet und betrieben werden.", correct: true, feedback: "Genau. Lokale Produktivwartungs- und Produktivtestsysteme ermöglichen es jeder Tochtergesellschaft, landesspezifische Anforderungen zu testen und unabhängig zu betreiben, während die zentrale Anbindung an die Muttergesellschaft weiterhin Konsistenz sicherstellt." },
        { text: "Weil Tochtergesellschaften rechtlich verpflichtet sind, komplett unabhängige IT-Systeme ohne jede Verbindung zur Muttergesellschaft zu betreiben, um nationale Datenschutz- und Steuerbehörden zufriedenzustellen.", correct: false, feedback: "Das Gegenteil beschreibt die Vorlage: Die lokalen Systeme bleiben bewusst an die zentrale Entwicklung angebunden, um Konsistenz zu gewährleisten." },
        { text: "Weil eine zentrale Systemlandschaft technisch nicht in der Lage ist, mehrere Sprachen zu unterstützen, da Unicode-Systeme stets auf eine einzige Landessprache begrenzt sind.", correct: false, feedback: "Sprachunterstützung ist keine technische Begründung für lokale Systeme. Der Grund liegt in der Notwendigkeit lokaler Tests und lokalen Betriebs." },
      ],
    },
    {
      id: "m9_4", type: "definition", charKey: "priya",
      charMessage: "Cloud Computing verändert auch die Software-Logistik grundlegend. SAP Cloud ALM bietet Möglichkeiten, die der klassischen Transportlogik teilweise widersprechen.",
      definition: {
        term: "Automatisierte Deployments und CI/CD",
        summary: "SAP Cloud ALM ermöglicht automatisierte Deployments und die Integration agiler Projektmanagementmethoden, etwa durch CI/CD-Pipelines mit Tools wie Jenkins oder GitLab CI/CD, die der klassischen Transportlogik in Teilen widersprechen.",
        aspects: [
          { icon: "🤖", title: "Automatisierung von Transporten", text: "Einsatz von Technologien zur Automatisierung von Software-Deployments in IT-Systemlandschaften" },
          { icon: "🔗", title: "CI/CD-Integration", text: "Integration von CI/CD-Pipelines mit Tools wie Jenkins, GitLab CI/CD und SAP Solution Manager (CHARM)" },
          { icon: "📈", title: "Vorteile", text: "Hohe Skalierbarkeit, geringere Betriebskosten und verbesserte Datenanalyse" },
          { icon: "🎯", title: "Einsatzbereiche", text: "Optimal für Cloud-native SAP-Lösungen und hybride IT-Landschaften. Aber: manuelle Transporte bleiben insbesondere bei Major-Releases weiterhin notwendig" },
        ],
        nexusContext: "NEXUS Logistics als cloud-natives Unternehmen könnte von automatisierten CI/CD-Deployments erheblich profitieren, während NEXUS Deutschlands klassische On-Premise-SAP-Landschaft eher auf traditionelle, manuelle Transportprozesse angewiesen bleibt. Diese Heterogenität muss die S/4HANA-Konsolidierung berücksichtigen.",
      },
      question: "Warum wird explizit betont, dass es 'auch bei CI/CD immer noch manuelle Transporte geben wird (wie bei den Major-Releases auch)'?",
      answers: [
        { text: "Weil Automatisierung zwar viele Routine-Deployments effizienter macht, aber bei besonders risikoreichen oder umfangreichen Änderungen (wie Major-Releases) weiterhin bewusste, manuelle Kontrolle sinnvoll bleibt.", correct: true, feedback: "Genau. Automatisierung ersetzt nicht vollständig die menschliche Kontrolle bei kritischen Änderungen. Gerade bei Major-Releases mit hohem Risikopotenzial bleibt eine bewusste, manuelle Freigabe sinnvoll." },
        { text: "Weil CI/CD-Technologie grundsätzlich unzuverlässig ist und daher nur eingeschränkt genutzt werden sollte.", correct: false, feedback: "CI/CD wird nicht als unzuverlässig beschrieben. Die Aussage bezieht sich auf die bewusste Beibehaltung manueller Kontrolle bei besonders kritischen Änderungen." },
        { text: "Weil manuelle Transporte gesetzlich für alle SAP-Systeme vorgeschrieben sind, unabhängig davon, wie ausgereift die eingesetzte CI/CD-Pipeline eines Unternehmens ist.", correct: false, feedback: "Es gibt keine gesetzliche Vorschrift für manuelle Transporte. Die Empfehlung basiert auf praktischen Risikoüberlegungen, nicht auf rechtlichen Vorgaben." },
      ],
    },
    {
      id: "m9_5", type: "matching", charKey: "priya",
      charMessage: "Software-Transporte bergen spezifische Risiken, die aktiv gemanagt werden müssen. Ordnen Sie jede NEXUS-Situation der passenden Risikomanagement-Maßnahme zu.",
      instruction: "Klicken Sie zuerst eine Maßnahme, dann die passende Situation.",
      pairs: [
        { situation: "Nach einem fehlgeschlagenen Transport bei NEXUS France kann das Team das System automatisch auf den vorherigen Stand zurücksetzen.", term: "Rollback-Mechanismen" },
        { situation: "Ein Dashboard zeigt Priyas Team in Echtzeit, welche Transporte gerade zwischen DEV, QAS und PRD bei allen vier Landesgesellschaften laufen.", term: "Monitoring" },
        { situation: "Bevor ein Transport ins Produktivsystem freigegeben wird, muss automatisch ein Qualitäts-Gate durchlaufen werden.", term: "Automatisierte Tests und Quality Gates" },
        { situation: "Sophie dokumentiert jeden Transport im SAP Solution Manager (CHARM), um DSGVO-Compliance nachweisen zu können.", term: "Compliance-Prozesse" },
      ],
    },
    {
      id: "m9_6", type: "reflection", charKey: "priya",
      message: "Wir haben jetzt den gesamten Weg verfolgt, von der ersten Anforderung über Architektur, Komplexitätsmanagement, Templates, ALM, Tests bis zum sicheren Software-Transport. Bevor wir zum Abschluss kommen, möchte ich Ihre Gesamteinschätzung hören.",
      question: "Was verbindet Software-Transport-Management mit den vorherigen Themen dieses Moduls: Komplexität, Enterprise Architecture und Template-Strategie?",
      answers: [
        { text: "Software-Transport ist ein reines Detailproblem der IT-Abteilung ohne Verbindung zu den strategischen Themen der vorherigen Level.", correct: false, feedback: "Das Gegenteil trifft zu: Software-Transport ist die praktische, operative Konsequenz der zuvor getroffenen strategischen Entscheidungen: Template-Strategie und Systemlandschaft bestimmen direkt die Transportkomplexität." },
        { text: "Software-Transport-Management macht konkret erfahrbar, wie sich strategische Entscheidungen (Template-Strategie, Systemlandschaft, Architektur) in operative Herausforderungen übersetzen: die vier heterogenen NEXUS-Landesgesellschaften erzeugen direkt komplexere Transportanforderungen.", correct: true, feedback: "Exakt. Software-Transport ist keine isolierte technische Fußnote, sondern der Punkt, an dem sich alle vorherigen strategischen Entscheidungen, Komplexität, Architektur, Template-Wahl, ganz konkret in der täglichen operativen Arbeit niederschlagen." },
        { text: "Software-Transport ist nur relevant, wenn ein Unternehmen ausschließlich Cloud-Systeme betreibt, da klassische On-Premise-Systeme ohne jede Form von Versionierung oder Change-Tracking auskommen und Änderungen direkt im Produktivsystem vorgenommen werden.", correct: false, feedback: "Software-Transport ist sowohl bei On-Premise- als auch bei Cloud-Systemen relevant, wie das Nebeneinander von klassischen SAP-Transporten und CI/CD-Deployments bei NEXUS Corp zeigt." },
      ],
    },
  ],
  outro: {
    charKey: "maya",
    message: "Sie haben jetzt den vollständigen Werkzeugkasten für die S/4HANA-Konsolidierung von NEXUS Corp durchlaufen, von der Diagnose der Komplexität bis zum sicheren Software-Transport. Was vor Ihnen liegt, ist eine der größten Transformationen in der Geschichte unseres Konzerns. Ich bin dankbar, dass wir sie gemeinsam angehen.",
    xp: 360,
    badge: "🚚 Transport-Strategin",
  },
};
