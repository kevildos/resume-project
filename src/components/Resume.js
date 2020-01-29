import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActionArea";

function Resume() {
  return (
    <Card variant="elevation">
      <CardActionArea>
        <CardMedia src="#" />
        <CardContent>
          <h3>Resume Goes Here</h3>
        </CardContent>
      </CardActionArea>
      <CardActions></CardActions>
    </Card>
  );
}

export default Resume;
