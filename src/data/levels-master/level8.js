export const ML8 = {
  intro: {
    charKey: "sophie",
    message: "Es gibt einen Satz, der mich seit meinem ersten Großprojekt begleitet: 'Programmtests können die Anwesenheit von Fehlern zeigen, aber niemals deren Abwesenheit beweisen.' Das mag entmutigend klingen, aber es macht deutlich, wie wichtig strukturiertes Testmanagement bei einem Projekt wie unserem ist.",
  },
  scenes: [
    {
      id: "m8_1", type: "definition", charKey: "sophie",
      charMessage: "Bevor wir über konkrete Testarten sprechen: Was genau versucht Testmanagement eigentlich zu erreichen?",
      definition: {
        term: "Ziele des Testens",
        summary: "Testmanagement verfolgt mehrere Ziele gleichzeitig: Verifikation (Umsetzung gemäß Anforderungen), Validierung (Unterstützung der Geschäftsprozesse), Risikoreduktion sowie Governance und Abnahmedokumentation (Sommerville, 2018).",
        aspects: [
          { icon: "✅", title: "Verifikation", text: "Ist die Einführung gemäß den definierten Anforderungen umgesetzt worden?" },
          { icon: "🎯", title: "Validierung", text: "Werden die tatsächlichen Geschäftsprozesse des Unternehmens durch das System unterstützt?" },
          { icon: "🛡️", title: "Risikoreduktion", text: "Reduzierung der Gefahr von Ausfällen oder Verzögerungen im produktiven Betrieb, Sicherstellung des Systemschutzes von außen" },
          { icon: "📋", title: "Governance / Abnahme", text: "Dokumentation der Einhaltung von Vorgaben für die Nutzung des Systems" },
        ],
        nexusContext: "Bei NEXUS Corp sind Verifikation und Validierung nicht dasselbe: Ein Testfall kann verifizieren, dass eine Funktion technisch korrekt implementiert wurde, aber erst die Validierung durch NEXUS France zeigt, ob diese Funktion die tatsächlichen französischen Geschäftsprozesse wirklich unterstützt.",
      },
      question: "Worin unterscheidet sich Verifikation von Validierung konkret?",
      answers: [
        { text: "Verifikation prüft, ob die Umsetzung den Anforderungen entspricht. Validierung prüft, ob diese Anforderungen tatsächlich die realen Geschäftsprozesse richtig unterstützen. Beide Fragen können unterschiedlich beantwortet werden.", correct: true, feedback: "Genau. Ein System kann technisch korrekt gegen die dokumentierten Anforderungen verifiziert sein und trotzdem die eigentlichen Geschäftsprozesse nicht angemessen unterstützen, wenn die Anforderungen selbst unvollständig oder falsch waren." },
        { text: "Verifikation und Validierung sind synonyme Begriffe für denselben Testvorgang, die in der Praxis austauschbar verwendet werden, um denselben Qualitätssicherungsschritt zu beschreiben.", correct: false, feedback: "Beide Begriffe bezeichnen unterschiedliche, sich ergänzende Testziele. Sie sind nicht austauschbar." },
        { text: "Verifikation wird nur von Entwicklern durchgeführt, Validierung nur von externen Prüfern.", correct: false, feedback: "Die Unterscheidung liegt im Testziel (Anforderungskonformität vs. Prozessunterstützung), nicht in der ausführenden Person oder Rolle." },
      ],
    },
    {
      id: "m8_2", type: "definition", charKey: "sophie",
      charMessage: "Es gibt einen entscheidenden wirtschaftlichen Grund, warum Testmanagement so früh wie möglich beginnen sollte: die Kosten für Fehlerbehebung explodieren, je später ein Fehler entdeckt wird.",
      definition: {
        term: "Shift-Left und der Kostenfaktor später Fehlererkennung",
        summary: "Der Kostenfaktor für die Fehlerbehebung steigt dramatisch, je später ein Fehler im Entwicklungsprozess entdeckt wird: von rund 10x bei Testphasen bis zu 640x bei End-to-End-Tests im Vergleich zu früher Fehlerfindung (Tassey, 2002).",
        aspects: [
          { icon: "⬅️", title: "Shift-Left-Prinzip", text: "Investition in Qualitätsmaßnahmen früh im Prozess (Plan & Design, Develop & Build) statt erst spät (Test, Deploy)" },
          { icon: "📊", title: "10x-Kostenfaktor", text: "Ein Fehler, der erst in der Testphase gefunden wird, kostet etwa das Zehnfache eines früh gefundenen Fehlers" },
          { icon: "📈", title: "640x-Kostenfaktor", text: "Ein Fehler, der erst durch End-to-End-Tests oder im produktiven Betrieb entdeckt wird, kann das 640-fache kosten" },
          { icon: "🎯", title: "Konsequenz für die Praxis", text: "Unit-Tests und frühe Qualitätsmaßnahmen sind trotz höherem initialem Aufwand wirtschaftlich klar überlegen" },
        ],
        nexusContext: "Für die S/4HANA-Konsolidierung bei NEXUS Corp bedeutet das: Ein Datenmigrationsfehler, der erst nach dem Go-Live bei NEXUS France entdeckt wird, könnte um ein Vielfaches teurer sein als derselbe Fehler, der bereits während der Entwicklungsphase durch Unit-Tests identifiziert wird.",
      },
      question: "Warum wird Shift-Left als wirtschaftlich sinnvoll beschrieben, obwohl frühe Qualitätsmaßnahmen zusätzlichen initialen Aufwand bedeuten?",
      answers: [
        { text: "Weil der zusätzliche frühe Aufwand um ein Vielfaches geringer ist als die exponentiell steigenden Kosten der Fehlerbehebung in späteren Phasen. Die frühe Investition zahlt sich dadurch aus.", correct: true, feedback: "Genau. Der 10x- bzw. 640x-Kostenfaktor zeigt: Selbst ein deutlich höherer initialer Testaufwand ist wirtschaftlich vorteilhaft, wenn er verhindert, dass Fehler erst spät und damit deutlich teurer entdeckt werden." },
        { text: "Weil frühe Tests grundsätzlich kostenlos sind und keinen zusätzlichen Aufwand verursachen.", correct: false, feedback: "Frühe Tests verursachen durchaus Aufwand. Der Punkt ist, dass dieser Aufwand im Vergleich zu späten Fehlerkorrekturen deutlich geringer ausfällt." },
        { text: "Weil Shift-Left nur bei sehr kleinen Softwareprojekten wirtschaftlich sinnvoll ist, da sich der zusätzliche Testaufwand bei großen Projekten nicht mehr refinanzieren lässt.", correct: false, feedback: "Das Prinzip gilt gerade bei großen, komplexen Projekten wie der NEXUS-Konsolidierung besonders stark, da die Fehlerkosten dort besonders hoch ausfallen können." },
      ],
    },
    {
      id: "m8_3", type: "definition", charKey: "priya",
      charMessage: "Tests werden nicht alle auf einmal durchgeführt. Sie folgen einer Logik 'von klein zu groß', die sich in mehreren aufeinander aufbauenden Teststufen zeigt.",
      definition: {
        term: "Teststufen: Von Modultest zu Systemtest",
        summary: "Tests bei einer ES-Einführung folgen dem Prinzip 'von klein zu groß': vom Modultest einzelner Funktionalitäten über Integrationstests bis zum umfassenden Systemtest, der die End-to-End-Prozessfähigkeit vor Go-Live nachweist.",
        aspects: [
          { icon: "🔬", title: "Modultest / Funktionstest", text: "Testet eine einzelne Tätigkeit: z.B. ob ein Transportauftrag korrekt erfasst wird. Entwicklertest bei Eigenentwicklungen, Beratertest bei Standardlösungen" },
          { icon: "🔗", title: "Integrationstest", text: "Testet Prozesse mit mindestens zwei Tätigkeiten: prüft Datenflüsse und Schnittstellen zwischen Modulen. Partiell (Teil des Prozesses) oder vollständig (End-to-End)" },
          { icon: "🖥️", title: "Systemtest / Regressionstest", text: "Testet das Gesamtsystem inklusive Konfiguration und Schnittstellen. Ziel: Nachweis der End-to-End-Prozessfähigkeit vor Go-Live" },
          { icon: "👥", title: "User Acceptance Test (UAT)", text: "Die Fachbereiche testen Prozessfälle anhand der Anforderungen zur offiziellen fachlichen Abnahme des Projekts" },
        ],
        nexusContext: "Bei NEXUS Corp würde ein Modultest prüfen, ob eine einzelne Bestellung korrekt im SAP-System angelegt wird. Ein Integrationstest würde prüfen, ob diese Bestellung automatisch eine Lieferung und eine Rechnung auslöst. Der UAT schließlich lässt die NEXUS-France-Fachbereiche selbst prüfen, ob die neuen Prozesse ihren tatsächlichen Arbeitsalltag abbilden.",
      },
      question: "Warum reicht ein bestandener Integrationstest allein nicht aus, um ein System für den produktiven Einsatz freizugeben?",
      answers: [
        { text: "Weil Integrationstests nur einen Teil oder das Zusammenspiel weniger Module prüfen. Ein umfassender Systemtest und die fachliche Abnahme durch den UAT sind zusätzlich notwendig, um die End-to-End-Prozessfähigkeit und tatsächliche Praxistauglichkeit sicherzustellen.", correct: true, feedback: "Exakt. Integrationstests sind ein wichtiger, aber nicht hinreichender Baustein. Erst Systemtest und UAT zusammen liefern den vollständigen Nachweis der Produktionsreife." },
        { text: "Weil Integrationstests grundsätzlich unzuverlässiger sind als Modultests, da sie auf dem Zusammenspiel mehrerer fehleranfälliger Komponenten gleichzeitig beruhen und dadurch inhärent fragiler sind.", correct: false, feedback: "Integrationstests sind nicht unzuverlässiger. Sie prüfen einfach eine andere, notwendige aber nicht ausreichende Dimension der Systemqualität." },
        { text: "Weil nach Integrationstests immer automatisch ein Fehler gefunden werden muss, da statistisch gesehen jeder Testdurchlauf mindestens eine Unregelmäßigkeit aufdecken sollte, egal wie ausgereift die getestete Komponente ist.", correct: false, feedback: "Es geht nicht darum, zwangsläufig weitere Fehler zu finden, sondern darum, zusätzliche Qualitätsdimensionen (Gesamtsystem, fachliche Praxistauglichkeit) abzudecken." },
      ],
    },
    {
      id: "m8_4", type: "definition", charKey: "sophie",
      charMessage: "Neben den funktionalen Teststufen gibt es weitere, spezialisierte Testarten, die für ein Projekt der Größenordnung von NEXUS Corp unverzichtbar sind.",
      definition: {
        term: "Spezialisierte Testarten",
        summary: "Neben den klassischen Teststufen sind bei Large-Enterprise-System-Projekten weitere spezialisierte Tests notwendig: Migrationstests, Security-Tests, Performance-/Lasttests und Cutover-/Smoke-Tests.",
        aspects: [
          { icon: "📦", title: "Migrationstest", text: "Prüft, ob Stamm- und Bewegungsdaten korrekt und vollständig migriert werden: z.B. ob alle Artikel mit den richtigen Preisen übernommen wurden" },
          { icon: "🔒", title: "Security-Test", text: "Prüft, ob Benutzerrollen korrekt und praktikabel sind: sichert Produktivfähigkeit, Compliance und ggf. Nichtangreifbarkeit" },
          { icon: "⚡", title: "Performance-/Lasttest", text: "Testet, ob das System im produktiven Betrieb geforderte Antwortzeiten gewährleisten kann, auch bei hoher gleichzeitiger Nutzerlast" },
          { icon: "🚦", title: "Cutover-/Smoke-Test", text: "Cutover ist die orchestrierte Umstellung (Downtime, Migration, Transport, Fallback); Smoke-Test prüft nach Go-Live grundsätzlich, ob das System 'läuft'" },
        ],
        nexusContext: "Bei der NEXUS-Konsolidierung ist der Migrationstest besonders kritisch: Die Kundendaten aus vier unterschiedlichen Altsystemen müssen korrekt in die neue S/4HANA-Umgebung überführt werden. Ein Fehler hier hätte direkte Auswirkungen auf Carlos' Vertriebsteam und alle Kundenbeziehungen.",
      },
      question: "Warum ist ein Migrationstest bei der NEXUS-Konsolidierung von besonderer Bedeutung, anders als bei einer erstmaligen ES-Einführung ohne Altsystem?",
      answers: [
        { text: "Weil bei der Konsolidierung große Mengen realer Bestandsdaten aus vier unterschiedlichen Altsystemen korrekt übernommen werden müssen. Fehler hier haben direkte, oft schwer rückgängig zu machende Konsequenzen für den laufenden Geschäftsbetrieb.", correct: true, feedback: "Genau. Bei einer Konsolidierung mit Altdaten ist der Migrationstest kritischer als bei einer Neueinführung ohne Bestandsdaten. Falsch migrierte Kunden-, Preis- oder Bestandsdaten wirken sich unmittelbar auf das operative Geschäft aus." },
        { text: "Weil Migrationstests grundsätzlich einfacher durchzuführen sind als andere Testarten, da lediglich geprüft werden muss, ob Datensätze vollständig kopiert wurden.", correct: false, feedback: "Migrationstests sind eher komplexer, nicht einfacher, gerade wenn mehrere heterogene Altsysteme wie bei NEXUS Corp konsolidiert werden." },
        { text: "Weil Migrationstests nur bei Cloud-basierten Systemen relevant sind, da On-Premise-Systeme ihre Daten grundsätzlich unverändert am selben physischen Speicherort behalten und daher nie migriert werden müssen.", correct: false, feedback: "Migrationstests sind unabhängig von Cloud oder On-Premise relevant. Sie betreffen die Datenübernahme, nicht die Bereitstellungsform." },
      ],
    },
    {
      id: "m8_5", type: "matching", charKey: "sophie",
      charMessage: "Testen wir Ihr Verständnis der verschiedenen Testarten. Ordnen Sie jede NEXUS-Situation der passenden Testart zu.",
      instruction: "Klicken Sie zuerst eine Testart, dann die passende Situation.",
      pairs: [
        { situation: "Ein Entwickler prüft, ob im Belegerfassungsbildschirm der 'Speichern'-Button erst funktioniert, wenn alle Pflichtfelder ausgefüllt sind.", term: "Modultest" },
        { situation: "Das Testteam prüft, ob eine angelegte Bestellung automatisch eine Lieferung auslöst und diese korrekt in der Finanzbuchhaltung verbucht wird.", term: "Integrationstest" },
        { situation: "Key User bei NEXUS France testen anhand realer Geschäftsfälle, ob das neue System ihre alltäglichen Arbeitsprozesse tatsächlich unterstützt, und geben ein Sign-off.", term: "User Acceptance Test" },
        { situation: "Das Projektteam prüft, ob 1.000 gleichzeitige Nutzer bei Bestellungen mit mehr als 1.000 Positionen eine Antwortzeit von 5 Sekunden einhalten können.", term: "Performance-/Lasttest" },
        { situation: "Direkt nach dem Go-Live wird geprüft, ob kritische Transaktionen des neuen Systems grundsätzlich funktionieren.", term: "Smoke-Test" },
      ],
    },
    {
      id: "m8_6", type: "reflection", charKey: "sophie",
      message: "Ein häufiges Missverständnis ist, dass mehr Tests automatisch bessere Qualität bedeuten. In Wahrheit geht es um etwas anderes.",
      question: "Was ist laut der Vorlage der eigentliche 'Kern des Testmanagements'?",
      answers: [
        { text: "Möglichst viele automatisierte Tests durchzuführen, unabhängig vom Testziel, da eine hohe Testabdeckung allein bereits als Nachweis für Softwarequalität gilt.", correct: false, feedback: "Die reine Anzahl an Tests ist nicht das Ziel. Testautomatisierung ist ein Werkzeug, kein Selbstzweck." },
        { text: "Zu verstehen, ob das Testergebnis tatsächlich richtig ist: also die Ergebnisse korrekt zu interpretieren, nicht nur Tests mechanisch auszuführen.", correct: true, feedback: "Richtig, das ist die zentrale Aussage aus der Vorlage: 'Der Kern des Testmanagements besteht in dem Verstehen, ob das Ergebnis richtig ist.' Das erfordert fachliches Verständnis, nicht nur technische Testausführung." },
        { text: "Ausschließlich manuelle Tests durchzuführen, da automatisierte Tests unzuverlässig sind.", correct: false, feedback: "Der Testprozess besteht laut Vorlage explizit 'meist aus einer Mischung manueller und automatischer Tests', nicht aus einer Ablehnung der Automatisierung." },
      ],
    },
  ],
  outro: {
    charKey: "sophie",
    message: "Testmanagement ist die Versicherung gegen böse Überraschungen im produktiven Betrieb. Als Nächstes schauen wir uns an, wie getestete Software-Änderungen sicher und nachvollziehbar durch die Systemlandschaft transportiert werden, ein Thema, das gerade bei vier heterogenen NEXUS-Landesgesellschaften besondere Sorgfalt erfordert.",
    xp: 340,
    badge: "🧪 Test-Expertin",
  },
};
