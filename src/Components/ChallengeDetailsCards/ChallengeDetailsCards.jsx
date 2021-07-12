import React from "react";
import "./ChallengeDetailsCards.css";
function ChallengeDetailsCards({ cardName, cardValue }) {
  return (
    <div className="details-card-conatiner">
      <div className="cardName">{cardName}</div>
      <div className="cardValue">{cardValue}</div>
    </div>
  );
}

export default ChallengeDetailsCards;
