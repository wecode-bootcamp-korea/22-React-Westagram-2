import React from 'react';

import './Comments.scss';

class Comments extends React.Component {
  render() {
    const { comments, handleClickDel, handleClickLike } = this.props;

    return (
      <ul className="detail-comments">
        {comments.map((cmt, i) => (
          <li key={cmt.commentId} className="comment">
            <em className="user-name">{cmt.userName}</em>
            <span>{cmt.content}</span>
            <div className="comment-icons">
              <i
                index={i}
                onClick={() => handleClickLike(cmt.commentId)}
                className={
                  cmt.bool ? 'fas fa-heart cmt-like' : 'far fa-heart cmt-like'
                }
              ></i>
              <i
                index={i}
                onClick={() => handleClickDel(cmt.commentId)}
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
