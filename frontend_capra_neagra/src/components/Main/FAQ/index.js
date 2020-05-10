import React, { Component } from "react";
import Box from "../Box/Box";
import styles from "./Styles.module.scss";
import axios from "axios";
import eye from "./eye.svg";
import pencil from "./pencil.svg";

class FAQ extends Component {
  handleChange(event) {
    event.preventDefault();
    this.setState({ answer: event.target.value });
  }
  handleSubmit(id) {
    const address = `http://localhost:3001/api/v1/contact/answer/${id}`;
    const token = localStorage.getItem("token");
    axios
      .put(
        address,
        { answer: this.state.answer },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        this.componentDidMount();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  constructor(props) {
    super(props);
    this.state = { answer: "", data: [] };
    this.handleChange = this.handleChange.bind(this);
  }
  state = {};
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
    this.getAllMessages();
  }
  authorized() {
    const role = localStorage.getItem("role");
    if (role === "admin" || role === "suport") return true;
    return false;
  }
  toggleValid(id) {
    const address = `http://localhost:3001/api/v1/contact/togglevalid/${id}`;
    const token = localStorage.getItem("token");
    axios
      .put(
        address,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        this.componentDidMount();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  getToggleVisible(id) {
    if (!this.authorized()) return null;
    return (
      <i>
        <img
          src={eye}
          alt=""
          onClick={() => {
            this.toggleValid(id);
          }}
        />
      </i>
    );
  }
  editComment(id) {
    if (this.authorized()) {
      return (
        <div className={styles.container}>
          <form>
            <textarea
              name="subject"
              placeholder="Change the answer!"
              onChange={this.handleChange}
            ></textarea>
            <label>
              <input
                type="submit"
                value="Submit"
                onClick={(event) => {
                  event.preventDefault();
                  this.handleSubmit(id);
                }}
              ></input>
            </label>
          </form>
        </div>
      );
    }
    return null;
  }
  getContetn(message, id, answer) {
    return (
      <div className={styles.qanda}>
        <div className={styles.top}>
          {message}
          <div className={styles.utils}>{this.getToggleVisible(id)}</div>
        </div>
        <hr></hr>
        {answer}
        <br></br>
        {this.editComment(id)}
      </div>
    );
  }
  getTableRow() {
    return this.state.data.map((student, index) => {
      const { id, message, answer, valid } = student;
      if (valid === 0)
        if (this.authorized()) {
          return (
            <Box key={id}>
              <div className={styles.hidden_answer}>
                {this.getContetn(message, id, answer)}
              </div>
            </Box>
          );
        } else {
          return null;
        }
      else
        return (
          <Box key={id}>
            <div className={styles.show_answer}>
              {this.getContetn(message, id, answer)}
            </div>
          </Box>
        );
    });
  }

  render() {
    return <div>{this.getTableRow()}</div>;
  }
}

export default FAQ;
