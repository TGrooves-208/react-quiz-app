import React from "react";

const Result = ({ score, reviewAgain }) => (
  <div className="score-board">
    You scored {score} / 5 correct answers!
    <button className="playBtn" onClick={reviewAgain}>
      Review Again
    </button>
  </div>
);

export default Result;
