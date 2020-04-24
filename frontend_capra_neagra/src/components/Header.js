import React from "react";
import logo from "../images/capra_neagra_black.svg";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header>
      <img className={styles.Logo} src={logo} alt="Capra Neagra Logo" />
    </header>
  );
}

export default Header;
