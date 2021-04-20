import faker from "faker";

const comments = () => {
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

export default comments;
