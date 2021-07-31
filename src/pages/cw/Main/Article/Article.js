import React from 'react';

import './Article.scss';

import CommentInput from './CommentInput/CommentInput';

class Article extends React.Component {
  constructor() {
    super();
    this.state = {
      newComment: '',
      comments: [{}],
      writer: '최유하나',
      number: 3,
    };
  }

  componentDidMount() {
    this.setState({
      comments: this.props.comment,
    });
  }

  findComment = e => {
    this.setState({
      newComment: e.target.value,
    });
  };

  addComment = () => {
    const { newComment, comments, writer, number } = this.state;
    this.setState({
      comments: comments.concat({
        writer: writer,
        number: number + 1,
        newComment: newComment,
        like: false,
      }),
      newComment: '',
      number: number + 1,
    });
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
      comments: comments.filter(el => el.number !== x),
    });
  };

  isLike = number => {
    const newComments = [...this.state.comments];
    newComments.forEach((el, index) => {
      if (el.number === number) {
        newComments[index] = {
          ...newComments[index],
          like: !newComments[index].like,
        };
      }
    });
    return this.setState({ comments: newComments });
  };

  render() {
    const { data } = this.props;
    return (
      <li className="Article">
        <div className="contentHead">
          <div className="contentHeadProfileThum">
            <i className={data.profileImg} id="profileThum"></i>
          </div>
          <div className="contentHeadProfile">
            <p>{data.userId}</p>
            <p>{data.nickname}</p>
          </div>
          <div className="contentHeadMoreOption">
            <button>...</button>
          </div>
        </div>
        <div className="imgContent">
          <img src={data.content} alt="메인 사진" />
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
            {this.state.comments.map((el, index) => {
              return (
                <CommentInput
                  key={index}
                  data={el}
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
