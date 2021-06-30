import React from 'react';
import CommentInput from './CommentInput/CommentInput';
import Comments from './Comments/Comments';

import './Feed.scss';

class Feed extends React.Component {
  state = {
    commentInput: '',
    comments: [],
    likes: [],
    feedLike: false,
  };

  // 기존 댓글 받아오기
  componentDidMount = () => {
    this.setState({
      comments: this.props.feed.comments,
    });
  };

  // FeedLike
  changeFeedLike = () => {
    this.setState({ feedLike: !this.state.feedLike });
  };

  // CommentInput
  setCommentInput = e => {
    this.setState({ commentInput: e.target.value });
  };

  handleSubmit = e => {
    const { commentInput, comments, likes } = this.state;

    e.preventDefault();
    if (commentInput === '') return;

    this.setState({
      comments: [...comments, commentInput],
      likes: [...likes, false],
      commentInput: '',
    });
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
    const { comments, likes } = this.state;

    const index = e.target.getAttribute('index');

    const remainComments = comments.filter((cmt, i) => {
      return i != index;
    });

    const remainLikes = likes.filter((like, i) => {
      return i != index;
    });

    this.setState({
      comments: remainComments,
      likes: remainLikes,
    });
  };

  render() {
    const { postId, postImg, postText, postTime, userImg, userName } =
      this.props.feed;
    const { commentInput, comments, likes, feedLike } = this.state;

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
                  <b>{postTime}</b> 전
                </span>
              </div>
              <Comments
                postId={postId}
                comments={comments}
                likes={likes}
                handleClickDel={this.handleClickDel}
                handleClickLike={this.handleClickLike}
              />
            </section>
          </section>
        </section>
        <CommentInput
          commentInput={commentInput}
          setCommentInput={this.setCommentInput}
          handleSubmit={this.handleSubmit}
        />
      </article>
    );
  }
}

export default Feed;
