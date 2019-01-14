import React from "react";

const CommentSection = props => {
  return (
    <div>
      {console.log(props.comments)}
      {props.comments.map(comment => {
        return comment.text;
      })}
    </div>
  );
};

CommentSection.propTypes = {};

export default CommentSection;
