import React from 'react';
import './CommentsList.scss';

class CommentsList extends React.Component {
  render() {
    const { user, text } = this.props;
    return (
      <div>
        <li>
          <span>{user}</span>
          {text}
        </li>
        <button>삭제</button>
      </div>
    );
  }
}

export default CommentsList;
