import React from 'react';
import './CommentInput.scss';

class CommetInput extends React.Component {
  render() {
    const { number, writer, newComment, like } = this.props;
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
          <button
            id="hart"
            onClick={() => {
              this.props.isLike(number);
            }}
          >
            <i className={(like ? 'far ' : 'fas ') + 'fa-heart'}></i>
          </button>
        </li>
      </div>
    );
  }
}

export default CommetInput;
