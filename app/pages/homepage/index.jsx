/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import AboutUs from '../common/aboutUs';
import ContactUs from './ContactUs';
import Header from './header';
import JoinusComponent from './JoinusComponent';
import Banner from '../common/banner';
import AlumniList from './Alumni/AlumniList';
import PreviousHistory from '../previoushistory/PreviousHistory';
import NextEventComponent from './NextEvent';
import nextEvent from './NextEvent/nextEvent.json';

export default class HomePageContainer extends Component {
  render() {
    return (
      <div className="homepage-div">
        <Header />
        <Banner />
        <AboutUs />
        <AlumniList />
        <NextEventComponent nextEvent={nextEvent.event} />
        <PreviousHistory />
        <JoinusComponent />
        <ContactUs />
      </div>
    );
  }
}
