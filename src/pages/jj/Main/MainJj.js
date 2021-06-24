import React from 'react';
import Nav from '../../../components/Nav/Nav';
import '../../../styles/reset.scss';
import './Main.scss';
import '../../../components/Nav/Nav.scss';

class MainJj extends React.Component {
  render() {
    return (
      <div className="mainJJ">
        <Nav />
        <div className="container">
          <div className="center">
            <main id="main">
              <div className="mainBg">
                <section className="mainTop">
                  <div className="profile">
                    <img
                      alt="account"
                      src="/images/jj/img_main_top.jpg"
                      className="account"
                    />
                    <p>jacob</p>
                  </div>
                  <p className="threeDot">…</p>
                </section>
                <section className="mainImg">
                  <img alt="zz" src="/images/jj/img_main_feed.jpg" />
                </section>

                <section className="mainBottom">
                  <div className="mbIconWrap">
                    <div className="mbIconLeft">
                      <i className="fas fa-heart"></i>
                      <i className="far fa-comment"></i>
                      <i class="far fa-paper-plane"></i>
                    </div>
                    <div className="mIconRight">
                      <i className="far fa-bookmark"></i>
                    </div>
                  </div>

                  <div className="mbLiked">
                    <img alt="profile" src="/images/jj/img_account.jpg" />
                    <p>
                      {' '}
                      <span>snjndf</span>님 <span>외 10명</span> 이 좋아합니다
                    </p>
                  </div>

                  <div className="mbWrittenComments" id="mbWrittenComments">
                    <ul className="commentSection">
                      <li className="personalAccount">
                        <div className="commentWrap">
                          <span className="userId">아이디</span>
                          <span className="commnets">sacassw</span>
                        </div>
                        <div className="commentIconWrap">
                          <i className="far fa-heart likesBtn"></i>
                          <i className="far fa-trash-alt deleteBtn"></i>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="mbWrittenTime">
                    <p>42분전</p>
                  </div>

                  <form id="form" className="commentInput">
                    {/* <label for="input"></label> */}
                    <input name="input" id="input" placeholder="댓글 달기..." />
                    <button type="submit">게시</button>
                  </form>
                </section>
              </div>
            </main>

            <aside id="aside">
              <div className="asMyAccount">
                <img alt="account" src="/images/jj/img_my_account.jpg" />
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
                      <img alt="account" src="/images/jj/img_recommend1.jpg" />
                      <div className="asReInfo">
                        <p>this_is_recommanded</p>
                        <p>who likes u</p>
                      </div>
                    </div>
                    <p className="asReListfollowBox">팔로우</p>
                  </div>
                  <div className="asReList">
                    <div className="asReListLeft">
                      <img alt="account" src="/images/jj/img_recommend2.jpg" />
                      <div className="asReInfo">
                        <p>this_is_recommanded</p>
                        <p>who likes u</p>
                      </div>
                    </div>
                    <p className="asReListfollowBox">팔로우</p>
                  </div>
                  <div className="asReList">
                    <div className="asReListLeft">
                      <img alt="account" src="/images/jj/img_recommend3.jpg" />
                      <div className="asReInfo">
                        <p>this_is_recommanded</p>
                        <p>who likes u</p>
                      </div>
                    </div>
                    <p className="asReListfollowBox">팔로우</p>
                  </div>
                  <div className="asReList">
                    <div className="asReListLeft">
                      <img alt="account" src="/images/jj/img_recommend4.jpg" />
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
            </aside>
          </div>
        </div>
      </div>
    );
  }
}

export default MainJj;
