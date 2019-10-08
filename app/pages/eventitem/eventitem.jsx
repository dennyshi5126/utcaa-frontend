import React, { Component } from 'react';
import './eventitem.scss';

export default class EventItem extends Component {
  render() {
    if (this.props.url.include('weixin')) {
      return (
        <div className="eventitem">
          <a href={this.props.url}>
            <img src={this.props.imageScr} />
            {this.props.title}
          </a>
        </div>
      );
    }
    return (
      <div className="eventitem">
        <Link to={this.props.url}>
          <img src={this.props.imageScr} />
          {this.props.title}
        </Link>
      </div>
    );
  }
}
