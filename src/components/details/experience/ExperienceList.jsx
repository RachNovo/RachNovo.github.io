/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
import styles, { title } from '../Details.css';
import Experience from './Experience.jsx';
import experiences from './experiences.js';

class ExperienceList extends PureComponent {
  render() {
    return (
      <div>
        <div className={title}>
          Work Experience
        </div>
        {experiences.map((el) => (
          <Experience
            title={el.title}
            date={el.date}
            text={el.text}
            key={el.id}
          />
        ))}
      </div>
    );
  }
}

export default ExperienceList;
