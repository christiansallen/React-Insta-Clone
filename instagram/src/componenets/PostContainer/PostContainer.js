import React from "react";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection";

const PostContainer = props => {
  const comments = [];
  props.dummyData.map(post => {
    return comments.push(post.comments);
  });
  console.log(comments);
  console.log(props.dummyData);

  return (
    <div>
      <div className="post-container">
        {props.dummyData.map(post => {
          return (
            <div className="post">
              <div className="topbar">
                <img
                  src={post.thumbnailUrl}
                  alt={post.username}
                  className="thumbnail"
                />
                <div className="username">{post.username}</div>
              </div>
              <img src={post.imageUrl} alt={post.username} className="image" />
            </div>
          );
        })}
      </div>
      <CommentSection comments={comments} />
    </div>
  );
};

PostContainer.propTypes = {};

export default PostContainer;
