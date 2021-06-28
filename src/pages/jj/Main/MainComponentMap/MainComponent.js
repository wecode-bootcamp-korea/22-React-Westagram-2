import React, { Component } from 'react';
import CommentList from './CommentListMap/CommentListMap';

class MainComponent extends Component {
  render() {
    return (
      <>
        <div className="mainBg">
          <section className="mainTop">
            <div className="mTopProfile">
              <img
                alt="account"
                src="/images/jj/img_main_top.jpg"
                className="mTopAccount"
              />
              <p>jacob</p>
            </div>
            <p className="mTopThreeDot">…</p>
          </section>
          <section className="mainImg">
            <img
              alt="mainfeed"
              src="/images/jj/img_main_feed.jpg"
              className="mainFeedImg"
            />
          </section>
          <section className="mainBottom">
            <div className="mbIconWrap">
              <div className="mbIconLeft">
                <i className="fas fa-heart"></i>
                <i className="far fa-comment"></i>
                <i className="far fa-paper-plane"></i>
              </div>
              <div className="mIconRight">
                <i className="far fa-bookmark"></i>
              </div>
            </div>
            <div className="mbLiked">
              <img
                alt="profile"
                src="/images/jj/img_account.jpg"
                className="mbLikedImg"
              />
              <p className="mbLikedText">
                <span>snjndf</span>님 <span>외 10명</span> 이 좋아합니다
              </p>
            </div>
            <div
              className="mbWrittenComments"
              // id="mbWrittenComments"
            >
              <ul className="commentSection">
                <CommentList
                  feedList={this.props.feedList}
                  deleteBtn={this.props.deleteBtn}
                  changeHeartColor={this.props.changeHeartColor}
                  list={this.props.list}
                  className={this.props.className}
                />
              </ul>
            </div>
            <div className="mbWrittenTime">
              <p className="mbTime">42분전</p>
            </div>
            <form
              // id="form"
              className="commentForm"
              onSubmit={e => this.props.handleSubmit(e)}
            >
              <input
                name="input"
                // id="input"
                className="commentInput"
                placeholder="댓글 달기..."
                value={this.props.comment}
                onChange={e => {
                  this.props.inputOnChange(e);
                }}
              />
              <button type="submit" className="commentBtn">
                게시
              </button>
            </form>
          </section>
        </div>
      </>
    );
  }
}

export default MainComponent;
