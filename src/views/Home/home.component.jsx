import React from "react";
import "./home.styles.scss";
import Badge from "@material-ui/core/Badge";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Link } from "react-router-dom";
import ProjectCard from "../../components/project-card.component.";
import OpportunitiesCard from "../../components/opportunities-card.component";
import PendingProposalCard from "../../components/pending-proposal-card.component";
import sort from "../../assets/sort-icon.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: "50px",
    border: "1px solid",
    backgroundColor: fade(theme.palette.common.white, 0.75),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  customBadge: {
    backgroundColor: "#F07C37",
    color: "white",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <div className="project-main-head">
        <Link to="/projects" style={{ textDecoration: "none", color: "black" }}>
          <div className="project-title">
            <span>Projects</span>
            <span>
              <Badge
                badgeContent={5}
                classes={{ badge: classes.customBadge }}
                className="project-badge"
              />
            </span>
          </div>
        </Link>

        <div className="flex-row">
          <div className="search-bar">
            {/* <input type="search" /> */}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <div className="sort-icon">
              <img src={sort} alt="sort-icon" />
            </div>
          </div>
        </div>
      </div>

      <div className="project-list">
        <div className="project-card">
          <ProjectCard />
        </div>
      </div>
      <div className="project-list">
        <div className="project-card">
          <div className="hero-title hero-row">
            <Link
              to="/opportunities"
              style={{ textDecoration: "none", color: "black" }}
            >
              <span>Opportunities</span>
            </Link>
            <Link to="/opportunities">
              <div className="see-more">
                <p>See More</p>
                <ChevronRightIcon
                  style={{
                    color: "white",
                    borderRadius: "50%",
                    width: "15px",
                    height: "15px",
                    backgroundColor: "#F07C37",
                  }}
                />
              </div>
            </Link>
          </div>
          <OpportunitiesCard />
        </div>
        <div className="project-card" style={{ marginLeft: "30px" }}>
          <div className="hero-title hero-row">
            <Link
              to="/proposals"
              style={{ textDecoration: "none", color: "black" }}
            >
              <span>Pending Proposals</span>
            </Link>
            <Link to="/proposals">
              <div className="see-more">
                <p>See More</p>
                <ChevronRightIcon
                  style={{
                    color: "white",
                    borderRadius: "50%",
                    width: "15px",
                    height: "15px",
                    backgroundColor: "#F07C37",
                  }}
                />
              </div>
            </Link>
          </div>
          <PendingProposalCard />
        </div>
      </div>
    </>
  );
}
