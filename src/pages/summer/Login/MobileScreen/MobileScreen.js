import React from 'react';

import './MobileScreen.scss';

class MobileScreen extends React.Component {
  render() {
    return (
      <div className="mobile-display">
        <img
          className="iphone"
          alt="아이폰"
          src="/images/summer/43cc71bb1b43.png"
        />
        <img
          className="inner-img"
          alt="아이폰 화면"
          src="/images/summer/0a2d3016f375.jpg"
        />
      </div>
    );
  }
}

export default MobileScreen;
