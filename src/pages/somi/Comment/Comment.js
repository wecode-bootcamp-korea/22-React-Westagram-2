import React from 'react';

class Comment extends React.Component {
  render() {
    return (
      <>
        {this.props.commentList.map(comment => (
          <li className="commentBox">
            <span className="igID">
              <a href="#">{this.props.profileID}</a>
            </span>
            <span className="commentContent">{comment}</span>
            <i className="likeBtn far fa-heart"></i>
            <i className="deleteBtn fas fa-times"></i>
          </li>
        ))}
      </>
    );
  }
}

export default Comment;
