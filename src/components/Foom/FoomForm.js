import React, { Component } from "react";
import "../../sass/main.scss";
import axios from "axios";

class FoomForm extends Component {
  state = {
    search: "",
    searchID: "",
  };
  
  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    axios
      .post(process.env.REACT_APP_BACK_POST, {
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
