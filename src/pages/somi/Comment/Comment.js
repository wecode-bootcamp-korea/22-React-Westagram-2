import React from 'react';
import { Link } from 'react-router-dom';
import '../Comment/Comment.scss';

class Comment extends React.Component {
  render() {
    const { commentName, comment, deleteComment, commentKey } = this.props;
    return (
      <li className="commentBox">
        <Link className="commentName" to="/">
          {commentName}
        </Link>
        <span className="commentContent">{comment}</span>
        <i
          className="likeBtn far fa-heart"
          id={commentKey}
          onClick={this.likeComment}
        ></i>
        <i
          className="deleteBtn fas fa-times"
          id={commentKey}
          onClick={deleteComment}
        ></i>
      </li>
    );
  }
}

export default Comment;
