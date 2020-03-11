/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles, {
  list, close, section, menuOverlay,
} from './AppModal.css';

class AppModal extends Component {
  render() {
    const { openAppModal } = this.props;
    return (
      <>
        hey
      </>
    );
  }
}

export default AppModal;

AppModal.propTypes = {
  openAppModal: PropTypes.func.isRequired,
};
