import React, {Component} from 'react';
import styles, {main} from './App.css';
import Sidebar from './Sidebar.jsx';
import About from './details/About.jsx';
import Applications from './details/Applications.jsx';
import Contact from './details/Contact.jsx';
import Main from './details/Main.jsx';
import Skills from './details/Skills.jsx';
import WorkExperience from './details/WorkExperience.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={main}>
        <Sidebar />
        <Main />
        <About />
        <Skills />
        <Applications />
        <WorkExperience />
        <Contact />
      </div>
    )
  }
}

export default App;