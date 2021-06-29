import React from 'react';

import './Main.scss';

import Nav from '../../../components/Nav/Nav';
import Article from './Article/Article';
import MainRight from './MainRight/MainRight';

class MainCw extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/cw/MainData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          data: data,
        });
      });
  }
  render() {
    return (
      <section className="MainCw">
        <Nav></Nav>
        <main>
          <div className="feeds">
            <ul>
              {this.state.data.map(el => {
                return (
                  <Article
                    key={el.id}
                    userId={el.userId}
                    nickname={el.nickname}
                    profileImg={el.profileImg}
                    content={el.content}
                    wirter={el.wirter}
                    newComment={el.newComment}
                    like={el.like}
                  ></Article>
                );
              })}
            </ul>
            <MainRight></MainRight>
          </div>
        </main>
      </section>
    );
  }
}
export default MainCw;
