import React, {Component} from 'react';
import About from './details/About.jsx';

import SkillList from './details/skills/SkillList.jsx';
import ApplicationList from './details/applications/ApplicationList.jsx';
// import ExperienceList from './details/experience/ExperienceList.jsx';
// import ContactList from './details/contact/ContactList.jsx';
import EducationList from './details/education/EducationList.jsx';

class Details extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <About aboutRef={this.props.aboutRef}/>
        <SkillList skillsRef={this.props.skillsRef}/>
        <ApplicationList applicationsRef={this.props.applicationsRef}/>
        <EducationList educationRef={this.props.educationRef}/>
        {/* <ExperienceList /> */}
        {/* <ContactList /> */}
      </div>
    )
  }
}

export default Details;