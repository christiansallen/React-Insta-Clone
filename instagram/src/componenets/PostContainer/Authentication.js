import React from "react";
import Login from "./../Login/Login";
import PostsPage from "./PostsPage";

const authenticate = App => LoginPage =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false,
        user: {}
      };
    }

    toggle = () => {
      const toggled = this.setState({ loggedIn: true });
      return toggled;
    };

    authentication = () => {
      this.toggle();
      if (this.state.loggedIn === false) {
        return <Login />;
      } else {
        return <PostsPage />;
      }
    };

    render() {
      return this.authentication();
    }
  };

export default authenticate;
