import React, { useState } from "react";
import { storage } from "../base";
import Button from "@material-ui/core/Button";
import ViewResume from "./ViewResume";
import { AuthContext } from "../auth/Auth";

function UploadResume() {
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const [timeCreated, setTimeCreated] = useState();
  const { currentUser } = React.useContext(AuthContext);

  const handleChange = event => {
    if (event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    const uploadTask = storage.ref(`files/${currentUser.uid}/resume`).put(file);
    uploadTask.on(
      "state_changed",
      snapshot => {},
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("files")
          .child(currentUser.uid)
          .child("resume")
          .getDownloadURL()
          .then(url => setUrl(url));

        storage
          .ref("files")
          .child(currentUser.uid)
          .child("resume")
          .getMetadata()
          .then(metadata => setTimeCreated(metadata.timeCreated));
      }
    );
  };

  const getUserId = () => {
    if (currentUser) {
      return currentUser.uid;
    } else {
      return null;
    }
  };

  return (
    <React.Fragment>
      <h3>Upload Your Resume</h3>

      <div className="UploadResume">
        <h4>Choose File</h4>
        <div className="subContainer">
          <input
            accept="application/pdf"
            id="contained-button-file"
            multiple
            type="file"
            style={{ display: "none" }}
            onChange={handleChange}
          />
          <label htmlFor="contained-button-file">
            <Button
              style={{ margin: "0 1.5vh", boxSizing: "border-box" }}
              variant="outlined"
              color="primary"
              component="span"
            >
              Browse
            </Button>
          </label>
          <Button
            style={{ margin: "0 1.5vh", boxSizing: "border-box" }}
            onClick={handleUpload}
            variant="contained"
          >
            Upload
          </Button>
        </div>
      </div>
      <ViewResume fileUrl={url} uid={getUserId()} timeCreated={timeCreated} />
    </React.Fragment>
  );
}

export default UploadResume;
