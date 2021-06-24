import React from 'react';
import './Article.scss';
import '../../../Styles/Common.scss';

class Article extends React.Component {
  render() {
    return (
      <article className="Article">
        <div className="contentHead">
          <div className="contentHeadProfileThum"><img src="images/profile.png" alt="작성자 프로필 사진" /></div>
          <div className="contentHeadProfile"><p>wecode_bootcamp</p><p>wecode - 위코드</p></div>
          <div className="contentHeadMoreOption"><button>...</button></div>
        </div>
        <div className="imgContent">
          <img src="images/main.jpeg" alt="메인 사진" />
        </div>
        <div className="artcl bottom">
          <div className="bottomBts">
            <img alt="hart" src="images/heart.png" />
            <img alt="comment" src="images/comment.png" />
            <img alt="share" src="images/share.png" />
            <img alt="hart" id="bookMark" src="images/bookmark.png" />
        </div>
          <p id="likeCount">좋아요 1,392개</p>
          <div id="comments">
            <div className="comment-row">
              <div id="commentWrap">
                <textarea id="new-comment" name="new_comment"  placeholder="댓글 달기..."></textarea>
                <button type="submit" onclick="submitComment()">게시</button>                            
              </div>
            </div>
          </div>
        </div>
      </article>
		)
  }
}

export default Article