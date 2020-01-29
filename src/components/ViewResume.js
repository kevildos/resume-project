import React from "react";
import Button from "@material-ui/core/Button";
import { storage } from "../base";

const ViewResume = props => {
  const [displayImage, setDisplayImage] = React.useState(false);
  const [url, setUrl] = React.useState(null);
  const [timeCreated, setTimeCreated] = React.useState(null);

  const displayResume = () => {
    if (displayImage) {
      if (url) {
        return (
          <React.Fragment>
            <h4 style={{ marginBottom: "10vh" }}>Uploaded on {timeCreated}</h4>
            <div
              style={{
                overflow: "hidden",
                paddingTop: "56.25%",
                position: "relative",
                display: "flex",
                justifyContent: "center",
                height: "93vh"
              }}
            >
              <iframe
                src={url}
                width="80%"
                height="100%"
                style={{
                  border: "0",
                  height: "100%",
                  left: "0",
                  position: "absolute",
                  top: "0",
                  width: "100%",
                  height: "100%",
                  marginTop: "3vh",
                  marginBottom: "3vh"
                }}
              ></iframe>
            </div>
          </React.Fragment>
        );
      } else {
        return <h4 id="no-url">No Resumes</h4>;
      }
    } else {
      return <div id="no-url"></div>;
    }
  };

  const handleClick = () => {
    setDisplayImage(true);
  };

  React.useEffect(() => {
    console.log(props.uid);
    if (props.uid) {
      storage
        .ref("files")
        .child(props.uid)
        .child("resume")
        .getDownloadURL()
        .then(url => setUrl(url));
      displayResume();
      storage
        .ref("files")
        .child(props.uid)
        .child("resume")
        .getMetadata()
        .then(metadata => {
          const year = metadata.timeCreated.slice(0, 4);
          const month = metadata.timeCreated.slice(5, 7);
          const day = metadata.timeCreated.slice(8, 10);
          setTimeCreated(month + " - " + day + " - " + year);
        });
    }
  }, []);
  return (
    <React.Fragment>
      <h4>View Resume</h4>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          className="ViewButton"
          variant="contained"
          onClick={handleClick}
        >
          View
        </Button>
      </div>
      <br />
      {displayResume()}
    </React.Fragment>
  );
};

export default ViewResume;
