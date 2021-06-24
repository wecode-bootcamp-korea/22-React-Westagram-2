import React from 'react';
import './Main.scss';
import '../../../styles/reset.scss';
import '../../../styles/common.scss';
import Nav from '../../../components/Nav/Nav';
import Article from './Article/Article';
import MainRight from './MainRight/MainRight';

class MainCw extends React.Component {
  render() {
    return (
      <section className="MainCw">
        <Nav></Nav>
        <main>
          <div className="feeds">
            <Article></Article>
            <MainRight></MainRight>
          </div>
        </main>
      </section>
    );
  }
}
export default MainCw;
