import React, {Component} from 'react';
import styles, {main, text} from './Intro.css';

class Intro extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={main}>
        <div className={text}>
          Hello! <br/> I'm Rachel :)
        </div>
      </div>
    )
  }
}

export default Intro;