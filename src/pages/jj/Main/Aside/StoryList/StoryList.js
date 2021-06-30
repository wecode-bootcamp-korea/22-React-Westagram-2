import React, { Component } from 'react';

// #LIST DATA#
import { STORY } from '../../Data/jj/Data';

class StoryList extends Component {
  render() {
    return (
      <>
        {STORY.map((el, i) => {
          console.log(el);
          return (
            <div className="asStoryList" key={el.id}>
              <img alt="account" src={el.src} />
              <div className="asStoryInfo">
                <p>{el.userName}</p>
                <p>{el.time}</p>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default StoryList;
