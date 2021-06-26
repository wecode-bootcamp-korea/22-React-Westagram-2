import React from 'react';
import CommentsList from './CommentsList/CommentsList';
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

  id = 0;

  findComment = e => {
    this.setState({
      newComment: e.target.value,
    });
  };

  addComment = () => {
    const { newComment, comments } = this.state;
    this.setState({
      comments: comments.concat({
        id: this.id,
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

  delComment = id => {
    const { comments } = this.state;
    const nextComments = comments.filter(comment => {
      return comment.id !== id;
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
              <li key={e.id}>
                <span>{userId}</span>
                {e.newComment}
                <button onClick={() => this.delComment(e.id)}>삭제</button>
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
