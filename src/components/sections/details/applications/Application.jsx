import React, {Component} from 'react';
import styles, {main, title, appContainer} from '../../Details.css';

class Application extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {title, githubLink, deployedApp, description, pic, techList} = this.props
    return (
      <div className={appContainer}>
        hello
      </div>
    )
  }
}

export default Application;
