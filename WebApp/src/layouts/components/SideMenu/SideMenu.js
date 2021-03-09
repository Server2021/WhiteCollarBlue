import React, {Component} from "react";
import {NavLink} from "react-router-dom";

import MenuList from "@material-ui/core/MenuList";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import {FaChevronRight} from "react-icons/fa";

import "./SideMenu.scss";

import {SideMenuMobile} from "./SideMenuMobile";

export default class SideMenu extends Component {
  render() {
    function DataList(props) {
      const listItems = props.data.map((item, index) => (
        <NavLink key={index} to={item.link} activeClassName="active" exact>
          <MenuItem>
            {!props.noIcon && (
              <ListItemIcon
                className={`sidemenu__icon ${props.noIcon && "sidemenu--noicon"}`}>
                {item.icons}
              </ListItemIcon>
            )}
            <Typography variant="inherit">{item.name}</Typography>
          </MenuItem>
        </NavLink>
      ));
      return <>{listItems}</>;
    }

    return (
      <>
        <div className="only-show-mobile">
          <SideMenuMobile data={this.props.data} />
        </div>

        <div>
          <Paper className="sidemenu only-show-desktop">
            <MenuList>
              <DataList
                data={this.props.data}
                noIcon={this.props.noIcon ? true : false}
              />
            </MenuList>
          </Paper>

          {this.props.after && (
            <NavLink to={this.props.afterLink}>
              <Button
                variant="outlined"
                size="large"
                color="primary"
                component="span"
                className="sidemenu__after">
                {this.props.after} <FaChevronRight />
              </Button>
            </NavLink>
          )}
        </div>
      </>
    );
  }
}
