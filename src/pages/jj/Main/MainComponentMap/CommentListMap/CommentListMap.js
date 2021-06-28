import React, { Component } from 'react';

class CommentListMap extends Component {
  render() {
    console.log(`this.props.feedList`, this.props.feedList);
    return (
      <>
        {this.props.feedList.map((el, index) => {
          // console.log(`el`, el[index][index]);
          return (
            <li className="personalAccount" key={index}>
              <div className="commentWrap">
                <span className="userId">아이디</span>
                <span className="commnets">{el[index][index].comment}</span>
              </div>
              <div className="commentIconWrap">
                <i
                  onClick={e => this.props.changeHeartColor(el.id, index)}
                  className={
                    this.props.className[index]
                      ? 'fas fa-heart likesBtn'
                      : 'far fa-heart likesBtn'
                  }
                ></i>
                <i
                  onClick={e => this.props.deleteBtn(el.id, index)}
                  className="far fa-trash-alt deleteBtn"
                ></i>
              </div>
            </li>
          );
        })}
      </>
    );
  }
}

export default CommentListMap;
