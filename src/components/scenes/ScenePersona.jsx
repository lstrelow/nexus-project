import { useState } from "react";
import { C } from "../../theme.js";
import { CHARACTERS } from "../../data/characters.js";
import { Avatar, SpeechBubble, AnswerBtn, Feedback, NextBtn } from "../ui/index.jsx";

export function ScenePersona({ scene, onNext, onStats }) {
  const char = CHARACTERS[scene.charKey];
  const [phase, setPhase] = useState("profile");
  const [chosen, setChosen] = useState(null);

  const handleChoice = (i) => {
    if (chosen !== null) return;
    setChosen(i);
    onStats?.(scene.answers[i].correct);
  };

  return (
    <div>
      {phase === "profile" && (
        <>
          <div style={{ padding: 20, borderRadius: 18, background: C.bgWarm, border: `1.5px solid ${char.color}33`, marginBottom: 16 }}>
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 16 }}>
              <Avatar charKey={scene.charKey} size="lg" active />
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, color: char.color, textTransform: "uppercase", letterSpacing: "2px", marginBottom: 4 }}>Persona</div>
                <h3 style={{ color: C.text, fontSize: 20, fontWeight: 900, margin: "0 0 2px" }}>{char.name}</h3>
                <div style={{ color: C.textMid, fontSize: 13 }}>{char.role} · {char.age} Jahre</div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 10, marginBottom: 12 }}>
              {[
                { label: "Hintergrund",    text: char.background },
                { label: "Persönlichkeit", text: char.personality },
              ].map(({ label, text }) => (
                <div key={label} style={{ padding: "12px 14px", borderRadius: 10, background: C.bgCard, border: `1px solid ${C.border}` }}>
                  <div style={{ fontSize: 10, fontWeight: 700, color: C.textLight, textTransform: "uppercase", letterSpacing: "1px", marginBottom: 6 }}>{label}</div>
                  <p style={{ color: C.textMid, fontSize: 12, lineHeight: 1.6, margin: 0 }}>{text}</p>
                </div>
              ))}
            </div>

            <div style={{ padding: "10px 14px", borderRadius: 10, background: char.color + "0f", border: `1px solid ${char.color}33`, marginBottom: 10 }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: char.color, textTransform: "uppercase", letterSpacing: "1px", marginBottom: 6 }}>Aufgaben</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {char.tasks.map((t, i) => (
                  <span key={i} style={{ fontSize: 11, padding: "3px 9px", borderRadius: 99, background: char.color + "18", color: char.color, fontWeight: 600 }}>{t}</span>
                ))}
              </div>
            </div>

            <div style={{ padding: "10px 14px", borderRadius: 10, background: "#fff5f0", border: `1px solid ${C.accentLight}` }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: C.accent, textTransform: "uppercase", letterSpacing: "1px", marginBottom: 4 }}>Schmerzpunkte bei NEXUS</div>
              <p style={{ color: C.textMid, fontSize: 12, lineHeight: 1.6, margin: 0 }}>{char.painPoints}</p>
            </div>
          </div>

          <SpeechBubble charKey={scene.charKey} text={scene.intro} />
          <NextBtn onClick={() => setPhase("question")} label="Kennenlernen →" />
        </>
      )}

      {phase === "question" && (
        <>
          {scene.dailyRoutine && (
            <div style={{ padding: "12px 16px", borderRadius: 12, background: C.bgWarm, border: `1px solid ${C.border}`, marginBottom: 16, fontSize: 13, color: C.textMid, lineHeight: 1.65 }}>
              <strong style={{ color: C.text, display: "block", marginBottom: 4 }}>📋 Alltag von {char.name}:</strong>
              {scene.dailyRoutine}
            </div>
          )}
          <p style={{ color: C.textMid, fontSize: 14, fontWeight: 600, marginBottom: 10 }}>{scene.question}</p>
          {scene.answers.map((a, i) => {
            const state = chosen === null ? "normal" : i === chosen ? (a.correct ? "correct" : "wrong") : "inactive";
            return <AnswerBtn key={i} text={a.text} state={state} onClick={() => handleChoice(i)} />;
          })}
          {chosen !== null && (
            <>
              <Feedback text={scene.answers[chosen].feedback} correct={scene.answers[chosen].correct} />
              <NextBtn onClick={onNext} />
            </>
          )}
        </>
      )}
    </div>
  );
}
