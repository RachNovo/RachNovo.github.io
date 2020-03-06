/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles, {
  footer, credit, topLink, links,
} from './Footer.css';

function Footer() {
  return (
    <div>
      <div className={topLink}>
        <a href="#">Go back to top!</a>
      </div>
      <div className={footer}>
        <div className={credit}>
          Made with
          {' '}
          <FontAwesomeIcon icon={faHeart} />
          {' '}
          using React.js
        </div>
        <div className={links}>
          <a href="https://github.com/RachNovo/RachNovo.github.io" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
