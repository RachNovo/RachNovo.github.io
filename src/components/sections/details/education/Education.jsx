import React, {Component} from 'react';
import styles, {date, educationCoverContainer, schoolName, educationButton, educationTextContainer} from '../../Details.css';

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.visible
    }
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    if (this.state.visible) {
      this.props.setSchoolId(0);
    } else {
      this.props.setSchoolId(this.props.id);
    }
    this.setState({visible: !this.state.visible});
  }
  render() {
    return (
      <>
        <div className={educationCoverContainer} onClick={this.toggle}>
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

export default Education;