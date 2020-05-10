import React, { Component } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import SideNav from "./SideNav/SideNav";
import GDPR from "./GDPR";
import styles from "./App.module.scss";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  state = {};
  render() {
    return (
      <div className={styles.overall}>
        <BrowserRouter basename="/">
          <SideNav />
          <GDPR />
          <Header />
          <Main />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
