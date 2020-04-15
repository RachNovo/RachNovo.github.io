/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLaptop, faSwimmingPool, faTag, faSwimmer,
} from '@fortawesome/free-solid-svg-icons';
import styles, {
  timelineMain, timelineSide, timelineSymbol, timelineLine, timelineCircle,
  timelineContainer, timelineTitle, timelineDate, timelineText,
} from '../Details.css';

class Experience extends PureComponent {
  render() {
    const {
      symbol, title, date, text, link, id,
    } = this.props;
    return (
      <div className={timelineMain}>
        <div className={timelineSide}>
          <div className={timelineSymbol}>
            <FontAwesomeIcon icon={
              symbol === 'laptop' ? faLaptop
                : symbol === 'pool' ? faSwimmingPool
                  : symbol === 'tag' ? faTag
                    : symbol === 'swimmer' ? faSwimmer : ''
            }
            />
          </div>
          <div className={timelineLine} />
          <div className={timelineCircle} />
        </div>
        <div className={timelineContainer}>
          <div>
            <span className={timelineTitle}>{title}</span>
            <span className={timelineDate}>{date}</span>
          </div>
          <div className={timelineText}>{text}</div>
        </div>
      </div>
    );
  }
}

export default Experience;

Experience.propTypes = {
  id: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
