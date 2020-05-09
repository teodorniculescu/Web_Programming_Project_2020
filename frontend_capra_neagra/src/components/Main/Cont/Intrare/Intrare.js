import React, { Component } from "react";
import Box from "../../Box/Box";
import "./Intrare.module.scss";
import axios from "axios";
import { withRouter } from "react-router-dom";

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
        this.setState({ output: "User sucessfully authenticated!" });
        localStorage.setItem("token", res.data);
        localStorage.setItem("username", this.state.Username);
        localStorage.setItem("logged_in", "true");
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({ output: "error" });
        console.log(error);
      });
  }
  getForm() {
    return (
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
        </form>
      </div>
    );
  }
  render() {
    return <Box>{this.getForm()}</Box>;
  }
}

export default withRouter(Intrare);
