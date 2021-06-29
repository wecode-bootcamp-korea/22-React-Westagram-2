import React from 'react';

import './FooterTop.scss';

class FooterTop extends React.Component {
  render() {
    const { footerLis } = this.props;

    return (
      <ul className="footer-top">
        {footerLis !== undefined &&
          footerLis.map((li, i) => (
            <li key={i}>
              <a href="#">{li}</a>
            </li>
          ))}
      </ul>
    );
  }
}

export default FooterTop;
