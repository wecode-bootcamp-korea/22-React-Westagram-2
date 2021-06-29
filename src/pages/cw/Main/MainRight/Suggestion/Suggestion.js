import React from 'react';

import './Suggestion.scss';

class Suggestion extends React.Component {
  render() {
    return (
      <div className="Suggestion">
        <div className="suggestionTop">
          <span className="grayText">회원님을 위한 추천</span>
          <span>모두 보기</span>
        </div>
        <div className="suggestionContent">
          <i className="fas fa-user-circle" id="rightProfileThum"></i>
          <div className="suggestionConetntID">
            <p>아무개</p>
            <p className="grayText">20분 전</p>
          </div>
          <div className="suggestionFollow">
            <p className="linkText">팔로우</p>
          </div>
        </div>
        <div className="suggestionContent">
          <i className="fas fa-user-circle" id="rightProfileThum"></i>
          <div className="suggestionConetntID">
            <p>아무개</p>
            <p className="grayText">20분 전</p>
          </div>
          <div className="suggestionFollow">
            <p className="linkText">팔로우</p>
          </div>
        </div>
        <div className="suggestionContent">
          <i className="fas fa-user-circle" id="rightProfileThum"></i>
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
