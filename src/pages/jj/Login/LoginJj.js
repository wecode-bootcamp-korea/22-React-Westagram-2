import React from 'react';

// style
import '../../../styles/reset.scss';
import './Login.scss';

class LoginJj extends React.Component {
  constructor() {
    super();

    this.state = {
      id: '',
      pw: '',
      btnColor: false,
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    {
      this.state.btnColor
        ? this.props.history.push('./jj/main')
        : alert('Plese check your Email and Password');
    }
  };

  activeBtn = () => {
    const isValid = this.state.id.includes('@') && this.state.pw.length >= 5;
    console.log(`isValid`, isValid);

    if (isValid) {
      this.setState({ btnColor: true });
    } else {
      this.setState({ btnColor: false });
    }
  };

  render() {
    console.log(`this.state.id`, this.state.id);
    return (
      <div className="loginJJ">
        <div className="container">
          <div className="containerBg">
            <h1>Westagram</h1>
            <div className="loginBox">
              <form
                id="form"
                className="form"
                onSubmit={e => this.handleSubmit(e)}
              >
                <input
                  id="inputId"
                  className="inputId"
                  type="text"
                  placeholder="전화번호, 사용자 이름 또는 메일"
                  name="email"
                  onChange={e => this.setState({ id: e.target.value })}
                  onKeyUp={this.activeBtn}
                />
                <input
                  id="inputPassword"
                  className="inputPassword"
                  type="password"
                  placeholder="비밀번호 (8자리 이상)"
                  name="password"
                  onChange={e => this.setState({ pw: e.target.value })}
                  onKeyUp={this.activeBtn}
                />
                <button
                  id="loginBtn"
                  className="loginBtn"
                  style={{
                    backgroundColor: this.state.btnColor
                      ? '#0095f6'
                      : '#c0dffd',
                  }}
                >
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
