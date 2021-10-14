import React, { useContext } from "react";
import { QuestionContext } from "../Helpers/Contexts";
import "./style.css";

function MainMenu() {
  const { gameState, setGameState } = useContext(QuestionContext);
  return (
    <div className="main-menu">
      <button
        onClick={() => {
          setGameState("question");
        }}
      >
        Start the Game
      </button>
    </div>
  );
}

export default MainMenu;
