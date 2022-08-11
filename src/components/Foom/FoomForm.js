import React, { Component } from "react";
import "../../sass/main.scss";
import axios from "axios";

class FoomForm extends Component {
  state = {
    search: "",
    searchID: "",
    debug: true,
  };
  
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    axios
      .post(this.state.debug ? "http://127.0.0.1:8000/wel/" : process.env.REACT_APP_BACK, {
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
      <div className="foom-form">
        <form onSubmit={this.handleSubmit}>
          <h1 to="/" className="foom-form__h1">
            {" "}
            Foom{" "}
          </h1>
          {/* <label className="Foom-form__label">Type in what you want to search!</label> */}
          <input
            type="text"
            className="foom-form__input"
            placeholder="Type your question!"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={this.state.search}
            name="search"
            onChange={this.handleInput}
          />
          <button className="foom-form__button" type="submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default FoomForm;
