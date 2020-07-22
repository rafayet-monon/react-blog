import React, { useEffect, useState } from "react";
import Api from "../../utils/Api";
import { ErrorNotification } from "../../components/Notification";
import { useParams, Redirect } from "react-router-dom";
import Detail from "./Detail";
import Header from "../../components/Header";
import backgroundImage from "../../images/loading_image.png";

const BlogDetail = () => {
  const { blogId } = useParams();
  const [blogDetail, setblogDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getBlogDetail();
    console.log(blogDetail);
  }, []);

  const getBlogDetail = async () => {
    try {
      await Api.get(`api/v1/blogs/${blogId}`).then(function (response) {
        console.log(response);
        if (response.status === 200) {
          setblogDetail(response.data.data);
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

      return <Redirect to={"/"} />;
    }
  };
  return (
    <div>
      {isLoading ? (
        <Header
          backgroundImage={backgroundImage}
          titlle="Loading..."
          slogan="Please wait"
        />
      ) : (
        <Detail
          coverImage={blogDetail.attributes.cover_image_url}
          title={blogDetail.attributes.title}
          subtitle={blogDetail.attributes.subtitle}
          details={blogDetail.attributes.details}
        />
      )}
      <hr />
    </div>
  );
};

export default BlogDetail;
