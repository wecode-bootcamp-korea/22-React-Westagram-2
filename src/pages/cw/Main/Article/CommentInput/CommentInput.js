import React from 'react';
import './CommentInput.scss';

class CommetInput extends React.Component {
  render() {
    const { number, writer, newComment } = this.props;
    return (
      <div className="CommentInput">
        <li>
          <span>{writer}</span>
          {newComment}
          <button
            id="del"
            onClick={() => {
              this.props.delComment(number);
            }}
          >
            삭제
          </button>
        </li>
      </div>
    );
  }
}

export default CommetInput;
