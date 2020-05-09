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
    localStorage.removeItem("logged_in");
    localStorage.removeItem("token");
    this.props.history.push("/");
  }
  state = {};
  render() {
    return (
      <Box>
        <div>
          Bine ai venit, <i>{localStorage.getItem("username")}</i>!
          <button type="button" onClick={this.handleSubmit}>
            Log out
          </button>
        </div>
      </Box>
    );
  }
}

export default withRouter(Dashboard);
