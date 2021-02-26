import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import EpicsAccordion from "./epics-accordion.component";
import axios from "axios";
import { BaseUrl } from "../api/constant";

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

const fetchEpics = async (epicId) => {
  return axios
    .get(`${BaseUrl}problems/epics/${epicId}`)
    .then((response) => response.data);
};

export default function ProposalEpicsCard({
  epicIds,
  payload_stories,
  setPayload_stories,
  shouldFetchStories,
}) {
  const classes = useStyles();
  const [epics, setEpics] = useState([]);

  let data = [];
  useEffect(() => {
    epicIds.map((epicId, i) => {
      fetchEpics(epicId).then(async (resp) => {
        data.push(resp);
        if (data.length === epicIds.length) {
          setEpics(data);
        }
      });
    });
  }, []);

  // useEffect(() => {
  //   setPayload_stories([[...payload_stories], data]);
  // }, [shouldFetchEpics]);
  // useEffect(() => {
  //   console.log("data is: ", payload_stories);
  // }, [payload_stories]);

  return (
    <Card className={classes.root}>
      <CardContent>
        <EpicsAccordion
          epics={epics}
          shouldFetchStories={shouldFetchStories}
          payload_stories={payload_stories}
          setPayload_stories={setPayload_stories}
        />
      </CardContent>
    </Card>
  );
}
