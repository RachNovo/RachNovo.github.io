/* eslint-disable react/no-did-update-set-state */
/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import styles from '../Details.module.css';

class Education extends PureComponent {
  constructor(props) {
    super(props);
    const { allOpen } = this.props;
    this.state = {
      visible: allOpen,
    };
  }

  componentDidUpdate(prevProps) {
    const { allOpen } = this.props;
    if (allOpen !== prevProps.allOpen) {
      this.setState({ visible: allOpen });
    }
  }

  render() {
    const {
      school, date, title, text, id, toggle,
    } = this.props;
    const { visible } = this.state;
    return (
      <>
        <div tabIndex={0} role="button" className={visible ? styles.openCover : styles.closedCover} onClick={toggle.bind(this)} onKeyUp={toggle.bind(this)}>
          <span className={styles.schoolName}>
            {school}
          </span>
          <span className={visible ? styles.openDate : styles.closedDate}>
            {date}
          </span>
          <span className={styles.edButton}>
            {visible ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />}
          </span>
        </div>
        <div className={visible ? styles.openText : styles.closedText}>
          <div className={styles.edTitle}>
            {title}
          </div>
          <div>
            {text}
          </div>
        </div>
      </>
    );
  }
}

export default Education;

Education.propTypes = {
  allOpen: PropTypes.bool.isRequired,
  school: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  toggle: PropTypes.func.isRequired,
};
