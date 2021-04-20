import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import "./comment"

const App = () => {
  return (
    <div classsName="ui container comments">
      <div classsName="comment">
        <a href="/" className="Avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata"></div>
          <span className="date">Today at 6:00pm</span>
        </div>
        <div className="text">Nice blog post!</div>
      </div>

      <div classsName="comment">
        <a href="/" className="Avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata"></div>
          <span className="date">Today at 6:00pm</span>
        </div>
        <div className="text">Nice blog post!</div>
      </div>
      <div classsName="comment">
        <a href="/" className="Avatar">
          <img alt="avatar" src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a href="/" className="author">
            Sam
          </a>
          <div className="metadata"></div>
          <span className="date">Today at 6:00pm</span>
        </div>
        <div className="text">Nice blog post!</div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
