/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles, {
  experienceLine, experienceContentBox, roleTitle, experienceDate, experienceText,
} from '../Details.css';

class Experience extends PureComponent {
  render() {
    const { title, date, text } = this.props;
    return (
      <>
        <div className={experienceLine} />
        <div className={experienceContentBox}>
          <div className={roleTitle}>
            {title}
          </div>
          <div className={date}>
            {date}
          </div>
          <div className={experienceText}>
            {text}
          </div>
        </div>
      </>
    );
  }
}

export default Experience;

Experience.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
