import React, {Component} from 'react';
import styles, {appTitle, appContainer, appMain, subTitle, appPic, appDescription, appTech, appButton} from '../../Details.css';

class Application extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {title, githubLink, deployedApp, description, pic, techList} = this.props
    return (
      <div className={appContainer}>
        <img className={appPic} src={pic}></img>
        <div className={appMain}>
          <div className={appTitle}>
            {title}
          </div>
          <div className={appTech}>
            {techList.join(' | ')}
          </div>
          <div className={appDescription}>
          {description}
          </div>
          <div className={appButton}>
            View
          </div>
          <div className={appButton}>
            Github
          </div>
        </div>
      </div>
    )
  }
}

export default Application;
