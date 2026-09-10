export const CHARACTERS = {
  maya: { name:"Maya Chen", role:"CEO & Gründerin", emoji:"👩‍💼", color:"#ed6e45", age:"38", background:"Studierte BWL und Informatik in München. Gründete NEXUS Corp vor 8 Jahren aus einer Garage heraus. Visionärin, die digitale Transformation als strategischen Wettbewerbsvorteil begreift.", personality:"Entschlossen, strategisch denkend, offen für Wandel. Sieht in Informationssystemen den Schlüssel zur Skalierung.", tasks:["Strategische Unternehmensführung","Digitalisierungsstrategie","Stakeholder-Management","Investitionsentscheidungen"], painPoints:"Fehlende Transparenz über Unternehmensprozesse. Entscheidungen basieren auf veralteten Excel-Auswertungen." },
  tom: { name:"Tom Becker", role:"Leiter Betrieb & Logistik", emoji:"👨‍🔧", color:"#8e7a65", age:"51", background:"Gelernter Industriemechaniker, später Betriebswirt. 20 Jahre Erfahrung in Produktion und Lagerhaltung. Kennt jeden Handgriff im Lager persönlich.", personality:"Pragmatisch, skeptisch gegenüber IT, loyal. Vertraut dem, was er anfassen kann. Wurde bei früheren Softwareprojekten enttäuscht.", tasks:["Lagerverwaltung & Disposition","Produktionsplanung","Lieferantenkoordination","Qualitätssicherung"], painPoints:"Manuelle Bestandslisten führen zu Fehlern. Keine Echtzeitinformationen bei Lieferengpässen." },
  carlos: { name:"Carlos Ruiz", role:"Vertriebsleiter", emoji:"👨‍💻", color:"#2563EB", age:"34", background:"Studium der Wirtschaftswissenschaften in Barcelona. Kam über ein Praktikum zu NEXUS Corp. Hat den Vertrieb von 5 auf 40 Mitarbeitende aufgebaut.", personality:"Kommunikativ, ehrgeizig, datengetrieben. Will Kundenbeziehungen professionalisieren und skalieren.", tasks:["Vertriebsstrategie & Teamführung","Key Account Management","Umsatzplanung & Forecasting","Kundenzufriedenheit"], painPoints:"Kundendaten verteilt über Outlook, Excel und Notizbücher. Keine einheitliche Sicht auf Kundenhistorie." },
  lena: { name:"Lena Fischer", role:"Business Intelligence Analystin", emoji:"👩‍🔬", color:"#065F46", age:"29", background:"Master in Data Science an der TU Berlin. Erste Stelle bei NEXUS Corp. Baut die Dateninfrastruktur nahezu alleine auf.", personality:"Analytisch, detailversessen, geduldig. Liebt Daten, leidet unter ihrer schlechten Qualität.", tasks:["Reporting & Dashboards","Datenqualitätssicherung","Ad-hoc-Analysen für GF","BI-Tool-Administration"], painPoints:"Daten aus 7 verschiedenen Quellen manuell zusammenführen. Berichte sind beim Versenden schon veraltet." },
  priya: { name:"Priya Nair", role:"IT-Architektin", emoji:"👩‍💻", color:"#7C3AED", age:"42", background:"Informatikstudium in Bangalore, danach 15 Jahre in IT-Projekten bei Großkonzernen. Kam zu NEXUS Corp, weil sie etwas von Grund auf aufbauen wollte.", personality:"Strukturiert, vorausschauend, manchmal ungeduldig mit kurzfristigem Denken. Denkt in Systemen und Abhängigkeiten.", tasks:["IT-Systemarchitektur","Technologiestrategie","Sicherheit & Compliance","Vendor-Bewertung"], painPoints:"Gewachsene IT-Landschaft ohne Dokumentation. 23 verschiedene Softwaresysteme, kaum Schnittstellen." },
  sophie: { name:"Sophie Lindqvist", role:"Enterprise Architect", emoji:"👩‍🏫", color:"#0891B2", age:"41", background:"Studium der Wirtschaftsinformatik in Stockholm, danach über zehn Jahre als SAP-Beraterin in internationalen Konzernprojekten. Von Priya vor kurzem gezielt rekrutiert, um die konzernweite Zielarchitektur für die S/4HANA-Konsolidierung zu entwerfen.", personality:"Methodisch, diplomatisch, unbeirrbar bei Governance-Fragen. Vermittelt zwischen Priyas strategischer Konzernsicht und den Landesgesellschaften, die an ihren eigenen Lösungen hängen.", tasks:["Enterprise-Architecture-Frameworks (TOGAF, Zachman)","Zielarchitektur & Template-Design","Architektur-Governance","Abstimmung zwischen den Landesgesellschaften"], painPoints:"Vier gewachsene ERP-/Systemlandschaften mit eigenen Stammdaten und ohne gemeinsame Referenzarchitektur. Jede Akquisition hat ihre eigene 'Wahrheit' über Kunden, Artikel und Prozesse mitgebracht." },
};

// Fünf Jahre später haben Maya, Tom, Carlos, Lena und Priya im Master-Modul neue
// Rollen. Überschreibt nur role/age aus CHARACTERS, je nach aktivem Modul, damit
// die Bachelor-Werte oben unverändert bleiben.
export const CHARACTER_OVERRIDES = {
  m3: {
    maya: { role: "CEO", age: "43" },
    tom: { role: "Head of Global Operations", age: "56" },
    carlos: { role: "VP Sales International", age: "39" },
    lena: { role: "Head of Group Analytics", age: "34" },
    priya: { role: "Head of Enterprise Architecture", age: "47" },
  },
};

export function resolveCharacter(charKey, moduleId) {
  return { ...CHARACTERS[charKey], ...CHARACTER_OVERRIDES[moduleId]?.[charKey] };
}
