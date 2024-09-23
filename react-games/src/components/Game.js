import React from "react";
import { useState } from "react";
import Question from "./Question";

const Game = ({ gameName, questions }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleQuestionSubmit = (answerGiven) => {
    if (
      answerGiven.toLowerCase() ===
      questions[currentQuestionIndex].correctAnswer.toLowerCase()
    ) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestionIndex + 1 === questions.length) {
      setGameOver(true);
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <>
      <h1>{gameName}</h1>
      {gameOver ? (
        <h2>Game Over</h2>
      ) : (
        <>
          <h4>Question {currentQuestionIndex + 1}</h4>
          <Question
            question={questions[currentQuestionIndex]}
            onAnswerSubmitted={handleQuestionSubmit}
          />
        </>
      )}
      <h2>Score: {score}</h2>
    </>
  );
};

export default Game;
