import React, {Component} from 'react';
import About from './details/About.jsx';
import Skills from './details/Skills.jsx';

import ApplicationList from './details/applications/ApplicationList.jsx';
import applications from './details/applications/applications.js';

import ExperienceList from './details/experience/ExperienceList.jsx';
import experiences from './details/experience/experiences.js';

import ContactList from './details/contact/ContactList.jsx';
import contacts from './details/contact/contacts.js';

import EducationList from './details/education/EducationList.jsx';
import education from './details/education/education.js';

class Details extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <About />
        <Skills />
        <ApplicationList applications={applications}/>
        <EducationList education={education}/>
        <ExperienceList experiences={experiences}/>
        <ContactList contacts={contacts}/>
      </div>
    )
  }
}

export default Details;