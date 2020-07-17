import React from "react";
import backgroundImage from "../../images/pure-black.jpg";
import Header from "../../components/Header";

const NotFound = () => {
  return (
    <div>
      <Header
        backgroundImage={backgroundImage}
        titlle="404"
        slogan="Page Not Found"
      />
    </div>
  );
};

export default NotFound;
