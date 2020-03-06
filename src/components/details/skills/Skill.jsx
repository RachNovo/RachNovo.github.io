/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles, {
  skillContainer, proficient, intermediate, basic,
} from '../Details.css';

class Skill extends PureComponent {
  render() {
    const { name, level } = this.props;
    return (
      <div className={skillContainer}>
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
  level: PropTypes.string.isRequired,
};
