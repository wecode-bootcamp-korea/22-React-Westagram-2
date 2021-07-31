import React from 'react';
import './CommentInput.scss';

class CommetInput extends React.Component {
  render() {
    const { data, delComment, isLike } = this.props;
    return (
      <div className="CommentInput">
        <li>
          <span>{data.writer}</span>
          {data.newComment}
          <button
            id="del"
            onClick={() => {
              delComment(data.number);
            }}
          >
            삭제
          </button>
          <button
            id="hart"
            onClick={() => {
              isLike(data.number);
            }}
          >
            <i className={(data.like ? 'fas ' : 'far ') + 'fa-heart'}></i>
          </button>
        </li>
      </div>
    );
  }
}

export default CommetInput;
