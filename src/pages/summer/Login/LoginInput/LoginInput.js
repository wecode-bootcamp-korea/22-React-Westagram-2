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
    const { IP_ADDRESS } = this.props;
    e.preventDefault();

    fetch(`http://${IP_ADDRESS}:8000/users/signin`, {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.idInput,
        password: this.state.pwInput,
        // name: '포켓몬 지우',
        // phone_number: '010-0000-0000',
      }),
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
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
      <form name="user-login">
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
          disabled={idVld && pwVld ? false : true}
        >
          로그인
        </button>
      </form>
    );
  }
}

export default withRouter(LoginInput);
