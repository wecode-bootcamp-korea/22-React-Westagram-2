import React from 'react';
import { Link } from 'react-router-dom';
import '../Comment/Comment.scss';

class Comment extends React.Component {
  render() {
    const { commentName, comment, deleteComment, commentKey, likeComment } =
      this.props;
    return (
      <li className="commentBox">
        <Link className="commentName" to="/">
          {commentName}
        </Link>
        <span className="commentContent">{comment}</span>
        <i
          id={commentKey}
          className="likeBtn far fa-heart"
          onClick={likeComment}
        ></i>
        <i
          id={commentKey}
          className="deleteBtn fas fa-times"
          onClick={deleteComment}
        ></i>
      </li>
    );
  }
}

export default Comment;
