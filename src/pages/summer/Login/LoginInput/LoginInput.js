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

  handleInput = e => {
    const { value, name } = e.target;

    this.setState({
      [name]: value,
    });
  };

  checkLoginVld = () => {
    const { idInput, pwInput } = this.state;

    const checkIdVld = /^(?=.*[@])[a-z0-9_.@]{5,}$/gi;
    const checkedId = checkIdVld.test(idInput);
    const checkPwVld = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;
    const checkedPw = checkPwVld.test(pwInput);

    checkedId
      ? this.setState({ idVld: true })
      : this.setState({ idVld: false });
    checkedPw
      ? this.setState({ pwVld: true })
      : this.setState({ pwVld: false });
  };

  render() {
    const { idVld, pwVld } = this.state;
    const { handleInput, gotoMain, checkLoginVld } = this;

    return (
      <form action="#" method="POST" name="user-login">
        <input
          onChange={handleInput}
          onKeyUp={checkLoginVld}
          type="text"
          placeholder="사용자 이름 또는 이메일"
          id="id-input"
          name="idInput"
        />
        <input
          onChange={handleInput}
          onKeyUp={checkLoginVld}
          type="password"
          placeholder="비밀번호"
          id="pw-input"
          name="pwInput"
        />
        {idVld && pwVld ? (
          <button
            onClick={gotoMain}
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
