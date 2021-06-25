import React from 'react';

class CommentsList extends React.Component {
  render() {
    return (
      <li className="comments">
        <span>{this.props.userId}</span>
        <span>{this.props.text}</span>
      </li>
    );
  }
}

export default CommentsList;
