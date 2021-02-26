import React from "react";
import { Link } from "react-router-dom";
import "./projects.styles.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import ProjectList from "./project-list";

const useStyles = makeStyles({
  root: {
    minWidth: "fit-content",
    minHeight: "60vh",
    textAlign: "center",
    borderRadius: 15,
    boxShadow: "0px 1px 1px 1px rgba(0,0,0,.1)",
    border: "1px solid rgba(0,0,0,0.15)",
  },
  card: {
    textAlign: "center",
    borderRadius: 15,
    boxShadow: "0px 1px 1px 1px rgba(0,0,0,.1)",
    border: "1px solid rgba(0,0,0,0.15)",
    alignItems: "center",
    justifyContent: "center",
    maxHeight: 75,
    padding: 10,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Projects() {
  const classes = useStyles();

  return (
    <>
      <div className="project-head">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/home">
            <ArrowBackIcon
              style={{ width: "18px", height: "18px", marginTop: "5px" }}
            />
          </Link>
          <h3 style={{ paddingLeft: "20px" }}>Projects</h3>
        </div>
        <div>
          <Card className={classes.card}>
            <Link
              to="/createProject"
              style={{ textDecoration: "none", color: "black" }}
            >
              <CardContent
                style={{
                  display: "flex",
                  cursor: "pointer",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 0,
                  paddingLeft: 10,
                  paddingRight: 10,
                }}
              >
                <AddCircleIcon
                  fontSize="50"
                  style={{ marginRight: "15px", color: "#F07C37" }}
                />
                <p>Add new project</p>
              </CardContent>
            </Link>
          </Card>
        </div>
      </div>
      <Grid container spacing={3} style={{ marginBottom: "10px" }}>
        <Grid item xs={12}>
          <Card className={classes.root}>
            <CardContent>
              <ProjectList />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
