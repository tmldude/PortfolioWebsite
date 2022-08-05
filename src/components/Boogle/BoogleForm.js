import React, { Component } from "react";
import "../../sass/main.scss";
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
      <div className="boogle-form">
        <form onSubmit={this.handleSubmit}>
          <span to="/" className="boogle-form__span"> Boogle </span>
          <label className="boogle-form__label">Type in what you want to search!</label>
          <input
            type="text"
            className="boogle-form__input"
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
