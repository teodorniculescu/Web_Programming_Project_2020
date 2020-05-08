import React, { Component } from "react";
import Box from "../../Box/Box";
import styles from "./Confirmare.module.scss";
import axios from "axios";

class Confirmare extends Component {
  state = { message: "" };

  componentDidMount() {
    const searchParams = new URLSearchParams(this.props.location.search);
    const id = searchParams.get("id") || " ";
    const rnd = searchParams.get("rnd") || " ";
    let message;
    const address = `http://localhost:3001/api/v1/users/register/confirm?id=${id}&rnd=${rnd}`;
    const token = localStorage.getItem("token");
    console.log(token);
    axios
      .post(address)
      .then((res) => {
        if (res.data == 1) message = "Autentificare realizata cu succes!";
        else message = "Incercare nereusita!";
        this.setState({ message });
      })
      .catch((error) => {
        message = "Ceva nu a mers bine!";
        this.setState({ message });
        console.log(error);
      });
  }
  getMessage() {
    return <div className={styles.message}>{this.state.message}</div>;
  }
  render() {
    return <Box>{this.getMessage()}</Box>;
  }
}

export default Confirmare;
