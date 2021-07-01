import React from 'react';
import Feeds from '../Feeds/Feeds';
import Footer from '../Footer/Footer';
import Nav from '../../../components/Nav/Nav';
import './Main.scss';

class MainSomi extends React.Component {
  constructor() {
    super();
    this.state = {
      feedList: [],
    };
  }

  componentDidMount() {
    const APIKEY = 'http://localhost:3000/data/somi/feedData.json';
    fetch(APIKEY, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(feedData => {
        this.setState({
          feedList: feedData,
        });
      });
  }

  render() {
    const { feedList } = this.state;
    return (
      <div>
        <Nav />
        <div className="mainBodySomi">
          <div className="container">
            <main className="mainMain">
              <div class="feedContainer">
                {feedList.map(feed => {
                  return <Feeds key={feed.id} feedList={feed} />;
                })}
              </div>
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
                <Footer />
              </aside>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default MainSomi;
