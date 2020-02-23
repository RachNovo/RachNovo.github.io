import React, {Component} from 'react';
import styles, {date, openCover, closedCover, schoolName, openText, closedText} from '../../Details.css';

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
      this.setState({visible: !this.state.visible});
    }
  }
  render() {
    return (
      <>
        <div className={this.state.visible ? openCover : closedCover} onClick={this.toggle}>
          <div className={schoolName}>
            {this.props.school}
          </div>
          <div className={date}>
            {this.props.date}
          </div>
          {/* Place button here!! */}
          {/***** This doesn't work :( *****/}
        <div>{this.state.visible ? '-' : '+'}</div>
        </div>
        <div className={this.state.visible ? openText : closedText}>
          {this.props.text}
        </div>
      </>
    )
  }
}

export default Education;