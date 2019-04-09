import React from 'react';
import ReactDOM from 'react-dom';
import { FaReply, FaRetweet, FaHeart, FaEllipsisH } from 'react-icons/fa';
import './styles.css';
import PropTypes from 'prop-types';
import moment from 'moment';

function Tweet({ tweet }) {
  return (
    <div className="tweet">
      <Avatar hash={tweet.gravatar} />
      <div className="content">
        <NameWithHandle author={tweet.author} />
        <Time time={tweet.timestamp} />
        <Message text={tweet.message} />
        <div className="buttons">
          <ReplyButton />
          <RetweetButton count={tweet.retweets} />
          <LikeButton count={tweet.likes} />
          <MoreOptionsButton />
        </div>
      </div>
    </div>
  );
}

function Avatar({ hash }) {
  let url = `https://s.gravatar.com/avatar/${hash}`;
  return <img src={url} className="avatar" alt="avatar" />;
}

function Message({ text }) {
  return <div className="message">{text}</div>;
}

function NameWithHandle({ author }) {
  return (
    <span className="name-with-handle">
      <span className="name">{author.name}</span>
      <span className="handle">@{author.handle}</span>
    </span>
  );
}

const Time = ({ time }) => {
  const timeString = moment(time).fromNow();
  return <span className="time">{timeString}</span>;
};

function getRetweetCount(count) {
  if (count > 0) {
    return <span className="retweet-count">{count}</span>;
  } else {
    return null;
  }
}

const ReplyButton = () => <FaReply />;

const RetweetButton = ({ count }) => (
  <span className="retweet-button">
    <FaRetweet />
    {getRetweetCount(count)}
  </span>
);

const LikeButton = ({ count }) => (
  <span className="like-button">
    <FaHeart />
    {count > 0 && <span className="like-count">{count}</span>}
  </span>
);

RetweetButton.propTypes = {
  count: PropTypes.number
};

LikeButton.propTypes = {
  count: PropTypes.number
};

const MoreOptionsButton = () => <FaEllipsisH />;

let testTweet = {
  message: 'Something about cats.',
  gravatar: '6be23811c91ebaa7f3adee4e8e8b3802?s=80',
  author: {
    handle: 'catperson',
    name: 'cat person'
  },
  timestamp: new Date('2019-04-04'),
  retweets: 5,
  likes: 4
};

const rootElement = document.getElementById('root');
ReactDOM.render(<Tweet tweet={testTweet} />, rootElement);
