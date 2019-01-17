import React, { Component } from "react";
import "./App.css";
import PostsPage from "./componenets/PostContainer/PostsPage";
import Login from "./componenets/Login/Login";
import authenticate from "./componenets/PostContainer/Authentication";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <PostsPage />
        <Login />
      </div>
    );
  }
}

export default authenticate(App)(Login);
