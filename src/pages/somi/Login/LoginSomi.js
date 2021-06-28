import React from 'react';
import '../../../styles/reset.scss';
import './Login.scss';
import { withRouter } from 'react-router-dom';

class LoginSomi extends React.Component {
  constructor() {
    super();
    this.state = {
      disabled: true,
      idValue: '',
      pwValue: '',
    };
  }

  goToMain = () => {
    this.props.history.push('/somi/main');
  };

  handleChange = () => {
    return this.state.idValue.includes('@') && this.state.pwValue.length >= 5
      ? this.setState({
          disabled: false,
        })
      : this.setState({
          disabled: true,
        });
  };

  handleIdInput = e => {
    this.setState({
      idValue: e.target.value,
    });
  };

  handlePwInput = e => {
    this.setState({
      pwValue: e.target.value,
    });
  };

  render() {
    return (
      <div class="loginBodySomi">
        <main className="loginMain">
          <div className="phoneImg">
            <div className="imgBox">
              <img
                className="phoneImgs visible"
                src="/images/somi/imgbox1.jpeg"
                alt="인스타그램 홍보 이미지1"
              />
              <img
                className="phoneImgs"
                src="/images/somi/imgbox2.jpeg"
                alt="인스타그램 홍보 이미지2"
              />
              <img
                className="phoneImgs"
                src="/images/somi/imgbox3.jpeg"
                alt="인스타그램 홍보 이미지3"
              />
              <img
                className="phoneImgs"
                src="/images/somi/imgbox4.jpeg"
                alt="인스타그램 홍보 이미지4"
              />
              <img
                className="phoneImgs"
                src="/images/somi/imgbox5.jpeg"
                alt="인스타그램 홍보 이미지5"
              />
            </div>
          </div>
          <article className="rightBox">
            <div className="loginWrapper">
              <div className="logo">
                <h1
                  className="loginTitle"
                  style={{ fontFamily: 'Lobster, cursive' }}
                >
                  Westagram
                </h1>
              </div>
              <form className="loginContainer">
                <input
                  className="idInput input"
                  type="text"
                  onChange={this.handleIdInput}
                  onKeyUp={this.handleChange}
                  value={this.state.idValue}
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                />
                <input
                  className="passInput input"
                  type="password"
                  onChange={this.handlePwInput}
                  onKeyUp={this.handleChange}
                  value={this.state.pwValue}
                  placeholder="비밀번호"
                />
                <button
                  className="button"
                  disabled={this.state.disabled}
                  onClick={this.goToMain}
                >
                  log in
                </button>
              </form>
              <div className="lineBox">
                <div className="line"></div>
                <div className="or">OR</div>
                <div className="line"></div>
              </div>
              <button className="fb">
                <i className="fab fa-facebook-square"></i>
                <a href="#">
                  <span>Log in with Facebook</span>
                </a>
              </button>
              <div className="findPassword">
                <a href="#">비밀번호를 잊으셨나요?</a>
              </div>
            </div>
            <div className="signUp">
              <p>Don't have an account? </p>
              <a href="#">Sign up</a>
            </div>
            <div className="app">
              <p>Get the app.</p>
            </div>
            <div className="appLink">
              <a href="#">
                <img
                  className="appLinkBtn"
                  src="/images/somi/app1.png"
                  alt="애플스토어"
                />
              </a>
              <a href="#">
                <img
                  className="appLinkBtn"
                  src="/images/somi/app2.png"
                  alt="플레이스토어"
                />
              </a>
            </div>
          </article>
        </main>
      </div>
    );
  }
}

export default withRouter(LoginSomi);
