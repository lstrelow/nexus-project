import { useState } from "react";
import { C } from "../../theme.js";
import { SpeechBubble, AnswerBtn, Feedback, NextBtn } from "../ui/index.jsx";

export function SceneReflection({ scene, onNext, onStats }) {
  const [chosen, setChosen] = useState(null);

  const handleChoice = (i) => {
    if (chosen !== null) return;
    setChosen(i);
    onStats?.(scene.answers[i].correct);
  };

  return (
    <div>
      <div style={{ textAlign: "center", padding: "12px 0 18px" }}>
        <div style={{ fontSize: 38, marginBottom: 8 }}>🔍</div>
        <h3 style={{ color: C.text, fontSize: 17, fontWeight: 800, marginBottom: 6 }}>Abschluss-Reflexion</h3>
      </div>
      <SpeechBubble charKey={scene.charKey} text={scene.message} active />
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
    </div>
  );
}
