import React from "react";
import "./CommentSection.css";
import PropTypes from "prop-types";

const CommentSection = props => {
  return (
    <div className="comment-section">
      {props.comments.map(comment => {
        return (
          <div className="comments">
            <div className="name">{comment.username}</div>
            <div className="comment">{comment.text}</div>
          </div>
        );
      })}
      <div className="timestamp">{props.timestamp}</div>
      <div className="add-comment">
        <form
          className="newComment"
          onSubmit={e => props.addNewComment(e, props.username)}
        >
          <input
            className="input"
            name="newComment"
            onChange={props.handleChange}
            type="text"
            placeholder="Add a comment..."
            value={props.newComment}
          />
        </form>
      </div>
    </div>
  );
};

CommentSection.propTypes = {
  username: PropTypes.string,
  text: PropTypes.text,
  comments: PropTypes.array
};

export default CommentSection;
