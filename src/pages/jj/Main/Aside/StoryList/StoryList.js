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
              <img alt="account" src={el.src} className="asStoryImg" />
              <div className="asStoryInfo">
                <p className="asStoryInfoUserName">{el.userName}</p>
                <p className="asStoryInfoTime">{el.time}</p>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default StoryList;
