import React from "react";
import NavbarHome from "../components/NavbarHome";
import Divider from "@material-ui/core/Divider";
import Resume from "../components/Resume";
import Paper from "@material-ui/core/Paper";
import UploadResume from "../components/UploadResume";
import { AuthContext } from "../auth/Auth";

function Home() {
  const { currentUser } = React.useContext(AuthContext);

  return (
    <Paper className="HomePage">
      <NavbarHome />
      <Divider />

      <h3>Most Recent Resumes</h3>
      <div className="DisplayResumes">
        <Resume />
        <Resume />
        <Resume />
      </div>

      <UploadResume />
    </Paper>
  );
}

export default Home;
