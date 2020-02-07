import React, { useState } from "react";

// Here we are creating a functional component

const ReactQuizBox = ({ question, options, selected }) => {
  const [answer, setAnswer] = useState(options);
  return (
    // This is just for demonstration and you should never use value that can mutate
    // The id should by incremented through the db being called this is just
    // a static set of questions set as arrays for each specific question
    // We then set the event listener for onClick
    <div className="reactQuizBox">
      <div className="question">{question}</div>
      {answer.map((text, index) => (
        <button
          key={index}
          className="answerBtn"
          onClick={() => {
            setAnswer([text]);
            selected(text);
          }}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default ReactQuizBox;
