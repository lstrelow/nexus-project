import { useState } from "react";
import { C } from "../theme.js";
import { MODULES } from "../data/modules.js";
import { LEVEL_DATA, LEARNING_GOALS } from "../data/levels/index.js";
import { XPBar, SpeechBubble, Avatar } from "../components/ui/index.jsx";
import { SceneCompany }    from "../components/scenes/SceneCompany.jsx";
import { ScenePersona }    from "../components/scenes/ScenePersona.jsx";
import { SceneReflection } from "../components/scenes/SceneReflection.jsx";
import { SceneDefinition } from "../components/scenes/SceneDefinition.jsx";
import { SceneMatching }   from "../components/scenes/SceneMatching.jsx";

export function LevelPlayer({ levelNr, onBack, onComplete, xp }) {
  const data  = LEVEL_DATA[levelNr];
  const [phase, setPhase]   = useState("intro");
  const [idx,   setIdx]     = useState(0);
  const [decisions, setDecisions] = useState(0);
  const [correct,   setCorrect]   = useState(0);
  const scene = data.scenes[idx];

  const handleStats = (isCorrect) => { setDecisions(d => d+1); if(isCorrect) setCorrect(c => c+1); };
  const next = () => idx < data.scenes.length - 1 ? setIdx(i => i+1) : setPhase("complete");

  const levelTitle = MODULES[0].levels.find(l => l.id === levelNr)?.title || `Level ${levelNr}`;

  return (
    <div style={{ minHeight:"100vh", background:C.bg }}>
      <div style={{ background:C.bgCard, borderBottom:`1px solid ${C.border}`, padding:"12px 16px", display:"flex", justifyContent:"space-between", alignItems:"center", position:"sticky", top:0, zIndex:10, boxShadow:"0 1px 8px rgba(0,0,0,0.05)" }}>
        <button onClick={onBack} style={{ color:C.textLight, fontSize:13, background:"none", border:"none", cursor:"pointer", fontFamily:"inherit" }}>← Zurück</button>
        <div style={{ textAlign:"center" }}>
          <div style={{ color:C.textLight, fontSize:10, textTransform:"uppercase", letterSpacing:"2px" }}>Level {levelNr}</div>
          <div style={{ color:C.text, fontSize:13, fontWeight:700 }}>{levelTitle}</div>
        </div>
        <XPBar xp={xp} />
      </div>

      <div style={{ maxWidth:640, margin:"0 auto", padding:"20px 16px" }}>
        {phase === "scene" && (
          <div style={{ display:"flex", gap:4, marginBottom:22 }}>
            {data.scenes.map((_,i) => <div key={i} style={{ flex:1, height:4, borderRadius:99, background:i<=idx?C.accent:C.bgDeep, transition:"background 0.3s" }}/>)}
          </div>
        )}

        {phase === "intro" && (
          <div>
            <SpeechBubble charKey={data.intro.charKey} text={data.intro.message} active />
            <div style={{ padding:"14px 18px", borderRadius:14, background:C.bgWarm, border:`1px solid ${C.border}`, marginBottom:20 }}>
              <p style={{ color:C.textLight, fontSize:10, textTransform:"uppercase", letterSpacing:"2px", fontWeight:700, margin:"0 0 8px" }}>In diesem Level lernen Sie...</p>
              {(LEARNING_GOALS[levelNr]||[]).map((t,i) => <p key={i} style={{ color:C.textMid, fontSize:13, margin:"4px 0" }}>• {t}</p>)}
            </div>
            <button onClick={() => setPhase("scene")} style={{ width:"100%", padding:"16px", borderRadius:14, background:C.accent, color:"#fff", fontSize:16, fontWeight:800, border:"none", cursor:"pointer", fontFamily:"inherit", boxShadow:`0 4px 20px ${C.accent}44` }}>Level starten →</button>
          </div>
        )}

        {phase === "scene" && scene && (
          <>
            {scene.type === "company"    && <SceneCompany    key={scene.id} scene={scene} onNext={next}/>}
            {scene.type === "persona"    && <ScenePersona    key={scene.id} scene={scene} onNext={next} onStats={handleStats}/>}
            {scene.type === "reflection" && <SceneReflection key={scene.id} scene={scene} onNext={next} onStats={handleStats}/>}
            {scene.type === "definition" && <SceneDefinition key={scene.id} scene={scene} onNext={next} onStats={handleStats}/>}
            {scene.type === "matching"   && <SceneMatching   key={scene.id} scene={scene} onNext={next}/>}
          </>
        )}

        {phase === "complete" && (
          <div style={{ textAlign:"center", padding:"32px 0" }}>
            <div style={{ fontSize:56, marginBottom:12 }}>🎉</div>
            <h2 style={{ color:C.text, fontSize:26, fontWeight:900, marginBottom:20 }}>Level abgeschlossen!</h2>
            <div style={{ display:"inline-block", padding:"16px 32px", borderRadius:16, background:C.accent+"15", border:`1.5px solid ${C.accent}44`, marginBottom:16 }}>
              <div style={{ color:C.accent, fontSize:26, fontWeight:900 }}>+{data.outro.xp} XP</div>
              <div style={{ color:C.textLight, fontSize:12 }}>Erfahrung verdient</div>
            </div>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:12, padding:"12px 20px", borderRadius:14, background:C.bgWarm, border:`1px solid ${C.border}`, margin:"0 auto 16px", maxWidth:300 }}>
              <span style={{ fontSize:26 }}>{data.outro.badge.split(" ")[0]}</span>
              <div style={{ textAlign:"left" }}>
                <div style={{ color:C.text, fontSize:13, fontWeight:700 }}>{data.outro.badge.split(" ").slice(1).join(" ")}</div>
                <div style={{ color:C.textLight, fontSize:11 }}>Abzeichen erhalten</div>
              </div>
            </div>
            <div style={{ padding:"14px 18px", borderRadius:14, background:C.bgWarm, border:`1px solid ${C.border}`, display:"flex", gap:12, alignItems:"flex-start", maxWidth:420, margin:"0 auto 24px", textAlign:"left", width:"100%" }}>
              <Avatar charKey={data.outro.charKey} size="sm" />
              <p style={{ color:C.textMid, fontSize:13, fontStyle:"italic", margin:0 }}>„{data.outro.message}"</p>
            </div>
            <button onClick={() => onComplete(data.outro.xp, { decisions, correct, total: decisions })} style={{ padding:"14px 36px", borderRadius:14, background:C.accent, color:"#fff", fontSize:15, fontWeight:800, border:"none", cursor:"pointer", fontFamily:"inherit", boxShadow:`0 4px 20px ${C.accent}44` }}>
              Weiter →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
