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
  state = {
    myInfo: {
      userName: 'summer_always',
      userImg: '/images/summer/myprofile.jpg',
      userDesc: 'Hi! Have a nice day:)',
    },
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
        postId: 1001,
        userName: 'ginger',
        userImg: '/images/summer/profile6.jpg',
        postImg: '/images/summer/micheile-henderson-6nNJOV8J1B4-unsplash.jpg',
        postText: '무화과 어쩌구 팬케이크 먹음',
        postTime: '6시간 ',
      },
      {
        postId: 1002,
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
            <Story storyLis={this.state.stories} />
            <Feed feedLis={this.state.feeds} />
          </article>
          <div className="right-container">
            <aside>
              <MyInfo myInfo={this.state.myInfo} />
              <Recommend recommendLis={this.state.recommend} />
            </aside>
            <Footer />
          </div>
        </main>
      </div>
    );
  }
}

export default MainSummer;
