/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes, faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';
import styles, { header, section, menu } from './Header.css';
import Modal from './Modal.jsx';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.openModal = this.openModal.bind(this);
  }

  openModal(bool) {
    console.log('it worked!!', bool);
    this.setState({ open: bool });
  }

  render() {
    const { open } = this.state;
    return (
      <div className={header}>
        {open === false ? (
          <button className={menu} onClick={this.openModal.bind(this, true)} onKeyDown={this.handleKeyDown} type="button" tabIndex={0}>
            <FontAwesomeIcon icon={faEllipsisH} />
          </button>
        ) : <Modal openModal={this.openModal} />}
      </div>
    );
  }
}

export default Header;
