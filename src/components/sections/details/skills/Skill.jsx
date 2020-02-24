import React, {Component} from 'react';
import styles, {main, skillContainer, proficient, intermediate, basic} from '../../Details.css';

class Skill extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const name = this.props.name;
    const level = this.props.level;
    return (
      <div className={skillContainer}>
        <span>
          {this.props.name}
          <span className={level === 'Proficient' ? proficient : level === 'Intermediate' ? intermediate : basic}></span>
        </span>
      </div>
    )
  }
}

export default Skill;