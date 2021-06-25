import React from 'react';

import './Story.scss';

class Story extends React.Component {
  render() {
    const { storyLis } = this.props;

    return (
      <ul className="story-container">
        {storyLis.map((story, i) => (
          <li key={i}>
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
