import React, { Fragment } from "react";
import BoogleForm from "../components/Boogle/BoogleForm";
import BoogleOutput from "../components/Boogle/BoogleOutput";

const Boogle = () => {
  return (
    <Fragment>
      <BoogleForm></BoogleForm>
      <hr
        style={{
          color: "#000000",
          backgroundColor: "#000000",
          height: 0.5,
          borderColor: "#000000",
        }}
      />
      <BoogleOutput></BoogleOutput>
    </Fragment>
  );
};

export default Boogle;
