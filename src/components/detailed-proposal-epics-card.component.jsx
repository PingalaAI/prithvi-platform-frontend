import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import DetailedEpicsAccordion from "./detailed-epics-accordion.component";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderRadius: 15,
    boxShadow: "0px 1px 1px 1px rgba(0,0,0,.1)",
    border: "1px solid rgba(0,0,0,0.15)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function DetailedProposalEpicsCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <DetailedEpicsAccordion />
      </CardContent>
    </Card>
  );
}
