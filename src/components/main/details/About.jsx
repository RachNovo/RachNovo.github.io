import React, {Component} from 'react';
import styles, {main} from '../details.css';

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={main}>
        Here's the About section!!
      </div>
    )
  }
}

export default About;