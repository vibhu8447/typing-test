import React from "react";
import "./App.css";
import Navbar from "../Nav bar/Navbar";
import Landing from "../Landing/Landing";
import Footer from "../Footer/Footer";
import ChallengeSection from "../ChallengeSection/ChallengeSection";
function App() {
  return (
    <div className="App">
      {/* nav bar */}
      <Navbar />
      {/* landing page */}
      <Landing />
      {/* challnege page */}
      <ChallengeSection></ChallengeSection>
      {/* footer */}
      <Footer></Footer>
    </div>
  );
}

export default App;
