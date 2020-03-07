/* eslint-disable no-unused-vars */
import React, { PureComponent } from 'react';
import styles, { title } from '../Details.css';
import Application from './Application.jsx';
import applications from './applications.js';

class ApplicationList extends PureComponent {
  render() {
    return (
      <div id="applications">
        <div className={title}>
          Recent Work
        </div>
        <div>
          {applications.map((el) => (
            <Application
              title={el.title}
              githubLink={el.githubLink}
              deployedApp={el.deployedApp}
              description={el.description}
              pic={el.pic}
              techList={el.techList}
              key={el.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ApplicationList;