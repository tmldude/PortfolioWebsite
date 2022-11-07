import React from "react";

const Loading = props => {
  return (
    <div className="loading-thing">
      <span className="loading-thing__text">{props.text}</span>
      <span className="dot-falling">...</span>
  </div>
  );
};

export default Loading;
