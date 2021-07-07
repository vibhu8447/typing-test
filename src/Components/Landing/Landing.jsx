import React from "react";
import "./Landing.css";
import img from "./../../assets/flash.png";
import Typewriter from "typewriter-effect";

function Landing(props) {
  return (
    <div className="landing-container">
      <div className="landing-left">
        <div className="landing-header">
          <h1> CAN YOU TYPE</h1>
        </div>
      </div>
      <div className="typewriter-continer">
        {
          <Typewriter
            options={{
              strings: ["Fast?", "Quick?", "Correct?"],
              autoStart: true,
              loop: true,
            }}
          />
        }
      </div>
      <div className="landing-right">
        <img className="img" src={img} alt="flas-image"></img>
      </div>
    </div>
  );
}

export default Landing;
