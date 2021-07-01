import React, { Component } from 'react';

export class Info extends Component {
  render() {
    return (
      <>
        <div className="asInfoWrap">
          <p>
            <span>Instagram 정보 ﹒</span>
            <span>지원 ﹒</span>
            <span>홍보센터 ﹒</span>
            <span>API ﹒</span>
          </p>
          <p>
            <span>채용정보 ﹒</span>
            <span>개인정보처리방침 ﹒</span>
            <span>약관 ﹒</span>
          </p>
          <p>
            <span>디렉터리 ﹒</span>
            <span>프로필 ﹒</span>
            <span>해시태그 ﹒</span>
            <span>언어</span>
          </p>
          <p className="copyright">
            <span>© 2019 INSTAGRAM</span>
          </p>
        </div>
      </>
    );
  }
}

export default Info;
