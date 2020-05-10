import React, { Component } from "react";
import axios from "axios";
import Box from "../../Box/Box";
import styles from "./Styles.module.scss";
import { Link } from "react-router-dom";

class ProdusID extends Component {
  state = { data: undefined };

  getSpecs = () => {
    const id = this.props.match.params.id;
    let address = `http://localhost:3001/api/v1/specs/products/${id}`;
    axios
      .get(address)
      .then((res) => {
        this.setState({ specs: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getProducts = () => {
    const id = this.props.match.params.id;
    let address = `http://localhost:3001/api/v1/products/${id}`;
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
    this.getProducts();
    this.getSpecs();
  }

  getTablerRows() {
    if (this.state.specs === undefined) return null;
    return this.state.specs.map((student, index) => {
      const { _id, idp, title, description } = student;
      return (
        <tr key={_id}>
          <td>{title}</td>
          <td>{description}</td>
        </tr>
      );
    });
  }

  render() {
    if (this.state.data === undefined) return null;
    const data = this.state.data[0];
    const path_src = require(`../pictures/${data.picture}`);
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
          <hr></hr>
          <div className={styles.specs}>
            <table>
              <tbody>{this.getTablerRows()}</tbody>
            </table>
          </div>
        </div>
      </Box>
    );
  }
}

export default ProdusID;
