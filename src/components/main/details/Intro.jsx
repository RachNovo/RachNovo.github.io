import React, {Component} from 'react';
import styles, {main} from '../details.css';

class Intro extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={main}>
        Here's the Intro section!!
      </div>
    )
  }
}

export default Intro;