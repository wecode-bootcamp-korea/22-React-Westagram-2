import React from 'react';

import './Recommend.scss';

class Recommend extends React.Component {
  render() {
    return (
      // <div className="recommend-container">
      //   <span className="grey-letter">회원님을 위한 추천</span>
      //   <ul>
      //     {this.state.recommend.map(rec => (
      //       <Recommend
      //         userName={rec.userName}
      //         userImg={rec.userImg}
      //         userDesc={rec.userDesc}
      //       />
      //     ))}

      <li>
        <div className="img-container">
          <img
            alt={this.props.userImg}
            src={this.props.userImg}
            className="user-img"
          />
        </div>
        <div className="recommended-info">
          <em className="user-name">{this.props.userName}</em>
          <span className="grey-letter">{this.props.userDesc}</span>
        </div>
        <button className="blue-letter-btn">팔로우</button>
      </li>
    );
  }
}

export default Recommend;
