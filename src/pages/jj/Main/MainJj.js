import React from 'react';

// #STYLES#
import './Main.scss';
import '../../../components/Nav/Nav.scss';

// #COMPONENTS#
import Nav from '../../../components/Nav/Nav';
import MainComponent from './MainComponentMap/MainComponent';
import StoryList from './Aside/StoryList/StoryList';
import RecommendList from './Aside/RecommendList/RecommendList';

const APIKEY = 'http://localhost:3000/data/jj/Data.json';

class MainJj extends React.Component {
  constructor() {
    super();

    this.state = {
      feedList: [],
    };
  }

  componentDidMount() {
    fetch(APIKEY, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => this.setState({ feedList: data }));
  }

  render() {
    const { feedList } = this.state;
    return (
      <div className="mainJJ">
        <Nav />
        <div className="container">
          <div className="center">
            <main id="main" className="main">
              <div className="mainContainer">
                {feedList.map(el => {
                  return <MainComponent key={el.feedId} feedList={el} />;
                })}
              </div>
            </main>
            <aside id="aside" className="aside">
              <div className="asideBg">
                <div className="asMyAccount">
                  <img
                    alt="account"
                    src="/images/jj/img_my_account.jpg"
                    className="asMyAccountImg"
                  />
                  <div className="asMyProfile">
                    <p className="asMyProfileTitle">wecode_bootcamp</p>
                    <div className="asMyProfile_bottom">
                      <p className="asMyProfile_bottom_EngTitle">Wecode</p>
                      <p className="asMyProfile_bottom_korTitle">위코드</p>
                    </div>
                  </div>
                </div>
                <div className="asStory">
                  <div className="asStoryTop">
                    <p className="asStoryTopTitle">스토리</p>
                    <p className="asStoryTopSeeAll">모두보기</p>
                  </div>
                  <div className="asStoryListWrap">
                    <StoryList />
                  </div>
                </div>
                <div className="asRecommandation">
                  <div className="asReTop">
                    <p className="asReTopTitle">회원님을 위한 추천</p>
                    <p className="asReTopSeeAll">모두보기</p>
                  </div>
                  <div className="asReListWrap">
                    <RecommendList />
                  </div>
                </div>
                <div className="asInfoWrap">
                  <p>
                    <span>Instagram 정보 ﹒</span>
                    <span>지원 ﹒</span>
                    <span>홍보센터 ﹒</span>
                    <span>API ﹒</span>
                  </p>
                  <p>
                    <span>채용정보 ﹒</span>
                    <span>개인정보처리방침 ﹒</span>
                    <span>약관 ﹒</span>
                  </p>
                  <p>
                    <span>디렉터리 ﹒</span>
                    <span>프로필 ﹒</span>
                    <span>해시태그 ﹒</span>
                    <span>언어</span>
                  </p>
                  <p className="copyright">
                    <span>© 2019 INSTAGRAM</span>
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    );
  }
}

export default MainJj;
