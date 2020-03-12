/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles, {
  skillContainer, tipText, proficient, intermediate, basic,
} from '../Details.css';

class Skill extends PureComponent {
  render() {
    const { name, toolTip, level } = this.props;
    return (
      <div className={skillContainer}>
        <span className={tipText}>{toolTip}</span>
        <span>
          {name}
          {/* <span
            className={
              level === 'Proficient' ? proficient : level === 'Intermediate' ? intermediate : basic
            }
          /> */}
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
