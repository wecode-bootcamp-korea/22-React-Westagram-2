import React from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';

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
    fetch('http://10.58.0.101:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.idValue,
        password: this.state.pwValue,
        name: 'somi',
        nickname: 'somi',
        phone_number: '010-0000-0000',
      }),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
        if (result.message === 'SUCCESS') {
          alert('잘했엉');
          this.props.history.push('/somi/main');
        } else {
          alert('다시해봥');
        }
      });
  };

  handleChange = () => {
    const { idValue, pwValue } = this.state;
    return idValue.includes('@') && pwValue.length >= 5
      ? this.setState({
          disabled: false,
        })
      : this.setState({
          disabled: true,
        });
  };

  handleInput = e => {
    console.log(this.state);
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { disabled } = this.state;
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
                  onChange={this.handleInput}
                  onKeyUp={this.handleChange}
                  name="idValue"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                />
                <input
                  className="passInput input"
                  type="password"
                  onChange={this.handleInput}
                  onKeyUp={this.handleChange}
                  name="pwValue"
                  placeholder="비밀번호"
                />
                <button
                  className="button"
                  disabled={disabled}
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
