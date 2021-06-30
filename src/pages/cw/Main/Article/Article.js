import React from 'react';

import './Article.scss';

import CommentInput from './CommentInput/CommentInput';

class Article extends React.Component {
  constructor() {
    super();
    this.state = {
      newComment: '',
      comments: [],
      writer: '최유하나',
    };
  }

  componentDidMount() {
    this.setState({
      comments: this.props.data,
    });
  }

  findComment = e => {
    this.setState({
      newComment: e.target.value,
    });
  };

  addComment = () => {
    const { newComment, comments, writer } = this.state;
    this.setState({
      comments: comments.concat({
        writer: writer,
        number: comments.length + 1,
        newComment: newComment,
        like: true,
      }),
      newComment: '',
    });
    console.log(`this.state`, this.state);
  };

  enterHandler = e => {
    if (e.key === 'Enter') {
      this.addComment();
      e.target.blur();
    }
  };

  delComment = x => {
    const { comments } = this.state;
    this.setState({
      comments: comments.filter(el => {
        return el.number !== x;
      }),
    });
  };

  isLike = number => {
    const i = number - 1;
    const newComments = [...this.state.comments];
    newComments[i].like = !newComments[i].like;
    return this.setState({
      comments: newComments,
    });
  };

  render() {
    const { userId, nickname, profileImg, content } = this.props;
    return (
      <li className="Article">
        <div className="contentHead">
          <div className="contentHeadProfileThum">
            <i className={profileImg} id="profileThum"></i>
          </div>
          <div className="contentHeadProfile">
            <p>{userId}</p>
            <p>{nickname}</p>
          </div>
          <div className="contentHeadMoreOption">
            <button>...</button>
          </div>
        </div>
        <div className="imgContent">
          <img src={content} alt="메인 사진" />
        </div>
        <div className="artcl bottom">
          <div className="bottomBts">
            <i className="far fa-heart"></i>
            <i className="far fa-comment"></i>
            <i className="far fa-share-square"></i>
            <i className="far fa-bookmark" id="bookMark"></i>
          </div>
          <p id="likeCount">좋아요 1,392개</p>
          <ul>
            {this.state.comments.map(el => {
              return (
                <CommentInput
                  key={el.number}
                  number={el.number}
                  writer={el.writer}
                  newComment={el.newComment}
                  like={el.like}
                  delComment={this.delComment}
                  isLike={this.isLike}
                />
              );
            })}
          </ul>
          <div className="commentBox">
            <textarea
              id="new-comment"
              placeholder="댓글 달기..."
              onChange={this.findComment}
              onKeyPress={this.enterHandler}
              value={this.state.newComment}
            ></textarea>
            <button id="submitBt" type="submit" onClick={this.addComment}>
              게시
            </button>
          </div>
        </div>
      </li>
    );
  }
}

export default Article;
