import React from 'react';

class Comment extends React.Component {
  render() {
    return (
      <li className="commentBox">
        <span className="igID">
          <a href="#">{this.props.commentName}</a>
        </span>
        <span className="commentContent">{this.props.comment}</span>
        <i className="likeBtn far fa-heart" onClick={this.likeComment}></i>
        <i
          className="deleteBtn fas fa-times"
          onClick={this.props.deleteComment}
        ></i>
      </li>
    );
  }
}

export default Comment;
