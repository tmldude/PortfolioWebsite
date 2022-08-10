import React from "react";
import "../sass/main.scss";
import FoomForm from "../components/Foom/FoomForm";
import FoomOutput from "../components/Foom/FoomOutput";

const Foom = () => {
  return (
    <div className="boogle-background">
      <FoomForm></FoomForm>
      <hr className="solid-black-hr" />
      <FoomOutput></FoomOutput>
    </div>
  );
};

export default Foom;
