/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styles, {
  appTitle, appContainer, appMain, appPic, appDescription, appTech, appButton,
} from '../Details.css';

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      title, githubLink, deployedApp, description, pic, techList,
    } = this.props;
    return (
      <div className={appContainer}>
        <img className={appPic} src={pic} alt="appPic" />
        <div className={appMain}>
          <div className={appTitle}>
            {title}
          </div>
          <div className={appTech}>
            {techList}
          </div>
          <div className={appDescription}>
            {description}
          </div>
          <div className={appButton}>
            <a href={deployedApp} target="_blank" rel="noopener noreferrer">View</a>
          </div>
          <div className={appButton}>
            <a href={githubLink} target="_blank" rel="noopener noreferrer">Github</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Application;

Application.propTypes = {
  title: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
  deployedApp: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
  techList: PropTypes.string.isRequired,
};
