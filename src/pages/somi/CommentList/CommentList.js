import React from 'react';
import Comment from '../Comment/Comment';

class CommentList extends React.Component {
  render() {
    return (
      <ul className="commentList">
        {this.props.commentList.map(comment => {
          return (
            <Comment
              key={comment.commentId}
              commentName={comment.commentUserName}
              comment={comment.content}
              isLiked={comment.isLiked}
              deleteComment={this.props.deleteComment}
              likeComment={this.props.likeComment}
            />
          );
        })}
      </ul>
    );
  }
}

export default CommentList;
