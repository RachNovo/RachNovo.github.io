import React, {Component} from 'react';
import styles, {contact, contactPic, contactTitle, contactText} from '../../Details.css';

class Contact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {title, text} = this.props;
    return (
      <div className={contact}>
        {/* <img className={contactPic} src={this.props.pic}></img> */}
        <div className={contactTitle}>
          {title}
        </div>
        <div className={contactText}>
          {text}
        </div>
      </div>
    )
  }
}

export default Contact;