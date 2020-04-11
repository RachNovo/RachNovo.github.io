/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart, faDownload, faPhoneSquare, faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import styles, {
  footer, call, credit, topLink, repoLink, link,
} from './Footer.css';

function Footer() {
  const emailBody = 'Hello%20Rachel!%0D%0A%0D%0AI%20found%20your%20email%20through%20your%20website%20and%20would%20like%20to%20connect%20with%20you.%0D%0A%0D%0A<insert%20message%20here>';
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
          <div className={repoLink}>
            <a href="https://github.com/RachNovo/RachNovo.github.io" target="_blank" rel="noopener noreferrer" text="go to website repo on github"><FontAwesomeIcon icon={faGithub} /></a>
          </div>
        </div>
        <div className={call}>
          Like what you see?
        </div>
        <div>
          <span className={link}>
            <a href="https://rachel-portfolio.s3.amazonaws.com/Rachel-Novoselac-Resume.pdf" target="_blank" rel="noopener noreferrer" text="download resume">
              <FontAwesomeIcon icon={faDownload} />
              download resume
            </a>
          </span>
          <span className={link}>
            <a href="https://www.linkedin.com/in/rachel-novoselac/" target="_blank" rel="noopener noreferrer" text="my linkedin">
              <FontAwesomeIcon icon={faLinkedin} />
              my linkedin
            </a>
          </span>
          <span className={link}>
            <a href="https://github.com/RachNovo" target="_blank" rel="noopener noreferrer" text="my github">
              <FontAwesomeIcon icon={faGithub} />
              my github
            </a>
          </span>
          <span className={link}>
            <a href={`mailto:r.novoselac@gmail.com?Subject=Looking%20to%20Connect!&body=${emailBody}`} target="_blank" rel="noopener noreferrer" text="email me">
              <FontAwesomeIcon icon={faEnvelope} />
              email me
            </a>
          </span>
          <span className={link}>
            <a href="tel:+19056163812" text="call my number">
              <FontAwesomeIcon icon={faPhoneSquare} />
              call my number
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
