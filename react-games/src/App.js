import React from "react";
import SampleComponent from "./components/SampleComponent";
import Game from "./components/Game";

const App = () => {
  const triviaQuestions = [
    {
      id: 1,
      questionText: "What is the airspeed velocity of an unladen swallow?",
      correctAnswer: "What do you mean? An African or European swallow?",
    },
    {
      id: 2,
      questionText:
        "What is the answer to the Ultimate Question of Life, the Universe, and Everything?",
      correctAnswer: "42",
    },
    {
      id: 3,
      questionText: "What is the capital of Assyria?",
      correctAnswer: "I don't know that!",
    },
  ];

  return (
    <>
      <header>Header</header>
      <main>
        <Game gameName="Trivia Game" questions={triviaQuestions} />
      </main>
      <footer>Footer</footer>
    </>
  );
};

export default App;
