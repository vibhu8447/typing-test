import React from "react";
import "./ChallengeSection.css";
import TestContiner from "../TestConatiner/TestContiner";
function ChallengeSection({
  selectedParagrpah,
  words,
  charcters,
  wpm,
  timeRemaining,
  timerStarted,
  testInfo,
  onInputChange,
  startAgain,
}) {
  return (
    <div className="challenge_section_container">
      <h1 className="challenge-section-header">Take a Speed Test</h1>
      <TestContiner
        testInfo={testInfo}
        timeRemaining={timeRemaining}
        timerStarted={timerStarted}
        words={words}
        onInputChange={onInputChange}
        charcters={charcters}
        selectedParagrpah={selectedParagrpah}
        wpm={wpm}
        startAgain={startAgain}
      />
    </div>
  );
}

export default ChallengeSection;
