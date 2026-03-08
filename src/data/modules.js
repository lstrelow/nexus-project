import { C } from "../theme.js";

export const MODULES = [
  {
    id: "m1",
    title: "Enterprise Systems",
    subtitle: "Bachelor-Modul",
    phase: "🌱 Von der Idee zum Mittelstand",
    color: C.accent,
    description: "NEXUS Corp wächst rasant. Prozesse sind manuell und chaotisch. Helfen Sie dabei, die ersten Unternehmenssysteme einzuführen.",
    levels: [
      { id: 1,  title: "Willkommen bei NEXUS Corp",                    topic: "Unternehmensvorstellung", unlocked: true },
      { id: 2,  title: "Grundbegriffe & Definitionen",                  topic: "Theoriefundament" },
      { id: 3,  title: "Entscheidungen mit BI strukturieren",           topic: "BI & Visualisierung" },
      { id: 4,  title: "Integrationsproblematik",                       topic: "Systemintegration" },
      { id: 5,  title: "Zusammenhang Unternehmens- und IT-Strategie",   topic: "Strategie" },
      { id: 6,  title: "ERP vs. BI – Zwei Welten",                      topic: "Systemunterschiede" },
      { id: 7,  title: "Integration & Schnittstellen",                   topic: "Systemintegration" },
      { id: 8,  title: "Softwareeinführung – Das Projekt",              topic: "Change Management" },
      { id: 9,  title: "Cloud & SaaS – Erste Schritte",                 topic: "Cloud-Grundlagen" },
      { id: 10, title: "Go-Live! Der ERP-Start",                        topic: "Capstone Mission", capstone: true },
    ],
  },
  {
    id: "m3",
    title: "Management großer Enterprise-Systeme",
    subtitle: "Master-Modul",
    phase: "🌐 Globaler Konzern",
    color: C.secondDark,
    description: "NEXUS Corp ist zum Global Player geworden. Legacy-Systeme, Komplexität, KI-Agenten und Governance dominieren die Agenda.",
    locked: true,
    lockReason: "🎓 Erst den Bachelor machen – dann reden wir!",
    levels: [
      { id: 1,  title: "Komplexität großer ES",          topic: "Landschaftsanalyse" },
      { id: 2,  title: "Integrationsmanagement",         topic: "IS-Integration" },
      { id: 3,  title: "Enterprise Architecture Mgmt",   topic: "EA-Frameworks" },
      { id: 4,  title: "Große IT-Projekte managen",      topic: "Programmmanagement" },
      { id: 5,  title: "KI im Unternehmen",              topic: "KI-Strategie" },
      { id: 6,  title: "KI-Agenten & Automatisierung",   topic: "Agentische Systeme" },
      { id: 7,  title: "Cloud-Strategie im Großmaßstab", topic: "Multi-Cloud" },
      { id: 8,  title: "Legacy & Technische Schulden",   topic: "Modernisierung" },
      { id: 9,  title: "IS-Strategie & Wertbeitrag",     topic: "Business Case" },
      { id: 10, title: "Die NEXUS-Transformation",       topic: "Finales Capstone", capstone: true },
    ],
  },
];

// How many levels have playable content — raise this as new levels are added
export const MAX_PLAYABLE_LEVEL = 3;
