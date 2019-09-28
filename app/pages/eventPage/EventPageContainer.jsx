import React, { Component } from 'react';
import Header from '../homepage/header';
import PassedEvent from './EventPageTile';

export default class EventsPageContainer extends Component {
  render() {
    return (
      <div>
        <Header />
        <PassedEvent />
      </div>
    );
  }
}
