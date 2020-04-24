/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
import styles, { title } from '../Details.css';
import Experience from './Experience.jsx';
import experiences from './experiences.js';

class ExperienceList extends PureComponent {
  render() {
    return (
      <div>
        <div id="experienceSection" />
        <div className={title}>
          Work Experience
        </div>
        {experiences.map((el) => (
          <Experience
            title={el.title}
            date={el.date}
            text={el.text}
            key={el.id}
            id={el.id}
            symbol={el.symbol}
            link={el.link}
          />
        ))}
      </div>
    );
  }
}

export default ExperienceList;
