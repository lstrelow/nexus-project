import { useState } from "react";
import PropTypes from "prop-types";
import { C } from "../../theme.js";
import { CHARACTERS } from "../../data/characters.js";
import { Avatar, SpeechBubble, AnswerBtn, Feedback, NextBtn } from "../ui/index.jsx";

export function ScenePersona({ scene, onNext, onAnswer }) {
  const char = CHARACTERS[scene.charKey];
  const [phase, setPhase] = useState("profile");
  const [chosen, setChosen] = useState(null);
  const [checked, setChecked] = useState(false);

  return (
    <div>
      {phase === "profile" && (
        <>
          <div style={{ padding:20, borderRadius:18, background:C.bgWarm, border:`1.5px solid ${char.color}33`, marginBottom:16 }}>
            <div style={{ display:"flex", gap:16, alignItems:"flex-start", marginBottom:16 }}>
              <Avatar charKey={scene.charKey} size="lg" active />
              <div>
                <div style={{ fontSize:10, fontWeight:700, color:char.color, textTransform:"uppercase", letterSpacing:"2px", marginBottom:4 }}>Persona</div>
                <h3 style={{ color:C.text, fontSize:20, fontWeight:900, margin:"0 0 2px" }}>{char.name}</h3>
                <div style={{ color:C.textMid, fontSize:13 }}>{char.role} · {char.age} Jahre</div>
              </div>
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", gap:10, marginBottom:12 }}>
              <div style={{ padding:"12px 14px", borderRadius:10, background:C.bgCard, border:`1px solid ${C.border}` }}><div style={{ fontSize:10, fontWeight:700, color:C.textLight, textTransform:"uppercase", letterSpacing:"1px", marginBottom:6 }}>Hintergrund</div><p style={{ color:C.textMid, fontSize:12, lineHeight:1.6, margin:0 }}>{char.background}</p></div>
              <div style={{ padding:"12px 14px", borderRadius:10, background:C.bgCard, border:`1px solid ${C.border}` }}><div style={{ fontSize:10, fontWeight:700, color:C.textLight, textTransform:"uppercase", letterSpacing:"1px", marginBottom:6 }}>Persönlichkeit</div><p style={{ color:C.textMid, fontSize:12, lineHeight:1.6, margin:0 }}>{char.personality}</p></div>
            </div>
            <div style={{ padding:"10px 14px", borderRadius:10, background:char.color+"0f", border:`1px solid ${char.color}33`, marginBottom:10 }}>
              <div style={{ fontSize:10, fontWeight:700, color:char.color, textTransform:"uppercase", letterSpacing:"1px", marginBottom:6 }}>Aufgaben</div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>{char.tasks.map(t => <span key={t} style={{ fontSize:11, padding:"3px 9px", borderRadius:99, background:char.color+"18", color:char.color, fontWeight:600 }}>{t}</span>)}</div>
            </div>
            <div style={{ padding:"10px 14px", borderRadius:10, background:"#fff5f0", border:`1px solid ${C.accentLight}` }}>
              <div style={{ fontSize:10, fontWeight:700, color:C.accent, textTransform:"uppercase", letterSpacing:"1px", marginBottom:4 }}>Herausforderungen bei NEXUS</div>
              <p style={{ color:C.textMid, fontSize:12, lineHeight:1.6, margin:0 }}>{char.painPoints}</p>
            </div>
          </div>
          <SpeechBubble charKey={scene.charKey} text={scene.intro} />
          <NextBtn onClick={() => setPhase("question")} label="Zur Frage →" />
        </>
      )}
      {phase === "question" && (
        <>
          {scene.dailyRoutine && <div style={{ padding:"12px 16px", borderRadius:12, background:C.bgWarm, border:`1px solid ${C.border}`, marginBottom:16, fontSize:13, color:C.textMid, lineHeight:1.65 }}><strong style={{ color:C.text, display:"block", marginBottom:4 }}>📋 Alltag von {char.name}:</strong>{scene.dailyRoutine}</div>}
          <p style={{ color:C.textMid, fontSize:14, fontWeight:600, marginBottom:10 }}>{scene.question}</p>
          {scene.answers.map((a,i) => {
            let st = "normal";
            if (checked) {
              if (i === chosen) { st = a.correct ? "correct" : "wrong"; }
              else { st = "inactive"; }
            } else if (chosen === i) { st = "selected"; }
            return <AnswerBtn key={a.text} letter={String.fromCodePoint(65+i)} text={a.text} state={st} onClick={() => { if (!checked) setChosen(i); }} />;
          })}
          {checked
            ? <><Feedback text={scene.answers[chosen].feedback} correct={scene.answers[chosen].correct}/><NextBtn onClick={onNext}/></>
            : <button onClick={() => { if (chosen !== null) { setChecked(true); onAnswer?.(scene.answers[chosen].correct); } }} disabled={chosen === null}
                style={{ width:"100%", padding:"14px", borderRadius:13, background:chosen===null?C.bgDeep:C.accent, color:chosen===null?C.textLight:"#fff", fontSize:14, fontWeight:700, border:"none", cursor:chosen===null?"default":"pointer", fontFamily:"inherit", marginTop:4, transition:"all 0.2s" }}>
                Antwort prüfen
              </button>
          }
        </>
      )}
    </div>
  );
}
ScenePersona.propTypes = {
  scene: PropTypes.object.isRequired,
  onNext: PropTypes.func.isRequired,
  onAnswer: PropTypes.func,
};
