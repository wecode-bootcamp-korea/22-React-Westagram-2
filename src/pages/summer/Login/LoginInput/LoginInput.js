import React from 'react';
import { withRouter } from 'react-router-dom';

import './LoginInput.scss';

class LoginInput extends React.Component {
  state = {
    idInput: '',
    pwInput: '',
    isIdValid: false,
    isPwValid: false,
  };

  gotoMain = e => {
    const { IP_ADDRESS } = this.props;
    const { idInput: email, pwInput: password } = this.state;
    e.preventDefault();

    fetch(`http://${IP_ADDRESS}:8000/users/signin`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      //   // name: '포켓몬 지우',
      //   // phone_number: '010-0000-0000',
      // }),
    })
      .then(res => res.json())
      .then(res => {
        localStorage.setItem('TOKEN', res.access_token);
        this.props.history.push('/summer/main');
      });
  };

  handleInput = e => {
    const { value, name } = e.target;

    this.setState({
      [name]: value,
    });
  };

  checkLoginVld = () => {
    const { idInput, pwInput } = this.state;

    const ID_VALID_REGEX = /^(?=.*[@])[a-z0-9_.@]{5,}$/gi;
    const PW_VALID_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;

    const isIdValid = ID_VALID_REGEX.test(idInput);
    const isPwValid = PW_VALID_REGEX.test(pwInput);

    this.setState({ isIdValid, isPwValid });
  };

  render() {
    const { isIdValid, isPwValid } = this.state;
    const { handleInput, gotoMain, checkLoginVld } = this;

    return (
      <form className="user-login">
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
        <button
          onClick={gotoMain}
          type="submit"
          disabled={isIdValid && isPwValid ? false : true}
        >
          로그인
        </button>
      </form>
    );
  }
}

export default withRouter(LoginInput);
