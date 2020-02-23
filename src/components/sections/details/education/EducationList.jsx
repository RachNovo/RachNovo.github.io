import React, {Component} from 'react';
import styles, {main, title} from '../../Details.css';
import Education from './Education.jsx';

class EducationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openSchoolId: 0,
    }
    this.setSchoolId = this.setSchoolId.bind(this);
  }
  setSchoolId(id) {
    this.setState({openSchoolId: id})
  }
  render() {
    return (
      <div className={main}>
        <div className={title}>
          Education
        </div>
        <div>
          {this.props.education.map((el, i) => <Education
            school={el.school}
            date={el.date}
            text={el.text}
            id={el.id}
            key={i}
            visible={this.state.openSchoolId === el.id ? true : false}
            setSchoolId={this.setSchoolId}
          />)}
        </div>
      </div>
    )
  }
}

export default EducationList;