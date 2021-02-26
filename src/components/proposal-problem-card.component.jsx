import React, { useRef, useEffect } from "react";
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

export default function ProposalProblemCard({
  description,
  postedBy,
  payload_name,
  setName,
}) {
  const classes = useStyles();
  const inp = useRef("");

  const onChangeHandler = () => {
    setName(inp.current.value);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <input
          ref={inp}
          onChange={onChangeHandler}
          className="hero-text"
          placeholder="proposal name"
          style={{
            color: "#4a4a4a",
            marginBottom: "10px",
            borderRadius: "4px",
            padding: "0.5rem",
            fontWeight: "500",
            fontSize: "1.1rem",
            outline: "none",
          }}
        />
        <div style={{ display: "flex" }}>
          <h4>Posted by -</h4>
          <h4 style={{ color: "#3f51bf" }}>&nbsp; {postedBy}</h4>
        </div>
        <p style={{ fontFamily: "Roboto" }}>{description}</p>
      </CardContent>
    </Card>
  );
}
