import React from 'react';

import './MyInfo.scss';

class MyInfo extends React.Component {
  render() {
    const { myInfo } = this.props;

    return (
      <div className="my-container">
        <div className="img-container">
          <img alt={myInfo.userImg} src={myInfo.userImg} className="user-img" />
        </div>
        <div className="my-info">
          <em className="user-name">{myInfo.userName}</em>
          <p>{myInfo.userDesc}</p>
        </div>
      </div>
    );
  }
}

export default MyInfo;
