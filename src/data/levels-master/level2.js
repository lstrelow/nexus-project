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
      question: "Offiziell waren die Ziele von eLWIS 'mit vertretbarem Aufwand nicht mehr erreichbar'. Welcher Mechanismus erklärt am besten, wie es dazu kommen konnte?",
      answers: [
        { text: "Umfangreiche Anpassungen des Standards an bestehende Lidl-Prozesse und die Integration zahlreicher Altsysteme ließen Aufwand und Komplexität schneller wachsen als den realisierbaren Nutzen.", correct: true, feedback: "Genau. Über die Jahre wurden über 30 Systeme aus der bestehenden Infrastruktur in eLWIS integriert, und der SAP-Standard wurde stark an gewachsene Lidl-Prozesse angepasst. Berichten zufolge wollte Lidl etwa an der Bestandsbewertung zu Einkaufspreisen festhalten, während der SAP-Standard im Handel auf Verkaufspreisen basiert. Jede Abweichung vom Standard erhöht den Aufwand in Entwicklung, Test und Wartung, bis die Wirtschaftlichkeit kippt." },
        { text: "Die gewählte SAP-Branchenlösung war für die Anforderungen eines Discounters funktional ungeeignet, sodass ein anderer Softwareanbieter von Beginn an die bessere Wahl gewesen wäre.", correct: false, feedback: "Die SAP-Handelslösung wird von vielen großen Handelsunternehmen produktiv eingesetzt. Das Problem lag weniger in der Software selbst als in der Entscheidung, den Standard an die eigenen Prozesse anzupassen, statt die Prozesse an den Standard." },
        { text: "Die lange Projektlaufzeit von sieben Jahren hätte die eingesetzte Technologie bis zur Fertigstellung veralten lassen, weshalb ein Neustart auf einer moderneren Plattform wirtschaftlicher war.", correct: false, feedback: "Die lange Laufzeit ist eher ein Symptom als die Ursache. Sie entstand gerade dadurch, dass Anpassungen und Integrationen den Umfang immer weiter wachsen ließen. Technologische Veralterung war nicht der Kern der offiziellen Begründung." },
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
      question: "Maya möchte die Konsolidierung bis Ende 2027 abschließen, um vor der nächsten geplanten Übernahme eine stabile Basis zu haben. Priya hält den Zeitplan für zu ambitioniert. Welche Reaktion begrenzt das Projektrisiko am wirksamsten?",
      answers: [
        { text: "Den Zeitplan halten und zusätzliche externe Beraterinnen und Berater einsetzen, um Arbeitspakete zu parallelisieren und den Termin ohne Abstriche beim Umfang zu erreichen.", correct: false, feedback: "Mehr Personal beschleunigt ein Großprojekt nur begrenzt: Einarbeitung und Abstimmungsaufwand steigen, und das Wissen über die gewachsenen NEXUS-Prozesse lässt sich nicht einkaufen. Der Lidl-Fall zeigt, dass Ressourcen allein strukturelle Probleme nicht kompensieren." },
        { text: "Den Umfang in Wellen gliedern und für jede Welle Qualitätskriterien wie Datenqualität, Testabdeckung und Schulungsstand festlegen, die nicht unterschritten werden dürfen, sodass Zeitdruck den Umfang verschiebt statt die Qualität.", correct: true, feedback: "Richtig. Zeitdruck wirkt als Verstärker aller anderen Risiken, weil Teams unter Druck systematisch bei Tests, Datenqualität und Change Management sparen. Verbindliche Qualitätskriterien je Welle lenken den Druck auf den Umfang, der sich steuern lässt, statt auf die Qualität." },
        { text: "Den Zeitplan halten, aber Datenbereinigung und Schulungen in die Phase nach dem Go-live verlagern, da sie sich im laufenden Betrieb mit realen Nutzungserfahrungen effizienter erledigen lassen.", correct: false, feedback: "Genau das ist die typische Abkürzung unter Zeitdruck. Unbereinigte Daten werden ins neue System übernommen und verursachen dort Folgefehler in allen Prozessen, und ungeschulte Mitarbeitende greifen auf Workarounds zurück. Beides ist nach dem Go-live deutlich teurer zu beheben." },
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
      question: "Maya erklärt die Konsolidierung öffentlich zur Chefsache und eröffnet das Kick-off persönlich. Danach überlässt sie sämtliche Entscheidungen dem Projektteam. Welches Risiko besteht trotz dieses Bekenntnisses?",
      answers: [
        { text: "Ein geringes: Das öffentliche Bekenntnis klärt das Mandat und signalisiert Priorität, und die Delegation der Entscheidungen an das Projektteam verkürzt zudem die Entscheidungswege.", correct: false, feedback: "Die Delegation operativer Entscheidungen ist sinnvoll. Es gibt aber Entscheidungen, die das Projektteam nicht treffen kann, etwa Konflikte zwischen Landesgesellschaften oder die Priorisierung des Projekts gegenüber dem Tagesgeschäft. Dafür braucht es die fortlaufende Beteiligung der Führung." },
        { text: "Das Projektteam könnte sich zu stark an Mayas öffentlich formulierten Erwartungen orientieren und kritische fachliche Einschätzungen zurückhalten, wodurch Fehlentwicklungen später erkannt werden.", correct: false, feedback: "Dieses Risiko besteht grundsätzlich, entsteht aber eher durch eine zu dominante als durch eine abwesende Führung. Im beschriebenen Szenario liegt das Problem darin, dass Maya nach dem Kick-off nicht mehr verfügbar ist, wenn ihre Autorität gebraucht wird." },
        { text: "Top Management Support erschöpft sich nicht im symbolischen Bekenntnis: Bei Konflikten zwischen Landesgesellschaften oder Ressourcenkonkurrenz mit dem Tagesgeschäft fehlt dem Projektteam die Autorität, selbst zu entscheiden.", correct: true, feedback: "Genau. Top Management Support wird in der Literatur so häufig genannt, weil ES-Einführungen Entscheidungen erfordern, die über einzelne Bereiche hinausgehen. Ein einmaliges Bekenntnis ersetzt nicht die fortlaufende Bereitschaft, solche Konflikte zu entscheiden und Ressourcen freizugeben." },
      ],
    },
    {
      id: "m2_4", type: "matching", charKey: "priya",
      charMessage: "Testen wir Ihr Verständnis. Ich beschreibe Probleme aus dem NEXUS-Konsolidierungsprojekt. Ordnen Sie jedem Problem den kritischen Erfolgsfaktor zu, der hier vernachlässigt wurde.",
      instruction: "Klicken Sie zuerst einen Erfolgsfaktor, dann die passende Situation.",
      pairs: [
        { situation: "Die Landesgesellschaft France stellt ihre Key User nur 'nach Verfügbarkeit' für das Projekt frei. Priya hat den Konflikt eskaliert, doch seit sechs Wochen entscheidet niemand, ob Projekt oder Tagesgeschäft Vorrang hat.", term: "Top Management Support" },
        { situation: "Im Testsystem weichen die Lagerbestände von NEXUS France deutlich von den physischen Beständen ab, obwohl alle Schnittstellen und Programme nachweislich fehlerfrei laufen.", term: "Data Conversion & Quality" },
        { situation: "Die Vertriebsprozesse im neuen System wurden ausschließlich von IT-Mitarbeitenden aus Deutschland entworfen. In den Abnahme-Workshops stellen Carlos' Teams in Frankreich fest, dass zentrale Abläufe ihres Marktes fehlen.", term: "Project Team" },
        { situation: "Im Steering Committee wird zum dritten Mal darüber gestritten, ob der Ersatzteilkatalog von NEXUS Parts abgelöst werden soll. Jede Seite argumentiert mit einem anderen Verständnis davon, was die Konsolidierung eigentlich erreichen soll.", term: "Clear Objectives" },
        { situation: "Drei Monate nach der Umstellung im Pilotlager führen die Mitarbeitenden ihre Bestände wieder parallel in Excel, obwohl die Daten im neuen System nachweislich korrekt sind. Die alten Abläufe fühlen sich für sie sicherer an.", term: "Change Management" },
        { situation: "Bei NEXUS Logistics verbreitet sich das Gerücht, das eigene WMS werde abgeschaltet und Stellen würden abgebaut. Tatsächlich ist darüber noch gar nicht entschieden, doch die ersten Schlüsselpersonen sehen sich bereits nach neuen Stellen um.", term: "Communication" },
      ],
    },
    {
      id: "m2_5", type: "reflection", charKey: "maya",
      message: "Ich habe die eLWIS-Geschichte schon oft gehört, aber erst jetzt verstehe ich wirklich, wie nah dran wir bei NEXUS Corp an denselben Fehlern sind. 47 Systeme, keine dokumentierte Architektur, vier Landesgesellschaften mit eigenen Prioritäten. Bevor wir tiefer einsteigen: Was ist für Sie die wichtigste Lehre aus diesem Level?",
      question: "Welche Lehre aus dem Lidl-Fall sollte die Gestaltung der NEXUS-Konsolidierung am stärksten prägen?",
      answers: [
        { text: "Den Projektumfang zu Beginn verbindlich festschreiben und keine Änderungen mehr zulassen, damit die Komplexität nicht wie bei eLWIS während der Laufzeit unkontrolliert anwächst.", correct: false, feedback: "Ein eingefrorener Umfang verhindert zwar schleichendes Wachstum, ignoriert aber, dass sich in einem mehrjährigen Projekt Anforderungen und Erkenntnisse verändern. Entscheidend ist nicht, Änderungen auszuschließen, sondern sie bewusst und mit Blick auf die Wirtschaftlichkeit zu steuern." },
        { text: "Konsequent beim SAP-Standard bleiben, auch wenn dafür sämtliche lokalen Prozessbesonderheiten der Landesgesellschaften aufgegeben werden müssen.", correct: false, feedback: "Die Richtung stimmt, die Absolutheit nicht. Manche Besonderheiten, etwa der Ersatzteilkatalog von NEXUS Parts, können echte Wettbewerbsvorteile darstellen. Die Lehre ist nicht, jede Abweichung zu verbieten, sondern jede Abweichung bewusst gegen ihren Nutzen abzuwägen." },
        { text: "Die Wirtschaftlichkeit an verbindlichen Meilensteinen neu bewerten und jede Abweichung vom Standard gegen ihren nachweisbaren Nutzen abwägen, statt Komplexität schleichend anwachsen zu lassen.", correct: true, feedback: "Genau. Bei eLWIS wuchs die Komplexität über Jahre, ohne dass Aufwand und Nutzen konsequent neu bewertet wurden. Verbindliche Überprüfungspunkte und eine klare Regel für Abweichungen vom Standard machen dieses Wachstum sichtbar und steuerbar, bevor die Wirtschaftlichkeit kippt." },
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
