import React from "react";

const Redirect = props => {
  React.useEffect(() => {
    console.log("word");
    props.history.push("/home");
  }, []);

  return <div>Signing You In</div>;
};

export default Redirect;
