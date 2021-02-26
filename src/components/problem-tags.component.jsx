import React from "react";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

export default function ProblemTags(props) {
  return (
    <ReactTagInput
      tags={props.data}
      onChange={(newTags) => props.setData(newTags)}
      removeOnBackspace
      placeholder="Add Tags"
    />
  );
}
