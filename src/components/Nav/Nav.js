import React from 'react';
import './Nav.scss';

class Nav extends React.Component {
  render() {
    return (
      <header className="top-header">
        <div className="top-header-contents">
          <h1>Instagram</h1>
          <section className="search-container">
            <input type="text" placeholder="검색" />
            <i className="fas fa-search grey-letter"></i>
            <ul className="search-result" style={{ display: 'none' }}></ul>
          </section>
          <nav>
            <ul>
              <li aria-label="홈">
                <i className="fas fa-home"></i>
              </li>
              <li aria-label="다이렉트 메세지">
                <i className="far fa-paper-plane"></i>
              </li>
              <li aria-label="탐색">
                <i className="far fa-compass"></i>
              </li>
              <li aria-label="좋아요">
                <i className="far fa-heart"></i>
              </li>
              <li aria-label="내 프로필" className="my-profile-btn">
                <i className="far fa-user"></i>
                <section
                  className="my-profile-menu"
                  style={{ display: 'none' }}
                >
                  <ul>
                    <li>
                      <i className="far fa-user-circle"></i>
                      <span>프로필</span>
                    </li>
                    <li>
                      <i className="far fa-bookmark"></i>
                      <span>저장됨</span>
                    </li>
                    <li>
                      <i className="fas fa-cog"></i>
                      <span>설정</span>
                    </li>
                  </ul>
                  <div>
                    <span>로그아웃</span>
                  </div>
                </section>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Nav;
