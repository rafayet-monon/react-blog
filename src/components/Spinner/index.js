import React from "react";
import Loader from "react-loader-spinner";

const Spinner = () => {
  return (
    <Loader
      type="Bars"
      color="#000000"
      height={20}
      width={60}
      timeout={3000} //3 secs
    />
  );
};

export default Spinner;
