import React from 'react';

import './MainRight.scss';

import RightProfile from './RightProfile/RightProfile';
import RightStory from './RightStory/RightStory';
import Suggestion from './Suggestion/Suggestion';

class MainRight extends React.Component {
  render() {
    return (
      <div className="MainRight">
        <RightProfile></RightProfile>
        <div className="RightStory">
          <div className="rightStoryTop">
            <span className="grayText">스토리</span>
            <span>모두 보기</span>
          </div>
          <ul>
            {this.props.data.map(el => {
              return <RightStory key={el.id} data={el} />;
            })}
          </ul>
        </div>
        <div className="Suggestion">
          <div className="suggestionTop">
            <span className="grayText">회원님을 위한 추천</span>
            <span>모두 보기</span>
          </div>
          <ul>
            {this.props.data.map(el => {
              return <Suggestion key={el.id} data={el} />;
            })}
          </ul>
        </div>
        <div className="rigthFoot">
          Westagram 정보지원 홍보센터 API 채용정보 개인정보처리방침 약관
          디렉터리 프로필 해시태그 언어
          <br />
          <br />
          2021 WESTAGRAM
        </div>
      </div>
    );
  }
}

export default MainRight;
