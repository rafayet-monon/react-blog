import { useState } from "react";
import * as Yup from "yup";
import Api from "../../utils/Api";
import {
  ErrorNotification,
  SuccessNotification,
} from "../../components/Notification";
import { EditorState } from "draft-js";

const BlogHandler = () => {
  const [status, setStatus] = useState(false);
  const token = localStorage.getItem("token");

  const FILE_SIZE = 5000 * 1024; // 5MB
  const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

  const initialValues = {
    title: "",
    subtitle: "",
    cover_image: null,
    editorState: new EditorState.createEmpty(),
    details: "",
    plainDetails: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Required"),
    subtitle: Yup.string().required("Required"),
    plainDetails: Yup.string()
      .required("Required")
      .min(100, "Must be more than 100 characters"),
    cover_image: Yup.mixed()
      .required("A cover image is required")
      .test(
        "fileSize",
        "File too large",
        (value) => value && value.size <= FILE_SIZE
      )
      .test(
        "fileFormat",
        "Unsupported Format",
        (value) => value && SUPPORTED_FORMATS.includes(value.type)
      ),
  });

  const handleSubmit = async (values) => {
    try {
      console.log(values);
      const data = new FormData();
      data.append("blog[cover_image]", values.cover_image);
      data.append("blog[title]", values.title);
      data.append("blog[subtitle]", values.subtitle);
      data.append("blog[details]", values.details);

      await Api.post("api/v1/blogs", data, {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
        },
      }).then(function (response) {
        if (response.status === 200) {
          SuccessNotification("Blog Posted!");
          setStatus(true);

          return response.data;
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

  return {
    initialValues,
    validationSchema,
    handleSubmit,
    status,
  };
};

export default BlogHandler;
