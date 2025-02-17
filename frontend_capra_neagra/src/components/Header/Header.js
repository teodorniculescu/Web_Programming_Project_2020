import React from "react";
import logo from "./logo.svg";
import cart from "./cart.svg";
import hamburger from "./hamburger.svg";
import scroll from "./scroll.svg";
import styles from "./Header.module.scss";
import { withRouter, Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  getLogo() {
    return (
      <Link to="/">
        <img className={styles.logo} src={logo} alt="Logo" />
      </Link>
    );
  }
  getCart() {
    return (
      <Link to="/cumparaturi">
        <img className={styles.cart} src={cart} alt="Cart" />;
      </Link>
    );
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

  getSlogan() {
    return "Cucerește versanții".toUpperCase();
  }

  getBeginningPicture() {
    return (
      <div className={styles.background_image}>
        <div className={styles.upper}>
          <div className={styles.fade_in_img}>
            <img src={logo} alt="Logo" />
          </div>
          <div className={styles.fade_in_text}>
            <div className={styles.text}>{this.getSlogan()}</div>
          </div>
        </div>
        <div className={styles.scroll}>
          <img src={scroll} alt="Scroll" />
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

export default withRouter(Header);
