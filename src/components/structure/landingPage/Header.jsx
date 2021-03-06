/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTimes, faEllipsisH,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.css';
import Menu from './Menu.jsx';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu(bool) {
    this.setState({ open: bool });
  }

  render() {
    const { open } = this.state;
    return (
      <div className={styles.header}>
        {open === false ? (
          <button
            className={styles.ellipsis}
            onClick={this.openMenu.bind(this, true)}
            type="button"
            tabIndex={0}
            aria-label="menu"
          >
            <FontAwesomeIcon icon={faEllipsisH} />
          </button>
        ) : <Menu openMenu={this.openMenu} />}
      </div>
    );
  }
}

export default Header;
