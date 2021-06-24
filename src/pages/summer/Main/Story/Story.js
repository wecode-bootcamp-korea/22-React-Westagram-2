import React from 'react';

import './Story.scss';

class Story extends React.Component {
  render() {
    return (
      <li>
        <div className="gradient-back img-container">
          <img
            className="user-img"
            src={this.props.userImg}
            alt={this.props.userImg}
          />
        </div>
        <span>{this.props.userName}</span>
      </li>
    );
  }
}

export default Story;
