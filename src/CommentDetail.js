import React from "react";
import faker from "faker";

const CommentDetail = (props) => {
  return (
    <div classsName="ui container comments">
      <div classsName="comment">
        <a href="/" className="Avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.author}
          </a>
          <div className="metadata"></div>
          <span className="date">Today at 6:00pm</span>
        </div>
        <div className="text">Nice blog post!</div>
      </div>
    </div>
  );
};

export default CommentDetail;
