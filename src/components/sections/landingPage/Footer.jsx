import React, {Component} from 'react';
import styles, {footer, credit, topLink, links} from './Footer.css';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className={topLink}>
          <a href='#'>Go back to top!</a>
        </div>
        <div className={footer}>
          <div className={credit}>
            Made with <FontAwesomeIcon icon={faHeart} /> using React.js
          </div>
          <div className={links}>
          <a href='https://github.com/RachNovo/RachNovo.github.io' target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;