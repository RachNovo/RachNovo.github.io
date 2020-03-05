import React, {Component} from 'react';
import styles, {skillContainer, proficient, intermediate, basic} from '../Details.css';

class Skill extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {name, level} = this.props;
    return (
      <div className={skillContainer}>
        <span>
          {name}
          <span className={level === 'Proficient' ? proficient : level === 'Intermediate' ? intermediate : basic}></span>
        </span>
      </div>
    )
  }
}

export default Skill;