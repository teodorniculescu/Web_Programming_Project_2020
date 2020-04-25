import React from "react";
import logo from "../images/capra_neagra.svg";
import ham from "../images/cn_hamburger.svg";
import styles from "./Header.module.scss";

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <Logo />
          <a href="#">
            <img className={styles.Menu} src={ham} alt="Toggle menu" />
          </a>
          <Menu />
        </nav>
      </header>
    );
  }
}

class Logo extends React.Component {
  render() {
    return (
      <img
        href="/"
        className={styles.Logo}
        src={logo}
        alt="Capra Neagra Logo"
      />
    );
  }
}

class Menu extends React.Component {
  render() {
    return (
      <ul>
        <MenuLink name="" />
        <MenuLink name="FAQ" />
        <MenuLink name="." />
      </ul>
    );
  }
}

class MenuLink extends React.Component {
  render() {
    return <li>{this.props.name}</li>;
  }
}

export default Header;
