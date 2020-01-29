import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ buttonView, setButtonView }) => {
  const [oppButtonView, setOppButtonView] = useState("Sign Up");

  const toggleView = () => {
    if (buttonView == "Log In") {
      setButtonView("Sign Up");
      setOppButtonView("Log In");
    }
    if (buttonView == "Sign Up") {
      setButtonView("Log In");
      setOppButtonView("Sign Up");
    }
  };

  return (
    <div className="Navbar">
      <h1 className="NavbarTitle">Resume Share</h1>
      <div className="NavbarOptions">
        <h3 onClick={toggleView}>{oppButtonView}</h3>
        <h3>
          <Link to="/">About</Link>
        </h3>
      </div>
    </div>
  );
};

export default Navbar;
