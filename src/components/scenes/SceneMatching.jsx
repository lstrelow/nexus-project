import { useState, useMemo } from "react";
import PropTypes from "prop-types";
import { C } from "../../theme.js";
import { SpeechBubble, NextBtn } from "../ui/index.jsx";

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function SceneMatching({ scene, onNext, onAnswer }) {
  const { shuffledTerms, shuffledPairs } = useMemo(() => {
    const terms = [...new Set(scene.pairs.map(p => p.term))];
    let shuffledTerms = shuffleArray(terms);
    let shuffledPairs = shuffleArray([...scene.pairs]);
    for (let attempt = 0; attempt < 50; attempt++) {
      const aligned = shuffledPairs.some((p, i) => i < shuffledTerms.length && p.term === shuffledTerms[i]);
      if (!aligned) break;
      shuffledTerms = shuffleArray(terms);
      shuffledPairs = shuffleArray([...scene.pairs]);
    }
    return { shuffledTerms, shuffledPairs };
  }, [scene.id]);

  const [selTerm, setSelTerm] = useState(null);
  const [assignments, setAssignments] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const score = scene.pairs.filter(p => assignments[p.situation] === p.term).length;

  const handleTermClick = (t) => {
    if (submitted) return;
    setSelTerm(prev => prev === t ? null : t);
  };

  const handleSitClick = (sit) => {
    if (submitted) return;
    if (selTerm) {
      setAssignments(prev => ({ ...prev, [sit]: selTerm }));
      setSelTerm(null);
    } else if (assignments[sit]) {
      setAssignments(prev => { const next = { ...prev }; delete next[sit]; return next; });
    }
  };

  const allDone = scene.pairs.every(p => assignments[p.situation]);

  return (
    <div>
      <SpeechBubble charKey={scene.charKey} text={scene.charMessage} active />
      <p style={{ color:C.textMid, fontSize:13, marginBottom:6 }}>{scene.instruction}</p>
      <p style={{ color:C.textLight, fontSize:11, marginBottom:14 }}>Tipp: Zugeordnete Begriffe können durch erneutes Anklicken der Situation wieder entfernt werden.</p>

      <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:20 }}>
        {shuffledTerms.map(t => {
          const used = Object.values(assignments).includes(t);
          let termBorder, termBg, termColor;
          if (selTerm === t) {
            termBorder = C.accent; termBg = C.accent+"15"; termColor = C.accent;
          } else if (used) {
            termBorder = C.bgDeep; termBg = C.bgDeep; termColor = C.textLight;
          } else {
            termBorder = C.border; termBg = C.bgCard; termColor = C.textMid;
          }
          return (
            <button key={t} onClick={() => handleTermClick(t)} disabled={submitted}
              style={{ padding:"7px 16px", borderRadius:10, border:`1.5px solid ${termBorder}`, background:termBg, color:termColor, fontSize:12, fontWeight:700, cursor:submitted?"default":"pointer", fontFamily:"inherit", transition:"all 0.15s", textDecoration:used?"line-through":"none" }}>
              {t}
            </button>
          );
        })}
      </div>

      <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:16 }}>
        {shuffledPairs.map(pair => {
          const m = assignments[pair.situation];
          const correct = submitted ? m === pair.term : null;
          let pairBorder, pairBg;
          if (submitted) {
            pairBorder = correct ? C.success : C.error;
            pairBg = correct ? C.successBg : C.errorBg;
          } else {
            pairBorder = m ? C.second+"55" : C.border;
            pairBg = m ? C.second+"08" : C.bgCard;
          }
          return (
            <button key={pair.situation} onClick={() => handleSitClick(pair.situation)} disabled={submitted}
              style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:12, padding:"12px 14px", borderRadius:12, cursor:submitted?"default":"pointer", border:`1.5px solid ${pairBorder}`, background:pairBg, transition:"all 0.15s", width:"100%", textAlign:"left", fontFamily:"inherit" }}>
              <span style={{ color:C.text, fontSize:12, lineHeight:1.5, flex:1 }}>{pair.situation}</span>
              <div style={{ display:"flex", alignItems:"center", gap:6, flexShrink:0 }}>
                <span style={{ fontSize:11, fontWeight:700, padding:"3px 10px", borderRadius:8, background:m?C.second+"18":C.bgWarm, color:m?C.second:C.textLight, minWidth:100, textAlign:"center" }}>{m || "—"}</span>
                {submitted && <span style={{ fontSize:11, whiteSpace:"nowrap" }}>{correct ? "✓" : `✗ ${pair.term}`}</span>}
              </div>
            </button>
          );
        })}
      </div>

      {submitted ? (
        <>
          <div style={{ padding:"13px 16px", borderRadius:12, background:score===scene.pairs.length?C.successBg:"#fff8f0", border:`1px solid ${score===scene.pairs.length?C.success:C.second}`, color:score===scene.pairs.length?C.success:C.second, fontSize:13, marginBottom:12 }}>
            {score}/{scene.pairs.length} korrekt.{score===scene.pairs.length&&" 🎉 Perfekt!"}
          </div>
          <NextBtn onClick={onNext} />
        </>
      ) : (
        <button onClick={() => { setSubmitted(true); onAnswer?.(score === scene.pairs.length); }} disabled={!allDone}
          style={{ width:"100%", padding:"14px", borderRadius:13, background:allDone?C.second:C.bgDeep, color:allDone?"#fff":C.textLight, fontSize:14, fontWeight:700, border:"none", cursor:allDone?"pointer":"default", fontFamily:"inherit", marginBottom:8, transition:"all 0.2s" }}>
          {allDone ? "Zuordnungen prüfen" : `Noch ${scene.pairs.length - Object.keys(assignments).length} offen…`}
        </button>
      )}
    </div>
  );
}
SceneMatching.propTypes = {
  scene: PropTypes.object.isRequired,
  onNext: PropTypes.func.isRequired,
  onAnswer: PropTypes.func,
};
