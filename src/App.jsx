import React from "react";
import classes from "./App.module.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
// import Aside from "./components/Aside/Aside";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
// import { connect } from 'react-redux';

const App = () => {

  return (
    <div className={classes.wrapper}>
      <Header />
      <NavBar />
      {/* <Aside /> */}
      <Main />
      <Footer />
    </div>
  );
};

// export default connect()(App);
export default App;
