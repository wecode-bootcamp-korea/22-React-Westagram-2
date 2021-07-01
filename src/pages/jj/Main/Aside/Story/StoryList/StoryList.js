import React, { Component } from 'react';

// APIKEY
import api from '../../../../config/api';

class StoryList extends Component {
  constructor() {
    super();

    this.state = {
      story: [],
    };
  }

  componentDidMount = () => {
    fetch(api)
      .then(res => res.json())
      .then(res => this.setState({ story: res[1].story }));
  };

  render() {
    const { story } = this.state;
    return (
      <>
        {story.map((sto, i) => {
          return (
            <div className="asStoryList" key={i}>
              <img alt="account" src={sto.src} className="asStoryImg" />
              <div className="asStoryInfo">
                <p className="asStoryInfoUserName">{sto.userName}</p>
                <p className="asStoryInfoTime">{sto.time}</p>
              </div>
            </div>
          );
        })}
      </>
    );
  }
}

export default StoryList;
