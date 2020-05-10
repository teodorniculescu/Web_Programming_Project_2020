import React from "react";
import styles from "./SideNav.module.scss";
import exit from "./exit.svg";
import social from "./social.svg";
import { Link, withRouter } from "react-router-dom";

class SideNav extends React.Component {
  closeMenu() {
    console.log("close");
    document.getElementById("sidenavigation").style.width = "0%";
    document.getElementById("darken_background").style.width = "0%";
  }
  getSocialButton() {
    return (
      <Link to="/cont/totiutilizatorii">
        <img
          id="sidenav_socialbutton"
          className={styles.socialbutton}
          src={social}
          alt="All Users"
          onClick={this.closeMenu}
        />
      </Link>
    );
  }
  getCloseButton() {
    return (
      <img
        className={styles.closebutton}
        src={exit}
        alt="Exit"
        onClick={this.closeMenu}
      />
    );
  }

  getSideLink(link, content) {
    return (
      <Link to={link} onClick={this.closeMenu}>
        <div className={styles.text}>{content}</div>
      </Link>
    );
  }
  componentDidMount() {
    let value;
    if (localStorage.getItem("role") === "admin") value = "visible";
    else value = "hidden";
    document.getElementById("sidenav_socialbutton").style.visibility = value;
  }
  componentDidUpdate() {
    this.componentDidMount();
  }
  render() {
    return (
      <div>
        <div id="sidenavigation" className={styles.sidenavigation}>
          {this.getCloseButton()}
          {this.getSocialButton()}
          <div className={styles.side_navigation_list}>
            <hr />
            {this.getSideLink("/produse", "TOATE PRODUSELE")}
            {this.getSideLink("/produse/biciclete", "BICICLETE")}
            {this.getSideLink("/produse/accesorii", "ACCESORII")}
            {this.getSideLink("/produse/textile", "TEXTILE")}
            <hr />
            {this.getSideLink("/faq", "FAQ")}
            {this.getSideLink("/contact", "CONTACT")}
            {this.getSideLink("/suport", "SUPORT TEHNIC")}
            <hr />
            {this.getSideLink("/cont/intrare", "CONTUL MEU")}
          </div>
        </div>
        <div id="darken_background" className={styles.darken_background}></div>
      </div>
    );
  }
}

export default withRouter(SideNav);
