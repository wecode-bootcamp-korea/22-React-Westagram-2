import React from 'react';
import './Article.scss';
import '../../../../styles/reset.scss';
import '../../../../styles/common.scss';
import MainPicture from '../Images/main.jpeg';
import CommentInput from './CommentInput/CommentInput';

class Article extends React.Component {
  render() {
    return (
      <article className="Article">
        <div className="contentHead">
          <div className="contentHeadProfileThum">
            <i className="fas fa-user-circle" id="profileThum"></i>
          </div>
          <div className="contentHeadProfile">
            <p>wecode_bootcamp</p>
            <p>wecode - 위코드</p>
          </div>
          <div className="contentHeadMoreOption">
            <button>...</button>
          </div>
        </div>
        <div className="imgContent">
          <img src={MainPicture} alt="메인 사진" />
        </div>
        <div className="artcl bottom">
          <div className="bottomBts">
            <i className="far fa-heart"></i>
            <i className="far fa-comment"></i>
            <i className="far fa-share-square"></i>
            <i className="far fa-bookmark" id="bookMark"></i>
          </div>
          <p id="likeCount">좋아요 1,392개</p>
          <CommentInput />
        </div>
      </article>
    );
  }
}

export default Article;
