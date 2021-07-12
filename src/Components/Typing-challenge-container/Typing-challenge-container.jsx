import React from "react";
import "./Typing-challenge-container.css";
import ChallengeDetailsCards from "../ChallengeDetailsCards/ChallengeDetailsCards";
import ChallengeSection from "./../ChallengeSection/ChallengeSection";
import Typingchallenge from "./../TypingChallenge/TypingChallenge";
function Typingchallengecontainer({
  selectedParagrpah,
  words,
  charcters,
  wpm,
  timeRemaining,
  timerStarted,
  testInfo,
  onInputChange,
}) {
  return (
    <div className="typing-challenge-container">
      {/* Detail Section */}
      <div className="detail-container">
        <ChallengeDetailsCards cardName="Words" cardValue={words} />

        <ChallengeDetailsCards cardName="Characters" cardValue={charcters} />
        <ChallengeDetailsCards cardName="Speed" cardValue={wpm} />
      </div>
      {/*  the real challeneg*/}
      <div className="typewriter-conatiner">
        <Typingchallenge
          timeRemaining={timeRemaining}
          timerStarted={timerStarted}
          selectedParagrpah={selectedParagrpah}
          testInfo={testInfo}
          onInputChange={onInputChange}
        />
      </div>
    </div>
  );
}

export default Typingchallengecontainer;
