/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart, faDownload, faPhoneSquare, faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.css';

function Footer() {
  const emailBody = 'Hello%20Rachel!%0D%0A%0D%0AI%20found%20your%20email%20through%20your%20website%20and%20would%20like%20to%20connect%20with%20you.%0D%0A%0D%0A<insert%20message%20here>';
  return (
    <div>
      <div className={styles.topLink}>
        <a href="#">Go back to top!</a>
      </div>
      <div className={styles.footer}>
        <div className={styles.credit}>
          Made with
          {' '}
          <FontAwesomeIcon icon={faHeart} />
          {' '}
          using React.js
          <div className={styles.repoLink}>
            <a href="https://github.com/RachNovo/RachNovo.github.io" target="_blank" rel="noopener noreferrer" aria-label="website repo on github"><FontAwesomeIcon icon={faGithub} /></a>
          </div>
        </div>
        <div className={styles.call}>
          Like what you see?
        </div>
        <div>
          <span className={styles.link}>
            <a href="https://rachel-portfolio.s3.amazonaws.com/Rachel-Novoselac-Resume.pdf" target="_blank" rel="noopener noreferrer" aria-label="download resume">
              <FontAwesomeIcon icon={faDownload} />
            </a>
          </span>
          <span className={styles.link}>
            <a href="https://www.linkedin.com/in/rachel-novoselac/" target="_blank" rel="noopener noreferrer" aria-label="my linkedin">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </span>
          <span className={styles.link}>
            <a href="https://github.com/RachNovo" target="_blank" rel="noopener noreferrer" aria-label="my github">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </span>
          <span className={styles.link}>
            <a href={`mailto:r.novoselac@gmail.com?Subject=Looking%20to%20Connect!&body=${emailBody}`} target="_blank" rel="noopener noreferrer" aria-label="email me">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </span>
          <span className={styles.link}>
            <a href="tel:+19056163812" aria-label="call my number">
              <FontAwesomeIcon icon={faPhoneSquare} />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
