import React from 'react';

import './Story.scss';

class Story extends React.Component {
  render() {
    console.log(this.props);
    return (
      <ul className="story-container">
        {this.props.storyLis.map(story => (
          <li>
            <div className="gradient-back img-container">
              <img
                className="user-img"
                src={story.userImg}
                alt={story.userImg}
              />
            </div>
            <span>{story.userName}</span>
          </li>
        ))}
      </ul>
    );
  }
}

export default Story;
