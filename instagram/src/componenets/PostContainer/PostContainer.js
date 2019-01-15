import React from "react";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";

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
              <div className="heart-comment">
                <i className="far fa-heart" />
                <i class="far fa-comment" />
              </div>
              <div className="likes">{post.likes} likes</div>
              <CommentSection comments={post.comments} />
              <div className="timestamp">{post.timestamp}</div>
              <div className="add-comment">
                <p>Add a comment...</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

PostContainer.PropTypes = {
  thumbnailUrl: PropTypes.string,
  username: PropTypes.string,
  imageUrl: PropTypes.string,
  likes: PropTypes.string,
  comments: PropTypes.array,
  timestamp: PropTypes.string
};

export default PostContainer;
