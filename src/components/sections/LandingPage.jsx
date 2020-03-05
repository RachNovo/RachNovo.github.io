import React, {Component} from 'react';
import styles, {landingPage, name, title, linkList, link, arrow, text, a} from './LandingPage.css';
import Header from './landingPage/Header.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faDownload, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

class LandingPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const emailBody = `Hello%20Rachel!%0D%0A%0D%0AI%20found%20your%20email%20through%20your%20website%20and%20would%20like%20to%20connect%20with%20you.%0D%0A%0D%0A<insert%20message%20here>`;
    return (
      <div className={landingPage}>
        <Header />
        <div className={name}>RACHEL NOVOSELAC</div>
        <div className={title}>SOFTWARE ENGINEER</div>
        <div className={linkList}>
          <div className={link}>
            <FontAwesomeIcon icon={faDownload} />
            <div className={text}>
              <a href='https://rachel-portfolio.s3.amazonaws.com/Rachel+Novoselac+Resume.pdf' target='_blank'>DOWNLOAD CV</a>
            </div>
          </div>
          <div className={link}>
            <FontAwesomeIcon icon={faLinkedin} />
            <div className={text}>
              <a href='https://www.linkedin.com/in/rachel-novoselac/' target='_blank'>VIEW LINKEDIN</a>
            </div>
          </div>
          <div className={link}>
            <FontAwesomeIcon icon={faGithub} />
            <div className={text}>
              <a href='https://github.com/RachNovo' target='_blank'>VIEW GITHUB</a>
            </div>
          </div>
          <div className={link}>
            <FontAwesomeIcon icon={faPhoneAlt} />
            <div className={text}>
              <a href="tel:+19056163812">{'(905) 616-3812'}</a>
            </div>
          </div>
          <div className={link}>
            <FontAwesomeIcon icon={faEnvelope} />
            <div className={text}>
            <a href={`mailto:r.novoselac@gmail.com?Subject=Looking%20to%20Connect!&body=${emailBody}`}>r.novoselac@gmail.com</a>
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