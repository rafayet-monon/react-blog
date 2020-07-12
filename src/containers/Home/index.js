import React, { Component } from "react";
import backgroundImage from "../../images/home-bg.jpg";
import Header from "../../components/Header";
import BlogList from "../../components/BlogList";
import Api from "../../utils/Api";

class Home extends Component {
  state = {
    isLoading: true,
  };

  async componentDidMount() {
    try {
      let homeData = await Api.get("", {
        credentials: "include",
        params: {
          results: 1,
          inc: "name,email,picture",
        },
      });
      console.log(homeData);
    } catch (e) {
      console.log(`Request failed: ${e}`);
    }

    this.setState({
      isLoading: false,
    });
  }

  render() {
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
              <BlogList />
              <BlogList />
              <BlogList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
