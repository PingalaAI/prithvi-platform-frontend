import React from "react";
import "./projects.styles.scss";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 4, 3),
    minWidth: "50vw",
    minHeight: "50vh",
  },
}));

function createData(name, description, status) {
  return { name, description, status };
}

const rows = [
  createData("Project 1", "AI based hybrid  search engine", "Pending"),
  createData("Project 2", "The one stop fitness app", "On Track"),
  createData("Project 3", "Incubation Software-pre", "On Track"),
  createData("Project 4", "Incubation Software-finance", "Pending"),
  createData("Project 5", "Incubation Software-Post", "Pending"),
  createData("Project 6", "Startup Accelerator Software ", "Pending"),
];

export default function ProjectList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <>
                <TableRow key={row.name}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell
                    style={{ color: "blue", cursor: "pointer" }}
                    onClick={handleOpen}
                  >
                    View
                  </TableCell>
                </TableRow>
              </>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className="project-head">
              <div style={{ display: "flex", alignItems: "center" }}>
                <ArrowBackIcon
                  style={{
                    width: "18px",
                    height: "18px",
                    cursor: "pointer",
                  }}
                  onClick={handleClose}
                />

                <h3 style={{ paddingLeft: "20px" }}>Quick View</h3>
              </div>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
}
