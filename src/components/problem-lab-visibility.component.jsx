import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    boxShadow: "none",
    border: "1px solid rgba(0,0,0,0.15)",
  },
});

export default function ProblemLabVisibility(props) {
  const classes = useStyles();

  const handleChangeRadio = (event) => {
    props.setData(event.target.value);
  };
  const [state, setState] = React.useState({});

  const listOfLabs = [
    {
      id: 0,
      label: "Lab 1",
      state: "lab1",
    },
    {
      id: 1,
      label: "Lab 2",
      state: "lab2",
    },
    {
      id: 2,
      label: "Lab 3",
      state: "lab3",
    },
    {
      id: 3,
      label: "Lab 4",
      state: "lab4",
    },
    {
      id: 4,
      label: "Lab 5",
      state: "lab5",
    },
  ];

  const handleChangeCheckbox = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography color="textSecondary" style={{ marginBottom: "20px" }}>
          Lab Visibility
        </Typography>
        <FormControl component="fieldset" style={{ marginBottom: "20px" }}>
          <RadioGroup
            aria-label="visibility"
            name="visibility"
            value={props.data}
            onChange={handleChangeRadio}
            row
          >
            <FormControlLabel
              value="Public"
              control={<Radio color="primary" />}
              label="Public"
            />
            <FormControlLabel
              value="Private"
              control={<Radio color="primary" />}
              label="Private"
            />
          </RadioGroup>
        </FormControl>
        {props.data === "Private" ? (
          <>
            <Typography style={{ marginBottom: "10px" }}>
              List of Labs :
            </Typography>
            <FormGroup row>
              {listOfLabs.map((e) => (
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={state[e.state]}
                      onChange={handleChangeCheckbox}
                      name={e.state}
                      color="primary"
                    />
                  }
                  label={e.label}
                  id={e.id}
                />
              ))}
            </FormGroup>
          </>
        ) : null}
      </CardContent>
    </Card>
  );
}
