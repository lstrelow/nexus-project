import { useState } from "react";
import { C } from "../../theme.js";
import { SpeechBubble, AnswerBtn, Feedback, NextBtn } from "../ui/index.jsx";

export function SceneDefinition({ scene, onNext, onStats }) {
  const [phase, setPhase] = useState("def");
  const [chosen, setChosen] = useState(null);
  const d = scene.definition;
  const handleChoice = (i) => { if (chosen === null) { setChosen(i); onStats && onStats(scene.answers[i].correct); } };
  return (
    <div>
      {phase === "def" && (
        <>
          <SpeechBubble charKey={scene.charKey} text={scene.charMessage} active />
          <div style={{ padding:"14px 18px", borderRadius:14, background:C.accent+"12", border:`1.5px solid ${C.accent}33`, marginBottom:16 }}>
            <div style={{ fontSize:10, fontWeight:700, color:C.accent, textTransform:"uppercase", letterSpacing:"1.5px", marginBottom:6 }}>Definition: {d.term}</div>
            <p style={{ color:C.text, fontSize:14, lineHeight:1.75, margin:0, fontWeight:500 }}>{d.summary}</p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))", gap:10, marginBottom:14 }}>
            {d.aspects.map((a,i) => <div key={i} style={{ padding:"12px 14px", borderRadius:12, background:C.bgWarm, border:`1px solid ${C.border}` }}><div style={{ fontSize:20, marginBottom:6 }}>{a.icon}</div><div style={{ color:C.text, fontSize:12, fontWeight:700, marginBottom:3 }}>{a.title}</div><div style={{ color:C.textMid, fontSize:11, lineHeight:1.5 }}>{a.text}</div></div>)}
          </div>
          <div style={{ padding:"12px 16px", borderRadius:12, background:C.second+"12", border:`1px solid ${C.second}33`, marginBottom:16 }}>
            <div style={{ fontSize:10, fontWeight:700, color:C.second, textTransform:"uppercase", letterSpacing:"1px", marginBottom:4 }}>🏢 Bei NEXUS Corp</div>
            <p style={{ color:C.textMid, fontSize:13, lineHeight:1.65, margin:0 }}>{d.nexusContext}</p>
          </div>
          <NextBtn onClick={() => setPhase("question")} label="Zur Frage →" />
        </>
      )}
      {phase === "question" && (
        <>
          <div style={{ padding:"10px 14px", borderRadius:10, background:C.bgWarm, border:`1px solid ${C.border}`, marginBottom:14, display:"inline-block" }}>
            <span style={{ fontSize:10, fontWeight:700, color:C.textLight, textTransform:"uppercase", letterSpacing:"1px" }}>Begriff: </span>
            <span style={{ fontSize:13, fontWeight:700, color:C.accent }}>{d.term}</span>
          </div>
          <p style={{ color:C.textMid, fontSize:14, fontWeight:600, marginBottom:10 }}>{scene.question}</p>
          {scene.answers.map((a,i) => { let st="normal"; if(chosen!==null){st=i===chosen?(a.correct?"correct":"wrong"):"inactive";} return <AnswerBtn key={i} text={a.text} state={st} onClick={()=>handleChoice(i)}/>;})}
          {chosen !== null && <><Feedback text={scene.answers[chosen].feedback} correct={scene.answers[chosen].correct}/><NextBtn onClick={onNext}/></>}
        </>
      )}
    </div>
  );
}
