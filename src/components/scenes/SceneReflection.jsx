import { useState } from "react";
import { C } from "../../theme.js";
import { SpeechBubble, AnswerBtn, Feedback, NextBtn } from "../ui/index.jsx";

export function SceneReflection({ scene, onNext, onAnswer }) {
  const [chosen, setChosen] = useState(null);
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <div style={{ textAlign:"center", padding:"12px 0 18px" }}>
        <div style={{ fontSize:38, marginBottom:8 }}>🔍</div>
        <h3 style={{ color:C.text, fontSize:17, fontWeight:800, marginBottom:6 }}>Abschluss-Reflexion</h3>
      </div>
      <SpeechBubble charKey={scene.charKey} text={scene.message} active />
      <p style={{ color:C.textMid, fontSize:14, fontWeight:600, marginBottom:10 }}>{scene.question}</p>
      {scene.answers.map((a,i) => {
        let st = "normal";
        if (checked) { st = i === chosen ? (a.correct ? "correct" : "wrong") : "inactive"; }
        else if (chosen === i) { st = "selected"; }
        return <AnswerBtn key={i} letter={String.fromCodePoint(65+i)} text={a.text} state={st} onClick={() => { if (!checked) setChosen(i); }} />;
      })}
      {!checked && (
        <button onClick={() => { if (chosen !== null) { setChecked(true); onAnswer?.(scene.answers[chosen].correct); } }} disabled={chosen === null}
          style={{ width:"100%", padding:"14px", borderRadius:13, background:chosen!==null?C.accent:C.bgDeep, color:chosen!==null?"#fff":C.textLight, fontSize:14, fontWeight:700, border:"none", cursor:chosen!==null?"pointer":"default", fontFamily:"inherit", marginTop:4, transition:"all 0.2s" }}>
          Antwort prüfen
        </button>
      )}
      {checked && <><Feedback text={scene.answers[chosen].feedback} correct={scene.answers[chosen].correct}/><NextBtn onClick={onNext}/></>}
    </div>
  );
}
