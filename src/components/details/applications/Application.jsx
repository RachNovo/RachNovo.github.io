/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import AppModal from './AppModal.jsx';
import styles from '../Details.module.css';

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
      <div className={styles.appContainer}>
        <img className={styles.appPic} src={pic} alt="appPic" />
        <div className={styles.appMain}>
          <div className={styles.appTitle}>
            {title}
          </div>
          <div className={styles.appTech}>
            {techList}
          </div>
          <div className={styles.appDescription}>
            {description}
          </div>
          <div className={styles.buttonContainer}>

            <button
              className={styles.appButton}
              onClick={this.openAppModal.bind(this, true)}
              type="button"
              tabIndex={0}
            >
              View
            </button>

            <div className={styles.appButton}>
              <a href={details} target="_blank" rel="noopener noreferrer">Details</a>
            </div>

            <div className={styles.appButton}>
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
