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
      question: "Ein Entwickler bei NEXUS Deutschland möchte einen dringenden Fehler in der Preisfindung direkt im Produktivsystem korrigieren, weil der Weg über QAS einen Tag dauert. Wie ist dieser Vorschlag zu bewerten?",
      answers: [
        { text: "Als riskant: Die Änderung wäre ungetestet und nicht nachvollziehbar dokumentiert, und die Systeme liefen auseinander, da DEV und QAS den Fix nicht enthielten und ihn beim nächsten Transport sogar überschreiben könnten.", correct: true, feedback: "Genau. Die Drei-Stufen-Landschaft sichert nicht nur die Qualität einzelner Änderungen, sondern auch die Konsistenz zwischen den Systemen. Eine direkte Änderung in PRD untergräbt beides." },
        { text: "Als technisch nicht umsetzbar, da Produktivsysteme grundsätzlich gegen jede Änderung gesperrt sind und sich diese Sperre nicht aufheben lässt.", correct: false, feedback: "Produktivsysteme sind in der Regel gegen direkte Änderungen gesperrt, die Sperre lässt sich aber technisch aufheben. Die Drei-Stufen-Landschaft ist eine bewusste Risikomanagement-Entscheidung, keine unüberwindbare technische Grenze." },
        { text: "Als vertretbar, wenn die Änderung anschließend in DEV nachgezogen wird, weil der Fehler so schnell behoben ist und die Landschaft danach wieder konsistent ist.", correct: false, feedback: "Das klingt pragmatisch, die Änderung bleibt in PRD aber ungetestet, und das manuelle Nachziehen ist fehleranfällig. Für dringende Fälle ist ein beschleunigter Transport über den regulären Weg die sicherere Lösung." },
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
      question: "Während die S/4HANA-Migration entwickelt wird, müssen im laufenden System von NEXUS Deutschland weiterhin Fehler behoben werden. Welche Systemlandschaft ist dafür angemessen?",
      answers: [
        { text: "Getrennte Landschaften für die Wartung des laufenden Release und die Weiterentwicklung des nächsten, damit Korrekturen am Betrieb nicht mit unfertigen Migrationsentwicklungen vermischt werden.", correct: true, feedback: "Genau. Bei parallelem Betrieb (Release N) und Weiterentwicklung (Release N+1) werden zusätzliche, parallele Systemlandschaften benötigt. Nur so lässt sich ein Fix für den Betrieb transportieren, ohne halbfertige Migrationsänderungen mitzunehmen." },
        { text: "Eine Vier-System-Landschaft mit zusätzlicher Schulungsumgebung, weil die Trennung von Training und Qualitätssicherung verhindert, dass sich Wartung und Weiterentwicklung gegenseitig stören.", correct: false, feedback: "Die Schulungsumgebung trennt Training von Qualitätssicherung. Sie löst nicht das Problem, dass Wartung und Weiterentwicklung auf denselben Entwicklungsobjekten arbeiten." },
        { text: "Eine gemeinsame Dreisystemlandschaft, in der Wartung und Migration nacheinander transportiert werden, da die QS-Stufe sicherstellt, dass sich beide Änderungsstränge nicht beeinflussen.", correct: false, feedback: "Die QS-Stufe kann Fehler aufdecken, verhindert aber nicht, dass beide Stränge dieselben Objekte verändern. Ein Fix für den Betrieb würde dann unter Umständen unfertige Migrationsänderungen mit in die Produktion nehmen." },
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
      question: "Warum erhält NEXUS France im multinationalen Modell eigene Systeme für Produktivwartung und Produktivtest, statt alle Änderungen ausschließlich über die zentrale Landschaft in Deutschland abzuwickeln?",
      answers: [
        { text: "Damit NEXUS France unabhängig von der zentralen Entwicklung eigene Template-Änderungen vornehmen kann, ohne sich mit der Muttergesellschaft abstimmen zu müssen.", correct: false, feedback: "Die lokalen Systeme bleiben bewusst an die zentrale Entwicklung angebunden, um die Konsistenz des Templates zu sichern. Sie sind kein Weg, um eigenständig am Template vorbei zu entwickeln." },
        { text: "Damit Störungen und landesspezifische Anforderungen im eigenen Produktivbetrieb geprüft und behoben werden können, ohne andere Gesellschaften zu beeinträchtigen, während die Anbindung an die zentrale Entwicklung die Konsistenz sichert.", correct: true, feedback: "Genau. Die lokalen Systeme ermöglichen eine Wartung nah am eigenen Betrieb, die zentrale Anbindung verhindert, dass die Landesgesellschaften technisch auseinanderdriften. Beides zusammen macht das Modell aus." },
        { text: "Weil lokale Systeme rechtlich vorgeschrieben sind, damit französische Daten das Land nicht verlassen, und deshalb jede Tochter eine vollständig eigenständige Landschaft benötigt.", correct: false, feedback: "Rechtliche Vorgaben können die Architektur beeinflussen, sind aber nicht die Begründung des Modells. Zudem sind die lokalen Systeme gerade nicht vollständig eigenständig, sondern an die zentrale Entwicklung angebunden." },
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
      question: "Priya möchte für alle Landesgesellschaften eine einheitliche, vollautomatisierte CI/CD-Pipeline einführen, die jede getestete Änderung sofort produktiv setzt. Wie ist das zu bewerten?",
      answers: [
        { text: "Als sinnvoll, weil automatisierte Deployments menschliche Fehler ausschließen und daher auch für Major-Releases die sicherste Variante darstellen.", correct: false, feedback: "Automatisierung reduziert Fehler bei Routineabläufen, schließt sie aber nicht aus. Gerade bei Major-Releases mit hohem Risiko bleiben bewusste, manuelle Transporte und Freigaben notwendig." },
        { text: "Als zu pauschal: Für Routineänderungen, besonders im cloud-nativen Umfeld von NEXUS Logistics, ist Automatisierung sinnvoll. Bei Major-Releases und in der klassischen On-Premise-Landschaft bleiben manuelle Transporte und Freigaben notwendig.", correct: true, feedback: "Genau. CI/CD ist besonders für cloud-native und hybride Landschaften geeignet und macht Routine-Deployments effizienter. Eine einheitliche Vollautomatisierung ignoriert jedoch sowohl die Heterogenität der NEXUS-Landschaft als auch das höhere Risiko großer Releases." },
        { text: "Als nicht umsetzbar, weil CI/CD-Pipelines nur für cloud-native Lösungen geeignet sind und sich mit SAP-Systemen grundsätzlich nicht kombinieren lassen.", correct: false, feedback: "CI/CD-Pipelines lassen sich mit SAP-Werkzeugen wie dem Solution Manager (CHARM) und SAP Cloud ALM verbinden und eignen sich auch für hybride Landschaften." },
      ],
    },
    {
      id: "m9_5", type: "matching", charKey: "priya",
      charMessage: "Software-Transporte bergen spezifische Risiken, die aktiv gemanagt werden müssen. Ordnen Sie jede NEXUS-Situation der passenden Risikomanagement-Maßnahme zu.",
      instruction: "Klicken Sie zuerst eine Maßnahme, dann die passende Situation.",
      pairs: [
        { situation: "Nach einem Transport ins französische Produktivsystem bricht die Fakturierung ab. Innerhalb weniger Minuten läuft das System wieder mit dem Stand vom Vortag.", term: "Rollback-Mechanismen" },
        { situation: "Priyas Team bemerkt, dass ein Transport seit Stunden in der Importwarteschlange von NEXUS Parts hängt, noch bevor sich die ersten Anwenderinnen und Anwender beschweren.", term: "Monitoring" },
        { situation: "Ein Transport wird automatisch zurückgewiesen, weil die zugehörige Regressionstestsuite im QAS-System zwei fehlgeschlagene Testfälle meldet.", term: "Automatisierte Tests und Quality Gates" },
        { situation: "Bei der Jahresabschlussprüfung kann NEXUS Corp für jede Änderung an der Finanzbuchhaltung belegen, wer sie beantragt, genehmigt und in die Produktion übernommen hat.", term: "Compliance-Prozesse" },
      ],
    },
    {
      id: "m9_6", type: "reflection", charKey: "priya",
      message: "Wir haben jetzt den gesamten Weg verfolgt, von der ersten Anforderung über Architektur, Komplexitätsmanagement, Templates, ALM, Tests bis zum sicheren Software-Transport. Bevor wir zum Abschluss kommen, möchte ich Ihre Gesamteinschätzung hören.",
      question: "Welche Entscheidung aus den vorherigen Levels bestimmt am stärksten, wie aufwendig die Software-Logistik bei NEXUS Corp künftig wird?",
      answers: [
        { text: "Die Wahl der Template-Strategie: Sie legt fest, wie viele Systeme mit welchem Grad an Gemeinsamkeit versorgt werden müssen, und damit, wie viele Transportwege, Wartungsfenster und Abstimmungen entstehen.", correct: true, feedback: "Genau. Ob Mehrmandanten- oder Mehrsystemstrategie, ob Global Single System oder Partial Template: Diese Entscheidung prägt die Struktur der Systemlandschaft und damit unmittelbar die Komplexität der Transporte." },
        { text: "Die Wahl des Transportwerkzeugs, da ein leistungsfähiges Tool wie SAP Cloud ALM die Software-Logistik unabhängig von der Struktur der Systemlandschaft beherrschbar macht.", correct: false, feedback: "Werkzeuge unterstützen und automatisieren die Software-Logistik, beseitigen aber nicht die Komplexität, die aus der Struktur der Landschaft entsteht. Sie wirken auf das Wie, nicht auf das Wie viel." },
        { text: "Die Wahl der Teststufen, da die Anzahl der Teststufen unmittelbar die Anzahl der Systeme in der Transportlandschaft festlegt.", correct: false, feedback: "Teststufen beeinflussen, welche Qualitätssicherungsumgebungen benötigt werden, legen aber nicht die Gesamtstruktur fest. Diese ergibt sich vor allem aus der Template- und Roll-out-Strategie." },
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
