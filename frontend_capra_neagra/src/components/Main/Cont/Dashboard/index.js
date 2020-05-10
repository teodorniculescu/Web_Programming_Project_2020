import React, { Component } from "react";
import Box from "../../Box/Box";
import { withRouter } from "react-router-dom";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.clearUserDataAndPerm();
    this.props.history.push("/");
  }
  clearUserDataAndPerm() {
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    localStorage.removeItem("role");
    localStorage.removeItem("logged_in");
    localStorage.removeItem("token");
  }
  state = {};
  render() {
    return (
      <Box>
        <div>
          Bine ai venit, <i>{localStorage.getItem("name")}</i>!
          <button type="button" onClick={this.handleSubmit}>
            Log out
          </button>
        </div>
      </Box>
    );
  }
}

export default withRouter(Dashboard);
