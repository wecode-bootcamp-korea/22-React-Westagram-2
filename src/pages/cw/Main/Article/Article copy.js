import React from 'react';
import './Article.scss';
import '../../../../styles/reset.scss';
import '../../../../styles/common.scss';
import CommentInput from './CommentInput/CommentInput';

class Article extends React.Component {
  constructor() {
    super();
    this.state = {
      newComment: '',
      feeds: [
        {
          id: 1,
          userId: 'test',
          nickname: 'test id',
          profileImg: 'fas fa-user-circle',
          content: 'http://localhost:3000/images/cw/main.jpeg',
          writer: '최우하',
          newComment: 'hi',
          like: false,
        },
        {
          id: 2,
          userId: 'test',
          nickname: 'test id',
          profileImg: 'df',
          content: 'http://localhost:3000/images/main.jpeg',
          writer: '최우하',
          newComment: 'hi',
          like: false,
        },
      ],
      defaltId: '최유하나',
    };
  }
  // componentDidMount() {
  //   fetch('http://localhost:3000/data/cw/ArticleData.json', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({ data });
  //     });
  // }
  render() {
    const { feeds } = this.state;
    console.log(this.state.feeds[0].id);
    return (
      <ul>
        {feeds.map(el => {
          return (
            <li key={el.id} className="Article">
              <div className="contentHead">
                <div className="contentHeadProfileThum">
                  <i className={el.profileImg} id="profileThum"></i>
                </div>
                <div className="contentHeadProfile">
                  <p>{el.userId}</p>
                  <p>{el.nickname}</p>
                </div>
                <div className="contentHeadMoreOption">
                  <button>...</button>
                </div>
              </div>
              <div className="imgContent">
                <img src={el.content} alt="메인 사진" />
              </div>
              <div className="artcl bottom">
                <div className="bottomBts">
                  <i className="far fa-heart"></i>
                  <i className="far fa-comment"></i>
                  <i className="far fa-share-square"></i>
                  <i className="far fa-bookmark" id="bookMark"></i>
                </div>
                <p id="likeCount">좋아요 1,392개</p>
                <CommentInput
                  newComment={el.newComment}
                  id={el.id}
                  writer={el.writer}
                  like={el.like}
                  comments={el}
                />
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Article;
