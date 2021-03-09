import React from "react";
import {NavLink} from "react-browser-router";

export const NavMenuList = () => {
  return (
    <ul>
      <NavLink exact to="/" activeClassName="active">
        <li>Home</li>
      </NavLink>
      <NavLink to="/jobseeker/findjob" activeClassName="active">
        <li>Find a Job</li>
      </NavLink>
      <NavLink exact to="/jobseeker" activeClassName="active">
        <li>
          <b>Job Seekers</b>
        </li>
      </NavLink>
      <NavLink to="/employer" activeClassName="active">
        <li>
          <b>Employers</b>
        </li>
      </NavLink>
      <NavLink to="/industries" activeClassName="active">
        <li>Industries</li>
      </NavLink>
      <NavLink to="/about" activeClassName="active">
        <li>About WCB</li>
      </NavLink>
      <NavLink to="/contact/sydney" activeClassName="active">
        <li>Contact Us</li>
      </NavLink>
    </ul>
  );
};
