import React, { Component } from 'react';
import './EventDetailBanner.scss';
import { Link } from 'react-router';

export default class EventDetailBanner extends Component {
  render() {
    const containerBackground = { backgroundImage: `url(${this.props.backgroundSrc})` };
    return (
      <div className="eventDetailBanner">
        <div className="eventDetailBannerContianer" style={containerBackground} />
        <div className="eventDetailBannerFull">
          <div className="eventDetailBannerTitleContentContainer">
            <h1 className="eventDetailBannerTitle">{this.props.title}</h1>;
          </div>
        </div>
        <div className="eventDetailBannerOverlay" />
        <div className="eventDetailBannerScroll">
          <Link to="">
            <span className="fa fa-angle-down scroll-down-button" />
          </Link>
        </div>
      </div>
    );
  }
}
