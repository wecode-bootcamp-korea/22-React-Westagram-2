import React from 'react';
import CommentInput from './CommentInput/CommentInput';
import Comments from './Comments/Comments';

import './Feed.scss';

class Feed extends React.Component {
  state = {
    commentInput: '',
    likes: [],
    feedLike: false,
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

  // Comments
  handleClickLike = e => {
    const index = e.target.getAttribute('index');

    const changedLikes = [...this.state.likes];
    changedLikes[index] = !changedLikes[index];

    this.setState({
      likes: [...changedLikes],
    });
  };

  handleClickDel = e => {
    const { likes } = this.state;
    const { comments } = this.props.feed;

    const index = e.target.getAttribute('index');

    const remainComments = comments.filter((cmt, i) => {
      return i != index;
    });

    const remainLikes = likes.filter((like, i) => {
      return i != index;
    });

    this.setState({
      likes: remainLikes,
    });

    return remainComments;
  };

  render() {
    const { postId, postImg, postText, postTime, userImg, userName } =
      this.props.feed;
    const { likes, feedLike, commentInput } = this.state;
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
                  <b>{postTime}</b>
                </span>
              </div>
              <Comments
                postId={postId}
                comments={this.props.feed.comments}
                likes={likes}
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
