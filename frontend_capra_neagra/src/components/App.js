import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import SideNav from "./SideNav/SideNav";
import styles from "./App.module.scss";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <div className={styles.overall}>
      <HashRouter basename="/">
        <SideNav />
        <Header />
        <Main />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
