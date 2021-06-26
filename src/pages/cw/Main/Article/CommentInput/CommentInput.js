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

  findComment = e => {
    this.setState({
      newComment: e.target.value,
    });
  };

  addComment = () => {
    const newComment = this.state.newComment;
    this.setState({
      comments: this.state.comments.concat(newComment),
      newComment: '',
    });
  };

  enterHandler = e => {
    if (e.key === 'Enter') {
      this.addComment();
      e.target.blur();
    }
  };

  render() {
    const { comments, userId } = this.state;
    return (
      <>
        <ul>
          {comments.map((value, index) => {
            return <CommentsList key={index} user={userId} text={value} />;
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
      </>
    );
  }
}

export default CommetInput;
