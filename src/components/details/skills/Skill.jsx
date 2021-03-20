/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from '../Details.module.css';

class Skill extends PureComponent {
  render() {
    const { name, toolTip } = this.props;
    return (
      <div className={styles.skillContainer}>
        <span className={styles.tipText}>{toolTip}</span>
        <span>
          {name}
        </span>
      </div>
    );
  }
}

export default Skill;

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  toolTip: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
};
