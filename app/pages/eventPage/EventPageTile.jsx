import React, { Component } from 'react';
import './EventPageTile.scss';
import EventList from '../PreviousEvent/EventList';

class PassedEvent extends Component {
  render() {
    return (
      <div>
        <div className="eventContainer">
          <div className="eventTitle">往期活动</div>
        </div>
        <div>
          <EventList />
        </div>
      </div>
    );
  }
}
export default PassedEvent;
