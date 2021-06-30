import React from 'react';

// #STYLES#
import '../../../styles/reset.scss';
import './Login.scss';

// #APIKEY#
const APIKEY = 'http://10.58.6.109:8000/users/signin';

class LoginJj extends React.Component {
  constructor() {
    super();

    this.state = {
      id: '',
      pw: '',
      btnColor: false,
    };
  }

  // #FORM -> SUBMIT#
  handleSubmit = e => {
    const { id, pw } = this.state;
    e.preventDefault();
    fetch(APIKEY, {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: pw,

        // #아래 정보는  회원가입할때 필요한 정보#
        // phone_number: '010-2120-1010',
        // name: 'idjfso',
        // nickname: 'dsnidss',
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          this.props.history.push('/jj/main');

          // localStorge에 저장/삭제
          // localStorage.removeItem('TOKEN');
          localStorage.setItem('TOKEN', result.TOKEN);
        } else {
          alert('message : failed login');
        }
      });

    this.setState({ id: '', pw: '' });
  };

  activeBtn = () => {
    const { id, pw } = this.state;
    const isValid = id.includes('@') && pw.length >= 5;

    if (isValid) {
      this.setState({ btnColor: true });
    } else {
      this.setState({ btnColor: false });
    }
  };

  render() {
    const { btnColor, id, pw } = this.state;
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
                  value={id}
                  onChange={e => this.setState({ id: e.target.value })}
                  onKeyUp={this.activeBtn}
                />
                <input
                  id="inputPassword"
                  className="inputPassword"
                  type="password"
                  placeholder="비밀번호 (8자리 이상)"
                  name="password"
                  value={pw}
                  onChange={e => this.setState({ pw: e.target.value })}
                  onKeyUp={this.activeBtn}
                />
                <button
                  id="loginBtn"
                  className="loginBtn"
                  style={{
                    backgroundColor: btnColor ? '#0095f6' : '#c0dffd',
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
