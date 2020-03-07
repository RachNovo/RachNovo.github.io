/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
import styles, { title } from '../Details.css';
import Education from './Education.jsx';
import education from './education.js';

class EducationList extends PureComponent {
  render() {
    const openSchoolId = this.state;
    return (
      <div id="education">
        <div className={title}>
          Education
        </div>
        <div>
          {education.map((el) => (
            <Education
              school={el.school}
              date={el.date}
              title={el.title}
              text={el.text}
              key={el.id}
              id={el.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default EducationList;
