import React, { Component } from "react";
import backgroundImage from "../../images/home-bg.jpg";
import Header from "../../components/Header";
import BlogList from "../../components/BlogList";
import Api from "../../utils/Api";

class Home extends Component {
  state = {
    isLoading: true,
    _isMounted: false,
  };

  componentDidMount() {
    let token = localStorage.getItem("token");

    try {
      let homeData = Api.get("", {
        headers: {
          Authorization: token ? `Bearer ${token}` : "",
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
