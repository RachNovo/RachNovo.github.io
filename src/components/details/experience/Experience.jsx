import React, {Component} from 'react';
import styles, {experienceLine, experienceContentBox, roleTitle, date, experienceText} from '../Details.css';

class Experience extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {title, date, text} = this.props;
    return (
      <>
        <div className={experienceLine}>
        </div>
        <div className={experienceContentBox}>
          <div className={roleTitle}>
            {title}
          </div>
          <div className={date}>
            {date}
          </div>
          <div className={experienceText}>
            {text}
          </div>
        </div>
      </>
    )
  }
}

export default Experience;