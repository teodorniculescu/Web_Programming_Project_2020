import React, { Component } from "react";
import styles from "./Box.module.scss";
class Box extends Component {
  state = {};
  render() {
    return <div className={styles.box}>{this.props.children}</div>;
  }
}

export default Box;
