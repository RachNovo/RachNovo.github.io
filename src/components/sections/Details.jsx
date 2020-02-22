import React, {Component} from 'react';
import About from './details/About.jsx';
import Skills from './details/Skills.jsx';
import Applications from './details/Applications.jsx';
import WorkExperience from './details/WorkExperience.jsx';
import Contact from './details/Contact.jsx';
import apps from './details/apps.js';
import experiences from './details/experiences.js';

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