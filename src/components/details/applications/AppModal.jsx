/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles, {
  modalOverlay, main, close, image,
} from './AppModal.css';

class AppModal extends Component {
  render() {
    const { openAppModal, gif } = this.props;
    return (
      <>
        <div className={modalOverlay} onClick={openAppModal.bind(null, false)} onKeyDown={this.handleKeyDown} role="button" label="text" tabIndex={0} />
        <div className={main} onClick={openAppModal.bind(null, false)} onKeyDown={this.handleKeyDown} role="button" label="text" tabIndex={0}>
          <img className={image} src={gif} alt="appPic" />
          <span className={close}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </div>
      </>
    );
  }
}

export default AppModal;

AppModal.propTypes = {
  openAppModal: PropTypes.func.isRequired,
  gif: PropTypes.string.isRequired,
};