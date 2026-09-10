import { ML1 } from "./level1.js";
import { ML2 } from "./level2.js";
import { ML3 } from "./level3.js";
import { ML4 } from "./level4.js";
import { ML5 } from "./level5.js";
import { ML6 } from "./level6.js";
import { ML7 } from "./level7.js";
import { ML8 } from "./level8.js";
import { ML9 } from "./level9.js";

export const LEVEL_DATA_MASTER = { 1: ML1, 2: ML2, 3: ML3, 4: ML4, 5: ML5, 6: ML6, 7: ML7, 8: ML8, 9: ML9 };

export const LEARNING_GOALS_MASTER = {
  1: [
    "NEXUS Corp fünf Jahre später: drei Übernahmen, 47 Systeme, 3 ERP-Instanzen",
    "Die neuen Rollen von Maya, Tom, Carlos, Lena und Priya im Konzernkontext",
    "Sophie Lindqvist als neue Enterprise Architect",
    "Large Enterprise Systems: Architektur- statt Applikationsmanagement",
  ],
  2: [
    "Fallstudie Lidl eLWIS: gescheiterte ES-Einführung trotz 500 Mio. € Budget",
    "Strukturelle Ursachen scheiternder Systemeinführungen",
    "Kritische Erfolgsfaktoren (CSF) nach einer Literaturanalyse",
    "Top Management Support, Change Management, Datenqualität im Zusammenspiel",
  ],
  3: [
    "Enterprise Systems entlang der Wertschöpfungskette (SRM, SCM, ERP, CRM, Shop, BI)",
    "Enterprise System i.w.S. vs. i.e.S.",
    "Originäre vs. derivative Ziele einer ES-Einführung",
    "Technische Kernanforderungen an moderne Enterprise Systems",
  ],
  4: [
    "Wie Komplexität in wachsenden Unternehmen entsteht",
    "Strukturelle vs. dynamische Komplexität",
    "Kennzahlen: Entropiemaß und die Dern-und-Jung-Formel",
    "Path Dependency und ihre Konsequenzen für Architekturentscheidungen",
  ],
  5: [
    "Entwicklung des Architekturbegriffs: von Software- zu Enterprise Architecture",
    "Zentrale EA-Definitionen und ihr gemeinsamer Kern",
    "Sechs Aufgabenfelder des Enterprise Architecture Managements",
    "EAM-Frameworks TOGAF und Zachman sowie ihre Grenzen",
  ],
  6: [
    "Das ES-Template: betriebswirtschaftlicher und technischer Kern",
    "Vier Grundstrategien: Independent Systems bis Global Single System",
    "Template Governance: Plattform, Unicode, Komponenten, Integration",
    "Mehrmandanten- vs. Mehrsystemstrategie",
  ],
  7: [
    "Product Lifecycle Management als Vorbild für Software",
    "Application Lifecycle Management (ALM) und seine Treiber",
    "Der sechsphasige ALM-Zyklus: Requirements bis Optimize",
    "Warum ALM als Kreislauf, nicht als lineares Projekt gedacht werden muss",
  ],
  8: [
    "Verifikation vs. Validierung als Testziele",
    "Shift-Left-Prinzip und der Kostenfaktor später Fehlererkennung",
    "Teststufen: Modultest, Integrationstest, Systemtest, UAT",
    "Spezialisierte Testarten: Migrations-, Security-, Performance-, Cutover-Test",
  ],
  9: [
    "Die DEV-QAS-PRD-Systemlandschaft und ihr Sicherheitsprinzip",
    "Entfaltung der Systemlandschaft bis zum Roll-out in multinationalen Konzernen",
    "Automatisierte Deployments und CI/CD vs. klassischer Softwaretransport",
    "Risikomanagement bei Transporten: Rollback, Monitoring, Quality Gates, Compliance",
  ],
};
