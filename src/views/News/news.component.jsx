import React from "react";
import "./news.styles.scss";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderRadius: 15,
    boxShadow: "0px 1px 1px 1px rgba(0,0,0,.1)",
    border: "1px solid rgba(0,0,0,0.15)",
    margin: 10,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function News() {
  const classes = useStyles();

  return (
    <div>
      <div className="news-title">
        <span>News</span>
      </div>
      <div className="grids">
        <Card className={classes.root}>
          <CardContent>
            <p>News</p>
          </CardContent>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <p>News</p>
          </CardContent>
        </Card>{" "}
        <Card className={classes.root}>
          <CardContent>
            <p>News</p>
          </CardContent>
        </Card>{" "}
        <Card className={classes.root}>
          <CardContent>
            <p>News</p>
          </CardContent>
        </Card>{" "}
        <Card className={classes.root}>
          <CardContent>
            <p>News</p>
          </CardContent>
        </Card>
        <Card className={classes.root}>
          <CardContent>
            <p>News</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
