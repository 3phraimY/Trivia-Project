import QuestionPage from "./components/QuestionPage";
import "./App.css";
import { useState } from "react";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  function incrementCorrectAnswers() {
    setCorrectAnswers(correctAnswers + 1);
  }
  function incrementCurrentQuestionIndex() {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  }

  return (
    <>
      {currentQuestionIndex == 0 && (
        <QuestionPage
          questionString={"What's the name of Boba Fett's ship?"}
          answersArray={["Slave I", "Boss I", "Fett I", "Star Destroyer"]}
          correctAnswerIndex={0}
          incrementCorrectAnswers={incrementCorrectAnswers}
          incrementCurrentQuestionIndex={incrementCurrentQuestionIndex}
        />
      )}
      {currentQuestionIndex == 1 && (
        <QuestionPage
          questionString={"What year did the first Star Wars movie come out?"}
          answersArray={["1987", "1980", "1977", "1997"]}
          correctAnswerIndex={2}
          incrementCorrectAnswers={incrementCorrectAnswers}
          incrementCurrentQuestionIndex={incrementCurrentQuestionIndex}
        />
      )}
      {currentQuestionIndex == 2 && (
        <QuestionPage
          questionString={
            "Who had the highest midi-chlorian count in Star Wars?"
          }
          answersArray={[
            "Yoda",
            "Obi Wan Kenobi",
            "Mace Windu",
            "Anakin Skywalker",
          ]}
          correctAnswerIndex={3}
          incrementCorrectAnswers={incrementCorrectAnswers}
          incrementCurrentQuestionIndex={incrementCurrentQuestionIndex}
        />
      )}
      {currentQuestionIndex == 3 && (
        <QuestionPage
          questionString={"What is Mando's real name from The Mandalorian?"}
          answersArray={[
            "Din Djarin",
            "Njun Ochon",
            "Boba Fett",
            "Kal Skirata",
          ]}
          correctAnswerIndex={0}
          incrementCorrectAnswers={incrementCorrectAnswers}
          incrementCurrentQuestionIndex={incrementCurrentQuestionIndex}
        />
      )}
      {currentQuestionIndex == 4 && (
        <QuestionPage
          questionString={
            "According to Yoda, there are always how many Sith Lords ... no more, no less?"
          }
          answersArray={["3", "1", "2", "4"]}
          correctAnswerIndex={2}
          incrementCorrectAnswers={incrementCorrectAnswers}
          incrementCurrentQuestionIndex={incrementCurrentQuestionIndex}
        />
      )}
      {currentQuestionIndex == 5 && (
        <QuestionPage
          questionString={
            "What is the episode number of the very first Star Wars film?"
          }
          answersArray={["V", "IV", "VI", "I"]}
          correctAnswerIndex={1}
          incrementCorrectAnswers={incrementCorrectAnswers}
          incrementCurrentQuestionIndex={incrementCurrentQuestionIndex}
        />
      )}
      {currentQuestionIndex == 6 && (
        <QuestionPage
          questionString={"Who built C-3PO?"}
          answersArray={[
            "Luke Skywalker",
            "Anakin Skywalker",
            "Padme Amidala",
            "Princess Leia",
          ]}
          correctAnswerIndex={1}
          incrementCorrectAnswers={incrementCorrectAnswers}
          incrementCurrentQuestionIndex={incrementCurrentQuestionIndex}
        />
      )}
      {currentQuestionIndex == 7 && (
        <QuestionPage
          questionString={"What was Finn's stormtrooper number?"}
          answersArray={["FN-2197", "FN-2597", "FN-2182", "FN-2187"]}
          correctAnswerIndex={3}
          incrementCorrectAnswers={incrementCorrectAnswers}
          incrementCurrentQuestionIndex={incrementCurrentQuestionIndex}
        />
      )}
      {currentQuestionIndex == 8 && (
        <QuestionPage
          questionString={"Boba Fett made his first appearance in what?"}
          answersArray={[
            "A New Hope",
            "The 1978 Holiday Special",
            "The Empire Strikes Back",
            "Return of the Jedi",
          ]}
          correctAnswerIndex={1}
          incrementCorrectAnswers={incrementCorrectAnswers}
          incrementCurrentQuestionIndex={incrementCurrentQuestionIndex}
        />
      )}
      {currentQuestionIndex == 9 && (
        <QuestionPage
          questionString={
            "Luke lost which of his hands in a fight with Darth Vader?"
          }
          answersArray={["Right", "Left", "Both", "Neither"]}
          correctAnswerIndex={0}
          incrementCorrectAnswers={incrementCorrectAnswers}
          incrementCurrentQuestionIndex={incrementCurrentQuestionIndex}
        />
      )}
      {currentQuestionIndex == 10 && (
        <QuestionPage
          questionString={"Who killed Jabba?"}
          answersArray={[
            "Luke Skywalker",
            "Han Solo",
            "Princess Leia",
            "Chewbacca",
          ]}
          correctAnswerIndex={2}
          incrementCorrectAnswers={incrementCorrectAnswers}
          incrementCurrentQuestionIndex={incrementCurrentQuestionIndex}
        />
      )}
      {currentQuestionIndex == 11 && (
        <QuestionPage
          questionString={"Who adopted Anakin and Padmé's daughter?"}
          answersArray={[
            "Owen and Beru Lars",
            "Bail Organa",
            "Obi Wan Kenobi",
            "Jar Jar Binks",
          ]}
          correctAnswerIndex={1}
          incrementCorrectAnswers={incrementCorrectAnswers}
          incrementCurrentQuestionIndex={incrementCurrentQuestionIndex}
        />
      )}
      {currentQuestionIndex == 12 && (
        <QuestionPage
          questionString={"On Tatooine, what name did Obi-Wan go by?"}
          answersArray={["Chad", "Jesus", "Bail", "Ben"]}
          correctAnswerIndex={3}
          incrementCorrectAnswers={incrementCorrectAnswers}
          incrementCurrentQuestionIndex={incrementCurrentQuestionIndex}
        />
      )}
      {currentQuestionIndex == 13 && (
        <QuestionPage
          questionString={
            "The Lion King's Mufasa and which Star Wars character were voiced by the same actor (James Earl Jones)?"
          }
          answersArray={[
            "Wat Tambor",
            "Super Battle Droids",
            "Jabba",
            "Darth Vader",
          ]}
          correctAnswerIndex={3}
          incrementCorrectAnswers={incrementCorrectAnswers}
          incrementCurrentQuestionIndex={incrementCurrentQuestionIndex}
        />
      )}
      {currentQuestionIndex == 14 && (
        <QuestionPage
          questionString={"Per Yoda, what is the path to the dark side?"}
          answersArray={["Hate", "Fear", "Suffering", "Weakness"]}
          correctAnswerIndex={1}
          incrementCorrectAnswers={incrementCorrectAnswers}
          incrementCurrentQuestionIndex={incrementCurrentQuestionIndex}
        />
      )}
      {currentQuestionIndex == 15 && (
        <QuestionPage
          questionString={"Who created Star Wars?"}
          answersArray={[
            "Steven Spielberg",
            "Kathleen Kennedy",
            "George Lucas",
            "John Williams",
          ]}
          correctAnswerIndex={2}
          incrementCorrectAnswers={incrementCorrectAnswers}
          incrementCurrentQuestionIndex={incrementCurrentQuestionIndex}
        />
      )}
      {currentQuestionIndex == 16 && (
        <QuestionPage
          questionString={
            "Bo-Katan wanted what from Moff Gideon in The Mandalorian?"
          }
          answersArray={[
            "Mandalore",
            "The Darksaber",
            "Mandalorian Prisoners",
            "His beskar armor",
          ]}
          correctAnswerIndex={1}
          incrementCorrectAnswers={incrementCorrectAnswers}
          incrementCurrentQuestionIndex={incrementCurrentQuestionIndex}
        />
      )}
      {currentQuestionIndex == 17 && (
        <QuestionPage
          questionString={
            "Which film was the final installment of the Skywalker Saga?"
          }
          answersArray={[
            "Return of the Jedi",
            "Revenge of the Sith",
            "The Last Jedi",
            "The Rise of Skywalker",
          ]}
          correctAnswerIndex={3}
          incrementCorrectAnswers={incrementCorrectAnswers}
          incrementCurrentQuestionIndex={incrementCurrentQuestionIndex}
        />
      )}
      {currentQuestionIndex == 18 && (
        <QuestionPage
          questionString={
            "Who composed the soundtrack album to the 1977 film Star Wars?"
          }
          answersArray={[
            "John Williams",
            "George Lucas",
            "Harrison Ford",
            "Hans Zimmer",
          ]}
          correctAnswerIndex={0}
          incrementCorrectAnswers={incrementCorrectAnswers}
          incrementCurrentQuestionIndex={incrementCurrentQuestionIndex}
        />
      )}
      {currentQuestionIndex == 19 && (
        <QuestionPage
          questionString={"What was Galen Erso's nickname for his daughter?"}
          answersArray={["Starkiller", "Stardust", "Skywalker", "Little One"]}
          correctAnswerIndex={1}
          incrementCorrectAnswers={incrementCorrectAnswers}
          incrementCurrentQuestionIndex={incrementCurrentQuestionIndex}
        />
      )}
      {currentQuestionIndex == 20 && (
        <QuestionPage
          questionString={"Leia said never underestimate a what?"}
          answersArray={["Wookie", "Woman", "Droid", "Jedi"]}
          correctAnswerIndex={2}
          incrementCorrectAnswers={incrementCorrectAnswers}
          incrementCurrentQuestionIndex={incrementCurrentQuestionIndex}
        />
      )}
      {currentQuestionIndex == 21 && (
        <>
          <div> You Scored</div>
          <div>{correctAnswers} out of 20 questions</div>
        </>
      )}
    </>
  );
}

export default App;
