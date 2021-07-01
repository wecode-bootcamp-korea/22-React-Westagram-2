import React, { Component } from 'react';

// #APIKEY
import api from '../../../../config/api';

class RecommendList extends Component {
  constructor() {
    super();

    this.state = {
      recommend: [],
    };
  }

  componentDidMount = () => {
    fetch(api)
      .then(res => res.json())
      .then(res => this.setState({ recommend: res[2].recommend }));
  };
  render() {
    const { recommend } = this.state;
    return (
      <>
        {recommend.map((rec, i) => {
          return (
            <div className="asReList" key={i}>
              <div className="asReListLeft">
                <img alt="account" src={rec.src} className="asReListLeftImg" />
                <div className="asReInfo">
                  <p className="asReInfoTitle">{rec.userName}</p>
                  <p className="asReInfoLikes">who likes u</p>
                </div>
              </div>
              <p className="asReListfollowBox">팔로우</p>
            </div>
          );
        })}
      </>
    );
  }
}
export default RecommendList;
