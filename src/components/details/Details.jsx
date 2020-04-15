/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import styles, { main } from './Details.css';

import About from './About.jsx';
import SkillList from './skills/SkillList.jsx';
import ExperienceList from './experience/ExperienceList.jsx';
import EducationList from './education/EducationList.jsx';
import ApplicationList from './applications/ApplicationList.jsx';
import VolunteeringList from './volunteering/VolunteeringList.jsx';

function Details() {
  return (
    <div className={main}>
      <About />
      <SkillList />
      <ExperienceList />
      <EducationList />
      <ApplicationList />
      <VolunteeringList />
    </div>
  );
}

export default Details;
