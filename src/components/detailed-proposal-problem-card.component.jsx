import React from "react";
import "./proposals-card.styles.scss";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderRadius: 15,
    boxShadow: "0px 1px 1px 1px rgba(0,0,0,.1)",
    border: "1px solid rgba(0,0,0,0.15)",
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

export default function DetailedProposalProblemCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <h4
          className="hero-text"
          style={{ color: "#3f51bf", marginBottom: "10px" }}
        >
          Proposal A
        </h4>
        <div style={{ display: "flex" }}>
          <h4>Posted by -</h4>
          <h4 style={{ color: "#3f51bf" }}>&nbsp; Prithvi.ai</h4>
        </div>
        <p style={{ fontFamily: "Roboto" }}>
          lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit
        </p>
      </CardContent>
    </Card>
  );
}
