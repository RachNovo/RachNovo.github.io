import React, {Component} from 'react';
import styles, {main, educationCoverContainer, schoolName, educationButton} from '../../Details.css';

class Education extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className={educationCoverContainer}>
          <div className={schoolName}>
            {this.props.school}
          </div>
          <div className={date}>
            {this.props.date}
          </div>
          {/* Place button here!! */}
          <div className={educationButton}></div>
        </div>
        <div className={educationTextContainer}>
          {this.props.text}
        </div>
      </>
    )
  }
}