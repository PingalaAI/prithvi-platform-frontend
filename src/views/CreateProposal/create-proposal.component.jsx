import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./create-proposal.styles.scss";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ProposalProblemCard from "../../components/proposal-problem-card.component";
import ProposalEpicsCard from "../../components/proposal-epics-card.component";
import ProposalResourceCard from "../../components/proposal-resource-card.component";
import AdditionalCommentCard from "../../components/proposal-additional-comment-card.component";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
});

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function CreateProposal() {
  const classes = useStyles();
  const query = useQuery();
  const data = JSON.parse(query.get("data"));
  const [shouldFetchStories, setShouldFetchStories] = useState(false);
  const onSubmitHandler = () => {
    setShouldFetchStories(!shouldFetchStories);
  };

  // payload states
  const [payload_name, setName] = useState("");
  const [payload_stories, setPayload_stories] = useState([]);
  const [payload_resources, setPayload_resources] = useState([]);
  const [payload_comment, setPayload_comment] = useState("");
  useEffect(() => {
    console.log("all data: ", {
      title: payload_name,
      stories: payload_stories,
      resource: payload_resources,
      comment: payload_comment,
      problem: data.title,
    });
  }, [payload_stories]);

  useEffect(() => {
    if (shouldFetchStories) {
      axios
        .post("http://20.185.145.180:8000/v1/proposals/", {
          title: payload_name,
          stories: payload_stories,
          resource: payload_resources,
          comment: payload_comment,
          problem: data.title,
        })
        .then((res) => {
          console.log("resp", res);
        })
        .catch((err) => {
          console.log("err!!", err.message);
        });
    }
  }, [payload_stories]);
  
  return (
    <div className={classes.root}>
      <div className="proposals-head">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/opportunities">
            <ArrowBackIcon
              style={{ width: "18px", height: "18px", marginTop: "5px" }}
            />
          </Link>
          <h3 style={{ paddingLeft: "20px" }}>Create Proposal</h3>
        </div>
      </div>
      <div className="problem-card">
        <ProposalProblemCard
          payload_name={payload_name}
          setName={setName}
          postedBy={data.postedBy.username}
          description={data.description}
        />
      </div>
      <div className="problem-card">
        <ProposalEpicsCard
          epicIds={data.epics}
          payload_stories={payload_stories}
          setPayload_stories={setPayload_stories}
          onSubmitHandler={onSubmitHandler}
          shouldFetchStories={shouldFetchStories}
        />
      </div>
      <div className="problem-card">
        <ProposalResourceCard
          setPayload_resources={setPayload_resources}
          shouldFetchStories={shouldFetchStories}
        />
      </div>
      <div className="problem-card">
        <AdditionalCommentCard
          onSubmitHandler={onSubmitHandler}
          shouldFetchStories={shouldFetchStories}
          setPayload_comment={setPayload_comment}
        />
      </div>
    </div>
  );
}
