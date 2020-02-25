import React, {Component} from 'react';
import styles, {main, title, appContainer, appMain, subTitle, appPic, appDescription} from '../../Details.css';

class Application extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {title, githubLink, deployedApp, description, pic, techList} = this.props
    return (
      <div className={appContainer}>
        {title}
        <div className={appMain}>
          <img className={appPic} src={pic}></img>
          <div className={appDescription}>
          {/* {description} */}
          </div>
        </div>
      </div>
    )
  }
}

export default Application;
