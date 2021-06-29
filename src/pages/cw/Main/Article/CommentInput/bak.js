import React from 'react';
import './CommentInput.scss';

class CommetInput extends React.Component {
  constructor() {
    super();
    this.state = {
      newComment: '',
      comments: [],
      userId: '최유하나',
    };
  }

  id = 0; //선언없이 할당, state 내에서 선언하면 안되는 이유

  findComment = e => {
    this.setState({
      newComment: e.target.value,
    });
  };

  addComment = () => {
    const { newComment, comments } = this.state;
    this.setState({
      comments: comments.concat({
        number: this.id, // this. 의 의미??? .의로 사용 되는??
        newComment: newComment,
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
    const nextComments = comments.filter(e => {
      return e.number !== x;
      console.log(e.number); //콘솔 찍는 법
    });

    this.setState({
      comments: nextComments,
    });
  };
  render() {
    const { comments, userId } = this.state;
    return (
      <div className="CommentInput">
        <ul>
          {comments.map(e => {
            return (
              <li key={e.number}>
                <span>{userId}</span>
                {e.newComment}
                <button id="del" onClick={() => this.delComment(e.number)}>
                  삭제
                </button>
              </li>
            );
          })}
        </ul>
        <div className="commentBox">
          <textarea
            rows="1"
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
    );
  }
}

export default CommetInput;
