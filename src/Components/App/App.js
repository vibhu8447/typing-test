import React, { useState } from "react";
import "./App.css";
import Navbar from "../Nav bar/Navbar";
import Landing from "../Landing/Landing";
import Footer from "../Footer/Footer";
import ChallengeSection from "../ChallengeSection/ChallengeSection";
const TotalTime = 60;
const url = "http://metaphorpsum.com/paragraphs/1/9";
class App extends React.Component {
  state = {
    selectedParagrpah: "Hello! World",
    timerStarted: false,
    timeRemaining: TotalTime,
    words: 0,
    charcters: 0,
    wpm: 0,
    testInfo: [],
  };
  componentDidMount() {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        this.setState({ selectedParagrpah: data });
      });
    console.log("data is ", data);
    this.setState({ timeRemaining: 30 });
    const selectedParagraphArray = this.state.selectedParagrpah.split("");
    const testInfo = selectedParagraphArray.map((selectedLetter) => {
      return {
        testLetter: selectedLetter,
        status: "notAttempted",
      };
    });
  }
  render() {
    return (
      <div className="App">
        {/* nav bar */}
        <Navbar />

        {/* landing page */}
        <Landing />

        {/* challnege page */}
        <ChallengeSection
          selectedParagrpah={this.state.selectedParagrpah}
          words={this.state.words}
          charcters={this.state.charcters}
          wpm={this.state.wpm}
          timeRemaining={this.state.timeRemaining}
          timerStarted={this.state.timerStarted}
          testInfo={this.state.testInfo}
        ></ChallengeSection>

        {/* footer */}
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
