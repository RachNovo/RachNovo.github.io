/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faBriefcaseMedical } from '@fortawesome/free-solid-svg-icons';
import styles, {
  volMain, volSide, volSymbol, volLine, volCircle, volContainer, volTitle, volDate, volText,
} from '../Details.css';

class Volunteering extends PureComponent {
  render() {
    const {
      symbol, title, date, text, link, id,
    } = this.props;
    return (
      <div className={volMain}>
        <div className={volSide}>
          <div className={volSymbol}>
            <FontAwesomeIcon icon={symbol === 'faComments' ? faComments : faBriefcaseMedical} />
          </div>
          <div className={volLine} />
          <div className={volCircle} />
        </div>
        <div className={volContainer}>
          <div>
            <span className={volTitle}>{title}</span>
            <span className={volDate}>{date}</span>
          </div>
          <div className={volText}>{text}</div>
        </div>
      </div>
    );
  }
}

export default Volunteering;

Volunteering.propTypes = {
  id: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
