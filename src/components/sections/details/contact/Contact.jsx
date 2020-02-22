import React, {Component} from 'react';
import styles, {main, contactPic, contactText} from '../../Details.css';

class Contact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={main}>
        <div className={contactPic}>
          {this.props.pic}
        </div>
        <div className={contactText}>
          {this.props.text}
        </div>
      </div>
    )
  }
}

export default Contact;