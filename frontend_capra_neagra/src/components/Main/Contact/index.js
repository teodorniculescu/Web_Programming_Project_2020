import React, { Component } from "react";
import Box from "../Box/Box";
import styles from "./Styles.module.scss";
import axios from "axios";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = { message: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    event.preventDefault();
    this.setState({ message: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.message);
  }
  getAllMessages = () => {
    const address = "http://localhost:3001/api/v1/contact/";
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
    const role = localStorage.getItem("role");
    if (role !== "suport" || role !== "admin") return;
    this.getAllMessages();
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
        </div>
      </Box>
    );
  }
}

export default Contact;
