import React from 'react';
import '../Comment/Comment.scss';

class Comment extends React.Component {
  render() {
    const { commentName, comment, deleteComment } = this.props;
    return (
      <li className="commentBox">
        <span className="igID">
          <a href="#">{commentName}</a>
        </span>
        <span className="commentContent">{comment}</span>
        <i className="likeBtn far fa-heart" onClick={this.likeComment}></i>
        <i className="deleteBtn fas fa-times" onClick={deleteComment}></i>
      </li>
    );
  }
}

export default Comment;
