import React from "react";
import backgroundImage from "../../images/typewriter.jpeg";
import Header from "../../components/Header";
import EditorComponent from "../../components/WysiwygEditor/ReactDraft";
// import Spinner from "../../components/Spinner";

const WriteBlog = () => {
  return (
    <div>
      <Header
        backgroundImage={backgroundImage}
        titlle="Write Your Heart Out"
        slogan="Publish A Blog"
      />

      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <form name="sentMessage" id="contactForm">
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls">
                    <label htmlFor="title">Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Title"
                      id="name"
                      required
                      data-validation-required-message="Please enter your user name."
                    />
                    <p className="help-block text-danger validation-error"></p>
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls">
                    <label htmlFor="title">Sub-Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Sub-Title"
                      id="name"
                      required
                      data-validation-required-message="Please enter your user name."
                    />
                    <p className="help-block text-danger validation-error"></p>
                  </div>
                </div>
                <div className="control-group">
                  <div className="form-group floating-label-form-group controls">
                    <label htmlFor="cover-image">Cover Image</label>
                    <input
                      type="file"
                      className="form-control"
                      placeholder="Cover Image"
                      id="name"
                      required
                      data-validation-required-message="Please enter your user name."
                    />
                    <p className="help-block text-danger validation-error"></p>
                  </div>
                </div>

                <div className="control-group">
                  <div className="form-group floating-label-form-group controls">
                    <EditorComponent />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  id="sendMessageButton"
                  // disabled={isSubmitting}
                >
                  Post
                  {/*{isSubmitting ? <Spinner /> : "Login"}*/}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default WriteBlog;
