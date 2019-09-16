import React from "react";
import classes from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={classes.nav}>
      <NavLink to="/profile" activeClassName={classes.active}>
        Profile
      </NavLink>
      <NavLink to="/friends" activeClassName={classes.active}>
        Friends
      </NavLink>
      <NavLink to="/messages" activeClassName={classes.active}>
        Messages
      </NavLink>
      <NavLink to="/groups" activeClassName={classes.active}>
        Groups
      </NavLink>
      <NavLink to="/music" activeClassName={classes.active}>
        Music
      </NavLink>
      <NavLink to="/settings" activeClassName={classes.active}>
        Settings
      </NavLink>
      <NavLink to="/users" activeClassName={classes.active}>
        Users
      </NavLink>
    </nav>
  );
};

export default NavBar;
