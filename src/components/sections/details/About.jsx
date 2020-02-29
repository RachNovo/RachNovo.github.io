import React, {Component} from 'react';
import styles, {main, title, aboutText, boldText, pictureContainer, pictures} from '../Details.css';

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={main}>
        <div className={title}>
        Who Am I?
        </div>
        <div className={aboutText}>
        <span className={boldText}>Hi, I'm Rachel! </span> I am a deep thinker and creative problem solver. One of my favourite things to do is look behind the curtain to see how things work. My main fascinations include language, people and programming.
        <br/>
        <br/>
        I'm a full stack software engineer in the Toronto area looking for new opportunities. Do you know of a company that's looking for a passionate and empathetic team member?
        <br/>
        <br/>
        When I'm not coding I enjoy playing my cello, exploring nature, cooking, being active or practicing my French!
        </div>
        <div className={pictureContainer}>
          <img className={pictures} src='https://rachel-portfolio.s3.amazonaws.com/20190623_204321.jpg'></img>
          <img className={pictures} src='https://rachel-portfolio.s3.amazonaws.com/received_494242798088765.jpeg'></img>
          <img className={pictures} src='https://rachel-portfolio.s3.amazonaws.com/20190720_185819.jpg'></img>
          {/* <img className={pictures} src='https://rachel-portfolio.s3.amazonaws.com/received_467244173788734.jpeg'></img> */}
          <img className={pictures} src='https://rachel-portfolio.s3.amazonaws.com/Screenshot_20200223-173249.jpg'></img>
          {/* <img className={pictures} src='https://rachel-portfolio.s3.amazonaws.com/Screenshot_20200213-223855.jpg'></img>
          <img className={pictures} src='https://rachel-portfolio.s3.amazonaws.com/20190504_170730.jpg'></img> */}
        </div>
      </div>
    )
  }
}

export default About;