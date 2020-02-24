import React, {Component} from 'react';
import styles, {contact, contactPic, contactTitle, contactText} from '../../Details.css';

class Contact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={contact}>
        {/* <img className={contactPic} src={this.props.pic}></img> */}
        <div className={contactTitle}>
          {this.props.title}
        </div>
        <div className={contactText}>
          {this.props.text}
        </div>
      </div>
    )
  }
}

export default Contact;