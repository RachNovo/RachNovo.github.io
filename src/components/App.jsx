import React, {Component} from 'react';
import LandingPage from './structure/LandingPage.jsx';
import Details from './details/Details.jsx';
import Footer from './structure/Footer.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(`Hey there! I hope you find what you're looking for in here. :P If you have any feedback I would love to hear it, shoot me an email!`);
    return (
      <div>
        <LandingPage />
        <Details />
        <Footer />
      </div>
    )
  }
}

export default App;