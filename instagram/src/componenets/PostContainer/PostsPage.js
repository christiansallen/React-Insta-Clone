import React, { Component } from "react";
import PostContainer from "./PostContainer";
import SearchBar from "../SearchBar/SearchBar";
import dummyData from "./../../dummy-data";
import styled, { css } from "styled-components";

class PostsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyData: dummyData,
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

  render() {
    return (
      <div className="posts-page">
        <SearchBar
          handleChange={this.handleChange}
          searchValue={this.state.searchValue}
          search={this.search}
        />
        <PostContainer
          dummyData={this.state.dummyData}
          addNewComment={this.addNewComment}
          handleChange={this.handleChange}
          newComment={this.newComment}
          liked={this.liked}
          completed={this.completed}
        />
      </div>
    );
  }
}

export default PostsPage;
