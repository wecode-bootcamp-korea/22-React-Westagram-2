import React from 'react';
import { withRouter } from 'react-router-dom';

import FooterTop from './FooterTop/FooterTop';
import LangSet from './LangSet/LangSet';

class Footer extends React.Component {
  state = {
    langSet: true,
  };

  componentDidMount = () => {
    this.props.location.pathname === '/summer/main'
      ? this.setState({ langSet: false })
      : this.setState({ langSet: true });

    fetch('http://localhost:3000/data/summer/footerData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          footerLis: data[0].footer,
        });
      })
      .catch(err => console.log('footerLis', err));
  };

  render() {
    const { langSet, footerLis } = this.state;

    return (
      <footer>
        <FooterTop footerLis={footerLis} />
        <div className="footer-bottom">
          {langSet ? <LangSet /> : null}
          <span>© 2021 Instagram from Facebook</span>
        </div>
      </footer>
    );
  }
}

export default withRouter(Footer);
