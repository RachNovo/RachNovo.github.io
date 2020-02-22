import React, {Component} from 'react';
import styles, {main, title, appTitle, contentContainer, appPic, detailsContainter, AppTechList, AppDescription} from '../../Details.css';

class Application extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className={appTitle}>
          {this.props.title}
        </div>
        <div className={contentContainer}>
          <img className={appPic} src={this.props.pic}></img>
          <div className={AppTechList}>
            {this.props.techList}
          </div>
          <div className={AppDescription}>
            {this.props.description}
          </div>
        </div>
      </>
    )
  }
}

export default Application;
