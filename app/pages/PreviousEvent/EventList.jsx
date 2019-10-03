import React, { Component } from 'react';
import EventItem from './eventItem';
import events from './events.json';
import './EventList.scss';

class EventList extends Component {
  render() {
    return (
      <div className="eventItems">
        {events.map((eventDetail, index) => {
          return (
            <div className="eventItem" key={index}>
              <EventItem title={eventDetail.title} imgSrc={eventDetail.imgSrc} url={eventDetail.url} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default EventList;
