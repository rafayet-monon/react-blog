import React from "react";
import PreviewItem from "./PreviewItem";

const BlogList = ({ blogList }) => {
  return (
    <div>
      {blogList.length === 0 ? (
        <h1>No blogs found</h1>
      ) : (
        blogList.map((blog) => (
          <PreviewItem
            title={blog.attributes.title}
            subtitle={blog.attributes.subtitle}
            posted_at={blog.attributes.posted_at}
            posted_by={blog.attributes.posted_by}
            blog_id={blog.id}
            key={blog.id}
          />
        ))
      )}
      <hr />
    </div>
  );
};

export default BlogList;
