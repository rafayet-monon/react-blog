import React from "react";
import backgroundImage from "../../images/home-bg.jpg";
import Header from "../../components/Header";
import BlogList from "../../components/BlogList";

const Home = () => {
  return (
    <div>
      <Header
        backgroundImage={backgroundImage}
        titlle="The Blog"
        slogan="By React"
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <BlogList />
            <BlogList />
            <BlogList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
