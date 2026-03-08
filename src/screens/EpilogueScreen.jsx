import { useState } from "react";
import { C } from "../theme.js";
import { LEVEL_META } from "../data/levelMeta.js";
import { SpeechBubble, NextBtn } from "../components/ui/index.jsx";
import { generatePDF } from "../utils/generatePDF.js";

export function EpilogueScreen({ epilogue, stats, badges, moduleTitle, onBack }) {
  const [idx,        setIdx]        = useState(0);
  const [phase,      setPhase]      = useState("story");
  const [pdfLoading, setPdfLoading] = useState(false);
  const done = idx >= epilogue.scenes.length;

  const handlePDF = async () => {
    setPdfLoading(true);
    try { await generatePDF(stats, badges, moduleTitle); }
    catch (e) { alert("PDF-Fehler: " + e.message); }
    setPdfLoading(false);
  };

  return (
    <div style={{ minHeight: "100vh", background: C.bgWarm }}>
      <div style={{ background: C.bgCard, borderBottom: `1px solid ${C.border}`, padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: C.accent, textTransform: "uppercase", letterSpacing: "2px" }}>Modul-Abschluss</div>
        <div style={{ fontSize: 13, fontWeight: 700, color: C.text }}>{moduleTitle}</div>
        <div style={{ width: 60 }} />
      </div>

      <div style={{ maxWidth: 620, margin: "0 auto", padding: "24px 16px" }}>
        {phase === "story" && (
          <>
            <div style={{ textAlign: "center", marginBottom: 28 }}>
              <div style={{ fontSize: 44, marginBottom: 10 }}>⏩</div>
              <h2 style={{ color: C.text, fontSize: 24, fontWeight: 900, margin: "0 0 6px" }}>{epilogue.title}</h2>
              <p style={{ color: C.textMid, fontSize: 14, margin: 0 }}>{epilogue.subtitle}</p>
            </div>

            {!done && (
              <>
                <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 24 }}>
                  {epilogue.scenes.map((_, i) => (
                    <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: i <= idx ? C.accent : C.bgDeep, transition: "background 0.3s" }} />
                  ))}
                </div>
                <SpeechBubble charKey={epilogue.scenes[idx].charKey} text={epilogue.scenes[idx].text} active />
                <NextBtn onClick={() => setIdx(i => i + 1)} label={idx < epilogue.scenes.length - 1 ? "Weiter →" : "Zum Abschluss →"} />
              </>
            )}

            {done && (
              <>
                <div style={{ padding: "18px 20px", borderRadius: 16, background: C.bgCard, border: `1px solid ${C.border}`, marginBottom: 20 }}>
                  <p style={{ color: C.textMid, fontSize: 14, lineHeight: 1.75, margin: 0, fontStyle: "italic" }}>„{epilogue.closing}"</p>
                </div>
                <div style={{ padding: "16px 20px", borderRadius: 14, background: C.accent + "0d", border: `1px solid ${C.accent}33`, marginBottom: 20 }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: C.accent, textTransform: "uppercase", letterSpacing: "2px", marginBottom: 10 }}>Ihre Leistung</div>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: 10 }}>
                    {[
                      { icon: "⚡", label: "Gesamte XP",       value: `${stats.xp} XP` },
                      { icon: "🎯", label: "Entscheidungen",    value: stats.decisions },
                      { icon: "✅", label: "Korrekte Antworten", value: `${stats.correct} / ${stats.total}` },
                      { icon: "🏅", label: "Abzeichen",         value: badges.size },
                    ].map((s, i) => (
                      <div key={i} style={{ padding: "12px 14px", borderRadius: 12, background: C.bgCard, border: `1px solid ${C.border}`, display: "flex", alignItems: "center", gap: 10 }}>
                        <span style={{ fontSize: 20 }}>{s.icon}</span>
                        <div>
                          <div style={{ color: C.accent, fontSize: 16, fontWeight: 800 }}>{s.value}</div>
                          <div style={{ color: C.textLight, fontSize: 11 }}>{s.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <NextBtn onClick={() => setPhase("certificate")} label="Zertifikat ansehen →" />
              </>
            )}
          </>
        )}

        {phase === "certificate" && (
          <>
            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <div style={{ fontSize: 52, marginBottom: 10 }}>🏆</div>
              <h2 style={{ color: C.text, fontSize: 22, fontWeight: 900, margin: "0 0 6px" }}>Modul abgeschlossen!</h2>
              <p style={{ color: C.textMid, fontSize: 14, margin: 0 }}>Alle Level erfolgreich beendet</p>
            </div>

            <div style={{ padding: "16px 18px", borderRadius: 14, background: C.bgCard, border: `1px solid ${C.border}`, marginBottom: 18 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: C.second, textTransform: "uppercase", letterSpacing: "2px", marginBottom: 12 }}>Ihre Abzeichen</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {Array.from(badges).map(lid => {
                  const meta = LEVEL_META[lid];
                  return meta ? (
                    <div key={lid} style={{ display: "flex", alignItems: "center", gap: 6, padding: "6px 12px", borderRadius: 10, background: C.bgWarm, border: `1px solid ${C.border}` }}>
                      <span style={{ fontSize: 18 }}>{meta.badge.split(" ")[0]}</span>
                      <div>
                        <div style={{ color: C.text, fontSize: 11, fontWeight: 700 }}>{meta.badge.split(" ").slice(1).join(" ")}</div>
                        <div style={{ color: C.textLight, fontSize: 10 }}>Level {lid}</div>
                      </div>
                    </div>
                  ) : null;
                })}
              </div>
            </div>

            <div style={{ padding: "16px 18px", borderRadius: 14, background: C.bgCard, border: `1px solid ${C.border}`, marginBottom: 20 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: C.second, textTransform: "uppercase", letterSpacing: "2px", marginBottom: 10 }}>Beherrschte Konzepte</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {Array.from(badges).flatMap(lid => LEVEL_META[lid]?.concepts || []).map((k, i) => (
                  <span key={i} style={{ fontSize: 11, padding: "4px 10px", borderRadius: 99, background: C.bgWarm, border: `1px solid ${C.border}`, color: C.textMid }}>{k}</span>
                ))}
              </div>
            </div>

            <button onClick={handlePDF} disabled={pdfLoading} style={{ width: "100%", padding: "16px", borderRadius: 14, background: pdfLoading ? C.second : C.accent, color: "#fff", fontSize: 15, fontWeight: 800, border: "none", cursor: pdfLoading ? "wait" : "pointer", fontFamily: "inherit", marginBottom: 12, boxShadow: `0 4px 20px ${C.accent}44` }}>
              {pdfLoading ? "PDF wird erstellt…" : "📄 Zertifikat als PDF herunterladen"}
            </button>
            <button onClick={onBack} style={{ width: "100%", padding: "13px", borderRadius: 13, background: "transparent", color: C.textMid, fontSize: 13, fontWeight: 600, border: `1px solid ${C.border}`, cursor: "pointer", fontFamily: "inherit" }}>
              Zurück zur Modulübersicht
            </button>
          </>
        )}
      </div>
    </div>
  );
}
