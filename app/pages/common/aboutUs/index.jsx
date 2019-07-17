/* eslint-disable prettier/prettier */
import React from 'react';
import AboutUsContent from './AboutUsContent';

class AboutUsTitle extends React.Component {
  render() {
    return (
      <div className="title">
        <h1 style={{ fontSize: '30px' }}>About Us</h1>
      </div>
    )
  }
}

class AboutUs extends React.Component {
  render() {
    return (
      <div className="aboutUs">
        <AboutUsTitle />
        <AboutUsContent />
      </div>
    )
  }
}

export default AboutUs