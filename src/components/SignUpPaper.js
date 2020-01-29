import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link, withRouter } from "react-router-dom";
import firebase from "../base";

const SignUpPaper = props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    /*firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(e => console.log(e));*/
    props.history.push("/home");
  };

  return (
    <div id="login-paper-container">
      <Paper className="LoginPaper">
        <TextField className="InputText" label="Username" variant="outlined" />
        <TextField className="InputText" label="Password" variant="outlined" />
        <Button variant="contained">
          <Link to="/home">Login</Link>
        </Button>
        <Button onClick={handleSignUp} variant="outlined">
          Ay
        </Button>
      </Paper>
    </div>
  );
};

export default withRouter(SignUpPaper);
