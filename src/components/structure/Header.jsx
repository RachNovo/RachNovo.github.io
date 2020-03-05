import React, {Component} from 'react';
import styles, {header, section} from './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={header}>
        <a href='#about'><div className={section}>About</div></a>
        <a href='#skills'><div className={section}>Skills</div></a>
        <a href='#applications'><div className={section}>Applications</div></a>
        <a href='#education'><div className={section}>Education</div></a>
      </div>
    )
  }
}

export default Header;