import React, { useEffect, useState } from "react";
import FormData from "form-data";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

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
  text: {
    minWidth: "40vw",
  },
  input: {
    display: "none",
  },
});

export default function AdditionalCommentCard({
  onSubmitHandler,
  shouldFetchStories,
  setPayload_comment,
}) {
  const classes = useStyles();
  const [comment, setComment] = useState();
  useEffect(() => {
    setPayload_comment(comment);
  }, [shouldFetchStories]);
  const formData = new FormData();
  const onUpload = (e) => {
    formData.append("file", e.target.files[0]);
    axios
      .post("http://20.185.145.180:8000/v1/problems/upload", formData)
      .then((res) => {
        res.status === 200
          ? alert("file uploaded sucessfully!")
          : alert("Oops, could not upload file!");
      })
      .catch((err) => {
        console.log("oops an error occured: ", err.message);
      });
  };
  return (
    <Card className={classes.root}>
      <CardContent>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <input
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
            onChange={(event) => onUpload(event)}
          />
          <label htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span">
              Upload
            </Button>
          </label>
          <form noValidate autoComplete="off">
            <TextField
              className={classes.text}
              ref={setPayload_comment}
              onChange={(event) => setComment(event.target.value)}
              id="outlined-basic"
              label="Additional Comment"
              variant="outlined"
            />
          </form>

          <Button
            variant="contained"
            color="primary"
            style={{
              textTransform: "none",
              marginLeft: "50px",
              height: "50%",
            }}
            onClick={onSubmitHandler}
          >
            Submit
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
