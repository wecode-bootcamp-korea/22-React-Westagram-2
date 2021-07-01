import React, { Component } from 'react';
import RecommendList from './RecommendList/RecommendList';

export class Recommend extends Component {
  render() {
    return (
      <>
        <div className="asRecommandation">
          <div className="asReTop">
            <p className="asReTopTitle">회원님을 위한 추천</p>
            <p className="asReTopSeeAll">모두보기</p>
          </div>
          <div className="asReListWrap">
            <RecommendList />
          </div>
        </div>
      </>
    );
  }
}

export default Recommend;
