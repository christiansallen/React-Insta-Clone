import React from "react";
import "./PostContainer.css";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

function logout() {
  window.localStorage.clear();
  window.location.reload();
}

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 50px;
`;

const Image = styled.img`
  max-height: 450px;
`;

const Thumbnail = styled.img`
  max-height: 40px;
  border-radius: 50%;
`;

const TopBar = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ececec;
  background: #fff;
  border-radius: 5px 5px 0px 0px;
`;

const Username = styled.div`
  font-weight: bold;
  margin-left: 10px;
  font-size: 14px;
`;

const Post = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
`;

const HeartComment = styled.div`
  padding: 10px 0px;
  border-left: 1px solid #ececec;
  border-right: 1px solid #ececec;
  background: #fff;

  i {
    margin-left: 10px;
    font-size: 25px;
  }
`;

const Likes = styled.div`
  font-weight: bold;
  font-size: 14px;
  padding-left: 10px;
  border-left: 1px solid #ececec;
  border-right: 1px solid #ececec;
  background: #fff;
`;

const Logout = styled.button`
  width: 100%;
  background: rgba(73, 73, 180, 0.658);
  color: white;
  padding: 10px;
  font-size: 30px;
  width: 30%;
  margin: 0 auto;
  margin-bottom: 50px;
`;

const PostContainer = props => {
  return (
    <div>
      <PostsContainer>
        {props.dummyData.map(post => {
          return (
            <Post>
              <TopBar>
                <Thumbnail src={post.thumbnailUrl} alt={post.username} />
                <Username>{post.username}</Username>
              </TopBar>
              <Image src={post.imageUrl} alt={post.username} />
              <HeartComment>
                <i
                  className="far fa-heart"
                  onClick={() => props.liked(post.username)}
                  style={props.completed ? { color: "red" } : null}
                />
                <i class="far fa-comment" />
              </HeartComment>
              <Likes>{post.likes} likes</Likes>
              <CommentSection
                comments={post.comments}
                handleChange={props.handleChange}
                addNewComment={props.addNewComment}
                username={post.username}
                newComment={props.newComment}
                timestamp={post.timestamp}
              />
            </Post>
          );
        })}
        <Logout onClick={logout}>Logout</Logout>
      </PostsContainer>
    </div>
  );
};

PostContainer.propTypes = {
  thumbnailUrl: PropTypes.string,
  username: PropTypes.string,
  imageUrl: PropTypes.string,
  likes: PropTypes.string,
  comments: PropTypes.array,
  timestamp: PropTypes.string
};

export default PostContainer;
