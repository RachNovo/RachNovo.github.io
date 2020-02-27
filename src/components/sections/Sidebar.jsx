import React, {Component} from 'react';
import styles, {main, header, picture, name, title, list, post, download, downloadHover} from './Sidebar.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    }
    this.hoverTrigger = this.hoverTrigger.bind(this);
  }
  hoverTrigger(boolean) {
    this.setState({hover: boolean})
  }
  render() {
    return (
      <div className={main}>
            <img className={picture} src='https://rachel-portfolio.s3.amazonaws.com/IMG_4462+copy.jpg'></img>
        <div className={header}>
          <div className={name}>
          Rachel Novoselac
          </div>
          <div className={title}>
          Software Engineer
          </div>
          <div className={this.state.hover ? downloadHover : download} onMouseEnter={this.hoverTrigger.bind(null, true)} onMouseLeave={this.hoverTrigger.bind(null, false)}>
            Download CV
          </div>
        </div>
        <div className={list}>
          <p>Home</p>
          <p>About</p>
          <p>Skills</p>
          <p>Applications</p>
          {/* <p>Work Experience</p> */}
          <p>Education</p>
          <p>Contact</p>
        </div>
        <div className={post}>
          <p>
            Built with React.js <br/>
            <a href="https://github.com/RachNovo/RachNovo.github.io" target='_blank'>Github repo</a>
          </p>
        </div>
      </div>
    )
  }
}

export default Sidebar;