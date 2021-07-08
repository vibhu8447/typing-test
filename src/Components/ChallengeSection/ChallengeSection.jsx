import React from "react";
import "./ChallengeSection.css";
import TestContiner from "../TestConatiner/TestContiner";
function ChallengeSection({}) {
  return (
    <div className="challenge_section_container">
      <h1 className="challenge-section-header">Take a Speed Test</h1>
      <TestContiner words={4} charcters={14} wpm={20} />
    </div>
  );
}

export default ChallengeSection;
