import React from 'react';

import './Recommend.scss';

class Recommend extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="recommend-container">
        <span className="grey-letter">회원님을 위한 추천</span>
        <ul>
          {this.props.recommendLis.map((rec, i) => (
            <li key={i}>
              <div className="img-container">
                <img alt={rec.userImg} src={rec.userImg} className="user-img" />
              </div>
              <div className="recommended-info">
                <em className="user-name">{rec.userName}</em>
                <span className="grey-letter">{rec.userDesc}</span>
              </div>
              <button className="blue-letter-btn">팔로우</button>
            </li>
          ))}
        </ul>
        <button>모두 보기</button>
      </div>
    );
  }
}

export default Recommend;
