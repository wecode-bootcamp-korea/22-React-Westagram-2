import React from 'react';

import Nav from '../../../components/Nav/Nav';
import Story from './Story/Story';
import Feed from './Feed/Feed';
import Recommend from './Recommend/Recommend';
import Footer from './Footer/Footer';

import '../../../styles/reset.scss';
import './Main.scss';

class MainSummer extends React.Component {
  state = {
    stories: [
      {
        userName: 'doggy',
        userImg: '/images/summer/profile7.jpg',
      },
      {
        userName: 'katy',
        userImg: '/images/summer/profile2.jpg',
      },
      {
        userName: 'mew',
        userImg: '/images/summer/profile3.jpg',
      },
      {
        userName: 'hello',
        userImg: '/images/summer/profile4.jpg',
      },
      {
        userName: 'yellow_blue',
        userImg: '/images/summer/profile5.jpg',
      },
      {
        userName: 'ginger',
        userImg: '/images/summer/profile6.jpg',
      },
      {
        userName: 'test_user',
        userImg: '/images/summer/profile1.jpg',
      },
      {
        userName: 'imUser',
        userImg: '/images/summer/profile8.jpg',
      },
    ],
    feeds: [
      {
        userName: 'ginger',
        userImg: '/images/summer/profile6.jpg',
        postImg: '/images/summer/micheile-henderson-6nNJOV8J1B4-unsplash.jpg',
        postText: '무화과 어쩌구 팬케이크 먹음',
        postTime: '6시간 ',
      },
      {
        userName: 'doggy',
        userImg: '/images/summer/profile7.jpg',
        postImg: '/images/summer/massimo-negrello-ByYzyR8UlG0-unsplash.jpg',
        postText: '오늘은 여자친구랑 산책을 다녀왔다',
        postTime: '8시간',
      },
    ],
    recommend: [
      {
        userName: 'miao_cat',
        userImg: '/images/summer/profile3.jpg',
        userDesc: '회원님을 팔로우합니다',
      },
      {
        userName: 'doggyDog',
        userImg: '/images/summer/profile7.jpg',
        userDesc: 'mewmew님 외 1명이 팔로우합니다',
      },
      {
        userName: 'test_user',
        userImg: '/images/summer/profile1.jpg',
        userDesc: '회원님을 팔로우합니다',
      },
      {
        userName: 'qwertasd',
        userImg: '/images/summer/profile6.jpg',
        userDesc: '회원님을 팔로우합니다',
      },
      {
        userName: 'asdfzx_d54',
        userImg: '/images/summer/profile4.jpg',
        userDesc: 'katy님 외 3명이 팔로우합니다',
      },
    ],
    comments: [],
  };

  render() {
    return (
      <div className="Main-summer">
        <Nav />
        <main>
          <article className="contents-container">
            <ul className="story-container">
              {this.state.stories.map(story => (
                <Story
                  userImg={story.userImg}
                  alt={story.userImg}
                  userName={story.userName}
                />
              ))}
            </ul>
            <section className="feeds-container">
              {this.state.feeds.map(feed => (
                <Feed
                  userName={feed.userName}
                  userImg={feed.userImg}
                  postImg={feed.postImg}
                  postText={feed.postText}
                  postTime={feed.postTime}
                />
              ))}
            </section>
          </article>
          <div className="right-container">
            <aside>
              <div className="my-container">
                <div className="img-container">
                  <img
                    alt="프로필"
                    src="/images/summer/myprofile.jpg"
                    className="user-img"
                  />
                </div>
                <div className="my-info">
                  <em className="user-name">usually_summer</em>
                  <p>자기소개</p>
                </div>
              </div>
              {/* <Recommend {this.state.recommend={recommend}} /> */}
              <div className="recommend-container">
                <span className="grey-letter">회원님을 위한 추천</span>
                <ul>
                  {this.state.recommend.map(rec => (
                    <Recommend
                      userName={rec.userName}
                      userImg={rec.userImg}
                      userDesc={rec.userDesc}
                    />
                  ))}
                </ul>
                <button>모두 보기</button>
              </div>
            </aside>
            <Footer />
          </div>
        </main>
      </div>
    );
  }
}

export default MainSummer;
