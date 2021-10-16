import React, { useState, useContext } from "react";
import { QuestionContext } from "../Helpers/Contexts";
import AllQuestion from "../Helpers/data";
import "./style.css";
import ModalContainer from "../Modal/ModalContainer";

// Getter info from data file
// let result = data.map(a => a.id);
// console.log(result);

const Questions = () => {
  const { score, setScore, setGameState } = useContext(QuestionContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const nextQuestion = () => {
    if (AllQuestion[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };
  const finishQuiz = () => {
    if (AllQuestion[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setGameState("endGame");
  };
  const opennerModal = () => {
    <ModalContainer />;
  };
  return (
    <div className="questions">
      <h4>{AllQuestion[currentQuestion].question}</h4>
      <div className="questions-image-container">
        <img className="questions-image" src={AllQuestion[currentQuestion].image} alt={AllQuestion[currentQuestion].id} />
      </div>
      <div className="options">
        <button onClick={() => setOptionChosen("A")}>{AllQuestion[currentQuestion].optionA}</button>
        <button onClick={() => setOptionChosen("B")}>{AllQuestion[currentQuestion].optionB}</button>
        <button onClick={() => setOptionChosen("C")}>{AllQuestion[currentQuestion].optionC}</button>
      </div>
      {currentQuestion === AllQuestion.length - 1 ? (
        <button className="question-finsh-quiz" onClick={finishQuiz}>
          Finish Quiz
        </button>
      ) : (
        <button
          className="question-next-btn"
          onClick={() => {
            nextQuestion();
            opennerModal();
          }}
        >
          {<ModalContainer />}
        </button>
        // <ModalContainer />
      )}
    </div>
  );
};

export default Questions;
