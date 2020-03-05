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
    const {setSchoolId, openSchoolId, id} = this.props;
    const {visible} = this.state;
    if (visible && id === openSchoolId) {
      setSchoolId(0);
    } else {
      setSchoolId(id);
    }
  }
  render() {
    const {visible, school, title, text} = this.props;
    return (
      <>
        <div className={visible ? openCover : closedCover} onClick={this.toggle}>
          <span className={schoolName}>
            {school}
          </span>
          <span className={button}>
            {visible ? '-' : '+'}
          </span>
        </div>
        <div className={visible ? openText : closedText}>
          <div>
            {title}
          </div>
          <div>
            <br />
            {text}
          </div>
        </div>
      </>
    )
  }
}

export default Education;