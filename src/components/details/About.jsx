/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import styles from './Details.module.css';

function About() {
  return (
    <div id="aboutSection">
      <div className={styles.title}>
        About Me
      </div>
      <div className={styles.aboutText}>
        <span className={styles.boldText}>
          Hi! I&apos;m Rachel,
        </span>
        {' '}
        a software engineer based in Toronto, Canada. I&apos;m a deep thinker and creative problem solver. I love looking behind the curtain to see how things work! I&apos;m insatiably curious and detail oriented, which helps me pick up new skills quickly. While I value working hard by myself and getting things done, I believe the best results are achieved through collaboration with others.
        <br />
        <br />
        When I&apos;m not coding, I enjoy exploring nature, cooking or practicing my French! (parce que j&apos;ai besoin de pratiquer &#128579;)
      </div>
      <div className={styles.pictureContainer}>
        <img className={styles.pictures} src="https://rachel-portfolio.s3.amazonaws.com/flower-small.jpg" alt="flower" />
        <img className={styles.pictures} src="https://rachel-portfolio.s3.amazonaws.com/raspberries-small.jpg" alt="raspberry patch" />
        <img className={styles.pictures} src="https://rachel-portfolio.s3.amazonaws.com/strawberries-small.jpg" alt="wild strawberries" />
        <img className={styles.pictures} src="https://rachel-portfolio.s3.amazonaws.com/ocean-small.jpg" alt="ocean and sky" />
      </div>
    </div>
  );
}

export default About;
