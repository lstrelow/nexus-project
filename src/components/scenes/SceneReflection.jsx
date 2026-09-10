import PropTypes from "prop-types";
import { C } from "../../theme.js";
import { SpeechBubble } from "../ui/index.jsx";
import { AnswerQuestion } from "./AnswerQuestion.jsx";

export function SceneReflection({ scene, onNext, onAnswer }) {
  return (
    <div>
      <div style={{ textAlign:"center", padding:"12px 0 18px" }}>
        <div style={{ fontSize:38, marginBottom:8 }}>🔍</div>
        <h3 style={{ color:C.text, fontSize:17, fontWeight:800, marginBottom:6 }}>Abschluss-Reflexion</h3>
      </div>
      <SpeechBubble charKey={scene.charKey} text={scene.message} active />
      <AnswerQuestion question={scene.question} answers={scene.answers} onNext={onNext} onAnswer={onAnswer} />
    </div>
  );
}
SceneReflection.propTypes = {
  scene: PropTypes.object.isRequired,
  onNext: PropTypes.func.isRequired,
  onAnswer: PropTypes.func,
};
