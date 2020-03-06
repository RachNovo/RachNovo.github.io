/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import styles, { main } from './Details.css';

import About from './About.jsx';
import SkillList from './skills/SkillList.jsx';
import ApplicationList from './applications/ApplicationList.jsx';
import EducationList from './education/EducationList.jsx';
import VolunteeringList from './volunteering/VolunteeringList.jsx';
// import ExperienceList from './experience/ExperienceList';

function Details() {
  return (
    <div className={main}>
      <About />
      <SkillList />
      <ApplicationList />
      <EducationList />
      <VolunteeringList />
      {/* <ExperienceList /> */}
    </div>
  );
}

export default Details;
