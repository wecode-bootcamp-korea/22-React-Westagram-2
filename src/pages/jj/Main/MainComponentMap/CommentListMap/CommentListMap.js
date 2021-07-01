import React, { Component } from 'react';

class CommentListMap extends Component {
  render() {
    const { list, className, changeHeartColor, deleteBtn } = this.props;
    return (
      <>
        {list.map((el, index) => {
          return (
            <li className="personalAccount" key={index}>
              <div className="commentWrap">
                <span className="userId">아이디</span>
                <span className="commnets">{el.comment}</span>
              </div>
              <div className="commentIconWrap">
                <i
                  onClick={e => changeHeartColor(el.id, index)}
                  className={
                    className[index]
                      ? 'fas fa-heart likesBtn'
                      : 'far fa-heart likesBtn'
                  }
                />
                <i
                  onClick={e => deleteBtn(el.id, index)}
                  className="far fa-trash-alt deleteBtn"
                />
              </div>
            </li>
          );
        })}
      </>
    );
  }
}

export default CommentListMap;
