import React from 'react';
import { withRouter } from 'react-router-dom';

import './Login.scss';

class LoginCw extends React.Component {
  constructor() {
    super();
    this.state = {
      idInputData: '',
      pwInputData: '',
      btnColorState: false,
    };
  }

  goToMain = () => this.props.history.push('/cw/main');

  handleIdInput = event => {
    this.setState({
      idInputData: event.target.value,
    });
  };

  handlePwInput = event => {
    this.setState({
      pwInputData: event.target.value,
    });
  };

  btnChangeColor = () => {
    const { idInputData, pwInputData } = this.state;
    idInputData.includes('@') && pwInputData.length >= 5
      ? this.setState({ btnColorState: true })
      : this.setState({ btnColorState: false });
  };

  render() {
    return (
      <section className="LoginCw">
        <div className="loginBackGroundColor">
          <main className="container">
            <span className="mainLogo">westagram</span>
            <div className="loginInputWrap">
              <input
                className="loginInput"
                onChange={this.handleIdInput}
                onKeyUp={this.btnChangeColor}
                type="text"
                placeholder="전화번호,사용자 이름 또는 이메일"
              />
              <input
                className="loginInput"
                onChange={this.handlePwInput}
                onKeyUp={this.btnChangeColor}
                type="password"
                placeholder="비밀번호"
              />
              <button
                className={
                  'loginbt' + (this.state.btnColorState ? 'Ture' : 'False')
                }
                type="button"
                onClick={this.goToMain}
              >
                로그인
              </button>
            </div>
            <span className="pwQuestion" onClick={this.goToMain}>
              비밀번호를 잊으셨나요?
            </span>
          </main>
        </div>
      </section>
    );
  }
}

export default withRouter(LoginCw);
