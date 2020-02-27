import React, {Component} from 'react';
import styles, {main, appTitle, appContainer, appMain, subTitle, appPic, appDescription} from '../../Details.css';

class Application extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {title, githubLink, deployedApp, description, pic, techList} = this.props
    return (
      <div className={appContainer}>
        <div className={appTitle}>
          {title}
        </div>
        <div className={appMain}>
          <span><img className={appPic} src={pic}></img></span>
          <div className={appDescription}>
          {description}
          </div>
        </div>
      </div>
    )
  }
}

export default Application;
