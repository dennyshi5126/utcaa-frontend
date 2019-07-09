import React, { Component } from 'react';
import ContactUs from './ContactUs';
import Header from './header';

export default class HomePageContainer extends Component {
  render() {
    return (
      <div>
        <div>This is homepage</div>
        <ContactUs />
        <Header />
      </div>
    );
  }
}
