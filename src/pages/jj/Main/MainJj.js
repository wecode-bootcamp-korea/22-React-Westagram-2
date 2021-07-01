import React from 'react';

// #STYLES#
import './Main.scss';
import '../../../components/Nav/Nav.scss';

// #COMPONENTS#
import Nav from '../../../components/Nav/Nav';
import MainComponent from './MainComponentMap/MainComponent';
import Recommend from './Aside/Recommend/Recommend';
import Story from './Aside/Story/Story';
import Info from './Aside/Info/Info';
import Account from './Aside/Account/Account';

// APIKEY
import api from '../config/api';

class MainJj extends React.Component {
  constructor() {
    super();

    this.state = {
      feedList: [],
    };
  }

  componentDidMount() {
    fetch(api, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => this.setState({ feedList: data[0].feeds }));
  }

  render() {
    const { feedList } = this.state;
    return (
      <div className="mainJJ">
        <Nav />
        <div className="container">
          <div className="center">
            <main id="main" className="main">
              <div className="mainContainer">
                {feedList.map(el => {
                  return <MainComponent key={el.feedId} feedList={el} />;
                })}
              </div>
            </main>
            <aside id="aside" className="aside">
              <div className="asideBg">
                <Account />
                <Story />
                <Recommend />
                <Info />
              </div>
            </aside>
          </div>
        </div>
      </div>
    );
  }
}

export default MainJj;
