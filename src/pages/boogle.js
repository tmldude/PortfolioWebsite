import React, { Fragment } from "react";
import "../sass/main.scss";
import BoogleForm from "../components/Boogle/BoogleForm";
import BoogleOutput from "../components/Boogle/BoogleOutput";

const Boogle = () => {
  return (
    <Fragment>
      <BoogleForm></BoogleForm>
      <hr className="solid-black-hr" />
      <BoogleOutput></BoogleOutput>
    </Fragment>
  );
};

export default Boogle;
