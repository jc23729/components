import React from "react";

const CommentDetail = (props) => {
  return (
    <div classsName="ui container comments">
      <div classsName="comment">
        <a href="/" className="Avatar">
          <img alt="avatar" src={props.avatar} />
        </a>
        <div className="content">
          <a href="/" className="author">
            {props.author}
          </a>
          <div className="metadata"></div>
          <span className="date">{props.timeAgo}</span>
        </div>
        <div className="text">{props.blogPost}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
