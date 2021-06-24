import React from 'react';

import './MyInfo.scss';

class MyInfo extends React.Component {
  render() {
    return (
      <div className="my-container">
        <div className="img-container">
          <img
            alt={this.props.myInfo.userImg}
            src={this.props.myInfo.userImg}
            className="user-img"
          />
        </div>
        <div className="my-info">
          <em className="user-name">{this.props.myInfo.userName}</em>
          <p>{this.props.myInfo.userDesc}</p>
        </div>
      </div>
    );
  }
}

export default MyInfo;
