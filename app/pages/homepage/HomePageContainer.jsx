/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import AboutUs from '../common/aboutUs';
import ContactUs from './ContactUs';
import Header from './header';
import JoinusComponent from './JoinusComponent';
import Banner from '../common/banner';

export default class HomePageContainer extends Component {
  render() {
    return (
      <div>
        <p>This is homepage</p>
        <Banner />
        <AboutUs />
        <JoinusComponent />
        <ContactUs />
        <Header />
      </div>
    );
  }
}
