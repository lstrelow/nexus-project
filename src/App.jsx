import { useState, useMemo } from "react";
import { MAX_PLAYABLE_LEVEL } from "./data/modules.js";
import { EPILOGUE_SOURCES } from "./data/epilogue.js";
import { markComplete, countComplete } from "./data/progress.js";
import { TitleScreen } from "./screens/TitleScreen.jsx";
import { ModuleSelect } from "./screens/ModuleSelect.jsx";
import { LevelMap } from "./screens/LevelMap.jsx";
import { LevelPlayer } from "./screens/LevelPlayer.jsx";
import { EpilogueScreen } from "./screens/EpilogueScreen.jsx";

const TOTAL_LEVELS = 9;

export default function App() {
  const [screen, setScreen] = useState("title");
  const [module, setModule] = useState(null);
  const [level, setLevel] = useState(null);
  const [completed, setCompleted] = useState(new Set());

  const [streak, setStreak] = useState({
    active: false,
    cohort: null,
    current: 0,
    sessionMax: 0,
  });

  const startSession = (cohort) => {
    setStreak({ active: true, cohort, current: 0, sessionMax: 0 });
  };

  const endSession = () => {
    setStreak({ active: false, cohort: null, current: 0, sessionMax: 0 });
  };

  const onAnswer = (isCorrect) => {
    if (!streak.active) return;
    setStreak(prev => {
      const newCurrent = isCorrect ? prev.current + 1 : 0;
      return { ...prev, current: newCurrent, sessionMax: Math.max(prev.sessionMax, newCurrent) };
    });
  };

  const completeLevel = (levelId, goToEpilogue) => {
    setCompleted(prev => markComplete(prev, module.id, levelId));
    if (goToEpilogue) setScreen("epilogue");
    else setScreen("levelmap");
  };

  const moduleCompletedCount = useMemo(() => module ? countComplete(completed, module.id) : 0, [completed, module]);
  const allDone = moduleCompletedCount >= TOTAL_LEVELS;

  return (
    <div style={{ fontFamily:"'Segoe UI',system-ui,sans-serif" }}>
      {screen === "title" && (
        <TitleScreen
          onStart={() => setScreen("moduleselect")}
          streak={streak}
          onStartSession={startSession}
          onEndSession={endSession}
        />
      )}
      {screen === "moduleselect" && <ModuleSelect onSelect={m => { setModule(m); setScreen("levelmap"); }} onBack={() => setScreen("title")} />}
      {screen === "levelmap" && module && (
        <LevelMap
          module={module} completed={completed} maxPlayable={MAX_PLAYABLE_LEVEL}
          onBack={() => setScreen("moduleselect")}
          onSelectLevel={l => { setLevel(l); setScreen("levelplayer"); }}
          onEpilogue={() => setScreen("epilogue")}
          allDone={allDone}
        />
      )}
      {screen === "levelplayer" && level && (
        <LevelPlayer
          moduleId={module.id}
          levelNr={level.id}
          isLastLevel={level.id === TOTAL_LEVELS}
          onBack={() => setScreen("levelmap")}
          onComplete={completeLevel}
          streakActive={streak.active}
          currentStreak={streak.current}
          onAnswer={onAnswer}
        />
      )}
      {screen === "epilogue" && module && (
        <EpilogueScreen
          epilogue={EPILOGUE_SOURCES[module.id].epilogue}
          animation={EPILOGUE_SOURCES[module.id].animation}
          moduleId={module.id}
          moduleTitle={module.title}
          onBack={() => setScreen("levelmap")}
        />
      )}
    </div>
  );
}
