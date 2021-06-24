import React from 'react';
import { withRouter } from 'react-router-dom';

import './LoginInput.scss';

class LoginInput extends React.Component {
  state = {
    idInput: '',
    pwInput: '',
    idVld: false,
    pwVld: false,
  };

  gotoMain = e => {
    e.preventDefault();
    this.props.history.push('/summer/main');
  };

  handleIdInput = e => {
    this.setState({ idInput: e.target.value });
    const checkIdVld = /^(?=.*[@])[a-z0-9_.@]{5,}$/gi;
    const checkedId = checkIdVld.test(e.target.value);
    checkedId === true
      ? this.setState({ idVld: true })
      : this.setState({ idVld: false });
  };

  handlePwInput = e => {
    this.setState({ pwInput: e.target.value });
    const checkPwVld = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    const checkedPW = checkPwVld.test(e.target.value);
    checkedPW === true
      ? this.setState({ pwVld: true })
      : this.setState({ pwVld: false });
  };
  render() {
    return (
      <form action="#" method="POST" name="user-login">
        <input
          onChange={this.handleIdInput}
          type="text"
          placeholder="사용자 이름 또는 이메일"
          id="id-input"
        />
        <input
          onChange={this.handlePwInput}
          type="password"
          placeholder="비밀번호"
          id="pw-input"
        />
        {this.state.idVld && this.state.pwVld ? (
          <button
            onClick={this.gotoMain}
            style={{ background: '#0095F6' }}
            type="submit"
          >
            로그인
          </button>
        ) : (
          <button disabled style={{ background: '#B2DFFC' }} type="submit">
            로그인
          </button>
        )}
      </form>
    );
  }
}

export default withRouter(LoginInput);
