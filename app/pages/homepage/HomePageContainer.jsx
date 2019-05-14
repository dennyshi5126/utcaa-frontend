import React, { Component } from 'react';
import ContactUs from './ContactUs';

export default class HomePageContainer extends Component {
  render() {
    return (
      <div>
        <div>This is homepage</div>
        <ContactUs />
      </div>
    );
  }
}
