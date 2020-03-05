import React, {Component} from 'react';
import styles, {main} from './Details.css';

import About from './About.jsx';
import SkillList from './skills/SkillList.jsx';
import ApplicationList from './applications/ApplicationList.jsx';
import EducationList from './education/EducationList.jsx';
// import ExperienceList from './experience/ExperienceList.jsx';

class Details extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={main}>
        <About />
        <SkillList />
        <ApplicationList />
        <EducationList />
        {/* <ExperienceList /> */}
      </div>
    )
  }
}

export default Details;