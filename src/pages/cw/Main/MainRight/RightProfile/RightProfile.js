import React from 'react';
import './RightProfile.scss';
import '../../../../../styles/reset.scss';
import '../../../../../styles/common.scss';

class RightProfile extends React.Component {
  render() {
    return (
      <div className="RightProfile">
        <div className="rightProfileThum">
          <i className="fas fa-user-circle" id="rightProfileThum"></i>
        </div>
        <div className="rightProfileText">
          <p>wecode_bootcamp</p>
          <p className="grayText">wecode - 위코드</p>
        </div>
      </div>
    );
  }
}

export default RightProfile;
