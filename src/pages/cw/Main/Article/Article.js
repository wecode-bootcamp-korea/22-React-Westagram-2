import React from 'react';
import './Article.scss';
import '../../../../styles/reset.scss';
import '../../../../styles/common.scss';
import CommentInput from './CommentInput/CommentInput';

class Article extends React.Component {
  constructor() {
    super();
    this.state = {
      newComment: '',
      comments: [],
      userId: '최유하나',
      like: false,
    };
  }

  id = 0;

  findComment = e => {
    this.setState({
      newComment: e.target.value,
    });
  };

  addComment = () => {
    const { newComment, comments, userId } = this.state;
    this.setState({
      comments: comments.concat({
        userId: userId,
        number: this.id,
        newComment: newComment,
        like: false,
      }),
      newComment: '',
    });
    this.id += 1;
  };

  enterHandler = e => {
    if (e.key === 'Enter') {
      this.addComment();
      e.target.blur();
    }
  };

  delComment = x => {
    const { comments } = this.state;
    const nextComments = comments.filter(el => {
      return el.number !== x;
    });
    console.log(nextComments);
    this.setState({
      comments: nextComments,
    });
  };

  render() {
    const { userId, nickname, profileImg, content, writer, newComment, like } =
      this.props;
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
                  userId={el.userId}
                  newComment={el.newComment}
                  delComment={this.delComment}
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
