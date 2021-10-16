import React, { useContext } from "react";
import { QuestionContext } from "../Helpers/Contexts";
import AllQuestion from "../Helpers/data";
import "./style.css";

function EndGame() {
  const { score, setScore, setGameState } = useContext(QuestionContext);
  const retartGame = () => {
    setScore(0);
    setGameState("menu");
  };
  return (
    <div className="endGame">
      <h1>Quiz Finished</h1>
      <h3>
        {score} / {AllQuestion.length}
      </h3>
      <button onClick={retartGame}>Restart Game</button>
    </div>
  );
}

export default EndGame;
