import React, { Component } from "react";
import Box from "../Box/Box";
import styles from "./Styles.module.scss";
import axios from "axios";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "", output: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    event.preventDefault();
    this.setState({ message: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    event.preventDefault();
    const payload = {
      message: this.state.message,
      from_id: localStorage.getItem("id"),
    };
    console.log(payload);
    const address = "http://localhost:3001/api/v1/contact";

    axios
      .post(address, payload)
      .then((res) => {
        this.setState({
          output: "Successfuly sent the question! :)",
        });
      })
      .catch((error) => {
        this.setState({ output: "error" });
        console.log(error);
      });
  }

  state = {};
  render() {
    return (
      <Box>
        <div className={styles.container}>
          <form>
            <label>Subject</label>
            <textarea
              name="subject"
              placeholder="Write something.."
              onChange={this.handleChange}
            ></textarea>
            <label>
              <input
                type="submit"
                value="Submit"
                onClick={this.handleSubmit}
              ></input>
            </label>
          </form>
          {this.state.output}
        </div>
      </Box>
    );
  }
}

export default Contact;
