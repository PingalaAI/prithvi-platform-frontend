import React, { useState } from "react";
import "./create-problem.styles.scss";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Button from "@material-ui/core/Button";
import ProblemDetailsCard from "../../components/problem-details-card.component";
import ProblemVisibilityCard from "../../components/problem-visibility-card.component";
import ProblemEpicsCard from "../../components/problem-epics-card.component";
import ProblemDataCard from "../../components/problem-data-card.component";
import { createProblem } from "../../api/problems";

export default function CreateProblem() {
  const [values, setValues] = useState({
    title: "",
    username: "",
    description: "",
  });

  const [tags, setTags] = React.useState([]);
  console.log(
    "🚀 ~ file: create-problem.component.jsx ~ line 19 ~ CreateProblem ~ tags",
    tags
  );
  const [status, setStatus] = React.useState("Public");
  console.log(
    "🚀 ~ file: create-problem.component.jsx ~ line 20 ~ CreateProblem ~ status",
    status
  );
  const [epics, setEpics] = React.useState({
    data: [],
  });
  console.log(
    "🚀 ~ file: create-problem.component.jsx ~ line 31 ~ CreateProblem ~ epics",
    epics
  );

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSubmit = async () => {
    const respStatus = await createProblem(
      values.title,
      values.username,
      values.description,
      tags,
      status,
      epics
    );
    console.log(
      "🚀 ~ file: create-problem.component.jsx ~ line 50 ~ handleSubmit ~ respStatus",
      respStatus
    );
    if (respStatus === 200) {
      // props.setData(values);
      alert(`Problem Added`);
      console.log("alert");
    } else {
      alert(`Something is not right`);
    }
  };

  return (
    <div style={{ flexGrow: "1" }}>
      <div className="proposals-head">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/opportunities">
            <ArrowBackIcon
              style={{ width: "18px", height: "18px", marginTop: "5px" }}
            />
          </Link>
          <h3 style={{ paddingLeft: "20px" }}>Create Problem</h3>
        </div>
      </div>
      <div className="problem-card">
        <ProblemDetailsCard setData={handleChange} />
      </div>
      <div className="problem-card">
        <ProblemVisibilityCard
          statusData={status}
          setStatusData={setStatus}
          setTagData={setTags}
          tagData={tags}
        />
      </div>
      <div className="problem-card">
        <ProblemEpicsCard epicsData={epics} setEpicsData={setEpics} />
      </div>
      <div className="problem-card">
        <ProblemDataCard />
      </div>
      <div
        style={{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}
      >
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Create Problem
        </Button>
      </div>
    </div>
  );
}
