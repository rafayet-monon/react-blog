import React, { useEffect, useState } from "react";
import backgroundImage from "../../images/home-bg.jpg";
import Header from "../../components/Header";
import BlogList from "../../components/BlogList";
import Api from "../../utils/Api";
import { ErrorNotification } from "../../components/Notification";

const Home = () => {
  const [blogData, setBlogData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    try {
      await Api.get("api/v1/blogs").then(function (response) {
        if (response.status === 200) {
          setBlogData(response.data.data);
          setIsLoading(false);
        }
      });
    } catch (error) {
      if (error.response) {
        let error_response = error.response.data.errors;
        ErrorNotification(error_response.title);
      } else {
        ErrorNotification(`Request failed: ${error}`);
      }
    }
  };
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
            {isLoading ? (
              <h1>Loading Blogs..</h1>
            ) : (
              <BlogList blogList={blogData} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
