import React, { Component } from 'react';

// #LIST DATA#
import { RECOMMEND } from '../../Data/jj/Data';

class RecommendList extends Component {
  render() {
    return (
      <>
        {RECOMMEND.map((el, i) => {
          return (
            <div className="asReList">
              <div className="asReListLeft">
                <img alt="account" src={el.src} />
                <div className="asReInfo">
                  <p>{el.userName}</p>
                  <p>who likes u</p>
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
