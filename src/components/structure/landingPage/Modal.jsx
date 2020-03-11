/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles, {
  modal, list, close, section, modalOverlay,
} from './Modal.css';

class Modal extends Component {
  render() {
    const { openModal } = this.props;
    return (
      <>
        <div className={modalOverlay} onClick={openModal.bind(null, false)} onKeyDown={this.handleKeyDown} role="button" label="text" tabIndex={0} />
        <span className={close} onClick={openModal.bind(null, false)} onKeyDown={this.handleKeyDown} role="button" label="text" tabIndex={0}>
          <FontAwesomeIcon icon={faTimes} />
        </span>
        <div className={list}>
          <a href="#aboutSection"><div className={section}>About</div></a>
          <a href="#skillsSection"><div className={section}>Skills</div></a>
          <a href="#applicationsSection"><div className={section}>Applications</div></a>
          <a href="#educationSection"><div className={section}>Education</div></a>
          <a href="#volunteeringSection"><div className={section}>Volunteering</div></a>
        </div>
      </>
    );
  }
}

export default Modal;

Modal.propTypes = {
  openModal: PropTypes.func.isRequired,
};