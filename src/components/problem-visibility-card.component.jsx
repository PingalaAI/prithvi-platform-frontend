import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import ProblemTags from "./problem-tags.component";
import ProblemLabVisibility from "./problem-lab-visibility.component";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderRadius: 15,
    boxShadow: "0px 1px 1px 1px rgba(0,0,0,.1)",
    border: "1px solid rgba(0,0,0,0.15)",
  },
});

export default function ProblemVisibilityCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <ProblemTags setData={props.setTagData} data={props.tagData} />
          </Grid>
          <Grid item xs={12}>
            <ProblemLabVisibility
              setData={props.setStatusData}
              data={props.statusData}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
