import { useState } from "react";
import { C } from "../../theme.js";
import { SpeechBubble, Feedback, NextBtn } from "../ui/index.jsx";

export function SceneChartPicker({ scene, onNext, onStats }) {
  const [current, setCurrent] = useState(0);
  const [chosen, setChosen] = useState([]);
  const q = scene.questions[current];
  const answered = chosen[current] !== undefined;

  const handlePick = (i) => {
    if (answered) return;
    const updated = [...chosen];
    updated[current] = i;
    setChosen(updated);
    onStats?.(scene.questions[current].options[i].correct);
  };

  const goNext = () => {
    if (current < scene.questions.length - 1) setCurrent(c => c + 1);
    else onNext();
  };

  return (
    <div>
      <SpeechBubble charKey={scene.charKey} text={scene.charMessage} active />
      <p style={{ color: C.textMid, fontSize: 13, marginBottom: 18, fontStyle: "italic" }}>{scene.intro}</p>

      {/* Progress bar */}
      <div style={{ display: "flex", gap: 6, marginBottom: 20 }}>
        {scene.questions.map((_, i) => {
          const bg = i === current
            ? C.accent
            : chosen[i] !== undefined
              ? scene.questions[i].options[chosen[i]].correct ? C.success : C.error
              : C.bgDeep;
          return (
            <div key={i}
              onClick={() => chosen[i] !== undefined && setCurrent(i)}
              style={{ flex: 1, height: 5, borderRadius: 99, background: bg, cursor: chosen[i] !== undefined ? "pointer" : "default", transition: "background 0.3s" }}
            />
          );
        })}
      </div>

      {/* Question */}
      <div style={{ padding: "14px 16px", borderRadius: 14, background: C.accent + "0d", border: `1px solid ${C.accent}33`, marginBottom: 16 }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: C.accent, textTransform: "uppercase", letterSpacing: "1.5px", marginBottom: 6 }}>
          Frage {current + 1} von {scene.questions.length}
        </div>
        <p style={{ color: C.text, fontSize: 14, fontWeight: 600, margin: "0 0 6px" }}>{q.question}</p>
        <p style={{ color: C.textMid, fontSize: 12, margin: 0, fontStyle: "italic" }}>{q.context}</p>
      </div>

      {/* Chart options */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(140px,1fr))", gap: 10, marginBottom: 16 }}>
        {q.options.map((opt, i) => {
          const isChosen = chosen[current] === i;
          const borderColor = answered ? (opt.correct ? C.success : isChosen ? C.error : C.border) : isChosen ? C.accent : C.border;
          const bgColor    = answered ? (opt.correct ? C.successBg : isChosen ? C.errorBg : C.bgCard) : isChosen ? C.accent + "12" : C.bgCard;
          return (
            <button key={i} onClick={() => handlePick(i)} style={{
              padding: "16px 12px", borderRadius: 14,
              border: `2px solid ${borderColor}`, background: bgColor,
              cursor: answered ? "default" : "pointer",
              fontFamily: "inherit", transition: "all 0.2s",
              textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
            }}>
              <span style={{ fontSize: 32 }}>{opt.icon}</span>
              <div style={{ color: C.text, fontSize: 12, fontWeight: 700 }}>{opt.type}</div>
              <div style={{ color: C.textMid, fontSize: 11, lineHeight: 1.4 }}>{opt.description}</div>
              {answered && opt.correct  && <span style={{ color: C.success, fontSize: 11, fontWeight: 700 }}>✓ Beste Wahl</span>}
              {answered && isChosen && !opt.correct && <span style={{ color: C.error, fontSize: 11, fontWeight: 700 }}>✗ Nicht ideal</span>}
            </button>
          );
        })}
      </div>

      {answered && <Feedback text={q.options[chosen[current]].feedback} correct={q.options[chosen[current]].correct} />}
      {answered && (
        <NextBtn
          onClick={goNext}
          label={current < scene.questions.length - 1 ? `Nächste Frage (${current + 2}/${scene.questions.length}) →` : "Weiter →"}
        />
      )}
    </div>
  );
}
