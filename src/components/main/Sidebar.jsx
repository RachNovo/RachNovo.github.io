import React, {Component} from 'react';
import styles, {picture, main, title, list, post} from './Sidebar.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={main}>
        <div>
          <img className={picture} src='https://rachel-portfolio.s3.amazonaws.com/IMG_4462+copy.jpg'></img>
        </div>
        <div className={title}>
        Rachel Novoselac
        Software Engineer
        </div>

        <div className={list}>
          <p>Home</p>
          <p>About</p>
          <p>Skills</p>
          <p>Applications</p>
          <p>Work Experience</p>
          <p>Contact</p>
        </div>
        <div className={post}>
          <p>
            This website was created by me from scratch using React.js <br/>
            <a href="https://github.com/RachNovo/RachNovo.github.io" target='_blank'>Github repo</a>
          </p>
        </div>
      </div>
    )
  }
}

export default Sidebar;