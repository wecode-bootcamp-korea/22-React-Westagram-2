import React from 'react';

import './Suggestion.scss';

class Suggestion extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <li className="suggestionContent">
        <i className={data.sugImg} id="rightProfileThum"></i>
        <div className="suggestionConetntID">
          <p>{data.sugId}</p>
          <p className="grayText">{data.sugTime}</p>
        </div>
        <div className="suggestionFollow">
          <p className="linkText">팔로우</p>
        </div>
      </li>
    );
  }
}

export default Suggestion;
