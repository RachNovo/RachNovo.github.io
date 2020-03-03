import React, {Component} from 'react';
import styles, {main, title} from '../../Details.css';
import Education from './Education.jsx';
import education from './education.js';

class EducationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSchoolId: 1
    }
    this.educationRef = React.createRef();
    this.setSchoolId = this.setSchoolId.bind(this);
  }
  setSchoolId(id) {
    this.setState({openSchoolId: id})
  }
  render() {
    return (
      <div className={main} ref={this.educationRef}>
        <div className={title}>
          Education
        </div>
        <div>
          {education.map((el, i) => <Education
            school={el.school}
            date={el.date}
            text={el.text}
            id={el.id}
            key={i}
            visible={this.state.openSchoolId === el.id ? true : false}
            setSchoolId={this.setSchoolId}
            toggle={this.toggle}
          />)}
        </div>
      </div>
    )
  }
}

export default EducationList;