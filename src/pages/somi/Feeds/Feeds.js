import React from 'react';
import { Link } from 'react-router-dom';
import CommentList from '../CommentList/CommentList';
import '../Feeds/Feeds.scss';

class Feeds extends React.Component {
  constructor() {
    super();
    this.state = {
      commentList: [],
      commentValue: '',
    };
  }

  componentDidMount() {
    this.setState({
      commentList: this.props.feedList.comment,
      isLiked: this.props.isLiked,
    });
  }

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
        ...commentList,
        {
          commentId: commentList.length + 1,
          commentUserName: 'somangoi',
          content: commentValue,
          isLiked: false,
        },
      ],
      commentValue: '',
    });
  };

  deleteComment = e => {
    let item = e.target;

    this.setState({
      commentList: this.state.commentList.filter(el => {
        return el.commentId !== Number(item.id);
      }),
    });
  };

  render() {
    return (
      <article className="feeds">
        <div className="feedTop">
          <img
            alt="프로필"
            className="feedProfile"
            src={this.props.feedList.profilePic}
          />
          <div className="feedTopRight">
            <Link to="#" className="userID">
              {this.props.feedList.userName}
            </Link>
            <i className="fas fa-ellipsis-h"></i>
          </div>
        </div>
        <div className="feedPhotoContainer">
          <div className="feedPicBox">
            <img
              alt={this.props.alt}
              className="feedPic"
              src={this.props.feedList.feedPic}
            />
          </div>
        </div>
        <div className="contentIcons">
          <div className="iconContainerLeft">
            <button className="contentBtn" onClick={this.likeFeed}>
              <img
                alt="heart_icon"
                src={
                  this.state.feedLiked
                    ? '/images/somi/heart2.png'
                    : '/images/somi/heart.png'
                }
              />
            </button>
            <button className="contentBtn">
              <img alt="comment_icon" src="/images/somi/comment.png" />
            </button>
            <button className="contentBtn">
              <img alt="share_icon" src="/images/somi/share.png" />
            </button>
          </div>
          <div className="iconContainerRight">
            <button className="contentBtn">
              <img alt="bookmark_icon" src="/images/somi/bookmark.png" />
            </button>
          </div>
        </div>
        <div className="likes">
          <img
            alt="프로필"
            className="likesPic"
            src="../images/somi/likeProfile.jpeg"
          />
          <div className="likesDesc">
            <Link to="#" className="bolder">
              gleitflug
            </Link>
            님{' '}
            <Link to="#" className="bolder">
              외 10명
            </Link>
            이 좋아합니다.
          </div>
        </div>
        <CommentList
          commentList={this.state.commentList}
          deleteComment={this.deleteComment}
          isLiked={this.state.isLiked}
        />
        <span className="commentTime">42분 전</span>
        <form className="commentInputBox" onSubmit={this.submitComment}>
          <input
            className="commentInput"
            type="text"
            placeholder="댓글 달기..."
            value={this.state.commentValue}
            onChange={this.handleCommentInput}
          />
          <button
            className="commentBtn"
            type="submit"
            disabled={this.state.commentValue.length >= 1 ? false : true}
          >
            Post
          </button>
        </form>
      </article>
    );
  }
}

export default Feeds;
