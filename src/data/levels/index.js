import { L1 } from "./level1.js";
import { L2 } from "./level2.js";
import { L3 } from "./level3.js";

export const LEVEL_DATA = { 1: L1, 2: L2, 3: L3 };

// Learning goals shown on the level intro screen.
// Add an entry here whenever a new level is added.
export const LEARNING_GOALS = {
  1: [
    "Das Unternehmen NEXUS Corp und seine Geschichte",
    "Alle fünf Schlüsselpersonen mit Rollen und Herausforderungen",
    "IS-Grundkonzepte: Datensilo, implizites Wissen, gewachsene IT",
  ],
  2: [
    "Betrieb & Unternehmen nach Nightingale & Srinivasan",
    "Organisation: analytisch-gestaltende Perspektive",
    "Aufbauorganisation (statisch) vs. Ablauforganisation (raumzeitlich)",
    "System als Modell einer Ganzheit – offenes System Unternehmen",
    "Informationssystem (IS) vs. Anwendungssystem (AS)",
  ],
  3: [
    "Entscheidungsprobleme strukturieren: Ziel, Alternativen, Umweltzustände",
    "BI-Grundarchitektur: OLTP, Data Warehouse, OLAP",
    "Den richtigen Diagrammtyp situationsgerecht auswählen",
    "Kennzahlen vs. KPIs – Referenzwerte als Pflicht",
  ],
};
