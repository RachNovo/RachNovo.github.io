import React, {Component} from 'react';
import About from './details/About.jsx';
import Skills from './details/Skills.jsx';
import Applications from './details/applications/Applications.jsx';
import WorkExperience from './details/experience/WorkExperience.jsx';
import Contact from './details/Contact.jsx';
import apps from './details/applications/apps.js';
import experiences from './details/experience/experiences.js';

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
        <WorkExperience experiences={experiences}/>
        <Contact />
      </div>
    )
  }
}

export default Details;