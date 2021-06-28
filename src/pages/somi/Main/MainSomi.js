import React from 'react';
import Nav from '../../../components/Nav/Nav';
import Comment from '../Comment/Comment';
import '../../../styles/reset.scss';
import './Main.scss';

class MainSomi extends React.Component {
  constructor() {
    super();
    this.state = {
      disabled: true,
      commentValue: '',
      commentList: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/somi/commentData.json', {
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
    return this.state.commentValue.length >= 1
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
    e.preventDefault();
    this.setState({
      commentList: [
        ...this.state.commentList,
        {
          id: this.state.commentList.length + 1,
          userName: 'wecode',
          content: this.state.commentValue,
          isLiked: false,
        },
      ],
      commentValue: '',
      disabled: true,
    });
  };

  render() {
    return (
      <div>
        <Nav />
        <div className="mainBodySomi">
          <div className="container">
            <main className="mainMain">
              <article className="feeds">
                <div className="feedTop">
                  <img
                    className="feedProfile"
                    src="/images/somi/feedProfile.jpeg"
                    alt="프로필"
                  />
                  <div className="feedTopRight">
                    <a href="#" className="userID">
                      somangoi
                    </a>
                    <i className="fas fa-ellipsis-h"></i>
                  </div>
                </div>
                <div className="feedPhotoContainer">
                  <div className="feedPicBox">
                    <img
                      className="feedPic"
                      src="/images/somi/feedPic.jpeg"
                      alt="업로드사진"
                    />
                  </div>
                </div>
                <div className="contentIcons">
                  <div className="iconContainerLeft">
                    <button className="contentBtn">
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
                      <img
                        src="/images/somi/bookmark.png"
                        alt="bookmark_icon"
                      />
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
                  {this.state.commentList.map(comment => {
                    return (
                      <Comment
                        key={comment.id}
                        name={comment.userName}
                        comment={comment.content}
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
                    value={this.state.commentValue}
                    onChange={this.handleCommentInput}
                  />
                  <button
                    className="commentBtn"
                    type="submit"
                    disabled={this.state.disabled}
                  >
                    Post
                  </button>
                </form>
              </article>
              <aside className="mainRight">
                <div className="profile">
                  <img
                    className="manRightProfilePic"
                    src="/images/somi/feedProfile.jpeg"
                    alt="프로필"
                  />
                  <div className="profileDesc">
                    <span className="profileID">somangoi</span>
                    <span className="profileName">Somi Hwang</span>
                  </div>
                </div>
                <div className="storyBox">
                  <div className="storyTop">
                    <span className="smallTitle">스토리</span>
                    <span className="seeAll">모두 보기</span>
                  </div>
                  <ul className="stories">
                    <li className="story">
                      <canvas className="circle"></canvas>
                      <a href="#">
                        <img
                          className="storyPic sideProfile"
                          src="/images/somi/story1.jpeg"
                          alt="스토리 프로필"
                        />
                      </a>
                      <div className="sideDesc">
                        <span className="sideId">abcd</span>
                        <span className="storyTime">16분 전</span>
                      </div>
                    </li>
                    <li className="story">
                      <canvas className="circle"></canvas>
                      <a href="#">
                        <img
                          className="storyPic sideProfile"
                          src="/images/somi/story2.jpeg"
                          alt="스토리 프로필"
                        />
                      </a>
                      <div className="sideDesc">
                        <span className="sideId">efg</span>
                        <span className="storyTime">20분 전</span>
                      </div>
                    </li>
                    <li className="story">
                      <canvas className="circle"></canvas>
                      <a href="#">
                        <img
                          className="storyPic sideProfile"
                          src="/images/somi/story3.jpeg"
                          alt="스토리 프로필"
                        />
                      </a>
                      <div className="sideDesc">
                        <span className="sideId">hijk</span>
                        <span className="storyTime">1시간 전</span>
                      </div>
                    </li>
                    <li className="story">
                      <canvas className="circle"></canvas>
                      <a href="#">
                        <img
                          className="storyPic sideProfile"
                          src="/images/somi/story4.jpeg"
                          alt="스토리 프로필"
                        />
                      </a>
                      <div className="sideDesc">
                        <span className="sideId">lmnop</span>
                        <span className="storyTime">20시간 전</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="recommendationBox">
                  <div className="recommendationTop">
                    <span className="smallTitle">회원님을 위한 추천</span>
                    <span className="seeAll">모두 보기</span>
                  </div>
                  <ul className="recommendations">
                    <li className="recommendation">
                      <a href="#">
                        <img
                          className="sideProfile"
                          src="/images/somi/story1.jpeg"
                          alt="추천 프로필"
                        />
                      </a>
                      <div className="sideDesc">
                        <span className="sideId">abcd</span>
                        <div className="connection">
                          wecode_bootcamp님 외 1명이 팔로우 하고 있습니다.
                        </div>
                      </div>
                      <button className="followBtn">팔로우</button>
                    </li>
                    <li className="recommendation">
                      <a href="#">
                        <img
                          className="sideProfile"
                          src="/images/somi/story2.jpeg"
                          alt="추천 프로필"
                        />
                      </a>
                      <div className="sideDesc">
                        <span className="sideId">efg</span>
                        <div className="connection">
                          bongbongcatcat님 외 1명이 팔로우 하고 있습니다.
                        </div>
                      </div>
                      <button className="followBtn">팔로우</button>
                    </li>
                    <li className="recommendation">
                      <a href="#">
                        <img
                          className="sideProfile"
                          src="/images/somi/story3.jpeg"
                          alt="추천 프로필"
                        />
                      </a>
                      <div className="sideDesc">
                        <span className="sideId">hijk</span>
                        <div className="connection">
                          kimchi_chips님 외 1명이 팔로우 하고 있습니다.
                        </div>
                      </div>
                      <button className="followBtn">팔로우</button>
                    </li>
                  </ul>
                </div>
                <footer>
                  <p>
                    Instagram 정보 &middot; 지원 &middot; 홍보 센터 &middot; API
                    &middot; 채용 정보 &middot; 개인정보처리방침 &middot; 약관
                    &middot; 디렉터리 &middot; 프로필 &middot; 해시태그 &middot;
                    언어
                  </p>
                  <p className="copyright">&copy; 2021 INSTAGRAM</p>
                </footer>
              </aside>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default MainSomi;
