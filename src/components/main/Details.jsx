import React, {Component} from 'react';
import styles, {main} from '../App.css';
import Intro from './details/Intro.jsx';
import About from './details/About.jsx';
import Skills from './details/Skills.jsx';
import Applications from './details/Applications.jsx';
import WorkExperience from './details/WorkExperience.jsx';
import Contact from './details/Contact.jsx';

class Details extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={main}>
        <Intro />
        <About />
        <Skills />
        <Applications />
        <WorkExperience />
        <Contact />
      </div>
    )
  }
}

export default Details;