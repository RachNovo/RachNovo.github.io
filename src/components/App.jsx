// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import LandingPage from './structure/landingPage/LandingPage.jsx';
import Details from './details/Details.jsx';
import Footer from './structure/Footer.jsx';

const App = () => {
  console.log('Hey there! I hope you find what you\'re looking for in here :P');
  return (
    <div>
      <LandingPage />
      <Details />
      <Footer />
    </div>
  );
};

export default App;
