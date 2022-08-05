import React, { Component } from "react";
import "../../sass/main.scss";
import axios from "axios";


class BoogleOutput extends Component {
  state = {
    details: [],
    searchID: "",
  };

  componentDidMount() {
    let data;

    axios
      .get("http://localhost:8000/wel/")
      .then((res) => {
        data = res.data;
        this.setState({
          details: data.webData,
          searchID: data.searchID,
        });
      })
      .catch((err) => {});
  }

  render() {
    return (
      <div>
        {/* <div>{this.state.searchID}</div> */}
        {this.state.details.map((site) => (
          <div className="boogle-output" key={site.url}>
            <ul className="boogle-output__ul">
              <blockquote>
                <li className="boogle-output__li">
                  <h1 className="rainbow-h1">{site.text}</h1>
                  <a href={site.url} target="_blank" rel="noreferrer">
                    {site.text}
                  </a>
                </li>
              </blockquote>
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default BoogleOutput;
