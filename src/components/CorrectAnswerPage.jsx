import React from "react";
import "./CorrectAnswerPage.css";

function CorrectAnswerPage({ incrementCurrentQuestionIndex }) {
  function handleSubmit() {
    console.log("did correct thing");
    incrementCurrentQuestionIndex();
  }
  return (
    <>
      <div className="title" style={{ color: "green" }}>
        <h1>Correct!</h1>
      </div>

      <div className="correctAnswer">You did it! </div>

      <button onClick={() => handleSubmit()}>Next Question</button>
    </>
  );
}
export default CorrectAnswerPage;
