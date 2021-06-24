import React from 'react';
import './RightStory.scss';
import '../../../../../styles/reset.scss';
import '../../../../../styles/common.scss';

class RightStory extends React.Component {
  render() {
    return (
      <div className="RightStory">
        <div className="rightStoryTop">
          <span className="grayText">스토리</span>
          <span>모두 보기</span>
        </div>
        <div className="rightStoryContent">
          <i className="fas fa-user-circle" id="rightProfileThum"></i>
          <div className="rigtStoryConetntID">
            <p>아무개</p>
            <p className="grayText">20분 전</p>
          </div>
        </div>
        <div className="rightStoryContent">
          <i className="fas fa-user-circle" id="rightProfileThum"></i>
          <div className="rigtStoryConetntID">
            <p>아무개</p>
            <p className="grayText">20분 전</p>
          </div>
        </div>
        <div className="rightStoryContent">
          <i className="fas fa-user-circle" id="rightProfileThum"></i>
          <div className="rigtStoryConetntID">
            <p>아무개</p>
            <p className="grayText">20분 전</p>
          </div>
        </div>
      </div>
    );
  }
}

export default RightStory;
