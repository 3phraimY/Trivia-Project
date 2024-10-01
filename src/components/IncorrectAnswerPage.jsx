import React from "react";
import "./IncorrectAnswerPage.css";

function IncorrectAnswerPage({
  questionString,
  correctAnswer,
  incrementCurrentQuestionIndex,
}) {
  function handleSubmit() {
    console.log("Button Pressed");
    incrementCurrentQuestionIndex();
    console.log("Question Added after Incorrect Screen");
  }
  return (
    //current question
    //correct answer to current question
    //pull up the next question
    <>
      <div className="title" style={{ color: "red" }}>
        <h1>Incorrect!</h1>
        <div> {questionString}</div>
      </div>
      <div className="correctAnswer">{correctAnswer} </div>

      <button onClick={() => handleSubmit()}>Next Question</button>
    </>
  );
}
export default IncorrectAnswerPage;
