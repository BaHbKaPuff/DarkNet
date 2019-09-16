import React from "react";
import classes from "./Header.module.css";
import LoginContainer from "./Login/LoginContainer";

const Header = () => {
  return (
    <div className={classes.head}>
      <img src={require("../../img/logo_main.png")} alt="darknet" />
      <LoginContainer />
    </div>
  );
};

export default Header;
