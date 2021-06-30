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
                  console.log(`el.feedId`, el.feedId);
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
                    <p>wecode_bootcamp</p>
                    <div className="asMyProfile_bottom">
                      <p>Wecode</p>
                      <p>위코드</p>
                    </div>
                  </div>
                </div>
                <div className="asStory">
                  <div className="asStoryTop">
                    <p>스토리</p>
                    <p>모두보기</p>
                  </div>
                  <div className="asStoryListWrap">
                    <StoryList />
                  </div>
                </div>
                <div className="asRecommandation">
                  <div className="asReTop">
                    <p>회원님을 위한 추천</p>
                    <p>모두보기</p>
                  </div>
                  <div className="asReListWrap">
                    <RecommendList />
                  </div>
                </div>
                <div className="asInfoWrap">
                  <p>Instagram 정보 ﹒ 지원 ﹒ 홍보센터 ﹒ API ﹒</p>
                  <p>채용정보 ﹒ 개인정보처리방침 ﹒ 약관 ﹒</p>
                  <p>디렉터리 ﹒ 프로필 ﹒ 해시태그 ﹒ 언어</p>
                  <p>© 2019 INSTAGRAM</p>
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
