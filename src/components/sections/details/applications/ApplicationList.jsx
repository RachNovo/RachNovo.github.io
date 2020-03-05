import React, {Component} from 'react';
import styles, {main, title} from '../../Details.css';
import Application from './Application.jsx';
import applications from './applications.js';

class ApplicationList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={main} id={'applications'}>
        <div className={title}>
          Recent Work
        </div>
        <div>
          {applications.map((el, i) => <Application
            title={el.title}
            githubLink={el.githubLink}
            deployedApp={el.deployedApp}
            description={el.description}
            pic={el.pic}
            techList={el.techList}
            key={i}
            />)}
        </div>
      </div>
    )
  }
}

export default ApplicationList;