import React from "react";
import { AuthContext } from "../auth/Auth";
import { withRouter } from "react-router-dom";
import firebase, { storage } from "../base";

const NavbarHome = props => {
  const { currentUser } = React.useContext(AuthContext);

  const handleSignOut = () => {
    console.log("hello");
    console.log("currUser: " + currentUser);
    try {
      firebase.auth().signOut();
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    console.log(currentUser);
    console.log("ARE WE HERE");
    if (currentUser) {
      console.log("welcome sire");
      console.log(currentUser.email);
      props.history.push("/home");
    } else {
      console.log("fuck outta here");
      props.history.push("/");
    }
  }, [currentUser]);

  return (
    <div className="Navbar">
      <h1 className="NavbarTitle">Resume Share</h1>
      <div className="NavbarOptions">
        <h3 onClick={handleSignOut}>Log Out</h3>
      </div>
    </div>
  );
};

export default withRouter(NavbarHome);
