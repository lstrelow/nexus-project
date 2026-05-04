import PropTypes from "prop-types";
import { C } from "../../theme.js";
import { CHARACTERS } from "../../data/characters.js";
export { Avatar } from "./Avatar.jsx";

export function XPBar({ xp }) {
  return (
    <div style={{ display:"flex", alignItems:"center", gap:8 }}>
      <span style={{ color:C.accent, fontSize:12, fontWeight:800 }}>⚡ {xp} XP</span>
      <div style={{ width:72, height:5, background:C.bgDeep, borderRadius:99, overflow:"hidden" }}>
        <div style={{ width:`${Math.min((xp/2500)*100,100)}%`, height:"100%", background:C.accent, borderRadius:99, transition:"width 0.6s" }}/>
      </div>
    </div>
  );
}
XPBar.propTypes = { xp: PropTypes.number };

export function SpeechBubble({ charKey, text, active = true }) {
  const c = CHARACTERS[charKey];
  return (
    <div style={{ display:"flex", gap:14, alignItems:"flex-start", padding:"18px 16px", borderRadius:16, background:C.bgWarm, border:`1px solid ${C.border}`, marginBottom:18 }}>
      <div style={{ width:44, height:44, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:20, background:c.color+"18", border:`2px solid ${active ? c.color : c.color+"44"}`, flexShrink:0 }}>{c.emoji}</div>
      <div style={{ flex:1 }}>
        <div style={{ fontSize:11, fontWeight:700, color:c.color, textTransform:"uppercase", letterSpacing:"1.5px", marginBottom:6 }}>{c.name}</div>
        <p style={{ color:C.text, fontSize:14, lineHeight:1.75, margin:0, fontStyle:"italic" }}>„{text}"</p>
      </div>
    </div>
  );
}
SpeechBubble.propTypes = {
  charKey: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

export function AnswerBtn({ text, state, onClick, letter }) {
  const s = { normal:{bg:C.bgCard,border:C.border,color:C.text,cursor:"pointer",fw:400}, selected:{bg:C.accent+"12",border:C.accent,color:C.accent,cursor:"pointer",fw:600}, correct:{bg:C.successBg,border:C.success,color:C.success,cursor:"default",fw:600}, wrong:{bg:C.errorBg,border:C.error,color:C.error,cursor:"default",fw:600}, inactive:{bg:C.bg,border:C.bgDeep,color:C.textLight,cursor:"default",fw:400} }[state] || {bg:C.bgCard,border:C.border,color:C.text,cursor:"pointer",fw:400};
  return (
    <button onClick={onClick} style={{ display:"flex", alignItems:"flex-start", gap:10, width:"100%", textAlign:"left", padding:"13px 16px", borderRadius:12, border:`1.5px solid ${s.border}`, background:s.bg, color:s.color, fontSize:13, lineHeight:1.55, fontFamily:"inherit", fontWeight:s.fw, transition:"all 0.15s", marginBottom:8, cursor:s.cursor }}>
      {letter && <span style={{ flexShrink:0, width:22, height:22, borderRadius:6, background:s.border+"2a", border:`1px solid ${s.border}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:11, fontWeight:800, lineHeight:1, marginTop:1 }}>{letter}</span>}
      <span>{state==="correct"&&"✓ "}{state==="wrong"&&"✗ "}{text}</span>
    </button>
  );
}
AnswerBtn.propTypes = {
  text: PropTypes.string.isRequired,
  state: PropTypes.oneOf(["normal", "selected", "correct", "wrong", "inactive"]).isRequired,
  onClick: PropTypes.func.isRequired,
  letter: PropTypes.string,
};

export function Feedback({ text, correct }) {
  return <div style={{ padding:"14px 16px", borderRadius:12, background:correct?C.successBg:C.errorBg, border:`1px solid ${correct?C.success:C.error}`, color:correct?C.success:C.error, fontSize:13, lineHeight:1.65, marginTop:4, marginBottom:12 }}><strong>{correct?"✓ Richtig! ":"✗ Nicht ganz. "}</strong>{text}</div>;
}
Feedback.propTypes = {
  text: PropTypes.string.isRequired,
  correct: PropTypes.bool.isRequired,
};

export function NextBtn({ onClick, label = "Weiter →" }) {
  return <button onClick={onClick} style={{ width:"100%", padding:"14px", borderRadius:13, background:C.accent, color:"#fff", fontSize:14, fontWeight:700, border:"none", cursor:"pointer", fontFamily:"inherit", transition:"opacity 0.15s" }} onMouseOver={e=>e.target.style.opacity="0.88"} onFocus={e=>e.target.style.opacity="0.88"} onMouseOut={e=>e.target.style.opacity="1"} onBlur={e=>e.target.style.opacity="1"}>{label}</button>;
}
NextBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string,
};
