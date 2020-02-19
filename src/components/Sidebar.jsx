import React, {Component} from 'react';
import styles, {main} from './Sidebar.css';

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={main}>
        Here's the sidebar!!
      </div>
    )
  }
}

export default Sidebar;