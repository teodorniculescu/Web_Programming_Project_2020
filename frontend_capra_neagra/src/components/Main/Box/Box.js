import React, { Component } from "react";
import styles from "./Box.module.scss";
import { withRouter } from "react-router-dom";

class Box extends Component {
  state = {};
  render() {
    return <div className={styles.box}>{this.props.children}</div>;
  }
}

export default withRouter(Box);
