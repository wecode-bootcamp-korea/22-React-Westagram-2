import React from 'react';

import './Comments.scss';

class Comments extends React.Component {
  render() {
    const { comments, handleClickDel, handleClickLike } = this.props;

    return (
      <ul className="detail-comments">
        {comments.map((comment, index) => (
          <li key={comment.commentId} className="comment">
            <em className="user-name">{comment.userName}</em>
            <span>{comment.content}</span>
            <div className="comment-icons">
              <i
                index={index}
                onClick={() => handleClickLike(comment.commentId)}
                className={`fa-heart cmt-like ${comment.bool ? 'fas' : 'far'}`}
              ></i>
              <i
                index={index}
                onClick={() => handleClickDel(comment.commentId)}
                className="fas fa-times cmt-del"
              ></i>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

export default Comments;
