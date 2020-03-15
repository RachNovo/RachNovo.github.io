/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Education from './Education.jsx';
import education from './education.js';
import styles, { title, collapseOrExpand } from '../Details.css';

class EducationList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allOpen: false,
    };
    this.expandAll = this.expandAll.bind(this);
  }

  expandAll() {
    const { allOpen } = this.state;
    this.setState({ allOpen: !allOpen });
  }

  toggle() {
    const { visible } = this.state;
    this.setState({ visible: !visible });
  }

  render() {
    const { allOpen } = this.state;
    return (
      <div id="educationSection">
        <div className={title}>
          Education
        </div>
        <span tabIndex={0} role="button" className={collapseOrExpand} onClick={this.expandAll} onKeyUp={this.expandAll}>
          {allOpen ? '(Collapse All)' : '(Expand All)'}
        </span>
        <div>
          {education.map((el) => (
            <Education
              school={el.school}
              date={el.date}
              title={el.title}
              text={el.text}
              key={el.id}
              id={el.id}
              toggle={this.toggle}
              allOpen={allOpen}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default EducationList;
