import React, { useState } from "react";
import AllQuestion from "../../data";

// let result = data.map(a => a.id);
// console.log(result);

const Questions = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  return (
    <div className="questions">
      <h4>{AllQuestion[currentQuestion].question}</h4>
      <img src={AllQuestion[currentQuestion].image} alt={AllQuestion[currentQuestion].id} />
      <div className="options">
        <button>
          {AllQuestion[currentQuestion].optionA}
          <br />
        </button>
        <button>{AllQuestion[currentQuestion].optionB}</button>
        <button>{AllQuestion[currentQuestion].optionC}</button>
      </div>
    </div>
  );
};

export default Questions;
