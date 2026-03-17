import { useState } from "react";
import { C } from "../../theme.js";
import { SpeechBubble, NextBtn } from "../ui/index.jsx";

export function SceneMatching({ scene, onNext }) {
  const terms = [...new Set(scene.pairs.map(p => p.term))];
  const [selTerm, setSelTerm] = useState(null);
  const [assignments, setAssignments] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const handleSit = (sit) => { if (submitted || !selTerm) return; setAssignments(prev => ({...prev, [sit]: selTerm})); setSelTerm(null); };
  const allDone = scene.pairs.every(p => assignments[p.situation]);
  const score = scene.pairs.filter(p => assignments[p.situation] === p.term).length;
  return (
    <div>
      <SpeechBubble charKey={scene.charKey} text={scene.charMessage} active />
      <p style={{ color:C.textMid, fontSize:13, marginBottom:14 }}>{scene.instruction}</p>
      <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:20 }}>
        {terms.map(t => <button key={t} onClick={() => !submitted && setSelTerm(t === selTerm ? null : t)} style={{ padding:"7px 16px", borderRadius:10, border:`1.5px solid ${selTerm===t?C.accent:C.border}`, background:selTerm===t?C.accent+"15":C.bgCard, color:selTerm===t?C.accent:C.textMid, fontSize:12, fontWeight:700, cursor:"pointer", fontFamily:"inherit", transition:"all 0.15s" }}>{t}</button>)}
      </div>
      <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
        {scene.pairs.map((pair,i) => { const m=assignments[pair.situation]; const correct=submitted?m===pair.term:null; return (
          <div key={i} onClick={() => handleSit(pair.situation)} style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:12, padding:"12px 14px", borderRadius:12, cursor:submitted?"default":"pointer", border:`1.5px solid ${submitted?(correct?C.success:C.error):m?C.second+"55":C.border}`, background:submitted?(correct?C.successBg:C.errorBg):C.bgCard, transition:"all 0.15s" }}>
            <span style={{ color:C.text, fontSize:12, lineHeight:1.5, flex:1 }}>{pair.situation}</span>
            <div style={{ display:"flex", alignItems:"center", gap:6, flexShrink:0 }}>
              <span style={{ fontSize:11, fontWeight:700, padding:"3px 10px", borderRadius:8, background:m?C.second+"18":C.bgWarm, color:m?C.second:C.textLight, minWidth:100, textAlign:"center" }}>{m || "—"}</span>
              {submitted && <span style={{ fontSize:11, whiteSpace:"nowrap" }}>{correct ? "✓" : `✗ ${pair.term}`}</span>}
            </div>
          </div>
        );})}
      </div>
      {allDone && !submitted && <button onClick={() => setSubmitted(true)} style={{ width:"100%", padding:"14px", borderRadius:13, background:C.second, color:"#fff", fontSize:14, fontWeight:700, border:"none", cursor:"pointer", fontFamily:"inherit", marginTop:14 }}>Zuordnungen prüfen</button>}
      {submitted && <><div style={{ marginTop:14, padding:"13px 16px", borderRadius:12, background:score===scene.pairs.length?C.successBg:"#fff8f0", border:`1px solid ${score===scene.pairs.length?C.success:C.second}`, color:score===scene.pairs.length?C.success:C.second, fontSize:13 }}>{score}/{scene.pairs.length} korrekt.{score===scene.pairs.length&&" 🎉 Perfekt!"}</div><div style={{ marginTop:10 }}><NextBtn onClick={onNext}/></div></>}
    </div>
  );
}
