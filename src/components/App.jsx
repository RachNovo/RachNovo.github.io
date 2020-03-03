import React, {Component} from 'react';
import Sidebar from './sections/Sidebar.jsx';
import Intro from './sections/Intro.jsx';
import LandingPage from './sections/LandingPage.jsx';
import Details from './sections/Details.jsx';


class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(`Hey there! I hope you find what you're looking for in here. :P If you have any feedback I would love to hear it, shoot me an email!`);
    return (
      <div>
        {/* <Sidebar /> */}
        {/* <Intro /> */}
        <LandingPage />
        <Details />
      </div>
    )
  }
}

export default App;