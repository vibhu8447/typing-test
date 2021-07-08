import React from "react";

function TestAgain({ words, charcters, wpm }) {
  return (
    <div className="try-again-conatiner">
      <h1> Test Result</h1>
      <div className="result-container">
        <p>
          <b> characters={charcters}</b>
        </p>
        <p>
          <b> words={words}s</b>
        </p>
        <p>
          <b> wpm={wpm}</b>
        </p>
      </div>
    </div>
  );
}

export default TestAgain;
