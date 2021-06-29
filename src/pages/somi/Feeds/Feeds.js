import React from 'react';
import Comment from '../Comment/Comment';
import '../Feeds/Feeds.scss';

class Feeds extends React.Component {
  constructor() {
    super();
    this.state = {
      disabled: true,
      commentValue: '',
      commentList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/somi/Data.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          commentList: data,
        });
      });
  }

  btnHandleChange = () => {
    const { commentValue } = this.state;
    return commentValue.length >= 1
      ? this.setState({
          disabled: false,
        })
      : this.setState({
          disabled: true,
        });
  };

  handleCommentInput = e => {
    this.setState({
      commentValue: e.target.value,
    });
  };

  submitComment = e => {
    const { commentList, commentValue } = this.state;
    e.preventDefault();
    this.setState({
      commentList: [
        ...this.state.commentList,
        {
          id: commentList.length + 1,
          userName: 'somangoi',
          content: commentValue,
          isLiked: false,
        },
      ],
      commentValue: '',
      disabled: true,
    });
  };

  deleteComment = e => {
    const item = e.target;
    const parentItem = item.parentElement;

    if (item.className.split(' ')[0] === 'deleteBtn') {
      parentItem.remove();
    }
  };

  render() {
    const {
      profileImage,
      name,
      feedImage,
      alt,
      commentKey,
      commentName,
      comment,
    } = this.props;

    const { commentValue, disabled } = this.state;
    return (
      <article className="feeds">
        <div className="feedTop">
          <img className="feedProfile" src={profileImage} alt="프로필" />
          <div className="feedTopRight">
            <a href="#" className="userID">
              {name}
            </a>
            <i className="fas fa-ellipsis-h"></i>
          </div>
        </div>
        <div className="feedPhotoContainer">
          <div className="feedPicBox">
            <img className="feedPic" src={feedImage} alt={alt} />
          </div>
        </div>
        <div className="contentIcons">
          <div className="iconContainerLeft">
            <button className="contentBtn" onClick>
              <img src="/images/somi/heart.png" alt="heart_icon" />
            </button>
            <button className="contentBtn">
              <img src="/images/somi/comment.png" alt="comment_icon" />
            </button>
            <button className="contentBtn">
              <img src="/images/somi/share.png" alt="share_icon" />
            </button>
          </div>
          <div className="iconContainerRight">
            <button className="contentBtn">
              <img src="/images/somi/bookmark.png" alt="bookmark_icon" />
            </button>
          </div>
        </div>
        <div className="likes">
          <img
            className="likesPic"
            src="../images/somi/likeProfile.jpeg"
            alt="프로필"
          />
          <div className="likesDesc">
            <a href="#" className="bolder">
              gleitflug
            </a>
            님{' '}
            <a href="#" className="bolder">
              외 10명
            </a>
            이 좋아합니다.
          </div>
        </div>
        <ul className="commentList">
          <Comment
            commentKey={commentKey}
            commentName={commentName}
            comment={comment}
            deleteComment={this.deleteComment}
          />
          {this.state.commentList.map(comment => {
            return (
              <Comment
                commentKey={comment.commentId}
                commentName={comment.userName}
                comment={comment.content}
                deleteComment={this.deleteComment}
              />
            );
          })}
        </ul>
        <span className="commentTime">42분 전</span>
        <form className="commentInputBox" onSubmit={this.submitComment}>
          <input
            className="commentInput"
            type="text"
            placeholder="댓글 달기..."
            onKeyUp={this.btnHandleChange}
            value={commentValue}
            onChange={this.handleCommentInput}
          />
          <button className="commentBtn" type="submit" disabled={disabled}>
            Post
          </button>
        </form>
      </article>
    );
  }
}

export default Feeds;
