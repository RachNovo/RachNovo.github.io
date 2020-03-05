import React, {Component} from 'react';
import styles, {title} from '../Details.css';
import Experience from './Experience.jsx';
import experiences from './experiences.js';

class ExperienceList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className={title}>
          Work Experience
        </div>
        {experiences.map((el, i) => <Experience
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