/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import styles, { header, section } from './Header.css';

function Header() {
  return (
    <div className={header}>
      <a href="#about"><div className={section}>About</div></a>
      <a href="#skills"><div className={section}>Skills</div></a>
      <a href="#applications"><div className={section}>Applications</div></a>
      <a href="#education"><div className={section}>Education</div></a>
      <a href="#volunteering"><div className={section}>Volunteering</div></a>
    </div>
  );
}

export default Header;
