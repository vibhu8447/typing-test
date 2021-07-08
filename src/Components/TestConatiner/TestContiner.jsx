import React from "react";
import "./TestContiner.css";
import TestAgain from "../TestAgain/TestAgain";
function TestContiner({ words, charcters, wpm }) {
  return (
    <div className="testing_Conatiner">
      <div className="try-again-cont">
        <TestAgain words={words} charcters={charcters} wpm={wpm} />
      </div>
    </div>
  );
}

export default TestContiner;
