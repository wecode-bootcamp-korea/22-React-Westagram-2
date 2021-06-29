import React from 'react';
import Nav from '../../../components/Nav/Nav';
import '../../../styles/reset.scss';
import './Main.scss';
import '../../../components/Nav/Nav.scss';
import MainComponent from './MainComponentMap/MainComponent';

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
      .then(data => {
        this.setState({ feedList: data });
      });
  }

  render() {
    return (
      <div className="mainJJ">
        <Nav />
        <div className="container">
          <div className="center">
            <main id="main" className="main">
              <div className="mainContainer">
                {this.state.feedList.map(el => {
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
                    <div className="asStoryList">
                      <img alt="account" src="/images/jj/img_story1.jpg" />
                      <div className="asStoryInfo">
                        <p>this_is_id</p>
                        <p>3분전</p>
                      </div>
                    </div>
                    <div className="asStoryList">
                      <img alt="account" src="/images/jj/img_story2.jpg" />
                      <div className="asStoryInfo">
                        <p>this_is_id</p>
                        <p>3분전</p>
                      </div>
                    </div>
                    <div className="asStoryList">
                      <img alt="account" src="/images/jj/img_story3.jpg" />
                      <div className="asStoryInfo">
                        <p>this_is_id</p>
                        <p>3분전</p>
                      </div>
                    </div>
                    <div className="asStoryList">
                      <img alt="account" src="/images/jj/img_story4.jpg" />
                      <div className="asStoryInfo">
                        <p>this_is_id</p>
                        <p>3분전</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="asRecommandation">
                  <div className="asReTop">
                    <p>회원님을 위한 추천</p>
                    <p>모두보기</p>
                  </div>
                  <div className="asReListWrap">
                    <div className="asReList">
                      <div className="asReListLeft">
                        <img
                          alt="account"
                          src="/images/jj/img_recommend1.jpg"
                        />
                        <div className="asReInfo">
                          <p>this_is_recommanded</p>
                          <p>who likes u</p>
                        </div>
                      </div>
                      <p className="asReListfollowBox">팔로우</p>
                    </div>
                    <div className="asReList">
                      <div className="asReListLeft">
                        <img
                          alt="account"
                          src="/images/jj/img_recommend2.jpg"
                        />
                        <div className="asReInfo">
                          <p>this_is_recommanded</p>
                          <p>who likes u</p>
                        </div>
                      </div>
                      <p className="asReListfollowBox">팔로우</p>
                    </div>
                    <div className="asReList">
                      <div className="asReListLeft">
                        <img
                          alt="account"
                          src="/images/jj/img_recommend3.jpg"
                        />
                        <div className="asReInfo">
                          <p>this_is_recommanded</p>
                          <p>who likes u</p>
                        </div>
                      </div>
                      <p className="asReListfollowBox">팔로우</p>
                    </div>
                    <div className="asReList">
                      <div className="asReListLeft">
                        <img
                          alt="account"
                          src="/images/jj/img_recommend4.jpg"
                        />
                        <div className="asReInfo">
                          <p>this_is_recommanded</p>
                          <p>who likes u</p>
                        </div>
                      </div>
                      <p className="asReListfollowBox">팔로우</p>
                    </div>
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
