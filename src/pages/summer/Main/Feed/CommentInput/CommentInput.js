import React from 'react';

import './CommentInput.scss';

class CommentInput extends React.Component {
  render() {
    const {
      setCommentInput,
      commentInput,
      sendingComment,
      postId,
      resetCommentInput,
    } = this.props;

    return (
      <form className="feed-comments-input">
        <input
          onChange={setCommentInput}
          value={commentInput}
          type="text"
          placeholder="댓글 달기..."
        />
        <button
          onClick={e => {
            e.preventDefault();
            sendingComment(postId, commentInput);
            resetCommentInput();
          }}
        >
          게시
        </button>
      </form>
    );
  }
}

export default CommentInput;
