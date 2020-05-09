import React, { Component } from "react";
import axios from "axios";

class Biciclete extends Component {
  state = {};
  getAuthorsLists = (event) => {
    const address = "http://localhost:3000/api/v1/authors";
    const token = localStorage.getItem("token");
    console.log(token);
    axios
      .get(address, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        this.setState({ data: res.data });
        console.log(this.state.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return <h1>biciclete</h1>;
  }
}

export default Biciclete;
