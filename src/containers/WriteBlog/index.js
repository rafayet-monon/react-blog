import React from "react";
import backgroundImage from "../../images/contact-bg.jpg";
import Header from "../../components/Header";

const WriteBlog = () => {
  return (
    <div>
      <Header
        backgroundImage={backgroundImage}
        titlle="Write"
        slogan="Blog"
      />
      <hr />
    </div>
  );
};

export default WriteBlog;
