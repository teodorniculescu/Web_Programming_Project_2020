import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import SideNav from "./SideNav/SideNav";
import styles from "./App.module.scss";

function App() {
  return (
    <div>
      <SideNav />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
