import React from 'react';

import './Comments.scss';

class Comments extends React.Component {
  render() {
    const { comments, likes, handleClickDel, handleClickLike } = this.props;

    return (
      <ul className="detail-comments">
        {comments.map((cmt, i) => (
          <li key={i} className="comment">
            <em className="user-name">im_user</em>
            <span>{cmt}</span>
            <div className="comment-icons">
              <i
                index={i}
                onClick={handleClickLike}
                className={
                  likes[i] ? 'fas fa-heart cmt-like' : 'far fa-heart cmt-like'
                }
              ></i>
              <i
                index={i}
                onClick={handleClickDel}
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
