import React from "react";
import { NavLink } from "react-router-dom";

const PreviewItem = ({ title, subtitle, posted_at, posted_by, blog_id,  }) => {
  return (
    <div className="post-preview">
      <NavLink to={`/blog-detail/${blog_id}`}>
        <h2 className="post-title">{title}</h2>
        <h3 className="post-subtitle">{subtitle}</h3>
      </NavLink>
      <p className="post-meta">
        Posted by
        <span className="list-span">{posted_by}</span>
        on <span className="list-span">{posted_at}</span>
      </p>
    </div>
  );
};

export default PreviewItem;
