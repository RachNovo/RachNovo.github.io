import React, {Component} from 'react';
import styles, {main} from '../../Details.css';
import Education from './Education.jsx';

class EducationList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={main}>
        <div className={title}>
          Education
        </div>
        <div>
          {this.props.education.map((el, i) => <Education
            school={el.school}
            date={el.date}
            text={el.text}
            key={i}
          />)}
        </div>
      </div>
    )
  }
}