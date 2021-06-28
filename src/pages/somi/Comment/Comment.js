import React from 'react';

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
      commentValue: '',
    };
  }

  deleteComment = e => {
    const item = e.target;
    const parentItem = item.parentElement;

    if (item.className.split(' ')[0] === 'deleteBtn') {
      parentItem.remove();
    }
  };

  render() {
    return (
      <li className="commentBox">
        <span className="igID">
          <a href="#">{this.props.name}</a>
        </span>
        <span className="commentContent">{this.props.comment}</span>
        <i className="likeBtn far fa-heart" onClick={this.likeComment}></i>
        <i className="deleteBtn fas fa-times" onClick={this.deleteComment}></i>
      </li>
    );
  }
}

export default Comment;
