import React from 'react';

import './Feed.scss';

class Feed extends React.Component {
  state = {
    commentInput: '',
    comments: [],
  };

  // comments: [
  //   {
  //     postId: 1001,
  //     commentText: ''
  //   }
  // ]

  handleComments = e => {
    this.setState({ commentInput: e.target.value });
  };

  handleSubmit = e => {
    if (this.state.commentInput === '') return;
    if (e.charCode !== 13 && e.type !== 'click') return;

    const id = e.target.getAttribute('id');
    this.setState({
      comments: [
        ...this.state.comments,
        { postId: id, commentText: this.state.commentInput },
      ],
    });

    this.setState({ commentInput: '' });
    console.log(id);
  };

  handleClickLike = e => {
    console.log(e);
  };

  handleClickDel = e => {
    const index = e.target.getAttribute('index');

    this.setState({
      comments: this.state.comments.filter(cmt => {
        return cmt !== this.state.comments[index];
      }),
    });
  };

  render() {
    return (
      <section className="feeds-container">
        {this.props.feedLis.map(feed => (
          <article key={feed.postId} className="feed">
            <header className="feed-header">
              <div className="feed-user">
                <div>
                  <img
                    alt={feed.userImg}
                    src={feed.userImg}
                    className="user-img"
                  />
                </div>
                <em className="user-name">{feed.userName}</em>
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
                <img alt={feed.postImg} src={feed.postImg} />
              </section>
              <section className="post-desc-container">
                <div className="feed-btns">
                  <div className="feed-btns-left">
                    <button aria-label="좋아요">
                      <i className="far fa-heart"></i>
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
                    <em className="user-name">{feed.userName}</em>
                    <span
                      className="text-contents"
                      style={{ overflow: 'hidden' }}
                    >
                      {feed.postText}
                    </span>
                  </div>
                  <div className="detail-time grey-letter">
                    <span>
                      <b>{feed.postTime}</b> 전
                    </span>
                  </div>
                  <ul className="detail-comments">
                    {this.state.comments.map((comment, i) => (
                      <li key={i} className="comment">
                        <em className="user-name">im_user</em>
                        <span>{comment.commentText}</span>
                        <div className="comment-icons">
                          <i
                            index={i}
                            onClick={this.handleClickLike}
                            className="far fa-heart cmt-like"
                          ></i>
                          <i
                            index={i}
                            onClick={this.handleClickDel}
                            className="fas fa-times cmt-del"
                          ></i>
                        </div>
                      </li>
                    ))}
                  </ul>
                </section>
              </section>
            </section>
            <section className="feed-comments-input">
              <input
                id={feed.postId}
                onChange={this.handleComments}
                onKeyPress={this.handleSubmit}
                value={this.state.commentInput}
                type="text"
                name="comments-input"
                placeholder="댓글 달기..."
              />
              <button onClick={this.handleSubmit} id={feed.postId}>
                게시
              </button>
            </section>
          </article>
        ))}
      </section>
    );
  }
}

export default Feed;
