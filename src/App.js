import React, { useState, useContext } from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Row } from "antd";
import MainMenu from "./components/MainMenu/MainMenu";
import Question from "./components/Question/Questions";
import EndGame from "./components/EndGame/EndGame";
import { QuestionContext } from "./components/Helpers/Contexts";

import Navbar from "./components/Navbar/Navbar";
import Questions from "./components/Question/Questions";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);
  return (
    <div className="app-container">
      <div className="container">
        <Row justify="center">
          <Navbar />
        </Row>
        <Row justify="center">
          <QuestionContext.Provider value={{ gameState, setGameState, score, setScore }}>
            {gameState === "menu" && <MainMenu />}
            {gameState === "question" && <Question />}
            {gameState === "endGame" && <EndGame />}
          </QuestionContext.Provider>
          {/* <Questions /> */}
        </Row>
      </div>
    </div>
  );
}

export default App;
