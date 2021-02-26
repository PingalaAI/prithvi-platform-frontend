/* eslint-disable no-use-before-define */
import React from "react";
import TextField from "@material-ui/core/TextField";
import { Autocomplete } from "@material-ui/lab";

export default function ProblemDropdown() {
  return (
    <Autocomplete
      id="combo-box-demo"
      options={title}
      getOptionLabel={(option) => option.title}
      style={{ width: 250, height: 50 }}
      renderInput={(params) => (
        <TextField {...params} label="Problem" variant="outlined" />
      )}
    />
  );
}

const title = [
  { title: "Problem A" },
  { title: "Problem B" },
  { title: "Problem C" },
  { title: "Problem D" },
  { title: "Problem E" },
];
