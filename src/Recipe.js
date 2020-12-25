import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { red } from "@material-ui/core/colors";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    height:"400px",
    margin: 20,
    cursor:"pointer"
  },
  media: {
    paddingTop: "56.25%",
    margin:"0px"
  },
  avatar: {
    backgroundColor: red[500],
  },
  text:{
    marginLeft:14
  }
}));

export default function Recipe({ item,onClick }) {
  const { id, title, image, nutrition } = item;

  const classes = useStyles();


  return (
    <Card onClick={onClick} className={classes.root}>
      <CardMedia className={classes.media} image={image} title={title} />
      <Typography variant="h6" className={classes.text}>
        {title}
      </Typography>
      <CardContent>
        <Typography variant="h7" color="textSecondary" component="p">
          Nutrients
        </Typography>

        <br/>


        <Typography
          variant="p"
          className="inline"
          color="textSecondary"
          component="p"
        >
          {nutrition.nutrients[0].title}
        </Typography>
        :
        <Typography
          variant="p"
          className="inline"
          color="textSecondary"
          component="p"
        >
          {nutrition.nutrients[0].amount + nutrition.nutrients[0].unit}
        </Typography>


        <br/>


        <Typography
          variant="p"
          className="inline"
          color="textSecondary"
          component="p"
        >
          {nutrition.nutrients[1].title}
        </Typography>
        :
        <Typography
          variant="p"
          className="inline"
          color="textSecondary"
          component="p"
        >
          {nutrition.nutrients[1].amount + nutrition.nutrients[1].unit}
        </Typography>

        <br/>

        <Typography
          variant="p"
          className="inline"
          color="textSecondary"
          component="p"
        >
          {nutrition.nutrients[2].title}
        </Typography>
        :
        <Typography
          variant="p"
          className="inline"
          color="textSecondary"
          component="p"
        >
          {nutrition.nutrients[2].amount + nutrition.nutrients[2].unit}
        </Typography>

        <br/>

        <Typography
          variant="p"
          className="inline"
          color="textSecondary"
          component="p"
        >
          {nutrition.nutrients[3].title}
        </Typography>
        :
        <Typography
          variant="p"
          className="inline"
          color="textSecondary"
          component="p"
        >
          {nutrition.nutrients[3].amount + nutrition.nutrients[3].unit}
        </Typography>

      </CardContent>
    </Card>
  );
}