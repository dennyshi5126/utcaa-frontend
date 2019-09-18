/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import AboutUs from '../common/aboutUs';
import ContactUs from './ContactUs';
import Header from './header';
import JoinusComponent from './JoinusComponent';
import Banner from '../common/banner';
import PreviousHistory from '../previoushistory/PreviousHistory';

export default class HomePageContainer extends Component {
  render() {
    return (
      <div className="homepage-div">
        <Header />
        <Banner />
        <AboutUs />
        <PreviousHistory />
        <JoinusComponent />
        <ContactUs />
      </div>
    );
  }
}
