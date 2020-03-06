/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import styles, {
  openCover, closedCover, schoolName, openText, closedText, educationButton,
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
      school, title, text,
    } = this.props;
    const { visible } = this.state;
    return (
      <>
        <div tabIndex={0} role="button" className={visible ? openCover : closedCover} onClick={this.toggle} onKeyUp={this.toggle}>
          <span className={schoolName}>
            {school}
          </span>
          <span className={educationButton}>
            {visible ? <FontAwesomeIcon icon={faMinus} /> : <FontAwesomeIcon icon={faPlus} />}
          </span>
        </div>
        <div className={visible ? openText : closedText}>
          <div>
            {title}
          </div>
          <div>
            <br />
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
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
