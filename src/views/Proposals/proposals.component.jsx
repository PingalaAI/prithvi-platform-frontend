import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./proposals.styles.scss";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ProblemDropdown from "../../components/problem-dropdown.component";
import ProposalsRecieved from "../../components/proposals-recieved.component";
import ProposalsPending from "../../components/proposals-pending.component";
import ProposalsProposed from "../../components/proposals-proposed.component";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
});

export default function Proposals() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className="proposals-head">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Link to="/home">
            <ArrowBackIcon
              style={{ width: "18px", height: "18px", marginTop: "5px" }}
            />
          </Link>
          <h3 style={{ paddingLeft: "20px" }}>Proposals</h3>
        </div>
        <ProblemDropdown style={{ margin: "50px" }} />
      </div>
      <AppBar
        position="static"
        style={{
          backgroundColor: "#ffffff",
          boxShadow: "0 2px 4px 0 rgba(0,0,0,.1)",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          style={{ color: "#121212" }}
        >
          <Tab label="Recieved" {...a11yProps(0)} />
          <Tab label="Proposed" {...a11yProps(1)} />
          <Tab label="Pending" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ProposalsRecieved />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProposalsProposed />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ProposalsPending />
      </TabPanel>
    </div>
  );
}
