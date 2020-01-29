import React, { useState, useContext, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link, withRouter } from "react-router-dom";
import firebase from "../base";
import ToggleButton from "../components/ToggleButton";
import { AuthContext } from "../auth/Auth";

const InputPage = props => {
  const { currentUser } = useContext(AuthContext);

  const handleSignUp = (email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(e => console.log(e));
  };

  const handleLogIn = (email, password) => {
    console.log("handleLogin");
    console.log("hL email: " + email);
    console.log("hL password: " + password);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(e => console.log(e));
    console.log("DID IT WORK");
  };

  const handleInput = event => {
    event.preventDefault();
    const { em, pass } = event.target.elements;
    console.log("y: " + em.value);
    console.log("y: " + pass.value);

    if (props.buttonView == "Sign Up") {
      handleSignUp(em.value, pass.value);
    } else if (props.buttonView == "Log In") {
      handleLogIn(em.value, pass.value);
    }
  };

  useEffect(() => {
    console.log(currentUser);
    console.log("ARE WE HERE");
    if (currentUser) {
      console.log("welcome sire");
      console.log(currentUser.email);
      props.history.push("/home");
    } else {
      console.log("fuck outta here");
    }
  }, [currentUser]);

  return (
    <div id="login-paper-container">
      <form onSubmit={handleInput}>
        <Paper className="LoginPaper">
          <TextField
            className="InputText"
            label="Username"
            type="email"
            name="em"
            variant="outlined"
          />
          <TextField
            className="InputText"
            label="Password"
            type="password"
            name="pass"
            variant="outlined"
          />
          <ToggleButton button={props.buttonView} />
        </Paper>
      </form>
    </div>
  );
};

export default withRouter(InputPage);
