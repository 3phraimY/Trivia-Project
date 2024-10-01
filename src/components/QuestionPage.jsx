import React, { useState } from "react";
import "./QuestionPage.css";
import CorrectAnswerPage from "./CorrectAnswerPage";
import IncorrectAnswerPage from "./IncorrectAnswerPage";

function QuestionPage({
  questionString,
  answersArray,
  correctAnswerIndex,
  incrementCorrectAnswers,
  incrementCurrentQuestionIndex,
}) {
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(false);
  const [isAnswerIncorrect, setIsAnswerIncorrect] = useState(false);
  const [currentValue, setCurrentValue] = useState(0);

  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    console.log(currentValue == correctAnswerIndex);
    if (currentValue == correctAnswerIndex) {
      incrementCorrectAnswers();
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerIncorrect(true);
    }
  }

  return (
    <>
      {!isAnswerCorrect && !isAnswerIncorrect && (
        <>
          <div> Question </div>
          <div> {questionString}</div>
          <form onSubmit={handleSubmit}>
            {answersArray.map((answer, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name="answer"
                  value={index}
                  onChange={() => setCurrentValue(index)}
                />
                {answer}
              </label>
            ))}

            <button type="submit">Submit</button>
          </form>
        </>
      )}
      {isAnswerCorrect && (
        <CorrectAnswerPage
          incrementCurrentQuestionIndex={incrementCurrentQuestionIndex}
        />
      )}
      {isAnswerIncorrect && (
        <IncorrectAnswerPage
          questionString={questionString}
          correctAnswer={answersArray[correctAnswerIndex]}
          incrementCurrentQuestionIndex={incrementCurrentQuestionIndex}
        />
      )}
    </>
  );
}
export default QuestionPage;
