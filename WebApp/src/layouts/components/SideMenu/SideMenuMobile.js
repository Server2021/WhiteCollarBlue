import React from "react";
import {Link} from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import {FaChevronDown} from "react-icons/fa";

import "./SideMenu.scss";

export const SideMenuMobile = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  function handleClickListItem(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleMenuItemClick(event, index) {
    setSelectedIndex(index);
    setAnchorEl(null);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div className="side-menu--mobile">
      <List component="nav" aria-label="Device settings">
        <ListItem
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          aria-label="When device is locked"
          onClick={handleClickListItem}>
          <ListItemText primary={props.data[selectedIndex].name} />
          <ListItemIcon className="side-menu--mobile__arrow">
            <FaChevronDown color="white" />
          </ListItemIcon>
        </ListItem>
      </List>
      <Menu
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className="side-menu--mobile__menuItem">
        {props.data.map((item, index) => (
          <Link key={index} to={item.link}>
            <MenuItem
              key={item.name}
              selected={index === selectedIndex}
              onClick={event => handleMenuItemClick(event, index)}>
              {item.name}
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </div>
  );
};
