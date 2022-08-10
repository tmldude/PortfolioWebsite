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
      .get(process.env.REACT_APP_BACK)
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
        <div className="boogle-output">
          <ul className="boogle-output__ul">
            {this.state.details.map((site) => (
              <a
                href={site.url}
                target="_blank"
                rel="noreferrer"
                className="foom-link"
                key={site.url}
              >
                <li className="boogle-output__li" >
                  {/* <h1 className="rainbow-h1">{site.text}</h1> */}

                  {site.text === "" ? site.url : site.text}
                </li>
              </a>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default BoogleOutput;
