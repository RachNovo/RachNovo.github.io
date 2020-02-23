import React, {Component} from 'react';
import styles, {openCover, closedCover, schoolName, openText, closedText, button} from '../../Details.css';

class Education extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.visible
    }
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    console.log('visible ->', this.state.visible, 'id === schoolId?? ->', this.props.id === this.state.openSchoolId);
    if (this.state.visible && this.props.id === this.props.openSchoolId) {
      this.props.setSchoolId(0);
    } else {
      this.props.setSchoolId(this.props.id);
    }
  }
  render() {
    return (
      <>
        <div className={this.props.visible ? openCover : closedCover} onClick={this.toggle}>
          <span className={schoolName}>
            {this.props.school}
          </span>
          <span className={button}>
            {this.props.visible ? '-' : '+'}
          </span>
          {/* Place button here!! */}
          {/***** This doesn't work :( *****/}
        </div>
        <div className={this.props.visible ? openText : closedText}>
          {this.props.text}
        </div>
      </>
    )
  }
}

export default Education;