import React, { Component } from "react";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";
import Box from "../../Box/Box";
import styles from "./Styles.module.scss";

class ToateProdusele extends Component {
  state = { data: undefined };

  getProducts = (category) => {
    let address = "http://localhost:3001/api/v1/products";
    if (category !== undefined && category !== "") address += `/${category}`;
    axios
      .get(address)
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    this.getProducts(this.props.category);
  }

  getProductBox(data) {
    const path_src = require(`./pictures/${data.picture}`);
    console.log(path_src);
    const price = parseFloat(data.price).toString();
    const link = `/produse/${data.id}`;
    return (
      <Box key={data.id}>
        <div className={styles.post}>
          <div className={styles.upper}>
            <div className={styles.title}>{data.name}</div>
          </div>
          <div className={styles.img_container}>
            <Link to={link}>
              <img src={path_src} alt={data.picture}></img>
            </Link>
          </div>
          <div className={styles.lower}>
            <div className={styles.price}>{price + " " + data.currency}</div>
            <Link to={link}>
              <div className={styles.more}>> Detalii</div>
            </Link>
          </div>
        </div>
      </Box>
    );
  }

  getProductsData() {
    if (this.state.data === undefined) return null;
    return this.state.data.map((data_element, index) => {
      const asdf = this.getProductBox(data_element);
      return asdf;
    });
  }

  render() {
    return <div>{this.getProductsData()}</div>;
  }
}

export default withRouter(ToateProdusele);
