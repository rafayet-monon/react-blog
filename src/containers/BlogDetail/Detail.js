import React from "react";
import Header from "../../components/Header";
import Interweave from "interweave";

const Detail = ({ coverImage, title, subtitle, details }) => {
  return (
    <div>
      <Header
        backgroundImage={process.env.REACT_APP_BACKEND_URL + coverImage}
        titlle={title}
        slogan={subtitle}
      />

      <article>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <Interweave content={details} />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Detail;
