import React from "react";
import "./TestContiner.css";
import TestAgain from "../TestAgain/TestAgain";
import TypingChallengeContainer from "../Typing-challenge-container/Typing-challenge-container";
function TestContiner({
  selectedParagraph,
  testInfo,
  onInputChange,
  words,
  charcters,
  wpm,
  timeRemaining,
  timerStarted,
  startAgain,
}) {
  return (
    <div className="testing_Conatiner">
      {timeRemaining > 0 ? (
        <div className="typing-challenge-container">
          <TypingChallengeContainer
            onInputChange={onInputChange}
            testInfo={testInfo}
            timeRemaining={timeRemaining}
            timerStarted={timerStarted}
            words={words}
            charcters={charcters}
            wpm={wpm}
            selectedParagrpah={selectedParagraph}
            startAgain={startAgain}
          />
        </div>
      ) : (
        <div className="try-again-cont">
          <TestAgain
            words={words}
            charcters={charcters}
            startAgain={startAgain}
            wpm={wpm}
          />
        </div>
      )}
    </div>
  );
}

export default TestContiner;
