import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const ToggleButton = ({ button }) => {
  return (
    <Button variant="contained" type="submit">
      {button}
    </Button>
  );
};

export default ToggleButton;
