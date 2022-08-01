import React, { Component } from "react";
import classes from "./BoogleForm.module.css";
import axios from "axios";

class BoogleForm extends Component {
  state = { search: "", searchID: "" };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    axios
      .post("http://localhost:8000/wel/", {
        search: this.state.search,
        searchID: Math.random().toString(),
      })
      .then((res) => {
        this.setState({
          search: "",
          searchID: "",
        });
      })
      .catch((err) => {});
  };

  render() {
    return (
      <div className={classes.input}>
        <form onSubmit={this.handleSubmit}>
          <span to="/"> Boogle </span>
          <label>Type in what you want to search!</label>
          <input
            type="text"
            className="form-control"
            placeholder="Type your question!"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={this.state.search}
            name="search"
            onChange={this.handleInput}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default BoogleForm;
