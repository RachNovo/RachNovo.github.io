import React, {Component} from 'react';
import styles, {main} from './App.css';
import Sidebar from './main/Sidebar.jsx';
import Details from './main/Details.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={main}>
        <Sidebar />
        <Details />
      </div>
    )
  }
}

export default App;