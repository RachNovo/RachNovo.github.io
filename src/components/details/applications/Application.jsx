/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import AppModal from './AppModal.jsx';
import styles, {
  appTitle, appContainer, appMain, appPic, appDescription, buttonContainer, appTech, appButton,
} from '../Details.css';

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.openAppModal = this.openAppModal.bind(this);
  }

  openAppModal(bool) {
    this.setState({ open: bool });
  }

  render() {
    const {
      title, githubLink, deployedApp, description, pic, gif, techList, details,
    } = this.props;
    const { open } = this.state;
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
          <div className={buttonContainer}>

            <button className={appButton} onClick={this.openAppModal.bind(this, true)} onKeyDown={this.handleKeyDown} type="button" tabIndex={0}>
              Demo
            </button>

            <div className={appButton}>
              <a href={details} target="_blank" rel="noopener noreferrer">Details</a>
            </div>

            <div className={appButton}>
              <a href={githubLink} target="_blank" rel="noopener noreferrer">Github</a>
            </div>

            {open === false ? (
              <div />
            ) : <AppModal openAppModal={this.openAppModal} gif={gif} />}
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
  details: PropTypes.string.isRequired,
  deployedApp: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
  techList: PropTypes.string.isRequired,
  gif: PropTypes.string.isRequired,
};
