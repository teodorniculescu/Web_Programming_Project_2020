import React from "react";
import styles from "./Footer.module.scss";
import { withRouter, Link } from "react-router-dom";

class Footer extends React.Component {
  getLink(to, text) {
    return (
      <li>
        <Link to={to}>{text}</Link>
      </li>
    );
  }
  render() {
    return (
      <footer className={styles.site_footer}>
        <div className={styles.container}>
          <hr></hr>
          <div className={(styles.col_xs_6, styles.col_md_3)}>
            <h6>Informatii</h6>
            <ul className={styles.footer_links}>
              {this.getLink("/contact", "Contactează-ne")}
              {this.getLink("/faq", "Întrebări frecvente")}
            </ul>
          </div>
          <hr></hr>
          <div className={styles.copyright_text}>
            © Capra Neagra 2020 All Rights Reserved
          </div>
        </div>
      </footer>
    );
  }
}

export default withRouter(Footer);
