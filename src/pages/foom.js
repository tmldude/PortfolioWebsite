import React from "react";

import { FoomProvider } from "../components/Foom/FoomConext";
import FoomWrapper from "../components/Foom/FoomWrapper";

const Foom = () => {
  return (
    <FoomProvider>
      <FoomWrapper></FoomWrapper>
    </FoomProvider>
  );
};

export default Foom;
