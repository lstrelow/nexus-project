export const ML1 = {
  intro: {
    charKey: "maya",
    message: "Willkommen zurück. Fünf Jahre ist es her, dass wir gemeinsam die erste Transformation von NEXUS Corp gemeistert haben. Seitdem hat sich viel getan, vielleicht zu viel, zu schnell. Ich brauche Sie wieder als externes Beratungsteam. Diesmal geht es nicht mehr darum, ob wir Enterprise Systems einführen. Es geht darum, die Landschaft die wir geschaffen haben, endlich in den Griff zu bekommen.",
  },
  scenes: [
    {
      id: "m1_1", type: "company", charKey: "priya",
      charMessage: "Ich habe in den letzten fünf Jahren fast keine Nacht mehr durchgeschlafen. Lassen Sie mich zeigen, was aus unserem sauberen Sechs-Komponenten-System geworden ist.",
      content: {
        intro: "NEXUS Corp ist nicht mehr das Unternehmen, das Sie kennengelernt haben. Drei Übernahmen in fünf Jahren haben aus einem übersichtlichen Mittelständler einen komplexen Konzern gemacht, mit allen Konsequenzen für die IT-Landschaft.",
        metrics: [
          { label: "Mitarbeitende", value: "800", icon: "👥" },
          { label: "Standorte", value: "9", icon: "🏢" },
          { label: "Länder", value: "4", icon: "🌍" },
          { label: "Jahresumsatz", value: "310 Mio. €", icon: "💰" },
          { label: "IT-Systeme im Einsatz", value: "47", icon: "🖥️" },
          { label: "ERP-Instanzen", value: "3", icon: "⚠️" },
        ],
        systems: [
          "NEXUS Deutschland: Das ursprüngliche System aus Ihrer ersten Transformation (ERP, CRM, SCM, SRM, Shopsystem und BI), sauber integriert.",
          "NEXUS Logistics (2022 übernommen): Ein Berliner Logistik-Startup mit eigenem, cloud-nativem WMS und einer selbstgebauten Auftragsabwicklung.",
          "NEXUS France (2023 übernommen): Ein französischer Wettbewerber mit einer 15 Jahre alten SAP-ECC-Installation und komplett eigenen Stammdaten.",
          "NEXUS Parts (2025 übernommen): Ein spezialisierter Teilehändler mit einer Nischenlösung für Ersatzteilkataloge, die durch nichts zu ersetzen schien, also blieb sie.",
        ],
      },
      question: "Maya möchte Großkunden künftig konzernweit verbindliche Liefertermine zusagen, unabhängig davon, aus welchem Lager geliefert wird. Welche Eigenschaft der aktuellen Landschaft steht dem am unmittelbarsten im Weg?",
      answers: [
        { text: "Getrennte Stammdaten in mehreren ERP-Instanzen: Bestände und Artikel lassen sich nicht ohne manuellen Abgleich in einer gemeinsamen Verfügbarkeitsprüfung über alle Gesellschaften zusammenführen.", correct: true, feedback: "Genau. Eine konzernweite Verfügbarkeitsprüfung setzt voraus, dass ein Artikel in allen Gesellschaften eindeutig identifizierbar ist und Bestände auf einer gemeinsamen Datenbasis abgefragt werden können. Genau das fehlt bei drei ERP-Instanzen mit eigenen Stammdaten." },
        { text: "Die hohe Gesamtzahl von 47 Systemen: Jede zusätzliche Anwendung verlängert die Prozesskette einer Verfügbarkeitsprüfung, weshalb zuerst die Anzahl der Systeme reduziert werden muss.", correct: false, feedback: "Die Anzahl der Systeme ist ein Komplexitätsindikator, aber nicht die unmittelbare Ursache. Auch viele Systeme können eine konzernweite Verfügbarkeitsprüfung unterstützen, wenn sie auf abgestimmten Stammdaten arbeiten. Entscheidend ist die fehlende gemeinsame Datenbasis." },
        { text: "Das veraltete SAP ECC von NEXUS France: Solange diese Installation nicht auf S/4HANA migriert ist, fehlen die technischen Voraussetzungen für eine konzernweite Verfügbarkeitsprüfung.", correct: false, feedback: "Der Release-Stand ist nicht der Engpass. Selbst ein auf S/4HANA migriertes System von NEXUS France würde mit eigenen Stammdaten weiterhin eine Insel bleiben. Eine technische Modernisierung ohne Stammdatenharmonisierung löst das Problem nicht." },
      ],
    },
    {
      id: "m1_2", type: "persona", charKey: "maya",
      intro: "Ich bin nach wie vor CEO, aber mein Alltag hat sich fundamental verändert. Früher habe ich operative Entscheidungen getroffen. Heute verbringe ich die Hälfte meiner Zeit damit, zwischen vier Landesgesellschaften zu vermitteln, die jeweils glauben, ihr System sei das bessere.",
      content: {
        background: "Maya Chen leitet NEXUS Corp seit über 15 Jahren. Nach der erfolgreichen ersten Transformation hat sie das Unternehmen durch drei Übernahmen geführt, getrieben von Wachstumsambitionen, aber ohne eine klare IT-Konsolidierungsstrategie für die übernommenen Unternehmen.",
        personality: "Strategisch, entscheidungsfreudig, aber zunehmend frustriert davon, dass technische Komplexität ihre unternehmerischen Entscheidungen ausbremst.",
        tasks: ["Konzernstrategie", "M&A-Integration", "Stakeholder-Management", "Budgetverantwortung für die S/4HANA-Transformation"],
        painPoints: "Jede strategische Entscheidung, von der Einführung eines neuen Vertriebskanals bis zur Konsolidierung des Lagernetzwerks, wird durch inkompatible Systeme verzögert oder verkompliziert.",
      },
      question: "Maya sagt: 'Früher war IT ein Werkzeug. Heute ist IT die Grenze dessen, was wir als Unternehmen überhaupt tun können.' Welche Konsequenz für die Steuerung der anstehenden Konsolidierung folgt daraus am ehesten?",
      answers: [
        { text: "Architekturentscheidungen gehören auf die Ebene der Konzernführung, weil sie strategische Optionen wie weitere Übernahmen oder neue Vertriebskanäle eröffnen oder verschließen.", correct: true, feedback: "Richtig. Wenn die IT-Architektur die unternehmerische Handlungsfähigkeit begrenzt, sind Architekturentscheidungen Strategieentscheidungen. Sie können nicht allein als Betriebs- oder Kostenthema an die IT delegiert werden." },
        { text: "Die Landesgesellschaften sollten mehr IT-Autonomie erhalten, damit sie ihre Systeme schneller an lokale Marktanforderungen anpassen können und Maya von Vermittlungsaufgaben entlastet wird.", correct: false, feedback: "Mehr lokale Autonomie würde kurzfristig Konflikte entschärfen, aber die Fragmentierung weiter verstärken, die Mayas Handlungsspielraum überhaupt erst einschränkt. Lokale Optimierung wirkt hier gegen das konzernweite Ziel." },
        { text: "Die Konsolidierung sollte vollständig an die IT-Abteilung delegiert werden, damit sich die Geschäftsführung auf Strategiefragen konzentrieren kann, statt sich mit Systemdetails zu befassen.", correct: false, feedback: "Genau diese Trennung ist das Problem: Wenn IT die Grenze der Strategie bildet, lässt sich beides nicht mehr getrennt steuern. Eine vollständig delegierte Konsolidierung würde ohne strategische Priorisierung und ohne Durchsetzungskraft gegenüber den Landesgesellschaften bleiben." },
      ],
    },
    {
      id: "m1_3", type: "persona", charKey: "priya",
      intro: "Ich habe mittlerweile ein Team von zwölf Leuten, aber selbst das reicht kaum aus. Jede der vier Systemwelten hat ihre eigene Logik, ihre eigenen Ansprechpartner, ihre eigenen Altlasten.",
      content: {
        background: "Priya Nair ist inzwischen Head of Enterprise Architecture. Sie hat gerade einen Enterprise Architect neu eingestellt, der ihr helfen soll, endlich eine konzernweite Zielarchitektur zu entwickeln.",
        personality: "Analytisch, systematisch, mittlerweile auch politisch erfahren: Sie weiß, dass technische Lösungen ohne organisatorisches Mandat scheitern.",
        tasks: ["Konzern-IT-Architektur", "Bewertung der Systemkomplexität", "Vorbereitung der S/4HANA-Migration", "Führung des Architektur-Teams"],
        painPoints: "Jede Landesgesellschaft hat im Laufe der Jahre eigene Erweiterungen und Individualisierungen vorgenommen. Ein einfaches 'wir migrieren alle auf ein System' ist technisch und politisch nicht durchsetzbar.",
      },
      question: "Priya will die Konsolidierung anstoßen. Welches Vorgehen ist angesichts der beschriebenen Ausgangslage am tragfähigsten?",
      answers: [
        { text: "Zunächst eine technisch vollständige Zielarchitektur ausarbeiten und dem Vorstand vorlegen, da eine belastbare Faktenbasis Widerstände der Landesgesellschaften am wirksamsten entkräftet.", correct: false, feedback: "Eine fundierte Zielarchitektur ist notwendig, aber Fakten allein lösen keine Interessenkonflikte. Eine ohne die Landesgesellschaften entwickelte Zielarchitektur riskiert, als Vorgabe der Zentrale abgelehnt zu werden, selbst wenn sie fachlich richtig ist." },
        { text: "Sich ein klares Mandat der Konzernführung sichern und die Landesgesellschaften früh in die Bewertung ihrer Individualisierungen einbinden, um geschäftskritische von historisch gewachsenen zu trennen.", correct: true, feedback: "Genau. Das Mandat liefert die Durchsetzungskraft, die frühe Einbindung die Akzeptanz und das Fachwissen über die lokalen Anforderungen. Erst die gemeinsame Bewertung zeigt, welche Individualisierungen tatsächlich Wert stiften und welche abgelöst werden können." },
        { text: "Mit der Landesgesellschaft beginnen, die den geringsten Widerstand zeigt, und dort einen schnellen, sichtbaren Erfolg erzielen, der die übrigen Gesellschaften von der Konsolidierung überzeugt.", correct: false, feedback: "Quick Wins können Akzeptanz schaffen, ersetzen aber weder Mandat noch konzernweite Kriterien. Ohne beides droht der Pilot zu einer weiteren Insellösung zu werden, und der eigentliche Konflikt mit den widerständigen Gesellschaften wird nur vertagt." },
      ],
    },
    {
      id: "m1_4", type: "persona", charKey: "tom",
      intro: "Ich leite jetzt die Logistik für ganz NEXUS Corp, zumindest auf dem Papier. In Wirklichkeit kämpfe ich damit, dass unser deutsches Lager, das französische Lager und das System von NEXUS Logistics nicht miteinander sprechen.",
      content: {
        background: "Tom Becker ist zum Head of Global Operations aufgestiegen. Er koordiniert heute neun Lagerstandorte in vier Ländern, mit drei unterschiedlichen Warenwirtschaftssystemen.",
        personality: "Pragmatisch, bodenständig, mittlerweile auch frustriert: Er hat gehofft, dass die Systemlandschaft nach der ersten Transformation für immer gelöst wäre.",
        tasks: ["Globale Lagerkoordination", "Bestandssteuerung über Ländergrenzen", "Lieferantenmanagement für vier Regionen"],
        painPoints: "Ein einfacher Lagerbestandsabgleich zwischen Deutschland und Frankreich dauert heute länger als früher der komplette Wareneingang, weil die Systeme keine gemeinsame Datenbasis haben.",
      },
      question: "Tom schlägt vor, die drei Lagersysteme kurzfristig über Schnittstellen zu koppeln, um Bestände automatisch abzugleichen. Wie ist dieser Vorschlag zu bewerten?",
      answers: [
        { text: "Als tragfähige Dauerlösung: Schnittstellen sind günstiger und risikoärmer als eine Konsolidierung, und der automatische Bestandsabgleich behebt Toms eigentliches Problem vollständig.", correct: false, feedback: "Der Bestandsabgleich ist nur ein Symptom. Als Dauerlösung bleiben unterschiedliche Artikelstammdaten und Prozesslogiken bestehen, und der Pflegeaufwand der Schnittstellen wächst mit jeder Änderung in einem der Systeme." },
        { text: "Als nicht zielführend: Zwischen heterogenen Systemen lassen sich Bestandsdaten technisch nicht verlässlich austauschen, solange keine gemeinsame Datenbank existiert.", correct: false, feedback: "Schnittstellen zwischen heterogenen Systemen sind technisch gut realisierbar und in der Praxis verbreitet. Die Grenze liegt nicht in der Machbarkeit, sondern darin, dass Schnittstellen Daten übertragen, aber nicht harmonisieren." },
        { text: "Als sinnvolle Übergangslösung mit Grenzen: Schnittstellen übertragen Daten, harmonisieren aber weder Stammdaten noch Prozesslogiken, sodass der Mapping-Aufwand mit jeder weiteren Gesellschaft wächst.", correct: true, feedback: "Genau. Punkt-zu-Punkt-Schnittstellen können den Betrieb kurzfristig entlasten. Sie verschieben die Harmonisierung jedoch in Mapping-Regeln, deren Anzahl und Fehleranfälligkeit mit jeder zusätzlichen Gesellschaft überproportional steigen." },
      ],
    },
    {
      id: "m1_4b", type: "persona", charKey: "carlos",
      intro: "Vertrieb ist für mich heute ein anderes Spiel. Früher hatte ich ein Team, einen Markt, ein CRM. Heute verhandle ich mit Kunden in vier Ländern, und jedes Mal muss ich mich fragen, in welchem System ich gerade eigentlich arbeite.",
      content: {
        background: "Carlos Ruiz ist zum VP Sales International aufgestiegen. Er verantwortet den Vertrieb über alle vier Landesgesellschaften hinweg: ein Vertrieb, der auf drei unterschiedlichen CRM-Systemen läuft, die kaum Daten austauschen.",
        personality: "Kundenorientiert, ambitioniert, zunehmend genervt davon, dass ihm die eigene Systemlandschaft im Weg steht statt ihn zu unterstützen.",
        tasks: ["Internationale Vertriebsstrategie", "Konzernweites Key-Account-Management", "Harmonisierung der Vertriebsprozesse"],
        painPoints: "Ein Großkunde, der in Deutschland und Frankreich gleichzeitig bestellt, taucht in den Systemen als zwei komplett unabhängige Kunden auf, mit unterschiedlichen Historien, unterschiedlichen Konditionen, keinerlei gemeinsamer Sicht.",
      },
      question: "Welche Maßnahme behebt Carlos' Problem, dass ein Großkunde in den Systemen als zwei voneinander unabhängige Kunden erscheint, an der Ursache?",
      answers: [
        { text: "Die Einführung eines gemeinsamen CRM-Systems für alle Landesgesellschaften, damit sämtliche Vertriebsmitarbeitenden in derselben Anwendung mit denselben Kundendaten arbeiten.", correct: false, feedback: "Ein gemeinsames CRM ist naheliegend, löst das Problem aber nicht automatisch: Ohne bereinigte Kundenstammdaten und abgebildete Konzernhierarchien wandern die zwei Kundenkonten einfach in dasselbe System und bleiben dort Dubletten." },
        { text: "Ein konzernweites Reporting im BI-System, das die Umsätze und Konditionen beider Kundenkonten nachträglich zusammenführt und Carlos eine gemeinsame Sicht bereitstellt.", correct: false, feedback: "Das schafft Transparenz für die Auswertung, setzt aber nachgelagert an. In den operativen Prozessen (Angebote, Konditionen, Auftragsabwicklung) bleibt der Kunde weiterhin zweigeteilt." },
        { text: "Ein konzernweites Stammdatenmanagement für Kunden mit eindeutiger Identität, Dublettenbereinigung und abgebildeten Konzernhierarchien, auf das alle operativen Systeme zugreifen.", correct: true, feedback: "Genau. Die Ursache liegt in den Stammdaten, nicht in der Anwendung. Erst eine eindeutige, konzernweit gepflegte Kundenidentität ermöglicht eine einheitliche Sicht, unabhängig davon, wie viele CRM-Systeme zunächst noch parallel laufen." },
      ],
    },
    {
      id: "m1_4c", type: "persona", charKey: "lena",
      intro: "Ich sollte eigentlich Business Intelligence für den gesamten Konzern liefern. Stattdessen verbringe ich die meiste Zeit damit, Daten aus vier unterschiedlichen BI-Umgebungen manuell zusammenzuführen, bevor ich überhaupt anfangen kann zu analysieren.",
      content: {
        background: "Lena Fischer ist zur Head of Group Analytics aufgestiegen. Sie soll Maya und dem Führungsteam konzernweite Kennzahlen liefern, auf Basis von vier BI-Systemen mit völlig unterschiedlichen Datenmodellen.",
        personality: "Präzise, dateninteressiert, zunehmend frustriert davon, dass ihre eigentliche Aufgabe, die Analyse, zur Nebensache neben der Datenaufbereitung geworden ist.",
        tasks: ["Konzernweites Reporting", "Vereinheitlichung der Kennzahlenlogik", "Vorbereitung datenbasierter Entscheidungen für die Geschäftsführung"],
        painPoints: "Ein einfacher Vergleich des Umsatzes zwischen NEXUS Deutschland und NEXUS France dauert wegen unterschiedlicher Datenmodelle und Berichtsperioden mehrere Tage. Zeit, die für strategische Analyse fehlt.",
      },
      question: "Lena schlägt vor, vorerst ein zentrales Data Warehouse aufzubauen, das Daten aus den vier BI-Umgebungen zusammenführt und Kennzahlen vereinheitlicht. Worin liegt die wesentliche Einschränkung dieses Ansatzes?",
      answers: [
        { text: "Er harmonisiert erst nachgelagert: Unterschiedliche Stammdaten und Buchungslogiken der Quellsysteme müssen dauerhaft über Mapping-Regeln übersetzt werden, die bei jeder Prozessänderung anzupassen sind.", correct: true, feedback: "Genau. Ein Data Warehouse kann heterogene Quellen zusammenführen und ist als Zwischenschritt oft sinnvoll. Die Inkonsistenzen bleiben jedoch in den Quellsystemen bestehen und müssen dauerhaft durch Transformationsregeln ausgeglichen werden." },
        { text: "Er verursacht zu hohe Latenz: Ein Data Warehouse liefert nur periodische Ladestände, sodass konzernweite Kennzahlen für strategische Entscheidungen grundsätzlich zu spät verfügbar sind.", correct: false, feedback: "Die Latenz eines Data Warehouse ist real, für strategische Konzernkennzahlen aber meist unkritisch: Diese werden selten in Echtzeit benötigt. Die wesentliche Einschränkung liegt in der dauerhaften Harmonisierung heterogener Quelldaten." },
        { text: "Er setzt voraus, dass zuvor alle operativen Systeme auf eine gemeinsame ERP-Plattform konsolidiert wurden, da ein Data Warehouse sonst keine vergleichbaren Kennzahlen liefern kann.", correct: false, feedback: "Data Warehouses sind gerade dafür konzipiert, Daten aus heterogenen Quellen zusammenzuführen. Vergleichbare Kennzahlen sind auch ohne ERP-Konsolidierung möglich, allerdings nur mit erheblichem und dauerhaftem Mapping-Aufwand." },
      ],
    },
    {
      id: "m1_4d", type: "persona", charKey: "sophie",
      intro: "Ich bin seit drei Monaten hier. Priya hat mich gezielt geholt, weil bislang niemand die Systemlandschaft als Ganzes im Blick hatte, geschweige denn eine Zielarchitektur für die Konsolidierung. Ohne diese Struktur ist die anstehende Transformation nicht zu stemmen.",
      content: {
        background: "Sophie Lindqvist ist NEXUS Corps erste Enterprise Architect. Sie kommt aus einem großen internationalen Konzern, wo sie bereits mehrere System-Konsolidierungen begleitet hat. Priya hat sie gezielt rekrutiert, um eine konzernweite Zielarchitektur zu entwickeln.",
        personality: "Methodisch, erfahren, unbequem in der besten Bedeutung des Wortes: Sie stellt Fragen, die niemand bei NEXUS Corp bisher stellen wollte.",
        tasks: ["Entwicklung der konzernweiten Zielarchitektur", "Bewertung der Architektur-Komplexität", "Steuerung der S/4HANA-Transformationsstrategie"],
        painPoints: "In ihren ersten Wochen hat Sophie festgestellt, dass es bei NEXUS Corp bislang keine einzige vollständige Dokumentation der bestehenden Systemlandschaft gibt. Jede Landesgesellschaft kennt nur ihre eigene Welt.",
      },
      question: "Sophie stellt fest, dass keine vollständige Dokumentation der Systemlandschaft existiert. Was sollte sie als Grundlage für die Konsolidierungsstrategie zuerst erarbeiten?",
      answers: [
        { text: "Eine Ist-Architektur, die Anwendungen den unterstützten Geschäftsfähigkeiten und Prozessen zuordnet und ihre Schnittstellen und Datenflüsse abbildet, um Redundanzen und Abhängigkeiten sichtbar zu machen.", correct: true, feedback: "Genau. Erst die Zuordnung von Anwendungen zu Geschäftsfähigkeiten zeigt, wo mehrere Systeme dieselbe Aufgabe erfüllen, und erst die Abbildung der Schnittstellen zeigt, welche Abhängigkeiten eine Migration berücksichtigen muss." },
        { text: "Eine detaillierte Zielarchitektur auf Basis von S/4HANA, da die Plattformentscheidung bereits getroffen ist und eine aufwendige Analyse der abzulösenden Systeme den Projektstart nur verzögern würde.", correct: false, feedback: "Ohne Kenntnis des Ist-Zustands lässt sich weder ein Migrationspfad planen noch entscheiden, welche Funktionen (etwa der Ersatzteilkatalog von NEXUS Parts) erhalten bleiben müssen. Die Zielarchitektur baut auf der Ist-Analyse auf, nicht umgekehrt." },
        { text: "Ein vollständiges Inventar aller 47 Systeme mit Versionen, Lizenzkosten und Verantwortlichen, um auf dieser Basis die teuersten und ältesten Systeme zuerst abzulösen.", correct: false, feedback: "Ein Inventar ist ein sinnvoller erster Schritt, bleibt aber eine reine Bestandsliste. Ohne Bezug zu Geschäftsfähigkeiten und ohne Abbildung der Abhängigkeiten lassen sich weder Redundanzen erkennen noch die Folgen einer Ablösung abschätzen. Kosten und Alter allein sind keine geeigneten Priorisierungskriterien." },
      ],
    },
    {
      id: "m1_5", type: "definition", charKey: "priya",
      charMessage: "Bevor wir tief in die einzelnen Themen einsteigen, möchte ich Ihnen eine neue Kollegin vorstellen und den Rahmen erklären, in dem wir uns die nächsten Wochen bewegen werden.",
      definition: {
        term: "Large Enterprise Systems",
        summary: "Large Enterprise Systems bezeichnen Applikationsarchitekturen großer Unternehmen, die von einer Vielzahl an Standardsoftwaresystemen dominiert werden. Die schiere Anzahl an Systemen macht das Management zunehmend komplex und behindert die Entwicklung des gesamten Unternehmens.",
        aspects: [
          { icon: "🏗️", title: "Vom Applikations- zum Architektur- management", text: "Einzelne Systeme zu verwalten reicht nicht mehr. Die Gesamtarchitektur muss aktiv gestaltet werden" },
          { icon: "☁️", title: "Technologische Herausforderungen", text: "Cloud Computing verändert grundlegend, wie Systemlandschaften betrieben und integriert werden" },
          { icon: "🔗", title: "Organisation und Applikation", text: "Die Interdependenzen zwischen Unternehmensstruktur und IT-Architektur müssen aktiv gestaltet werden" },
          { icon: "📈", title: "Zukunftsrelevanz", text: "Konzeption, Entwicklung und Transformation von Applikations- architekturen gewinnen in der Praxis weiter an Bedeutung" },
        ],
        nexusContext: "NEXUS Corp mit seinen 47 Systemen über vier Landesgesellschaften ist ein Lehrbuchbeispiel für ein Large Enterprise System und genau für die Herausforderungen, die in den kommenden Wochen im Zentrum stehen werden.",
      },
      question: "Welche Aussage erfasst die Problemverschiebung von der klassischen ES-Einführung, die Sie im Bachelor-Modul begleitet haben, zu Large Enterprise Systems am präzisesten?",
      answers: [
        { text: "Der Schwerpunkt verschiebt sich von der Prozessgestaltung zur Technologieauswahl, weil in großen Landschaften vor allem Cloud- und Plattformentscheidungen über den Erfolg bestimmen.", correct: false, feedback: "Cloud Computing ist ein wichtiger Aspekt, aber nicht der Kern der Verschiebung. Die zentrale Herausforderung liegt in den Wechselwirkungen zwischen vielen bestehenden Systemen und der Organisationsstruktur, nicht in der Technologiewahl allein." },
        { text: "Die Herausforderung bleibt im Kern dieselbe, nur in größerem Maßstab: Bewährte Einführungsmethoden lassen sich auf mehrere Gesellschaften parallel anwenden, wenn ausreichend Ressourcen vorhanden sind.", correct: false, feedback: "Das ist ein verbreitetes Missverständnis. Mit der Zahl der Systeme und ihren Abhängigkeiten entsteht ein qualitativ neues Problem: Jede Entscheidung wirkt auf andere Systeme und Organisationseinheiten zurück. Einführungsmethoden für ein einzelnes System erfassen diese Wechselwirkungen nicht." },
        { text: "Im Vordergrund steht nicht mehr das einzelne System, sondern das Zusammenspiel vieler bestehender Systeme: Entscheidungen müssen ihre Wechselwirkungen mit Gesamtarchitektur und Organisation berücksichtigen.", correct: true, feedback: "Genau. Das Bachelor-Modul behandelte die Frage 'Welches System führen wir ein?', das Master-Modul behandelt die deutlich komplexere Frage 'Wie gestalten und steuern wir eine bereits gewachsene, fragmentierte Landschaft?'" },
      ],
    },
    {
      id: "m1_6", type: "reflection", charKey: "maya",
      message: "Ich muss ehrlich sein: Ich habe die erste Transformation als Erfolg gefeiert. Fünf Jahre später merke ich, dass Erfolg in der IT nie ein Endzustand ist, sondern ein fortlaufender Prozess. Bevor wir in die Details der einzelnen Themen einsteigen, möchte ich wissen, wie Sie die Situation einschätzen.",
      question: "Was hätte NEXUS Corp bei den drei Übernahmen anders machen müssen, um die heutige Situation zu vermeiden?",
      answers: [
        { text: "Bei jeder Übernahme alle Systeme des übernommenen Unternehmens zeitnah durch die bewährten Systeme von NEXUS Deutschland ersetzen, um gar nicht erst Parallelstrukturen entstehen zu lassen.", correct: false, feedback: "Eine pauschale Ablösung ignoriert, dass übernommene Systeme Wert tragen können, etwa das cloud-native WMS von NEXUS Logistics oder der Ersatzteilkatalog von NEXUS Parts. Zudem erhöht sie das Risiko in der ohnehin sensiblen Phase nach einer Übernahme." },
        { text: "IT-Integration als festen Bestandteil der M&A-Planung behandeln und für jede Übernahme bewusst entscheiden, welche Systeme abgelöst, integriert oder vorerst parallel betrieben werden, ausgerichtet an einer Zielarchitektur.", correct: true, feedback: "Genau. Das Problem war nicht, dass Systeme parallel liefen, sondern dass dies ohne bewusste Entscheidung und ohne Zielbild geschah. IT-Architektur ist keine einmalige Aufgabe, sondern eine dauerhafte Führungsverantwortung, gerade in Wachstumsphasen." },
        { text: "Die übernommenen Gesellschaften dauerhaft als eigenständige Einheiten mit eigener IT führen, um Integrationskosten und Konflikte zwischen den Gesellschaften von vornherein zu vermeiden.", correct: false, feedback: "Für reine Finanzbeteiligungen kann das sinnvoll sein. NEXUS Corp verfolgt mit den Übernahmen aber operative Synergien, etwa im gemeinsamen Lagernetzwerk und im Key-Account-Management. Diese sind ohne IT-Integration nicht zu realisieren." },
      ],
    },
  ],
  outro: {
    charKey: "maya",
    message: "Willkommen zurück. Diesmal ist die Aufgabe größer, komplexer und ehrlich gesagt auch unbequemer als beim ersten Mal. Aber ich vertraue darauf, dass wir gemeinsam wieder eine Lösung finden, diesmal eine, die auch in fünf weiteren Jahren noch trägt.",
    xp: 300,
    badge: "🏗️ Konzern-Kennerin",
  },
};
