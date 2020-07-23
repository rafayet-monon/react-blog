import React from "react";
import Spinner from "../../components/Spinner";
import EditorComponent from "../../components/WysiwygEditor/ReactDraft";

const BlogForm = (props) => {
  const {
    values,
    handleSubmit,
    handleBlur,
    errors,
    isSubmitting,
    getFieldProps,
    setFieldValue,
  } = props.formik;

  return (
    <div>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <form name="sentMessage" id="contactForm" onSubmit={handleSubmit}>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Title"
                      id="title"
                      name="title"
                      required
                      data-validation-required-message="Please enter title."
                      {...getFieldProps("title")}
                    />
                    <p className="help-block text-danger validation-error">
                      {errors.title ? errors.title : null}
                    </p>
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls">
                    <label htmlFor="title">Sub-Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Sub-Title"
                      id="subtitle"
                      name="subtitle"
                      required
                      data-validation-required-message="Please enter subtitle."
                      {...getFieldProps("subtitle")}
                    />
                    <p className="help-block text-danger validation-error">
                      {errors.subtitle ? errors.subtitle : null}
                    </p>
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls">
                    <label htmlFor="cover_image">Cover Image</label>
                    <input
                      type="file"
                      className="form-control"
                      placeholder="Cover Image"
                      id="cover_image"
                      name="cover_image"
                      required
                      data-validation-required-message="Please select a cover image"
                      onChange={(event) => {
                        setFieldValue(
                          "cover_image",
                          event.currentTarget.files[0]
                        );
                      }}
                    />
                    <p className="help-block text-danger validation-error">
                      {errors.cover_image ? errors.cover_image : null}
                    </p>
                  </div>
                </div>

                <div className="control-group">
                  <div className="form-group floating-label-form-group controls">
                    <label htmlFor="details">Details</label>
                    <EditorComponent
                      editorState={values.editorState}
                      details={values.details}
                      plainDetails={values.plainDetails}
                      onChange={setFieldValue}
                      onBlur={handleBlur}
                    />
                    <p className="help-block text-danger validation-error">
                      {errors.plainDetails ? errors.plainDetails : null}
                    </p>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  id="sendMessageButton"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? <Spinner /> : "Post"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogForm;
