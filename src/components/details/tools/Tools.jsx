/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from '../Details.module.css';

class Tools extends PureComponent {
  render() {
    const { name, toolTip } = this.props;
    return (
      <div className={styles.toolsContainer}>
        <span className={styles.tipText}>{toolTip}</span>
        <span>
          {name}
        </span>
      </div>
    );
  }
}

export default Tools;

Tools.propTypes = {
  name: PropTypes.string.isRequired,
  toolTip: PropTypes.string.isRequired
};
