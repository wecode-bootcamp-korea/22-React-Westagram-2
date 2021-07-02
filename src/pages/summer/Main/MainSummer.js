import React from 'react';

import Nav from '../../../components/Nav/Nav';
import Story from './Story/Story';
import Feed from './Feed/Feed';
import Recommend from './Recommend/Recommend';
import MyInfo from './MyInfo/MyInfo';
import Footer from '../components/Footer/Footer';

import './Main.scss';

const IP_ADDRESS = '10.58.7.4';

class MainSummer extends React.Component {
  state = {
    feeds: [],
    stories: [],
    recommend: [],
    myInfo: [],
  };

  componentDidMount = () => {
    this.fetchData();

    // Promise.allSettled(promises)

    fetch(`http://localhost:3000/data/summer/storiesData.json`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          stories: data[0].stories,
        });
      })
      .catch(err => console.log('stories', err));

    fetch(`http://localhost:3000/data/summer/recommendData.json`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          recommend: data[0].recommend,
        });
      })
      .catch(err => console.log('rec', err));

    fetch(`http://localhost:3000/data/summer/myInfoData.json`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          myInfo: data[0].myInfo,
        });
      })
      .catch(err => console.log('my', err));
  };

  // fetching feed data
  fetchData = () => {
    fetch(`http://${IP_ADDRESS}:8000/postings/post`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          feeds: data.results[0].feeds,
        });
      })
      .catch(err => console.log('feeds', err));
  };

  // 작성된 댓글 서버 전송
  sendingComment = (postId, commentInput) => {
    if (commentInput === '') return;

    fetch(`http://${IP_ADDRESS}:8000/postings/comment`, {
      method: 'POST',
      body: JSON.stringify({
        name: 'peach',
        id: postId,
        content: commentInput,
      }),
    })
      .then(res => res.json())
      .then(res => console.log(res));

    this.fetchData();
  };

  render() {
    const { myInfo, stories, feeds, recommend, commentInput } = this.state;
    const { sendingComment, fetchData } = this;

    return (
      <div className="Main-summer">
        <Nav />
        <main>
          <article className="contents-container">
            {stories !== undefined && <Story storyLis={stories} />}
            <section className="feeds-container">
              {feeds !== undefined &&
                feeds.map(feed => (
                  <Feed
                    feed={feed}
                    commentInput={commentInput}
                    sendingComment={sendingComment}
                    key={feed.postId}
                    IP_ADDRESS={IP_ADDRESS}
                    fetchData={fetchData}
                  />
                ))}
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
