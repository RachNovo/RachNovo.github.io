/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from './Menu.module.css';

class Menu extends Component {
  render() {
    const { openMenu } = this.props;
    return (
      <>
        <div className={styles.menuOverlay} onClick={openMenu.bind(null, false)} onKeyDown={this.handleKeyDown} role="button" label="text" tabIndex={0} />
        <span className={styles.close} onClick={openMenu.bind(null, false)} onKeyDown={this.handleKeyDown} role="button" label="text" tabIndex={0}>
          <FontAwesomeIcon icon={faTimes} />
        </span>
        <div className={styles.list}>
          <a href="#home" onClick={openMenu.bind(null, false)}><div className={styles.section}>Home</div></a>
          <a href="#aboutSection" onClick={openMenu.bind(null, false)}><div className={styles.section}>About</div></a>
          <a href="#skillsSection" onClick={openMenu.bind(null, false)}><div className={styles.section}>Skills</div></a>
          <a href="#experienceSection" onClick={openMenu.bind(null, false)}><div className={styles.section}>Work Experience</div></a>
          <a href="#educationSection" onClick={openMenu.bind(null, false)}><div className={styles.section}>Education</div></a>
          <a href="#applicationsSection" onClick={openMenu.bind(null, false)}><div className={styles.section}>Applications</div></a>
          <a href="#volunteeringSection" onClick={openMenu.bind(null, false)}><div className={styles.section}>Volunteering</div></a>
        </div>
      </>
    );
  }
}

export default Menu;

Menu.propTypes = {
  openMenu: PropTypes.func.isRequired,
};
