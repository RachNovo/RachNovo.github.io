import React, {Component} from 'react';
import styles, {landingPage, name, title, linkList, link, arrow, text} from './LandingPage.css';
import Header from './landingPage/Header.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faDownload } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

class LandingPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={landingPage}>
        <Header />
        <div className={name}>Rachel Novoselac</div>
        <div className={title}>Software Engineer</div>
        <div className={linkList}>
          <div className={link}>
            <FontAwesomeIcon icon={faDownload} />
            <div className={text}>
              Download CV
            </div>
          </div>
          <div className={link}>
            <FontAwesomeIcon icon={faLinkedin} />
            <div className={text}>
              View Linkedin
            </div>
          </div>
          <div className={link}>
            <FontAwesomeIcon icon={faGithub} />
            <div className={text}>
              View Github
            </div>
          </div>
        </div>
        <div className={arrow}>
        <FontAwesomeIcon icon={faAngleDown} size='5x' />
        </div>
      </div>
    )
  }
}

export default LandingPage;