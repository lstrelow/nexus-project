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
      question: "Warum ist es sinnvoll, ES-Komponenten entlang der Wertschöpfungskette statt nach reiner Funktionsähnlichkeit anzuordnen?",
      answers: [
        { text: "Weil die Anordnung entlang der Wertschöpfungskette zeigt, wie Datenflüsse und Prozesse tatsächlich zwischen den Komponenten fließen und damit Integrationsanforderungen sichtbar macht.", correct: true, feedback: "Exakt. Die Wertschöpfungsketten-Perspektive macht deutlich, welche Komponenten direkt miteinander Daten austauschen müssen: eine zentrale Voraussetzung für jede Architekturentscheidung." },
        { text: "Weil Funktionsähnlichkeit für die Softwareauswahl komplett irrelevant ist, da moderne Anbieter ohnehin nahezu identische Funktionsumfänge über alle Komponenten hinweg bieten.", correct: false, feedback: "Funktionsähnlichkeit spielt bei der Softwareauswahl durchaus eine Rolle. Der Punkt ist, dass die Wertschöpfungsketten-Perspektive zusätzlich die Integrationslogik sichtbar macht." },
        { text: "Weil alle ES-Komponenten ohnehin identische Funktionen erfüllen und die Anordnung rein kosmetisch ist.", correct: false, feedback: "Die Komponenten erfüllen deutlich unterschiedliche Funktionen: ERP, CRM, SCM, SRM, Shop und BI haben jeweils eigene fachliche Schwerpunkte." },
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
      question: "Warum ist die Unterscheidung zwischen i.w.S. und i.e.S. für die anstehende S/4HANA-Konsolidierung bei NEXUS Corp relevant?",
      answers: [
        { text: "Weil nur Systeme i.e.S. überhaupt migriert werden können: Heterogene Landschaften i.w.S. müssen komplett neu aufgebaut werden.", correct: false, feedback: "Auch heterogene Landschaften i.w.S. können konsolidiert werden. Die Unterscheidung betrifft den Ausgangszustand, nicht die technische Machbarkeit einer Migration." },
        { text: "Weil sie zeigt, dass die vier Landesgesellschaften unterschiedliche Ausgangspunkte haben: NEXUS Deutschland ist bereits konsolidiert, die anderen drei sind heterogen und benötigen unterschiedliche Migrationsstrategien.", correct: true, feedback: "Genau. Diese Unterscheidung liefert eine wichtige Diagnose für die Zielarchitektur: Ein Unternehmen, das bereits i.e.S. organisiert ist, benötigt eine andere Migrationsstrategie als heterogene i.w.S.-Landschaften." },
        { text: "Weil i.w.S.-Systeme grundsätzlich günstiger zu betreiben sind als i.e.S.-Systeme, da sie ohne teure Lizenzgebühren eines dominierenden Standardsoftware-Herstellers auskommen.", correct: false, feedback: "Die Unterscheidung sagt nichts über Betriebskosten aus. Heterogene Landschaften sind in der Praxis eher teurer im Betrieb, nicht günstiger." },
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
      question: "Was unterscheidet originäre von derivativen Zielen einer ES-Einführung?",
      answers: [
        { text: "Originäre Ziele sind kurzfristig, derivative Ziele sind langfristig angelegt, da originäre Ziele meist innerhalb eines Projekts erreicht werden, während derivative Ziele erst über Jahre hinweg spürbar werden.", correct: false, feedback: "Die Unterscheidung betrifft nicht den Zeithorizont, sondern die logische Beziehung zwischen den Zielen." },
        { text: "Originäre Ziele beschreiben den eigentlichen wirtschaftlichen Zweck (Kostensenkung/Umsatzsteigerung), derivative Ziele sind die Mittel, mit denen dieser Zweck erreicht wird (Datenbasis, Integration, Prozessunterstützung).", correct: true, feedback: "Genau. Derivative Ziele sind keine Selbstzwecke. Eine einheitliche Datenbank ist wertvoll, weil sie letztlich zur Wirtschaftlichkeit beiträgt, nicht als Ziel an sich." },
        { text: "Originäre Ziele betreffen nur die IT-Abteilung, derivative Ziele betreffen das gesamte Unternehmen.", correct: false, feedback: "Beide Zielarten betreffen das gesamte Unternehmen. Die Unterscheidung liegt in der Zweck-Mittel-Beziehung, nicht in der organisatorischen Reichweite." },
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
      question: "Was ist die technische Kernanforderung, die Unternehmen typischerweise an ein modernes ERP-System wie SAP S/4HANA stellen?",
      answers: [
        { text: "Eine modulare Architektur mit integrierten Bereichen (Finanzen, HR, Logistik), die auf einer zentralen Datenbank basiert.", correct: true, feedback: "Ausgezeichnet. Diese Kombination aus Modularität (klare fachliche Trennung) und Integration (gemeinsame Datenbasis) ist der Kern moderner ERP-Architekturen, und genau das fehlt NEXUS Corp aktuell konzernweit." },
        { text: "Möglichst viele voneinander unabhängige Einzeldatenbanken für maximale Ausfallsicherheit.", correct: false, feedback: "Das widerspricht dem Integrationsgedanken von ERP-Systemen fundamental. Unabhängige Datenbanken erzeugen genau die Fragmentierung, die NEXUS Corp aktuell zu schaffen macht." },
        { text: "Eine vollständige Individualentwicklung ohne Rückgriff auf Standardmodule.", correct: false, feedback: "Moderne ERP-Systeme setzen gerade auf Standardmodule mit gezielter Konfiguration. Vollständige Individualentwicklung wäre unwirtschaftlich und wartungsintensiv." },
      ],
    },
    {
      id: "m3_5", type: "matching", charKey: "sophie",
      charMessage: "Jetzt wird es praktisch. Ordnen Sie jede technische Erwartung an moderne Enterprise Systems ihrer korrekten Beschreibung zu.",
      instruction: "Klicken Sie zuerst eine Anforderung, dann die passende Beschreibung.",
      pairs: [
        { situation: "NEXUS France's SAP-System kann keine neuen Landesgesellschaften ohne massive Anpassungen aufnehmen.", term: "Skalierbarkeit" },
        { situation: "Ein Lagerbestandsabgleich zwischen Deutschland und Frankreich dauert Tage statt Sekunden.", term: "Echtzeit-Daten" },
        { situation: "Das System von NEXUS Logistics hat keine standardisierten Schnittstellen zu anderen Konzernsystemen.", term: "Integration & Schnittstellen" },
        { situation: "Bei starkem saisonalem Bestellaufkommen bricht das Shopsystem von NEXUS Parts regelmäßig zusammen.", term: "Performance" },
        { situation: "Sophie kann nicht nachvollziehen, wer wann welche Kundendaten in welchem System verändert hat.", term: "Sicherheit" },
        { situation: "NEXUS France muss aufgrund französischer Datenschutzvorgaben bestimmte Speicherorte für Kundendaten nachweisen.", term: "Compliance" },
      ],
    },
    {
      id: "m3_6", type: "reflection", charKey: "sophie",
      message: "Wir haben jetzt ein gemeinsames Verständnis der Komponenten und ihrer technischen Anforderungen. Das ist die Grundlage für alles, was in den kommenden Wochen folgt, von der Komplexitätsbewertung bis zur Template-Strategie für die S/4HANA-Migration.",
      question: "Was ist die wichtigste Erkenntnis aus diesem Level für die anstehende Konzernarchitektur-Arbeit?",
      answers: [
        { text: "Dass alle vier Landesgesellschaften identische Enterprise-System-Landschaften haben und die Konsolidierung rein technisch trivial ist.", correct: false, feedback: "Das Gegenteil ist der Fall: NEXUS Deutschland, France, Logistics und Parts haben deutlich unterschiedliche Reifegrade und Architekturen. Die Konsolidierung ist alles andere als trivial." },
        { text: "Dass ES-Komponenten sowohl fachlich-funktional als auch technisch-architektonisch verstanden werden müssen, um eine fundierte Konsolidierungsstrategie für die vier heterogenen NEXUS-Landschaften zu entwickeln.", correct: true, feedback: "Genau. Beide Perspektiven, fachliche Funktion und technische Anforderung, sind notwendig, um die Unterschiede zwischen NEXUS Deutschland, France, Logistics und Parts präzise zu bewerten und eine passende Zielarchitektur zu entwickeln." },
        { text: "Dass BI die wichtigste aller Komponenten ist und zuerst konsolidiert werden sollte, weil erst konsistente Kennzahlen eine fundierte Entscheidung über die Reihenfolge aller weiteren Schritte ermöglichen.", correct: false, feedback: "Keine der sechs Komponenten hat pauschale Priorität. Die richtige Reihenfolge einer Konsolidierung hängt von der jeweiligen Ist-Situation und den Unternehmenszielen ab." },
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
