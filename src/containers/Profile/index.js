import React from "react";
import backgroundImage from "../../images/contact-bg.jpg";
import Header from "../../components/Header";

const Profile = () => {
  return (
    <div>
      <Header
        backgroundImage={backgroundImage}
        titlle="Profile"
        slogan="User Profile"
      />
      <hr />
    </div>
  );
};

export default Profile;
