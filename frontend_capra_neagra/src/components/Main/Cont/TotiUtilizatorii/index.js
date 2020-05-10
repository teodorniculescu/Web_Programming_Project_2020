import React, { Component } from "react";
import axios from "axios";
import styles from "./Styles.module.scss";
import Box from "../../Box/Box";

class TotiUtilizatorii extends Component {
  state = {};
  state = {
    data: [],
  };
  getAuthorsLists = (event) => {
    const role = localStorage.getItem("role");
    if (role === undefined || role !== "admin") return;

    const address = "http://localhost:3001/api/v1/users/";
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
  componentDidMount() {
    this.getAuthorsLists();
  }
  getDeleteIcon(id, role) {
    if (role === "admin") return null;
    return null;
  }
  getSuportIcon(id, role) {
    if (role === "admin") return null;
    return null;
  }
  getTableRow() {
    return this.state.data.map((student, index) => {
      const { id, username, pass, name, email, valid, role, rand } = student;
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{username}</td>
          <td>{name}</td>
          <td>{email}</td>
          <td>{valid}</td>
          <td>{role}</td>
          <td>{this.getDeleteIcon(id, role)}</td>
          <td>{this.getSuportIcon(id, role)}</td>
        </tr>
      );
      //<th>{this.getIcon(_id)}</th>
    });
  }
  formatData = () => {
    return (
      <Box>
        <div className={styles.myTable}>
          <table>
            <tbody>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Name</th>
                <th>Email</th>
                <th>Valid</th>
                <th>Role</th>
                <th>Delete</th>
                <th>Grant/Revoke Suport</th>
              </tr>
              {this.getTableRow()}
            </tbody>
          </table>
        </div>
      </Box>
    );
  };

  render() {
    return <div>{this.formatData()}</div>;
  }
}

export default TotiUtilizatorii;
