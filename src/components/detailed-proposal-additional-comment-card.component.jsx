import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import GetAppIcon from "@material-ui/icons/GetApp";
import { Button, Typography } from "@material-ui/core";
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
  text: {
    minWidth: "40vw",
  },
});

export default function DetailedAdditionalCommentCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <Typography style={{ fontWeight: "500", marginRight: "10px" }}>
            Supported Documents : &nbsp;
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            startIcon={<GetAppIcon />}
          >
            Download
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "20px",
            marginBottom: "10px",
          }}
        >
          <Typography
            style={{ fontWeight: "500", marginRight: "5px", flex: 1 }}
          >
            Additional Comment : &nbsp;
          </Typography>
          <Typography style={{ fontSize: "1rem", flex: 4 }}>
            lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit
            lorem ipsum dolor sit lorem ipsum dolor sit
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
