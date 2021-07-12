import React from "react";
import "./TestContiner.css";
import TestAgain from "../TestAgain/TestAgain";
import TypingChallengeContainer from "../Typing-challenge-container/Typing-challenge-container";
function TestContiner({
  selectedParagrpah,
  words,
  charcters,
  wpm,
  timeRemaining,
  timerStarted,
}) {
  return (
    <div className="testing_Conatiner">
      {timeRemaining > 0 ? (
        <div className="typing-challenge-container">
          <TypingChallengeContainer
            timeRemaining={timeRemaining}
            timerStarted={timerStarted}
            words={words}
            charcters={charcters}
            wpm={wpm}
          />
        </div>
      ) : (
        <div className="try-again-cont">
          <TestAgain words={words} charcters={charcters} wpm={wpm} />
        </div>
      )}
    </div>
  );
}

export default TestContiner;
