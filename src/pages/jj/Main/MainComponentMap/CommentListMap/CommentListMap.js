import React, { Component } from 'react';

class CommentListMap extends Component {
  render() {
    return (
      <>
        {this.props.list.map((el, index) => {
          return (
            <li className="personalAccount" key={index}>
              <div className="commentWrap">
                <span className="userId">아이디</span>
                <span className="commnets">{el.comment}</span>
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
