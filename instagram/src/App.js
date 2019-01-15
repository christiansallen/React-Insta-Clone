import React, { Component } from "react";
import "./App.css";
import PostContainer from "./componenets/PostContainer/PostContainer";
import SearchBar from "./componenets/SearchBar/SearchBar";
import dummyData from "./dummy-data";
import PropTypes from "prop-types";

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

  search = e => {
    e.preventDefault();
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
  };

  componentDidMount() {
    fetch(dummyData)
      .then(res => res.json())
      .then(this.setState({ dummyData: dummyData }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <SearchBar
          handleChange={this.handleChange}
          searchValue={this.state.searchValue}
          search={this.search}
        />
        <PostContainer
          dummyData={this.state.dummyData}
          addNewComment={this.addNewComment}
          handleChange={this.handleChange}
          newComment={this.state.newComment}
          liked={this.liked}
          completed={this.state.completed}
        />
      </div>
    );
  }
}

App.propTypes = {
  dummyData: PropTypes.object,
  newComment: PropTypes.string
};

export default App;
