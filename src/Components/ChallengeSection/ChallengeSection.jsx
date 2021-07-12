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
}) {
  console.log(selectedParagrpah);
  return (
    <div className="challenge_section_container">
      <h1 className="challenge-section-header">Take a Speed Test</h1>
      <TestContiner
        timeRemaining={timeRemaining}
        timerStarted={timerStarted}
        words={words}
        charcters={charcters}
        wpm={wpm}
      />
    </div>
  );
}

export default ChallengeSection;
