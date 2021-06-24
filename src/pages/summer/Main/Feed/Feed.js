import React from 'react';

import './Feed.scss';

class Feed extends React.Component {
  render() {
    return (
      <section className="feeds-container">
        {this.props.feedLis.map(feed => (
          <article className="feed">
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
                  <ul className="detail-comments"></ul>
                </section>
              </section>
            </section>
            <section className="feed-comments-input">
              <input
                type="text"
                name="writing comments"
                placeholder="댓글 달기..."
              />
              <button className="blue-letter-btn">게시</button>
            </section>
          </article>
        ))}
      </section>
    );
  }
}

export default Feed;