import React from 'react';
import './RightProfile.scss';
import '../../../../Styles/Common.scss';

class RightProfile extends React.Component {
  render() {
    return (
      <div className="RightProfile">
          <div className="rightProfileThum"><img src="images/profile.png" alt="작성자 프로필 사진" /></div>
          <div className="rightProfileText"><p>wecode_bootcamp</p><p class="grayText">wecode - 위코드</p></div>
      </div>
		)
  }
}

export default RightProfile