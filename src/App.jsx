import { useState } from "react";
import { LEVEL_META } from "./data/levelMeta.js";
import { EPILOGUE_M1 } from "./data/epilogue.js";
import { TitleScreen }    from "./screens/TitleScreen.jsx";
import { ModuleSelect }   from "./screens/ModuleSelect.jsx";
import { LevelMap }       from "./screens/LevelMap.jsx";
import { LevelPlayer }    from "./screens/LevelPlayer.jsx";
import { EpilogueScreen } from "./screens/EpilogueScreen.jsx";

export default function App() {
  const [screen,    setScreen]    = useState("title");
  const [module,    setModule]    = useState(null);
  const [level,     setLevel]     = useState(null);
  const [xp,        setXp]        = useState(0);
  const [completed, setCompleted] = useState(new Set());
  const [stats,     setStats]     = useState({ decisions: 0, correct: 0, total: 0 });

  const completeLevel = (earned, levelStats) => {
    setXp(p => p + earned);
    setCompleted(prev => new Set([...prev, level.id]));
    setStats(prev => ({
      decisions: prev.decisions + levelStats.decisions,
      correct:   prev.correct   + levelStats.correct,
      total:     prev.total     + levelStats.total,
    }));
    setScreen("levelmap");
  };

  const badges        = new Set([...completed].filter(id => LEVEL_META[id]));
  const epilogueStats = { ...stats, xp, levelCount: completed.size };

  return (
    <div style={{ fontFamily: "'Segoe UI',system-ui,sans-serif" }}>
      {screen === "title" && (
        <TitleScreen onStart={() => setScreen("moduleselect")} />
      )}
      {screen === "moduleselect" && (
        <ModuleSelect xp={xp} onSelect={m => { setModule(m); setScreen("levelmap"); }} />
      )}
      {screen === "levelmap" && module && (
        <LevelMap
          module={module} xp={xp} completed={completed}
          onBack={() => setScreen("moduleselect")}
          onSelectLevel={l => { setLevel(l); setScreen("levelplayer"); }}
          onEpilogue={() => setScreen("epilogue")}
        />
      )}
      {screen === "levelplayer" && level && (
        <LevelPlayer levelNr={level.id} xp={xp} onBack={() => setScreen("levelmap")} onComplete={completeLevel} />
      )}
      {screen === "epilogue" && module && (
        <EpilogueScreen
          epilogue={EPILOGUE_M1} stats={epilogueStats} badges={badges}
          moduleTitle={module.title} onBack={() => setScreen("levelmap")}
        />
      )}
    </div>
  );
}
