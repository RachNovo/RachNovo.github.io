import React, {Component} from 'react';
import styles, {main, title, aboutText, boldText, pictureContainer, pictures} from '../Details.css';

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={main} id={'about'}>
        <div className={title}>
        Who Am I?
        </div>
        <div className={aboutText}>
        <span className={boldText}>Hi, I'm Rachel! </span> I am a deep thinker and creative problem solver. I love looking behind the curtain to see how things work! I am insatiably curious and detail oriented which helps me pick up new skills quickly. And while I value the focus I am able to achieve when working by myself, I believe the best results come through the collaboration of many unique perspectives.
        <br/>
        <br/>
        I'm a full stack software engineer in the Toronto area looking for new opportunities. Do you know of a company that's looking for a passionate and empathetic team member?
        <br/>
        <br/>
        When I'm not coding, I enjoy playing my cello, exploring nature, cooking or practicing my French!
        </div>
        <div className={pictureContainer}>
          <img className={pictures} src='https://rachel-portfolio.s3.amazonaws.com/flower.jpg'></img>
          <img className={pictures} src='https://rachel-portfolio.s3.amazonaws.com/raspberries.jpeg'></img>
          <img className={pictures} src='https://rachel-portfolio.s3.amazonaws.com/strawberry.jpg'></img>
          {/* <img className={pictures} src='https://rachel-portfolio.s3.amazonaws.com/received_467244173788734.jpeg'></img> */}
          <img className={pictures} src='https://rachel-portfolio.s3.amazonaws.com/ocean.jpg'></img>
          {/* <img className={pictures} src='https://rachel-portfolio.s3.amazonaws.com/Screenshot_20200213-223855.jpg'></img>
          <img className={pictures} src='https://rachel-portfolio.s3.amazonaws.com/20190504_170730.jpg'></img> */}
        </div>
      </div>
    )
  }
}

export default About;