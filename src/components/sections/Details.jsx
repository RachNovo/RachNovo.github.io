import React, {Component} from 'react';
import About from './details/About.jsx';
import Skills from './details/Skills.jsx';
import Applications from './details/applications/Applications.jsx';
import ExperienceList from './details/experience/ExperienceList.jsx';
import ContactList from './details/contact/ContactList.jsx';
import apps from './details/applications/apps.js';
import experiences from './details/experience/experiences.js';
import contacts from './details/contact/contacts.js';

class Details extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <About />
        <Skills />
        <Applications apps={apps}/>
        <ExperienceList experiences={experiences}/>
        <ContactList contacts={contacts}/>
      </div>
    )
  }
}

export default Details;