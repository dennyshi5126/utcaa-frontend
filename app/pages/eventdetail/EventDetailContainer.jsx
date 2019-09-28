import React, { Component } from 'react';
import EventDetailBanner from './EventDetailBanner';
import dataA from './dataA.json';
import dataB from './dataB.json';

export default class EventDetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: '',
      title: '',
    };
  }

  componentDidMount() {
    if (this.props.params.eventId === 'aaa') {
      this.setState({ src: dataA.data.src, title: dataA.data.title });
    } else if (this.props.params.eventId === 'bbb') {
      this.setState({ src: dataB.data.src, title: dataB.data.title });
    }
  }
  render() {
    const { src, title } = this.state;
    return (
      <div>
        <EventDetailBanner title={title} backgroundSrc={src} />
      </div>
    );
  }
}
