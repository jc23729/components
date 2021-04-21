import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";

const App = () => {
  return (
    <div classsName="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45 pm"
        blogPost="today was a crappy day"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 11:00 pm"
        blogPost="today was a great day"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Today at 2:15 pm"
        blogPost="today was so so"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
