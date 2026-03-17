import { useState, useEffect } from "react";
import { C } from "../theme.js";
import { LEVEL_META } from "../data/levelMeta.js";
import { generatePDF } from "../utils/generatePDF.js";

const CHARS = [
  { key:"maya",   emoji:"👩‍💼", name:"Maya",   color:"#ed6e45" },
  { key:"tom",    emoji:"👨‍🔧", name:"Tom",    color:"#8e7a65" },
  { key:"carlos", emoji:"👨‍💻", name:"Carlos", color:"#2563EB" },
  { key:"lena",   emoji:"👩‍🔬", name:"Lena",   color:"#065F46" },
  { key:"priya",  emoji:"👩‍💻", name:"Priya",  color:"#7C3AED" },
];

const MAYA_SPEECH = [
  "Sie haben NEXUS Corp durch seine größte Krise geführt.",
  "Was Sie hier gelernt haben — über Systeme, Prozesse und Menschen — das ist kein Lehrbuchstoff.",
  "Das ist die Realität jedes Unternehmens da draußen.",
  "Auf Sie wartet die Welt.",
  "Viel Erfolg. 🎉",
];

function AnimatedScene({ onDone }) {
  const [step, setStep] = useState(0);
  const [speechIdx, setSpeechIdx] = useState(0);
  const [visible, setVisible] = useState([]);
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    const items = Array.from({ length: 32 }, (_, i) => ({
      id: i, left: Math.random() * 100, delay: Math.random() * 2,
      color: ["#ed6e45","#8e7a65","#2563EB","#065F46","#7C3AED","#F59E0B","#EC4899"][i % 7],
      size: 6 + Math.random() * 8,
    }));
    setConfetti(items);
  }, []);

  useEffect(() => {
    if (step < CHARS.length) {
      const t = setTimeout(() => { setVisible(v => [...v, step]); setStep(s => s+1); }, step === 0 ? 400 : 250);
      return () => clearTimeout(t);
    }
  }, [step]);

  const nextSpeech = () => {
    if (speechIdx < MAYA_SPEECH.length - 1) setSpeechIdx(i => i+1);
    else onDone();
  };

  return (
    <div style={{ minHeight:"100vh", background:"linear-gradient(160deg,#1a0a05 0%,#2d1507 50%,#1a0a05 100%)", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"24px 16px", position:"relative", overflow:"hidden" }}>
      {confetti.map(c => (
        <div key={c.id} style={{ position:"absolute", top:"-20px", left:`${c.left}%`, width:c.size, height:c.size, borderRadius:2, background:c.color, opacity:0.85, animation:`fall ${2.5+c.delay}s linear ${c.delay}s infinite` }} />
      ))}
      <style>{`
        @keyframes fall { 0%{transform:translateY(-20px) rotate(0deg);opacity:0.9} 100%{transform:translateY(110vh) rotate(720deg);opacity:0} }
        @keyframes popIn { 0%{transform:scale(0) translateY(30px);opacity:0} 70%{transform:scale(1.15) translateY(-4px)} 100%{transform:scale(1) translateY(0);opacity:1} }
        @keyframes pulse { 0%,100%{box-shadow:0 0 0 0 rgba(237,110,69,0.4)} 50%{box-shadow:0 0 0 12px rgba(237,110,69,0)} }
      `}</style>
      <div style={{ textAlign:"center", marginBottom:36 }}>
        <div style={{ fontSize:48, marginBottom:8 }}>🎉</div>
        <h1 style={{ color:"#fff", fontSize:28, fontWeight:900, margin:"0 0 6px", textShadow:"0 2px 20px rgba(237,110,69,0.6)" }}>Modul abgeschlossen!</h1>
        <p style={{ color:"rgba(255,255,255,0.6)", fontSize:14, margin:0 }}>Das gesamte NEXUS-Team bedankt sich</p>
      </div>
      <div style={{ display:"flex", gap:16, marginBottom:40, flexWrap:"wrap", justifyContent:"center" }}>
        {CHARS.map((ch, i) => (
          <div key={ch.key} style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:6, opacity:visible.includes(i)?1:0, animation:visible.includes(i)?"popIn 0.5s ease-out forwards":"none" }}>
            <div style={{ width:64, height:64, borderRadius:"50%", background:ch.color+"33", border:`3px solid ${ch.color}`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:30, animation:ch.key==="maya"&&visible.includes(i)?"pulse 2s ease-in-out infinite":"none" }}>{ch.emoji}</div>
            <span style={{ color:"rgba(255,255,255,0.75)", fontSize:11, fontWeight:600 }}>{ch.name}</span>
          </div>
        ))}
      </div>
      {step >= CHARS.length && (
        <div style={{ maxWidth:480, width:"100%" }}>
          <div style={{ background:"rgba(237,110,69,0.12)", border:"1px solid rgba(237,110,69,0.35)", borderRadius:20, padding:"20px 24px", marginBottom:16, backdropFilter:"blur(8px)" }}>
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
              <div style={{ width:32, height:32, borderRadius:"50%", background:"#ed6e45", display:"flex", alignItems:"center", justifyContent:"center", fontSize:16 }}>👩‍💼</div>
              <span style={{ color:"#ed6e45", fontWeight:700, fontSize:13 }}>Maya – CEO, NEXUS Corp</span>
            </div>
            <p style={{ color:"#fff", fontSize:17, lineHeight:1.65, margin:0, fontWeight:500 }}>{MAYA_SPEECH[speechIdx]}</p>
          </div>
          <div style={{ display:"flex", gap:6, justifyContent:"center", marginBottom:16 }}>
            {MAYA_SPEECH.map((_,i) => <div key={i} style={{ width:7, height:7, borderRadius:"50%", background:i<=speechIdx?"#ed6e45":"rgba(255,255,255,0.2)", transition:"background 0.3s" }} />)}
          </div>
          <button onClick={nextSpeech} style={{ width:"100%", padding:"15px", borderRadius:14, background:"#ed6e45", color:"#fff", fontSize:15, fontWeight:800, border:"none", cursor:"pointer", fontFamily:"inherit", boxShadow:"0 4px 24px rgba(237,110,69,0.5)" }}>
            {speechIdx < MAYA_SPEECH.length - 1 ? "Weiter →" : "Zum Abschluss →"}
          </button>
        </div>
      )}
    </div>
  );
}

export function EpilogueScreen({ epilogue, stats, badges, moduleTitle, onBack }) {
  const [phase, setPhase]       = useState("animation");
  const [idx, setIdx]           = useState(0);
  const [pdfLoading, setPdfLoading] = useState(false);
  const done = idx >= epilogue.scenes.length;

  const handlePDF = async () => {
    setPdfLoading(true);
    try { await generatePDF(stats, badges, moduleTitle); }
    catch (e) { alert("PDF-Fehler: " + e.message); }
    setPdfLoading(false);
  };

  if (phase === "animation") return <AnimatedScene onDone={() => setPhase("story")} />;

  return (
    <div style={{ minHeight:"100vh", background:C.bgWarm }}>
      <div style={{ background:C.bgCard, borderBottom:`1px solid ${C.border}`, padding:"12px 16px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <div style={{ fontSize:10, fontWeight:700, color:C.accent, textTransform:"uppercase", letterSpacing:"2px" }}>Modulabschluss</div>
        <div style={{ fontSize:13, fontWeight:700, color:C.text }}>{moduleTitle}</div>
        <div style={{ width:60 }} />
      </div>
      <div style={{ maxWidth:620, margin:"0 auto", padding:"24px 16px" }}>
        {phase === "story" && (
          <>
            <div style={{ textAlign:"center", marginBottom:28 }}>
              <div style={{ fontSize:44, marginBottom:10 }}>⏩</div>
              <h2 style={{ color:C.text, fontSize:24, fontWeight:900, margin:"0 0 6px" }}>{epilogue.title}</h2>
              <p style={{ color:C.textMid, fontSize:14, margin:0 }}>{epilogue.subtitle}</p>
            </div>
            {!done && (
              <>
                <div style={{ display:"flex", justifyContent:"center", gap:8, marginBottom:24 }}>
                  {epilogue.scenes.map((_,i) => <div key={i} style={{ width:8, height:8, borderRadius:"50%", background:i<=idx?C.accent:C.bgDeep, transition:"background 0.3s" }} />)}
                </div>
                <div style={{ background:C.bgCard, border:`1px solid ${C.border}`, borderRadius:18, padding:"18px 20px", marginBottom:20 }}>
                  <p style={{ color:C.text, fontSize:15, lineHeight:1.75, margin:0 }}>{epilogue.scenes[idx].text}</p>
                </div>
                <button onClick={() => setIdx(i => i+1)} style={{ width:"100%", padding:"14px", borderRadius:13, background:C.accent, color:"#fff", fontSize:14, fontWeight:700, border:"none", cursor:"pointer", fontFamily:"inherit" }}>
                  {idx < epilogue.scenes.length - 1 ? "Weiter →" : "Zum Abschluss →"}
                </button>
              </>
            )}
            {done && (
              <>
                <div style={{ padding:"18px 20px", borderRadius:16, background:C.bgCard, border:`1px solid ${C.border}`, marginBottom:20 }}>
                  <p style={{ color:C.textMid, fontSize:14, lineHeight:1.75, margin:0, fontStyle:"italic" }}>„{epilogue.closing}"</p>
                </div>
                <div style={{ padding:"16px 20px", borderRadius:14, background:C.accent+"0d", border:`1px solid ${C.accent}33`, marginBottom:20 }}>
                  <div style={{ fontSize:10, fontWeight:700, color:C.accent, textTransform:"uppercase", letterSpacing:"2px", marginBottom:10 }}>Ihre Leistung</div>
                  <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))", gap:10 }}>
                    {[{icon:"⚡",label:"Gesamte XP",value:`${stats.xp} XP`},{icon:"🎯",label:"Entscheidungen",value:stats.decisions},{icon:"✅",label:"Richtige Antworten",value:`${stats.correct} / ${stats.total}`},{icon:"🏅",label:"Abzeichen",value:badges.size}].map((s,i) => (
                      <div key={i} style={{ padding:"12px 14px", borderRadius:12, background:C.bgCard, border:`1px solid ${C.border}`, display:"flex", alignItems:"center", gap:10 }}>
                        <span style={{ fontSize:20 }}>{s.icon}</span>
                        <div><div style={{ color:C.accent, fontSize:16, fontWeight:800 }}>{s.value}</div><div style={{ color:C.textLight, fontSize:11 }}>{s.label}</div></div>
                      </div>
                    ))}
                  </div>
                </div>
                <button onClick={() => setPhase("certificate")} style={{ width:"100%", padding:"14px", borderRadius:13, background:C.accent, color:"#fff", fontSize:14, fontWeight:700, border:"none", cursor:"pointer", fontFamily:"inherit" }}>Zertifikat ansehen →</button>
              </>
            )}
          </>
        )}
        {phase === "certificate" && (
          <>
            <div style={{ textAlign:"center", marginBottom:24 }}>
              <div style={{ fontSize:52, marginBottom:10 }}>🏆</div>
              <h2 style={{ color:C.text, fontSize:22, fontWeight:900, margin:"0 0 6px" }}>Modul abgeschlossen!</h2>
              <p style={{ color:C.textMid, fontSize:14, margin:0 }}>Alle Level erfolgreich beendet</p>
            </div>
            <div style={{ padding:"16px 18px", borderRadius:14, background:C.bgCard, border:`1px solid ${C.border}`, marginBottom:18 }}>
              <div style={{ fontSize:10, fontWeight:700, color:C.second, textTransform:"uppercase", letterSpacing:"2px", marginBottom:12 }}>Ihre Abzeichen</div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                {Array.from(badges).map(lid => { const meta=LEVEL_META[lid]; return meta?(<div key={lid} style={{ display:"flex", alignItems:"center", gap:6, padding:"6px 12px", borderRadius:10, background:C.bgWarm, border:`1px solid ${C.border}` }}><span style={{ fontSize:18 }}>{meta.badge.split(" ")[0]}</span><div><div style={{ color:C.text, fontSize:11, fontWeight:700 }}>{meta.badge.split(" ").slice(1).join(" ")}</div><div style={{ color:C.textLight, fontSize:10 }}>Level {lid}</div></div></div>):null;})}
              </div>
            </div>
            <button onClick={handlePDF} disabled={pdfLoading} style={{ width:"100%", padding:"16px", borderRadius:14, background:pdfLoading?C.second:C.accent, color:"#fff", fontSize:15, fontWeight:800, border:"none", cursor:pdfLoading?"wait":"pointer", fontFamily:"inherit", marginBottom:12, boxShadow:`0 4px 20px ${C.accent}44` }}>
              {pdfLoading ? "PDF wird erstellt…" : "📄 Zertifikat als PDF herunterladen"}
            </button>
            <button onClick={onBack} style={{ width:"100%", padding:"13px", borderRadius:13, background:"transparent", color:C.textMid, fontSize:13, fontWeight:600, border:`1px solid ${C.border}`, cursor:"pointer", fontFamily:"inherit" }}>
              Zurück zur Modulübersicht
            </button>
          </>
        )}
      </div>
    </div>
  );
}
