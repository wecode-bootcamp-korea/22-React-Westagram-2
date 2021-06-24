import React from 'react';

// style
import '../../../styles/reset.scss';
import './Login.scss';

class LoginJj extends React.Component {
  render() {
    return (
      <div className="loginJJ">
        <div className="container">
          <div className="containerBg">
            <h1>Westagram</h1>
            <div className="loginBox">
              <form id="form" className="form">
                <input
                  id="inputId"
                  className="inputId"
                  type="text"
                  placeholder="전화번호, 사용자 이름 또는 메일"
                />
                <input
                  id="inputPassword"
                  className="inputPassword"
                  type="password"
                  placeholder="비밀번호 (8자리 이상)"
                />
                <button id="loginBtn" className="loginBtn">
                  로그인
                </button>
              </form>
              <div className="forgotPassword">
                <p>비밀번호를 잊으셨나요?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginJj;
