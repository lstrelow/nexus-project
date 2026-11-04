export const ML3 = {
  intro: {
    charKey: "sophie",
    message: "Bevor wir eine Zielarchitektur für NEXUS Corp entwickeln können, müssen wir ein gemeinsames Verständnis der Komponenten haben, nicht nur was sie einzeln leisten, sondern wie sie im Zielbild zusammenspielen. Das ist die Grundlage für alles, was danach kommt.",
  },
  scenes: [
    {
      id: "m3_1", type: "definition", charKey: "sophie",
      charMessage: "Fangen wir mit der übergeordneten Perspektive an. Wie ordnen sich die einzelnen ES-Komponenten eigentlich zueinander an: strukturell, nicht nur funktional?",
      definition: {
        term: "Enterprise Systems im Kontext der systemorientierten Unternehmensbeschreibung",
        summary: "Enterprise Systems lassen sich entlang der Wertschöpfungskette anordnen: SRM auf der Beschaffungsseite, SCM als verbindendes Rückgrat, ERP als Kern, CRM und Shopsystem auf der Absatzseite, BI als übergreifende Auswertungsebene.",
        aspects: [
          { icon: "📥", title: "Beschaffungsmärkte → SRM", text: "SRM steuert die Beziehung zu Lieferanten auf der Eingangsseite der Wertschöpfungskette" },
          { icon: "🔄", title: "SCM als Rückgrat", text: "SCM verbindet Beschaffung und Absatz durchgängig entlang der gesamten Lieferkette" },
          { icon: "⚙️", title: "ERP als Kern", text: "ERP bildet das integrative Zentrum, das alle operativen Kernprozesse verbindet" },
          { icon: "📤", title: "Absatzmärkte → CRM & Shop", text: "CRM und Shopsystem steuern die Kundenbeziehung und den direkten Verkauf auf der Ausgangsseite" },
          { icon: "📊", title: "BI als Querschnittsebene", text: "BI liegt konzeptionell über allen Komponenten und wertet deren Daten für Entscheidungen aus" },
        ],
        nexusContext: "Bei NEXUS Deutschland ist genau diese Struktur sauber umgesetzt. Bei NEXUS France, NEXUS Logistics und NEXUS Parts existieren jeweils eigene, unvollständige Varianten dieser Struktur, teilweise ohne SRM, teilweise ohne eigenständiges BI.",
      },
      question: "Tom möchte für NEXUS Logistics ein neues SCM-System auswählen. Warum sollte die Auswahl aus Sicht der Wertschöpfungsketten-Anordnung nicht allein anhand der SCM-Funktionalität erfolgen?",
      answers: [
        { text: "Weil SCM als verbindendes Rückgrat zwischen Beschaffung und Absatz an SRM, ERP und CRM angrenzt: Entscheidend ist auch, welche Daten und Prozesse es mit diesen Komponenten austauschen muss.", correct: true, feedback: "Genau. Die Wertschöpfungsketten-Perspektive macht sichtbar, mit welchen Komponenten das SCM unmittelbar Daten austauschen muss. Ein funktional starkes SCM, das sich nicht sauber in diese Datenflüsse einfügt, verlagert das Problem nur an die Schnittstellen." },
        { text: "Weil SCM-Funktionalität in der Regel bereits im ERP enthalten ist, sodass eine eigenständige Auswahl gegenüber einer Erweiterung des bestehenden ERP-Systems kaum Vorteile bietet.", correct: false, feedback: "Ob SCM-Funktionen im ERP oder in einem eigenständigen System abgebildet werden, ist eine berechtigte Architekturfrage, aber nicht der Kern der Wertschöpfungsketten-Perspektive. Diese lenkt den Blick auf die Datenflüsse zwischen den Komponenten, unabhängig davon, wo eine Funktion technisch angesiedelt ist." },
        { text: "Weil SCM in der Wertschöpfungskette der Absatzseite zugeordnet ist und deshalb vorrangig an den Anforderungen von CRM und Shopsystem ausgerichtet werden muss.", correct: false, feedback: "SCM ist nicht der Absatzseite zugeordnet, sondern verbindet als Rückgrat Beschaffung und Absatz entlang der gesamten Lieferkette. Eine einseitige Ausrichtung an CRM und Shop würde die Beschaffungsseite vernachlässigen." },
      ],
    },
    {
      id: "m3_2", type: "definition", charKey: "sophie",
      charMessage: "Der Begriff 'Enterprise System' wird in der Praxis oft unscharf verwendet. Für unsere Architekturarbeit brauchen wir eine präzise Definition.",
      definition: {
        term: "Enterprise System i.w.S. und i.e.S.",
        summary: "Enterprise Systems im weiteren Sinne umfassen sämtliche Anwendungssysteme zur Erfüllung betrieblicher Aufgaben. Im engeren Sinne, wie in diesem Modul verwendet, sind es Systeme, deren Applikationslandschaft von einem einzelnen Standardsoftware-Hersteller dominiert wird.",
        aspects: [
          { icon: "🌐", title: "i.w.S.", text: "Alle Anwendungssysteme, die betriebliche Aufgaben erfüllen, unabhängig vom Hersteller" },
          { icon: "🎯", title: "i.e.S.", text: "Systeme, deren Applikationslandschaft maßgeblich von einem Standardsoftware-Hersteller dominiert wird" },
          { icon: "🏛️", title: "Backbone-Charakter", text: "Enterprise Systems bilden das Rückgrat der Unternehmens- operationen mit hohem Integrations- grad und großer mehrdimensionaler Wirkung" },
          { icon: "🧱", title: "Kernkomponenten", text: "ERP, SRM, SCM, CRM, Shop-System und BI bilden im Kern die sechs zentralen Komponenten" },
        ],
        nexusContext: "Diese Unterscheidung ist für NEXUS Corp entscheidend: NEXUS Deutschland ist ein Enterprise System i.e.S. (SAP-dominiert), während NEXUS France, Logistics und Parts jeweils heterogene Landschaften ohne einen dominierenden Hersteller darstellen, also eher i.w.S. zu verstehen sind.",
      },
      question: "Nach der S/4HANA-Konsolidierung sollen das WMS von NEXUS Logistics und der Ersatzteilkatalog von NEXUS Parts bestehen bleiben und angebunden werden. Wie wäre die Konzernlandschaft danach einzuordnen?",
      answers: [
        { text: "Als Enterprise System i.e.S., sofern die Applikationslandschaft maßgeblich von SAP dominiert wird: Einzelne angebundene Drittsysteme ändern daran nichts, solange sie die Gesamtlandschaft nicht prägen.", correct: true, feedback: "Richtig. Die Definition i.e.S. verlangt, dass die Applikationslandschaft maßgeblich von einem Standardsoftware-Hersteller dominiert wird, nicht ausschließlich aus dessen Produkten besteht. Einzelne spezialisierte Drittsysteme sind damit vereinbar." },
        { text: "Als Enterprise System i.w.S., weil eine Landschaft nur dann i.e.S. ist, wenn sämtliche Anwendungssysteme von einem einzigen Standardsoftware-Hersteller stammen.", correct: false, feedback: "Die Definition spricht von einer Landschaft, die 'maßgeblich dominiert' wird, nicht von einer ausschließlichen Herkunft aller Systeme. Kaum ein Großunternehmen betreibt eine Landschaft ganz ohne Drittsysteme." },
        { text: "Keine der beiden Kategorien trifft zu, weil die Einordnung i.e.S. zusätzlich voraussetzt, dass alle sechs Kernkomponenten (ERP, SRM, SCM, CRM, Shop, BI) vom selben Hersteller abgedeckt werden.", correct: false, feedback: "Die sechs Kernkomponenten beschreiben, woraus Enterprise Systems typischerweise bestehen. Sie sind kein zusätzliches Kriterium für die Einordnung i.e.S. Entscheidend ist die Dominanz eines Herstellers in der Applikationslandschaft." },
      ],
    },
    {
      id: "m3_3", type: "definition", charKey: "sophie",
      charMessage: "Ein zentrales Thema unseres Fachs ist die Frage, warum ES-Einführungen überhaupt unternommen werden und warum sie trotzdem oft scheitern.",
      definition: {
        term: "Ziele einer ES-Einführung: Originäre und derivative Ziele",
        summary: "ES-Einführungen verfolgen originäre Ziele (Wirtschaftlichkeit) und darauf aufbauende derivative Ziele (einheitliche Datenbasis, Prozessunterstützung, Integration, Reduktion administrativen Aufwands).",
        aspects: [
          { icon: "💰", title: "Originäres Ziel", text: "Steigerung der Wirtschaftlichkeit des Unternehmens: Kostensenkung und/oder Umsatzsteigerung" },
          { icon: "🗄️", title: "Einheitliche Datenbasis", text: "Eine unternehmensweite Datenbank vermeidet Mehrfacheingaben in unterschiedlichen Systemen" },
          { icon: "🔗", title: "Prozess- unterstützung", text: "Unterstützung sämtlicher im Unternehmen ablaufender Geschäftsprozesse" },
          { icon: "📉", title: "Administrativer Aufwand", text: "Reduktion manueller, redundanter Verwaltungstätigkeiten" },
          { icon: "🧩", title: "Integration", text: "Verbindung der einzelnen Systemkomponenten zu einem kohärenten Ganzen" },
        ],
        nexusContext: "Bei NEXUS Corp sind die derivativen Ziele nach den drei Übernahmen fast vollständig verloren gegangen: keine einheitliche Datenbasis, keine durchgängige Prozessunterstützung, hoher administrativer Aufwand durch Mehrfacheingaben, trotz eines ursprünglich klaren originären Ziels bei der ersten Transformation.",
      },
      question: "Im Steering Committee wird vorgeschlagen, den Erfolg der Konsolidierung an der Kennzahl 'Anzahl integrierter Systeme' zu messen. Wie ist das aus Sicht des Zielsystems einer ES-Einführung zu bewerten?",
      answers: [
        { text: "Als geeignet, weil Integration das übergeordnete Ziel einer ES-Einführung ist und sich zudem direkt und objektiv messen lässt.", correct: false, feedback: "Integration ist kein übergeordnetes, sondern ein derivatives Ziel. Sie ist Mittel zum Zweck. Ein Projekt kann viele Systeme integrieren, ohne dass sich Kosten oder Umsatz dadurch verbessern." },
        { text: "Als unzureichend, weil Integration ein derivatives Ziel ist: Der Erfolg sollte letztlich daran gemessen werden, ob die Integration zu Kostensenkung oder Umsatzsteigerung beiträgt.", correct: true, feedback: "Genau. Derivative Ziele wie Integration oder eine einheitliche Datenbasis sind wertvoll, weil sie zum originären Ziel der Wirtschaftlichkeit beitragen. Als alleinige Erfolgskennzahl würden sie das Mittel mit dem Zweck verwechseln." },
        { text: "Als ungeeignet, weil derivative Ziele grundsätzlich nicht messbar sind und daher nur das originäre Ziel Wirtschaftlichkeit als Erfolgskennzahl infrage kommt.", correct: false, feedback: "Derivative Ziele lassen sich durchaus messen und sind als Zwischengrößen sinnvoll. Das Problem ist nicht ihre Messbarkeit, sondern dass sie allein nichts darüber aussagen, ob der eigentliche wirtschaftliche Zweck erreicht wird." },
      ],
    },
    {
      id: "m3_4", type: "definition", charKey: "priya",
      charMessage: "Lassen Sie uns konkreter werden. Wenn wir über ERP sprechen, was genau meinen wir damit im technischen Detail? Am Beispiel von SAP lässt sich das gut zeigen.",
      definition: {
        term: "ERP als holistisches Informationsmanagement-Konzept",
        summary: "Ein modernes ERP-System integriert alle wesentlichen betrieblichen Funktionsbereiche, von Materialwirtschaft über Produktion bis Finanzbuchhaltung, auf einer gemeinsamen Datenbasis.",
        aspects: [
          { icon: "📦", title: "Materialwirtschaft (MM)", text: "Einkauf, Bestandsführung, Lagerverwaltung und Lieferantenmanagement" },
          { icon: "🏭", title: "Produktion (PP)", text: "Produktionsplanung, -steuerung und Kapazitätsplanung für Material, Maschinen und Personal" },
          { icon: "💼", title: "Vertrieb (SD)", text: "Verkaufsaufträge, Kundenmanagement, Fakturierung und Lieferplanung" },
          { icon: "💰", title: "Finanzbuchhaltung (FI)", text: "Buchhaltung, Debitoren-/Kreditoren- buchhaltung, Bilanzierung und Finanzberichterstattung" },
          { icon: "📊", title: "Controlling (CO)", text: "Kostenstellenrechnung, Innenaufträge, Budgetierung und Rentabilitätsanalyse" },
          { icon: "👥", title: "Personalwirtschaft (HR)", text: "Lohn- und Gehaltsabrechnung, Personalverwaltung, Zeitwirtschaft" },
        ],
        nexusContext: "Genau diese Modularität ist das Problem bei NEXUS Corp: NEXUS Deutschland nutzt SAP-Module MM, PP, SD, FI, CO und HR vollständig integriert. NEXUS France nutzt eine 15 Jahre alte SAP-ECC-Version mit veralteten, teilweise inkompatiblen Modulversionen.",
      },
      question: "NEXUS France nutzt mit MM, SD, FI und CO dieselben SAP-Module wie NEXUS Deutschland, allerdings in einer eigenen ECC-Instanz. Warum entsteht daraus trotzdem keine konzernweite Integration im Sinne des ERP-Konzepts?",
      answers: [
        { text: "Weil sich die Module in ECC und S/4HANA funktional so stark unterscheiden, dass sie fachlich nicht dieselben betrieblichen Aufgaben abdecken.", correct: false, feedback: "Die fachlichen Aufgaben der Module sind über die Releases hinweg weitgehend vergleichbar. Der Kern des Problems liegt nicht im Funktionsumfang, sondern darin, dass zwei getrennte Datenbasen existieren." },
        { text: "Weil gleiche Module bei unterschiedlichen Releaseständen technisch nicht über Schnittstellen miteinander verbunden werden können.", correct: false, feedback: "Schnittstellen zwischen unterschiedlichen Releaseständen sind technisch möglich und verbreitet. Eine Schnittstelle tauscht aber nur Daten aus. Sie ersetzt nicht die gemeinsame Datenbasis, auf der die Integration im ERP-Konzept beruht." },
        { text: "Weil die Integration im ERP-Konzept auf einer gemeinsamen Datenbasis beruht: Zwei Instanzen mit eigenen Stammdaten bleiben getrennte Systeme, auch wenn sie dieselben Module nutzen.", correct: true, feedback: "Genau. Die Integrationswirkung eines ERP-Systems entsteht dadurch, dass alle Module auf denselben Daten arbeiten. Zwei Instanzen mit jeweils eigenen Stammdaten sind zwei Inseln, unabhängig davon, wie ähnlich ihre Modulstruktur ist." },
      ],
    },
    {
      id: "m3_5", type: "matching", charKey: "sophie",
      charMessage: "Jetzt wird es praktisch. Ordnen Sie jede technische Erwartung an moderne Enterprise Systems ihrer korrekten Beschreibung zu.",
      instruction: "Klicken Sie zuerst eine Anforderung, dann die passende Beschreibung.",
      pairs: [
        { situation: "Für die geplante Übernahme eines skandinavischen Händlers müsste im französischen SAP-System eine neue Gesellschaft angelegt werden. Das Customizing ist jedoch so eng auf die bestehende Struktur zugeschnitten, dass dies einem Neuaufbau gleichkäme.", term: "Skalierbarkeit" },
        { situation: "Carlos sagt einem Großkunden eine Lieferung aus dem französischen Lager zu. Erst der nächtliche Abgleich zeigt am nächsten Morgen, dass die Ware am Vortag bereits in Deutschland verkauft wurde.", term: "Echtzeit-Daten" },
        { situation: "Für jede Auftragsübernahme aus dem System von NEXUS Logistics müssen Mitarbeitende CSV-Dateien exportieren, manuell umformatieren und im Zielsystem wieder hochladen.", term: "Integration & Schnittstellen" },
        { situation: "Während einer Rabattaktion steigen die Antwortzeiten im Shop von NEXUS Parts auf über 20 Sekunden, obwohl alle Funktionen fachlich fehlerfrei arbeiten.", term: "Performance" },
        { situation: "Ein Penetrationstest zeigt, dass die selbstgebaute Auftragsabwicklung von NEXUS Logistics über eine ungeschützte Schnittstelle von außen erreichbar ist.", term: "Sicherheit" },
        { situation: "Die französische Steuerbehörde verlangt bei einer Betriebsprüfung, dass sämtliche Buchungen in einem vorgegebenen Format und nachweislich unverändert bereitgestellt werden.", term: "Compliance" },
      ],
    },
    {
      id: "m3_6", type: "reflection", charKey: "sophie",
      message: "Wir haben jetzt ein gemeinsames Verständnis der Komponenten und ihrer technischen Anforderungen. Das ist die Grundlage für alles, was in den kommenden Wochen folgt, von der Komplexitätsbewertung bis zur Template-Strategie für die S/4HANA-Migration.",
      question: "Sophie muss festlegen, in welcher Reihenfolge die Komponenten und Landesgesellschaften konsolidiert werden. Welche Überlegung sollte die Reihenfolge am stärksten bestimmen?",
      answers: [
        { text: "Mit der Gesellschaft beginnen, die am stärksten vom Zielbild abweicht, weil dort der größte Nutzen entsteht und die schwierigsten Probleme früh gelöst werden.", correct: false, feedback: "Das klingt mutig, ist aber riskant: Die schwierigste Konsolidierung zuerst anzugehen, bevor Erfahrungen mit dem Vorgehen vorliegen, erhöht das Risiko eines frühen Scheiterns. Der Nutzen hängt zudem nicht allein von der Abweichung ab, sondern davon, welche Integrationsprobleme gelöst werden." },
        { text: "Die Abhängigkeiten entlang der Wertschöpfungskette und den Ausgangszustand jeder Gesellschaft gemeinsam bewerten, um zu erkennen, welcher Schritt die meisten Integrationsprobleme löst und wo die Voraussetzungen bereits bestehen.", correct: true, feedback: "Genau. Die fachlich-funktionale Sicht zeigt, welche Komponenten voneinander abhängen, die technisch-architektonische Sicht zeigt, wie weit jede Gesellschaft vom Zielbild entfernt ist. Erst beide Perspektiven zusammen ergeben eine begründete Reihenfolge." },
        { text: "Zuerst BI konsolidieren, weil eine einheitliche Kennzahlenbasis die Voraussetzung dafür ist, alle weiteren Konsolidierungsschritte faktenbasiert zu priorisieren.", correct: false, feedback: "BI liegt als Querschnittsebene über den operativen Komponenten und wertet deren Daten aus. Wird BI zuerst konsolidiert, müssen die inkonsistenten Daten der Quellsysteme nachgelagert harmonisiert werden. Das schafft Transparenz, löst aber die eigentlichen Integrationsprobleme nicht." },
      ],
    },
  ],
  outro: {
    charKey: "sophie",
    message: "Ein solides Komponentenverständnis ist die Basis jeder Architekturarbeit. Als Nächstes werden wir uns anschauen, wie wir die Komplexität dieser vier heterogenen Landschaften überhaupt messbar machen können, denn was man nicht messen kann, kann man auch nicht gezielt reduzieren.",
    xp: 320,
    badge: "🧩 Architektur-Analystin",
  },
};
