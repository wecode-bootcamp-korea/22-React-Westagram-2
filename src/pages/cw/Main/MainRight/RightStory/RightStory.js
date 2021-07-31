import React from 'react';

import './RightStory.scss';

class RightStory extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <li className="rightStoryContent">
        <i className={data.storyImg} id="rightProfileThum"></i>
        <div className="rigtStoryConetntID">
          <p>{data.storyId}</p>
          <p className="grayText">{data.storyTime}</p>
        </div>
      </li>
    );
  }
}

export default RightStory;
