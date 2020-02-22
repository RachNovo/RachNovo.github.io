import React, {Component} from 'react';
import styles, {main} from '../Details.css';

class Applications extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={main}>
        Here's the Applications section!!
      </div>
    )
  }
}

export default Applications;