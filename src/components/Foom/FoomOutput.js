import React, { Component } from "react";
import "../../sass/main.scss";
import axios from "axios";

const dataExtractor = (data) => {
  let reorganized = [];
  for (const key in data) {
    reorganized.push({
      url: data[key].url,
      text: data[key].text,
      num: key,
    });
  }
  return reorganized;
};

class BoogleOutput extends Component {
  state = {
    details: [],
    searchID: "",
  };

  componentDidMount() {
    let data;
    axios
      .get(process.env.REACT_APP_BACK_GET)
      .then((res) => {
        data = res.data;
        console.log(data)
        this.setState({
          details: dataExtractor(data.webData),
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
            {this.state.details.map((data) => (
              <a
                href={data.url}
                target="_blank"
                rel="noreferrer"
                className="foom-link"
                key={data.num}
              >
                <li className="boogle-output__li">
                  {/* <h1 className="rainbow-h1">{site.text}</h1> */}

                  {data.text === "" ? data.url : data.text}
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
