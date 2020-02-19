import React, {Component} from 'react';
import styles, {main} from './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={main}>
        Hello World!
      </div>
    )
  }
}

export default App;