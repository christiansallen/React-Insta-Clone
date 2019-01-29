import React from "react";
import Login from "./../Login/Login";
import PostsPage from "./PostsPage";

const authenticate = App => Login =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false
      };
    }

    componentDidMount = () => {
      if (!localStorage.getItem("user")) {
        this.setState({ loggedIn: false });
      } else {
        this.setState({ loggedIn: true });
      }
    };

    authentication = () => {
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
