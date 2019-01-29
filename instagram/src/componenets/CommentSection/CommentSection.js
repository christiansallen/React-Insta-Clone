import React from "react";
import "./CommentSection.css";
import PropTypes from "prop-types";
import styled from "styled-components";

const Comments = styled.div`
  display: flex;
  padding-left: 10px;
  background: #fff;
  border-left: 1px solid #ececec;
  border-right: 1px solid #ececec;
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 13px;
  margin-top: 5px;
`;

const Comment = styled.div`
  font-size: 13px;
  margin-left: 5px;
  margin-top: 5px;
`;

const Input = styled.input`
  background: white;
  padding: 10px;
  border: 1px solid #ececec;
  font-size: 13px;
  display: flex;
  align-items: center;
  color: #b3b0b8;
  border-radius: 0px 0px 5px 5px;
  width: 100%;
  box-sizing: border-box;

  ::placeholder {
    color: #b3b0b8;
  }
`;

const Timestamp = styled.div`
  background: white;
  border-left: 1px solid #ececec;
  border-right: 1px solid #ececec;
  font-size: 11px;
  color: #b3b0b8;
  padding: 10px 0px 10px 10px;
`;

const CommentSection = props => {
  return (
    <div className="comment-section">
      {props.comments.map(comment => {
        return (
          <Comments>
            <Name>{comment.username}</Name>
            <Comment>{comment.text}</Comment>
          </Comments>
        );
      })}
      <Timestamp>{props.timestamp}</Timestamp>
      <div>
        <form onSubmit={e => props.addNewComment(e, props.username)}>
          <Input
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
