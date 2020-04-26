import React from "react";
import logo from "./logo.svg";
import cart from "./cart.svg";
import hamburger from "./hamburger.svg";
import styles from "./Header.module.scss";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getLogo() {
    return <img href="/" className={styles.logo} src={logo} alt="Logo" />;
  }
  getCart() {
    return <img href="/" className={styles.cart} src={cart} alt="Cart" />;
  }
  openMenu() {
    console.log("open");
    document.getElementById("sidenavigation").style.width = "80%";
    document.getElementById("darken_background").style.width = "100%";
  }
  getOpenButton() {
    return (
      <img
        className={styles.openbutton}
        src={hamburger}
        alt="Menu"
        onClick={this.openMenu}
      />
    );
  }

  getBeginningPicture() {
    return (
      <div className={styles.background_image}>
        <div className={styles.fade_in_img}>
          <img src={logo} alt="Logo" />
        </div>
      </div>
    );
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);
    const navbar = document.getElementById("navigationbar");
    const sticky_height = navbar.offsetTop;
    this.setState({ sticky_height: sticky_height });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const content = document.getElementById("content");
    if (window.pageYOffset >= this.state.sticky_height) {
      this.setState({ sticky: true });
      content.style.paddingTop = "14mm";
    } else {
      this.setState({ sticky: false });
      content.style.paddingTop = "0px";
    }
  };

  getSticky() {
    if (this.state.sticky) return styles.sticky;
    return null;
  }

  render() {
    return (
      <header onScroll={this.handleScroll}>
        {this.getBeginningPicture()}
        <div className={this.getSticky()} id="navigationbar">
          <div className={styles.navigation_bar}>
            <div
              className={styles.navigation_container}
              id="navigationcontainer"
            >
              {this.getOpenButton()}
              {this.getLogo()}
              {this.getCart()}
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
