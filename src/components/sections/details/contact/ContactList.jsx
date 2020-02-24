import React, {Component} from 'react';
import styles, {main, title, contactList} from '../../Details.css';
import Contact from './Contact.jsx';

class ContactList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={main}>
        <div className={title}>
          Contact
        </div>
        <div className={contactList}>
          {this.props.contacts.map((el, i) => <Contact
            pic={el.pic}
            text={el.text}
            key={i}
          />)}
        </div>
      </div>
    )
  }
}

export default ContactList;