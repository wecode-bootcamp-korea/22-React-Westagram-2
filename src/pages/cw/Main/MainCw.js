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
        <Nav />
        <main>
          <div className="feeds">
            <ul>
              {this.state.data.map(el => {
                return <Article key={el.id} comment={el.comment} data={el} />;
              })}
            </ul>
            <div className="rightWrap">
              <MainRight data={this.state.data} />
            </div>
          </div>
        </main>
      </section>
    );
  }
}
export default MainCw;
