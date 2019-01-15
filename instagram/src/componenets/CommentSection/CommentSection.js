import React from "react";
import "./CommentSection.css";
import PropTypes from "prop-types";

const CommentSection = props => {
  return (
    <div>
      {console.log(props.comments)}
      {props.comments.map(comment => {
        return (
          <div className="comments">
            <div className="name">{comment.username}</div>
            <div className="comment">{comment.text}</div>
          </div>
        );
      })}
    </div>
  );
};

CommentSection.propTypes = {
  username: PropTypes.string,
  text: PropTypes.text
};

export default CommentSection;
