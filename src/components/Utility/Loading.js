import React from "react";

const Loading = props => {
  return (
    <div className="loading-thing">
    <span className="loading-thing__text">{props.text}</span>
  </div>
  );
};

export default Loading;
