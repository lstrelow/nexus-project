import { C } from "../theme.js";

export const MODULES = [
  {
    id: "m1",
    title: "Enterprise Systems",
    subtitle: "Bachelor-Modul",
    phase: "🌱 Mittelstand",
    color: C.accent,
    description: "NEXUS Corp wächst rasant. Prozesse sind manuell und chaotisch. Helfen Sie dabei, die ersten Unternehmenssysteme einzuführen.",
    intro: "NEXUS Corp hat 120 Mitarbeitende, drei Lagerstandorte und massive Wachstumsschmerzen. Manuell geführte Excel-Tabellen versagen. Ihre Mission über 9 Level: Helfen Sie dabei, die ersten Unternehmenssysteme einzuführen. Dabei ist es zentral, dass Sie das Team mitnehmen, da Technologie allein nie ausreicht.",
    levels: [
      { id: 1, title: "Willkommen bei NEXUS Corp", topic: "Unternehmensvorstellung", unlocked: true },
      { id: 2, title: "Grundbegriffe & Definitionen", topic: "Theoriefundament" },
      { id: 3, title: "Komponenten von Enterprise Systems", topic: "ERP, CRM, SCM, SRM, BI" },
      { id: 4, title: "User Interface & User Experience", topic: "Usability & UX" },
      { id: 5, title: "Prozessmanagement & BPMN", topic: "Prozessmodellierung" },
      { id: 6, title: "ES und Unternehmensstrategie", topic: "Strategie & Alignment" },
      { id: 7, title: "Fallunterscheidung bei der ES-Einführung", topic: "Standard vs. Individual" },
      { id: 8, title: "Vorgehensmodell der ES-Einführung", topic: "Projektphasen" },
      { id: 9, title: "Eigenschaften des Cloud Computings", topic: "Cloud-Grundlagen" },
    ],
  },
  {
    id: "m3",
    title: "Management of Large Enterprise Systems",
    subtitle: "Master-Modul",
    phase: "🌐 Globaler Konzern",
    color: C.secondDark,
    description: "Fünf Jahre nach der ersten Transformation ist NEXUS Corp durch drei Übernahmen auf 800 Mitarbeitende, 9 Standorte, 4 Länder und 47 IT-Systeme gewachsen. Ihre Mission: NEXUS Corp bei der Konsolidierung auf SAP S/4HANA als konzernweite Zielarchitektur begleiten.",
    intro: "NEXUS Corp ist durch drei Übernahmen zum Konzern mit 800 Mitarbeitenden, 9 Standorten, 4 Ländern und 47 IT-Systemen gewachsen, darunter 3 parallele ERP-Instanzen. Ihre Mission über 9 Level: NEXUS Corp bei der Konsolidierung auf SAP S/4HANA als konzernweite Zielarchitektur begleiten.",
    levels: [
      { id: 1, title: "NEXUS Corp: Fünf Jahre später", topic: "Firmenvorstellung" },
      { id: 2, title: "Kritische Erfolgsfaktoren einer ES-Einführung", topic: "Erfolgsfaktoren & Fallstudie Lidl eLWIS" },
      { id: 3, title: "Enterprise-Systems-Komponenten", topic: "Komponenten-Interaktion" },
      { id: 4, title: "Komplexität", topic: "Entropiemaß & Path Dependency" },
      { id: 5, title: "Enterprise Architecture Management", topic: "TOGAF, Zachman, 5-Ebenen-Modell" },
      { id: 6, title: "Template-Ansatz", topic: "Grundstrategien & Template Governance" },
      { id: 7, title: "Application Lifecycle Management", topic: "6-Phasen-Zyklus" },
      { id: 8, title: "Testmanagement", topic: "Shift-Left & Teststufen" },
      { id: 9, title: "Softwaretransport", topic: "DEV/QAS/PRD" },
    ],
  },
];

// Raise this as new levels get content
export const MAX_PLAYABLE_LEVEL = 9;
