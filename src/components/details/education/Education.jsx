/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import styles, {
  openCover, closedCover, schoolName, openDate, closedDate, openText, closedText, edButton, edTitle,
} from '../Details.css';

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { visible } = this.state;
    this.setState({ visible: !visible });
  }

  render() {
    const {
      school, date, title, text, id,
    } = this.props;
    const { visible } = this.state;
    return (
      <>
        <div tabIndex={0} role="button" className={visible ? openCover : closedCover} onClick={this.toggle} onKeyUp={this.toggle}>
          <span className={schoolName}>
            {school}
          </span>
          <span className={visible ? openDate : closedDate}>
            {date}
          </span>
          <span className={edButton}>
            {visible ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />}
          </span>
        </div>
        <div className={visible ? openText : closedText}>
          <div className={edTitle}>
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
  school: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
