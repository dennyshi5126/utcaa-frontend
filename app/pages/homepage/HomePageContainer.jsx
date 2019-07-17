/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import AboutUs from '../common/aboutUs/index';
import ContactUs from './ContactUs';
import Header from './header';


export default class HomePageContainer extends Component {
  render() {
    return (
      <div>
        <p>This is homepage</p>
        <AboutUs />
        <ContactUs />
        <Header />
      </div>
    );
  }
}
