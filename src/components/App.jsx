import React, {Component} from 'react';
import Sidebar from './sections/Sidebar.jsx';
import Intro from './sections/Intro.jsx';
import Details from './sections/Details.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Sidebar />
        <Intro />
        <Details />
      </div>
    )
  }
}

export default App;