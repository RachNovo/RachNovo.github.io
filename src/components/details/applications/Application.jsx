import React, {Component} from 'react';
import styles, {appTitle, appContainer, appMain, appPic, appDescription, appTech, appButton} from '../Details.css';

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
            <a href={deployedApp} target='_blank'>View</a>
          </div>
          <div className={appButton}>
            <a href={githubLink} target='_blank'>Github</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Application;
