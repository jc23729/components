import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div classsName="ui container comments">
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
