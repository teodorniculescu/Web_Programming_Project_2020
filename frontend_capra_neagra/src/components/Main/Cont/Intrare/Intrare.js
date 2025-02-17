import React, { Component } from "react";
import Box from "../../Box/Box";
import "./Intrare.module.scss";
import axios from "axios";
import { withRouter, Link } from "react-router-dom";

class Intrare extends Component {
  constructor(props) {
    super(props);
    this.state = { Username: "", Password: "" };
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {};
  handleChangeUsername(event) {
    this.setState({ Username: event.target.value });
  }
  handleChangePassword(event) {
    this.setState({ Password: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const payload = {
      username: this.state.Username,
      password: this.state.Password,
    };
    const address = "http://localhost:3001/api/v1/users/login";

    axios
      .post(address, payload)
      .then((res) => {
        localStorage.setItem("token", res.data);
        this.getUserDataAndPerm();
      })
      .catch((error) => {
        this.setState({ output: "error" });
        console.log(error);
      });
  }

  getUserDataAndPerm() {
    const token = localStorage.getItem("token");
    const address = `http://localhost:3001/api/v1/users/dataperm/${this.state.Username}`;
    axios
      .get(address, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        this.setState({ output: "User sucessfully authenticated!" });
        this.setUserDataAndPerm(res.data[0]);
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({ output: "error" });
        console.log(error);
      });
  }
  setUserDataAndPerm(data) {
    localStorage.setItem("id", data.id);
    localStorage.setItem("name", data.name);
    localStorage.setItem("role", data.role);
    localStorage.setItem("logged_in", "true");
  }
  render() {
    return (
      <Box>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input
                type="text"
                placeholder="Username"
                onChange={this.handleChangeUsername}
              ></input>
            </label>
            <label>
              <input
                type="password"
                placeholder="Password"
                onChange={this.handleChangePassword}
              ></input>
            </label>
            <label>
              <input type="submit" value="Log in"></input>
            </label>
            <Link to="/cont/inregistrare">Creaza un cont nou!</Link>
          </form>
        </div>
      </Box>
    );
  }
}

export default withRouter(Intrare);
