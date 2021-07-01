import React, { Component } from 'react';
import StoryList from './StoryList/StoryList';

export class Story extends Component {
  render() {
    return (
      <>
        <div className="asStory">
          <div className="asStoryTop">
            <p className="asStoryTopTitle">스토리</p>
            <p className="asStoryTopSeeAll">모두보기</p>
          </div>
          <div className="asStoryListWrap">
            <StoryList />
          </div>
        </div>
      </>
    );
  }
}

export default Story;
