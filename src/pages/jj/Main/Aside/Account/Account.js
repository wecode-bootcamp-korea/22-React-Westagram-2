import React, { Component } from 'react';

export class Account extends Component {
  render() {
    return (
      <>
        <div className="asMyAccount">
          <img
            alt="account"
            src="/images/jj/img_my_account.jpg"
            className="asMyAccountImg"
          />
          <div className="asMyProfile">
            <p className="asMyProfileTitle">wecode_bootcamp</p>
            <div className="asMyProfile_bottom">
              <p className="asMyProfile_bottom_EngTitle">Wecode</p>
              <p className="asMyProfile_bottom_korTitle">위코드</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Account;
