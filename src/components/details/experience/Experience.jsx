/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptop, faSwimmingPool, faTag, faSwimmer,
} from '@fortawesome/free-solid-svg-icons';
import styles from '../Details.module.css';

class Experience extends PureComponent {
  render() {
    const {
      symbol, title, date, text, link, id,
    } = this.props;
    return (
      <div className={styles.timelineMain}>
        <div className={styles.timelineSide}>
          <div className={styles.timelineSymbol}>
            <FontAwesomeIcon icon={
              symbol === 'laptop' ? faLaptop
                : symbol === 'pool' ? faSwimmingPool
                  : symbol === 'tag' ? faTag
                    : symbol === 'swimmer' ? faSwimmer : ''
            }
            />
          </div>
          <div className={styles.timelineLine} />
          <div className={styles.timelineCircle} />
        </div>
        <div className={styles.timelineContainer}>
          <div>
            <span className={styles.timelineTitle}>{title}</span>
            <span className={styles.timelineDate}>{date}</span>
          </div>
          <div className={styles.timelineText}>{text}</div>
        </div>
      </div>
    );
  }
}

export default Experience;

Experience.propTypes = {
  id: PropTypes.number.isRequired,
  symbol: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
