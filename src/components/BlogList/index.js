import React from "react";
import { NavLink } from "react-router-dom";

const BlogList = () => {
  return (
    <div>
      <div className="post-preview">
        <NavLink to="/blog-detail">
          <h2 className="post-title">
            Man must explore, and this is exploration at its greatest
          </h2>
          <h3 className="post-subtitle">
            Problems look mighty small from 150 miles up
          </h3>
        </NavLink>
        <p className="post-meta">
          Posted by
          <a href="#">Start Bootstrap</a>
          on September 24, 2019
        </p>
      </div>
      <hr />
    </div>
  );
};

export default BlogList;
