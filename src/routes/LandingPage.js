import React, { useState } from "react";
import Navbar from "../components/Navbar";
import InputPage from "../components/InputPage";

function LandingPage() {
  const [buttonView, setButtonView] = useState("Log In");
  return (
    <div className="LandingPage">
      <Navbar buttonView={buttonView} setButtonView={setButtonView} />
      <InputPage buttonView={buttonView} />
    </div>
  );
}

export default LandingPage;
