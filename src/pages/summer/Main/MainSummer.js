import React from 'react';

import Nav from '../../../components/Nav/Nav';
import Story from './Story/Story';
import Feed from './Feed/Feed';
import Recommend from './Recommend/Recommend';
import MyInfo from './MyInfo/MyInfo';
import Footer from '../components/Footer/Footer';

import '../../../styles/reset.scss';
import './Main.scss';

class MainSummer extends React.Component {
  state = {};

  componentDidMount = () => {
    fetch('http://localhost:3000/data/summer/feedData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          feeds: data[0].feeds,
        });
      })
      .catch(err => console.log('feeds', err));

    fetch('http://localhost:3000/data/summer/storiesData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          stories: data[0].stories,
        });
      })
      .catch(err => console.log('stories', err));

    fetch('http://localhost:3000/data/summer/recommendData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          recommend: data[0].recommend,
        });
      })
      .catch(err => console.log('rec', err));

    fetch('http://localhost:3000/data/summer/myInfoData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          myInfo: data[0].myInfo,
        });
      })
      .catch(err => console.log('my', err));
  };

  render() {
    const { myInfo, stories, feeds, recommend } = this.state;

    return (
      <div className="Main-summer">
        <Nav />
        <main>
          <article className="contents-container">
            {stories !== undefined && <Story storyLis={stories} />}
            <section className="feeds-container">
              {feeds !== undefined &&
                feeds.map(feed => <Feed feed={feed} key={feed.postId} />)}
            </section>
          </article>
          <div className="right-container">
            <aside>
              {myInfo !== undefined && <MyInfo myInfo={myInfo} />}
              {recommend !== undefined && (
                <Recommend recommendLis={recommend} />
              )}
            </aside>
            <Footer />
          </div>
        </main>
      </div>
    );
  }
}

export default MainSummer;
