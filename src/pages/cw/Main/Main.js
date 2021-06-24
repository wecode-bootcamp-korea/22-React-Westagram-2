import React from 'react';
import './Main.scss';
import '../../Styles/Common.scss';
import TopNav from '../../Components/TopNav';
import Article from './Article/Article';
import MainRight from './MainRight/MainRight';



class Main extends React.Component {
  render() {
    return (
    <body className="Main">
        <TopNav></TopNav>
        <main>
        <div className="feeds">
            <Article></Article>
            <MainRight></MainRight>
        </div>
        </main>
    </body>
	)
  }
}

export default Main