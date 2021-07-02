import React from 'react';
import CommentInput from './CommentInput/CommentInput';
import Comments from './Comments/Comments';

import './Feed.scss';

class Feed extends React.Component {
  state = {
    commentInput: '',
    likes: [],
    feedLike: false,
    timeStamp: '',
  };

  componentDidMount = () => {
    this.handlePostTime(this.props.feed.postTime);
  };

  // 피드 게시 시간
  handlePostTime = postTime => {
    const now = new Date();
    const yearNow = now.getFullYear();
    const monthNow = now.getMonth();
    const dayNow = now.getDay();
    const hourNow = now.getHours();
    const minNow = now.getMinutes();
    const secNow = now.getSeconds();

    const timeNow = [yearNow, monthNow, dayNow, hourNow, minNow, secNow];

    const date = postTime.slice(0, 10).split('-');
    const time = postTime.slice(11).split(':');

    const postedTime = [...date, ...time].map(item => parseInt(item));

    let diffIndex = null;
    // 0 = year, 1 = month, 2 = day, 3 = hour, 4 = min, 5 = sec

    for (let i = 0; i < timeNow.length; i++) {
      if (timeNow[i] !== postedTime[i]) {
        diffIndex = i;
        break;
      }
    }

    // if() {}
  };

  // CommentInput
  setCommentInput = e => {
    this.setState({ commentInput: e.target.value });
  };

  resetCommentInput = () => {
    this.setState({ commentInput: '' });
  };

  // FeedLike
  changeFeedLike = () => {
    this.setState({ feedLike: !this.state.feedLike });
  };

  // Comment Like & Del 서버 연동 중
  handleClickLike = commentId => {
    const { IP_ADDRESS, feed } = this.props;

    fetch(`http://${IP_ADDRESS}:8000/postings/comment/`, {
      method: 'PATCH',
      body: JSON.stringify({
        id: commentId,
        bool: !(feed.comments.commentId === commentId).bool,
      }),
    });
    this.props.fetchData();
  };

  handleClickDel = commentId => {
    const { IP_ADDRESS } = this.props;

    fetch(`http://${IP_ADDRESS}:8000/postings/comment/${commentId}`, {
      method: 'DELETE',
    });
    this.props.fetchData();
  };

  render() {
    console.log(this.props);
    const { postId, postImg, postText, userImg, userName } = this.props.feed;
    const { feedLike, commentInput, timeStamp } = this.state;
    const { sendingComment } = this.props;

    return (
      <article className="feed">
        <header className="feed-header">
          <div className="feed-user">
            <div>
              <img alt={userImg} src={userImg} className="user-img" />
            </div>
            <em className="user-name">{userName}</em>
          </div>
          <div className="feed-more">
            <div className="dots">
              <i></i>
              <i></i>
              <i></i>
            </div>
          </div>
        </header>
        <section className="feed-contents">
          <section className="post-img-container">
            <img alt={postImg} src={postImg} />
          </section>
          <section className="post-desc-container">
            <div className="feed-btns">
              <div className="feed-btns-left">
                <button aria-label="좋아요" onClick={this.changeFeedLike}>
                  <i className={feedLike ? 'fas fa-heart' : 'far fa-heart'}></i>
                </button>
                <button aria-label="댓글">
                  <i className="far fa-comment"></i>
                </button>
                <button aria-label="다이렉트 메세지">
                  <i className="far fa-paper-plane"></i>
                </button>
              </div>
              <div className="feed-btns-right">
                <button aria-label="북마크">
                  <i className="far fa-bookmark"></i>
                </button>
              </div>
            </div>
            <div className="sum-like">
              <span>
                좋아요 <b>0</b>개
              </span>
            </div>
            <section className="feed-details">
              <div className="detail-text">
                <em className="user-name">{userName}</em>
                <span className="text-contents" style={{ overflow: 'hidden' }}>
                  {postText}
                </span>
              </div>
              <div className="detail-time grey-letter">
                <span>
                  <b>{timeStamp}</b>
                </span>
              </div>
              <Comments
                postId={postId}
                comments={this.props.feed.comments}
                handleClickDel={this.handleClickDel}
                handleClickLike={this.handleClickLike}
              />
            </section>
          </section>
        </section>
        <CommentInput
          postId={postId}
          commentInput={commentInput}
          setCommentInput={this.setCommentInput}
          sendingComment={sendingComment}
          resetCommentInput={this.resetCommentInput}
        />
      </article>
    );
  }
}

export default Feed;
