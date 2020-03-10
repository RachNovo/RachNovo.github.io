/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import styles, { header, section } from './Header.css';

function Header() {
  return (
    <div className={header}>
      <a href="#aboutSection"><div className={section}>About</div></a>
      <a href="#skillsSection"><div className={section}>Skills</div></a>
      <a href="#applicationsSection"><div className={section}>Applications</div></a>
      <a href="#educationSection"><div className={section}>Education</div></a>
      <a href="#volunteeringSection"><div className={section}>Volunteering</div></a>
    </div>
  );
}

export default Header;
