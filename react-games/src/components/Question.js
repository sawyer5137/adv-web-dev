import React from "react";
import { useState } from "react";
import Button from "./Button";

const Question = ({ question, onAnswerSubmitted }) => {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAnswerSubmitted(answer);
    setAnswer("");
  };

  return (
    <>
      <p>{question.questionText}</p>
      <form>
        <input
          type="text"
          placeholder="Enter your answer here"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      </form>
      <Button label="Submit Answer" onButtonClick={handleSubmit} />
    </>
  );
};

export default Question;
