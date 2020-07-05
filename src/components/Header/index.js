import React from "react";

const Header = ({ backgroundImage, titlle, slogan }) => {
  return (
    <div>
      <header
        className="masthead"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="site-heading">
                <h1>{titlle}</h1>
                <span className="subheading">{slogan}</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
