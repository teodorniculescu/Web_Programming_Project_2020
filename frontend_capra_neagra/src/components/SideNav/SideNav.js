import React from "react";
import styles from "./SideNav.module.scss";
import exit from "./exit.svg";

class SideNav extends React.Component {
  closeMenu() {
    console.log("close");
    document.getElementById("sidenavigation").style.width = "0%";
    document.getElementById("darken_background").style.width = "0%";
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
    return <a href={link}>{content}</a>;
  }
  render() {
    return (
      <div>
        <div id="sidenavigation" className={styles.sidenavigation}>
          {this.getCloseButton()}
          <div className={styles.side_navigation_list}>
            <hr />
            {this.getSideLink("#", "BICICLETE")}
            {this.getSideLink("#", "ACCESORII")}
            {this.getSideLink("#", "TEXTILE")}
            <hr />
            {this.getSideLink("#", "CONTUL MEU")}
          </div>
        </div>
        <div id="darken_background" className={styles.darken_background}></div>
      </div>
    );
  }
}

export default SideNav;
