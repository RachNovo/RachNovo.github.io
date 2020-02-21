import React, {Component} from 'react';
import styles, {main} from '../details.css';

class Contact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={main}>
        Here's the Contact section!!
      </div>
    )
  }
}

export default Contact;