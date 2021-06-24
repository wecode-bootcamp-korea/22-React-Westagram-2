import React from 'react';
import './Suggestion.scss';
import '../../../../../styles/reset.scss';
import '../../../../../styles/common.scss';

class Suggestion extends React.Component {
  render() {
    return (
      <div className="Suggestion">
        <div className="suggestionTop">
          <span className="grayText">회원님을 위한 추천</span>
          <span>모두 보기</span>
        </div>
        <div className="suggestionContent">
          <img src="images/profile.png" alt="작성자 프로필 사진" />
          <div className="suggestionConetntID">
            <p>아무개</p>
            <p className="grayText">20분 전</p>
          </div>
          <div className="suggestionFollow">
            <p className="linkText">팔로우</p>
          </div>
        </div>
        <div className="suggestionContent">
          <img src="images/profile.png" alt="작성자 프로필 사진" />
          <div className="suggestionConetntID">
            <p>아무개</p>
            <p className="grayText">20분 전</p>
          </div>
          <div className="suggestionFollow">
            <p className="linkText">팔로우</p>
          </div>
        </div>
        <div className="suggestionContent">
          <img src="images/profile.png" alt="작성자 프로필 사진" />
          <div className="suggestionConetntID">
            <p>아무개</p>
            <p className="grayText">20분 전</p>
          </div>
          <div className="suggestionFollow">
            <p className="linkText">팔로우</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Suggestion;
