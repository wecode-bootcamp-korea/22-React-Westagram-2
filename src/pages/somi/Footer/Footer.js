import React from 'react';
import { INFO } from './footerData';
import './Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <p className="footer">
        {INFO.map(el => {
          return (
            <li key={el.id}>
              <a href="#">{el.content}</a>
            </li>
          );
        })}
        <p className="copyright">&copy; 2021 INSTAGRAM</p>
      </p>
    );
  }
}

export default Footer;
