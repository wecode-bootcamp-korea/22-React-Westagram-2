import React from 'react';

// style
import '../../../styles/reset.scss';
import './Login.scss';

class LoginJj extends React.Component {
  constructor() {
    super();

    this.state = {
      id: null,
      pw: [],
      btnColor: 'false',
    };
  }

  handleInput = e => {
    this.setState({ id: e.target.value });

    let inputId = this.state.id;
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let check = re.test(String(inputId).toLowerCase());

    {
      check
        ? this.setState({ btnColor: 'true' })
        : this.setState({ btnColor: 'false' });
    }
  };

  pwInput = e => {
    this.setState({ pw: e.target.value });
    let inputPw = this.state.pw;
    let inputPwLength = inputPw.length;

    {
      inputPwLength > 5
        ? this.setState({ btnColor: 'true' })
        : this.setState({ btnColor: 'false' });
    }
  };

  validation = e => {
    e.preventDefault();

    {
      this.state.btnColor === 'true'
        ? this.props.history.push('./jj/main')
        : alert('Plese check your Email and Password');
    }
    this.setState({ id: '', pw: '' });
  };

  render() {
    return (
      <div className="loginJJ">
        <div className="container">
          <div className="containerBg">
            <h1>Westagram</h1>
            <div className="loginBox">
              <form
                id="form"
                className="form"
                onSubmit={e => this.validation(e)}
              >
                <input
                  id="inputId"
                  className="inputId"
                  type="text"
                  placeholder="전화번호, 사용자 이름 또는 메일"
                  onChange={e => this.handleInput(e)}
                />
                <input
                  id="inputPassword"
                  className="inputPassword"
                  type="password"
                  placeholder="비밀번호 (8자리 이상)"
                  onChange={e => this.pwInput(e)}
                />
                <button
                  id="loginBtn"
                  className="loginBtn"
                  style={{
                    backgroundColor:
                      this.state.btnColor === 'true' ? '#0095f6' : '#c0dffd',
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
