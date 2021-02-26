import React, { useEffect } from "react";
import "./project-card.styles.scss";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { fetchProblem } from "../api/problems";

const useStyles = makeStyles({
  root: {
    minWidth: "35vw",
    height: "20vh",
    borderRadius: "10px",
    boxShadow: "0 2px 4px 0 rgba(0,0,0,.1)",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const item = [
  {
    id: 0,
    problemCount: "1",
    desc: "AI based hybrid  search engine",
  },
  {
    id: 1,
    problemCount: "2",
    desc: "The one stop fitness app",
  },
  {
    id: 2,
    problemCount: "3",
    desc: "Startup Accelerator Software",
  },
];

export default function OpportunitiesCard() {
  const classes = useStyles();
  const [data, setData] = React.useState([]);

  async function fetchData() {
    fetchProblem().then(async (resp) => {
      console.log("resp", resp);
      setData(resp);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {data.splice(0, 3).map((data) => (
        <Card
          className={classes.root}
          variant="outlined"
          style={{
            marginBottom: "20px",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <CardContent>
            <div className="project-header-col" style={{ lineHeight: "50%" }}>
              <p style={{ textTransform: "capitalize" }}>{data.title}</p>
              <p>Description : {data.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
