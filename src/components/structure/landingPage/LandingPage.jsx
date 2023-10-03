/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown, faDownload, faPhoneAlt, faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Header from './Header.jsx';
import styles from './LandingPage.module.css';

const LandingPage = () => {
  const emailBody = 'Hello%20Rachel!%0D%0A%0D%0AI%20found%20your%20email%20through%20your%20website%20and%20would%20like%20to%20connect%20with%20you.%0D%0A%0D%0A<insert%20message%20here>';
  return (
    <div className={styles.landingPage} id="home">
      <Header />
      <div className={styles.name}>RACHEL NOVOSELAC</div>
      <div className={styles.title}>SOFTWARE ENGINEER</div>
      <div className={styles.linkList}>
        <a href="https://rachel-portfolio.s3.amazonaws.com/Resume+September+2023.pdf" target="_blank" rel="noopener noreferrer">
          <div className={styles.link}>
            <FontAwesomeIcon icon={faDownload} />
            <div className={styles.text}>
              RESUME
            </div>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/rachel-novoselac/" target="_blank" rel="noopener noreferrer">
          <div className={styles.link}>
            <FontAwesomeIcon icon={faLinkedin} />
            <div className={styles.text}>
              LINKEDIN
            </div>
          </div>
        </a>
        <a href="https://github.com/RachNovo" target="_blank" rel="noopener noreferrer">
          <div className={styles.link}>
            <FontAwesomeIcon icon={faGithub} />
            <div className={styles.text}>
              GITHUB
            </div>
          </div>
        </a>
        <a href="tel:+19056163812">
          <div className={styles.link}>
            <FontAwesomeIcon icon={faPhoneAlt} />
            <div className={styles.text}>
              (905) 616-3812
            </div>
          </div>
        </a>
        <a href={`mailto:r.novoselac@gmail.com?Subject=Looking%20to%20Connect!&body=${emailBody}`} target="_blank" rel="noopener noreferrer">
          <div className={styles.link}>
            <FontAwesomeIcon icon={faEnvelope} />
            <div className={styles.text}>
              r.novoselac@gmail.com
            </div>
          </div>
        </a>
      </div>
      <a href="#aboutSection" aria-label="about section"><div className={styles.arrow}><FontAwesomeIcon icon={faAngleDown} size="5x" /></div></a>
    </div>
  );
};

export default LandingPage;
