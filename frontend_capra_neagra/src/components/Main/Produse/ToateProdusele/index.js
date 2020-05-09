import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class ToateProdusele extends Component {
  state = {};
  getProducts = (category) => {
    var address = "localhost:3001/api/v1/products";
    if (category !== "") address += `/${category}`;
    const token = localStorage.getItem("token");
    axios
      .get(address, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  componentDidMount() {
    console.log(this.props.category);
    //this.getProducts(this.props.category)
  }

  render() {
    return <h1>tot</h1>;
  }
}

export default withRouter(ToateProdusele);
