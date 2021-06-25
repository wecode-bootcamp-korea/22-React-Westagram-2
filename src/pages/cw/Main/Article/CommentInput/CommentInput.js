import React from 'react';
import CommentsList from './CommentsList/CommentsList';
// import CommentsList from './CommentsList/CommentsList';

class CommetInput extends React.Component {
  constructor() {
    super();
    this.state = {
      newComment: '',
      comments: [],
      userId: '우나   ',
    };
  }

  findComment = e => {
    this.setState({
      newComment: e.target.value,
    });
  };

  addComment = () => {
    const newComment = this.state.newComment;
    this.state.comments.push(newComment);
    this.setState({
      comments: this.state.comments,
      newComment: '',
    });
    console.log(this.state);
  };

  enterHandler = e => {
    if (e.key === 'Enter') {
      this.addComment();
    }
  };

  render() {
    return (
      <>
        <ul>
          {this.state.comments.map((x, idx) => {
            return (
              <CommentsList key={idx} userId={this.state.userId} text={x} />
            );
          })}
        </ul>
        <textarea
          id="new-comment"
          placeholder="댓글 달기..."
          onChange={this.findComment}
          onKeyPress={this.enterHandler}
          value={this.state.newComment}
        ></textarea>
        <button type="submit" onClick={this.addComment}>
          게시
        </button>
      </>
    );
  }
}

export default CommetInput;
