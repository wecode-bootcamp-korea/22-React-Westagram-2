import React from 'react';
import './CommentInput.scss';

class CommetInput extends React.Component {
  render() {
    const { number, userId, newComment } = this.props;
    return (
      <div className="CommentInput">
        <li>
          <span>{userId}</span>
          {newComment}
          {/* <button id="del" onClick={this.props.delComment(number)}>
            삭제
          </button> */}
        </li>
      </div>
    );
  }
}

export default CommetInput;
