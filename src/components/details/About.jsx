/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import styles, {
  title, aboutText, boldText, pictureContainer, pictures,
} from './Details.css';

function About() {
  return (
    <div id="about">
      <div className={title}>
        About Me
      </div>
      <div className={aboutText}>
        <span className={boldText}>
          Hi, I&apos;m Rachel!
        </span>
        {' '}
        I&apos;m a deep thinker and creative problem solver. I love looking behind the curtain to see how things work! I&apos;m insatiably curious and detail oriented, which helps me pick up new skills quickly. While I value working hard by myself and getting things done, I believe the best results are achieved through collaboration with others.
        <br />
        <br />
        I&apos;m a full stack software engineer in the Toronto area currently looking for new opportunities. Do you know of a company that&apos;s looking for a passionate and empathetic team member?
        <br />
        <br />
        When I&apos;m not coding, I enjoy playing my cello, exploring nature, cooking or practicing my French! (parce que j'ai besoin de pratiquer &#128579;)
      </div>
      <div className={pictureContainer}>
        <img className={pictures} src="https://rachel-portfolio.s3.amazonaws.com/flower-small.jpg" alt="flower" />
        <img className={pictures} src="https://rachel-portfolio.s3.amazonaws.com/raspberries-small.jpg" alt="raspberry patch" />
        <img className={pictures} src="https://rachel-portfolio.s3.amazonaws.com/strawberries-small.jpg" alt="wild strawberries" />
        <img className={pictures} src="https://rachel-portfolio.s3.amazonaws.com/ocean-small.jpg" alt="ocean and sky" />
      </div>
    </div>
  );
}

export default About;
