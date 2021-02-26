import React from "react";
import { Link } from "react-router-dom";
import "./detailed-proposal.styles.scss";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import DetailedProposalProblemCard from "../../components/detailed-proposal-problem-card.component";
import DetailedProposalEpicsCard from "../../components/detailed-proposal-epics-card.component";
import DetailedProposalResourceCard from "../../components/detailed-proposal-resource-card.component";
import DetailedAdditionalCommentCard from "../../components/detailed-proposal-additional-comment-card.component";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
});

export default function CreateProposal() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="proposals-head">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/proposals">
            <ArrowBackIcon
              style={{ width: "18px", height: "18px", marginTop: "5px" }}
            />
          </Link>
          <h3 style={{ paddingLeft: "20px" }}>Proposal</h3>
        </div>
      </div>
      <div className="problem-card">
        <DetailedProposalProblemCard />
      </div>
      <div className="problem-card">
        <DetailedProposalEpicsCard />
      </div>
      <div className="problem-card">
        <DetailedProposalResourceCard />
      </div>
      <div className="problem-card">
        <DetailedAdditionalCommentCard />
      </div>
    </div>
  );
}
