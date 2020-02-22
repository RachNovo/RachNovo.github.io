import React, {Component} from 'react';
import styles, {contactPic, contactText} from '../../Details.css';

class Contact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <img className={contactPic} src={this.props.pic}></img>
        <div className={contactText}>
          {this.props.text}
        </div>
      </>
    )
  }
}

export default Contact;