import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import PropTypes from "prop-types";
import PostsPage from "./componenets/PostContainer/PostsPage";
import Login from "./componenets/Login/Login";
import authenticate from "./componenets/PostContainer/Authentication";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyData: [],
      newComment: "",
      completed: false,
      searchValue: ""
    };
  }

  componentDidMount() {
    this.setState({ dummyData: dummyData });
  }

  search = (e, searchValue) => {
    e.preventDefault();
    const newData = this.state.dummyData.filter(post => {
      return searchValue === post.username;
    });
    this.setState({ dummyData: newData, searchValue: "" });
  };

  liked = username => {
    const post = this.state.dummyData.map(post => {
      if (post.username === username) {
        if (this.state.completed === false) {
          post.likes++;
          this.setState({ dummyData: post, completed: true });
        } else {
          post.likes--;
          this.setState({ dummyData: post, completed: false });
        }
      }
      return post;
    });
    this.setState({ dummyData: post });
  };

  addNewComment = (e, username) => {
    e.preventDefault();
    const data = this.state.dummyData.map(post => {
      if (post.username === username) {
        post.comments.push({
          text: this.state.newComment,
          username: username
        });
      }
      return post;
    });
    this.setState({ dummyData: data, newComment: "" });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    if (this.state.searchValue === "") {
      this.setState({ dummyData: dummyData });
    }
  };

  login = () => {
    console.log("login");
  };

  render() {
    return (
      <div className="App">
        <PostsPage
          handleChange={this.handleChange}
          searchValue={this.state.searchValue}
          search={this.search}
          dummyData={this.state.dummyData}
          addNewComment={this.addNewComment}
          newComment={this.state.newComment}
          liked={this.liked}
          completed={this.state.completed}
        />
        <Login login={this.login} />
      </div>
    );
  }
}

const Authenticate = authenticate(App)(Login);

App.propTypes = {
  dummyData: PropTypes.object,
  newComment: PropTypes.string
};

export default App;
