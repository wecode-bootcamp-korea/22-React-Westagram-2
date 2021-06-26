import React from 'react';

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      likeColor: true,
    };
  }

  deleteComment = e => {
    const item = e.target;
    const parentItem = item.parentElement;

    if (item.className[0] === 'd') {
      parentItem.remove();
    }
  };

  render() {
    return (
      <>
        <li className="commentBox">
          <span className="igID">
            <a href="#">bongbongcatcat</a>
          </span>
          <span className="commentContent">위코드 쩐당</span>
          <i className="likeBtn far fa-heart" onClick={this.likeComment}></i>
          <i
            className="deleteBtn fas fa-times"
            onClick={this.deleteComment}
          ></i>
        </li>
        {this.props.commentList.map(comment => (
          <li className="commentBox">
            <span className="igID">
              <a href="#">{this.props.profileID}</a>
            </span>
            <span className="commentContent">{comment}</span>
            <i
              className="likeBtn far fa-heart"
              onClick={this.likeComment}
              style={{ color: this.state.likeColor ? 'black' : 'red' }}
            ></i>
            <i
              className="deleteBtn fas fa-times"
              onClick={this.deleteComment}
            ></i>
          </li>
        ))}
      </>
    );
  }
}

export default Comment;
