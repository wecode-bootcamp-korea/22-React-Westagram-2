import React from 'react';
import { Link } from 'react-router-dom';
import '../Comment/Comment.scss';

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      isLiked: false,
      feedLiked: false,
    };
  }

  componentDidMount() {
    this.setState({
      isLiked: this.props.isLiked,
    });
  }

  likeComment = () => {
    const { isLiked } = this.state;
    this.setState({
      isLiked: !isLiked,
    });
  };

  render() {
    const { commentName, comment, commentId, deleteComment } = this.props;

    return (
      <li className="commentBox">
        <Link className="commentName" to="/">
          {commentName}
        </Link>
        <span className="commentContent">{comment}</span>
        <i
          onClick={this.likeComment}
          className={
            this.state.isLiked ? 'likeBtn fas fa-heart' : 'likeBtn far fa-heart'
          }
        ></i>
        <i
          id={commentId}
          className="deleteBtn fas fa-times"
          onClick={deleteComment}
        ></i>
      </li>
    );
  }
}

export default Comment;
