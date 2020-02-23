import React, {Component} from 'react';
import styles, {main, title, text, boldText, pictureContainer, pictures} from '../Details.css';

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
        <div className={text}>
        <span className={boldText}>Hi, I'm Rachel! </span> Seeing how things connect excites me! Whether that's data flowing through an application or the way meaning is conveyed in a language. I pick up new tech quickly and enjoy digging through code to find a tough bug. See the experience section to check out my recent applications!
        <br/>
        <br/>
        I'm a software engineer in the Toronto area looking for new opportunities. Do you know of a company that's looking for a passionate and empathetic team member?
        </div>
        <div className={pictureContainer}>
          <img className={pictures} src='https://rachel-portfolio.s3.amazonaws.com/20190623_204321.jpg'></img>
          <img className={pictures} src='https://rachel-portfolio.s3.amazonaws.com/received_494242798088765.jpeg'></img>
          <img className={pictures} src='https://rachel-portfolio.s3.amazonaws.com/20190720_185819.jpg'></img>
          <img className={pictures} src='https://rachel-portfolio.s3.amazonaws.com/received_467244173788734.jpeg'></img>
          <img className={pictures} src='https://rachel-portfolio.s3.amazonaws.com/Screenshot_20200223-173249.jpg'></img>
          {/* <img className={pictures} src='https://rachel-portfolio.s3.amazonaws.com/Screenshot_20200213-223855.jpg'></img>
          <img className={pictures} src='https://rachel-portfolio.s3.amazonaws.com/20190504_170730.jpg'></img> */}
        </div>
      </div>
    )
  }
}

export default About;