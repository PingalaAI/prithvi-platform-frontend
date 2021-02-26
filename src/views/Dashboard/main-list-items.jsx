import React from "react";
import "./dashboard.styles.scss";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
  Grid,
  Gitlab,
  Code,
  Settings,
  Database,
  Home,
  Star,
  FilePlus,
  Feather,
  Globe,
  List as TaigaIcon,
} from "react-feather";
import Divider from "@material-ui/core/Divider";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import List from "@material-ui/core/List";
import { Link } from "react-router-dom";

export default function MainListItems() {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <List>
        {/* from */}
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <Grid style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" className="list_item_text" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Divider style={{ backgroundColor: "#353d62" }} />

        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
              <ListItem button style={{ backgroundColor: "#4d516831" }}>
                <ListItemIcon>
                  <Home style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Home" style={{ color: "white" }} />
              </ListItem>
            </Link>
            <Divider style={{ backgroundColor: "#353d62" }} />
            <Link
              to="/projects"
              style={{ textDecoration: "none", color: "white" }}
            >
              <ListItem button style={{ backgroundColor: "#4d516831" }}>
                <ListItemIcon>
                  <Feather style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Projects" style={{ color: "white" }} />
              </ListItem>
            </Link>
            <Divider style={{ backgroundColor: "#353d62" }} />
            <Link
              to="/opportunities"
              style={{ textDecoration: "none", color: "white" }}
            >
              <ListItem button style={{ backgroundColor: "#4d516831" }}>
                <ListItemIcon>
                  <Star style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Opportunities"
                  style={{ color: "white" }}
                />
              </ListItem>
            </Link>
            <Divider style={{ backgroundColor: "#353d62" }} />
            <Link
              to="/proposals"
              style={{ textDecoration: "none", color: "white" }}
            >
              <ListItem button style={{ backgroundColor: "#4d516831" }}>
                <ListItemIcon>
                  <FilePlus style={{ color: "white" }} />
                </ListItemIcon>
                <ListItemText primary="Proposals" style={{ color: "white" }} />
              </ListItem>
            </Link>
          </List>
        </Collapse>
        <Divider style={{ backgroundColor: "#353d62" }} />
        <Link to="/news" style={{ textDecoration: "none", color: "white" }}>
          <ListItem button>
            <ListItemIcon>
              <Globe style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="News" style={{ color: "white" }} />
          </ListItem>
        </Link>
        <Divider style={{ backgroundColor: "#353d62" }} />

        <a
          href="http://taiga.prithvi.ai/"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", color: "white" }}
        >
          <ListItem button>
            <ListItemIcon>
              <TaigaIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Taiga" />
          </ListItem>
        </a>
        <Divider style={{ backgroundColor: "#353d62" }} />
        <a
          href="http://git.prithvi.ai/"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", color: "white" }}
        >
          <ListItem button>
            <ListItemIcon>
              <Gitlab style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Gitlab" />
          </ListItem>
        </a>
        <Divider style={{ backgroundColor: "#353d62" }} />
        <ListItem button>
          <ListItemIcon>
            <Code style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Coding Env." />
        </ListItem>
        <Divider style={{ backgroundColor: "#353d62" }} />
        <ListItem button>
          <ListItemIcon>
            <Database style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Dataset" />
        </ListItem>
        <Divider style={{ backgroundColor: "#353d62" }} />

        <ListItem button>
          <ListItemIcon>
            <Settings style={{ color: "white" }} />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </div>
  );
}
