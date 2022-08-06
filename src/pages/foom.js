import React, { Fragment } from "react";
import "../sass/main.scss";
import FoomForm from "../components/Foom/FoomForm";
import FoomOutput from "../components/Foom/FoomOutput";

const Foom = () => {
  return (
    <Fragment>
      <FoomForm></FoomForm>
      <hr className="solid-black-hr" />
      <FoomOutput></FoomOutput>
    </Fragment>
  );
};

export default Foom;
