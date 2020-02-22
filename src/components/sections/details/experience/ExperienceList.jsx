import React, {Component} from 'react';
import styles, {main, title} from '../../Details.css';
import Experience from './Experience.jsx';

class ExperienceList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={main}>
        <div className={title}>
          Work Experience
        </div>
        {this.props.experiences.map((el, i) => <Experience
          title={el.title}
          date={el.date}
          text={el.text}
          key={i}
        />)}
      </div>
    )
  }
}

export default ExperienceList;