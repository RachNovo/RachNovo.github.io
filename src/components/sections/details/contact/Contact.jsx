import React, {Component} from 'react';
import styles, {main, contactPic, contactText} from '../../Details.css';

class Contact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={main}>
        <img className={contactPic} src={this.props.pic}></img>
        <div className={contactText}>
          {this.props.text}
        </div>
      </div>
    )
  }
}

export default Contact;