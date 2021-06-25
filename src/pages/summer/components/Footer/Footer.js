import React from 'react';
import { withRouter } from 'react-router-dom';

import LangSet from './LangSet';

import './Footer.scss';

class Footer extends React.Component {
  state = {
    langSet: true,
  };

  componentDidMount = () => {
    this.props.location.pathname === '/summer/main'
      ? this.setState({ langSet: false })
      : this.setState({ langSet: true });
  };

  render() {
    const { langSet } = this.state;

    return (
      <footer>
        <ul className="footer-top">
          <li>
            <a href="#">소개</a>
          </li>
          <li>
            <a href="#">블로그</a>
          </li>
          <li>
            <a href="#">채용 정보</a>
          </li>
          <li>
            <a href="#">도움말</a>
          </li>
          <li>
            <a href="#">API</a>
          </li>
          <li>
            <a href="#">개인정보처리방침</a>
          </li>
          <li>
            <a href="#">약관</a>
          </li>
          <li>
            <a href="#">인기계정</a>
          </li>
          <li>
            <a href="#">해시태그</a>
          </li>
          <li>
            <a href="#">위치</a>
          </li>
        </ul>
        <div className="footer-bottom">
          {langSet ? <LangSet /> : null}
          <span>© 2021 Instagram from Facebook</span>
        </div>
      </footer>
    );
  }
}

export default withRouter(Footer);
