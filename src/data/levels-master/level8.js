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
      question: "Alle Testfälle für die französische Fakturierung wurden erfolgreich durchlaufen. Im UAT stellen die Key User von NEXUS France jedoch fest, dass Sammelrechnungen für Fachhändler fehlen, die nie als Anforderung dokumentiert wurden. Wie ist dieses Ergebnis einzuordnen?",
      answers: [
        { text: "Als Verifikationsfehler, weil das System die Anforderungen an die französische Fakturierung nicht vollständig umgesetzt hat.", correct: false, feedback: "Die dokumentierten Anforderungen wurden vollständig umgesetzt, die Verifikation war also erfolgreich. Das Problem liegt darin, dass die Anforderungen selbst unvollständig waren." },
        { text: "Als erfolgreich verifiziert, aber nicht validiert: Das System entspricht den dokumentierten Anforderungen, unterstützt den realen Geschäftsprozess aber nicht, weil die Anforderungen unvollständig waren.", correct: true, feedback: "Genau. Verifikation prüft gegen die Anforderungen, Validierung gegen den realen Geschäftsprozess. Fehlen Anforderungen, kann ein System vollständig verifiziert und trotzdem für die Praxis ungeeignet sein." },
        { text: "Als Lücke in der Testabdeckung, weil die Testfälle offensichtlich nicht ausreichten und durch zusätzliche automatisierte Testfälle hätten ergänzt werden müssen.", correct: false, feedback: "Zusätzliche Testfälle gegen dieselben unvollständigen Anforderungen hätten die Lücke nicht aufgedeckt. Erst die Prüfung durch die Fachbereiche anhand realer Geschäftsfälle konnte sie sichtbar machen." },
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
      question: "Unter Zeitdruck schlägt die Projektleitung vor, die Prüfung der Migrationsregeln für Kundendaten zu streichen und Fehler stattdessen im End-to-End-Test zu finden, weil dort ohnehin alle Daten durchlaufen. Wie ist das aus Shift-Left-Sicht zu bewerten?",
      answers: [
        { text: "Als effizient, weil ein End-to-End-Test alle Fehler in einem Durchlauf findet und so den Aufwand mehrerer früher Prüfungen bündelt.", correct: false, feedback: "Der End-to-End-Test kann die Fehler zwar finden, aber zu einem Vielfachen der Kosten. Zudem ist dort schwerer zu erkennen, ob ein Fehler aus der Migration, dem Customizing oder einer Schnittstelle stammt." },
        { text: "Als vertretbar, solange der End-to-End-Test vor dem Go-live stattfindet, da Fehler erst im produktiven Betrieb wirklich teuer werden.", correct: false, feedback: "Die Kosten steigen nicht erst im Produktivbetrieb, sondern bereits mit jeder späteren Phase deutlich an. Schon in der Testphase liegt der Kostenfaktor beim Zehnfachen einer frühen Fehlerfindung." },
        { text: "Als wirtschaftlich nachteilig: Fehler in den Migrationsregeln würden erst spät entdeckt, wären schwerer auf ihre Ursache zurückzuführen und um ein Vielfaches teurer zu beheben als bei früher Prüfung.", correct: true, feedback: "Genau. Shift-Left bedeutet, Qualitätsmaßnahmen dorthin zu verlagern, wo Fehler entstehen. Wird die frühe Prüfung gestrichen, spart das kurzfristig Zeit, verursacht aber später deutlich höhere Kosten." },
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
      question: "Modul- und Integrationstests für den Bestellprozess sind bestanden. Welcher der folgenden Fehler würde voraussichtlich erst im Systemtest oder im UAT auffallen?",
      answers: [
        { text: "Ein Rabatt, der in der Preisfindung einer einzelnen Bestellposition falsch berechnet wird, weil eine Konditionstabelle fehlerhaft gepflegt ist.", correct: false, feedback: "Die Preisfindung einer einzelnen Position ist eine einzelne Tätigkeit. Ein solcher Fehler sollte bereits im Modul- bzw. Funktionstest auffallen." },
        { text: "Eine Bestellung, die korrekt angelegt wird, im nachgelagerten Schritt aber keine Lieferung auslöst, weil die Übergabe zwischen Vertrieb und Logistik fehlschlägt.", correct: false, feedback: "Der Datenfluss zwischen zwei Tätigkeiten ist genau der Gegenstand des Integrationstests. Ein solcher Fehler sollte dort auffallen." },
        { text: "Ein Bestellprozess, der technisch fehlerfrei durchläuft, für die Mitarbeitenden in Frankreich aber so viele zusätzliche Schritte erfordert, dass er im Tagesgeschäft nicht praktikabel ist.", correct: true, feedback: "Genau. Technische Korrektheit prüfen bereits Modul- und Integrationstests. Ob ein Prozess im realen Arbeitsalltag praktikabel ist, zeigt sich erst, wenn die Fachbereiche ihn im Gesamtzusammenhang durchspielen." },
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
      question: "Beim Migrationstest wurden alle 120.000 Kundendatensätze von NEXUS France vollständig und ohne technische Fehler übernommen. Warum ist der Migrationstest damit noch nicht bestanden?",
      answers: [
        { text: "Weil ein Migrationstest erst nach dem Go-live abgeschlossen werden kann, wenn die Daten im produktiven Betrieb tatsächlich verwendet wurden.", correct: false, feedback: "Der Migrationstest muss vor dem Go-live abgeschlossen sein, denn er soll gerade verhindern, dass fehlerhafte Daten in den produktiven Betrieb gelangen." },
        { text: "Weil Vollständigkeit nicht gleich Korrektheit ist: Es muss auch geprüft werden, ob Inhalte wie Konditionen, Zuordnungen und Dubletten fachlich richtig übernommen wurden und zu den Daten der anderen Gesellschaften passen.", correct: true, feedback: "Genau. Ein technisch fehlerfreier Import sagt nichts darüber aus, ob die Daten fachlich stimmen. Bei einer Konsolidierung kommt hinzu, dass Kunden aus verschiedenen Altsystemen zusammengeführt werden und Dubletten entstehen können." },
        { text: "Weil zusätzlich ein Performance-Test nachweisen muss, dass die migrierten Daten auch bei hoher Last schnell genug abgerufen werden können.", correct: false, feedback: "Ein Performance-Test ist eine eigene Testart mit einem anderen Ziel. Er ersetzt nicht die fachliche Prüfung der migrierten Inhalte, die im beschriebenen Fall noch fehlt." },
      ],
    },
    {
      id: "m8_5", type: "matching", charKey: "sophie",
      charMessage: "Testen wir Ihr Verständnis der verschiedenen Testarten. Ordnen Sie jede NEXUS-Situation der passenden Testart zu.",
      instruction: "Klicken Sie zuerst eine Testart, dann die passende Situation.",
      pairs: [
        { situation: "Eine Beraterin prüft, ob beim Anlegen eines Lieferanten die französische Umsatzsteuer-Identifikationsnummer im richtigen Format geprüft wird.", term: "Modultest" },
        { situation: "Es wird geprüft, ob ein im Lager von NEXUS Logistics gebuchter Wareneingang die offene Bestellmenge in S/4HANA korrekt reduziert.", term: "Integrationstest" },
        { situation: "Disponentinnen und Disponenten aus Lyon spielen eine typische Arbeitswoche im neuen System nach und bestätigen anschließend schriftlich, dass sie damit arbeiten können.", term: "User Acceptance Test" },
        { situation: "Es wird simuliert, ob die Monatsabschlussverarbeitung aller vier Gesellschaften gleichzeitig innerhalb des vorgesehenen Nachtfensters abgeschlossen werden kann.", term: "Performance-/Lasttest" },
        { situation: "Am Montagmorgen nach der Umstellung führt ein kleines Team je eine Buchung in Einkauf, Vertrieb und Finanzbuchhaltung durch, bevor alle übrigen Mitarbeitenden freigeschaltet werden.", term: "Smoke-Test" },
      ],
    },
    {
      id: "m8_6", type: "reflection", charKey: "sophie",
      message: "Ein häufiges Missverständnis ist, dass mehr Tests automatisch bessere Qualität bedeuten. In Wahrheit geht es um etwas anderes.",
      question: "Ein automatisierter Testlauf meldet für die Preisfindung 100 % erfolgreiche Tests. Bei einer Stichprobe fällt auf, dass die erwarteten Ergebnisse der Testfälle aus dem alten französischen System übernommen wurden, das selbst fehlerhafte Rabatte berechnet hatte. Welche Lehre ergibt sich daraus?",
      answers: [
        { text: "Die Testabdeckung war zu gering: Mit mehr automatisierten Testfällen wäre der Fehler in den Rabatten früher entdeckt worden.", correct: false, feedback: "Auch zusätzliche Testfälle mit denselben falschen Sollwerten wären bestanden worden. Das Problem liegt nicht in der Menge der Tests." },
        { text: "Automatisierte Tests sind für die Preisfindung ungeeignet, weshalb dieser Bereich künftig ausschließlich manuell getestet werden sollte.", correct: false, feedback: "Testende, die von denselben falschen Sollwerten ausgehen, hätten den Fehler auch manuell nicht erkannt. Testmanagement besteht meist aus einer Mischung manueller und automatisierter Tests." },
        { text: "Ein bestandener Test ist nur so aussagekräftig wie die erwarteten Ergebnisse, gegen die geprüft wird. Der Kern des Testmanagements besteht darin zu verstehen, ob das Ergebnis tatsächlich richtig ist.", correct: true, feedback: "Genau. Tests prüfen gegen Erwartungen, nicht gegen die Wahrheit. Ob diese Erwartungen fachlich stimmen, lässt sich nicht mechanisch sicherstellen, sondern erfordert Verständnis des Geschäftsprozesses." },
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
