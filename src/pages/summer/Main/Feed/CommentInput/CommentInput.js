import React from 'react';

import './CommentInput.scss';

class CommentInput extends React.Component {
  render() {
    const { setCommentInput, handleSubmit, commentInput } = this.props;

    return (
      <form action="#" method="POST" className="feed-comments-input">
        <input
          onChange={setCommentInput}
          value={commentInput}
          type="text"
          name="comments-input"
          placeholder="댓글 달기..."
        />
        <button onClick={handleSubmit}>게시</button>
      </form>
    );
  }
}

export default CommentInput;
