import React from "react";
import SideNav from "./Menu/SideNav";
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
      <div>
        <h1>Scroll Down</h1>
        <p>Scroll down to see the sticky effect.</p>
      </div>
    );
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const navbar = document.getElementById("navigationbar");
    console.log(navbar);
    const sticky = navbar.offsetTop;
    if (window.pageYOffset >= sticky) {
      this.setState({ sticky: true });
    } else {
      this.setState({ sticky: false });
    }
  };

  getSticky() {
    if (this.state.sticky) return styles.sticky;
    return styles.no_sticky;
  }

  render() {
    console.log(this.state.sticky);
    return (
      <header onScroll={this.handleScroll}>
        {this.getBeginningPicture()}
        <SideNav />
        <div className={this.getSticky()}>
          <div className={styles.navigation_bar} id="navigationbar">
            <div className={styles.navigation_container}>
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
