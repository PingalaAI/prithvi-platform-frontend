import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderRadius: 15,
    boxShadow: "0px 1px 1px 1px rgba(0,0,0,.1)",
    border: "1px solid rgba(0,0,0,0.15)",
  },
  text1: {
    minWidth: "100%",
  },
});

export default function ProblemDetailsCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <form noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                label="Problem Name"
                variant="outlined"
                className={classes.text1}
                onChange={props.setData("title")}
              />
            </form>
          </Grid>
          <Grid item xs={6}>
            <form noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                label="Posted by"
                variant="outlined"
                className={classes.text1}
                onChange={props.setData("username")}
              />
            </form>
          </Grid>
          <Grid item xs={12}>
            <form noValidate autoComplete="off">
              <TextField
                id="outlined-basic"
                label="Problem Description"
                variant="outlined"
                className={classes.text1}
                onChange={props.setData("description")}
              />
            </form>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
