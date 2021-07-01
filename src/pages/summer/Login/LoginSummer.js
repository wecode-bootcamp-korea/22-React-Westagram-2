import React from 'react';

import MobileScreen from './MobileScreen/MobileScreen';
import LoginInput from './LoginInput/LoginInput';
import Footer from '../components/Footer/Footer';

import './Login.scss';

class LoginSummer extends React.Component {
  state = {
    IP_ADDRESS: '10.58.2.204',
  };

  render() {
    return (
      <div className="Login-summer">
        <main>
          <MobileScreen />
          <div className="right-container">
            <section className="login-container">
              <h1>Westagram</h1>
              <LoginInput IP_ADDRESS={this.state.IP_ADDRESS} />
              <section
                aria-label="페이스북으로 로그인"
                className="login-facebook"
              >
                <span>또는</span>
                <span>
                  <a href="#">Facebook으로 로그인</a>
                </span>
              </section>
              <section aria-label="비밀번호 찾기" className="find-pw">
                <a href="#">비밀번호를 잊으셨나요?</a>
              </section>
            </section>
            <section className="join-container">
              <div className="joinning">
                <span>계정이 없으신가요?</span>
                <button className="blue-letter-btn">가입하기</button>
              </div>
            </section>
            <section className="app-container">
              <p>앱을 다운로드하세요.</p>
              <div className="app-btns">
                <button aria-label="앱 스토어에서 다운로드하기">
                  <img alt="앱 스토어" src="/images/summer/4a5c9d62d51b.png" />
                </button>
                <button aria-label="구글 플레이에서 다운로드하기">
                  <img alt="구글플레이" src="/images/summer/f155b664a93b.png" />
                </button>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default LoginSummer;
