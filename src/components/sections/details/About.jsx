import React, {Component} from 'react';
import styles, {main, title, text, boldText, pictures} from '../Details.css';

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
        <div>
          <img className={pictures} src='https://rachel-portfolio.s3.amazonaws.com/IMG_4462+copy.jpg'></img>
          <img className={pictures} src='https://rachel-portfolio.s3.amazonaws.com/IMG_4462+copy.jpg'></img>
          <img className={pictures} src='https://rachel-portfolio.s3.amazonaws.com/IMG_4462+copy.jpg'></img>
          <img className={pictures} src='https://rachel-portfolio.s3.amazonaws.com/IMG_4462+copy.jpg'></img>
          <img className={pictures} src='https://rachel-portfolio.s3.amazonaws.com/IMG_4462+copy.jpg'></img>
          <img className={pictures} src='https://rachel-portfolio.s3.amazonaws.com/IMG_4462+copy.jpg'></img>
        </div>
      </div>
    )
  }
}

export default About;