import React, {Component} from 'react';
import styles, {header, section, hover} from './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  hoverTrigger(boolean) {
    this.setState({hover: boolean});
  }
  render() {
    return (
      <div className={header}>
        <div className={section} >About</div>
        <div className={section} >Skills</div>
        <div className={section} >Applications</div>
        <div className={section} >Education</div>
      </div>
    )
  }
}

export default Header;