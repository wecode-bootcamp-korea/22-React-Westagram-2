import React, { Component } from 'react';
import CommentList from './CommentListMap/CommentListMap';

import uuid from 'react-uuid';

class MainComponent extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      comment: '',
      heartColor: false,
      className: [],
    };
  }
  componentDidMount() {
    this.setState({ list: this.props.feedList.comment });
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(`this.state.list.src`, this.state.list);
    if (this.state.comment) {
      const newList = {
        id: uuid(),
        comment: this.state.comment,
        class: false,
      };
      this.setState({
        list: [...this.state.list, newList],
        className: [...this.state.className, newList.class],
      });
      this.setState({ comment: '' });
    }
  };
  changeHeartColor = (elId, index) => {
    let copy = [...this.state.className];
    copy[index] = !copy[index];
    this.setState({ className: copy });
  };
  inputOnChange = e => {
    this.setState({ comment: e.target.value });
  };
  deleteBtn = (elId, index) => {
    this.setState({
      list: this.state.list.filter(el => {
        return el.id !== elId;
      }),
      className: this.state.className.filter((el, i) => {
        return i !== index;
      }),
    });
  };

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
              <p>{this.props.feedList.userName}</p>
            </div>
            <p className="mTopThreeDot">…</p>
          </section>
          <section className="mainImg">
            {/* <img
              alt="mainfeed"
              src="/images/jj/img_main_feed.jpg"
              className="mainFeedImg"
            /> */}
            <video
              muted
              loop
              autoPlay
              src={this.props.feedList.src}
              className="mainFeedImg"
            ></video>
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
            <div className="mbWrittenComments">
              <ul className="commentSection">
                <CommentList
                  deleteBtn={this.deleteBtn}
                  changeHeartColor={this.changeHeartColor}
                  feedList={this.props.feedList}
                  list={this.state.list}
                  className={this.state.className}
                />
              </ul>
            </div>
            <div className="mbWrittenTime">
              <p className="mbTime">42분전</p>
            </div>
            <form className="commentForm" onSubmit={e => this.handleSubmit(e)}>
              <input
                name="input"
                className="commentInput"
                placeholder="댓글 달기..."
                value={this.state.comment}
                onChange={e => {
                  this.inputOnChange(e);
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
