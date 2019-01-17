import React from "react";
import PostContainer from "./PostContainer";
import SearchBar from "../SearchBar/SearchBar";

const PostsPage = props => {
  return (
    <div className="posts-page">
      <SearchBar
        handleChange={props.handleChange}
        searchValue={props.searchValue}
        search={props.search}
      />
      <PostContainer
        dummyData={props.dummyData}
        addNewComment={props.addNewComment}
        handleChange={props.handleChange}
        newComment={props.newComment}
        liked={props.liked}
        completed={props.completed}
      />
    </div>
  );
};

export default PostsPage;
