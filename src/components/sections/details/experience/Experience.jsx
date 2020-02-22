import React, {Component} from 'react';
import styles, {main, experienceLine, experienceContentBox, roleTitle, date, text} from '../../Details.css';

class Experience extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={main}>
        <div className={experienceLine}>

        </div>
        <div className={experienceContentBox}>
          <div className={roleTitle}>
            {this.props.title}
          </div>
          <div className={date}>
            {this.props.date}
          </div>
          <div className={text}>
            {this.props.text}
          </div>
        </div>
      </div>
    )
  }
}

export default Experience;