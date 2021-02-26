import React from "react";
import "./project-card.styles.scss";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Chip from "@material-ui/core/Chip";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    borderRadius: 15,
    boxShadow: "0 2px 4px 0 rgba(0,0,0,.1)",
    minWidth: "fit-content",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

function getSteps() {
  return ["Step 1", "Step 2", "Step 3", "Step 4"];
}

const projectData = [
  {
    id: 0,
    projectCount: "1",
    daysLeft: "8 days left",
    status: "Delayed",
    completed: 2,
    sprintLink: "https://lorem.com",
    sprintDemoName: "Sprint 2",
  },
  {
    id: 1,
    projectCount: "2",
    daysLeft: "6 days left",
    status: "On Track",
    completed: 3,
    sprintLink: "https://lorem.com",
    sprintDemoName: "Sprint 3",
  },
  {
    id: 2,
    projectCount: "3",
    daysLeft: "11 days left",
    status: "On Hold",
    completed: 1,
    sprintLink: "https://lorem.com",
    sprintDemoName: "Sprint 1",
  },
];

export default function ProjectCard() {
  const classes = useStyles();
  const handleClick = () => {
    // console.info('You clicked the Chip.');
  };
  const [activeStep] = React.useState(0);
  const steps = getSteps();

  return (
    <div style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}>
      {projectData.map((data) => (
        <Card
          className={classes.root}
          variant="outlined"
          style={{ marginRight: "40px", marginBottom: "25px" }}
        >
          <CardContent>
            <div className="project-header-row">
              <p>Project {data.projectCount}</p>
              {data.status === "Delayed" ? (
                <Chip
                  size="small"
                  icon={
                    <AccessTimeIcon
                      style={{ color: "white", width: "15px", height: "15px" }}
                    />
                  }
                  label={data.daysLeft}
                  onClick={handleClick}
                  style={{
                    color: "white",
                    borderRadius: "5px",
                    backgroundColor: "red",
                  }}
                />
              ) : null}
              {data.status === "On Track" ? (
                <Chip
                  size="small"
                  icon={
                    <AccessTimeIcon
                      style={{ color: "white", width: "15px", height: "15px" }}
                    />
                  }
                  label={data.daysLeft}
                  onClick={handleClick}
                  style={{
                    color: "white",
                    borderRadius: "5px",
                    backgroundColor: "teal",
                  }}
                />
              ) : null}
              {data.status === "On Hold" ? (
                <Chip
                  size="small"
                  icon={
                    <AccessTimeIcon
                      style={{ color: "white", width: "15px", height: "15px" }}
                    />
                  }
                  label={data.daysLeft}
                  onClick={handleClick}
                  style={{
                    color: "white",
                    borderRadius: "5px",
                    backgroundColor: "#f9a602",
                  }}
                />
              ) : null}
            </div>
            <div className="project-header-row">
              <p>Status</p>
              <Chip
                style={{
                  borderRadius: "5px",
                }}
                size="small"
                label={data.status}
                onClick={handleClick}
              />
            </div>
            <div className="project-header-col">
              <p>Completed so far</p>
              <Stepper
                activeStep={activeStep}
                alternativeLabel
                className="stepper"
              >
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel style={{ fontSize: "0.4rem" }}>
                      {label}
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </div>
            <div className="project-header-row">
              <p>Sprint Demos</p>
              <a
                href={data.sprintLink}
                target="_blank"
                rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                {data.sprintDemoName}
              </a>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
