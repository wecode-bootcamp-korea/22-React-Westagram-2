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

  // #부모요소에서 받아온 APIKEY값의 comment값
  componentDidMount() {
    this.setState({ list: this.props.feedList.comment });
  }

  // form submit시 함수 실행(댓글 생성)
  handleSubmit = e => {
    const { list, className, comment } = this.state;
    e.preventDefault();

    if (this.state.comment) {
      const newList = {
        id: uuid(),
        comment: comment,
        class: false,
      };
      this.setState({
        list: [...list, newList],
        className: [...className, newList.class],
      });
      this.setState({ comment: '' });
    }
  };

  // 각 댓글에 좋아요 버튼 활성화 함수
  changeHeartColor = (elId, index) => {
    const { className } = this.state;
    let copy = [...className];
    copy[index] = !copy[index];
    this.setState({ className: copy });
  };

  // #인풋 요소를 comment 값으로 넣어주는 함수
  inputOnChange = e => {
    this.setState({ comment: e.target.value });
  };

  // #삭제함수
  deleteBtn = (elId, index) => {
    const { list, className } = this.state;
    this.setState({
      list: list.filter(el => {
        return el.id !== elId;
      }),
      className: className.filter((el, i) => {
        return i !== index;
      }),
    });
  };

  render() {
    const { feedList } = this.props;
    const { list, comment, className } = this.state;
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
              <p className="mTopUserName">{feedList.userName}</p>
            </div>
            <p className="mTopThreeDot">…</p>
          </section>
          <section className="mainImg">
            <video
              muted
              loop
              autoPlay
              src={feedList.src}
              className="mainFeedImg"
            ></video>
          </section>
          <section className="mainBottom">
            <div className="mbIconWrap">
              <div className="mbIconLeft">
                <i className="fas fa-heart mbLIcons" />
                <i className="far fa-comment mbLIcons" />
                <i className="far fa-paper-plane mbLIcons" />
              </div>
              <div className="mIconRight">
                <i className="far fa-bookmark mbRIcon" />
              </div>
            </div>
            <div className="mbLiked">
              <img
                alt="profile"
                src="/images/jj/img_account.jpg"
                className="mbLikedImg"
              />
              <p className="mbLikedTextBox">
                <span className="mbLikedText">snjndf</span>님
                <span className="mbLikedText">외 10명</span> 이 좋아합니다
              </p>
            </div>
            <div className="mbWrittenComments">
              <ul className="commentSection">
                <CommentList
                  deleteBtn={this.deleteBtn}
                  changeHeartColor={this.changeHeartColor}
                  feedList
                  list={list}
                  className={className}
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
                value={comment}
                onChange={e => this.inputOnChange(e)}
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
