import React from 'react';
import './MainRight.scss';
import '../../../../styles/reset.scss';
import '../../../../styles/common.scss';
import RightProfile from './RightProfile/RightProfile';
import RightStory from './RightStory/RightStory';
import Suggestion from './Suggestion/Suggestion';

class MainRight extends React.Component {
  render() {
    return (
      <div className="MainRight">
        <RightProfile></RightProfile>
        <RightStory></RightStory>
        <Suggestion></Suggestion>
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
