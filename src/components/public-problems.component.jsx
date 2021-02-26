import React from "react";
import "./opportunities-card.styles.scss";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import PublicProblemsCard from "./public-problems-card.component";

const useStyles = makeStyles({
  root: {
    minWidth: 250,
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

export default function PublicProblems() {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={3}>
        <Card className={classes.root}>
          <CardContent className="filters-card">
            <p className="hero-text">Filters</p>
            <Button
              variant="contained"
              color="primary"
              style={{ textTransform: "none" }}
            >
              Apply
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={9}>
        <PublicProblemsCard />
      </Grid>
    </Grid>
  );
}
