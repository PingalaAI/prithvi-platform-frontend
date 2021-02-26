import React from "react";
import { Link } from "react-router-dom";
import "./proposals-card.styles.scss";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import ChatIcon from "@material-ui/icons/Chat";
import { Grid, Typography } from "@material-ui/core";
import SwitchLabels from "./Switch";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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
  customBadge: {
    backgroundColor: "#F07C37",
    color: "white",
  },
});

const proposal = [
  {
    id: 0,
    proposalCount: "A",
    problemAssociated: "A",
    description: "lorem ipsum dolor sit lorem ipsum dolor sit",
  },
  {
    id: 1,
    proposalCount: "B",
    problemAssociated: "B",
    description: "lorem ipsum dolor sit lorem ipsum dolor sit",
  },
  {
    id: 2,
    proposalCount: "C",
    problemAssociated: "C",
    description: "lorem ipsum dolor sit lorem ipsum dolor sit",
  },
];

export default function ProposalsPendingCard() {
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={4}>
        {proposal.map((proposals) => (
          <Grid item xs={6} sm={6} md={6} lg={6}>
            <Card className={classes.root} key={proposals.id}>
              <CardContent>
                <h4 className="hero-text" style={{ color: "#3f51bf" }}>
                  Proposal - {proposals.proposalCount}
                </h4>
                <p className="hero-subtext">
                  Problem Associated - {proposals.problemAssociated}
                </p>
                <Typography className="proposal-desc">
                  {proposals.description}
                </Typography>
                <div className="button-row">
                  <Link to="/detailedProposal">
                    <Button
                      variant="contained"
                      color="primary"
                      style={{
                        textTransform: "none",
                        marginRight: "50px",
                      }}
                    >
                      Comment / Update
                    </Button>
                  </Link>
                  <SwitchLabels />
                  <Badge
                    color="secondary"
                    variant="dot"
                    classes={{ badge: classes.customBadge }}
                  >
                    <ChatIcon style={{ marginLeft: "50px", color: "grey" }} />
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
