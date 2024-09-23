import React from "react";
import logo from "../logo.svg";
import { useState } from "react";
import Button from "./Button";
import Question from "./Question";

const SampleComponent = () => {
  const [imgWidth, setImgWidth] = useState(100);

  const someFunction = () => {
    console.log("Button 3 clicked");
  };

  let questionObj = {
    id: 1,
    questionText: "What is the airspeed velocity of an unladen swallow?",
    correctAnswer: "What do you mean? An African or European swallow?",
  };

  return (
    <>
      <img src={logo} width={imgWidth} alt="React Logo" />
      {/* <button onClick={() => setImgWidth(imgWidth + 100)}>Button 1</button> */}
      <button onClick={() => setImgWidth((prevWidth) => prevWidth + 100)}>
        Button 1
      </button>
      <Button
        label="button 2"
        onButtonClick={() => console.log("Button 2 clicked")}
      />
      <Button label="button 3" onButtonClick={someFunction} isPromo={true} />
      <Question
        question={questionObj}
        onAnswerSubmitted={(answerGiven) => console.log(answerGiven)}
      />
    </>
  );
};

export default SampleComponent;
