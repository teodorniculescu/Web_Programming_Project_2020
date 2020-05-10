import React, { Component } from "react";
import Box from "../../Box/Box";
import { withRouter, Link } from "react-router-dom";
import axios from "axios";

class Inregistrare extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = { Name: "", Email: "", Username: "", Password: "" };
    this.handlePassword = this.handlePassword.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleUsername(event) {
    this.setState({ Username: event.target.value });
  }
  handlePassword(event) {
    this.setState({ Password: event.target.value });
  }
  handleEmail(event) {
    this.setState({ Email: event.target.value });
  }
  handleName(event) {
    this.setState({ Name: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    const payload = {
      username: this.state.Username,
      password: this.state.Password,
      name: this.state.Name,
      email: this.state.Email,
    };
    console.log(payload);
    const address = "http://localhost:3001/api/v1/users/register/request";

    axios
      .post(address, payload)
      .then((res) => {
        this.setState({
          output: "User sucessfully created!",
        });
        localStorage.setItem("token", res.data);
        localStorage.setItem("username", this.state.Name);
        localStorage.setItem("logged_in", "true");
      })
      .catch((error) => {
        this.setState({ output: "error" });
        console.log(error);
      });
  }
  getMessageResultSubmit() {
    if (this.state.output === undefined) return <div></div>;
    return <div>{this.state.output}</div>;
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
                onChange={this.handleUsername}
              ></input>
            </label>
            <label>
              <input
                type="password"
                placeholder="Password"
                onChange={this.handlePassword}
              ></input>
            </label>
            <label>
              <input
                type="text"
                placeholder="Name"
                onChange={this.handleName}
              ></input>
            </label>
            <label>
              <input
                type="text"
                placeholder="Email"
                onChange={this.handleEmail}
              ></input>
            </label>
            <label>
              <input type="submit" value="Sign up!"></input>
            </label>
            {this.getMessageResultSubmit()}
            <Link to="/cont/intrare">Am deja cont!</Link>
          </form>
        </div>
      </Box>
    );
  }
}

export default withRouter(Inregistrare);
