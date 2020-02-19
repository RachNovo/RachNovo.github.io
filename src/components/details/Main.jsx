import React, {Component} from 'react';
import styles, {main} from './details.css';

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={main}>
        Here's the Main section!!
      </div>
    )
  }
}

export default Main;